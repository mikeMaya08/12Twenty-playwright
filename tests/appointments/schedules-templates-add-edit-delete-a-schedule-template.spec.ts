// TC: TC_A77681
// Schedules - Templates - Add, edit, delete a schedule template

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  INPUT_CHECKBOX_MULTI,
  INPUT_END_TIME,
  INPUT_START_TIME,
  MULTI_SELECT_VALUE,
  NAV_DELETE,
  NAV_EDIT,
  NAV_EVENTS,
  NAV_HOME,
  NAV_SITE_MGMT_NAVBAR_BTN,
  NAV_SITE_SETTINGS,
} from '@config/selectors';

test("Schedules - Templates - Add, edit, delete a schedule template - TC_A77681", async ({ page, context }) => {
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

  await test.step(`Hover "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Schedule Templates"`, async () => {
    await page.locator("//A[normalize-space() = \"Schedule Templates\"]").nth(0).click();
  });

  await test.step(`Hover "Schedules"`, async () => {
    await page.locator("//H3[normalize-space() = \"Schedules\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(1).hover();
  });

  await test.step(`Click "Add Schedule Template"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Add Schedule Template\"]").nth(0).click();
  });

  await test.step(`Hover "Add Schedule Template"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add Schedule Template\"]").nth(0).hover();
  });

  await test.step(`Hover "Description"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuk e2e Test Template"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-a55qe-text'][@name=''][@placeholder='Schedule Template Name']").nth(0).fill("Muuk e2e Test Template");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Time*\"]").nth(0).hover();
  });

  await test.step(`Fill "Test"`, async () => {
    await page.locator("//TEXTAREA[@id='input-rp138c-textarea'][@name=''][@placeholder='Description']").nth(0).fill("Test");
  });

  await test.step(`Fill "2:00pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("2:00pm");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(INPUT_END_TIME).nth(0).fill("4:00pm");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Add break (optional)\"]").nth(0).click();
  });

  await test.step(`Click "Add break (optional)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Add break (optional)\"]/following-sibling::div//button").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Break 1*\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//BUTTON[contains(@class,\"glyphicon-minus\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//BUTTON[contains(@class,\"glyphicon-plus\")]").nth(1).hover();
  });

  await test.step(`Fill "2:15pm"`, async () => {
    await page.locator("//label[contains(text(),\"Break 1\")]//following::input[@aria-label=\"Start Time\"]").nth(0).fill("2:15pm");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Break 1*\"]").nth(0).click();
  });

  await test.step(`Fill "2:30pm"`, async () => {
    await page.locator("//label[contains(text(),\"Break 1\")]//following::input[@aria-label=\"End Time\"]").nth(0).fill("2:30pm");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Duration of Slots (min)*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Duration of Slots (min)*\"]").nth(0).click();
  });

  await test.step(`Fill "30"`, async () => {
    await page.locator("//INPUT[@type='number']").nth(0).fill("30");
  });

  await test.step(`Hover "Students Per Slot*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students Per Slot*\"]").nth(0).hover();
  });

  await test.step(`Fill "2"`, async () => {
    await page.locator("//label[normalize-space()=\"Students Per Slot*\"]/following::input").nth(0).fill("2");
  });

  await test.step(`Click "Students Per Slot*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students Per Slot*\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Click "Muuk e2e Test Template"`, async () => {
    await page.locator("//td[contains(text(),\"Muuk e2e Test Template\")]//following::button").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(1).click();
  });

  await test.step(`Hover "Edit Schedule Template"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Schedule Template\"]").nth(0).hover();
  });

  await test.step(`Hover "Schedule Template Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Schedule Template Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuk e2e Test Template - Renamed"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-n7yhg7-text'][@name=''][@placeholder='Schedule Template Name']").nth(0).fill("Muuk e2e Test Template - Renamed");
  });

  await test.step(`Fill "Test - Edit"`, async () => {
    await page.locator("//TEXTAREA[@id='input-ot92w-textarea'][@name=''][@placeholder='Description']").nth(0).fill("Test - Edit");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Hover "Muuk e2e Test Template - Renamed"`, async () => {
    await page.locator("//td[normalize-space()=\"Muuk e2e Test Template - Renamed\"]").nth(0).hover();
  });

  await test.step(`Hover "Test - Edit"`, async () => {
    await page.locator("//td[normalize-space()=\"Test - Edit\"]").nth(0).hover();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Host a Job Fair"`, async () => {
    await page.locator("//A[normalize-space() = \"Host a Job Fair\"]").nth(0).click();
  });

  await test.step(`Hover "Scheduling"`, async () => {
    await page.locator("//H2[normalize-space() = \"Scheduling\"]").nth(0).hover();
  });

  await test.step(`Hover "Enable Schedules"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable Schedules\"]").nth(0).hover();
  });

  await test.step(`Click "Enable Schedules"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable Schedules\"]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Select the schedule templates available…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Select the schedule templates available to employers*\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Muuk e2e Test Template - Renamed"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Muuk e2e Test Template - Renamed\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(7).click();
  });

  await test.step(`Click "Select the schedule templates available…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Select the schedule templates available to employers*\"]").nth(0).click();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Schedule Templates"`, async () => {
    await page.locator("//A[normalize-space() = \"Schedule Templates\"]").nth(0).click();
  });

  await test.step(`Hover "Muuk e2e Test Template - Renamed"`, async () => {
    await page.locator("//td[normalize-space()=\"Muuk e2e Test Template - Renamed\"]").nth(0).hover();
  });

  await test.step(`Click "Muuk e2e Test Template"`, async () => {
    await page.locator("//td[contains(text(),\"Muuk e2e Test Template\")]//following::button").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(1).click();
  });

  await test.step(`Hover "Delete Schedule Template"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Schedule Template\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this schedule template?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Schedule Template"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Schedule Template\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Host a Job Fair"`, async () => {
    await page.locator("//A[normalize-space() = \"Host a Job Fair\"]").nth(0).click();
  });

  await test.step(`Hover "Scheduling"`, async () => {
    await page.locator("//H2[normalize-space() = \"Scheduling\"]").nth(0).hover();
  });

  await test.step(`Hover "Enable Schedules"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable Schedules\"]").nth(0).hover();
  });

  await test.step(`Click "Enable Schedules"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable Schedules\"]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Select the schedule templates available…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Select the schedule templates available to employers*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//B").nth(2).click();
  });

});
