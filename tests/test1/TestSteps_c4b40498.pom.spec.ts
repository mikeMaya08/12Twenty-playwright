// TC: TC58675
// Appointments - Book Appointment - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Appointments - Book Appointment - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.getByRole('link', { name: "Appointment" }).click();
  await page.waitForTimeout(2000);
  var afterActualTime = new Date();
  var time = afterActualTime.getHours();
  time = (time - 2) % 24;
  var minutess = afterActualTime.getMinutes();
  var seconds = afterActualTime.getSeconds();
  snippetLog("La hora actual es: " + time + ":" + minutess + ":" + seconds);
  currentTime =  time + ":" + minutess;
  snippetLog(currentTime);
  currentTime =  (time+2) + ":" + (minutess-1);
  snippetLog(currentTime);
  await page.locator("SELECT[name='SelectedAppointmentType']").selectOption("number:10004401016285");
  await page.getByPlaceholder("H:MMpm").click();
  await page.keyboard.down("End");
  await page.keyboard.press("Shift");
  await page.keyboard.up("Home");
  await page.waitForTimeout(1000);
  await page.waitForTimeout(1000);
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
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "Close" }).click();
  await expect(page.locator("div.fc-content>div.fc-title")).toContainText("e2e Test Student (e2e Test Admin)");
  await page.getByRole('link', { name: "Check-in Kiosk" }).click();
  await page.getByRole('heading', { name: "Appointment Check-in" }).hover();
  await page.locator("div>p.ng-scope").hover();
  await page.getByPlaceholder("Email or Student ID").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByRole('button', { name: "Check-in" }).click();
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
  await page.getByRole('link', { name: "Week" }).click();
  const todayLocator = page.locator('//th[contains(@class,"fc-today")]');
  const nextBtn = page.locator('//button[@aria-label="next"]');
  const maxTries = 5;
  let found = false;
  for (let i = 0; i < maxTries; i++) {
  if (await todayLocator.isVisible()) {
  snippetLog("Found fc-today element");
  found = true;
  break;
  }
  snippetLog(`fc-today not found yet, clicking next... (attempt ${i+1})`);
  await nextBtn.click();
  await page.waitForTimeout(500);
  }
  if (!found) {
  throw new Error("fc-today element not found after max attempts");
  }
  await page.locator("a.event-date.ng-scope>tt-date-time-display.ng-binding.ng-isolate-scope").click();
  await page.getByRole('heading', { name: "Appointment" }).hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(1).hover();
  await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.locator("div.fc-content>div.fc-title").click();
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Please provide any additional information you would like us to know.").fill("Adviser Profile");
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save Appointment" }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.reload();
  await page.locator("a.event-date.ng-scope>tt-date-time-display.ng-binding.ng-isolate-scope").click();
  selector = MK.onSetGV(`//dd[contains(text(),"Testing appointments")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Terms" }).click();
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
