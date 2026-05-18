// TC: TC61322
// Appointments - Edit an Existing Appointment - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Appointments - Edit an Existing Appointment - Admin", async ({ page, context }) => {
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
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.getByRole('link', { name: "Appointment" }).click();
  await page.locator("SELECT[name='SelectedAppointmentType']").selectOption("number:10004401016285");
  await page.getByPlaceholder("H:MMpm").fill("5:15pm");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("H:MMpm").click();
  await page.locator("div.form-group>label.control-label").nth(5).click();
  await page.getByPlaceholder("Please input a student").fill("e2e Test Student");
  await page.locator("//DIV[normalize-space() = \"e2e Test Student (e2e.student.fullaccess@campuswide.com)\"]").click();
  await page.locator("SELECT[id='AdviserId'][name='AdviserId']").click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.locator("//LABEL[normalize-space() = \"Location Type*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Virtual\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]/following::select").click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.locator("//LABEL[normalize-space() = \"Preferred Location*\"]").click();
  await page.waitForTimeout(1000);
  await page.locator("//LABEL[normalize-space() = 'Preferred Location*']//following::SELECT").click();
  await page.keyboard.press("ArrowDown");
  await page.getByPlaceholder("Please provide any additional information you would like us to know.").fill("60000");
  fileName = MK.onSetGV(`logomuuk.jpg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Book Appointment" }).click();
  await page.waitForTimeout(2000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
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
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.getByRole('button', { name: "Month" }).click();
  await page.locator("a>span.view-item-text.ng-binding").nth(1).click();
  await page.waitForTimeout(2000);
  await page.waitForTimeout(2000);
  await page.locator("div.fc-content>span.fc-title").click();
  await page.getByRole('heading', { name: "Appointment" }).hover();
  await page.locator("div.tagline>div.ng-binding").hover();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "Close" }).click();
  await page.locator("div.fc-content>div.fc-title").click();
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Please provide any additional information you would like us to know.").fill("Adviser Profile");
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save Appointment" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.locator("a.event-date.ng-scope>tt-date-time-display.ng-binding.ng-isolate-scope").click();
  selector = MK.onSetGV(`//dd[contains(text(),"Testing appointments")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("dl.dl-horizontal>dd.text-area-display.ng-binding").nth(1).hover();
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Cancel Appointment" }).click();
  await page.getByRole('button', { name: "Yes, cancel it" }).click();
  await page.waitForTimeout(1000);
  selector = MK.onSetGV(`//tt-date-time-display[normalize-space()="5:15pm - 5:30pm CST"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
