#!/usr/bin/env node
/**
 * Transforms MuukTest-generated specs into clean Playwright tests.
 *
 * Usage:
 *   node scripts/transform-tests.js                  # transforms all test1 + test2 specs
 *   node scripts/transform-tests.js tests/test1/TestSteps_18cb1354.spec.ts  # single file
 */

const fs   = require('fs');
const path = require('path');

// ─── HELPERS ──────────────────────────────────────────────────────────────────

/** Extract balanced content from the first opening paren/bracket found at offset */
function extractBalanced(str, start, open, close) {
  let depth = 0, i = start;
  while (i < str.length) {
    if (str[i] === open)  depth++;
    if (str[i] === close) { depth--; if (depth === 0) return str.slice(start, i + 1); }
    i++;
  }
  return str.slice(start);
}

/** Safely parse JSON – returns null on error */
function tryJSON(s) {
  try { return JSON.parse(s); } catch { return null; }
}

/** Clean element text for use in Playwright locator names */
function cleanText(t) {
  if (!t || t === 'undef' || t === '0') return null;
  // Handle both real newlines and escaped \n sequences, then collapse whitespace
  const cleaned = t.replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned || null;
}

/** Convert raw CSS/XPath selector + metadata into the best Playwright locator expression */
function buildLocator(selectorsArr, tag, inputAttr, text, value) {
  const t   = (tag || '').toLowerCase();
  const txt = cleanText(text) || cleanText(value);
  const inp = (inputAttr || '').toLowerCase();

  // Semantic role locators (most readable, most resilient)
  if (t === 'a' && txt) {
    return `page.getByRole('link', { name: ${JSON.stringify(txt)} })`;
  }
  if (t === 'button' && txt) {
    return `page.getByRole('button', { name: ${JSON.stringify(txt)} })`;
  }
  if (['h1','h2','h3','h4'].includes(t) && txt) {
    return `page.getByRole('heading', { name: ${JSON.stringify(txt)} })`;
  }

  // Placeholder / label
  const placeholderSel = selectorsArr.find(s =>
    /placeholder=['"][^'"]+['"]/.test(s.selector)
  );
  if (placeholderSel) {
    const m = placeholderSel.selector.match(/placeholder=['"]([^'"]+)['"]/);
    if (m) return `page.getByPlaceholder(${JSON.stringify(m[1])})`;
  }

  // Input type shortcuts
  if (t === 'input' && inp === 'email')    return `page.locator('input[type="email"]')`;
  if (t === 'input' && inp === 'password') return `page.locator('input[type="password"]')`;
  if (t === 'input' && inp === 'checkbox') return `page.locator('input[type="checkbox"]')`;
  if (t === 'input' && inp === 'radio')    return `page.locator('input[type="radio"]')`;

  // XPath with normalize-space (has text → semantic)
  const xp = selectorsArr.find(s =>
    (s.selector.startsWith('//') || s.selector.startsWith('(//')) &&
    s.selector.includes('normalize-space')
  );
  if (xp) {
    const locExpr = `page.locator(${JSON.stringify(xp.selector)})`;
    return xp.index > 0 ? `${locExpr}.nth(${xp.index})` : locExpr;
  }

  // Best CSS selector: prefer ones with id, specific attributes, class chains
  const scored = selectorsArr
    .filter(s => !s.selector.startsWith('//'))
    .map(s => {
      let score = 0;
      if (s.selector.includes('#'))          score += 10;
      if (s.selector.includes('['))          score += 5;
      if (s.selector.includes('.'))          score += 3;
      if (s.selector.match(/^[A-Z]+$/))      score -= 5; // bare tag — worst
      return { ...s, score };
    })
    .sort((a, b) => b.score - a.score);

  const best = scored[0] || selectorsArr[0];
  if (!best) return `page.locator('UNKNOWN')`;

  const locExpr = `page.locator(${JSON.stringify(best.selector)})`;
  return best.index > 0 ? `${locExpr}.nth(${best.index})` : locExpr;
}

// ─── STEP BLOCK PARSER ────────────────────────────────────────────────────────

