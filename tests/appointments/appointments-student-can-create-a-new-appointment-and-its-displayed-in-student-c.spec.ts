// TC: TC71818
// Appointments - Student can create a new appointment and its displayed in student calendar - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_LOWER,
  INPUT_END_TIME,
  INPUT_RADIO_MULTI,
  INPUT_START_TIME,
  LABEL_LOCATION_TYPE,
  LABEL_TIME_ZONE,
  NAV_APPOINTMENTS,
  NAV_HOME,
  RBTN_DAY,
} from '@config/selectors';

test("Appointments - Student can create a new appointment and its displayed in student calendar - Admin - TC71818", async ({ page, context }) => {
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

  await test.step(`Hover "Appointments"`, async () => {
    await page.locator("//H1[contains(text(),\"Appointments\")]").nth(0).hover();
  });

  await test.step(`Click "Appointment"`, async () => {
    await page.locator("//A[normalize-space() = \"Appointment\"]").nth(0).click();
  });

  await test.step(`Hover "Book Appointment"`, async () => {
    await page.locator("//H1[contains(text(),\"Book Appointment\")]").nth(0).hover();
  });

  await test.step(`Hover "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).hover();
  });

  await test.step(`Click "Pacific Time (US & Canada) (UTC-08:00)"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='Pacific Time (US & Canada) (UTC-08:00)'][normalize-space() = \"Pacific Time (US & Canada) (UTC-08:00)\"]").nth(0).click();
  });

  await test.step(`Click "Central Time (US & Canada) (UTC-06:00)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Central Time (US & Canada) (UTC-06:00)\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(2).check();
  });

  await test.step(`Hover "Date*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Date*\")]").nth(0).hover();
  });

  await test.step(`Click "Preferred Appointment Type*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Preferred Appointment Type*\")]").nth(0).click();
  });

  await test.step(`Select "number:10004401016284"`, async () => {
    await page.locator("//SELECT[@name='SelectedAppointmentType']").nth(0).selectOption("number:10004401016284");
  });

  await test.step(`Hover "Student*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student*\")]").nth(0).hover();
  });

  await test.step(`Hover "Time*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Time*\")]").nth(0).hover();
  });

  await test.step(`Fill "e2e Test Student"`, async () => {
    await page.locator("//INPUT[@name='StudentId'][@placeholder='Please input a student's name'][@type='text']").nth(0).fill("e2e Test Student ");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//SPAN[contains(text(),\"to\")]").nth(0).hover();
  });

  await test.step(`Fill "7:00pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("7:00pm");
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).click();
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "8:30pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("8:30pm");
  });

  await test.step(`Click "Career Adviser"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Career Adviser\")]").nth(0).click();
  });

  await test.step(`Select "number:540016055100183"`, async () => {
    await page.locator("//SELECT[@name='AdviserId']").nth(0).selectOption("number:540016055100183");
  });

  await test.step(`Hover "Location"`, async () => {
    await page.locator("//H2[contains(text(),\"Location\")]").nth(0).hover();
  });

  await test.step(`Hover "Location Type*"`, async () => {
    await page.locator(LABEL_LOCATION_TYPE).nth(0).hover();
  });

  await test.step(`Click "Virtual"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='LocationTypeId'][@type='radio']").nth(0).check();
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover "Virtual Location Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").nth(0).hover();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='VirtualLocationTypeId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover "Preferred Location*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Location*\"]").nth(0).hover();
  });

  await test.step(`Select "number:10007603102000"`, async () => {
    await page.locator("//LABEL[normalize-space() = 'Preferred Location*']//following::SELECT").nth(0).selectOption("number:10007603102000");
  });

  await test.step(`Hover "Additional Information"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Additional Information\")]").nth(0).hover();
  });

  await test.step(`Fill "Additional Information"`, async () => {
    await page.locator("//TEXTAREA[@id='Topic'][@name='Topic'][@placeholder='Please provide any additional information you would like us to know.']").nth(0).fill("Additional Information");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Book Appointment"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Book Appointment\")]").nth(0).click();
  });

  await test.step(`Hover "Appointment"`, async () => {
    await page.locator("//H3[normalize-space()=\"Appointment\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"modal-header\"]//button[@aria-label=\"Close\"]").nth(1).click();
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

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
  });

  await test.step(`Hover "My Calendar"`, async () => {
    await page.locator("//H3[contains(text(),\"My Calendar\")]").nth(0).hover();
  });

  await test.step(`Click "All Calendar Events"`, async () => {
    await page.locator("//A[normalize-space() = \"All Calendar Events\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@data-toggle=\"dropdown\"]").nth(0).click();
  });

  await test.step(`Click "Day"`, async () => {
    await page.locator(RBTN_DAY).nth(0).click();
  });

  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//div[@class=\"fc-title\"][contains(text(),\"e2e Test Admin\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"fc-title\"][contains( text(),\"e2e Test Student (e2e Test Admin)\")]/ancestor::div[@class=\"fc-content\"]").nth(0).click();
  });

  await test.step(`Hover "Appointment"`, async () => {
    await page.locator("//H3[normalize-space()=\"Appointment\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][normalize-space(translate(., '\\u00A0', ' ')) = \"Cancel Appointment\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel the Appointment"`, async () => {
    await page.locator("//H3[contains(text(),\"Cancel the Appointment\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure about this cancellation? On"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure about this cancellation? On\")]").nth(0).hover();
  });

  await test.step(`Hover "No, return to the appointment"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"No, return to the appointment\")]").nth(0).hover();
  });

  await test.step(`Click "Yes, cancel it"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Yes, cancel it\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//div[@class=\"fc-content\"]";
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][contains(text(),\"e2e Test Admin - Appointment\")]";
  });

});
