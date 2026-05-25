// TC: TC58675
// Appointments - Book Appointment - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  ADMIN_LOG_IN_BTN,
  BTN_OPTIONS_LOWER,
  INPUT_EMAIL_LOGIN,
  INPUT_PASSWORD_LOGIN,
  INPUT_START_TIME,
  LABEL_LOCATION_TYPE,
  NAV_APPOINTMENTS,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
  RBTN_WEEK,
} from '@config/selectors';

test("Appointments - Book Appointment - Admin - TC58675", async ({ page, context }) => {
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
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "Appointment"`, async () => {
    await page.locator("//A[normalize-space() = \"Appointment\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Select "number:10004401016285"`, async () => {
    await page.locator("//SELECT[@name='SelectedAppointmentType']").nth(0).selectOption("number:10004401016285");
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).click();
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
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
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"modal-header\"]//button[@aria-label=\"Close\"]").nth(1).click();
  });

  await test.step(`Verify "e2e Test Student (e2e Test Admin)"`, async () => {
    await expect(page.locator("//DIV[contains(text(),\"e2e Test Student (e2e Test Admin) –\")]").nth(0)).toContainText("e2e Test Student (e2e Test Admin)");
  });

  await test.step(`Click "Check-in Kiosk"`, async () => {
    await page.locator("//A[normalize-space() = \"Check-in Kiosk\"]").nth(0).click();
  });

  await test.step(`Hover "Appointment Check-in"`, async () => {
    await page.locator("//H1[contains(text(),\"Appointment Check-in\")]").nth(0).hover();
  });

  await test.step(`Hover "Please swipe your student ID to check in"`, async () => {
    await page.locator("//P[contains(text(),\"Please swipe your student ID to check in\")]").nth(0).hover();
  });

  await test.step(`Fill "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//input[@id=\"emailOrStudentId\"]").nth(0).fill("e2e.student.fullaccess@campuswide.com");
  });

  await test.step(`Click "Check-in"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Check-in\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.student.fullaccess@campuswide.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("BoH5dORH7xg%");
  });

  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Student/Alumni Log In\"]").nth(0).click();
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

  await test.step(`Click "Week"`, async () => {
    await page.locator(RBTN_WEEK).nth(0).click();
  });

  await test.step(`Set found`, async () => {
    let found = false;
    found = true;
    await page.waitForTimeout(500);
  });

  await test.step(`Click "e2e Test Student (e2e Test"`, async () => {
    await page.locator("//*[@class=\"fc-title\"][contains(text(),\"e2e Test Student (e2e Test \")]").nth(0).click();
  });

  await test.step(`Hover "Appointment"`, async () => {
    await page.locator("//H3[normalize-space()=\"Appointment\"]").nth(0).hover();
  });

  await test.step(`Hover "Offer Decision"`, async () => {
    await page.locator("//dd[contains(text(),\"Offer Decision\")]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Navigate: /`, async () => {
    await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/');
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.admin.schooladministrator@campuswide.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@href=\"/appointments\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Student (e2e Test Admin) –"`, async () => {
    await page.locator("//DIV[contains(text(),\"e2e Test Student (e2e Test Admin) – \")]").nth(0).click();
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
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "e2e Test Student (e2e Test"`, async () => {
    await page.reload();
    await page.locator("//*[@class=\"fc-title\"][contains(text(),\"e2e Test Student (e2e Test \")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//dd[contains(text(),\"Testing appointments\")]";
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