/**
 * Parse raw step metadata from a muukReport.addStepInfo(...) call.
 * Returns an object with all parsed fields.
 */
function parseAddStepInfo(line) {
  const start = line.indexOf('addStepInfo(');
  if (start === -1) return null;
  const inner = extractBalanced(line, start + 'addStepInfo('.length - 1, '(', ')');
  if (!inner) return null;

  // Split top-level args (careful with nested parens/strings)
  const args = [];
  let depth = 0, inStr = false, strChar = '', cur = '';
  for (let i = 1; i < inner.length - 1; i++) {
    const c = inner[i];
    if (!inStr && (c === '"' || c === "'")) { inStr = true; strChar = c; cur += c; continue; }
    if (inStr && c === strChar && inner[i-1] !== '\\') { inStr = false; cur += c; continue; }
    if (!inStr && c === '(') { depth++; cur += c; continue; }
    if (!inStr && c === ')') { depth--; cur += c; continue; }
    if (!inStr && depth === 0 && c === ',') { args.push(cur.trim()); cur = ''; continue; }
    cur += c;
  }
  if (cur.trim()) args.push(cur.trim());

  const stripQuotes = s => {
    s = s.trim();
    if ((s.startsWith("'") && s.endsWith("'")) || (s.startsWith('"') && s.endsWith('"')))
      return s.slice(1, -1);
    return s;
  };

  const type        = stripQuotes(args[0] || '').toLowerCase();
  const stepNum     = parseInt(args[1]) || 0;
  // args[2] = page.url()
  const rawSels     = args[3] ? stripQuotes(args[3]).replace(/\\"/g, '"').replace(/\\'/g, "'") : '[]';
  // args[4] = selectorIndex (unused)
  const elementTag  = stripQuotes(args[5] || '');
  const inputAttr   = stripQuotes(args[6] || '');
  const action      = stripQuotes(args[7] || '').toLowerCase();
  const rawValue    = args[8] ? stripQuotes(args[8]).replace(/\\"/g, '"').replace(/\\'/g, "'") : '{}';
  const rawMeta     = args[9] ? stripQuotes(args[9]).replace(/\\"/g, '"').replace(/\\'/g, "'") : '{}';

  const selectors = tryJSON(rawSels) || [];
  const valueObj  = tryJSON(rawValue) || {};
  const metaObj   = tryJSON(rawMeta) || {};

  return { type, stepNum, selectors, elementTag, inputAttr, action, valueObj, metaObj };
}

/**
 * Parse a MK.xxx(...) call and return its action type + arguments.
 */
