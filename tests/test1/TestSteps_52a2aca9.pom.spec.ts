// TC: TC72642
// MONDAY-Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("MONDAY-Admin", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;
  const text = msg.text();
  const timestamp = new Date().toLocaleString();

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/dashboard', { timeout: 90000 });
  if (indexSt >= 1 && indexSt <= 4) {
  newMinutes = 0;
  } else if (indexSt >= 5 && indexSt <= 6) {
  newMinutes = 11;
  } else if (indexSt >= 7 && indexSt <= 10) {
  newMinutes = 21;
  } else {
  snippetLog(`indexSt (${indexSt}) is out of expected range (1-10)`);
  }
  snippetLog(`newMinutes assigned: ${newMinutes}`);
  if(newMinutes > 0){
  let milliseconds = minutes * 60 * 1000;
  await page.waitForTimeout(milliseconds);
  snippetLog('Waited for ' + newMinutes + ' minutes');
  }
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  const adminUserLoadTestingIndex = (context.index + 1 || 1) + Number(repeatEachOffset);
  adminUserLoadTesting = `admin-${adminUserLoadTestingIndex}@e2e-tests-business.com`;
  snippetLog(adminUserLoadTestingIndex);
  snippetLog(context.index);
  await page.getByPlaceholder("Email Address").fill("` + adminUserLoadTesting + `");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").hover();
  indexSt = context.index + 1;
  snippetLog('context.index: ' + context.index)
  snippetLog('indexSt: ' + indexSt);
  await page.waitForTimeout((indexSt*2)*1000);
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  await page.locator("//li[normalize-space()=\"Command Center\"]").click();
  await page.waitForTimeout(5000);
  snippetLog('indexSt: ' + indexSt);
  let jobPostingElements = await page.$$(
  '//tr//span[contains(@class,"primary-item")][contains(text(),"Job Posting")]'
  );
  let totalJP = jobPostingElements.length;
  let jobPostingNames = [];
  let startIndexJP = (indexSt - 1) * blockSizeJP;
  let endIndexJP = Math.min(startIndexJP + blockSizeJP, totalJP);
  snippetLog(`Total elements: ${totalJP}`);
  snippetLog(`Getting from index ${startIndexJP} to ${endIndexJP - 1} (from top to bottom)`);
  if (startIndexJP < totalJP) {
  for (let i = startIndexJP; i < endIndexJP; i++) {
  let el = jobPostingElements[i];
  let textJP = (await el.textContent())?.trim();
  snippetLog(`Element ${i}: "${textJP}"`);
  if (textJP) {
  jobPostingNames.push(textJP);
  } else {
  snippetLog(`Element ${i} has no text.`);
  }
  }
  snippetLog('jobPostingNames: ' + JSON.stringify(jobPostingNames));
  } else {
  snippetLog(`tartIndexJP ${startIndexJP} out of range (total: ${totalJP})`);
  }
  snippetLog('indexSt: ' + indexSt);
  const testStudentElementsSt = await page.$$(
  '//tr//span[contains(@class,"primary-item")][contains(text(),"Test Student")]'
  );
  const totalSt = testStudentElementsSt.length;
  const blockSizeSt = 9;
  let testStudentNamesSt = [];
  let startIndexSt = (indexSt - 1) * blockSizeSt;
  let endIndexSt = Math.min(startIndexSt + blockSizeSt, totalSt);
  snippetLog(`All Elements "Test Student": ${totalSt}`);
  snippetLog(`Getting from index ${startIndexSt} to ${endIndexSt - 1} (ascending)`);
  if (startIndexSt < totalSt) {
  for (let i = startIndexSt; i < endIndexSt; i++) {
  const elSt = testStudentElementsSt[i];
  const textSt = (await elSt.innerText())?.trim();
  snippetLog(`Element ${i}: "${textSt}"`);
  if (textSt) {
  testStudentNamesSt.push(textSt);
  } else {
  snippetLog(`Element ${i} has no text.`);
  }
  }
  snippetLog('testStudentNamesSt: ' + JSON.stringify(testStudentNamesSt));
  } else {
  snippetLog(`startIndexSt ${startIndexSt} is out of range (total: ${totalSt})`);
  }
  let rows = await page.$$('//tr[@class="ng-scope"]');
  const blockSize = 9;
  const totalRows = rows.length;
  if (totalRows < blockSize) {
  throw new Error(`There are not at least ${blockSize} elements <tr class="ng-scope">`);
  }
  let startIndex = (indexSt - 1) * blockSize;
  let endIndex = Math.min(startIndex + blockSize, totalRows);
  snippetLog(`Total <tr> found: ${totalRows}`);
  snippetLog(`Getting from index ${startIndex} to ${endIndex - 1}`);
  let testContactNames = [];
  for (let i = startIndex; i < endIndex; i++) {
  const row = rows[i];
  let contactSpanHandle = await row.evaluateHandle((el) => {
  const xpathResult = document.evaluate(
  './/span[contains(text(), "Test Contact")]',
  el,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
  );
  return xpathResult.singleNodeValue;
  });
  if (contactSpanHandle) {
  const text = await contactSpanHandle.evaluate((el) => el.textContent?.trim());
  testContactNames.push(text || null);
  } else {
  testContactNames.push(null);
  }
  }
  for (let i = 0; i < testContactNames.length; i++) {
  snippetLog(`Contact ${i + 1}: ${testContactNames[i]}`);
  }
  var jobPostingCC = [];
  if (jobPostingNames.length === 0) {
  snippetLog('Array of Job Posting Names is empty.');
  } else {
  const allEqual = jobPostingNames.every(name => name === jobPostingNames[0]);
  if (allEqual) {
  jobPostingCC = [jobPostingNames[0]];
  indexJP = 1; // solo uno porque todos son iguales
  snippetLog('All values in jobPostingNames are EQUAL.');
  } else {
  jobPostingCC = [...new Set(jobPostingNames)];
  indexJP = jobPostingCC.length;
  snippetLog('The values in jobPostingNames are DIFFERENT.');
  }
  snippetLog('jobPostingCC: ' + JSON.stringify(jobPostingCC));
  snippetLog('indexJP (number of distinct values): ' + indexJP);
  }
  for (let i = 0; i < testStudentNamesSt.length; i++) {
  const studentName = testStudentNamesSt[i];
  const targetXPath = `//span[contains(text(),"${studentName}")]//ancestor::tt-entity-href//preceding-sibling::span//primary-item-prepend//i`;
  snippetLog(`[${i}] Looking for: ${targetXPath}`);
  const elements = await page.$$(targetXPath);
  if (elements.length === 0) {
  snippetLog(`[${i}] XPath did not find element ${studentName}"`);
  continue;
  }
  const lastElement = elements[elements.length - 1];
  const title = await lastElement.getAttribute('title');
  if (title === 'Not joined') {
  snippetLog(`[${i}] "${studentName}" has title="Not joined"`);
  } else {
  snippetLog(`[${i}] "${studentName}" has "${title}"`);
  throw new Error(`[${i}] "${studentName}" has title="${title}"`);
  }
  }
  await page.getByRole('heading', { name: "Interview Command Center" }).click();
  do {
  console.log('Value c:', c);
  await page.waitForTimeout(1000);
  let targetText = jobPostingCC[c];
  snippetLog('jobPostingCC: ' + targetText);
  let targetXP = `//span[normalize-space()="${targetText}"]`;
  snippetLog('XPath used: ' + targetXP);
  let elements = await page.$$(targetXP);
  if (elements.length > 0) {
  let lastElement = elements[elements.length - 1]; // ← Usa el último
  snippetLog(`Total number of elements found: ${elements.length}`);
  try {
  await lastElement.scrollIntoViewIfNeeded();
  await lastElement.waitForElementState('visible');
  await lastElement.click();
  snippetLog(`Clicked last element with text "${targetText}"`);
  } catch (err) {
  snippetLog(`Error on clicking: ${err}`);
  await page.screenshot({ path: 'click_error_debug.png' });
  }
  } else {
  snippetLog(`Element with text "${targetText}" was not found`);
  }
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  const errorMessage = await page.$('//*[contains(text(),"Your request could not be processed")]');
  if (errorMessage) {
  snippetLog('Modal with error message');
  const okButton = await page.waitForSelector('//*[contains(text(),"OK")]', { timeout: 5000 });
  await okButton.click();
  await page.reload();
  }
  await page.getByRole('link', { name: "Schedule" }).click();
  await page.getByRole('button', { name: "Schedule Actions" }).click();
  await page.getByRole('link', { name: "Send Interviewer Links" }).click();
  await page.locator("//li[normalize-space()=\"Command Center\"]").click();
  c++;
  } while (c < indexJP);
  await page.waitForTimeout(5000);
});
