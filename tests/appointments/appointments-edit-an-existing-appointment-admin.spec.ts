// TC: TC61322
// Appointments - Edit an Existing Appointment - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_LOWER,
  INPUT_END_TIME,
  INPUT_START_TIME,
  LABEL_LOCATION_TYPE,
  NAV_APPOINTMENTS,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
} from '@config/selectors';

test("Appointments - Edit an Existing Appointment - Admin - TC61322", async ({ page, context }) => {
  let fileName = `0`;
  let date = `8/24/2025`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsAdmin(page);
  });



  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "Appointment"`, async () => {
    await page.locator("//A[normalize-space() = \"Appointment\"]").nth(0).click();
  });

  await test.step(`Select "number:10004401016285"`, async () => {
    await page.locator("//SELECT[@name='SelectedAppointmentType']").nth(0).selectOption("number:10004401016285");
  });

  await test.step(`Fill "5:15pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("5:15pm");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).click();
  });

  await test.step(`Click "Career Adviser"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Career Adviser\")]").nth(0).click();
  });

  await test.step(`Fill "e2e Test Student"`, async () => {
    await page.locator("//INPUT[@name='StudentId'][@placeholder='Please input a student's name'][@type='text']").nth(0).fill("e2e Test Student");
  });

  await test.step(`Click "e2e Test Student (e2e.student.fullacces…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Student (e2e.student.fullaccess@campuswide.com)\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='AdviserId'][@name='AdviserId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click "Location Type*"`, async () => {
    await page.locator(LABEL_LOCATION_TYPE).nth(0).click();
  });

  await test.step(`Click "Virtual"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual\"]").nth(0).click();
  });

  await test.step(`Click "Virtual Location Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").nth(0).click();
  });

  await test.step(`Click "Virtual Location Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]/following::select").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Preferred Location*\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space() = 'Preferred Location*']//following::SELECT").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//TEXTAREA[@id='Topic'][@name='Topic'][@placeholder='Please provide any additional information you would like us to know.']").nth(0).fill("Testing appointments");
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Book Appointment"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Book Appointment\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][contains(@class,\"btn-calendar\")]").nth(0).click();
  });

  await test.step(`Click "Month"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Month\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//span[contains(text(),\"e2e Test Student\")][@class=\"fc-title\"]").nth(0).click();
  });

  await test.step(`Hover "Appointment"`, async () => {
    await page.locator("//H3[normalize-space()=\"Appointment\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//dl//DIV[contains(text(),\"e2e Test Admin\")]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"modal-header\"]//button[@aria-label=\"Close\"]").nth(1).click();
  });

  await test.step(`Click "e2e Test Student (e2e Test Admin) – 5:15"`, async () => {
    await page.locator("//DIV[contains(text(),\"e2e Test Student (e2e Test Admin) – 5:15\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][normalize-space(translate(., '\\u00A0', ' ')) = \"Edit\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "Adviser Profile"`, async () => {
    await page.locator("//TEXTAREA[@id='Topic'][@name='Topic'][@placeholder='Please provide any additional information you would like us to know.']").nth(0).fill("Adviser Profile");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save Appointment"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Save Appointment\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "e2e Test Student (e2e Test"`, async () => {
    await page.reload();
    await page.locator("//*[@class=\"fc-title\"][contains(text(),\"e2e Test Student (e2e Test \")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//dd[contains(text(),\"Testing appointments\")]";
  });

  await test.step(`Hover "Adviser Profile"`, async () => {
    await page.locator("//dd[contains(text(),\"Adviser Profile\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role=\"button\"][@ng-click=\"$ctrl.cancelAppointment()\"]").nth(0).click();
  });

  await test.step(`Click "Yes, cancel it"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Yes, cancel it\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//tt-date-time-display[normalize-space()=\"5:15pm - 5:30pm CST\"]";
  });

});
