// TC: TC66666
// Students - Create a new student and sign up as the user

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Create a new student and sign up as the user", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideAdminURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.waitForLoadState('load');
  await page.locator("//a[normalize-space()=\"Site Management\"]//following-sibling::button").click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Student Muuk");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
  selector = MK.onSetGV(`//A[contains(text(),"Student Muuktest")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("BUTTON[type='button']").nth(13).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("div.ng-scope>section.ng-binding").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.reload();
  }
  await page.reload();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: "Add New Student" }).click();
  await page.getByPlaceholder("First (Preferred) Name").fill("Student");
  await page.getByPlaceholder("Last Name").fill("Muuktest");
  await page.getByPlaceholder("Email Address").fill("muukteststud@muukteam.testinator.com");
  await page.locator("SELECT[name='ProgramId']").selectOption("number:1814999953610478");
  await page.locator("SELECT[name='College1Name']").selectOption("number:149999071101701");
  await page.locator("SELECT[name='DegreeLevelId']").click();
  await page.locator("SELECT[name='DegreeLevelId']").selectOption("number:149999071102056");
  await page.locator("SELECT[name='Major1Name']").selectOption("number:360038051146044");
  await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]").click();
  await page.getByRole('button', { name: "-- Graduation Term --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Spring 2030\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.getByPlaceholder("Student Id").fill("sdfdsf");
  await page.locator("SELECT[name='IsEnrolled']").selectOption("number:1");
  await page.locator("//LABEL[contains(normalize-space(),\"User Role*\")]").click();
  await page.locator("SELECT[name='RoleId']").selectOption("number:3");
  await page.locator("//LABEL[contains(normalize-space(),\"Student Group*\")]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(3000);
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Student Muuktest");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
  await page.reload();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Student Muuktest");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
  await page.getByRole('link', { name: "Student Muuktest" }).hover();
  await page.locator("tr>td.ng-binding").hover();
  await page.locator("SPAN[title='Spring 2030, Bulk Update 1, Bulk Update 2, Bulk Update 3, Current Students, Group 1, Group 2']").hover();
  await page.locator("BUTTON[type='button']").nth(13).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Login as user..." }).hover();
  await page.getByRole('link', { name: "Send PW Reset" }).hover();
  await page.getByRole('link', { name: "Manual PW Reset" }).hover();
  await page.getByRole('link', { name: "Reset Sign-In Cookies" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('heading', { name: "Login as Student Muuktest" }).hover();
  await page.locator("//DIV[normalize-space() = \"You are about to log in as Student Muuktest. This user's account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/on-login?returnUrl=%2Fdashboard');
  await page.waitForLoadState('load');
  await expect(page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name")).toHaveText("Student Muuktest");
  await page.getByRole('link', { name: "Profile" }).click();
  await expect(page.getByRole('heading', { name: "Student Muuktest" })).toHaveText("                Student Muuktest                                                                                                                                ");
  await expect(page.locator("span.sub-header.ng-scope>span.ng-binding.ng-scope")).toHaveText("muukteststud@muukteam.testinator.com");
  selector = MK.onSetGV(`//A[contains(text(),"Student Muuktest")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("BUTTON[type='button']").nth(13).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("div.ng-scope>section.ng-binding").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.reload();
  }
  await page.waitForLoadState('load');
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Student Muuktest");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
  await page.locator("tt-user-list.ng-scope.ng-isolate-scope>div.no-results").hover();
  selector = MK.onSetGV(`//A[@role=\'button\'][contains(text(),"Student Muuktest")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
