// TC: TC65438
// Resource Library - Add and view all resource types, add and browse folders - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Resource Library - Add and view all resource types, add and browse folders - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Resource Library" }).click();
  await page.getByRole('heading', { name: "Resource Library" }).hover();
  await page.getByRole('button', { name: "Action" }).click();
  await page.getByRole('link', { name: "Add File" }).hover();
  await page.getByRole('link', { name: "Add Link" }).hover();
  await page.getByRole('link', { name: "Add Folder" }).hover();
  await page.getByRole('link', { name: "Add File" }).click();
  await page.getByRole('heading', { name: "Add File" }).hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.locator("div.form-group.file-upload>label.control-label").hover();
  await page.locator("div.form-controls>input.form-control.ng-untouched.ng-valid").fill("MuukFile1");
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("a.file-name>span.temp-file.ng-binding").hover();
  await page.locator("a.file-name>span.ng-binding.ng-scope").hover();
  await page.locator("//LABEL[normalize-space() = \"Student Group\"]").hover();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Student Group\"]").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Submit" }).click();
  await page.getByRole('link', { name: "MuukFile1" }).hover();
  await page.locator("tr.ng-scope>td.ng-binding.ng-scope").nth(1).hover();
  await page.getByRole('button', { name: "Action" }).click();
  await page.getByRole('link', { name: "Add Link" }).click();
  await page.getByRole('heading', { name: "Add Link" }).hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.locator("div.form-controls>input.form-control.ng-untouched.ng-valid").fill("MuukLink1");
  await page.locator("//LABEL[normalize-space() = \"Student Group\"]").hover();
  await page.getByPlaceholder("Search").fill("https://e2e-tests-campuswide.qa-12twenty.com");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Bulk Update 1\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Bulk Update 2\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Bulk Update 3\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Current Students\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Group 1\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Group 2\"]").hover();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Submit" }).click();
  await page.getByRole('link', { name: "MuukLink1" }).hover();
  await page.locator("//td[normalize-space()=\"All\"]").hover();
  await page.getByRole('button', { name: "Action" }).click();
  await page.getByRole('link', { name: "Add Folder" }).click();
  await page.getByRole('heading', { name: "Add Folder" }).hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.locator("div.form-controls>input.form-control.ng-untouched.ng-valid").fill("MuukFolder1");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.form-group>label.control-label").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Submit" }).click();
  await page.getByRole('link', { name: "MuukFolder1" }).hover();
  await page.locator("tr.ng-scope>td.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Action" }).click();
  await page.getByRole('link', { name: "Add File" }).click();
  await page.getByRole('heading', { name: "Add File" }).hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.locator("div.form-group.file-upload>label.control-label").hover();
  await page.locator("div.form-controls>input.form-control.ng-untouched.ng-valid").fill("MuukFile2");
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("//LABEL[normalize-space() = \"Student Group\"]").hover();
  await page.locator("a.file-name>span.temp-file.ng-binding").hover();
  await page.locator("a.file-name>span.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Student Group\"]").click();
  await page.getByRole('button', { name: "Submit" }).click();
  await page.getByRole('link', { name: "MuukFile2" }).hover();
  await page.locator("tr.ng-scope>td.ng-binding.ng-scope").nth(3).hover();
  await page.getByRole('link', { name: "Home" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Resource Library" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.getByRole('link', { name: "MuukFolder1" }).hover();
  await page.getByRole('link', { name: "MuukFile1" }).hover();
  await page.getByRole('link', { name: "MuukFile2" }).hover();
  await page.getByRole('link', { name: "MuukLink1" }).hover();
  await page.getByPlaceholder("Folder or Resource Name").fill("MuukFolder1");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.locator("//SPAN[normalize-space() = \"> Search Results\"]").hover();
  await page.getByRole('link', { name: "MuukFolder1" }).hover();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "Resource Library" }).click();
  await page.locator("BUTTON[type='button']").nth(6).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Copy Student URL" }).hover();
  await page.getByRole('link', { name: "Copy Career Center User URL" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete folder" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete folder" }).click();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.waitForTimeout(1000);
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete file" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete file" }).click();
  selector = MK.onSetGV(`//A[contains(text(),"MuukFile1")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "MuukFile2" }).hover();
  await page.locator("BUTTON[type='button']").nth(8).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete file" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete file" }).click();
  selector = MK.onSetGV(`//A[contains(text(),"MuukFile2")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "MuukLink1" }).hover();
  await page.locator("BUTTON[type='button']").nth(9).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete link" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete link" }).click();
  selector = MK.onSetGV(`//A[contains(text(),"MuukLink1")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("div.search-results.resources>div.no-results").hover();
  await page.reload();
  await page.reload();
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "Resource Library" }).click();
  await page.reload();
  await page.locator("div.search-results.resources>div.no-results").hover();
});
