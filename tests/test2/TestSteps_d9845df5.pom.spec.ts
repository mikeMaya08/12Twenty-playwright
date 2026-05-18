// TC: TC_A83425
// Students - Profile and Hero Images Visible to Other Students

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Profile and Hero Images Visible to Other Students", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Site Management" }).hover();
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.getByRole('link', { name: "Manage Users" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Manage Users\"]").click();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.getByRole('button', { name: "Add New Student" }).click();
  await page.getByRole('heading', { name: "Student Account Information" }).hover();
  await page.getByPlaceholder("First (Preferred) Name").fill("Muuk Student");
  await page.getByPlaceholder("Last Name").fill("User");
  await expect(page.locator("div.form-group.ng-pristine.ng-scope.ng-invalid.ng-invalid-required>label.control-label.ng-binding")).toContainText("Active*");
  await page.getByPlaceholder("Email Address").fill("studentuser@university.com");
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
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Muuk Student User");
  await page.locator("BUTTON[type='button']").nth(11).click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await expect(page.getByRole('heading', { name: "Login as Student User" })).toContainText("Login as Muuk Student User");
  await expect(page.locator("//DIV[normalize-space() = \"You are about to log in as Muuk Student User. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1)).toContainText("You are about to log in as Muuk Student User. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.");
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/on-login?returnUrl=%2Fdashboard');
  await page.getByRole('link', { name: "Profile" }).click();
  await page.locator("tt-uploaded-image.ng-isolate-scope>div.uploaded-image-cmp.uploaded-image-person").hover();
  await page.locator("//SPAN[normalize-space() = \"Change Image\"]").click();
  await expect(page.getByRole('heading', { name: "Select an Image" })).toHaveText("Select an Image");
  await page.getByRole('link', { name: "Guerras y conflictos" }).click();
  fileName = MK.onSetGV(`profile_pic.jpg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await expect(page.getByRole('heading', { name: "Select an Image" })).toHaveText("Select an Image");
  await page.getByRole('link', { name: "Guerras y conflictos" }).click();
  fileName = MK.onSetGV(`banner_pic.jpg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: "OK" }).click();
  await page.locator("BUTTON[type='button']").nth(11).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await expect(page.getByRole('heading', { name: "Confirm Delete" })).toHaveText("Confirm Delete");
  await page.locator("//LABEL[normalize-space() = \"I understand that deleting a student user will delete the user and all data associated with their account. This action can not be undone.\"]").click();
  await page.getByRole('button', { name: "OK" }).click();
  await expect(page.getByRole('heading', { name: "Success!" })).toHaveText("Success!");
  await expect(page.locator("//DIV[normalize-space() = \"User has been deactivated and successfully flagged for deletion. Deletion occurs within 24 hours. A deactivated user does not have access to the site, is excluded from the standard reports and will not appear in auto complete for student name.\"]").nth(1)).toHaveText("User has been deactivated and successfully flagged for deletion. Deletion occurs within 24 hours. A deactivated user does not have access to the site, is excluded from the standard reports and will not appear in auto complete for student name.");
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  await page.reload();
  await expect(page.locator("//DIV[normalize-space() = \"No users found\"]")).toHaveText("No users found");
});
