#!/usr/bin/env node
// @ts-check
'use strict';

/**
 * Transform MuukTest-generated TestSteps_*.spec.ts files into clean Playwright tests.
 * Uses original XPath selectors from addStepInfo metadata for reliability.
 */

const fs = require('fs');
const path = require('path');

// ─── Step label inference ─────────────────────────────────────────────────────

function trunc(str, max = 40) {
  if (!str) return str;
  str = str.replace(/\\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
  return str.length > max ? str.slice(0, max - 1) + '…' : str;
}

/**
 * Extract human-readable text from an XPath/locator line.
 * Works directly on the raw line string (handles \" escaping).
 */
function xpathText(line) {
  // normalize-space() = \"text\" or = "text"
  let m = line.match(/normalize-space\(\)\s*=\s*(?:\\"|")([^"\\]+)(?:\\"|")/);
  if (m) return m[1].trim();
  // contains(text(),"text") or contains(normalize-space(),"text")
  m = line.match(/contains\((?:text\(\)|normalize-space\(\)),\s*(?:\\"|")([^"\\]+)(?:\\"|")/);
  if (m) return m[1].trim();
  // @placeholder='...' or @placeholder=\"...\"
  m = line.match(/@placeholder\s*=\s*(?:\\'|')([^'"]+)(?:\\'|')/);
  if (m) return m[1].trim();
  m = line.match(/@placeholder\s*=\s*(?:\\"|")([^"\\]+)(?:\\"|")/);
  if (m) return m[1].trim();
  return null;
}

/**
 * Infer a descriptive label from a block's generated Playwright lines.
 * Returns a string label or null (caller falls back to "Step N").
 */
function inferStepLabel(lines) {
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;

    // ── Login helpers ──────────────────────────────────────────────────────
    if (/await loginAsAdmin\(/.test(t))    return 'Log in as admin';
    if (/await loginAsStudent\(/.test(t))  return 'Log in as student';
    if (/await loginAsEmployer\(/.test(t)) return 'Log in as employer';
    if (/await loadAuthCookies\(/.test(t)) return 'Load auth session';

    // ── Navigation ─────────────────────────────────────────────────────────
    const gotoM = t.match(/await page\.goto\([`"']([^`"']+)/);
    if (gotoM) {
      try {
        const pathname = new URL(gotoM[1]).pathname.replace(/\/$/, '') || '/';
        return `Navigate: ${pathname}`;
      } catch { return 'Navigate to page'; }
    }

    // ── Page lifecycle ─────────────────────────────────────────────────────
    if (/await page\.close\(\)/.test(t))  return 'Close page';

    // ── Pure waits / noise — skip to find something meaningful ────────────
    if (/page\.waitForTimeout\(/.test(t))   continue;
    if (/page\.waitForLoadState\(/.test(t)) continue;
    if (/page\.waitForSelector\(/.test(t))  continue;
    if (/page\.reload\(\)/.test(t))         continue;
    if (/page\.screenshot\(/.test(t))       continue;

    // ── Assertions ─────────────────────────────────────────────────────────
    // toContainText / toHaveText — skip only actual template literals (contain ${)
    const containsM = t.match(/toContainText\([`"']([^`"']*)[`"']\)/);
    if (containsM && !containsM[1].includes('${')) return `Verify "${trunc(containsM[1])}"`;
    const haveTxtM  = t.match(/toHaveText\([`"']([^`"']*)[`"']\)/);
    if (haveTxtM && !haveTxtM[1].includes('${')) return `Verify "${trunc(haveTxtM[1])}"`;
    if (/toBeVisible\(\)/.test(t)) {
      const txt = xpathText(t);
      return txt ? `Verify visible "${trunc(txt)}"` : 'Verify element visible';
    }

    // ── Locator actions — read directly from the raw line ──────────────────
    if (/page\.locator\(/.test(t)) {
      // ── Click ─────────────────────────────────────────────────────────
      if (/\.dblclick\(\)/.test(t)) {
        const txt = xpathText(t);
        return txt ? `Double-click "${trunc(txt)}"` : 'Double-click element';
      }

      if (/\.click\(\)/.test(t)) {
        const txt = xpathText(t);
        return txt ? `Click "${trunc(txt)}"` : 'Click element';
      }

      // ── Fill ──────────────────────────────────────────────────────────
      if (/\.fill\(/.test(t)) {
        if (/@type\s*=\s*['"\\]*email/i.test(t) || /@placeholder\s*.*[Ee]mail/i.test(t))
          return 'Fill email';
        if (/@type\s*=\s*['"\\]*password/i.test(t))
          return 'Fill password';
        // extract the value being filled
        const fillValM = t.match(/\.fill\([`"']([^`"'\\]+)/);
        if (fillValM && fillValM[1].length < 60) return `Fill "${trunc(fillValM[1])}"`;
        const txt = xpathText(t);
        return txt ? `Fill "${trunc(txt)}"` : 'Fill field';
      }

      // ── Hover ─────────────────────────────────────────────────────────
      if (/\.hover\(\)/.test(t)) {
        const txt = xpathText(t);
        return txt ? `Hover "${trunc(txt)}"` : 'Hover element';
      }

      // ── Select ────────────────────────────────────────────────────────
      if (/\.selectOption\(/.test(t)) {
        const optM = t.match(/\.selectOption\([`"']([^`"'\\]+)/);
        if (optM) return `Select "${trunc(optM[1])}"`;
        const txt = xpathText(t);
        return txt ? `Select in "${trunc(txt)}"` : 'Select option';
      }

      // ── Check / Uncheck ───────────────────────────────────────────────
      if (/\.check\(\)/.test(t)) {
        const txt = xpathText(t);
        return txt ? `Check "${trunc(txt)}"` : 'Check checkbox';
      }
      if (/\.uncheck\(\)/.test(t)) {
        const txt = xpathText(t);
        return txt ? `Uncheck "${trunc(txt)}"` : 'Uncheck checkbox';
      }

      // ── Press (on locator) ────────────────────────────────────────────
      if (/\.press\(/.test(t)) {
        const kM = t.match(/\.press\([`"']([^`"']+)/);
        return kM ? `Press ${kM[1]}` : 'Press key';
      }
    }

    // ── pressSequentially (select/input trigger) ───────────────────────────
    if (/\.pressSequentially\(/.test(t)) {
      const txt = xpathText(t);
      return txt ? `Type in "${trunc(txt)}"` : 'Type in field';
    }

    // ── Keyboard ───────────────────────────────────────────────────────────
    if (/page\.keyboard\.press\(/.test(t)) {
      const kM = t.match(/\.press\([`"']([^`"']+)/);
      return kM ? `Press ${kM[1]}` : 'Press key';
    }
    if (/page\.keyboard\.down\(/.test(t)) {
      const kM = t.match(/\.down\([`"']([^`"']+)/);
      return kM ? `Hold ${kM[1]}` : 'Key down';
    }
    if (/page\.keyboard\.type\(/.test(t)) {
      const kM = t.match(/\.type\([`"']([^`"']+)/);
      return kM ? `Type "${trunc(kM[1])}"` : 'Type text';
    }

    // ── Misc ───────────────────────────────────────────────────────────────
    if (/page\.mouse\./.test(t))         return 'Mouse action';
    if (/page\.setViewportSize/.test(t)) return 'Set viewport size';
    if (/page\.\$\$?\(/.test(t))         return 'Query elements';

    // ── Variable assignments (last resort) ────────────────────────────────
    // e.g. `fileName = "report.pdf"` or `selector = "//xpath..."`
    const varNameM = t.match(/^(\w+)\s*=/);
    if (varNameM && !/^(await|const|let|var|if|for|while)$/.test(varNameM[1])) {
      const varName = varNameM[1];
      if (varName === 'selector')   return 'Set selector';
      if (varName === 'testStudentName') return 'Set test student name';
      // Try to extract a short quoted value
      const valM = t.match(/=\s*[`"']([^`"'\\]{1,50})[`"']/);
      if (valM) {
        if (varName === 'fileName')    return `Set filename "${valM[1]}"`;
        if (varName === 'textContent' || varName === 'editedName') return `Set value "${trunc(valM[1])}"`;
      }
      return `Set ${varName}`;
    }
  }
  return null; // caller falls back to "Step N"
}

// ─── Configuration ────────────────────────────────────────────────────────────

const DOWNLOADS_BASE = path.resolve(
  process.env.HOME || require('os').homedir(),
  'Downloads/drive-download-20260519T162454Z-3-001'
);

const INPUT_DIRS = [
  path.join(DOWNLOADS_BASE, 'test1'),
  path.join(DOWNLOADS_BASE, 'test2'),
];

const TESTS_ROOT = path.resolve(__dirname, '../tests');

// Variables that should always be removed from global vars AND from assignments
const ALWAYS_REMOVE_VARS = new Set([
  'messageAnnouncement', 'repeatEachParameter', 'executionNum',
  'e2eCampusWideAdminURL', 'e2eCampusWideStudentURL', 'e2eLawQAStudentURL', 'employerQA',
  // MuukTest multi-page / retry tracking — not valid in Playwright
  'maxRetries', 'pages', 'numberPages', 'pageUpdated', 'newPages', 'indexPages',
  'urlpage1', 'urlpage2', 'urlpage3', 'urlpage4', 'pagesAfterPopUp',
  'adminUserLoadTesting', 'indexSt', 'repeatEachOffset',
  // Locator/BoundingBox vars used only in conditional/drag-drop blocks (all skipped)
  'source', 'box', 'offsetY',
  // LoadTesting / Monday loop vars — complex page.$$ loops that don't translate
  'jobPostingElements', 'totalSt', 'blockSizeSt', 'blockSize', 'totalRows', 'jobPostingCC',
  'interval', 'interviewerLT', 'rawJobText', 'rawStudentText',
  // Time vars used only in load-testing arithmetic (assigned numbers, cause type mismatches)
  'minutes', 'newMinutes',
  // Download event object — MuukTest page.waitForEvent('download') not translated
  'download',
]);

// Variables initialized to placeholder `0` — only keep if actually assigned later
const PLACEHOLDER_ZERO_VARS = new Set([
  'selector', 'jobPostingName', 'interviewerurl', 'indexWindow',
  'textContent', 'editedName', 'resultsCount', 'resultCountPost', 'valueA',
  'currentTime',
  'testStudentName', 'hour', 'interviewTime',
  'studentFirstName', 'studentLastName', 'copiedText', 'fileName',
]);

// ─── Folder mapping ────────────────────────────────────────────────────────────

function getFolderForDescription(rawDescription) {
  const d = decodeHtmlEntities(rawDescription).toLowerCase().trim();

  if (/^analytics/.test(d) ||
      /^(standard|custom) reports?/.test(d) ||
      /^reports?( -| –)/.test(d)) {
    return 'analytics-reports';
  }

  if (/^application materials/.test(d) ||
      /^application documents/.test(d) ||
      /add new (resumes?|cover letters?|transcripts?|recommendation|urls?|others?)\b/.test(d)) {
    return 'application-materials';
  }

  if (/^appointments?/.test(d) ||
      /^schedules?/.test(d) ||
      /^(delete|add|book|create|edit)appointment/.test(d.replace(/[^a-z]/g, ''))) {
    return 'appointments';
  }

  if (/^calendar/.test(d)) return 'calendar';

  if (/^contacts/.test(d)) return 'contacts';

  // Employer portal (12TE / 12TU / employer-side)
  if (/^12te/.test(d) ||
      /^12tu/.test(d) ||
      /^interview experience/.test(d) ||
      /^blocked.*candidate/.test(d) ||
      /^email template/.test(d) ||
      /^analytics.*recruiting intelligence/.test(d)) {
    return 'employer';
  }

  // Employers directory
  if (/^employers/.test(d) ||
      /^employer tags/.test(d)) {
    return 'employers';
  }

  if (/^events/.test(d)) return 'events';

  if (/^experiential learning/.test(d)) return 'experiential-learning';

  // Interviews / OCI / Job Listings / Resume Books / Business Slots
  if (/^(interviews?|oci|job listings?|resume books?|command center|interview questions?)/.test(d) ||
      /^(delete)?resumebook/.test(d.replace(/[^a-z]/g, '')) ||
      /^business site.*slots?/.test(d)) {
    return 'interviews-oci';
  }

  if (/^job postings?/.test(d) ||
      /^student employment/.test(d) ||
      /^12te job/.test(d)) {
    return 'jobs';
  }

  if (/^linkedin/.test(d) ||
      /^paused.*linkedin/.test(d)) {
    return 'linkedin';
  }

  if (/^mentorships?/.test(d)) return 'mentorships';

  if (/^outcomes?/.test(d) ||
      /^(delete)?outcome/.test(d.replace(/[^a-z]/g, '')) ||
      /^custom report/.test(d)) {
    return 'outcomes';
  }

  // Settings (many sub-categories)
  if (/^(site )?settings/.test(d) ||
      /^attributes/.test(d) ||
      /^communities/.test(d) ||
      /^resource library/.test(d) ||
      /^on.?login/.test(d) ||
      /^saved search/.test(d) ||
      /^activity stream/.test(d) ||
      /^12twenty passport/.test(d) ||
      /^users - admin groups/.test(d) ||
      /^notifications?/.test(d) ||
      /^sso/.test(d) ||
      /^api documentation/.test(d) ||
      /^lookups?\/picklists?/.test(d) ||
      /^side nav/.test(d) ||
      /^home\b/.test(d)) {
    return 'settings';
  }

  if (/^students?( &| -| –|$)/.test(d) ||
      /^admin\b.*bulk/.test(d) ||
      /^(students & alumni)/.test(d) ||
      /^data uploads?/.test(d)) {
    return 'students';
  }

  if (/^(research tools|target employers|tasks)/.test(d)) return 'tasks';

  if (/^users/.test(d) ||
      /^manage users/.test(d) ||
      /^monday/.test(d) ||
      /^loadtesting/.test(d.replace(/[^a-z]/g, '')) ||
      /^login.*e2e.*load/i.test(d) ||
      /^prototype/.test(d)) {
    return 'users';
  }

  return null; // skip uncategorized
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function decodeHtmlEntities(str) {
  return (str || '')
    .replace(/&#x2F;/gi, '/')
    .replace(/&#47;/gi, '/')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&nbsp;/gi, ' ');
}

function toSlug(description) {
  const decoded = decodeHtmlEntities(description);
  const slug = decoded
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug.slice(0, 80);
}

function uniqueFilename(slug, usedNames) {
  let candidate = `${slug}.spec.ts`;
  if (!usedNames.has(candidate)) {
    usedNames.add(candidate);
    return candidate;
  }
  let i = 2;
  while (usedNames.has(`${slug}-${i}.spec.ts`)) i++;
  const result = `${slug}-${i}.spec.ts`;
  usedNames.add(result);
  return result;
}

// ─── Locator builder — always uses original XPath ─────────────────────────────

/**
 * Build a Playwright locator using the original XPath selector from addStepInfo.
 * selectors: array like [{ selector: '...', index: N }, ...]
 *   index 0 = most specific CSS, last = XPATH
 */
function buildLocator(selectors, _tag, _inputAttr, _valueInfo, _idInfo, _action) {
  if (!selectors || selectors.length === 0) return null;

  // Always use the last selector (XPath) — most specific and original
  const xpathSel = selectors[selectors.length - 1];
  if (!xpathSel || !xpathSel.selector) return null;

  const xpathStr = xpathSel.selector;
  const xpathIdx = xpathSel.index || 0;

  // Always add .nth() to avoid strict mode violations when multiple elements match
  return `page.locator(${JSON.stringify(xpathStr)}).nth(${xpathIdx})`;
}

function getFakerCall(value, len) {
  const v = (value || '').toLowerCase().trim();
  if (v === 'first name' || v === ' random first name') return 'faker.person.firstName()';
  if (v === 'last name' || v === ' random last name') return 'faker.person.lastName()';
  if (v === 'email' || v === ' random email') return 'faker.internet.email()';
  if (v === 'phone' || v === ' random phone') return 'faker.phone.number()';
  if (v === 'number' || v === ' random number') return `faker.string.numeric({ length: ${len || 10} })`;
  if (v === 'city' || v === ' random city') return 'faker.location.city()';
  if (v === 'country' || v === ' random country') return 'faker.location.country()';
  if (v === 'postal code' || v === ' random postal code') return 'faker.location.zipCode()';
  if (v === 'street address' || v === ' random street address') return 'faker.location.streetAddress()';
  return `faker.string.alpha({ length: ${len || 10} })`;
}

// ─── Boilerplate detection ─────────────────────────────────────────────────────

const BOILERPLATE_PATTERNS = [
  /^\s*const MK = new Muuk\(/,
  /^\s*MK\.setVideoTracker\(/,
  /^\s*const pageDetails\d+ = new /,
  /^\s*const muukReport = new MuukReport\(/,
  /^\s*const consoleLogs/,
  /^\s*const logFile/,
  /^\s*let logIndex\b/,
  /^\s*const snippetLogs/,
  /^\s*await muukReport\./,
  /^\s*await MK\.takeScreenshot\(/,
  /^\s*await MK\.takeDOMSnapshot\(/,
  /^\s*console\.log\('step:/,
  /^\s*logIndex\s*=/,
  /^\s*browserLog\(/,
  /^\s*let pages;/,
  /^\s*let numberPages\b/,
  /^\s*let pageUpdated\b/,
  /^\s*let maxRetries\b/,
  /^\s*let snippetValue\b/,
  /^\s*let snippetPattern\b/,
  /^\s*MK\.updatePage\(/,
  /^\s*numberPages\+\+/,
  /^\s*pageUpdated\s*=/,
  /^\s*page\.on\('console'/,
  /^\s*const timestamp = /,
  /^\s*consoleLogs\.push/,
  // Skip all `var` declarations (MuukTest snippet-local JS variables not valid in Playwright tests)
  /^\s*var\s+/,
  // Skip snippet log calls
  /^\s*snippetLog\(/,
  /^\s*snippetLogs\b/,
];

function isMuukBoilerplate(line) {
  for (const pat of BOILERPLATE_PATTERNS) {
    if (pat.test(line)) return true;
  }
  return false;
}

// ─── Main transform ────────────────────────────────────────────────────────────

function transformFileWithSelectors(srcContent) {
  const lines = srcContent.split('\n');

  // Extract header metadata
  let tcId = '';
  let description = '';
  for (const line of lines.slice(0, 20)) {
    const tcMatch = line.match(/\*\s*Test Case ID:\s*(.+)/);
    if (tcMatch) tcId = tcMatch[1].trim();
    const descMatch = line.match(/\*\s*Description:\s*(.+)/);
    if (descMatch) description = descMatch[1].trim();
  }
  if (!description) description = 'Test';

  // Build stepNum → locator info map from addStepInfo('step', ...) calls
  const stepLocators = new Map();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/addStepInfo\('step'/.test(line)) continue;

    const m = line.match(/addStepInfo\('step',\s*(\d+),\s*[^,]+,\s*'([\s\S]*?)',\s*(\d+),\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([\s\S]*?)',\s*'([\s\S]*)'\)/);
    if (!m) continue;

    const [, stepNum, selectorsRaw, , tag, inputAttr, action, valueRaw, idRaw] = m;

    let selectors = null;
    let valueInfo = {};
    let idInfo = {};

    try {
      selectors = JSON.parse(selectorsRaw.replace(/\\"/g, '"').replace(/\\'/g, "'"));
    } catch (e) {}
    try {
      valueInfo = JSON.parse(valueRaw.replace(/\\"/g, '"').replace(/\\'/g, "'"));
    } catch (e) {}
    try {
      idInfo = JSON.parse(idRaw.replace(/\\"/g, '"').replace(/\\'/g, "'"));
    } catch (e) {}

    const locStr = buildLocator(selectors, tag, inputAttr, valueInfo, idInfo, action);
    stepLocators.set(parseInt(stepNum), { locStr, action, tag, inputAttr, valueInfo, idInfo });
  }

  // Find test body start
  let testBodyStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^test\(/.test(lines[i]) && lines[i].includes('async')) {
      testBodyStart = i;
      break;
    }
  }
  if (testBodyStart === -1) return null;

  // Collect body lines (skip test(... line, stop at `});`)
  const bodyLines = [];
  let depth = 0;
  let inBody = false;
  for (let i = testBodyStart; i < lines.length; i++) {
    const line = lines[i];
    if (!inBody) {
      for (const ch of line) {
        if (ch === '{') depth++;
        if (ch === '}') depth--;
      }
      inBody = true;
      continue;
    }
    if ((line === '});' || line === '})') && depth <= 1) break;
    for (const ch of line) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }
    bodyLines.push(line);
  }

  // Collect global vars (between //globalVariables and context.on or Monitor comment)
  const globalVarDefs = new Map();
  let inGlobalVars = false;
  for (const line of bodyLines) {
    if (/\/\/globalVariables/.test(line)) { inGlobalVars = true; continue; }
    if (inGlobalVars) {
      if (/^\s*\/\/ Monitor/.test(line) || /^\s*context\.on\(/.test(line) || /^\s*page\.on\(/.test(line)) {
        inGlobalVars = false;
        continue;
      }
      const varMatch = line.match(/^\s*let\s+(\w+)\s*=\s*(`[^`]*`|"[^"]*"|'[^']*'|\d+)/);
      if (varMatch) {
        globalVarDefs.set(varMatch[1], line.trim());
      }
    }
  }

  // Split body into blocks (split at saveStep(true))
  const blocks = [];
  let currentBlock = [];
  for (const line of bodyLines) {
    if (/await muukReport\.saveStep\(true\)/.test(line)) {
      blocks.push(currentBlock);
      currentBlock = [];
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.some(l => l.trim())) blocks.push(currentBlock);

  // Process each block
  const processedBlocks = blocks.map(block => processBlock(block, stepLocators));

  // Filter empty blocks
  const nonEmptyBlocks = processedBlocks.filter(b => b.lines.length > 0);
  if (nonEmptyBlocks.length === 0) return null;

  // Determine features used
  const allCode = nonEmptyBlocks.map(b => b.lines.join('\n')).join('\n');

  const needsAuth = allCode.includes('loadAuthCookies');
  const needsURLs = allCode.includes('URLS.');
  const needsFaker = allCode.includes('faker.');
  const needsOtp = allCode.includes('OTPAuth');
  const needsPath = allCode.includes('path.');

  // Collapse inline login sequences into loginAs* helpers
  const loginPatterns = [
    { email: 'e2e.admin.schooladministrator@campuswide.com', fn: 'loginAsAdmin' },
    { email: 'e2e.admin.schooladministrator@law.com',        fn: 'loginAsAdmin' },
    { email: 'e2e.student.fullaccess@campuswide.com',        fn: 'loginAsStudent' },
    { email: 'e2e.student.fullaccess@law.com',               fn: 'loginAsStudent' },
    { email: 'e2e.employeruser.subscription.admin@walmart.com', fn: 'loginAsEmployer' },
  ];
  const usedLoginFns = new Set();
  for (const block of nonEmptyBlocks) {
    for (const pattern of loginPatterns) {
      const emailIdx = block.lines.findIndex(l => l.includes(pattern.email));
      if (emailIdx === -1) continue;
      const passIdx = block.lines.findIndex((l, i) =>
        i > emailIdx && i <= emailIdx + 4 && /fill.*Password|fill.*password/.test(l));
      const btnIdx  = block.lines.findIndex((l, i) =>
        i > emailIdx && i <= emailIdx + 5 && /\.click\(\)/.test(l));
      if (passIdx === -1 || btnIdx === -1) continue;
      const removeIdxs = new Set([emailIdx, passIdx, btnIdx]);
      block.lines = block.lines
        .map((l, i) => (i === emailIdx ? `await ${pattern.fn}(page);` : l))
        .filter((_, i) => !removeIdxs.has(i) || i === emailIdx);
      usedLoginFns.add(pattern.fn);
      break;
    }
  }

  // Determine which global vars to keep
  const varsToKeep = [];
  for (const [varName, varLine] of globalVarDefs.entries()) {
    if (ALWAYS_REMOVE_VARS.has(varName)) continue;
    const isUsed = new RegExp(`\\b${varName}\\s*[=;,)]|\\b${varName}\\b[^=]`).test(allCode);
    if (!isUsed) continue;
    // PLACEHOLDER_ZERO_VARS: keep whenever the var appears in code (assigned or used in xpaths)
    // (removing the isAssigned gate so template-literal usages like `${jobPostingName}` work)
    varsToKeep.push(varLine);
  }

  // Assign step labels
  let setupDone = false;
  let stepCounter = 1;
  const labeledBlocks = [];

  for (const block of nonEmptyBlocks) {
    const code = block.lines.join('\n');
    const hasGoto = code.includes('page.goto(');
    const hasAuth = code.includes('loadAuthCookies');

    const isAllSleepOrReload = block.lines.every(l =>
      !l.trim() ||
      l.includes('waitForTimeout') ||
      l.includes('waitForLoadState') ||
      l.includes('page.reload()')
    );

    if (!setupDone && (hasGoto || hasAuth)) {
      if (hasGoto && !hasAuth && nonEmptyBlocks.indexOf(block) < nonEmptyBlocks.length - 1) {
        const nextBlock = nonEmptyBlocks[nonEmptyBlocks.indexOf(block) + 1];
        const nextCode = nextBlock.lines.join('\n');
        if (nextCode.includes('loadAuthCookies')) {
          const mergedLines = [...block.lines];
          labeledBlocks.push({ label: 'Setup', lines: mergedLines, pendingMerge: true });
          setupDone = true;
          continue;
        }
      }
      labeledBlocks.push({ label: 'Setup', lines: block.lines });
      setupDone = true;
    } else if (labeledBlocks.length > 0 && labeledBlocks[labeledBlocks.length - 1].pendingMerge) {
      const prev = labeledBlocks[labeledBlocks.length - 1];
      prev.lines.push(...block.lines);
      prev.pendingMerge = false;
    } else if (isAllSleepOrReload && labeledBlocks.length > 0) {
      const prev = labeledBlocks[labeledBlocks.length - 1];
      prev.lines.push(...block.lines);
    } else {
      const inferredLabel = inferStepLabel(block.lines);
      labeledBlocks.push({ label: inferredLabel || `Step ${stepCounter++}`, lines: block.lines });
    }
  }

  // Build output
  const decodedDesc = decodeHtmlEntities(description);
  const out = [];
  out.push(`// TC: ${tcId}`);
  out.push(`// ${decodedDesc}`);
  out.push(``);
  out.push(`import { test, expect } from '@playwright/test';`);
  const fixtureImports = [...(needsAuth ? ['loadAuthCookies'] : []), ...usedLoginFns];
  if (fixtureImports.length) out.push(`import { ${fixtureImports.join(', ')} } from '@fixtures/test';`);
  if (needsURLs) out.push(`import { URLS } from '@config/environments';`);
  if (needsFaker) out.push(`import { faker } from '@faker-js/faker';`);
  if (needsOtp) out.push(`import * as OTPAuth from 'otpauth';`);
  if (needsPath) out.push(`import * as path from 'path';`);
  out.push(``);
  out.push(`test(${JSON.stringify(`${decodedDesc} - ${tcId}`)}, async ({ page, context }) => {`);

  if (varsToKeep.length > 0) {
    for (const v of varsToKeep) out.push(`  ${v}`);
    out.push(``);
  }

  for (const block of labeledBlocks) {
    delete block.pendingMerge;
    const stepLines = block.lines.filter(l => l.trim());
    if (stepLines.length === 0) continue;
    out.push(`  await test.step(\`${block.label}\`, async () => {`);
    for (const l of stepLines) out.push(`    ${l.trim()}`);
    out.push(`  });`);
    out.push(``);
  }

  out.push(`});`);
  out.push(``);

  return { content: out.join('\n'), description: decodedDesc };
}

/**
 * Process a single block of raw source lines into clean Playwright actions.
 */
function processBlock(rawLines, stepLocators) {
  const result = [];
  let currentStepNum = null;
  // Track variables declared with `var` so we can skip their assignments too
  const localVarsDeclaredWithVar = new Set();

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Detect step number from addStepInfo
    const siMatch = line.match(/addStepInfo\('(?:step|sleep|snippet|refresh|waitForSelector|waitForLoadState|scroll)',\s*(\d+)/);
    if (siMatch) {
      currentStepNum = parseInt(siMatch[1]);
      continue;
    }

    // Skip page.on('console') block entirely (opening + body + closing)
    if (/page\.on\('console'/.test(line)) { i = skipUntilClose(rawLines, i); continue; }

    // Auth cookie snippet — replace with loadAuthCookies (must come BEFORE boilerplate check)
    if (/var sessionStorage = JSON\.parse\(fs\.readFileSync\('authCookie/.test(line)) {
      result.push(`await loadAuthCookies(context, page);`);
      let braceDepth = 0;
      i++;
      while (i < rawLines.length) {
        const l = rawLines[i];
        for (const ch of l) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }
        if (braceDepth <= 0 && i > 0) { break; }
        i++;
      }
      continue;
    }
    if (/context\.addCookies\(value\)/.test(line)) continue;
    if (/for \(var \[key, value\] of/.test(line)) continue;
    if (/if\(key ==="cookies"\)/.test(line)) continue;

    // Skip boilerplate; track `var` declarations so we can skip their assignments too
    if (isMuukBoilerplate(line)) {
      const varDeclMatch = line.match(/^\s*var\s+(\w+)\s*=/);
      if (varDeclMatch) localVarsDeclaredWithVar.add(varDeclMatch[1]);
      continue;
    }

    // Skip block comments / monitoring
    if (/\/\/ Monitor/.test(line)) continue;

    // context.on('page', ...) MuukTest version — skip the whole block
    if (/context\.on\('page'/.test(line)) {
      let isMuukMonitor = /MK\.updatePage/.test(line);
      if (!isMuukMonitor) {
        for (let p = i + 1; p < Math.min(i + 10, rawLines.length); p++) {
          if (/MK\.updatePage/.test(rawLines[p])) { isMuukMonitor = true; break; }
          if (/^\s*\}\)/.test(rawLines[p])) break;
        }
      }
      if (isMuukMonitor) {
        let depth = 0;
        for (const ch of line) { if (ch === '(') depth++; if (ch === ')') depth--; }
        i++;
        while (i < rawLines.length) {
          const l = rawLines[i];
          for (const ch of l) { if (ch === '(') depth++; if (ch === ')') depth--; }
          if (depth <= 0) break;
          i++;
        }
        continue;
      }
    }

    // Skip global variable declarations (processed separately)
    if (/\/\/globalVariables/.test(line)) {
      while (i < rawLines.length && !/^\s*\/\/ Monitor/.test(rawLines[i]) && !/^\s*context\.on\(/.test(rawLines[i])) {
        i++;
      }
      i--;
      continue;
    }

    // Always-remove variables
    const letVarMatch = line.match(/^\s*let\s+(\w+)\b/);
    if (letVarMatch && ALWAYS_REMOVE_VARS.has(letVarMatch[1])) continue;

    // MK.onSleep → page.waitForTimeout
    const sleepM = line.match(/MK\.onSleep\(\d+,\s*'[^']*',\s*(\d+(?:\.\d+)?)\)/);
    if (sleepM) {
      const secs = parseFloat(sleepM[1]);
      result.push(`await page.waitForTimeout(${Math.round(secs * 1000)});`);
      continue;
    }

    // MK.onWaitForLoadState → page.waitForLoadState
    const lsM = line.match(/MK\.onWaitForLoadState\(\d+,\s*'[^']*',\s*'([^']+)'/);
    if (lsM) {
      result.push(`await page.waitForLoadState('${lsM[1]}');`);
      continue;
    }

    // page.goto with URL variable replacement
    if (/page\.goto\(/.test(line)) {
      result.push(replaceURLVars(trimmed));
      continue;
    }

    // page.reload
    if (/^\s*await page\.reload\(\)/.test(line)) {
      result.push(`await page.reload();`);
      continue;
    }

    // page.setViewportSize — handled via playwright.config.ts
    if (/page\.setViewportSize/.test(line)) continue;

    // MK.* actions — use stepLocators
    const locInfo = currentStepNum !== null ? stepLocators.get(currentStepNum) : null;

    if (/await MK\.onClick\(/.test(line)) {
      if (locInfo && locInfo.locStr) result.push(`await ${locInfo.locStr}.click();`);
      continue;
    }

    if (/await MK\.onDoubleClick\(/.test(line)) {
      if (locInfo && locInfo.locStr) result.push(`await ${locInfo.locStr}.dblclick();`);
      continue;
    }

    if (/await MK\.onMouseover\(/.test(line)) {
      if (locInfo && locInfo.locStr) result.push(`await ${locInfo.locStr}.hover();`);
      continue;
    }

    if (/await MK\.noAction\(/.test(line)) {
      if (locInfo && locInfo.locStr) result.push(`await expect(${locInfo.locStr}).toBeVisible();`);
      continue;
    }

    if (/await MK\.assertText\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const vm = line.match(/,\s*`([^`]*)`,\s*'([^']*)',\s*\d+\)/);
        if (vm) {
          const [, val, assertType] = vm;
          if (assertType === 'equal') result.push(`await expect(${locInfo.locStr}).toHaveText(${JSON.stringify(val)});`);
          else if (assertType === 'contains') result.push(`await expect(${locInfo.locStr}).toContainText(${JSON.stringify(val)});`);
          else if (assertType === 'notequal') result.push(`await expect(${locInfo.locStr}).not.toHaveText(${JSON.stringify(val)});`);
          else if (assertType === 'notcontains') result.push(`await expect(${locInfo.locStr}).not.toContainText(${JSON.stringify(val)});`);
          else result.push(`await expect(${locInfo.locStr}).toBeVisible();`);
        } else {
          result.push(`await expect(${locInfo.locStr}).toBeVisible();`);
        }
      }
      continue;
    }

    if (/await MK\.onAssignment\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const vm = line.match(/,\s*`([^`]*)`,\s*'([^']*)',\s*\d+\)/);
        if (vm) {
          const [, value, type] = vm;
          if (type === 'checkbox' || type === 'radio') {
            result.push(`await ${locInfo.locStr}.check();`);
          } else if (type === 'select') {
            result.push(`await ${locInfo.locStr}.selectOption(${JSON.stringify(value)});`);
          } else {
            result.push(`await ${locInfo.locStr}.fill(${JSON.stringify(value)});`);
          }
        }
      }
      continue;
    }

    if (/await MK\.onSendKeys\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const vm = line.match(/,\s*`([^`]*)`,\s*\d+\)/);
        if (vm) result.push(`await ${locInfo.locStr}.pressSequentially(${JSON.stringify(vm[1])});`);
      }
      continue;
    }

    if (/await MK\.onPressEnter\(/.test(line)) {
      if (locInfo && locInfo.locStr) result.push(`await ${locInfo.locStr}.press('Enter');`);
      continue;
    }

    if (/await MK\.onAssertProperty\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const vm = line.match(/,\s*`([^`]*)`,\s*\d+\)/);
        const prop = vm ? vm[1] : 'visible';
        if (prop === 'visible') result.push(`await expect(${locInfo.locStr}).toBeVisible();`);
        else if (prop === 'notVisible') result.push(`await expect(${locInfo.locStr}).not.toBeVisible();`);
        else if (prop === 'enabled') result.push(`await expect(${locInfo.locStr}).toBeEnabled();`);
        else if (prop === 'disabled') result.push(`await expect(${locInfo.locStr}).toBeDisabled();`);
        else result.push(`await expect(${locInfo.locStr}).toBeVisible();`);
      }
      continue;
    }

    if (/await MK\.onAssertClass/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const vm = line.match(/,\s*`([^`]*)`,\s*\d+\)/);
        const cls = vm ? vm[1] : '';
        result.push(`await expect(${locInfo.locStr}).toHaveClass(/${cls}/);`);
      }
      continue;
    }

    if (/await MK\.onWaitForSelector\(/.test(line)) {
      if (locInfo && locInfo.locStr) result.push(`await ${locInfo.locStr}.waitFor();`);
      continue;
    }

    if (/await MK\.on2FA\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const tm = line.match(/,\s*`([^`]*)`,\s*(\d+),\s*(\d+),\s*(\d+)\)/);
        if (tm) {
          const [, secret, digits, period] = tm;
          result.push(`const totp = new OTPAuth.TOTP({ secret: ${JSON.stringify(secret)}, digits: ${digits}, algorithm: 'sha1', period: ${period} });`);
          result.push(`await ${locInfo.locStr}.fill(totp.generate());`);
        }
      }
      continue;
    }

    if (/await MK\.onRandomValue\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const vm = line.match(/,\s*`([^`]*)`,\s*([^,]+),\s*\d+\)/);
        if (vm) {
          const [, value, len] = vm;
          result.push(`await ${locInfo.locStr}.fill(${getFakerCall(value, len.trim())});`);
        }
      }
      continue;
    }

    if (/await MK\.onDownloadFile\(/.test(line)) {
      if (locInfo && locInfo.locStr) {
        const fm = line.match(/,\s*`([^`]*)`,\s*\d+\)/);
        const fname = fm ? fm[1] : '';
        result.push(`const downloadPromise = page.waitForEvent('download');`);
        result.push(`await ${locInfo.locStr}.click();`);
        result.push(`const download = await downloadPromise;`);
        if (fname && fname !== '0') {
          result.push(`await download.saveAs('./downloads/${fname}');`);
        }
      }
      continue;
    }

    const kbpM = line.match(/await MK\.onKeyboardPress\(\d+,\s*'[^']*',\s*`([^`]*)`,\s*\d+\)/);
    if (kbpM) { result.push(`await page.keyboard.press(${JSON.stringify(kbpM[1])});`); continue; }

    const kbtM = line.match(/await MK\.onKeyboardType\(\d+,\s*'[^']*',\s*`([^`]*)`,\s*\d+\)/);
    if (kbtM) { result.push(`await page.keyboard.type(${JSON.stringify(kbtM[1])});`); continue; }

    const kbdM = line.match(/await MK\.onKeyboardDown\(\d+,\s*'[^']*',\s*`([^`]*)`,\s*\d+\)/);
    if (kbdM) { result.push(`await page.keyboard.down(${JSON.stringify(kbdM[1])});`); continue; }

    const kbuM = line.match(/await MK\.onKeyboardUp\(\d+,\s*'[^']*',\s*`([^`]*)`\)/);
    if (kbuM) { result.push(`await page.keyboard.up(${JSON.stringify(kbuM[1])});`); continue; }

    const apiM = line.match(/await MK\.onWaitForAPIResponse\(`([^`]*)`,/);
    if (apiM) { result.push(`await page.waitForResponse(${JSON.stringify(apiM[1])});`); continue; }

    // MK.onSetGV — stores a value in a global variable: `varName = MK.onSetGV(value, null)`
    const setGVM = line.match(/^(\s*)(\w+)\s*=\s*MK\.onSetGV\(`([^`]*)`,\s*null\)/);
    if (setGVM) {
      const [, , varName, value] = setGVM;
      if (!ALWAYS_REMOVE_VARS.has(varName) && !localVarsDeclaredWithVar.has(varName)) {
        result.push(`${varName} = ${JSON.stringify(value)};`);
      }
      continue;
    }

    // Skip all other MK.* calls
    if (/await MK\./.test(line) || /(?<!\w)MK\./.test(line)) continue;

    // Keep non-MuukTest code — only complete single-line statements (ending with ;)
    if (/^\s*await page\./.test(line)) {
      if (trimmed.endsWith(';')) {
        // Skip if the line references any always-remove-vars or skipped-let vars
        const usesRemovedInPage = [...ALWAYS_REMOVE_VARS, ...localVarsDeclaredWithVar].some(v =>
          new RegExp(`\\b${v}\\b`).test(trimmed));
        if (!usesRemovedInPage) result.push(replaceURLVars(trimmed));
      } else {
        // Multi-line call — skip until we find the closing );
        while (i < rawLines.length - 1 && !rawLines[i].trim().endsWith(';')) i++;
      }
      continue;
    }
    if (/^\s*await context\./.test(line)) {
      // Only keep loadAuthCookies-related (already handled above); skip all other context.* calls
      continue;
    }

    // Variable declarations (non-boilerplate) — only keep complete single-line declarations
    if (/^\s*let\s+\w+\s*=/.test(line)) {
      const vn = letVarMatch ? letVarMatch[1] : null;
      if (vn && ALWAYS_REMOVE_VARS.has(vn)) { localVarsDeclaredWithVar.add(vn); continue; }
      // Skip if RHS references an always-remove var or a previously-skipped let var (cascade)
      const letUsesRemovedVar = [...ALWAYS_REMOVE_VARS, ...localVarsDeclaredWithVar].some(v =>
        new RegExp(`\\b${v}\\b`).test(trimmed));
      if (letUsesRemovedVar) { if (vn) localVarsDeclaredWithVar.add(vn); continue; }
      if (!trimmed.endsWith(';')) {
        // Multi-line let (e.g. let x = await page.$$(...)) — skip until closing ;
        while (i < rawLines.length - 1 && !rawLines[i].trim().endsWith(';')) i++;
        continue;
      }
      result.push(replaceURLVars(trimmed));
      continue;
    }

    // Variable assignments (skip control-flow, block-structural, always-remove, and var-declared vars)
    if (/^\s*\w+\s*=\s*[^=]/.test(line) && !/^\s*(const|let|var|await|if|for|while|function)\b/.test(line)) {
      const assignedVar = (line.match(/^\s*(\w+)\s*=/) || [])[1];
      if (assignedVar && (ALWAYS_REMOVE_VARS.has(assignedVar) || localVarsDeclaredWithVar.has(assignedVar))) continue;
      // Skip assignments where RHS uses always-remove-vars (e.g. `page = pages[numberPages-1]`)
      const usesRemovedVar = [...ALWAYS_REMOVE_VARS, ...localVarsDeclaredWithVar].some(v =>
        new RegExp(`\\b${v}\\b`).test(trimmed)
      );
      if (usesRemovedVar) continue;
      if (!trimmed.match(/^[\{\}]/) && !trimmed.endsWith('{')) {
        result.push(replaceURLVars(trimmed));
      }
      continue;
    }

    // Skip all control flow / standalone braces — these span block boundaries and break syntax
    // (if/else/for/while/try/catch/{ /} ) are all stripped; clean tests don't need them
    if (/^\s*(if|else|for|while|try|catch)\b/.test(line) || /^\s*[\{\}]/.test(line)) {
      continue;
    }
  }

  return { lines: result };
}

// Login credential → helper mapping (used in applyLoginHelpers)
const LOGIN_REPLACEMENTS = [
  { email: 'e2e.admin.schooladministrator@campuswide.com', fn: 'loginAsAdmin' },
  { email: 'e2e.admin.schooladministrator@law.com',        fn: 'loginAsAdmin' },
  { email: 'e2e.student.fullaccess@campuswide.com',        fn: 'loginAsStudent' },
  { email: 'e2e.student.fullaccess@law.com',               fn: 'loginAsStudent' },
  { email: 'e2e.employeruser.subscription.admin@walmart.com', fn: 'loginAsEmployer' },
];

function applyLoginHelpers(code) {
  let lines = code.split('\n');
  const usedFns = new Set();

  for (const { email, fn } of LOGIN_REPLACEMENTS) {
    const emailPattern = new RegExp(`fill\\(${JSON.stringify(email)}\\)`);
    const emailIdx = lines.findIndex(l => emailPattern.test(l));
    if (emailIdx === -1) continue;

    const passIdx = lines.findIndex((l, i) =>
      i > emailIdx && i <= emailIdx + 8 &&
      /\.fill\(["'][^"']*["']\)/.test(l) &&
      /[Pp]assword/.test(l)
    );
    const btnIdx = lines.findIndex((l, i) =>
      i > emailIdx && i <= emailIdx + 12 &&
      /\.click\(\)/.test(l) &&
      /(Log In|Sign In|submit-login|btn-school|nth\()/.test(l)
    );

    if (passIdx === -1 || btnIdx === -1) continue;

    const indent = (lines[emailIdx].match(/^(\s*)/) || ['', ''])[1];
    lines[emailIdx] = `${indent}await ${fn}(page);`;
    lines[passIdx] = null;
    lines[btnIdx] = null;
    usedFns.add(fn);
  }

  lines = lines.filter(l => l !== null);

  // Remove empty test.step blocks
  const result = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/await test\.step\(/.test(line)) {
      const blockLines = [line];
      i++;
      let depth = 1;
      while (i < lines.length && depth > 0) {
        const l = lines[i];
        if (l.includes('{')) depth++;
        if (l.includes('}')) depth--;
        blockLines.push(l);
        i++;
      }
      const bodyLines = blockLines.slice(1, -1).filter(l => l.trim());
      if (bodyLines.length === 0) continue;
      result.push(...blockLines);
    } else {
      result.push(line);
      i++;
    }
  }

  return { code: result.join('\n'), usedFns };
}

function replaceURLVars(s) {
  return s
    .replace(/\be2eCampusWideAdminURL\b/g, 'URLS.campusWideAdmin')
    .replace(/\be2eCampusWideStudentURL\b/g, 'URLS.campusWideStudent')
    .replace(/\be2eLawQAStudentURL\b/g, 'URLS.lawStudent')
    .replace(/\bemployerQA\b/g, 'URLS.employer');
}

function skipUntilClose(lines, startIdx) {
  let depth = 0;
  for (let i = startIdx; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '(') depth++;
      if (ch === ')') depth--;
    }
    if (depth <= 0 && i > startIdx) return i;
  }
  return lines.length;
}

// ─── Run transformation ────────────────────────────────────────────────────────

// Track used filenames per output folder
const usedNamesPerFolder = new Map();

function getUsedNames(folder) {
  if (!usedNamesPerFolder.has(folder)) {
    // Pre-populate with existing files to avoid overwriting unrelated tests
    const existing = new Set();
    if (fs.existsSync(folder)) {
      for (const f of fs.readdirSync(folder)) {
        if (f.endsWith('.spec.ts')) existing.add(f);
      }
    }
    usedNamesPerFolder.set(folder, existing);
  }
  return usedNamesPerFolder.get(folder);
}

let totalGenerated = 0;
let totalSkipped = 0;
let totalErrors = 0;

for (const inputDir of INPUT_DIRS) {
  if (!fs.existsSync(inputDir)) {
    console.error(`Input dir not found: ${inputDir}`);
    continue;
  }

  const files = fs.readdirSync(inputDir)
    .filter(f => /^TestSteps_[a-f0-9]+\.spec\.ts$/.test(f))
    .sort();

  console.log(`\nProcessing ${inputDir} (${files.length} files)...`);

  for (const fname of files) {
    const srcPath = path.join(inputDir, fname);
    let srcContent;
    try {
      srcContent = fs.readFileSync(srcPath, 'utf8');
    } catch (e) {
      console.error(`  ERROR reading ${fname}: ${e.message}`);
      totalErrors++;
      continue;
    }

    // Skip _B files
    if (/\* Test Case ID:.*_B/.test(srcContent.slice(0, 500))) {
      console.log(`  SKIP (_B): ${fname}`);
      totalSkipped++;
      continue;
    }

    // Skip tests marked IN PROGRESS
    if (/Description:\s*IN PROGRESS/i.test(srcContent.slice(0, 500))) {
      console.log(`  SKIP (IN PROGRESS): ${fname}`);
      totalSkipped++;
      continue;
    }


    let result;
    try {
      result = transformFileWithSelectors(srcContent);
    } catch (e) {
      console.error(`  ERROR transforming ${fname}: ${e.message}\n${e.stack}`);
      totalErrors++;
      continue;
    }

    if (!result) {
      console.log(`  SKIP (no output): ${fname}`);
      totalSkipped++;
      continue;
    }

    const { content: rawContent, description } = result;

    // Determine output subfolder
    const folder = getFolderForDescription(description);
    if (!folder) {
      console.log(`  SKIP (no folder for: "${description}"): ${fname}`);
      totalSkipped++;
      continue;
    }

    const outDir = path.join(TESTS_ROOT, folder);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // Apply login helpers and update imports
    const { code: loginCode, usedFns } = applyLoginHelpers(rawContent);
    let outputContent = loginCode;
    if (usedFns.size > 0) {
      const fnList = [...usedFns].sort().join(', ');
      outputContent = outputContent.replace(
        /import \{ ([^}]+) \} from '@fixtures\/test';/,
        (_, existing) => {
          const existingFns = existing.split(',').map(s => s.trim()).filter(Boolean);
          const allFns = [...new Set([...existingFns, ...usedFns])].sort();
          return `import { ${allFns.join(', ')} } from '@fixtures/test';`;
        }
      );
      if (!outputContent.includes("from '@fixtures/test'")) {
        outputContent = outputContent.replace(
          `import { test, expect } from '@playwright/test';`,
          `import { test, expect } from '@playwright/test';\nimport { ${fnList} } from '@fixtures/test';`
        );
      }
    }

    const slug = toSlug(description) || fname.replace('.spec.ts', '');
    const usedNames = getUsedNames(outDir);
    const outFname = uniqueFilename(slug, usedNames);
    const outPath = path.join(outDir, outFname);

    try {
      fs.writeFileSync(outPath, outputContent, 'utf8');
      console.log(`  → ${folder}/${outFname}`);
      totalGenerated++;
    } catch (e) {
      console.error(`  ERROR writing ${outFname}: ${e.message}`);
      totalErrors++;
    }
  }
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Generated: ${totalGenerated} files`);
console.log(`Skipped:   ${totalSkipped} files`);
console.log(`Errors:    ${totalErrors}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
