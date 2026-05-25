// TC: TC62800
// Events - Employers can Search for upcoming and past events by name

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import {
  BTN_ACTION,
  BTN_CANCEL_TYPE,
  BTN_OK,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_TIME_ZONE,
  MODAL_PLEASE_CONFIRM,
  MODAL_SUCCESS,
  NAV_EVENTS,
  RBTN_CONTINUE,
  RBTN_SUBMIT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Events - Employers can Search for upcoming and past events by name - TC62800", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto('https://employer.qa-12twenty.com/', {timeout: 90000});
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
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//a[contains(text(),\"Events\")]").nth(0).hover();
  });

  await test.step(`Hover "Analytics"`, async () => {
    await page.locator("//a[@href=\"/#/events\"]//following::A[contains(text(),\"Analytics\")]").nth(0).hover();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).hover();
  });

  await test.step(`Click "Event Name"`, async () => {
    await page.reload();
    await page.locator("//SPAN[normalize-space() = \"Event Name\"]").nth(0).click();
  });

  await test.step(`Fill "Christmas Eve"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='Event Name']").nth(0).fill("Christmas Eve");
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).click();
  });

  await test.step(`Click "Past"`, async () => {
    await page.locator("//A[contains(text(),\"Past\")]").nth(0).click();
  });

  await test.step(`Click "Event Name"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Event Name\"]").nth(0).click();
  });

  await test.step(`Fill "Christmas Eve"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='Event Name']").nth(0).fill("Christmas Eve");
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Christmas Eve Event\")]";
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Hover "Please select one or more program types…"`, async () => {
    await page.locator("//H3[normalize-space() = \"Please select one or more program types...\"]").nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Continue\"]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni from non-12twenty sch…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Students & Alumni from non-12twenty schools\"]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE).nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H2[normalize-space() = \"General\"]").nth(0).hover();
  });

  await test.step(`Hover "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Christmas Eve Event"`, async () => {
    await page.locator("//INPUT[@name='Name'][@type='text'][@placeholder='Event Name']").nth(0).fill("Christmas Eve Event");
  });

  await test.step(`Hover "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='CoreEventTypeId'][@name='CoreEventTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "Event Format*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Format*\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='FormatId'][@name='FormatId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "You will be able to add a virtual meeti…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL once the event is submitted\"]").nth(0).hover();
  });

  await test.step(`Hover "Event Dates"`, async () => {
    await page.locator("//H2[normalize-space() = \"Event Dates\"]").nth(0).hover();
  });

  await test.step(`Hover "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='-- Select a Value --'][normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Eastern Time (US & Canada) (UTC-05:00)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Eastern Time (US & Canada) (UTC-05:00)\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Event Date and Time*\"]").nth(0).hover();
  });

  await test.step(`Fill "12/24/2024"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).fill("12/24/2024");
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "2:15pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("2:15pm");
  });

  await test.step(`Fill "2:45pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("2:45pm");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Registration Dates*\"]").nth(0).hover();
  });

  await test.step(`Fill "11/24/2024"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Review Needed\"]").nth(5).fill("11/24/2024");
  });

  await test.step(`Fill "12:00pm"`, async () => {
    await page.locator("//H1[normalize-space() = \"98 Steps\"]").nth(0).fill("12:00pm");
  });

  await test.step(`Fill "4:00pm"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Save changes\"]").nth(0).fill("4:00pm");
  });

  await test.step(`Click "Work Authorization *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Authorization *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click "All Work Authorizations Accepted"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"All Work Authorizations Accepted\"]").nth(0).click();
  });

  await test.step(`Click "Work Authorization *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Authorization *\"]").nth(0).click();
  });

  await test.step(`Click "Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DIV[@id='cke_Description'][@role='application'][normalize-space(translate(., '\\u00A0', ' ')) = \"Rich Text Editor, DescriptionEditor toolbars Undo Keyboard shortcut Ctrl+Z Redo Keyboard shortcut Ctrl+Y Bold Keyboard shortcut Ctrl+B Underline Keyboard shortcut Ctrl+U Italic Keyboard shortcut Ctrl+I Strikethrough Remove Format Insert/Remove Numbered List Insert/Remove Bulleted List Decrease Indent Increase Indent Link Keyboard shortcut Ctrl+K Unlink Insert Horizontal Line MaximizePress ALT 0 for help◢\"]").nth(0).click();
  });

  await test.step(`Type "Muuktest e2e Test"`, async () => {
    await page.keyboard.type("Muuktest e2e Test");
    await page.locator("//H2[normalize-space() = \"Additional Candidate Requirements\"]").nth(0).hover();
  });

  await test.step(`Hover "Additional Candidate Requirements*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Additional Candidate Requirements*\"]").nth(0).hover();
  });

  await test.step(`Hover "Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Stem Students"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-7wgq65-text'][@name='TargetCohort'][@placeholder='Additional Candidate Requirements']").nth(0).fill("Stem Students");
  });

  await test.step(`Fill "John"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactName'][@type='text'][@placeholder='Name']").nth(0).fill("John");
  });

  await test.step(`Hover "Phone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Phone*\"]").nth(0).hover();
  });

  await test.step(`Fill "8456321478"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactPhone'][@type='text'][@placeholder='Phone']").nth(0).fill("8456321478");
  });

  await test.step(`Hover "Email*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email*\"]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactEmail'][@type='text'][@placeholder='Email']").nth(0).fill("john@yopmail.com");
  });

  await test.step(`Fill "12/24/2024"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).fill("12/24/2024");
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE).nth(1).click();
  });

  await test.step(`Hover "Event Details"`, async () => {
    await page.locator("//H2[normalize-space() = \"Event Details\"]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator(RBTN_SUBMIT).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "Your event has been submitted to your s…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Your event has been submitted to your selected schools for approval.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Christmas Eve Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Christmas Eve Event\"]").nth(0).click();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Click "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you would like to cancel t…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you would like to cancel this event? This action cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Past"`, async () => {
    await page.locator("//A[normalize-space() = \"Past\"]").nth(0).click();
  });

  await test.step(`Verify "Christmas Eve Event"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Christmas Eve Event\")]").nth(0)).toHaveText("Christmas Eve Event");
  });

  await test.step(`Hover "Results: 1"`, async () => {
    await page.locator("//DIV[contains(text(),\"Results: 1\")]").nth(0).hover();
  });

  await test.step(`Hover "Canceled"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Canceled\")]").nth(0).hover();
  });

  await test.step(`Click "Event Name Christmas Eve (empty)"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Event Name Christmas Eve (empty)\"]").nth(0).click();
  });

  await test.step(`Fill "Mexico"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='Event Name']").nth(0).fill("Mexico");
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).click();
  });

  await test.step(`Hover "No events found"`, async () => {
    await page.locator("//DIV[contains(text(),\"No events found\")]").nth(0).hover();
  });

  await test.step(`Hover "Results: 0"`, async () => {
    await page.locator("//DIV[contains(text(),\"Results: 0\")]").nth(0).hover();
    await page.reload();
    await page.waitForTimeout(2000);
  });

});
