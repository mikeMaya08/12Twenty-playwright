// TC: TC72648
// MONDAY-Interviewer

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("MONDAY-Interviewer", async ({ page, context }) => {
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
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  const adminUserLoadTestingIndex = (context.index + 1 || 1) + Number(repeatEachOffset);
  adminUserLoadTesting = `admin-${adminUserLoadTestingIndex}@e2e-tests-business.com`;
  snippetLog(adminUserLoadTestingIndex);
  snippetLog(context.index);
  await page.getByPlaceholder("Email Address").fill("admin-1@e2e-tests-business.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").hover();
  indexSt = context.index + 1;
  snippetLog('context.index: ' + context.index)
  snippetLog('indexSt: ' + indexSt);
  await page.waitForTimeout((indexSt*2)*1000);
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  await page.locator("//li[normalize-space()=\"Command Center\"]").click();
  await page.waitForTimeout(15000);
  let trElements = await page.$$('//tr[@class="ng-scope"]');
  let total = trElements.length;
  snippetLog('Total <tr> found: ' + total);
  snippetLog('indexSt received: ' + indexSt);
  if (indexSt <= 0) {
  snippetLog('IndexSt must be equal or higher than 1');
  } else if (indexSt <= total) {
  let targetIndex = indexSt - 1;
  snippetLog('targetIndex calculated (ascending): ' + targetIndex);
  let spanXPath = `(//tr[@class="ng-scope"])[${targetIndex + 1}]//span[contains(text(), "Test Contact")]`;
  let span = await page.$(spanXPath);
  if (span) {
  interviewerLT = (await span.textContent())?.trim() || '';
  snippetLog('interviewerLT: ' + interviewerLT);
  } else {
  snippetLog('There are no <span> with "Test Contact"');
  }
  } else {
  snippetLog(`There are not enough <tr> for indexSt = ${indexSt}`);
  }
  const index = indexSt - 1;
  const jobPostingElements = await page.$$('//tr//span[contains(@class,"primary-item")][contains(text(),"Job Posting")]');
  if (index >= 0 && index < jobPostingElements.length) {
  const rawJobText = await jobPostingElements[index].textContent();
  jobPostingName = rawJobText?.trim() || '';
  snippetLog(`jobPostingName: ${jobPostingName}`);
  } else {
  throw new Error(`Index ${index} is out of bounds for Job Postings. Total found: ${jobPostingElements.length}`);
  }
  const testStudentElements = await page.$$('//tr//span[contains(@class,"primary-item")][contains(text(),"Test Student")]');
  if (index >= 0 && index < testStudentElements.length) {
  const rawStudentText = await testStudentElements[index].textContent();
  testStudentName = rawStudentText?.trim() || '';
  snippetLog(`testStudentName: ${testStudentName}`);
  } else {
  throw new Error(`Index ${index} is out of bounds for Test Students. Total found: ${testStudentElements.length}`);
  }
  await page.waitForTimeout(2000);
  var locator = page.locator(`//tr//span[contains(@class,"primary-item")][normalize-space()="${jobPostingName}"]`);
  var count = await locator.count();
  snippetLog(`Total number of found elements: ${count}`);
  snippetLog('Locator: ' + locator);
  if (count === 0) {
  throw new Error(`There are no elements with text "${jobPostingName}"`);
  }
  await locator.nth(count - 1).click();
  snippetLog(`Clicked on last matching locator with text: "${jobPostingName}"`);
  await page.waitForTimeout(10000);
  await page.waitForLoadState('load');
  const errorMessage = await page.$('//*[contains(text(),"Your request could not be processed")]');
  if (errorMessage) {
  snippetLog('Modal with error message');
  const okButton = await page.waitForSelector('//*[contains(text(),"OK")]', { timeout: 5000 });
  await okButton.click();
  await page.reload();
  }
  await page.waitForLoadState('load');
  let found = false;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  let targetXPath = `//span[normalize-space()="${interviewerLT}"]`;
  let targetElement = await page.$(targetXPath);
  snippetLog(`Attempt ${attempt} - Xpath: ${targetXPath}`);
  if (targetElement) {
  if (attempt === 2) {
  snippetLog("Second attempt");
  }
  await targetElement.scrollIntoViewIfNeeded(); // optional
  await targetElement.click();
  snippetLog(`Clicked "${interviewerLT}"`);
  found = true;
  break;
  } else {
  snippetLog(`No element found with text "${interviewerLT}" (Attempt ${attempt})`);
  if (attempt < maxAttempts) {
  snippetLog("Reloading page and retrying...");
  await page.reload();
  await page.waitForTimeout(5000); // wait 5 seconds and then tries again
  }
  }
  }
  if (!found) {
  throw new Error(`No element found with text "${interviewerLT}" at "${jobPostingName}" after ${maxAttempts} attempts`);
  }
  if (indexSt >= 1 && indexSt <= 10) {
  newMinutes = 0;
  } else if (indexSt >= 11 && indexSt <= 45) {
  newMinutes = 6;
  } else if (indexSt >= 46 && indexSt <= 50) {
  newMinutes = 11;
  } else {
  snippetLog(`indexSt (${indexSt}) is out of expected range (1-50)`);
  }
  snippetLog(`newMinutes assigned: ${newMinutes}`);
  if(newMinutes > 0){
  let milliseconds = minutes * 60 * 1000;
  await page.waitForTimeout(milliseconds);
  snippetLog('waited for ' + newMinutes + ' minutes');
  }
  await page.getByRole('link', { name: "Emails" }).click();
  await page.getByRole('link', { name: "Interview Link" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "this link" }).click();
  await page.waitForTimeout(5000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  await page.waitForLoadState('load');
  interviewerurl = page.url();
  snippetLog('interviewerurl: ' + interviewerurl);
  await page.waitForTimeout(2000);
  await page.waitForTimeout(2000);
  const contextCarmen = await page.context().browser().newContext();
  const pageCarmen = await contextCarmen.newPage();
  pageCarmen.goto(interviewerurl);
  await page.waitForLoadState('load');
  indexPages = MK.onSetGV(`0`, null);
  indexWindow = MK.onSetGV(`0`, null);
  newPages = contextCarmen.pages();
  pagesAfterPopUp = newPages[parseInt(indexPages)];
  snippetLog('Redeclared window');
  snippetLog(await page.url());
  await page.reload();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Welcome to your interview experience!" }).hover();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Join Now..." }).click();
  await page.waitForTimeout(10000);
  await page.waitForTimeout(10000);
  await page.locator("a>span.mw-ui-button.mw-ui-quiet").nth(4).click();
  await page.waitForTimeout(5000);
  await page.locator("tr.ant-table-row.ant-table-row-level-0.selectedRowKeys.onChange>td.ant-table-cell.drag-visible.ant-table-cell-ellipsis.ant-table-cell-row-hover").click();
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(5000);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.waitForTimeout(1000);
  await page.waitForTimeout(20000);
});
