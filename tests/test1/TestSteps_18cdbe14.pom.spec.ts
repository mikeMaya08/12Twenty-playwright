// TC: TC59059
// Application Materials - Add new Cover Letters - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Application Materials - Add new Cover Letters - Student", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Application Materials" }).click();
  await page.getByRole('heading', { name: "Cover Letters" }).hover();
  await page.getByRole('link', { name: "Add New" }).click();
  await page.getByRole('heading', { name: "Add New Cover Letter" }).hover();
  await page.locator("div.form-group>label.control-label.ng-binding").hover();
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Amelia_Thermopolis_CoverLetter");
  fileName = MK.onSetGV(`MuukTest-CoverLetter.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("a.file-name>span.temp-file.ng-binding").hover();
  await page.getByRole('link', { name: "Submit" }).click();
  await page.getByRole('link', { name: "Amelia_Thermopolis_CoverLetter" }).hover();
  selector = MK.onSetGV(` //A[@role=\'button\'][contains(text(),"Amelia_Thermopolis_CoverLetter")]`, null);
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "View Cover Letter" }).hover();
  await page.getByRole('link', { name: "Edit Cover Letter" }).hover();
  await page.getByRole('link', { name: "Delete Cover Letter" }).click();
  await page.getByRole('heading', { name: "Delete Cover Letter" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Cover Letter" }).click();
  await page.waitForTimeout(1000);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
