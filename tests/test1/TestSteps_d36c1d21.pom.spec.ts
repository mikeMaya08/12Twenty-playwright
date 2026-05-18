// TC: TC67702
// 12TE Candidate Search - Search and filter for candidates

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE Candidate Search - Search and filter for candidates", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Candidate Search" }).click();
  await page.getByRole('heading', { name: "Candidate Search" }).hover();
  await page.getByRole('link', { name: "All" }).click();
  await page.waitForLoadState('load');
  await page.getByPlaceholder("Resume Keyword Search").fill("Berkeley Haas School of Business");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("//dd[normalize-space()=\"Berkeley Haas School of Business\"]").hover();
  await page.getByPlaceholder("Resume Keyword Search").fill("Full Time MBA");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(1).hover();
  await page.getByPlaceholder("Resume Keyword Search").fill("");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.reload();
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.getByPlaceholder("School").fill("Harvard");
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.waitForTimeout(6000);
  selector = MK.onSetGV(`//dt[normalize-space()="University"]//following-sibling::dd[1]`, null);
  textContent = MK.onSetGV(`Harvard`, null);
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
  await page.getByPlaceholder("School").fill("UCLA");
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.waitForTimeout(4000);
  selector = MK.onSetGV(`//dt[normalize-space()="University"]//following-sibling::dd[1]`, null);
  textContent = MK.onSetGV(`UCLA`, null);
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
  await page.getByPlaceholder("School").fill("Berkeley");
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//dt[normalize-space()="University"]//following-sibling::dd[1]`, null);
  textContent = MK.onSetGV(`Berkeley`, null);
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
  await page.getByRole('button', { name: "Reset" }).click();
  await page.waitForLoadState('load');
  await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").click();
  await page.locator("//LABEL[normalize-space() = \"2030 - 2031\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//dt[normalize-space()="Degree"]//following-sibling::dd[1]`, null);
  textContent = MK.onSetGV(`203`, null);
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
  await page.getByRole('button', { name: "Reset" }).click();
  await page.waitForLoadState('load');
  await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").click();
  await page.locator("//LABEL[normalize-space() = \"2022 - 2023\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//dt[normalize-space()="Degree"]//following-sibling::dd[1]`, null);
  textContent = MK.onSetGV(`202`, null);
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
  await page.getByRole('button', { name: "Reset" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: "More Filters" }).click();
  await page.getByRole('button', { name: "Underrepresented Groups" }).click();
  await page.getByPlaceholder("Search Underrepresented Groups filter options").fill("International");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Underrepresented Groups\"]").click();
  await page.locator("div.results-header-right>div.num-results.ng-binding").hover();
  await page.locator("//SPAN[normalize-space() = \"Underrepresented Groups\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Underrepresented Groups\"]").click();
  selector = MK.onSetGV(`//DIV[normalize-space() = "Underrepresented Groups International (non-US) (empty)"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").click();
  await expect(page.locator("div.results-header-right>div.num-results.ng-binding")).toContainText("Results: ");
  await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").click();
  selector = MK.onSetGV(`//DIV[normalize-space() = "Candidate Availability Students - Internships (empty)"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('button', { name: "More Filters" }).click();
  await page.getByRole('button', { name: "Program Type" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(1).hover();
  await page.locator("div.results-header-right>div.num-results.ng-binding").hover();
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Program Type\"]").click();
  selector = MK.onSetGV(`//DIV[normalize-space() = "Program Type Full Time MBA (empty)"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await page.locator("div.results-header-right>div.num-results.ng-binding").hover();
  await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").click();
  selector = MK.onSetGV(`//DIV[normalize-space() = "Industry Experience Entertainment/Media (empty)"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("//SPAN[normalize-space() = \"Years of work experience\"]").click();
  await page.getByPlaceholder("From").fill("2");
  await page.getByPlaceholder("To").fill("4");
  await page.locator("//DIV[normalize-space() = \"Years of work experience (empty)\"]").nth(1).click();
  await page.locator("div.results-header-right>div.num-results.ng-binding").hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding.ng-scope").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"Years of work experience\"]").click();
  await page.locator("button.selected-filter__clear>i.fa.fa-undo").click();
  await page.locator("//SPAN[normalize-space() = \"Years of work experience\"]").click();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
