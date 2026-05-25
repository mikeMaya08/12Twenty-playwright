// TC: TC_A82640
// Outcomes - Settings - Admin can enable v2 and students can submit outcomes

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE_CHANGES_SUBMIT,
  BTN_SAVE_TYPE,
  B_LOG_OUT,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH,
  INPUT_SEARCH_USERS,
  LABEL_ACTIVE,
  LABEL_COLLEGE_SCHOOL,
  LABEL_DEGREE_LEVEL,
  LABEL_DELETE_STUDENT,
  LABEL_GRADUATION_TERM,
  LABEL_MAJOR_PROGRAM,
  LABEL_OFF,
  LABEL_PROGRAM,
  LABEL_STUDENT_GROUP_CT,
  LABEL_STUDENT_ID,
  LABEL_USER_ROLE,
  LOGIN_AS_BTN,
  MODAL_CONFIRM_DELETE,
  MODAL_PLEASE_CONFIRM,
  MULTI_SELECT_VALUE,
  NAV_GENERAL,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_MGMT_COLLAPSE,
  SELECT_COLLEGE_NAME,
  SELECT_DEGREE_LEVEL_ID,
  SELECT_IS_ENROLLED,
  SELECT_PROGRAM_ID,
  SELECT_ROLE_ID,
} from '@config/selectors';

