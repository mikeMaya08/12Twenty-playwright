// TC: TC72046
// LoadTesting - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("LoadTesting - Student", async ({ page, context }) => {
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
  await page.waitForTimeout(10000);
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  if(minutes > 0){
  if(context.index > executionNum){
  minutes = newMinutes;
  }
  let milliseconds = minutes * 60 * 1000;
  await page.waitForTimeout(milliseconds);
  }
  await page.locator("//li[normalize-space()=\"Command Center\"]").click();
  await page.getByRole('link', { name: "Waiting" }).click();
  await page.waitForTimeout(10000);
  await page.waitForLoadState('load');
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
  // Locator en lugar de $$
  const elements = page.locator('//tr//span[contains(@class,"primary-item")][contains(text(),"Test Student")]');
  const total = await elements.count();
  snippetLog('Total: ' + total);
  if (total === 0) {
  throw new Error('No students found with that XPath.');
  }
  indexSt -= 1;
  snippetLog('indexSt: ' + indexSt);
  if (typeof indexSt !== 'number') {
  throw new Error('indexSt is undefined or not a number.');
  }
  const targetIndex = total - 1 - indexSt;
  snippetLog('targetIndex: ' + targetIndex);
  if (targetIndex >= 0 && targetIndex < total) {
  snippetLog('inside if');
  const target = elements.nth(targetIndex);
  // Get text before clicking
  const text = await target.textContent();
  // Click and wait for navigation
  await Promise.all([
  page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  target.click()
  ]);
  snippetLog(`Clicked student "${text?.trim()}" at reverse index ${indexSt} (absolute index ${targetIndex})`);
  } else {
  throw new Error(`Invalid index: There are ${total} students, but tried to access reverse index ${indexSt}`);
  }
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Login As" }).click();
  await page.waitForTimeout(10000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(5000);
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "Bypass "On Next Login" (Admin Only)"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//A[@role='button'][normalize-space() = \"Bypass \"On Next Login\" (Admin Only)\"]").click();
  }
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  await page.waitForTimeout(5000);
  await page.getByPlaceholder("Employer, Job Title, or Keyword").fill("` + jobPostingName + `");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("//SPAN[normalize-space() = \"Job Status\"]").click();
  await page.locator("button.selected-filter__remove>i.far.fa-trash-alt").click();
  await page.locator(`//*[normalize-space()="${jobPostingName}"]`).nth(0).click();
  snippetLog(`Clicked on the span with text: ${jobPostingName}`);
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//SPAN[contains(text(),"12twenty Meeting")]`, null);
  const timeout = 30000;
  const interval = 500;
  let found = false;
  while (elapsed < timeout) {
  const isVisible = await page.locator(selector).isVisible({ timeout: 0 });
  if (isVisible) {
  console.log("Elemento encontrado.");
  found = true;
  break; // <-- salimos del loop
  } else {
  console.log("No encontrado, esperando...");
  }
  await page.waitForTimeout(interval);
  elapsed += interval;
  }
  if (!found) {
  snippetLog("Refreshing...");
  await page.reload();
  await page.locator(`//*[normalize-space()="${jobPostingName}"]`).nth(0).click();
  snippetLog(`Clicked on the span with text: ${jobPostingName}`);
  }
  await page.locator("a.meeting-join-link.ng-scope>span.meeting-join-link-text.ng-binding").click();
  await page.waitForTimeout(4000);
  await page.waitForLoadState('load');
  await page.waitForTimeout(15000);
  await page.reload();
  await page.getByRole('link', { name: "Join Now..." }).click();
  await page.waitForTimeout(1000);
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: "Request to join" }).click();
  await page.getByRole('heading', { name: "Waiting for host to respond" }).hover();
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(15000);
  const frameElement = page.frameLocator('//iframe[@id="callFrame"]');
  snippetLog('Iframe found');
  const selectors = [
  '//*[contains(@class,"content")]',
  '//*[contains(@class,"title-reaction")]',
  '//*[contains(@class,"title-info")]',
  '//*[contains(@class,"title-actions")]',
  '//*[contains(@id,"local")]',
  '//*[contains(@class,"noVideo")]'
  ];
  for (const selector of selectors) {
  const element = frameElement.locator(`xpath=${selector}`);
  if (await element.count() > 0) {
  snippetLog(`Found: ${selector}`);
  foundCount++;
  } else {
  snippetLog(`Not found: ${selector}`);
  }
  }
  if (foundCount === 0) {
  throw new Error('No matching elements were found inside the iframe.');
  }
});
