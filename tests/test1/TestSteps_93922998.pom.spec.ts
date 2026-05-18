// TC: TC72221
// LoadTesting - Interviewer

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("LoadTesting - Interviewer", async ({ page, context }) => {
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
  indexSt = context.index + 1;
  snippetLog('context.index: ' + context.index)
  snippetLog('indexSt: ' + indexSt);
  await page.waitForTimeout((indexSt*2)*1000);
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
  await page.waitForTimeout(20000);
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  if(minutes > 0){
  if(context.index > executionNum){
  minutes = newMinutes;
  }
  let milliseconds = minutes * 60 * 1000;
  await page.waitForTimeout(milliseconds);
  }
  await page.locator("//li[normalize-space()=\"Command Center\"]").click();
  await page.getByRole('link', { name: "Command Center" }).click();
  await page.waitForTimeout(10000);
  await page.waitForLoadState('load');
  let trElements = await page.$$('//tr[@class="ng-scope"]');
  let total = trElements.length;
  snippetLog('Total <tr> found: ' + total);
  snippetLog('indexSt received: ' + indexSt);
  if (indexSt <= 0) {
  snippetLog('indexSt muest be higher or equal than 1');
  } else if (total >= indexSt) {
  let targetIndex = total - indexSt;
  snippetLog('targetIndex calculated: ' + targetIndex);
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
  let jobPostingElements = await page.$$(
  '//tr//span[contains(@class,"primary-item")][contains(text(),"Job Posting")]'
  );
  let total1 = jobPostingElements.length;
  let targetIndex1 = total1 - 1 - indexSt;
  snippetLog('Index: ' + targetIndex1);
  if (targetIndex1 >= 0 && targetIndex1 < total1) {
  let targetElement1 = jobPostingElements[targetIndex1];
  let textContent1 = await targetElement1.textContent();
  jobPostingName = textContent1?.trim() || '';
  snippetLog('jobPostingName:', jobPostingName);
  } else {
  snippetLog(`Invalid index: ${targetIndex1} (total elements: ${total1})`);
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
  await page.waitForTimeout(5000);
  await page.getByRole('heading', { name: "Job Posting 20" }).click();
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
  await page.getByRole('link', { name: "Emails" }).click();
  await page.getByRole('link', { name: "Interview Link" }).click();
  await page.waitForTimeout(4000);
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
  await page.waitForTimeout(5000);
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
  await page.waitForTimeout(5000);
  await page.locator("//a[normalize-space() = \"Join Interview Room\"]").click();
  await page.waitForTimeout(5000);
  await page.waitForTimeout(12000);
  await page.locator("a>span.mw-ui-button.mw-ui-quiet").nth(4).click();
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.locator("tr.ant-table-row.ant-table-row-level-0.selectedRowKeys.onChange>td.ant-table-cell.drag-visible.ant-table-cell-ellipsis.ant-table-cell-row-hover").click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.waitForTimeout(1000);
});
