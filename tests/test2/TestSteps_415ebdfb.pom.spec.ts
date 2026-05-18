// TC: TC_A83525
// Students - Profile Completion Banner Appears&#x2F;Disappears Based on Completion Status

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Profile Completion Banner Appears&#x2F;Disappears Based on Completion Status", async ({ page, context }) => {
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
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByRole('button', { name: "Add New Student" }).click();
  await page.getByRole('heading', { name: "Student Account Information" }).hover();
  await page.getByPlaceholder("First (Preferred) Name").fill("Muuk Profile");
  await page.getByPlaceholder("Last Name").fill("Completer");
  textContent = MK.onSetGV(`profile.completed@gmail.com`, null);
  await page.getByPlaceholder("Email Address").fill("` + textContent + `");
  await expect(page.locator("div.form-group.ng-pristine.ng-scope.ng-invalid.ng-invalid-required>label.control-label.ng-binding")).toContainText("Active*");
  await page.locator("SELECT[name='IsEnrolled']").selectOption("number:1");
  await expect(page.locator("div.form-group.ng-pristine.ng-scope.ng-invalid.ng-invalid-required>label.control-label.ng-binding")).toContainText("User Role*");
  await page.locator("SELECT[name='RoleId']").selectOption("number:3");
  await expect(page.locator("div.form-group.ng-scope.ng-dirty.ng-valid.ng-valid-required>label.control-label.ng-binding").nth(5)).toContainText("Student Group*");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.form-group.ng-scope.ng-dirty.ng-valid.ng-valid-required>label.control-label.ng-binding").nth(5).click();
  await expect(page.locator("//LABEL[normalize-space() = \"Program*\"]")).toContainText("Program*");
  await page.locator("SELECT[name='ProgramId']").selectOption("number:1814999953610478");
  await expect(page.locator("//LABEL[normalize-space() = \"College/School*\"]")).toContainText("College/School*");
  await page.locator("SELECT[name='College1Name']").selectOption("number:149999071101701");
  await expect(page.locator("//LABEL[normalize-space() = \"Degree Level*\"]")).toContainText("Degree Level*");
  await page.locator("SELECT[name='DegreeLevelId']").selectOption("number:149999071102056");
  await expect(page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]")).toContainText("Graduation Term*");
  await page.getByRole('button', { name: "Build a Meal" }).click();
  await page.getByPlaceholder("Search").fill("2030");
  await page.locator("//LABEL[normalize-space() = \"Spring 2030\"]").click();
  await page.getByRole('link', { name: "Save Changes" }).click();
  await expect(page.locator("//DIV[@role='alert'][normalize-space() = \"Student saved successfully\"]")).toHaveText("Student saved successfully");
  await page.reload();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Muuk Profile Completer");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
  await page.waitForTimeout(2000);
  await page.waitForLoadState('load');
  await page.locator("BUTTON[type='button']").nth(11).click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('heading', { name: "Login as Muuk Profile Completer" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(2000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Your profile is 0% complete" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Tell us about yourself\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Upload profile picture\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Upload resume\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Add job preferences\"]").hover();
  await page.waitForTimeout(1000);
  await page.locator("div.uploaded-image-cmp.uploaded-image-person>div.uploaded-image-no-image-container.ng-scope").click();
  await page.waitForLoadState('load');
  fileName = MK.onSetGV(`logomuuk.jpg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByRole('heading', { name: "About Muuk Profile" }).hover();
  await page.locator("//DIV[normalize-space() = \"Write a summary to highlight your personality or work experience\"]").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"Add Summary\"]").click();
  await page.waitForTimeout(1000);
  await page.getByRole('heading', { name: "About Muuk Profile" }).click();
  await page.getByRole('heading', { name: "Resume" }).click();
  await page.locator("//SPAN[normalize-space() = \"NO RESUME PROVIDED\"]").hover();
  await page.getByRole('link', { name: "Upload my resume" }).click();
  await page.getByRole('heading', { name: "Application Materials" }).hover();
  await page.getByRole('link', { name: "Add New" }).click();
  await page.getByRole('heading', { name: "Add New Resume" }).hover();
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Resume");
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("//SPAN[normalize-space() = \"Test_Resume_01.pdf\"]").hover();
  await page.getByRole('link', { name: "Submit" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.locator("//SPAN[normalize-space() = \"Add job preferences\"]").click();
  await page.getByRole('heading', { name: "Job Preferences" }).click();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").click();
  await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").click();
  await page.getByRole('link', { name: "Add Preferred City" }).click();
  await page.getByPlaceholder("Search Preferred City").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.getByRole('link', { name: "Add Preferred Country" }).click();
  await page.getByPlaceholder("Search Preferred Country").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("//dt[normalize-space()=\"What is your post-graduation Preferred Industry?\"]").hover();
  await page.locator("//DIV[@title='Accounting'][normalize-space() = \"1. Accounting\"]").hover();
  await page.locator("//dt[normalize-space()=\"What is your post-graduation preferred job function?\"]").hover();
  await page.locator("//DIV[@title='Accounting'][normalize-space() = \"1. Accounting\"]").hover();
  await page.locator("//dt[normalize-space()=\"What is your post-graduation preferred job city?\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"1. Grand Rapids - MI\"]").hover();
  await page.locator("//dt[normalize-space()=\"What is your post-graduation preferred job country?\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"1. United States (USA)\"]").hover();
  await page.getByRole('heading', { name: "About Muuk Profile" }).click();
  await page.locator("//SPAN[normalize-space() = \"Edit Summary\"]").click();
  await page.keyboard.press("Shift");
  await page.keyboard.up("Home");
  await page.keyboard.press("Shift");
  await page.getByRole('heading', { name: "About Muuk Profile" }).click();
  await page.locator("//SPAN[normalize-space() = \"Add Summary\"]").click();
  await page.waitForTimeout(1000);
  await page.getByRole('heading', { name: "About Muuk Profile" }).click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").click();
  await page.getByRole('link', { name: "Log Out" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.admin.qa-12twenty.com/');
  await page.locator("BUTTON[type='button']").nth(11).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("//LABEL[normalize-space() = \"I understand that deleting a student user will delete the user and all data associated with their account. This action can not be undone.\"]").click();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Muuk Profile Completer");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
});
