// TC: TC62256
// 12TE Events - Create and cancel an event

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import {
  BTN_ACTION,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  CKE_DESCRIPTION,
  DATEPICKER_NEXT_DAY2,
  INPUT_CHECKBOX_MULTI,
  INPUT_END_TIME,
  INPUT_SEARCH,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_TIME_ZONE,
  MODAL_PLEASE_CONFIRM_CT,
  NAV_EVENTS,
  RBTN_CONTINUE_CONT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Events - Create and cancel an event - TC62256", async ({ page, context }) => {
  let selector = `0`;
  let textContent = `0`;

  await test.step(`Setup`, async () => {
    await page.goto('https://employer.qa-12twenty.com/hire', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Click "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LI").nth(41).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "e2e"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='School']").nth(0).fill("e2e");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Business"`, async () => {
    await page.locator("//DIV[normalize-space() = \"E2E Tests Business\"]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Hover "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).hover();
  });

  await test.step(`Fill "Muuktest Anual Event"`, async () => {
    await page.locator("//INPUT[@name='Name'][@type='text'][@placeholder='Event Name']").nth(0).fill("Muuktest Anual Event");
  });

  await test.step(`Click "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='CoreEventTypeId'][@name='CoreEventTypeId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Event Format*\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='FormatId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL once the event is submitted\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='-- Select a Value --'][normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Fill "Pacific Time"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Pacific Time");
  });

  await test.step(`Click "Pacific Time (US & Canada) (UTC-08:00)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Pacific Time (US & Canada) (UTC-08:00)\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Event Date and Time*\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("12:00am");
  });

  await test.step(`Fill "11:45pm"`, async () => {
    await page.locator("//TEXTAREA[@placeholder=''][@id='APjFqb'][@name='q'][@role='combobox']").nth(0).fill("11:45pm");
  });

  await test.step(`Hover "Registration Dates"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Registration Dates\")]").nth(0).hover();
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator("//H2[contains(text(),\"Event Dates\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(23).click();
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator("//TEXTAREA[@placeholder=''][@id='APjFqb'][@name='q'][@role='combobox']").nth(0).fill("12:00am");
  });

  await test.step(`Hover "Work Authorization"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Work Authorization\")]").nth(0).hover();
  });

  await test.step(`Fill "11:45pm"`, async () => {
    await page.locator("//TEXTAREA[@id='demobox']").nth(0).fill("11:45pm");
  });

  await test.step(`Click "Registration Dates"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Registration Dates\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(23).click();
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(1).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@name='endDateText'][@placeholder='MM/DD/YYYY'][@type='text'][@title='End Date']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(23).click();
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(1).click();
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(2).click();
  });

  await test.step(`Click "Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Set value "Agenda: Relationship with Roxanne"`, async () => {
    textContent = "Agenda: Relationship with Roxanne";
  });

  await test.step(`Hover "Additional Candidate Re"`, async () => {
    await page.locator("//H2[contains(text(),\"Additional Candidate Re\")]").nth(0).hover();
  });

  await test.step(`Click "Additional Candidate Requirements*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Additional Candidate Requirements*\"]").nth(0).click();
  });

  await test.step(`Fill "Stem Students"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='TargetCohort'][@placeholder='Additional Candidate Requirements']").nth(0).fill("Stem Students");
  });

  await test.step(`Hover "Primary Event Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Event Contact\")]").nth(0).hover();
  });

  await test.step(`Fill "John"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactName'][@type='text'][@placeholder='Name']").nth(0).fill("John");
  });

  await test.step(`Fill "8456321478"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactPhone'][@type='text'][@placeholder='Phone']").nth(0).fill("8456321478");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactEmail'][@type='text'][@placeholder='Email']").nth(0).fill("john@yopmail.com");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Verify "Event Details"`, async () => {
    await expect(page.locator("//H2[contains(text(),\"Event Details\")]").nth(0)).toHaveText("Event Details");
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(1).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//a[normalize-space()=\"Events\"]").nth(0).click();
  });

  await test.step(`Click "Active"`, async () => {
    await page.locator("//span[normalize-space()=\"Active\"]//ancestor::tr//span[normalize-space()=\"Muuktest Anual Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Muuktest Anual Event"`, async () => {
    await expect(page.locator("//H2[normalize-space() = \"Muuktest Anual Event\"]").nth(0)).toHaveText("                    Muuktest Anual Event                                                                                ");
  });

  await test.step(`Verify "Walmart"`, async () => {
    await expect(page.locator("//DIV[contains(text(),\"Walmart\")]").nth(0)).toHaveText("Walmart");
  });

  await test.step(`Verify "Event starts in"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Event starts in\")]").nth(0)).toContainText("Event starts in ");
  });

  await test.step(`Hover "Registrants (0)"`, async () => {
    await page.locator("//A[contains(text(),\"Registrants (0)\")]").nth(0).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Verify "Edit Event"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Edit Event\"]").nth(0)).toHaveText("Edit Event");
  });

  await test.step(`Verify "Duplicate Event"`, async () => {
    await expect(page.locator("//A[@role='button'][normalize-space() = \"Duplicate Event\"]").nth(0)).toHaveText("Duplicate Event");
  });

  await test.step(`Click "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).click();
  });

  await test.step(`Verify "Please Confirm"`, async () => {
    await expect(page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0)).toHaveText("Please Confirm");
  });

  await test.step(`Verify "Are you sure you would like to cancel t…"`, async () => {
    await expect(page.locator("//DIV[contains(text(),\"Are you sure you would like to cancel th\")]").nth(0)).toHaveText("Are you sure you would like to cancel this event?  This action cannot be undone.");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//a[normalize-space()=\"Events\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = " //H2[normalize-space() = \"Muuktest Anual Event\"]";
  });

});
