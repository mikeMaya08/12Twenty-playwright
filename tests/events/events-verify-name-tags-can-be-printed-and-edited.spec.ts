// TC: TC_A78709
// Events - Verify name tags can be printed and edited

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OPTIONS_LOWER,
  BTN_SAVE,
  DATEPICKER_NEXT_DAY2,
  H1_HOST_AN_EVENT,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_SELECT_ALL,
  LABEL_STUDENT,
  LABEL_STUDENT_GROUP,
  LINK_CYDNEY_MOORE,
  LINK_E2E_TEST_STUDENT,
  LOGIN_AS_BTN,
  MODAL_PLEASE_CONFIRM,
  MULTI_SELECT_VALUE,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_CANCEL,
  RBTN_DELETE,
  RBTN_OK,
} from '@config/selectors';

test("Events - Verify name tags can be printed and edited - TC_A78709", async ({ page, context }) => {
  let fileName = `0`;
  let date = `8/24/2025`;

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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Hover "Host an Event"`, async () => {
    await page.locator(H1_HOST_AN_EVENT).nth(0).hover();
  });

  await test.step(`Hover "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).hover();
  });

  await test.step(`Hover "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Tag Event"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Muuktest Tag Event");
  });

  await test.step(`Select "number:1499993124744"`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).selectOption("number:1499993124744");
  });

  await test.step(`Hover "Event Format"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Format\"]").nth(0).hover();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='EventFormatId'][@name='EventFormatId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover "You will be able to add a virtual meeti…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL on the following page\"]").nth(2).hover();
  });

  await test.step(`Hover "# of Attendees Permitted*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Attendees Permitted*\"]").nth(0).hover();
  });

  await test.step(`Fill "10"`, async () => {
    await page.locator("//INPUT[@id='TotalSeats'][@name='TotalSeats'][@placeholder='# of Attendees Permitted'][@type='number']").nth(0).fill("10");
  });

  await test.step(`Hover "Dress Attire*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Dress Attire*\"]").nth(0).hover();
  });

  await test.step(`Fill "All students"`, async () => {
    await page.locator("//INPUT[@id='TargetAudience'][@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("All students");
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).selectOption("number:2");
  });

  await test.step(`Hover "Employer Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Name\"]").nth(0).hover();
  });

  await test.step(`Hover "Presenter"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Presenter\"]").nth(0).hover();
  });

  await test.step(`Hover "Industry"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industry\"]").nth(0).hover();
  });

  await test.step(`Select "number:101499994348783"`, async () => {
    await page.locator("//SELECT[@id='ConsolidatedIndustryId'][@name='ConsolidatedIndustryId']").nth(0).selectOption("number:101499994348783");
  });

  await test.step(`Hover "Work Authorization Requirement*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Authorization Requirement*\"]").nth(0).hover();
  });

  await test.step(`Select "number:101499994348782"`, async () => {
    await page.locator("//SELECT[@id='ConsolidatedIndustryId'][@name='ConsolidatedIndustryId']").nth(0).selectOption("number:101499994348782");
  });

  await test.step(`Hover "Work Authorization Requirement*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Authorization Requirement*\"]").nth(0).hover();
  });

  await test.step(`Click "-- Work Authorization Requirement --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Work Authorization Requirement --\"]").nth(0).click();
  });

  await test.step(`Click "All Work Authorizations Accepted"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"All Work Authorizations Accepted\"]").nth(0).click();
  });

  await test.step(`Click "Event Dates"`, async () => {
    await page.locator("//H2[normalize-space() = \"Event Dates\"]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(0).click();
  });

  await test.step(`Fill "1:15pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("1:15pm");
  });

  await test.step(`Fill "1:45pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("1:45pm");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]").nth(0).click();
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(16).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(16).click();
  });

  await test.step(`Fill "10:00pm"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"H:MMpm\"]").nth(1).fill("10:00pm");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Publish Date *\"]").nth(0).click();
  });

  await test.step(`Click "Student Publish Date"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(16).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "Additional Registration Method"`, async () => {
    await page.locator("//H2[normalize-space() = \"Additional Registration Method\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(1).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Use My Information\"]").nth(0).click();
  });

  await test.step(`Select "number:1030070311958"`, async () => {
    await page.locator("//SELECT[@id='SourceId'][@name='SourceId']").nth(0).selectOption("number:1030070311958");
  });

  await test.step(`Select "540016055100183"`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_4'][@name='custom_attribute_4']").nth(0).selectOption("540016055100183");
  });

  await test.step(`Hover "Override Event Logo PNG, JPG, or GIF fi…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Override Event Logo PNG, JPG, or GIF file type.150x150 minimum size recommended\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DIV").nth(385).click();
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Event Dates"`, async () => {
    await page.locator("//H2[normalize-space() = \"Event Dates\"]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(0).click();
  });

  await test.step(`Fill "1:15pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("1:15pm");
  });

  await test.step(`Fill "1:45pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("1:45pm");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]").nth(0).click();
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(16).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(16).click();
  });

  await test.step(`Fill "11:55pm"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]/following::input[@placeholder=\"H:MMpm\"]").nth(1).fill("11:55pm");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Publish Date *\"]").nth(0).click();
  });

  await test.step(`Click "Student Publish Date"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(16).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
    await page.waitForTimeout(20000);
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(1).click();
  });

  await test.step(`Hover "Muuktest Tag Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Tag Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Please select a virtual meeting platform"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Please select a virtual meeting platform\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(1).click();
  });

  await test.step(`Click "12twenty"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"12twenty\"]").nth(0).click();
  });

  await test.step(`Click "Registered Students (0)"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered Students (0)\"]").nth(0).click();
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//h3[normalize-space()=\"Registered Students\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Add Registrant"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Add Registrant\"]").nth(0).click();
  });

  await test.step(`Hover "Register Student"`, async () => {
    await page.locator("//H3[normalize-space() = \"Register Student\"]").nth(0).hover();
  });

  await test.step(`Hover "Student*"`, async () => {
    await page.locator(LABEL_STUDENT).nth(0).hover();
  });

  await test.step(`Fill "Cydney Moore"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder=''][@name='StudentId']").nth(0).fill("Cydney Moore");
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//STRONG[normalize-space() = \"Cydney Moore\"]").nth(0).click();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//h3[normalize-space()=\"Registered Students\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Add Registrant"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Add Registrant\"]").nth(0).click();
  });

  await test.step(`Fill "e2e Test Student"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder=''][@name='StudentId']").nth(0).fill("e2e Test Student");
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//STRONG[normalize-space() = \"e2e Test Student\"]").nth(0).click();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//h3[normalize-space()=\"Registered Students\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Add Registrant"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Add Registrant\"]").nth(0).click();
  });

  await test.step(`Fill "Max"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder=''][@name='StudentId']").nth(0).fill("Max ");
  });

  await test.step(`Click "Max Peterson (Max.Peterson@campuswide.c…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Max Peterson (Max.Peterson@campuswide.com) – 2028\"]").nth(2).click();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).hover();
  });

  await test.step(`Hover "Max Peterson"`, async () => {
    await page.locator("//A[normalize-space() = \"Max Peterson\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Print Name Tags"`, async () => {
    await page.locator("//A[normalize-space() = \"Print Name Tags\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Muuktest Tag Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Tag Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Not Yet Printed"`, async () => {
    await page.locator("//H3[normalize-space() = \"Not Yet Printed\"]").nth(0).hover();
  });

  await test.step(`Hover "Printed"`, async () => {
    await page.locator("//H3[normalize-space() = \"Printed\"]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Hover "Muuktest Tag Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Tag Event\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//thead//tr//th").nth(0).click();
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//h3[normalize-space()=\"Registered Students\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Generate Name Tags (3)"`, async () => {
    await page.locator("//A[normalize-space() = \"Generate Name Tags (3)\"]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(3000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e Test Student\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Print Name Tag"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Print Name Tag\"]").nth(2).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Muuktest Tag Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Tag Event\"]").nth(0).hover();
  });

  await test.step(`Hover "First Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"First Name\"]").nth(0).hover();
  });

  await test.step(`Hover "Last Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Last Name\"]").nth(0).hover();
  });

  await test.step(`Hover "Line 3"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Line 3\"]").nth(0).hover();
  });

  await test.step(`Hover "Line 4"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Line 4\"]").nth(0).hover();
  });

  await test.step(`Hover "Print Name Tag"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Print Name Tag\"]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "My Calendar"`, async () => {
    await page.locator("//H3[normalize-space() = \"My Calendar\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Tag Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Muuktest Tag Event\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Tag Event"`, async () => {
    await page.locator("//H3[normalize-space() = \"Muuktest Tag Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Date and Time"`, async () => {
    await page.locator("//dt[normalize-space()=\"Date and Time\"]").nth(0).hover();
  });

  await test.step(`Hover "1:15pm - 1:45pm"`, async () => {
    await page.locator("//tt-date-time-display[contains(text(),\"1:15pm - 1:45pm\")]").nth(0).hover();
  });

  await test.step(`Hover "Location"`, async () => {
    await page.locator("//dt[normalize-space()=\"Location\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(2).hover();
  });

  await test.step(`Hover "Event Type: Career Center WorkshopEvent…"`, async () => {
    await page.locator("//P[contains(normalize-space(),\"Event Type: Career Center WorkshopEvent Description: Virtual\")]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Muuktest Tag Event"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest Tag Event\"]").nth(0).click();
  });

  await test.step(`Click "Registered Students (3)"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered Students (3)\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e Test Student\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e Test Student\"]/following::A[normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[contains(text(),'Are you sure you want to cancel registration with this event for') and contains(text(),'e2e Test Student')]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Hover "Max Peterson"`, async () => {
    await page.locator("//A[normalize-space() = \"Max Peterson\"]").nth(0).hover();
  });

  await test.step(`Click "Max Peterson"`, async () => {
    await page.locator("//A[normalize-space() = \"Max Peterson\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Max Peterson"`, async () => {
    await page.locator("//A[normalize-space() = \"Max Peterson\"]/following::A[normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[contains(text(),'Are you sure you want to cancel registration with this event for') and contains(text(),'Max Peterson')]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).hover();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//A[normalize-space() = \"Cydney Moore\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//A[normalize-space() = \"Cydney Moore\"]/following::A[normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[contains(text(),'Are you sure you want to cancel registration with this event for') and contains(text(),'Cydney Moore')]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Event"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this event?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Event"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Event\"]").nth(0).click();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H1[normalize-space() = \"Events\"]").nth(0).hover();
    await page.reload();
  });

});