test("Outcomes - Settings - Admin can enable v2 and students can submit outcomes - TC_A82640", async ({ page, context }) => {
  let selector = `0`;
  let textContent = `0`;
  let studentFirstName = `0`;
  let studentLastName = `0`;

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

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Outcome Muuk");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//a[normalize-space()=\"Outcome Muuk\"]";
  });

  await test.step(`Click "Outcome Muuk"`, async () => {
    await page.locator("//a[normalize-space()=\"Outcome Muuk\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Outcome Muuk"`, async () => {
    await page.locator("//a[normalize-space()=\"Outcome Muuk\"]/ancestor::tr//a[@role='menuitem'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Confirm Delete"`, async () => {
    await page.locator(MODAL_CONFIRM_DELETE).nth(0).hover();
  });

  await test.step(`Click "I understand that deleting a student us…"`, async () => {
    await page.locator(LABEL_DELETE_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Outcome Muuk");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "Outcome Survey"`, async () => {
    await page.locator("//A[normalize-space() = \"Outcome Survey\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[normalize-space() = \"Spring 2025, Fall 2024, Summer 2024, Spring 2024, Fall 2023, Summer 2023\"]";
  });

  await test.step(`Click "Spring 2025, Fall 2024, Summer 2024, Sp…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Spring 2025, Fall 2024, Summer 2024, Spring 2024, Fall 2023, Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Spring 2025, Fall 2024, Summer 2024, Sp…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Spring 2025, Fall 2024, Summer 2024, Spring 2024, Fall 2023, Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//A[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this ou…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete this outcome survey setting?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[normalize-space() = \"Summer 2023\"]";
  });

  await test.step(`Click "Summer 2023"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Summer 2023"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//A[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this ou…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete this outcome survey setting?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "Outcome Survey"`, async () => {
    await page.locator("//A[normalize-space() = \"Outcome Survey\"]").nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(2).click();
  });

  await test.step(`Click "Off"`, async () => {
    await page.locator(LABEL_OFF).nth(1).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(BTN_SAVE_CHANGES_SUBMIT).nth(0).click();
  });

  await test.step(`Click "New"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"New\"]").nth(0).click();
  });

  await test.step(`Hover "Create Setting"`, async () => {
    await page.locator("//H3[normalize-space() = \"Create Setting\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Fill "2025"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("2025");
  });

  await test.step(`Click "2025"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2025\"]").nth(0).click();
  });

  await test.step(`Fill "2024"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("2024");
  });

  await test.step(`Click "2024"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2024\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Terms"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Terms\"]").nth(0).click();
  });

  await test.step(`Set value "Thanks for completing the survey!"`, async () => {
    textContent = "Thanks for completing the survey!";
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//H2[normalize-space() = \"Post Graduation\"]").nth(0).click();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey on Login\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Require Response\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Post Survey Notification\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//div[@aria-labelledby=\"cke_postSubmissionConfirmationText_arialbl\"]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//H2[normalize-space() = \"Internship\"]").nth(0).click();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]").nth(0).hover();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey on Login\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Require Response\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]").nth(0).hover();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//div[@aria-labelledby=\"cke_postSubmissionConfirmationText_arialbl\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Spring 2025, Fall 2024, Summer 2024, Sp…"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Graduation Terms\"]/following-sibling::dd//span").nth(0)).toHaveText("Spring 2025, Fall 2024, Summer 2024, Spring 2024, Fall 2023, Summer 2023");
  });

  await test.step(`Click "New"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"New\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Fill "Summer 2023"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Summer 2023");
  });

  await test.step(`Click "Summer 2023"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Summer 2023\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Terms"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Terms\"]").nth(0).click();
  });

  await test.step(`Set textContent`, async () => {
    textContent = "Thanks for completing the survey! (Most Specific Winner!)";
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//H2[normalize-space() = \"Post Graduation\"]").nth(0).click();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey on Login\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Require Response\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//LABEL[normalize-space() = \"Post Survey Notification\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//div[normalize-space()=\"Post Graduation\"]//ancestor::section//div[@aria-labelledby=\"cke_postSubmissionConfirmationText_arialbl\"]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//H2[normalize-space() = \"Internship\"]").nth(0).click();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]").nth(0).hover();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey on Login\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Require Response\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]").nth(0).hover();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Internship"`, async () => {
    await page.locator("//div[normalize-space()=\"Internship\"]//ancestor::section//div[@aria-labelledby=\"cke_postSubmissionConfirmationText_arialbl\"]").nth(0).click();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//H2[normalize-space() = \"Work Experience\"]").nth(0).click();
  });

  await test.step(`Hover "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]").nth(0).hover();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to students/alumni\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Survey on Login\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Require Response\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]").nth(0).hover();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Survey available to admins\"]/following-sibling::div//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Hover "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//LABEL[normalize-space() = \"Post Survey Notification\"]").nth(0).hover();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//div[normalize-space()=\"Work Experience\"]//ancestor::section//div[@aria-labelledby=\"cke_postSubmissionConfirmationText_arialbl\"]").nth(0).click();
  });

  await test.step(`Type "Thanks for completing the survey!"`, async () => {
    await page.keyboard.type("Thanks for completing the survey! ");
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Summer 2023"`, async () => {
    await expect(page.locator("(//H3[normalize-space() = \"Setting\"])[2]/following::dt[normalize-space()=\"Graduation Terms\"]//following-sibling::dd//span").nth(0)).toHaveText("Summer 2023");
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Set studentFirstName`, async () => {
    studentFirstName = "Outcome";
  });

  await test.step(`Set studentLastName`, async () => {
    studentLastName = "Muuk";
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Click "Program*"`, async () => {
    await page.locator(LABEL_PROGRAM).nth(0).click();
  });

  await test.step(`Select "number:1814999953610478"`, async () => {
    await page.locator(SELECT_PROGRAM_ID).nth(0).selectOption("number:1814999953610478");
  });

  await test.step(`Click "College/School*"`, async () => {
    await page.locator(LABEL_COLLEGE_SCHOOL).nth(0).click();
  });

  await test.step(`Select "number:149999071101701"`, async () => {
    await page.locator(SELECT_COLLEGE_NAME).nth(0).selectOption("number:149999071101701");
  });

  await test.step(`Click "Degree Level*"`, async () => {
    await page.locator(LABEL_DEGREE_LEVEL).nth(0).click();
  });

  await test.step(`Select "number:149999071102056"`, async () => {
    await page.locator(SELECT_DEGREE_LEVEL_ID).nth(0).selectOption("number:149999071102056");
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator(LABEL_MAJOR_PROGRAM).nth(0).click();
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator(LABEL_GRADUATION_TERM).nth(0).click();
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]/following::button[contains(@class,\"multiselect\")]").nth(0).click();
  });

  await test.step(`Fill "Summer 2023"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Summer 2023");
  });

  await test.step(`Click "Summer 2023"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Summer 2023\"]").nth(0).click();
  });

  await test.step(`Click "Student Id"`, async () => {
    await page.locator(LABEL_STUDENT_ID).nth(0).click();
  });

  await test.step(`Click "Active*"`, async () => {
    await page.locator(LABEL_ACTIVE).nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator(SELECT_IS_ENROLLED).nth(0).selectOption("number:1");
  });

  await test.step(`Click "User Role*"`, async () => {
    await page.locator(LABEL_USER_ROLE).nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator(SELECT_ROLE_ID).nth(0).selectOption("number:3");
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_CT).nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//a[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//a[contains(text(),\"Save\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Outcome Muuk");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Outcome Muuk"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Outcome Muuk\"]").nth(0).click();
  });

  await test.step(`Click "Professional Experience"`, async () => {
    await page.locator("//H3[normalize-space() = \"Professional Experience\"]").nth(0).click();
  });

  await test.step(`Hover "Work Experience"`, async () => {
    await page.locator("//H4[normalize-space() = \"Work Experience\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Experience or Status"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Experience or Status\"]").nth(1).hover();
  });

  await test.step(`Hover "Add Rumor"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Rumor\"]").nth(0).hover();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//H4[normalize-space() = \"Post Graduation\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Experience or Status"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Experience or Status\"]").nth(1).hover();
  });

  await test.step(`Hover "Add Rumor"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Rumor\"]").nth(0).hover();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//H4[normalize-space() = \"Internship\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Experience or Status"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Experience or Status\"]").nth(1).hover();
  });

  await test.step(`Hover "Add Rumor"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Rumor\"]").nth(0).hover();
  });

  await test.step(`Hover "Experiential Learning"`, async () => {
    await page.locator("//H4[normalize-space() = \"Experiential Learning\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Experience or Status"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Experience or Status\"]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Hi Outcome!"`, async () => {
    await page.locator("//H1[normalize-space() = \"Hi Outcome!\"]").nth(0).click();
  });

  await test.step(`Hover "Work Experience"`, async () => {
    await page.locator("//P[normalize-space() = \"Work Experience\"]").nth(0).hover();
  });

  await test.step(`Hover "Please tell us about your experience"`, async () => {
    await page.locator("//P[normalize-space() = \"Please tell us about your experience\"]").nth(0).hover();
  });

  await test.step(`Hover "Working Full or Part-Time"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Working Full or Part-Time\"]").nth(0).hover();
  });

  await test.step(`Hover "Contract/Consulting Work"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Contract/Consulting Work\"]").nth(0).hover();
  });

  await test.step(`Hover "Self-Employed/Own Business"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Self-Employed/Own Business\"]").nth(0).hover();
  });

  await test.step(`Hover "Seeking Employment"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Seeking Employment\"]").nth(0).hover();
  });

  await test.step(`Hover "Retired"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Retired\"]").nth(0).hover();
  });

  await test.step(`Hover "Continuing My Education"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Continuing My Education\"]").nth(0).hover();
  });

  await test.step(`Hover "Voluntary Break from Employment"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Voluntary Break from Employment\"]").nth(0).hover();
  });

  await test.step(`Hover "Other Experience"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Other Experience\"]").nth(0).hover();
  });

  await test.step(`Click "Continuing My Education"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Continuing My Education\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='Fields_ContinuingEducationDegreeLevelId'][@name='Fields.ContinuingEducationDegreeLevelId']").nth(0).click();
  });

  await test.step(`Type "Associates"`, async () => {
    await page.keyboard.type("Associates");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@id='Fields_DegreeEarning'][@name='Fields.DegreeEarning'][@type='text']").nth(0).fill("Associates");
  });

  await test.step(`Fill "University of California--Davis"`, async () => {
    await page.locator("//INPUT[@id='Fields_UniversityName'][@name='Fields.UniversityName'][@placeholder='University'][@type='text']").nth(0).fill("University of California--Davis");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@id='Fields_JobStartDate'][@name='Fields.JobStartDate'][@placeholder='MM/DD/YYYY'][@type='text']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]/preceding::td").nth(1).click();
  });

  await test.step(`Click "Full-time"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Full-time\"]").nth(0).click();
  });

  await test.step(`Hover "Satisfaction"`, async () => {
    await page.locator("//label[normalize-space() = \"Satisfaction\"]").nth(0).hover();
  });

  await test.step(`Hover "Star Rating Attribute - Required"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Star Rating Attribute - Required\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@class,\"star-rating-star\")]//i").nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='button'][@id='btnSubmit'][@name='btnSubmit']").nth(0).click();
  });

  await test.step(`Hover "Thank You!"`, async () => {
    await page.locator("//H3[normalize-space() = \"Thank You!\"]").nth(0).hover();
  });

  await test.step(`Hover "Thanks for completing the survey!"`, async () => {
    await page.locator("//P[contains(normalize-space(),\"Thanks for completing the survey!\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Work Experience"`, async () => {
    await page.locator("//H4[normalize-space() = \"Work Experience\"]").nth(0).click();
  });

  await test.step(`Hover "Continuing My Education"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Continuing My Education\"]").nth(0).hover();
  });

  await test.step(`Hover "University of California--Davis"`, async () => {
    await page.locator("//DIV[contains(normalize-space(),\"University of California--Davis\")]").nth(0).hover();
  });

  await test.step(`Hover "Associates"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Associates\"]").nth(0).hover();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Outcome Muuk"`, async () => {
    await page.locator("//a[normalize-space()=\"Outcome Muuk\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Outcome Muuk"`, async () => {
    await page.locator("//a[normalize-space()=\"Outcome Muuk\"]/ancestor::tr//a[@role='menuitem'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Confirm Delete"`, async () => {
    await page.locator(MODAL_CONFIRM_DELETE).nth(0).hover();
  });

  await test.step(`Click "I understand that deleting a student us…"`, async () => {
    await page.locator(LABEL_DELETE_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Outcome Muuk");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "Outcome Survey"`, async () => {
    await page.locator("//A[normalize-space() = \"Outcome Survey\"]").nth(0).click();
  });

  await test.step(`Click "Spring 2025, Fall 2024, Summer 2024, Sp…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Spring 2025, Fall 2024, Summer 2024, Spring 2024, Fall 2023, Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Spring 2025, Fall 2024, Summer 2024, Sp…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Spring 2025, Fall 2024, Summer 2024, Spring 2024, Fall 2023, Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//A[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this ou…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete this outcome survey setting?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Summer 2023"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Summer 2023"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Summer 2023\"]//ancestor::div[contains(@class,\"tt-card\")]//A[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this ou…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete this outcome survey setting?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

});
