// TC: TC71818
// Appointments - Student can create a new appointment and its displayed in student calendar - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Appointments - Student can create a new appointment and its displayed in student calendar - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.getByRole('heading', { name: "Appointments" }).hover();
  await page.getByRole('link', { name: "Appointment" }).click();
  await page.getByRole('heading', { name: "Book Appointment" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]").hover();
  await page.getByRole('button', { name: "Pacific Time (US & Canada) (UTC-08:00)" }).click();
  await page.locator("//LABEL[normalize-space() = \"Central Time (US & Canada) (UTC-06:00)\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.locator("div.form-group.ng-scope>label.control-label").nth(1).hover();
  await page.locator("div.form-group>label.control-label").nth(2).click();
  await page.locator("SELECT[name='SelectedAppointmentType']").selectOption("number:10004401016284");
  await page.locator("div.form-group.ng-scope>label.control-label").nth(2).hover();
  await page.locator("div.form-group>label.control-label").nth(4).hover();
  await page.getByPlaceholder("Please input a student").fill("e2e Test Student ");
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.locator("div>span.time-span-to").hover();
  await page.getByPlaceholder("H:MMpm").fill("7:00pm");
  await page.getByPlaceholder("H:MMpm").click();
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("H:MMpm").fill("8:30pm");
  await page.locator("div.form-group>label.control-label").nth(5).click();
  await page.locator("SELECT[name='AdviserId']").selectOption("number:540016055100183");
  await page.getByRole('heading', { name: "Location" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Location Type*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Virtual\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.waitForTimeout(1000);
  await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").hover();
  await page.locator("SELECT[name='VirtualLocationTypeId']").selectOption("number:3");
  await page.locator("//LABEL[normalize-space() = \"Preferred Location*\"]").hover();
  await page.locator("//LABEL[normalize-space() = 'Preferred Location*']//following::SELECT").selectOption("number:10007603102000");
  await page.locator("div.form-group>label.control-label").nth(9).hover();
  await page.getByPlaceholder("Please provide any additional information you would like us to know.").fill("Additional Information");
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Book Appointment" }).click();
  await page.getByRole('heading', { name: "Appointment" }).hover();
  await page.locator("button.btn-modal-header>i.far.fa-times").click();
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
  await page.getByRole('link', { name: "Home" }).click();
  await page.getByRole('heading', { name: "My Calendar" }).hover();
  await page.getByRole('link', { name: "All Calendar Events" }).click();
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "Day" }).click();
  await page.getByRole('link', { name: "e2e Test Admin - Appointment" }).hover();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("div.fc-content>div.fc-title").click();
  await page.getByRole('heading', { name: "Appointment" }).hover();
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.getByRole('link', { name: "Cancel Appointment" }).click();
  await page.getByRole('heading', { name: "Cancel the Appointment" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "No, return to the appointment" }).hover();
  await page.getByRole('button', { name: "Yes, cancel it" }).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//div[@class="fc-content"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Home" }).click();
  await page.getByRole('link', { name: "Appointments" }).click();
  selector = MK.onSetGV(`//A[@role=\'button\'][contains(text(),"e2e Test Admin - Appointment")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
