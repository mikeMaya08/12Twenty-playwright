// TC: TC58734
// Events - Job Fairs - Admin creates/edits, adds a student, registers an employer, deletes event

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_RESET_FILTERS,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  DATEPICKER_NEXT_DAY,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMPLOYER_KEYWORD,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LINK_E2E_TEST_STUDENT_CT,
  MULTI_SELECT_VALUE,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
  RBTN_CONTINUE_CONT,
  RBTN_DELETE,
} from '@config/selectors';

test("Events - Job Fairs - Admin creates/edits, adds a student, registers an employer, deletes event - TC58734", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Host a Job Fair"`, async () => {
    await page.locator("//A[normalize-space() = \"Host a Job Fair\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Host a Job Fair"`, async () => {
    await page.locator("//H1[contains(text(),\"Host a Job Fair\")]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Job Fair"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Muuktest Job Fair");
  });

  await test.step(`Select "number:1499993124749"`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).selectOption("number:1499993124749");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='EventFormatId'][@name='EventFormatId']").nth(0).click();
  });

  await test.step(`Type "virtual"`, async () => {
    await page.keyboard.type("virtual");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@id='Location'][@name='Location'][@placeholder='Event Location'][@type='text']").nth(0).fill("Bangalore");
  });

  await test.step(`Fill "College Students"`, async () => {
    await page.locator("//INPUT[@id='TargetAudience'][@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("College Students");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).selectOption("number:1");
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

  await test.step(`Fill "11:59pm"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("11:59pm");
  });

  await test.step(`Fill "12:05am"`, async () => {
    await page.locator("//label[contains(text(),\"Employer Registration*\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:05am");
  });

  await test.step(`Fill "11:55pm"`, async () => {
    await page.locator("//label[contains(text(),\"Employer Registration*\")]/following::input[@name=\"timeText\"]").nth(1).fill("11:55pm");
  });

  await test.step(`Click "Student Publish Date *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").nth(0).click();
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@name=\"timeText\"]").nth(0).fill("12:00am");
  });

  await test.step(`Click "Student Publish Date *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").nth(0).click();
  });

  await test.step(`Click "Additional Registration Method"`, async () => {
    await page.locator("//H2[normalize-space()=\"Additional Registration Method\"]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Fill "Testing"`, async () => {
    await page.locator("//TEXTAREA[@id='RegistrationInstructions'][@name='RegistrationInstructions'][@placeholder='Additional Registration Instructions']").nth(0).fill("Testing");
  });

  await test.step(`Fill "Muuktest testing"`, async () => {
    await page.locator("//TEXTAREA[@id='OtherInformation'][@name='OtherInformation'][@placeholder='Other Information']").nth(0).fill("Muuktest testing");
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
  });

  await test.step(`Hover "logomuuk.jpg"`, async () => {
    await page.locator("//SPAN[contains(text(),\"logomuuk.jpg\")]").nth(0).hover();
  });

  await test.step(`Click "Add Document Type"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Document Type\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreApplicationDocumentTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Student Group\")]//following::label[contains(text(),\"Select all\")]").nth(0).click();
  });

  await test.step(`Click "Primary Event Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Event Contact\")]").nth(0).click();
  });

  await test.step(`Hover "Primary Event Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Event Contact\")]").nth(0).hover();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "7660072137"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Contact Phone'][@type='text']").nth(0).fill("7660072137");
  });

  await test.step(`Click "Add Registration Type"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Registration Type\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "General Admission"`, async () => {
    await page.locator("//INPUT[@id='Name0'][@name='Name0'][@placeholder='Registration Type']").nth(0).fill("General Admission");
  });

  await test.step(`Fill "Description"`, async () => {
    await page.locator("//INPUT[@name='Description0'][@id='Description0'][@placeholder='Description']").nth(0).fill("This registration type allows general access to all sessions.");
  });

  await test.step(`Fill "49"`, async () => {
    await page.locator("//INPUT[@type='number'][@id='exampleInputAmount'][@placeholder='Fee']").nth(0).fill("49");
  });

  await test.step(`Fill "7:00am"`, async () => {
    await page.locator(INPUT_START_TIME).nth(1).fill("7:00am");
  });

  await test.step(`Fill "2:00pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(1).fill("2:00pm");
  });

  await test.step(`Fill "6"`, async () => {
    await page.locator("//INPUT[@type='number'][@placeholder='Quantity Available']").nth(0).fill("6");
  });

  await test.step(`Click "Add Additional Item"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Additional Item\"]").nth(0).click();
  });

  await test.step(`Fill "Additional"`, async () => {
    await page.locator("//INPUT[@placeholder='Additional Item']").nth(0).fill("Additional");
  });

  await test.step(`Fill "Description"`, async () => {
    await page.locator("//INPUT[@name='Description0'][@id='Description0'][@placeholder='Description']").nth(1).fill("Description");
  });

  await test.step(`Fill "5"`, async () => {
    await page.locator("//INPUT[@type='number'][@placeholder='1']").nth(0).fill("5");
  });

  await test.step(`Fill "50"`, async () => {
    await page.locator("//INPUT[@type='number'][@placeholder='Fee']").nth(1).fill("50");
  });

  await test.step(`Fill "7"`, async () => {
    await page.locator("//h2[contains(text(),\"Additional Items\")]/following::INPUT[@placeholder=\"Quantity Available\"]").nth(0).fill("7");
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

  await test.step(`Hover "Payment Method"`, async () => {
    await page.locator("//H2[contains(text(),\"Payment Method\")]").nth(0).hover();
  });

  await test.step(`Hover "Please select a payment method"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please select a payment method\")]").nth(0).hover();
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
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Muuktest Job Fair"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Job Fair\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Fill "Muuktest Job Fair"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Job Fair");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Muuktest Job Fair"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Muuktest Job Fair\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Muuktest Job Fair"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Job Fair\"]").nth(0).hover();
  });

  await test.step(`Click "Employers (0)"`, async () => {
    await page.locator("//A[contains(text(),\"Employers (0)\")]").nth(0).click();
  });

  await test.step(`Click "Registered Employers"`, async () => {
    await page.locator("//h3[contains(text(),\"Registered Employers\")]//following::button[@data-toggle=\"dropdown\"]").nth(0).click();
  });

  await test.step(`Click "Add New Employer"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Add New Employer\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Job Fair - Employer Registratio"`, async () => {
    await page.locator("//H1[contains(text(),\"Muuktest Job Fair - Employer Registratio\")]").nth(0).hover();
  });

  await test.step(`Fill "Ryan Douglas"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-mriefv-autocomplete'][@name=''][@placeholder='Select a contact']").nth(0).fill("Ryan Douglas");
  });

  await test.step(`Click "Ryan Douglas"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Ryan Douglas\")]").nth(0).click();
  });

  await test.step(`Hover "Ryan Douglas"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Ryan Douglas\")]").nth(0).hover();
  });

  await test.step(`Hover "Phillips 66"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Phillips 66\")]").nth(0).hover();
  });

  await test.step(`Click "Make Visible to Students"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Make Visible to Students\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN[contains(text(),\"General Admission \\$49\")]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@type='radio'][@name='registrationTypeId']").nth(0).check();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Register\")]").nth(0).click();
  });

  await test.step(`Hover "Phillips 66"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Phillips 66\")]").nth(0).hover();
  });

  await test.step(`Click "Pending Approval"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Pending Approval\")]").nth(0).click();
  });

  await test.step(`Click "Phillips 66"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Phillips 66\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Approve Registration"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Approve Registration\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Back to Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Back to Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Approved"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Approved\")]").nth(0).click();
  });

  await test.step(`Click "Registered Students (0)"`, async () => {
    await page.locator("//A[contains(text(),\"Registered Students (0)\")]").nth(0).click();
  });

  await test.step(`Hover "Registered Students"`, async () => {
    await page.locator("//H3[contains(text(),\"Registered Students\")]").nth(0).hover();
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

  await test.step(`Fill "Max Peterson"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder=''][@name='StudentId']").nth(0).fill("Max Peterson");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Max Peterson"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Max Peterson\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Register\")]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Hover "I have completed the above registration…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"I have completed the above registration instructions\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='isCheckedCompletedInstructions']").nth(0).click();
  });

  await test.step(`Click "Complete Registration"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Complete Registration\")]").nth(0).click();
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
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Job Fair"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Muuktest Job Fair");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "End Date"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"End Date\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@title=\"Remove This Filter\"]").nth(0).click();
  });

  await test.step(`Hover "Registration Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Registration Open\")]").nth(1).hover();
  });

  await test.step(`Hover "Not Registered"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Not Registered\")]").nth(1).hover();
  });

  await test.step(`Click "Muuktest Job Fair"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Muuktest Job Fair\")]").nth(0).click();
  });

  await test.step(`Hover "Event Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Event Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Employers (1)"`, async () => {
    await page.locator("//A[contains(text(),\"Employers (1)\")]").nth(0).hover();
  });

  await test.step(`Click "Register Now"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Register Now\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Registration Documents"`, async () => {
    await page.locator("//H2[contains(text(),\"Registration Documents\")]").nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "I have completed the above registration"`, async () => {
    await page.locator("//LABEL[contains(text(),\"I have completed the above registration\")]").nth(0).click();
  });

  await test.step(`Click "Complete Registration"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Complete Registration\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Registration Complete"`, async () => {
    await page.locator("//h1[contains(text(),\"Registration Complete\")]").nth(0).hover();
  });

  await test.step(`Click "Go Back to Event Page"`, async () => {
    await page.locator("//a[normalize-space() = \"Go Back to Event Page\"]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Max Peterson"`, async () => {
    await page.reload();
    await page.locator("//A[contains(text(),\"Max Peterson\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Edit Registration\"]").nth(0).hover();
  });

  await test.step(`Hover "Print Name Tag"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Print Name Tag\"]").nth(0).hover();
  });

  await test.step(`Hover "Message"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Message\"]").nth(0).hover();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//a[contains(text(),\"Max Peterson\")]";
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"e2e Test Student\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Are you sure you want to cancel registra"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to cancel registra\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"e2e Test Student\")]";
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

  await test.step(`Click "Delete Event"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Event\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Events"`, async () => {
    await page.reload();
    await page.locator(NAV_EVENTS).nth(0).click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.reload();
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = " //SPAN[contains(text(),\"Muuktest Job Fair\")]";
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

});
