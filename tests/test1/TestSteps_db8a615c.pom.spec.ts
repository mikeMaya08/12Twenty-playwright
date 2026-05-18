// TC: TC60172
// Application Materials - Add new Writing Samples - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Application Materials - Add new Writing Samples - Student", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
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
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Application Materials" }).click();
  await page.getByRole('heading', { name: "Writing Samples" }).hover();
  await page.getByRole('link', { name: "Add New" }).click();
  await page.getByRole('heading', { name: "Add New Writing Sample" }).hover();
  await page.locator("div.form-group>label.control-label.ng-binding").hover();
  await page.locator("//LABEL[normalize-space() = \"Upload New Writing Sample *\"]").hover();
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Edgar_Writing Sample");
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
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Submit" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Edgar_Writing Sample" }).hover();
  await page.locator("BUTTON[type='submit']").click();
  await page.getByRole('link', { name: "View Writing Sample" }).hover();
  await page.getByRole('link', { name: "Edit Writing Sample" }).hover();
  await page.getByRole('link', { name: "Delete Writing Sample" }).hover();
  await page.getByRole('link', { name: "Delete Writing Sample" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Delete Writing Sample" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this writing sample?\"]").hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Writing Sample" }).click();
});
