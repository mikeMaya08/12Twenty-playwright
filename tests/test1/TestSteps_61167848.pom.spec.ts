// TC: TC65807
// On Login - Attributes on login for interval &#39;once&#39; and specific student group - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("On Login - Attributes on login for interval &#39;once&#39; and specific student group - Admin", async ({ page, context }) => {
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
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Manage Users" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).hover();
  await page.getByRole('link', { name: "Admins" }).hover();
  await page.getByRole('link', { name: "Employers" }).hover();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.getByRole('link', { name: "Bulk Student Upload" }).hover();
  await page.getByRole('button', { name: "Add New Student" }).click();
  await page.getByPlaceholder("First (Preferred) Name").fill("MuukTest");
  await page.getByPlaceholder("Last Name").fill("Student");
  textContent = MK.onSetGV(` random text`, 5);
  await page.getByPlaceholder("Email Address").fill("muukteststudent@muukteam.testinator.com");
  await page.locator("//LABEL[normalize-space() = \"Program*\"]").click();
  await page.locator("SELECT[name='ProgramId']").selectOption("number:1814999953610478");
  await page.locator("//LABEL[normalize-space() = \"College/School*\"]").click();
  await page.locator("SELECT[name='College1Name']").selectOption("number:149999071101701");
  await page.locator("//LABEL[normalize-space() = \"Degree Level*\"]").click();
  await page.locator("SELECT[name='DegreeLevelId']").selectOption("number:149999071102056");
  await page.locator("//LABEL[normalize-space() = \"Major/Academic Program\"]").click();
  await page.locator("SELECT[name='Major1Name']").selectOption("number:360038051146044");
  await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]").click();
  await page.getByRole('button', { name: "-- Graduation Term --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Spring 2030\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[contains(normalize-space(),\"Student Id\")]").click();
  await page.getByPlaceholder("Student Id").fill("` + textContent + `");
  await page.locator("//LABEL[contains(normalize-space(),\"Active*\")]").click();
  await page.locator("SELECT[name='IsEnrolled']").selectOption("number:1");
  await page.locator("//LABEL[contains(normalize-space(),\"User Role*\")]").click();
  await page.locator("SELECT[name='RoleId']").selectOption("number:3");
  await page.locator("//LABEL[contains(normalize-space(),\"Student Group*\")]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(5000);
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("MuukTest Student");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "MuukTest Student" }).hover();
  await page.locator("tr>td.ng-binding").hover();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Attributes" }).hover();
  await page.getByRole('link', { name: "Picklists" }).hover();
  await page.getByRole('link', { name: "Login" }).click();
  await page.getByRole('heading', { name: "Survey on Login" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Student Group\"]").click();
  await page.getByRole('button', { name: "New" }).click();
  await page.getByRole('heading', { name: "New Configuration" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Interval*\"]").hover();
  await page.locator("SELECT[name='']").selectOption("number:1");
  await page.locator("//LABEL[normalize-space() = \"Target Student Groups\"]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Attributes *\"]").click();
  await page.getByRole('button', { name: "Add Attribute" }).click();
  await page.getByRole('link', { name: "Are you a student athlete?" }).click();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Once" }).hover();
  await page.locator("dl.dl-horizontal>dt").hover();
  await page.locator("span>span.ng-binding.ng-scope").hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding").hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.locator("div.results-view-options>button.btn.selected").click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("MuukTest Student");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "MuukTest Student" }).click();
  await page.waitForTimeout(2000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Sign up for an account" }).click();
  await page.getByRole('heading', { name: "Join the E2E-CPW Platform" }).hover();
  await page.locator("div.clearfix>label.pull-left").hover();
  await page.locator("div.ng-scope>label").hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.getByPlaceholder("Email Address").fill("muukteststudent@muukteam.testinator.com");
  await page.locator("div.form-group>label.control-label").nth(1).click();
  await page.getByPlaceholder("Password").fill("MuukT!1234");
  await expect(page.locator("ul>li")).toHaveText("Minimum 10 characters");
  await expect(page.locator("ul>li").nth(1)).toHaveText("An uppercase letter");
  await expect(page.locator("ul>li").nth(2)).toHaveText("A lowercase letter");
  await expect(page.locator("ul>li").nth(3)).toHaveText("A special character (!,@,#,$,%,^,&,*)");
  await expect(page.locator("ul>li").nth(4)).toHaveText("A number");
  await expect(page.locator("ul>li").nth(5)).toHaveText("Example: ThisSchool10$");
  await page.getByPlaceholder("Password").fill("MuukT!1234");
  await page.locator("div.form-group>label.control-label").nth(2).click();
  await page.getByPlaceholder("Confirm New Password").fill("MuukT!1234");
  await page.locator("//LABEL[contains(normalize-space(),\"I agree to the 12Twenty Terms of Service\")]//input").click();
  await page.locator("//P[normalize-space() = \"Already a member? Student/Alumni Log In\"]").hover();
  await page.getByRole('button', { name: "Student/Alumni Sign Up" }).click();
  await page.getByRole('heading', { name: "Hi MuukTest!" }).hover();
  await page.waitForTimeout(2000);
  await page.locator("div>p.sub-title").hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Are you a student athlete?\")]").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"No\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.getByRole('button', { name: "Save & Continue" }).click();
  await page.waitForTimeout(5000);
  var labelExists = await page.$('//label[normalize-space() = "Are you a student athlete?"]');
  if (labelExists) {
  var yesLabel = await page.$('//label[normalize-space() = "Yes"]');
  if (yesLabel) {
  await yesLabel.click();
  await page.waitForTimeout(3000);
  var saveButton = await page.$('//button[normalize-space() = "Save & Continue"]');
  if (saveButton) {
  await saveButton.click();
  } else {
  snippetLog('Button "Save & Continue" was not found');
  }
  } else {
  snippetLog('"Yes" was not found');
  }
  } else {
  snippetLog('"Are you a student athlete?" is not present on page');
  }
  var labelExists = await page.$('//label[normalize-space() = "Are you a student athlete?"]');
  if (labelExists) {
  var yesLabel = await page.$('//label[normalize-space() = "Yes"]');
  if (yesLabel) {
  await yesLabel.click();
  await page.waitForTimeout(3000);
  var saveButton = await page.$('//button[normalize-space() = "Save & Continue"]');
  if (saveButton) {
  await saveButton.click();
  } else {
  snippetLog('Button "Save & Continue" was not found');
  }
  } else {
  snippetLog('"Yes" was not found');
  }
  } else {
  snippetLog('"Are you a student athlete?" is not present on page');
  }
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.waitForLoadState('load');
  await page.locator("//dt[normalize-space()=\"Student Athlete\"]").click();
  await expect(page.locator("//dt[normalize-space()=\"Student Athlete\"]/following-sibling::dd//span")).toHaveText("Yes");
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").click();
  await page.getByRole('link', { name: "Log Out" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "MuukTest Student" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Login As" }).click();
  await page.waitForTimeout(4000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").click();
  selector = MK.onSetGV(`//LABEL[normalize-space() = "Are you a student athlete?"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "Account Settings" }).hover();
  await page.getByRole('link', { name: "Email History" }).hover();
  await page.getByRole('link', { name: "Log Out" }).click();
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByRole('button', { name: "Add New Student" }).click();
  await page.getByPlaceholder("First (Preferred) Name").fill("MuukTest");
  await page.getByPlaceholder("Last Name").fill("Student2");
  await page.getByPlaceholder("Email Address").fill("muukteststudent2@muukteam.testinator.com");
  await page.locator("//LABEL[normalize-space() = \"Program*\"]").click();
  await page.locator("SELECT[name='ProgramId']").selectOption("number:1814999953610478");
  await page.locator("//LABEL[normalize-space() = \"College/School*\"]").click();
  await page.locator("SELECT[name='College1Name']").selectOption("number:149999071101701");
  await page.locator("//LABEL[normalize-space() = \"Degree Level*\"]").click();
  await page.locator("SELECT[name='DegreeLevelId']").selectOption("number:149999071102056");
  await page.locator("//LABEL[normalize-space() = \"Major/Academic Program\"]").click();
  await page.locator("SELECT[name='Major1Name']").selectOption("number:360038051146045");
  await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]").click();
  await page.getByRole('button', { name: "-- Graduation Term --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Summer 2029\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[contains(normalize-space(),\"Student Id\")]").click();
  await page.getByPlaceholder("Student Id").fill("M1232");
  await page.locator("//LABEL[contains(normalize-space(),\"Active*\")]").click();
  await page.locator("SELECT[name='IsEnrolled']").selectOption("number:1");
  await page.locator("//LABEL[contains(normalize-space(),\"User Role*\")]").click();
  await page.locator("SELECT[name='RoleId']").selectOption("number:3");
  await page.locator("//LABEL[contains(normalize-space(),\"Student Group*\")]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("MuukTest Student2");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "MuukTest Student2" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("MuukTest Student2");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "MuukTest Student2" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Add Note" }).hover();
  await page.getByRole('link', { name: "Flag User" }).hover();
  await page.waitForTimeout(3000);
  await page.waitForTimeout(3000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Sign up for an account" }).click();
  await page.getByRole('heading', { name: "Join the E2E-CPW Platform" }).hover();
  await page.locator("div.clearfix>label.pull-left").hover();
  await page.locator("div.ng-scope>label").hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.getByPlaceholder("Email Address").fill("muukteststudent2@muukteam.testinator.com");
  await page.locator("div.form-group>label.control-label").nth(1).click();
  await page.getByPlaceholder("Password").fill("MuukT!1234");
  await expect(page.locator("ul>li")).toHaveText("Minimum 10 characters");
  await expect(page.locator("ul>li").nth(1)).toHaveText("An uppercase letter");
  await expect(page.locator("ul>li").nth(2)).toHaveText("A lowercase letter");
  await expect(page.locator("ul>li").nth(3)).toHaveText("A special character (!,@,#,$,%,^,&,*)");
  await expect(page.locator("ul>li").nth(4)).toHaveText("A number");
  await expect(page.locator("ul>li").nth(5)).toHaveText("Example: ThisSchool10$");
  await page.getByPlaceholder("Password").fill("MuukT!1234");
  await page.locator("div.form-group>label.control-label").nth(2).click();
  await page.getByPlaceholder("Confirm New Password").fill("MuukT!1234");
  await page.locator("//LABEL[contains(normalize-space(),\"I agree to the 12Twenty Terms of Service\")]//input").click();
  await page.locator("//P[normalize-space() = \"Already a member? Student/Alumni Log In\"]").hover();
  await page.getByRole('button', { name: "Student/Alumni Sign Up" }).click();
  selector = MK.onSetGV(`//LABEL[normalize-space() = "Are you a student athlete?"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").click();
  await page.getByRole('link', { name: "Account Settings" }).hover();
  await page.getByRole('link', { name: "Email History" }).hover();
  await page.getByRole('link', { name: "Log Out" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("muukteststudent@muukteam.testinator.com");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "MuukTest Student" }).hover();
  await page.locator("tr>td.ng-binding").hover();
  await page.locator("div.ant-radio-group.ant-radio-group-outline.ant-radio-group-large.sc-ab647135-0.blHlrN.css-eqeg24>label.ant-radio-button-wrapper.css-eqeg24").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Login as user..." }).hover();
  await page.getByRole('link', { name: "Send PW Reset" }).hover();
  await page.getByRole('link', { name: "Manual PW Reset" }).hover();
  await page.getByRole('link', { name: "Reset Sign-In Cookies" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("div.ng-scope>section.ng-binding").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("muukteststudent@muukteam.testinator.com");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.locator("tt-user-list.ng-scope.ng-isolate-scope>div.no-results").click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("muukteststudent2@muukteam.testinator.com");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "MuukTest Student2" }).hover();
  await page.locator("tr>td.ng-binding").hover();
  await page.locator("div.ant-radio-group.ant-radio-group-outline.ant-radio-group-large.sc-ab647135-0.blHlrN.css-eqeg24>label.ant-radio-button-wrapper.css-eqeg24").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Login as user..." }).hover();
  await page.getByRole('link', { name: "Send PW Reset" }).hover();
  await page.getByRole('link', { name: "Manual PW Reset" }).hover();
  await page.getByRole('link', { name: "Reset Sign-In Cookies" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("div.ng-scope>section.ng-binding").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("tt-user-list.ng-scope.ng-isolate-scope>div.no-results").hover();
  await page.locator("a>span.notification-name").nth(17).click();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Login" }).click();
  await page.locator("//h4[normalize-space()=\"Once\"]//following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Configuration" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Configuration" }).click();
  await expect(page.locator("div.auto-close>span")).toHaveText("Successfully deleted configuration");
});
