// TC: TC67031
// Events - Job Fairs - Admin create and edit job fair, launch kiosk and checks student in, deletes event

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  ADMIN_LOG_IN_BTN,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  CKE_DESCRIPTION,
  CONFIRM_PERM_DELETE,
  DATEPICKER_NEXT_DAY,
  DIV_CRITERIA_CT,
  H2_ATTACHMENTS_CT,
  H2_ELIGIBILITY_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMAIL_LOGIN,
  INPUT_END_TIME,
  INPUT_PASSWORD_LOGIN,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_NO,
  LABEL_STUDENT_GROUP,
  LABEL_TIME_ZONE,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_OOPS_CT,
  MODAL_PLEASE_CONFIRM_CT,
  MODAL_SUCCESS_CT,
  MULTI_SELECT_VALUE,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_COPY_EMPLOYER_URL,
  RBTN_COPY_STUDENT_URL,
  RBTN_DELETE,
  RBTN_DUPLICATE,
  RBTN_VIEW_AUDIT,
} from '@config/selectors';

test("Events - Job Fairs - Admin create and edit job fair, launch kiosk and checks student in, deletes event - TC67031", async ({ page, context }) => {
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

  await test.step(`Click "Host a Job Fair"`, async () => {
    await page.locator("//A[normalize-space() = \"Host a Job Fair\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Host a Job Fair"`, async () => {
    await page.locator("//H1[contains(text(),\"Host a Job Fair\")]").nth(0).hover();
  });

  await test.step(`Hover "General Info"`, async () => {
    await page.locator("//H2[contains(text(),\"General Info\")]").nth(0).hover();
  });

  await test.step(`Click "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).click();
  });

  await test.step(`Fill "E2E Test Job Fair"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("E2E Test Job Fair");
  });

  await test.step(`Click "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).click();
  });

  await test.step(`Select "number:1499993124749"`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).selectOption("number:1499993124749");
  });

  await test.step(`Click "Event Format"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Format\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='EventFormatId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover "You will be able to add a virtual meeti…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL on the following page\"]").nth(2).hover();
  });

  await test.step(`Click "Location*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location*\"]").nth(0).click();
  });

  await test.step(`Click "Event Location"`, async () => {
    await page.locator("//INPUT[@name='Location'][@placeholder='Event Location'][@type='text']").nth(0).click();
  });

  await test.step(`Click "Target Audience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Target Audience\"]").nth(0).click();
  });

  await test.step(`Fill "Casual"`, async () => {
    await page.locator("//INPUT[@id='TargetAudience'][@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("Casual");
  });

  await test.step(`Click "Dress Attire*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Dress Attire*\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='DressAttireId']").nth(0).selectOption("number:3");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SECTION").nth(0).click();
  });

  await test.step(`Fill "Target Audience"`, async () => {
    await page.locator("//INPUT[@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("Target Audience");
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

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).click();
  });

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]//ancestor::div//button").nth(0).click();
  });

  await test.step(`Click "Event Date and Time*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Event Date and Time*\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY).nth(0).click();
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
  });

  await test.step(`Fill "12:05am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:05am");
  });

  await test.step(`Fill "11:55pm"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("11:55pm");
  });

  await test.step(`Fill "12:05am"`, async () => {
    await page.locator("//label[contains(text(),\"Employer Registration*\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:05am");
  });

  await test.step(`Fill "11:55pm"`, async () => {
    await page.locator("//label[contains(text(),\"Employer Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("11:55pm");
  });

  await test.step(`Fill "12:05am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:05am");
  });

  await test.step(`Click "Scheduling"`, async () => {
    await page.locator("//H2[contains(text(),\"Scheduling\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Additional Registration Method"`, async () => {
    await page.locator("//H2[contains(text(),\"Additional Registration Method\")]").nth(0).click();
  });

  await test.step(`Hover "Would you like to require an external re"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Would you like to require an external re\")]").nth(0).hover();
  });

  await test.step(`Hover "Register via Ot"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Register via Ot\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Register via Ot\")]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Fill "Additional Registration Instructions"`, async () => {
    await page.locator("//TEXTAREA[@id='RegistrationInstructions'][@name='RegistrationInstructions'][@placeholder='Additional Registration Instructions']").nth(0).fill("Additional Registration Instructions");
  });

  await test.step(`Click "Event Description"`, async () => {
    await page.locator("//H2[contains(text(),\"Event Description\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Automated test"`, async () => {
    await page.keyboard.type("Automated test");
    await page.locator("//TEXTAREA[@id='OtherInformation'][@name='OtherInformation'][@placeholder='Other Information']").nth(0).fill("Other Information");
  });

  await test.step(`Click "Attachments"`, async () => {
    await page.locator(H2_ATTACHMENTS_CT).nth(0).click();
  });

  await test.step(`Hover "Registration Document(s)"`, async () => {
    await page.locator("//H2[contains(text(),\"Registration Document(s)\")]").nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).hover();
  });

  await test.step(`Hover "The criteria below determines who can vi"`, async () => {
    await page.locator(DIV_CRITERIA_CT).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::li[normalize-space() = \"Current Students\"]").nth(0).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]").nth(0).click();
  });

  await test.step(`Hover "Payment Method"`, async () => {
    await page.locator("//H2[contains(text(),\"Payment Method\")]").nth(0).hover();
  });

  await test.step(`Click "Payment Method*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Payment Method*\"]").nth(0).click();
  });

  await test.step(`Click "Payment Method"`, async () => {
    await page.locator("//h2[normalize-space()=\"Payment Method\"]/following::select").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[normalize-space()=\"Save\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "E2E Test Job Fair"`, async () => {
    await page.locator("//H2[normalize-space() = \"E2E Test Job Fair\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Fair"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Job Fair\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//EM").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//EM").nth(1).hover();
  });

  await test.step(`Hover "Virtual"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Virtual\"]").nth(0).hover();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//a[normalize-space()=\"Events\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "E2E Test Job Fair"`, async () => {
    await page.locator("//SPAN[contains(text(),\"E2E Test Job Fair\")]").nth(0).hover();
  });

  await test.step(`Hover "Registration Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Registration Open\")]").nth(1).hover();
  });

  await test.step(`Hover "E2E Test Job Fair"`, async () => {
    await page.locator("//SPAN[contains(text(),\"E2E Test Job Fair\")]//ancestor::tr//SPAN[contains(text(),\"Registration Open\")]").nth(2).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "E2E Test Job Fair"`, async () => {
    await page.locator("//SPAN[contains(text(),\"E2E Test Job Fair\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Edit Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Edit Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Duplicate"`, async () => {
    await page.locator(RBTN_DUPLICATE).nth(0).hover();
  });

  await test.step(`Hover "Print Name Tags"`, async () => {
    await page.locator("//A[normalize-space() = \"Print Name Tags\"]").nth(0).hover();
  });

  await test.step(`Hover "Generate QR Code"`, async () => {
    await page.locator("//A[normalize-space() = \"Generate QR Code\"]").nth(0).hover();
  });

  await test.step(`Hover "Launch Check-In Kiosk"`, async () => {
    await page.locator("//A[normalize-space() = \"Launch Check-In Kiosk\"]").nth(0).hover();
  });

  await test.step(`Hover "Copy Student URL"`, async () => {
    await page.locator(RBTN_COPY_STUDENT_URL).nth(0).hover();
  });

  await test.step(`Hover "Copy Employer URL"`, async () => {
    await page.locator(RBTN_COPY_EMPLOYER_URL).nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
  });

  await test.step(`Click "Edit Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Edit Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).click();
  });

  await test.step(`Fill "Test 67 To Test 197"`, async () => {
    await page.locator("//INPUT[@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Test 67 To Test 197");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='EventTypeId']").nth(0).click();
  });

  await test.step(`Click "Dress Attire*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Dress Attire*\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='DressAttireId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::div[@class=\"form-controls multiselect\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::li[normalize-space() = \"Current Students\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::li[normalize-space() = \"Bulk Update 1\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::li[normalize-space() = \"Current Students\"]").nth(0).click();
  });

  await test.step(`Click "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Test 67 To Test 197"`, async () => {
    await page.locator("//H2[normalize-space() = \"Test 67 To Test 197\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "Launch Check-In Kiosk"`, async () => {
    await page.locator("//A[normalize-space() = \"Launch Check-In Kiosk\"]").nth(0).click();
  });

  await test.step(`Hover "Please Select a Check-In Type"`, async () => {
    await page.locator("//H3[contains(text(),\"Please Select a Check-In Type\")]").nth(0).hover();
  });

  await test.step(`Hover "Open check-in:"`, async () => {
    await page.locator("//B[contains(text(),\"Open check-in:\")]").nth(0).hover();
  });

  await test.step(`Hover "Open check-in with eligibility restricti"`, async () => {
    await page.locator("//B[contains(text(),\"Open check-in with eligibility restricti\")]").nth(0).hover();
  });

  await test.step(`Hover "Closed check-in:"`, async () => {
    await page.locator("//B[contains(text(),\"Closed check-in:\")]").nth(0).hover();
  });

  await test.step(`Click "Open check-in:"`, async () => {
    await page.locator("//B[contains(text(),\"Open check-in:\")]").nth(0).click();
  });

  await test.step(`Hover "Open check-in: Allow all users to check…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Open check-in: Allow all users to check-in regardless of eligibility or registration status.\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator(BTN_OK_LOWERCASE).nth(0).click();
  });

  await test.step(`Hover "Test 67 To Test 197"`, async () => {
    await page.locator("//H1[contains(text(),\"Test 67 To Test 197\")]").nth(0).hover();
  });

  await test.step(`Hover "Please swipe your student ID to check in"`, async () => {
    await page.locator("//P[contains(text(),\"Please swipe your student ID to check in\")]").nth(0).hover();
  });

  await test.step(`Fill "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//input[@id=\"emailOrStudentId\"]").nth(0).fill("e2e.student.fullaccess@campuswide.com");
  });

  await test.step(`Click "Check-in"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Check-in\")]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Test 67 To Test 197 Please swipe your s…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Test 67 To Test 197 Please swipe your student ID to check in, or enter your details below Check-in\"]").nth(7).hover();
  });

  await test.step(`Hover "Test 67 To Test 197"`, async () => {
    await page.locator("//H1[contains(text(),\"Test 67 To Test 197\")]").nth(0).hover();
  });

  await test.step(`Hover "Please swipe your student ID to check in"`, async () => {
    await page.locator("//P[contains(text(),\"Please swipe your student ID to check in\")]").nth(0).hover();
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Hover "Test 67 To Test 197"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test 67 To Test 197\")]").nth(0).hover();
  });

  await test.step(`Click "Test 67 To Test 197"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test 67 To Test 197\")]").nth(0).click();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students (1)\")]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(11).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Hover "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).hover();
  });

  await test.step(`Click "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel Event"`, async () => {
    await page.locator("//H3[contains(text(),\"Cancel Event\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "The event has been successfully cancelle"`, async () => {
    await page.locator("//DIV[contains(text(),\"The event has been successfully cancelle\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Click "Event Details"`, async () => {
    await page.locator("//A[contains(text(),\"Event Details\")]").nth(0).click();
  });

  await test.step(`Hover "This event has been cancelled."`, async () => {
    await page.locator("//SPAN[contains(text(),\"This event has been cancelled.\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(67).click();
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
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS_CT).nth(0).hover();
  });

  await test.step(`Hover "This event cannot be deleted due to stud"`, async () => {
    await page.locator("//DIV[contains(text(),\"This event cannot be deleted due to stud\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"OK\")]").nth(0).click();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students (1)\")]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"e2e Test Student\")]/following::button").nth(0).click();
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

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
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
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//a[normalize-space()=\"Events\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

});
