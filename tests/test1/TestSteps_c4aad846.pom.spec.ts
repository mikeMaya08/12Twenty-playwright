// TC: TC58662
// Appointments - Add a Block - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Appointments - Add a Block - Admin", async ({ page, context }) => {
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
  var today = new Date();
  var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
  ("0" + today.getDate()).slice(-2) + '/' +
  today.getFullYear();
  date = formattedDate;
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.getByRole('link', { name: "Block" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Create Appointment Block" }).hover();
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.getByPlaceholder("H:MMpm").click();
  await page.locator("ul.ui-timepicker-list>li").nth(30).click();
  await page.getByPlaceholder("H:MMpm").click();
  await page.waitForTimeout(1000);
  await page.locator("ul.ui-timepicker-list>li").nth(50).click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.waitForTimeout(1000);
  await page.locator("div.form-section-inputs.inline-controls>div.form-group").nth(4).click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: "-- Select Focus Industry --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.form-group>label.control-label").nth(7).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: "-- Select Type(s) --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.form-group>label.control-label").nth(7).click();
  await page.locator("//LABEL[normalize-space() = \"Location Type*\"]").click();
  await page.waitForTimeout(3000);
  await page.locator("//LABEL[normalize-space() = \"Virtual\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]/following::select").click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").click();
  await page.getByRole('button', { name: "Virtual" }).click();
  await page.keyboard.press("ArrowDown");
  await page.getByRole('heading', { name: "Booking Rules" }).click();
  await page.locator("SELECT[id='BlockBufferMinutes'][name='BlockBufferMinutes']").click();
  await page.locator("SELECT[id='BlockBufferMinutes'][name='BlockBufferMinutes']").selectOption("number:5");
  await page.getByPlaceholder("#").fill("7");
  await page.locator("div.form-section-header>div.form-section-header-help-text").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(1).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(2).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(3).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator("//DIV[normalize-space() = \"Major 5\"]").click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Current Adviser's Students Only*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: "Create Block" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(20000);
  await page.reload();
  await page.getByRole('link', { name: "Appointments" }).click();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.locator("//div[@class=\"fc-content\"]//div[contains(normalize-space(),\"OLD\")]").click();
  await page.waitForTimeout(2000);
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Delete Block" }).click();
  await page.getByRole('heading', { name: "Delete Appointment Block" }).hover();
  await page.getByRole('button', { name: "Yes, delete it" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//DIV[normalize-space() = "Ed Grannan – 3pm- 4pm"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
