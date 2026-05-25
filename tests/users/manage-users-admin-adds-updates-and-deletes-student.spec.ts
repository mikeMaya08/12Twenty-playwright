// TC: TC65814
// Manage Users - Admin adds, updates, and deletes student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_SEARCH,
  DIV_NO_USERS_FOUND_CT,
  DIV_USER_DEACTIVATED_CT,
  H1_MANAGE_STUDENTS,
  INPUT_CHECKBOX,
  INPUT_CHECKBOX_MULTI,
  INPUT_FIRST_NAME,
  INPUT_LAST_NAME,
  INPUT_RADIO_MULTI,
  INPUT_SEARCH_USERS,
  INPUT_UNIQUE_ID,
  LABEL_ACTIVE,
  LABEL_COLLEGE_SCHOOL,
  LABEL_DEGREE_LEVEL,
  LABEL_GRADUATION_TERM,
  LABEL_MAJOR_PROGRAM,
  LABEL_PROGRAM,
  LABEL_SPRING_2030,
  LABEL_STUDENT_GROUP_CT,
  LABEL_STUDENT_ID,
  LABEL_USER_ROLE,
  MENU_DELETE,
  MENU_EDIT,
  MODAL_CONFIRM_DELETE_CT,
  MODAL_SUCCESS_CT,
  MULTI_SELECT_VALUE,
  MULTI_SELECT_VALUE2,
  NAV_HOME,
  NAV_MANAGE_USERS,
  SELECT_COLLEGE_NAME,
  SELECT_DEGREE_LEVEL_ID,
  SELECT_IS_ENROLLED,
  SELECT_MAJOR_NAME,
  SELECT_PROGRAM_ID,
  SELECT_ROLE_ID,
} from '@config/selectors';

test("Manage Users - Admin adds, updates, and deletes student - TC65814", async ({ page, context }) => {
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

  await test.step(`Click "Site Management"`, async () => {
    await page.locator("//A[normalize-space() = \"Site Management\"]").nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Manage Students & Alumni"`, async () => {
    await page.reload();
    await page.locator(H1_MANAGE_STUDENTS).nth(0).hover();
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Fill "Student"`, async () => {
    await page.locator(INPUT_FIRST_NAME).nth(0).fill("Student");
  });

  await test.step(`Fill "Muuktest"`, async () => {
    await page.locator(INPUT_LAST_NAME).nth(0).fill("Muuktest");
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

  await test.step(`Select "number:360038051146044"`, async () => {
    await page.locator(SELECT_MAJOR_NAME).nth(0).selectOption("number:360038051146044");
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator(LABEL_GRADUATION_TERM).nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE2).nth(0).click();
  });

  await test.step(`Click "Spring 2030"`, async () => {
    await page.locator(LABEL_SPRING_2030).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(1).check();
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
    await page.waitForTimeout(3000);
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Student Muuktest");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Student Muuktest"`, async () => {
    await page.reload();
    await page.locator("//A[contains(text(),\"Student Muuktest\")]//ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).click();
  });

  await test.step(`Hover "Student Account Information"`, async () => {
    await page.locator("//H3[contains(text(),\"Student Account Information\")]").nth(0).hover();
  });

  await test.step(`Fill "Automated"`, async () => {
    await page.locator(INPUT_LAST_NAME).nth(0).fill("Automated");
  });

  await test.step(`Fill "SM123EDT"`, async () => {
    await page.locator(INPUT_UNIQUE_ID).nth(0).fill("SM123EDT");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//a[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//a[contains(text(),\"Save\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await page.reload();
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Student Automated");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "Student Automated"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Student Automated\")]").nth(0).hover();
  });

  await test.step(`Click "Student Automated"`, async () => {
    await page.locator("//A[contains(text(),\"Student Automated\")]//ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

  await test.step(`Hover "Confirm Delete"`, async () => {
    await page.locator(MODAL_CONFIRM_DELETE_CT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SECTION").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX).nth(0).click();
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

  await test.step(`Hover "User has been deactivated and successful"`, async () => {
    await page.locator(DIV_USER_DEACTIVATED_CT).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "No users found"`, async () => {
    await page.reload();
    await page.locator(DIV_NO_USERS_FOUND_CT).nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Student Automated\")]";
  });

});
