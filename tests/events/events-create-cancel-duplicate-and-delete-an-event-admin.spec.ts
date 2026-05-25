// TC: TC61312
// Events - Create, Cancel, Duplicate, and Delete an Event - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  DATEPICKER_NEXT_DAY,
  H2_ELIGIBILITY_CT,
  INPUT_CHECKBOX,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMPLOYER_KEYWORD,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  INPUT_TIME,
  LABEL_STUDENT_GROUP,
  LABEL_YES,
  MODAL_PLEASE_CONFIRM_CT,
  MODAL_SUCCESS_CT,
  MULTI_SELECT_VALUE,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_DELETE,
  RBTN_DUPLICATE,
} from '@config/selectors';

test("Events - Create, Cancel, Duplicate, and Delete an Event - Admin - TC61312", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Hover "Host an Event"`, async () => {
    await page.locator("//H1[contains(text(),\"Host an Event\")]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Event"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Muuktest Event");
  });

  await test.step(`Select "number:1499993124744"`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).selectOption("number:1499993124744");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='EventFormatId'][@name='EventFormatId']").nth(0).selectOption("number:1");
  });

  await test.step(`Fill "Bangalore"`, async () => {
    await page.locator("//INPUT[@id='Location'][@name='Location'][@placeholder='Event Location'][@type='text']").nth(0).fill("Bangalore");
  });

  await test.step(`Fill "7"`, async () => {
    await page.locator("//INPUT[@id='TotalSeats'][@name='TotalSeats'][@placeholder='# of Attendees Permitted'][@type='number']").nth(0).fill("7");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Fill "Freshmans"`, async () => {
    await page.locator("//INPUT[@id='TargetAudience'][@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("Freshmans");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).selectOption("number:1");
  });

  await test.step(`Fill "Morgan Stanley"`, async () => {
    await page.locator("//INPUT[@id='CompanyName'][@name='CompanyName'][@placeholder='Employer Name'][@type='text']").nth(0).fill("Morgan Stanley");
  });

  await test.step(`Click "Morgan Stanley"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Morgan Stanley\"]").nth(2).click();
  });

  await test.step(`Fill "John Mayer"`, async () => {
    await page.locator("//INPUT[@id='Presenter'][@name='Presenter'][@placeholder='Presenter'][@type='text']").nth(0).fill("John Mayer");
  });

  await test.step(`Select "number:101499994348789"`, async () => {
    await page.locator("//SELECT[@id='ConsolidatedIndustryId'][@name='ConsolidatedIndustryId']").nth(0).selectOption("number:101499994348789");
  });

  await test.step(`Click "-- Work Authorization Requirement --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Work Authorization Requirement --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Event Date and Time*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Event Date and Time*\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "2:05pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("2:05pm");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@name='endDateText'][@placeholder='MM/DD/YYYY'][@type='text'][@title='End Date']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "3:45pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("3:45pm");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Registration*\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:00am");
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "11:55pm"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("11:55pm");
  });

  await test.step(`Click "Student Publish Date *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").nth(0).click();
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:00am");
  });

  await test.step(`Click "Additional Registration Method"`, async () => {
    await page.locator("//H2[contains(text(),\"Additional Registration Method\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Register via Ot\")]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Fill "Registrations can be done in the office."`, async () => {
    await page.locator("//TEXTAREA[@id='RegistrationInstructions'][@name='RegistrationInstructions'][@placeholder='Additional Registration Instructions']").nth(0).fill("Registrations can be done in the office.");
  });

  await test.step(`Click "browse"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"browse\")]").nth(0).click();
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
  });

  await test.step(`Click "Add Document Type"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Document Type\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreApplicationDocumentTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX).nth(5).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TH").nth(2).click();
  });

  await test.step(`Click "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(5).click();
  });

  await test.step(`Click "Primary Event Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Event Contact\")]").nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "7660072137"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Contact Phone'][@type='text']").nth(0).fill("7660072137");
  });

  await test.step(`Click "Admin"`, async () => {
    await page.locator("//H2[contains(text(),\"Admin\")]").nth(0).click();
  });

  await test.step(`Click "Event Source"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Source\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='SourceId'][@name='SourceId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_4'][@name='custom_attribute_4']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Hover "Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Morgan Stanley"`, async () => {
    await page.locator("//A[contains(text(),\"Morgan Stanley\")]").nth(0).hover();
  });

  await test.step(`Hover "Career Center Workshop"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Career Center Workshop\"]").nth(0).hover();
  });

  await test.step(`Hover "Bangalore"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Bangalore\"]").nth(0).hover();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Event\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel Event"`, async () => {
    await page.locator("//H3[contains(text(),\"Cancel Event\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this ev…"`, async () => {
    await page.locator("//div[contains(text(),\"Are you sure you want to cancel this event?\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).click();
  });

  await test.step(`Hover "The event has been successfully cancelle"`, async () => {
    await page.locator("//DIV[contains(text(),\"The event has been successfully cancelle\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "This event has been cancelled."`, async () => {
    await page.locator("//SPAN[contains(text(),\"This event has been cancelled.\")]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Event\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Duplicate"`, async () => {
    await page.locator(RBTN_DUPLICATE).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "You are about to Duplicate this Event. P"`, async () => {
    await page.locator("//DIV[contains(text(),\"You are about to Duplicate this Event. P\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Registration*\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:00am");
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "2:00pm"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("2:00pm");
  });

  await test.step(`Click "Student Publish Date *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").nth(0).click();
  });

  await test.step(`Click "Student Publish Date *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]/following-sibling::div//INPUT[@name=\"dateText\"]").nth(0).click();
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator(INPUT_TIME).nth(4).fill("12:00am");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Duplicate-Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Duplicate-Muuktest Event\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "Muuktest Event"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Event");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Duplicate-Muuktest Event"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Duplicate-Muuktest Event\")]").nth(0).click();
  });

  await test.step(`Click "Duplicate-Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Duplicate-Muuktest Event\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Click "Delete Event"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Event\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = " //SPAN[contains(text(),\"Duplicate-Muuktest Event\")]";
  });

  await test.step(`Hover "Cancelled"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Muuktest Event\")]/ancestor::tr//td[normalize-space()=\"Cancelled\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Event"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Muuktest Event\")]").nth(0).click();
  });

  await test.step(`Click "Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Event\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Event"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Event\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Event"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Event\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

});