function parseMKCall(line) {
  const m = line.match(/MK\.(\w+)\s*\(/);
  if (!m) return null;
  const method = m[1];

  const start = line.indexOf(method + '(', line.indexOf('MK.')) + method.length;
  const inner = extractBalanced(line, start, '(', ')');
  if (!inner) return { method, args: [] };

  // Extract string args safely
  const rawArgs = inner.slice(1, -1);
  const args = [];
  let depth = 0, inStr = false, strChar = '', cur = '';
  for (let i = 0; i < rawArgs.length; i++) {
    const c = rawArgs[i];
    if (!inStr && (c === '`' || c === '"' || c === "'")) { inStr = true; strChar = c; cur += c; continue; }
    if (inStr && c === strChar && rawArgs[i-1] !== '\\') { inStr = false; cur += c; continue; }
    if (!inStr && (c === '(' || c === '[' || c === '{')) { depth++; cur += c; continue; }
    if (!inStr && (c === ')' || c === ']' || c === '}')) { depth--; cur += c; continue; }
    if (!inStr && depth === 0 && c === ',') { args.push(cur.trim()); cur = ''; continue; }
    cur += c;
  }
  if (cur.trim()) args.push(cur.trim());

  return { method, args };
}

/** Strip surrounding quotes / backticks from a value string */
function unquote(s) {
  s = (s || '').trim();
  if (s.startsWith('`') && s.endsWith('`')) return s.slice(1, -1);
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'")))
    return s.slice(1, -1);
  return s;
}

// ─── CODE GENERATOR ──────────────────────────────────────────────────────────

function generateStepCode(meta, mkCall, rawLines) {
  if (!meta) {
    // Only keep auth-cookie and page.evaluate lines; everything else is boilerplate
    return rawLines.filter(l => {
      const t = l.trim();
      return (
        t.includes('context.addCookies') ||
        t.includes('authCookie12Twenty') ||
        (t.includes('page.evaluate') && !t.includes('sessionStorage'))
      );
    });
  }

  const { type, stepNum, selectors, elementTag, inputAttr, action, valueObj, metaObj } = meta;
  const text    = cleanText(metaObj.text) || cleanText(valueObj.text);
  const locator = selectors.length > 0
    ? buildLocator(selectors, elementTag, inputAttr, text, valueObj.value)
    : null;

  // ── sleep ──────────────────────────────────────────────────────────────────
  if (type === 'sleep') {
    if (!mkCall) return [];
    const seconds = parseFloat(unquote(mkCall.args[2])) || 1;
    return [`  await page.waitForTimeout(${seconds * 1000});`];
  }

  // ── waitForLoadState ───────────────────────────────────────────────────────
  if (type === 'waitforloadstate') {
    if (!mkCall) return [];
    const state = unquote(mkCall.args[2]) || 'load';
    return [`  await page.waitForLoadState('${state}');`];
  }

  // ── refresh ────────────────────────────────────────────────────────────────
  if (type === 'refresh') {
    return [`  await page.reload();`];
  }

  // ── snippet ────────────────────────────────────────────────────────────────
  if (type === 'snippet') {
    // Auth cookie injection → emit a clean version
    if (rawLines.some(l => l.includes('authCookie12Twenty'))) {
      return [
        `  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));`,
        `  await context.addCookies(authData.cookies || []);`,
      ];
    }
    let inContextOn = false;
    const result = [];
    for (const l of rawLines) {
      if (isMuukBoilerplate(l.trim())) continue;
      const t = l.trim();
      // Track muuktest callback block start (context.on, page.on console handler)
      if (t.startsWith('context.on(') || t.startsWith("page.on('console'")) {
        inContextOn = true; continue;
      }
      // Skip standalone MuukTest comments
      if (t === '// Monitor the console messages and store them in the array') continue;
      // Track context.on block end
      if (inContextOn) {
        if (t === '});') { inContextOn = false; }
        continue;
      }
      // Skip re-declared global variables (simple literal values, already in varDecls)
      if (/^(let|var)\s+\w+\s*=\s*(`[^`$]*`|'[^']*'|"[^"]*"|\d+)\s*;?$/.test(t)) continue;
      // Skip comments that are MuukTest metadata
      if (t === '// Monitor for new pages') continue;
      // page.evaluate snippets → keep (but not sessionStorage boilerplate)
      if (t.includes('page.evaluate') && !t.includes('sessionStorage')) { result.push(l); continue; }
      // goto is already emitted before the block, skip here
      if (t.includes('page.goto(')) continue;
      // skip screenshots, muuk saves
      if (t.includes('takeScreenshot') || t.includes('muukReport')) continue;
      // skip leftover MK calls
      if (t.startsWith('MK.') || t.startsWith('await MK.')) continue;
      if (t) result.push(l);
    }
    return result;
  }

  // ── waitForSelector ────────────────────────────────────────────────────────
  if (type === 'waitforselector') {
    if (!locator) return [];
    return [`  await ${locator}.waitFor({ timeout: 60000 });`];
  }

  // ── keyboardpress ──────────────────────────────────────────────────────────
  if (type === 'keyboardpress') {
    if (!mkCall) return [];
    const key = unquote(mkCall.args[2]);
    return [`  await page.keyboard.press(${JSON.stringify(key)});`];
  }

  // ── keyboardtype ───────────────────────────────────────────────────────────
  if (type === 'keyboardtype') {
    if (!mkCall) return [];
    const val = unquote(mkCall.args[2]);
    return [`  await page.keyboard.type(${JSON.stringify(val)});`];
  }

  // ── keyboarddown / keyboardup ──────────────────────────────────────────────
  if (type === 'keyboarddown') {
    if (!mkCall) return [];
    return [`  await page.keyboard.down(${JSON.stringify(unquote(mkCall.args[2]))});`];
  }
  if (type === 'keyboardup') {
    if (!mkCall) return [];
    return [`  await page.keyboard.up(${JSON.stringify(unquote(mkCall.args[2]))});`];
  }

  // ── waitForAPIResponse ─────────────────────────────────────────────────────
  if (type === 'waitforapiresponse') {
    if (!mkCall) return [];
    const endpoint = unquote(mkCall.args[0]);
    return [`  await page.waitForResponse(${JSON.stringify(endpoint)});`];
  }

  // ── iframe ─────────────────────────────────────────────────────────────────
  if (type === 'setiframe') {
    return rawLines.filter(l => !isMuukBoilerplate(l));
  }

  // ── step ───────────────────────────────────────────────────────────────────
  if (type === 'step') {
    if (!locator) return rawLines.filter(l => !isMuukBoilerplate(l));

    // click / doubleclick
    if (action === 'click') {
      const lines = [];
      if (mkCall) {
        const assertVal = unquote(mkCall.args[4]);
        const val       = unquote(mkCall.args[3]);
        if (assertVal && assertVal !== 'none' && val) {
          const mode = assertVal === 'contains' || assertVal === 'asserttextcontains'
            ? 'toContainText' : 'toHaveText';
          lines.push(`  await expect(${locator}).${mode}(${JSON.stringify(val)});`);
        }
      }
      lines.push(`  await ${locator}.click();`);
      return lines;
    }
    if (action === 'doubleclick') {
      return [`  await ${locator}.dblclick();`];
    }

    // hover / mouseover
    if (action === 'mouseover' || action === 'hover') {
      return [`  await ${locator}.hover();`];
    }

    // fill / assignment
    if (action === 'assignment') {
      if (!mkCall) return [];
      const val  = unquote(mkCall.args[3]);
      const itype = unquote(mkCall.args[4]).toLowerCase();
      if (itype === 'checkbox' || itype === 'radio') {
        return [`  await ${locator}.check();`];
      }
      if (itype === 'select') {
        return [`  await ${locator}.selectOption(${JSON.stringify(val)});`];
      }
      return [`  await ${locator}.fill(${JSON.stringify(val)});`];
    }

    // type / sendkeys
    if (action === 'sendkeys') {
      if (!mkCall) return [];
      const val = unquote(mkCall.args[3]);
      // Use fill for most cases (faster); pressSequentially only when needed
      return [`  await ${locator}.fill(${JSON.stringify(val)});`];
    }

    // press enter
    if (action === 'pressenter') {
      return [`  await ${locator}.press('Enter');`];
    }

    // assert text
    if (action === 'asserttext' || action === 'asserttextcontains') {
      if (!mkCall) return [];
      const val  = unquote(mkCall.args[3]);
      const mode = (unquote(mkCall.args[4]) === 'contains' || action === 'asserttextcontains')
        ? 'toContainText' : 'toHaveText';
      return [`  await expect(${locator}).${mode}(${JSON.stringify(val)});`];
    }
    if (action === 'asserttextnotcontains' || action === 'asserttextnotequal') {
      if (!mkCall) return [];
      const val = unquote(mkCall.args[3]);
      return [`  await expect(${locator}).not.toContainText(${JSON.stringify(val)});`];
    }

    // assert property (visible/hidden/enabled/disabled)
    if (action === 'assertproperty') {
      if (!mkCall) return [];
      const prop = unquote(mkCall.args[3]).toLowerCase();
      const propMap = {
        visible:    `await expect(${locator}).toBeVisible();`,
        notvisible: `await expect(${locator}).not.toBeVisible();`,
        enabled:    `await expect(${locator}).toBeEnabled();`,
        disabled:   `await expect(${locator}).toBeDisabled();`,
      };
      return [`  ${propMap[prop] || `await expect(${locator}).toBeVisible();`}`];
    }

    // assert class
    if (action === 'assertclass' || action === 'assertclasscontains') {
      if (!mkCall) return [];
      const val = unquote(mkCall.args[3]);
      if (action === 'assertclasscontains') {
        return [`  await expect(${locator}).toHaveClass(new RegExp(${JSON.stringify('.*' + val + '.*')}));`];
      }
      return [`  await expect(${locator}).toHaveClass(${JSON.stringify(val)});`];
    }

    // no-action (assertion only, no interaction)
    if (action === 'noaction') {
      if (!mkCall) return [];
      const assertVal = unquote(mkCall.args[4]);
      const val       = unquote(mkCall.args[3]);
      if (assertVal && assertVal !== 'none' && val) {
        const mode = assertVal === 'contains' ? 'toContainText' : 'toHaveText';
        return [`  await expect(${locator}).${mode}(${JSON.stringify(val)});`];
      }
      return [`  await expect(${locator}).toBeVisible();`];
    }

    // random value
    if (action === 'randomvalue') {
      if (!mkCall) return [];
      const kind = unquote(mkCall.args[3]).trim();
      const fakerMap = {
        'first name':       `faker.person.firstName()`,
        'last name':        `faker.person.lastName()`,
        'email':            `faker.internet.email()`,
        'phone':            `faker.phone.number()`,
        'number':           `faker.number.int(1000).toString()`,
        'city':             `faker.location.city()`,
        'country':          `faker.location.country()`,
        'postal code':      `faker.location.zipCode()`,
        'street address':   `faker.location.streetAddress()`,
      };
      const expr = fakerMap[kind] || `faker.string.alpha({ length: 10 })`;
      return [
        `  const randomValue_${stepNum} = ${expr};`,
        `  await ${locator}.fill(randomValue_${stepNum});`,
      ];
    }

    // download file
    if (action === 'downloadfile') {
      if (!mkCall) return [];
      const fileName = unquote(mkCall.args[2]) || 'download';
      return [
        `  const download_${stepNum} = page.waitForEvent('download');`,
        `  await ${locator}.click();`,
        `  const file_${stepNum} = await download_${stepNum};`,
        `  await file_${stepNum}.saveAs(path.join('downloads', ${JSON.stringify(fileName)} || file_${stepNum}.suggestedFilename()));`,
      ];
    }

    // 2FA OTP
    if (action === '2fa') {
      if (!mkCall) return [];
      const secret = unquote(mkCall.args[3]);
      const digits = unquote(mkCall.args[4]);
      const period = unquote(mkCall.args[5]);
      return [
        `  const otp_${stepNum} = new OTPAuth.TOTP({ secret: ${JSON.stringify(secret)}, digits: ${digits}, algorithm: 'sha1', period: ${period} }).generate();`,
        `  await ${locator}.fill(otp_${stepNum});`,
      ];
    }

    // JS snippet embedded in step
    if (action === 'jssnippet' || action === 'snippet') {
      return rawLines.filter(l => !isMuukBoilerplate(l) && l.trim() !== '');
    }

    // fallback: keep raw lines
    return rawLines.filter(l => !isMuukBoilerplate(l) && l.trim() !== '');
  }

  // ── unknown type ───────────────────────────────────────────────────────────
  return rawLines.filter(l => !isMuukBoilerplate(l) && l.trim() !== '');
}

// ─── BOILERPLATE DETECTION ───────────────────────────────────────────────────

function isMuukBoilerplate(line) {
  const l = line.trim();
  return (
    l.startsWith('await muukReport.') ||
    l.startsWith('muukReport.') ||
    l.startsWith('const MK ') ||
    l.startsWith('MK.setVideoTracker') ||
    l.includes('MK.updatePage') ||
    l.startsWith('const pageDetails') ||
    l.startsWith('const consoleLogs') ||
    l.startsWith('const logFile') ||
    l.startsWith('const muukReport') ||
    l.startsWith('let logIndex') ||
    l.startsWith('const snippetLogs') ||
    l.startsWith('let pages;') ||
    l.startsWith('let numberPages') ||
    l.startsWith('let pageUpdated') ||
    l.startsWith('let maxRetries') ||
    l.startsWith('let snippetValue') ||
    l.startsWith('let snippetPattern') ||
    l.includes("console.log('step:") ||
    l.includes('console.log(`step:') ||
    l.startsWith('await MK.') ||
    l.startsWith('MK.') ||
    l.startsWith('logIndex') ||
    l.startsWith('var sessionStorage') ||
    l.includes('sessionStorage.setItem') ||
    l.includes('sessionStorage.getItem') ||
    l.includes('window.sessionStorage') ||
    l === '//globalVariables' ||
    l.startsWith('browserLog(') ||
    l.startsWith('page = eventPage') ||
    l.startsWith('numberPages') ||
    l.startsWith('pageUpdated') ||
    l === 'MK.setVideoTracker(0);' ||
    /^\s*await MK\.takeScreenshot/.test(l)
  );
}

// ─── SPEC TRANSFORMER ────────────────────────────────────────────────────────

function transformSpec(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const lines = src.split('\n');

  // Header metadata
  const tcIdMatch  = src.match(/\* Test Case ID:\s*(.+)/);
  const descMatch  = src.match(/\* Description:\s*(.+)/);
  const tcId       = tcIdMatch  ? tcIdMatch[1].trim()  : path.basename(filePath, '.spec.ts');
  const description = descMatch ? descMatch[1].trim()  : tcId;

  // ── Collect global variables declared before test body ─────────────────────
  // Variables like e2eCampusWideAdminURL, etc.
  const globalVarLines = [];
  const globalVarNames = new Set();
  const inTestBody = { val: false };

  // We'll collect them during the pass below

  // ── Split into blocks separated by muukReport.saveStep ────────────────────
  const blocks = [];
  let current = [];
  let inTest = false;

  for (const line of lines) {
    if (!inTest) {
      if (line.trim().startsWith('test(') && line.includes('async')) inTest = true;
      continue;
    }
    // Only stop at top-level test close (no leading whitespace)
    if (line === '});' && inTest) { inTest = false; break; }

    if (line.includes('muukReport.saveStep(true)')) {
      blocks.push(current);
      current = [];
    } else {
      current.push(line);
    }
  }
  if (current.length) blocks.push(current);

  // ── Detect global variables (let/var declarations before first addStepInfo) ─
  const varDecls = [];
  let foundFirstStep = false;
  for (const block of blocks) {
    for (const line of block) {
      const t = line.trim();
      if (t.includes('addStepInfo')) { foundFirstStep = true; }
      if (!foundFirstStep) {
        // Variable declarations that are not pageDetails or boilerplate
        if ((t.startsWith('let ') || t.startsWith('var ') || t.startsWith('const ')) &&
            !t.startsWith('const pageDetails') &&
            !t.startsWith('const MK') &&
            !t.startsWith('const consoleLogs') &&
            !t.startsWith('const muukReport') &&
            !t.startsWith('const logFile') &&
            !t.startsWith('const snippetLogs') &&
            !t.startsWith('let pages;') &&
            !t.startsWith('let numberPages') &&
            !t.startsWith('let pageUpdated') &&
            !t.startsWith('let maxRetries') &&
            !t.startsWith('let snippetValue') &&
            !t.startsWith('let snippetPattern') &&
            !t.includes('muukReport') &&
            // Skip pure placeholder '0' variables
            !/ = [`'"]0[`'"];?$/.test(t)
        ) {
          varDecls.push('  ' + t);
        }
      }
    }
  }

  // Detect if 2FA is used
  const needs2FA = src.includes('MK.on2FA') || src.includes('OTPAuth');
  // Detect if faker is used
  const needsFaker = src.includes('MK.onRandomValue');
  // Detect if path is used
  const needsPath = src.includes('MK.onDownloadFile');
  // Detect context.addCookies
  const needsAuthCookie = src.includes('authCookie12Twenty');
  // Detect page.goto with URL variables
  const gotoURLs = [];
  const gotoMatches = src.matchAll(/await page\.goto\(([^,)]+)/g);
  for (const m of gotoMatches) {
    const url = m[1].trim();
    if (url.startsWith('`') || url.startsWith('"') || url.startsWith("'")) {
      gotoURLs.push(unquote(url));
    }
  }

  // ── Process each block ─────────────────────────────────────────────────────
  const outputLines = [];

  // context.on('page') handler — keep for multi-tab tests
  const hasNewPageHandler = src.includes("context.on('page'");

  for (const block of blocks) {
    // Always emit page.goto first if present in this block
    const gotoLine = block.find(l => l.includes('page.goto('));
    if (gotoLine) {
      const gotoUrl = gotoLine.match(/page\.goto\(([^,)]+)/)?.[1]?.trim();
      if (gotoUrl) {
        outputLines.push(`  await page.goto(${gotoUrl}, { timeout: 90000 });`);
      }
    }

    // Find addStepInfo in this block
    const addStepLine = block.find(l => l.includes('addStepInfo('));
    const meta = addStepLine ? parseAddStepInfo(addStepLine) : null;

    // Find MK call in this block (skip boilerplate MK helpers)
    const mkLine = block.find(l =>
      (/await MK\.\w+\(/.test(l) || /MK\.\w+\(/.test(l)) &&
      !l.includes('MK.setVideoTracker') &&
      !l.includes('MK.takeScreenshot') &&
      !l.includes('MK.updatePage')
    );
    const mkCall = mkLine ? parseMKCall(mkLine) : null;

    const generated = generateStepCode(meta, mkCall, block.map(l => '  ' + l.trim()));
    for (const line of generated) {
      if (line && line.trim()) outputLines.push(line);
    }
  }

  // ── Build imports ──────────────────────────────────────────────────────────
  const importLines = [
    `import { test, expect } from '@playwright/test';`,
    needsFaker ? `import { faker } from '@faker-js/faker';` : null,
    needs2FA   ? `import * as OTPAuth from 'otpauth';` : null,
    needsPath  ? `import * as path from 'path';` : null,
    needsAuthCookie ? `import * as fs from 'fs';` : null,
  ].filter(Boolean);

  // ── Assemble final file ────────────────────────────────────────────────────
  const out = [
    `// TC: ${tcId}`,
    `// ${description}`,
    ``,
    ...importLines,
    ``,
    `test(${JSON.stringify(description)}, async ({ page, context }) => {`,
    ...(varDecls.length ? [...varDecls, ''] : []),
    ...(hasNewPageHandler ? [
      `  // Handle new tabs`,
      `  context.on('page', async (newPage) => { page = newPage; });`,
      ``,
    ] : []),
    ...outputLines,
    `});`,
    ``,
  ];

  return out.join('\n');
}

// ─── ENTRY POINT ─────────────────────────────────────────────────────────────

function getSpecFiles() {
  const args = process.argv.slice(2);
  if (args.length > 0) return args;

  const files = [];
  for (const dir of ['tests/test1', 'tests/test2']) {
    if (!fs.existsSync(dir)) continue;
    fs.readdirSync(dir)
      .filter(f => f.endsWith('.spec.ts') && !f.endsWith('.pom.spec.ts'))
      .forEach(f => files.push(path.join(dir, f)));
  }
  return files;
}

function main() {
  const files = getSpecFiles();
  let ok = 0, fail = 0;

  for (const file of files) {
    try {
      const result = transformSpec(file);
      const outPath = file.replace('.spec.ts', '.pom.spec.ts');
      fs.writeFileSync(outPath, result, 'utf8');
      ok++;
      if (files.length === 1) {
        console.log('\n── Output ──────────────────────────────\n');
        console.log(result);
      }
    } catch (e) {
      console.error(`FAILED: ${file}\n  ${e.message}`);
      fail++;
    }
  }

  if (files.length > 1) {
    console.log(`\nDone: ${ok} transformed, ${fail} failed.`);
  }
}

main();
