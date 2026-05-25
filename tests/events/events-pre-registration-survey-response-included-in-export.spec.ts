// TC: TC_A83403
// Events - Pre-registration survey response included in export

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTIONS,
  BTN_OK,
  BTN_OPTIONS_LOWER,
  BTN_OPTIONS_UPPER,
  BTN_RESET_FILTERS,
  BTN_SAVE,
  CKE_DESCRIPTION,
  DATEPICKER_NEXT_DAY2,
  H2_ELIGIBILITY,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMPLOYER_KEYWORD,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_DEGREE_LEVEL_PLAIN,
  LABEL_OFF,
  LABEL_SELECT_ALL,
  LABEL_STUDENT_GROUP,
  LOGIN_AS_BTN,
  LOGOUT_LINK,
  MODAL_PLEASE_CONFIRM,
  MULTI_SELECT_VALUE,
  NAV_CANCEL,
  NAV_EVENTS,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_BACK,
  RBTN_CONTINUE,
  RBTN_DELETE,
  RBTN_SAVE,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Events - Pre-registration survey response included in export - TC_A83403", async ({ page, context }) => {
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Hover "General Info"`, async () => {
    await page.locator("//H2[normalize-space() = \"General Info\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Registration Survey"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Muuktest Registration Survey");
  });

  await test.step(`Hover "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).click();
  });

  await test.step(`Type "Mock Interview"`, async () => {
    await page.keyboard.type("Mock Interview");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Location*\"]").nth(0).hover();
  });

  await test.step(`Fill "Location 1"`, async () => {
    await page.locator("//INPUT[@id='Location'][@name='Location'][@placeholder='Location'][@type='text']").nth(0).fill("Location 1");
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

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).click();
  });

  await test.step(`Type "Business Professional"`, async () => {
    await page.keyboard.type("Business Professional");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
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
  });

  await test.step(`Hover "Event Description"`, async () => {
    await page.locator("//H2[normalize-space() = \"Event Description\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Automated test"`, async () => {
    await page.keyboard.type("Automated test");
  });

  await test.step(`Click "Registration Survey"`, async () => {
    await page.locator("//H2[normalize-space() = \"Registration Survey\"]").nth(0).click();
  });

  await test.step(`Click "Off"`, async () => {
    await page.locator(LABEL_OFF).nth(0).click();
  });

  await test.step(`Click "Add a Question"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add a Question\"]").nth(0).click();
  });

  await test.step(`Hover "Question"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Question\"]").nth(0).hover();
  });

  await test.step(`Fill "Select meal option"`, async () => {
    await page.locator("//input[@ng-model=\"item.text\"]").nth(0).fill("Select meal option");
  });

  await test.step(`Hover "Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type\"]").nth(0).hover();
  });

  await test.step(`Click "Type"`, async () => {
    await page.locator("//label[normalize-space()=\"Type\"]/following-sibling::div//select").nth(0).click();
  });

  await test.step(`Type "Dropdown (Single Select)"`, async () => {
    await page.keyboard.type("Dropdown (Single Select)");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Options\"]").nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(7).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator(LABEL_DEGREE_LEVEL_PLAIN).nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Use My Information\"]").nth(0).click();
  });

  await test.step(`Fill "9153455681"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Contact Phone'][@type='text']").nth(0).fill("9153455681");
  });

  await test.step(`Click "Admin"`, async () => {
    await page.locator("//H2[normalize-space() = \"Admin\"]").nth(0).click();
  });

  await test.step(`Click "Event Source"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Source\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='SourceId'][@name='SourceId']").nth(0).click();
  });

  await test.step(`Type "Career Center Event"`, async () => {
    await page.keyboard.type("Career Center Event");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Employer Registrants Visibility\"]").nth(0).hover();
  });

  await test.step(`Click "Allow employers to view student registr…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Allow employers to view student registrants\"]").nth(0).click();
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
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(1).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Schedule"`, async () => {
    await page.locator("//A[normalize-space() = \"Schedule\"]").nth(0).click();
  });

  await test.step(`Hover "No schedules have been created yet"`, async () => {
    await page.locator("//DIV[normalize-space() = \"No schedules have been created yet\"]").nth(0).hover();
  });

  await test.step(`Click "Add Schedule"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Add Schedule\"]").nth(0).click();
  });

  await test.step(`Click "Create your own schedule"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Create your own schedule\"]").nth(0).click();
  });

  await test.step(`Hover "to"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"to\"]").nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).click();
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).click();
  });

  await test.step(`Type "1:45pm"`, async () => {
    await page.keyboard.type("1:45pm");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "If you would also like to add schedules…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"If you would also like to add schedules now, complete the fields below.\"]").nth(0).click();
  });

  await test.step(`Fill "10"`, async () => {
    await page.locator("//INPUT[@type='number']").nth(0).fill("10");
  });

  await test.step(`Click "If you would also like to add schedules…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"If you would also like to add schedules now, complete the fields below.\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Click "Actions"`, async () => {
    await page.locator(BTN_ACTIONS).nth(0).click();
  });

  await test.step(`Click "Edit Schedule"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Edit Schedule\"]").nth(0).click();
  });

  await test.step(`Click "Virtual"`, async () => {
    await page.locator("//DIV[contains(normalize-space(),\"Virtual\")]//INPUT[@type=\"checkbox\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tt-virtual-meeting//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "12twenty"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"12twenty\"]").nth(0).click();
  });

  await test.step(`Hover "12twenty Meeting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"12twenty Meeting\"]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Test"`, async () => {
    await page.locator("//a[contains(text(),\"Test\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//span[@class=\"nav-user-account-name\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Registration Survey"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Registration Survey");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//SPAN[normalize-space() = \"Muuktest Registration Survey\"]").nth(3).click();
  });

  await test.step(`Click "Select Time Slot"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Select Time Slot\"]").nth(0).click();
  });

  await test.step(`Hover "Survey"`, async () => {
    await page.locator("//H2[normalize-space() = \"Survey\"]").nth(0).hover();
  });

  await test.step(`Hover "Select meal option"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Select meal option\"]").nth(0).hover();
  });

  await test.step(`Select "Beef"`, async () => {
    await page.locator("//SELECT[@id='Q0']").nth(0).selectOption("Beef");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(NAV_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE).nth(0).click();
  });

  await test.step(`Hover "Are you sure you want to register for t…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to register for this event?\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(NAV_CANCEL).nth(0).hover();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator(RBTN_BACK).nth(0).hover();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Hover "Registration Complete"`, async () => {
    await page.locator("//H1[normalize-space() = \"Registration Complete\"]").nth(0).hover();
  });

  await test.step(`Click "Go Back to Event Page"`, async () => {
    await page.locator("//A[normalize-space() = \"Go Back to Event Page\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Muuktest Registration Survey"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest Registration Survey\"]").nth(3).click();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered Students (1)\"]").nth(0).click();
  });

  await test.step(`Verify element visible`, async () => {
    await expect(page.locator("//td//a").nth(0)).toBeVisible();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"results-header\"]//button[@aria-label=\"Options\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Schedule"`, async () => {
    await page.locator("//A[normalize-space() = \"Schedule\"]").nth(0).click();
  });

  await test.step(`Click "@e2e-tests-campuswide.com"`, async () => {
    await page.locator("//span[contains(text(),\"@e2e-tests-campuswide.com\")]//ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Unregister Student"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Unregister Student\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
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

  await test.step(`Click "Delete Event"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
    await page.reload();
    await page.waitForLoadState('load');
  });

});
