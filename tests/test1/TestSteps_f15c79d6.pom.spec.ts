// TC: TC64833
// 12TE - School Directory - Add and remove from favorites - Employer

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE - School Directory - Add and remove from favorites - Employer", async ({ page, context }) => {
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

  await page.goto(employerQA, { timeout: 90000 });
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
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "School Directory" }).click();
  await page.getByRole('heading', { name: "School Directory" }).hover();
  await page.getByRole('link', { name: "All" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Abilene Christian University" }).hover();
  selector = MK.onSetGV(`favorite not present`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("//A[normalize-space() = \"Abilene Christian University\"]//ancestor::div[contains(@class,\"tt-card\")]//a[@role=\"button\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Favorites\"]").click();
  await page.getByRole('link', { name: "Abilene Christian University" }).hover();
  await page.locator("//A[normalize-space() = \"Abilene Christian University\"]//ancestor::div[contains(@class,\"tt-card\")]//a[@role=\"button\"]").click();
  await page.reload();
  await page.waitForLoadState('load');
  await page.locator("tt-school-list.ng-scope>div.no-results.ng-binding.ng-scope").hover();
  selector = MK.onSetGV(`//A[normalize-space() = "Abilene Christian University"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "All" }).click();
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  await page.getByPlaceholder("Search Program Type filter options").fill("Law");
  await page.locator("//LABEL[normalize-space() = \"Law\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//div[@class="card-info-primary"]//i[@class="fal fa-diploma"]//ancestor::span`, null);
  textContent = MK.onSetGV(`Law`, null);
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  await page.locator("button.selected-filter__clear>i.fa.fa-undo").click();
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  await page.waitForLoadState('load');
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.getByPlaceholder("School").fill("e2e");
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//div[@class="card-info-primary"]//a`, null);
  textContent = MK.onSetGV(`E2E`, null);
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
  await page.locator("a.ng-scope>i.fa-heart.far").nth(1).click();
  await page.locator("//SPAN[normalize-space() = \"Favorites\"]").click();
  await expect(page.getByRole('link', { name: "E2E Tests Campuswide" })).toHaveText("E2E Tests Campuswide ");
  await page.locator("a.ng-scope>i.fa-heart.far").nth(1).click();
  await page.reload();
  await page.waitForLoadState('load');
  await page.locator("tt-school-list.ng-scope>div.no-results.ng-binding.ng-scope").hover();
  selector = MK.onSetGV(`//A[normalize-space() = "E2E Tests Campuswide"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "All" }).click();
  await page.waitForLoadState('load');
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.locator("button.selected-filter__clear>i.fa.fa-undo").click();
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.getByRole('link', { name: "Ajman University" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(6000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
});
