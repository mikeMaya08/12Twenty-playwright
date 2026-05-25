// TC: TC_A81139
// 12TU Pre-Event Survey

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE,
  H1_HOST_AN_EVENT,
  H2_ELIGIBILITY,
  INPUT_CHECKBOX_MULTI,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_DEGREE_LEVEL_PLAIN,
  LABEL_NO,
  LABEL_OFF,
  LABEL_SELECT_ALL,
  LABEL_STUDENT_GROUP,
  LABEL_UPLOAD_NEW,
  LINK_E2E_TEST_STUDENT,
  MODAL_PLEASE_CONFIRM,
  MULTI_SELECT_VALUE,
  NAV_ADVANCED_SEARCH,
  NAV_CANCEL,
  NAV_EVENTS,
  NAV_HOME,
  RBTN_BACK,
  RBTN_CONTINUE,
  RBTN_DELETE,
} from '@config/selectors';

test("12TU Pre-Event Survey - TC_A81139", async ({ page, context }) => {
  let fileName = `0`;

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

  await test.step(`Hover "General Info"`, async () => {
    await page.locator("//H2[normalize-space() = \"General Info\"]").nth(0).hover();
  });

  await test.step(`Hover "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).hover();
  });

  await test.step(`Hover "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest QA Test Event"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Muuktest QA Test Event");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).click();
  });

  await test.step(`Type "Career Center Workshop"`, async () => {
    await page.keyboard.type("Career Center Workshop");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Event Format\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='EventFormatId'][@name='EventFormatId']").nth(0).click();
  });

  await test.step(`Type "On Campus"`, async () => {
    await page.keyboard.type("On Campus");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Location*\"]").nth(0).hover();
  });

  await test.step(`Fill "Room 2"`, async () => {
    await page.locator("//INPUT[@id='Location'][@name='Location'][@placeholder='Location'][@type='text']").nth(0).fill("Room 2");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//label[contains(text(),\"Is Student Registration Required\")]/following-sibling::div/label[normalize-space()=\"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "# of Attendees Permitted*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Attendees Permitted*\"]").nth(0).hover();
  });

  await test.step(`Fill "10"`, async () => {
    await page.locator("//INPUT[@id='TotalSeats'][@name='TotalSeats'][@placeholder='# of Attendees Permitted'][@type='number']").nth(0).fill("10");
  });

  await test.step(`Hover "Enable Waitlist"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Enable Waitlist\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//label[contains(text(),\"Enable Waitlist\")]/following-sibling::div/label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Auto-Promote Waitlisted Students*\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//label[contains(text(),\"Auto-Promote Waitlisted Students\")]/following-sibling::div/label[normalize-space()=\"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Target Audience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Target Audience\"]").nth(0).hover();
  });

  await test.step(`Fill "Everyone"`, async () => {
    await page.locator("//INPUT[@id='TargetAudience'][@name='TargetAudience'][@placeholder='Briefly describe who this event is meant for'][@type='text']").nth(0).fill("Everyone");
  });

  await test.step(`Hover "Dress Attire*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Dress Attire*\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).selectOption("number:1");
  });

  await test.step(`Fill "Amazon.com"`, async () => {
    await page.locator("//INPUT[@id='CompanyName'][@name='CompanyName'][@placeholder='Employer Name'][@type='text']").nth(0).fill("Amazon.com");
  });

  await test.step(`Click "Amazon.com"`, async () => {
    await page.locator("//STRONG[normalize-space() = \"Amazon.com\"]").nth(0).click();
  });

  await test.step(`Click "Presenter"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Presenter\"]").nth(0).click();
  });

  await test.step(`Fill "Tester"`, async () => {
    await page.locator("//INPUT[@id='Presenter'][@name='Presenter'][@placeholder='Presenter'][@type='text']").nth(0).fill("Tester");
  });

  await test.step(`Hover "Industry"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industry\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='ConsolidatedIndustryId'][@name='ConsolidatedIndustryId']").nth(0).click();
  });

  await test.step(`Type "Construction & Manufactury"`, async () => {
    await page.keyboard.type("Construction & Manufactury");
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
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]//following::td").nth(1).click();
  });

  await test.step(`Fill "11:15am"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("11:15am");
  });

  await test.step(`Fill "1:15pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("1:15pm");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]").nth(0).click();
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]").nth(0).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "to"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"to\"]").nth(1).click();
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(1).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]//following::td").nth(1).click();
  });

  await test.step(`Fill "1:00am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"H:MMpm\"]").nth(1).fill("1:00am");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Invite-Only for Employers\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//label[contains(text(),\"Invite-Only for Employers\")]/following-sibling::div//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Publish Date *\"]").nth(0).hover();
  });

  await test.step(`Click "Student Publish Date"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]").nth(0).click();
  });

  await test.step(`Click "Student Publish Date"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "Additional Registration Method"`, async () => {
    await page.locator("//H2[normalize-space() = \"Additional Registration Method\"]").nth(0).click();
  });

  await test.step(`Fill "No other information"`, async () => {
    await page.locator("//TEXTAREA[@id='OtherInformation'][@name='OtherInformation'][@placeholder='Other Information']").nth(0).fill("No other information");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test_Resume_01.pdf\"]").nth(0).hover();
  });

  await test.step(`Click "Add Document Type"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Document Type\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='CoreApplicationDocumentTypeId']").nth(0).click();
  });

  await test.step(`Type "Resume"`, async () => {
    await page.keyboard.type("Resume");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//H2[normalize-space() = \"Registration Survey\"]").nth(0).hover();
  });

  await test.step(`Hover "Enable Survey"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable Survey\"]").nth(0).hover();
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

  await test.step(`Hover "Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type\"]").nth(0).hover();
  });

  await test.step(`Fill "What is your favorite color?"`, async () => {
    await page.locator("//input[@ng-model=\"item.text\"]").nth(0).fill("What is your favorite color?");
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

  await test.step(`Click "Add a Question"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add a Question\"]").nth(0).click();
  });

  await test.step(`Hover "Question"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Question\"]").nth(0).hover();
  });

  await test.step(`Fill "What is your favorite food?"`, async () => {
    await page.locator("//input[@ng-model=\"item.text\"]").nth(1).fill("What is your favorite food?");
  });

  await test.step(`Hover "Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type\"]").nth(0).hover();
  });

  await test.step(`Click "Type"`, async () => {
    await page.locator("//label[normalize-space()=\"Type\"]/following-sibling::div//select").nth(1).click();
  });

  await test.step(`Type "Dropdown (Multiple Select)"`, async () => {
    await page.keyboard.type("Dropdown (Multiple Select)");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Add a Question"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add a Question\"]").nth(0).click();
  });

  await test.step(`Hover "Question"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Question\"]").nth(2).hover();
  });

  await test.step(`Fill "Are you a vegetarian?"`, async () => {
    await page.locator("//input[@ng-model=\"item.text\"]").nth(2).fill("Are you a vegetarian?");
  });

  await test.step(`Hover "Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type\"]").nth(1).hover();
  });

  await test.step(`Click "Type"`, async () => {
    await page.locator("//label[normalize-space()=\"Type\"]/following-sibling::div//select").nth(2).click();
  });

  await test.step(`Type "Yes/No"`, async () => {
    await page.keyboard.type("Yes/No");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[@role='button'][normalize-space() = \"Add a Question\"]").nth(0).click();
  });

  await test.step(`Hover "Question"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Question\"]").nth(3).hover();
  });

  await test.step(`Fill "Please sign your name"`, async () => {
    await page.locator("//input[@ng-model=\"item.text\"]").nth(3).fill("Please sign your name");
  });

  await test.step(`Hover "Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type\"]").nth(3).hover();
  });

  await test.step(`Click "Type"`, async () => {
    await page.locator("//label[normalize-space()=\"Type\"]/following-sibling::div//select").nth(3).click();
  });

  await test.step(`Type "Free Text Response"`, async () => {
    await page.keyboard.type("Free Text Response");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
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
    await page.locator("//td[@class=\"active day\"]").nth(0).click();
  });

  await test.step(`Fill "11:15am"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("11:15am");
  });

  await test.step(`Fill "1:15pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("1:15pm");
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Registration*\"]").nth(0).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "to"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"to\"]").nth(1).click();
  });

  await test.step(`Click "Student Registration*"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"MM/DD/YYYY\"]").nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"active day\"]").nth(0).click();
  });

  await test.step(`Fill "9:00am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Registration*\")]/following::input[@placeholder=\"H:MMpm\"]").nth(1).fill("9:00am");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Publish Date *\"]").nth(0).hover();
  });

  await test.step(`Click "Student Publish Date"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).click();
  });

  await test.step(`Fill "12:15am"`, async () => {
    await page.locator("//label[contains(text(),\"Student Publish Date\")]/following::input[@placeholder=\"H:MMpm\"]").nth(0).fill("12:15am");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(1).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Hover "Muuktest QA Test Event"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest QA Test Event\"]").nth(0).hover();
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
  });

  await test.step(`Click "Advanced Search"`, async () => {
    await page.locator(NAV_ADVANCED_SEARCH).nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Event"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test Event\"]").nth(3).click();
  });

  await test.step(`Click "Register Now"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Register Now\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Survey"`, async () => {
    await page.locator("//H2[normalize-space() = \"Survey\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your favorite color?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"What is your favorite color?\"]").nth(0).hover();
  });

  await test.step(`Select "Green"`, async () => {
    await page.locator("//SELECT[@id='Q0']").nth(0).selectOption("Green");
  });

  await test.step(`Hover "What is your favorite food?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"What is your favorite food?\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a value --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select a value --\"]").nth(0).click();
  });

  await test.step(`Click "Pasta"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Pasta\"]").nth(0).click();
  });

  await test.step(`Click "Pizza"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Pizza\"]").nth(0).click();
  });

  await test.step(`Click "What is your favorite food?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"What is your favorite food?\"]").nth(0).click();
  });

  await test.step(`Hover "Are you a vegetarian?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Are you a vegetarian?\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Fill "e2e Test Student"`, async () => {
    await page.locator("//INPUT[@id='Q3'][@placeholder='Please sign your name']").nth(0).fill("e2e Test Student");
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE).nth(0).click();
  });

  await test.step(`Hover "Registration Documents"`, async () => {
    await page.locator("//H2[normalize-space() = \"Registration Documents\"]").nth(0).hover();
  });

  await test.step(`Click "Upload New"`, async () => {
    await page.locator(LABEL_UPLOAD_NEW).nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test_Resume_01.pdf\"]").nth(0).hover();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator(RBTN_BACK).nth(0).hover();
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

  await test.step(`Hover "Cancel Registration"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Cancel Registration\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Registration"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Edit Registration\"]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(3000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Event"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test Event\"]").nth(3).click();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]").nth(5).click();
  });

  await test.step(`Hover "Impressions"`, async () => {
    await page.locator("//H3[normalize-space() = \"Impressions\"]").nth(0).hover();
  });

  await test.step(`Hover "Views"`, async () => {
    await page.locator("//H3[normalize-space() = \"Views\"]").nth(0).hover();
  });

  await test.step(`Hover "Registrants"`, async () => {
    await page.locator("//H3[normalize-space() = \"Registrants\"]").nth(0).hover();
  });

  await test.step(`Hover "Attended"`, async () => {
    await page.locator("//H3[normalize-space() = \"Attended\"]").nth(0).hover();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered Students (1)\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//a[normalize-space()=\"e2e Test Student\"]//ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Edit Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Edit Registration\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SELECT[@id='Q0']").nth(0).hover();
  });

  await test.step(`Hover "Pizza, Pasta"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='Pizza, Pasta'][normalize-space() = \"Pizza, Pasta\"]").nth(0).hover();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(NAV_CANCEL).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//a[normalize-space()=\"e2e Test Student\"]//ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel registr…"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to cancel registration with this event for\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
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
    await page.waitForLoadState('load');
    await page.reload();
  });

});
