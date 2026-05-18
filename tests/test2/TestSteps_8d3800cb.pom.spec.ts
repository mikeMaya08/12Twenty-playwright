// TC: TC_A80380
// 12TE Events - Career Fairs - List page, filters, links open

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE Events - Career Fairs - List page, filters, links open", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(employerQA, { timeout: 90000 });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Email Address").fill("e2e.employeruser.subscription.admin@walmart.com");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.waitForTimeout(2000);
  await page.locator("button.btn.btn-school.submit-login-form>span").click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").hover();
  await page.getByRole('link', { name: "Career Fairs" }).click();
  await page.getByRole('link', { name: "All Career Fairs" }).hover();
  await page.getByRole('link', { name: "Registered" }).click();
  await page.getByRole('link', { name: "All Career Fairs" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//tbody//tr[@class="event ng-scope"]`, null);
  var elements = page.locator(selector);
  resultsCount = await elements.filter({ has: page.locator(':visible') }).count();
  snippetLog(`Visible elements: ${resultsCount}`);
  if (resultsCount === 0) {
  snippetLog('- - - No visible elements found');
  }
  await page.getByRole('button', { name: "List" }).click();
  await page.getByRole('link', { name: "Month" }).click();
  selector = MK.onSetGV(`//div[@class="fc-content"]`, null);
  var elements = page.locator(selector);
  resultsCount = await elements.filter({ has: page.locator(':visible') }).count();
  snippetLog(`Visible elements: ${resultsCount}`);
  if (resultsCount === 0) {
  snippetLog('- - - No visible elements found');
  }
  await page.getByRole('button', { name: "Month" }).click();
  await page.getByRole('link', { name: "Week" }).click();
  await page.getByRole('button', { name: "Today" }).click();
  var elements = page.locator(selector);
  resultsCount = await elements.filter({ has: page.locator(':visible') }).count();
  snippetLog(`Visible elements: ${resultsCount}`);
  if (resultsCount === 0) {
  snippetLog('- - - No visible elements found');
  }
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "Day" }).click();
  var elements = page.locator(selector);
  resultsCount = await elements.filter({ has: page.locator(':visible') }).count();
  snippetLog(`Visible elements: ${resultsCount}`);
  if (resultsCount === 0) {
  snippetLog('- - - No visible elements found');
  }
  await page.getByRole('button', { name: "Day" }).click();
  await page.getByRole('link', { name: "List" }).click();
  await page.getByRole('button', { name: "End Date All Future (empty)" }).hover();
  await page.getByRole('button', { name: "Event Status Registration Not Open, Registr... (2 Total) (empty)" }).hover();
  await page.waitForTimeout(2000);
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  snippetLog('textContent: ' + textContent);
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.locator("//SPAN[normalize-space() = \"School\"]").nth(1).hover();
  await page.getByPlaceholder("School").fill("` + textContent + `");
  snippetLog('textContent: ' + textContent);
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  selector = MK.onSetGV(`//tbody//tr//td//span[@class="sub-info ng-binding"]`, null);
  var elements = await page.$$(selector);
  snippetLog('selector: ' + selector);
  snippetLog('textContent: ' + textContent);
  for (let i = 0; i < elements.length - 1; i++) {
  var content = await elements[i].textContent();
  if (!content || !content.includes(textContent)) {
  snippetLog(`Element does not contain expected text: "${textContent}", it contains "${content}"`);
  throw new Error(`Element does not contain expected text: "${textContent}", it contains "${content}"`);
  }
  }
  snippetLog('All elements (except last) contain expected text.');
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.locator("button.selected-filter__clear>i.fa.fa-undo").click();
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.waitForTimeout(2000);
  await page.locator("span.href-link-text.show-on-hover.external-link-icon>span.primary-item-text.ng-binding").click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await expect(page.getByRole('heading', { name: "Invite Only Fair" })).toContainText("` + textContent + `");
});
