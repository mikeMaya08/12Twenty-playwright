// TC: TC72630
// MONDAY-Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("MONDAY-Student", async ({ page, context }) => {
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
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  await page.locator("//li[normalize-space()=\"Command Center\"]").click();
  await page.waitForTimeout(20000);
  await page.waitForLoadState('End');
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
  let targetXPath = `//tr//span[contains(@class,"primary-item")][contains(text(),"${testStudentName}")]`;
  let targetElement = await page.$(targetXPath);
  if (targetElement) {
  await targetElement.click();
  snippetLog(`Clicked on element with testStudentName: ${testStudentName}`);
  } else {
  throw new Error(`Element with text "${testStudentName}" not found.`);
  }
  await page.waitForTimeout(10000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Login As" }).click();
  await page.waitForTimeout(5000);
  indexPages = MK.onSetGV(`2`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Employer, Job Title, or Keyword").fill("` + jobPostingName + `");
  await page.waitForTimeout(2000);
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("//SPAN[normalize-space() = \"Job Status\"]").click();
  await page.locator("button.selected-filter__remove>i.far.fa-trash-alt").click();
  if (indexSt >= 1 && indexSt <= 85) {
  newMinutes = 0;
  } else if (indexSt >= 86 && indexSt <= 90) {
  newMinutes = 6;
  } else {
  snippetLog(`indexSt (${indexSt}) is out of expected range (1-90)`);
  }
  snippetLog(`newMinutes asisgned: ${newMinutes}`);
  if(newMinutes > 0){
  let milliseconds = minutes * 60 * 1000;
  await page.waitForTimeout(milliseconds);
  snippetLog('Waited for ' + newMinutes + ' minutes');
  }
  await page.waitForTimeout(2000);
  await page.locator(`//*[normalize-space()="${jobPostingName}"]`).nth(0).click();
  snippetLog(`Clicked on the span with text: ${jobPostingName}`);
  await page.waitForTimeout(15000);
  await page.locator("a.meeting-join-link.ng-scope>span.meeting-join-link-text.ng-binding").click();
  await page.waitForTimeout(5000);
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  await page.reload();
  await page.getByRole('link', { name: "Join Now..." }).click();
  await page.waitForTimeout(1000);
  await page.waitForTimeout(20000);
  await page.getByRole('button', { name: "Request to join" }).click();
  await page.getByRole('heading', { name: "Waiting for host to respond" }).hover();
  if (indexSt >= 1 && indexSt <= 50) {
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
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
  }
});
