// TC: TC_A77031
// Data Uploads - Download template and create&#x2F;delete new student user

import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test("Data Uploads - Download template and create&#x2F;delete new student user", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.getByPlaceholder("Search by Name, Email Address or ID").hover();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("datauploadteststudent@test.com");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "Data Upload Test"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "Data Upload Test" }).hover();
  await page.locator("//SPAN[@title='Spring 2029, Group 1'][normalize-space() = \"Spring 2029, Group 1\"]").hover();
  await page.locator("tr>td.ng-binding").hover();
  await page.locator("//a[normalize-space()=\"Data Upload Test\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Login as user..." }).hover();
  await page.getByRole('link', { name: "Send PW Reset" }).hover();
  await page.getByRole('link', { name: "Manual PW Reset" }).hover();
  await page.getByRole('link', { name: "Reset Sign-In Cookies" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("//LABEL[normalize-space() = \"I understand that deleting a student user will delete the user and all data associated with their account. This action can not be undone.\"]").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('button', { name: "OK" }).click();
  }
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.getByRole('link', { name: "Data Uploads" }).click();
  await page.getByRole('button', { name: "Download CSV Template" }).click();
  await page.getByRole('heading', { name: "Download Template" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Type *\"]").click();
  await page.locator("div.form-controls>select.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty").selectOption("1001");
  await page.locator("//LABEL[normalize-space() = \"Upload Method *\"]").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "New Upload" }).click();
  await page.getByRole('heading', { name: "New Data Upload" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Select .csv *\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Drop file to attach, or browse\"]").hover();
  await page.waitForTimeout(2000);
  fileName = MK.onSetGV(`Muuktest_Data_Upload.csv`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("//LABEL[normalize-space() = \"Type *\"]").hover();
  await page.locator("div.form-controls>select.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty").selectOption("1001");
  await page.locator("//LABEL[normalize-space() = \"Upload Method *\"]").hover();
  await page.locator("div.form-controls>select.form-control.ng-pristine.ng-untouched.ng-not-empty.ng-valid.ng-valid-required").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Upload" }).click();
  await page.getByRole('heading', { name: "Upload Results" }).hover();
  await page.locator("tr>th.row-num").hover();
  await page.locator("tr>th.entity-name").hover();
  await page.getByRole('link', { name: "Test, Data Upload" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.admin.qa-12twenty.com/students/');
  await page.getByRole('link', { name: "Home" }).click();
  await page.locator("//SPAN[normalize-space() = \"Spring 2029, Group 1\"]").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"datauploadteststudent@test.com\"]").nth(2).hover();
  await page.locator("//SPAN[normalize-space() = \"NOT SHARED\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Centralized Univ\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Campus Wide University\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Master\\'s\"]").hover();
  await page.locator("a.ng-binding.ng-isolate-scope>i.far.fa-copy.copy-url-icon").click();
  await page.locator("//SPAN[normalize-space() = \"Email Copied!\"]").hover();
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.getByPlaceholder("Search by Name, Email Address or ID").hover();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("datauploadteststudent@test.com");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "Data Upload Test"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "Data Upload Test" }).hover();
  await page.locator("//SPAN[@title='Spring 2029, Group 1'][normalize-space() = \"Spring 2029, Group 1\"]").hover();
  await page.locator("tr>td.ng-binding").hover();
  await page.locator("//a[normalize-space()=\"Data Upload Test\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Login as user..." }).hover();
  await page.getByRole('link', { name: "Send PW Reset" }).hover();
  await page.getByRole('link', { name: "Manual PW Reset" }).hover();
  await page.getByRole('link', { name: "Reset Sign-In Cookies" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("//LABEL[normalize-space() = \"I understand that deleting a student user will delete the user and all data associated with their account. This action can not be undone.\"]").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('button', { name: "OK" }).click();
  }
  await page.waitForTimeout(2000);
  await page.reload();
  await page.locator("//DIV[normalize-space() = \"No users found\"]").hover();
});
