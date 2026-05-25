// TC: TC58662
// Appointments - Add a Block - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_RESET_FILTERS,
  DIV_CRITERIA_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_END_TIME,
  INPUT_START_TIME,
  LABEL_LOCATION_TYPE,
  LABEL_YES,
  NAV_APPOINTMENTS,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
} from '@config/selectors';

test("Appointments - Add a Block - Admin - TC58662", async ({ page, context }) => {
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
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "Block"`, async () => {
    await page.locator("//A[normalize-space() = \"Block\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Create Appointment Block"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Appointment Block\")]").nth(0).hover();
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).click();
  });

  await test.step(`Click "3:00pm"`, async () => {
    await page.locator("//li[contains(text(),\"3:00pm\")]").nth(0).click();
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "4:00pm"`, async () => {
    await page.locator("//li[contains(text(),\"4:00pm\")]").nth(1).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//select[@id=\"AdviserId\"]").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click "-- Select Focus Industry --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select Focus Industry --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Type *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Type *\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "-- Select Type(s) --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select Type(s) --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(23).click();
  });

  await test.step(`Click "Type *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Type *\")]").nth(0).click();
  });

  await test.step(`Click "Location Type*"`, async () => {
    await page.locator(LABEL_LOCATION_TYPE).nth(0).click();
    await page.waitForTimeout(3000);
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
    await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").nth(0).click();
  });

  await test.step(`Click "Virtual Location Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]//following::button").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//H2[normalize-space() = \"Booking Rules\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='BlockBufferMinutes'][@name='BlockBufferMinutes']").nth(0).click();
  });

  await test.step(`Select "number:5"`, async () => {
    await page.locator("//SELECT[@id='BlockBufferMinutes'][@name='BlockBufferMinutes']").nth(0).selectOption("number:5");
  });

  await test.step(`Fill "7"`, async () => {
    await page.locator("//INPUT[@id='NumMaxAppointments'][@name='NumMaxAppointments'][@placeholder='#'][@type='number']").nth(0).fill("7");
  });

  await test.step(`Click "The criteria below determines who can vi"`, async () => {
    await page.locator(DIV_CRITERIA_CT).nth(0).click();
  });

  await test.step(`Click "-- All Student Groups --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Group\")]//following::BUTTON[normalize-space()=\"-- All Student Groups --\"]").nth(0).click();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//label[contains(text(),\"Student Group\")]/following::label[contains(text(),\"Select all\")]").nth(0).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]").nth(0).click();
  });

  await test.step(`Click "-- All Degree Levels --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]//following::BUTTON[normalize-space()=\"-- All Degree Levels --\"]").nth(0).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator("//label[contains(text(),\"Degree Level\")]/following::label[contains(text(),\"Bachelor\")]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]").nth(0).click();
  });

  await test.step(`Click "-- All College/Schools --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::BUTTON[normalize-space()=\"-- All College/Schools --\"]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//label[contains(text(),\"College/School\")]/following::label[contains(text(),\"Campus Wide University\")]").nth(0).click();
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]").nth(0).click();
  });

  await test.step(`Click "-- All Major/Academic Programs --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]//following::BUTTON[normalize-space()=\"-- All Major/Academic Programs --\"]").nth(0).click();
  });

  await test.step(`Click "Major 5"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Major 5\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Current Adviser's Students Only*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Create Block"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Create Block\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(20000);
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.reload();
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "OLD"`, async () => {
    await page.locator("//div[@class=\"fc-content\"]//div[contains(normalize-space(),\"OLD\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@data-toggle=\"dropdown\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][normalize-space(translate(., '\\u00A0', ' ')) = \"Edit\"]").nth(0).click();
    await page.waitForLoadState('domcontentloaded');
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Delete Block"`, async () => {
    await page.locator("//*[contains(text(),\"Delete Block\")]").nth(0).click();
  });

  await test.step(`Hover "Delete Appointment Block"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Appointment Block\")]").nth(0).hover();
  });

  await test.step(`Click "Yes, delete it"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Yes, delete it\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Ed Grannan – 3pm- 4pm\"]";
  });

});
