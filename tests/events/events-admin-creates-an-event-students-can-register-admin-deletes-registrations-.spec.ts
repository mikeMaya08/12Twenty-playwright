// TC: TC58796
// Events - Admin creates an event, students can register, admin deletes registrations and the event

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_RESET_FILTERS,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  DATEPICKER_NEXT_DAY,
  H2_ELIGIBILITY_CT,
  INPUT_CHECKBOX,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMPLOYER_KEYWORD,
  INPUT_END_TIME,
  INPUT_SEARCH_FILTERS,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_STUDENT_GROUP,
  LABEL_UPLOAD_NEW,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_PLEASE_CONFIRM_CT,
  MULTI_SELECT_VALUE,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
  RBTN_CONTINUE_CONT,
  RBTN_DELETE,
  SPAN_RESUME_FILE_CT,
} from '@config/selectors';

test("Events - Admin creates an event, students can register, admin deletes registrations and the event - TC58796", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
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

  await test.step(`Select "number:1030070311959"`, async () => {
    await page.locator("//SELECT[@id='SourceId'][@name='SourceId']").nth(0).selectOption("number:1030070311959");
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
  });

  await test.step(`Click "Registered Students (0)"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students (0)\")]").nth(0).click();
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//H3[contains(text(),\"Registered Students\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Add Registrant"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Add Registrant\"]").nth(0).click();
  });

  await test.step(`Hover "Register Student"`, async () => {
    await page.locator("//H3[contains(text(),\"Register Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Student*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student*\")]").nth(0).hover();
  });

  await test.step(`Fill "Brandon Williams"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder=''][@name='StudentId']").nth(0).fill("Brandon Williams");
    await page.waitForTimeout(2000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Register\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='isCheckedCompletedInstructions']").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Back\")]").nth(0).hover();
  });

  await test.step(`Click "Complete Registration"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Complete Registration\")]").nth(0).click();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students (1)\")]").nth(0).click();
    await page.waitForTimeout(4000);
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "Muuktest Event"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Event");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Muuktest Event"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Event");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Registration Open"`, async () => {
    await page.locator("(//SPAN[contains(text(),\"Registration Open\")]/preceding::SPAN[contains(text(),\"Muuktest Event\")])[last()]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Career Center Workshop"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Career Center Workshop\"]").nth(0).hover();
  });

  await test.step(`Click "Register Now"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Register Now\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Registration Documents"`, async () => {
    await page.locator("//H2[contains(text(),\"Registration Documents\")]").nth(0).hover();
  });

  await test.step(`Hover "Please upload all application documents"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please upload all application documents\")]").nth(0).hover();
  });

  await test.step(`Click "Upload New"`, async () => {
    await page.locator(LABEL_UPLOAD_NEW).nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator(SPAN_RESUME_FILE_CT).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Click "I have completed the above registration"`, async () => {
    await page.locator("//LABEL[contains(text(),\"I have completed the above registration\")]").nth(0).click();
  });

  await test.step(`Click "Complete Registration"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Complete Registration\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students\")]").nth(0).click();
    await page.reload();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Fill "Muuktest Event"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Event");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Registration Open"`, async () => {
    await page.locator("(//SPAN[contains(text(),\"Registration Open\")]/preceding::SPAN[contains(text(),\"Muuktest Event\")])[last()]").nth(0).click();
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students\")]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"e2e Test Student\")]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[contains(text(),\"e2e Test Student\")]/following::A[@role=\"menuitem\"][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Are you sure you want to cancel registra"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to cancel registra\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"e2e Test Student\")]";
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover "Brandon Williams"`, async () => {
    await page.locator("//A[contains(text(),\"Brandon Williams\")]").nth(0).hover();
  });

  await test.step(`Click "Brandon Williams"`, async () => {
    await page.locator("//A[contains(text(),\"Brandon Williams\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel registra"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to cancel registra\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Josephina Economides\")]";
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
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForTimeout(6000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][normalize-space() = \"More Filters\"]").nth(0).click();
  });

  await test.step(`Fill "Event Status"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Event Status");
  });

  await test.step(`Click "Event Status"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Event Status\"]").nth(0).click();
  });

  await test.step(`Click "Registration Open"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Registration Open\"]").nth(0).click();
  });

  await test.step(`Fill "Muuktest Event"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Event");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover "No results found given your search"`, async () => {
    await page.locator("//DIV[contains(text(),\"No results found given your search\")]").nth(0).hover();
  });

});
