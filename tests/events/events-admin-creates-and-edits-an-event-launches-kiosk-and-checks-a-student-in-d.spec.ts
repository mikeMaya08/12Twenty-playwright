// TC: TC67381
// Events - Admin creates and edits an event, launches kiosk and checks a student in, deletes event

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  ADMIN_LOG_IN_BTN,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK,
  BTN_OK_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  CONFIRM_PERM_DELETE,
  DATEPICKER_NEXT_DAY,
  DIV_CRITERIA_CT,
  H2_ATTACHMENTS_CT,
  H2_ELIGIBILITY_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMAIL_LOGIN,
  INPUT_END_TIME,
  INPUT_PASSWORD_LOGIN,
  INPUT_SELECT_CONTACT,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_STUDENT_GROUP,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
  LINK_WALMART_CT,
  MODAL_OOPS,
  MODAL_OOPS_CT,
  MODAL_PLEASE_CONFIRM,
  MODAL_SUCCESS,
  MODAL_SUCCESS_CT,
  MULTI_SELECT_VALUE,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_DELETE,
} from '@config/selectors';

test("Events - Admin creates and edits an event, launches kiosk and checks a student in, deletes event - TC67381", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).hover();
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Host an Event"`, async () => {
    await page.locator("//H1[contains(text(),\"Host an Event\")]").nth(0).hover();
  });

  await test.step(`Hover "General Info"`, async () => {
    await page.locator("//H2[contains(text(),\"General Info\")]").nth(0).hover();
  });

  await test.step(`Click "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).click();
  });

  await test.step(`Fill "Kiosk Check in Event - Muuktest"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Kiosk Check in Event - Muuktest");
  });

  await test.step(`Click "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).click();
  });

  await test.step(`Select "number:1499993124744"`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).selectOption("number:1499993124744");
  });

  await test.step(`Click "Event Format"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Format\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='EventFormatId'][@name='EventFormatId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Location*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location*\"]").nth(0).click();
  });

  await test.step(`Fill "Mexico"`, async () => {
    await page.locator("//INPUT[@id='Location'][@name='Location'][@placeholder='Event Location'][@type='text']").nth(0).fill("Mexico");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Is Student Registration Required*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "# of Attendees Permitted*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Attendees Permitted*\"]").nth(0).click();
  });

  await test.step(`Fill "65"`, async () => {
    await page.locator("//INPUT[@id='TotalSeats'][@name='TotalSeats'][@placeholder='# of Attendees Permitted'][@type='number']").nth(0).fill("65");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Enable Waitlist*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='HasWaitlist'][@type='radio']").nth(0).check();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Auto-Promote Waitlisted Students*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Click "Target Audience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Target Audience\"]").nth(0).click();
  });

  await test.step(`Fill "Audience"`, async () => {
    await page.locator("//INPUT[@id='TargetAudience'][@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("Audience");
  });

  await test.step(`Click "Dress Attire*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Dress Attire*\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Employer Name"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Employer Name\")]").nth(0).click();
  });

  await test.step(`Fill "Walmart"`, async () => {
    await page.locator("//INPUT[@id='CompanyName'][@name='CompanyName'][@placeholder='Employer Name'][@type='text']").nth(0).fill("Walmart");
  });

  await test.step(`Click "Walmart"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Walmart\"]").nth(2).click();
  });

  await test.step(`Click "Work Authorization Requirement*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Authorization Requirement*\"]").nth(0).click();
  });

  await test.step(`Click "-- Work Authorization Requirement --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Work Authorization Requirement --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Event Dates"`, async () => {
    await page.locator("//H2[contains(text(),\"Event Dates\")]").nth(0).click();
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

  await test.step(`Fill "10:00pm"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("10:00pm");
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

  await test.step(`Click "Additional Registration Instructions"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Additional Registration Instructions\"]").nth(0).click();
  });

  await test.step(`Fill "Additional Registration Instructions"`, async () => {
    await page.locator("//TEXTAREA[@id='RegistrationInstructions'][@name='RegistrationInstructions'][@placeholder='Additional Registration Instructions']").nth(0).fill("Additional Registration Instructions");
  });

  await test.step(`Click "Event Description"`, async () => {
    await page.locator("//H2[contains(text(),\"Event Description\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//HTML").nth(0).click();
  });

  await test.step(`Click "Other Information"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Other Information\")]").nth(0).click();
  });

  await test.step(`Fill "Other Information"`, async () => {
    await page.locator("//TEXTAREA[@id='OtherInformation'][@name='OtherInformation'][@placeholder='Other Information']").nth(0).fill("Other Information");
  });

  await test.step(`Click "Attachments"`, async () => {
    await page.locator(H2_ATTACHMENTS_CT).nth(0).click();
  });

  await test.step(`Click "browse"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"browse\")]").nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Click "Registration Document(s)"`, async () => {
    await page.locator("//H2[contains(text(),\"Registration Document(s)\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Request or require students to submit be"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Request or require students to submit be\")]").nth(0).hover();
  });

  await test.step(`Click "Add Document Type"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Document Type\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreApplicationDocumentTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).hover();
  });

  await test.step(`Hover "The criteria below determines who can vi"`, async () => {
    await page.locator(DIV_CRITERIA_CT).nth(0).hover();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).hover();
  });

  await test.step(`Fill "ResumeTest"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='DocumentTypeName']").nth(0).fill("ResumeTest");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(5).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]").nth(0).click();
  });

  await test.step(`Click "-- All Degree Levels --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]//following::BUTTON[normalize-space()=\"-- All Degree Levels --\"]").nth(0).click();
  });

  await test.step(`Click "Master"`, async () => {
    await page.locator("//label[contains(text(),\"Master\")]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]").nth(0).click();
  });

  await test.step(`Click "-- All College/Schools --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::BUTTON[normalize-space()=\"-- All College/Schools --\"]").nth(0).click();
  });

  await test.step(`Click "Campus Wide University"`, async () => {
    await page.locator("//label[contains(text(),\"Campus Wide University\")]").nth(0).click();
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

  await test.step(`Click "Primary Event Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Event Contact\")]").nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "9153455681"`, async () => {
    await page.locator("//INPUT[@name='ContactPhone'][@placeholder='Contact Phone'][@type='text']").nth(0).fill("9153455681");
  });

  await test.step(`Hover "Employers In Attendance"`, async () => {
    await page.locator("//H2[contains(text(),\"Employers In Attendance\")]").nth(0).hover();
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact\"]").nth(0).hover();
  });

  await test.step(`Fill "Adam"`, async () => {
    await page.locator(INPUT_SELECT_CONTACT).nth(0).fill("Adam ");
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@name='DressAttireId']").nth(0).selectOption("number:2");
  });

  await test.step(`Click "Adam Elliott - McKesson - Recruiter"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Adam Elliott - McKesson - Recruiter\"]").nth(0).click();
  });

  await test.step(`Click "Admin"`, async () => {
    await page.locator("//H2[contains(text(),\"Admin\")]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Kiosk Check in Event - Muuktest"`, async () => {
    await page.locator("//H2[normalize-space() = \"Kiosk Check in Event - Muuktest\"]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator(LINK_WALMART_CT).nth(0).hover();
  });

  await test.step(`Hover "Career Center Workshop"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Career Center Workshop\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//EM").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[contains(text(),\"\")]").nth(73).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Edit Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Edit Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Launch Check-In Kiosk"`, async () => {
    await page.locator("//A[normalize-space() = \"Launch Check-In Kiosk\"]").nth(0).click();
  });

  await test.step(`Hover "Please Select a Check-In Type"`, async () => {
    await page.locator("//H3[contains(text(),\"Please Select a Check-In Type\")]").nth(0).hover();
  });

  await test.step(`Click "Open check-in:"`, async () => {
    await page.locator("//B[contains(text(),\"Open check-in:\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator(BTN_OK_LOWERCASE).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Kiosk Check in Event - Muuktest"`, async () => {
    await page.locator("//H1[contains(text(),\"Kiosk Check in Event - Muuktest\")]").nth(0).hover();
  });

  await test.step(`Hover "Please swipe your student ID to check in"`, async () => {
    await page.locator("//P[contains(text(),\"Please swipe your student ID to check in\")]").nth(0).hover();
  });

  await test.step(`Fill "e2e.student.fullacces@campuswide.com"`, async () => {
    await page.locator("//input[@id=\"emailOrStudentId\"]").nth(0).fill("e2e.student.fullacces@campuswide.com");
  });

  await test.step(`Click "Check-in"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Check-in\")]").nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS_CT).nth(0).hover();
  });

  await test.step(`Hover "User not found. Please ensure you are e…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"User not found. Please ensure you are entering the correct student ID and/or email address.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//input[@id=\"emailOrStudentId\"]").nth(0).fill("e2e.student.fullaccess@campuswide.com");
    await page.waitForTimeout(4000);
  });

  await test.step(`Click "Check-in"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Check-in\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "you have successfully checked in!"`, async () => {
    await page.locator("//DIV[contains(normalize-space(),\"you have successfully checked in!\")]").nth(1).hover();
  });

  await test.step(`Click "Kiosk Check in Event - Muuktest Please …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Kiosk Check in Event - Muuktest Please swipe your student ID to check in, or enter your details below Check-in\"]").nth(7).click();
  });

  await test.step(`Fill "%600957Emily.Smith1@campuswide.com31-49…"`, async () => {
    await page.locator("//INPUT[@id='emailOrStudentId'][@type='text'][@name='emailOrStudentId']").nth(0).fill("%600957Emily.Smith1@campuswide.com31-4912120000000000000? ");
  });

  await test.step(`Click "Check-in"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Check-in\"]").nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS).nth(0).hover();
  });

  await test.step(`Hover "User not found. Please ensure you are e…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"User not found. Please ensure you are entering the correct student ID and/or email address.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Fill "%600957Emily.Smith@campuswide.com31-491…"`, async () => {
    await page.locator("//INPUT[@id='emailOrStudentId'][@type='text'][@name='emailOrStudentId']").nth(0).fill("%600957Emily.Smith@campuswide.com31-4912120000000000000?");
  });

  await test.step(`Click "Check-in"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Check-in\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "Thanks Emily, you have successfully che…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Thanks Emily, you have successfully checked in!\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Navigate: /`, async () => {
    await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/');
    await page.waitForLoadState('load');
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Kiosk Check in Event - Muuktest"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Kiosk Check in Event - Muuktest\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Registered Students"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students\")]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//I[@title='Click to toggle']").nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"e2e Test Student\")]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[contains(text(),\"e2e Test Student\")]//following::A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
    await page.waitForLoadState('load');
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
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

  await test.step(`Hover "Emily Smith"`, async () => {
    await page.locator("//A[normalize-space() = \"Emily Smith\"]").nth(0).hover();
  });

  await test.step(`Hover "Spring 2028"`, async () => {
    await page.locator("//em[contains(text(),\"Spring 2028\")]").nth(0).hover();
  });

  await test.step(`Hover "Emily.Smith@campuswide.com"`, async () => {
    await page.locator("//span[normalize-space()=\"Emily.Smith@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Click "Emily Smith"`, async () => {
    await page.locator("//A[normalize-space() = \"Emily Smith\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
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

  await test.step(`Hover "Edit Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Edit Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Event"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Event\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
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
