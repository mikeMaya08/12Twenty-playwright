// TC: TC_A81896
// PAUSED - LinkedIn - Import LinkedIn Profile on login and student profile

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH,
  INPUT_SEARCH_USERS,
  LABEL_COLLEGE_SCHOOL,
  LABEL_DEGREE_LEVEL,
  LABEL_GRADUATION_TERM,
  LABEL_GROUP_1,
  LABEL_IS_ENROLLED,
  LABEL_PROGRAM,
  LABEL_ROLE_ID,
  LABEL_STUDENT_GROUP_ID,
  LOGIN_AS_USER,
  MODAL_STUDENT_ACCOUNT,
  NAV_HOME,
  NAV_MANAGE_USERS,
  RBTN_CANCEL,
  RBTN_SAVE_CHANGES,
} from '@config/selectors';

test("PAUSED - LinkedIn - Import LinkedIn Profile on login and student profile - TC_A81896", async ({ page, context }) => {
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
    await page.locator("//a[normalize-space()=\"Site Management\"]//following-sibling::button").nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Hover "Student Account Information"`, async () => {
    await page.locator(MODAL_STUDENT_ACCOUNT).nth(0).hover();
  });

  await test.step(`Hover "First (Preferred) Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"First (Preferred) Name\"]").nth(0).hover();
  });

  await test.step(`Hover "Last Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Last Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "LinkedIn"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-tw4a8c-undefined'][@name='FirstName'][@placeholder='First (Preferred) Name']").nth(0).fill("LinkedIn");
  });

  await test.step(`Hover "Email Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "Test #1"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-ak945-undefined'][@name='LastName'][@placeholder='Last Name']").nth(0).fill("Test #1");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-s0adb-undefined'][@name='EmailAddress'][@placeholder='Email Address']").nth(0).fill("test1@test.com");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='input-tle99t-undefined'][@name='RoleId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_ID).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]/following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Group 1"`, async () => {
    await page.locator(LABEL_GROUP_1).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_ID).nth(0).click();
  });

  await test.step(`Select "number:1814999953610478"`, async () => {
    await page.locator("//SELECT[@id='input-2zrdui-undefined'][@name='ProgramId']").nth(0).selectOption("number:1814999953610478");
  });

  await test.step(`Select "number:149999071101701"`, async () => {
    await page.locator("//SELECT[@id='input-f0rb6l-lookup'][@name='College1Name']").nth(0).selectOption("number:149999071101701");
  });

  await test.step(`Hover "Degree Level*"`, async () => {
    await page.locator(LABEL_DEGREE_LEVEL).nth(0).hover();
  });

  await test.step(`Select "number:149999071102056"`, async () => {
    await page.locator("//SELECT[@id='input-rz4q1k-undefined'][@name='DegreeLevelId']").nth(0).selectOption("number:149999071102056");
  });

  await test.step(`Hover "Graduation Term*"`, async () => {
    await page.locator(LABEL_GRADUATION_TERM).nth(0).hover();
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]/following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Fill "2028"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("2028");
  });

  await test.step(`Click "Summer 2028"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Summer 2028\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LABEL_IS_ENROLLED).nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='input-kru4zd-undefined'][@name='IsEnrolled']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
  });

  await test.step(`Hover "Student saved successfully"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Student saved successfully\"]").nth(0).hover();
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Hover "Last Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Last Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "LinkedIn"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-tw4a8c-undefined'][@name='FirstName'][@placeholder='First (Preferred) Name']").nth(0).fill("LinkedIn");
  });

  await test.step(`Hover "Email Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "Test #2"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-ak945-undefined'][@name='LastName'][@placeholder='Last Name']").nth(0).fill("Test #2");
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_IS_ENROLLED).nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='input-jskas-undefined'][@name='IsEnrolled']").nth(0).selectOption("number:1");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-s0adb-undefined'][@name='EmailAddress'][@placeholder='Email Address']").nth(0).fill("test2@test.com");
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_ROLE_ID).nth(0).hover();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='input-tle99t-undefined'][@name='RoleId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_ID).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]/following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Group 1"`, async () => {
    await page.locator(LABEL_GROUP_1).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_ID).nth(0).click();
  });

  await test.step(`Hover "Program*"`, async () => {
    await page.locator(LABEL_PROGRAM).nth(0).hover();
  });

  await test.step(`Select "number:1814999953610478"`, async () => {
    await page.locator("//SELECT[@id='input-2zrdui-undefined'][@name='ProgramId']").nth(0).selectOption("number:1814999953610478");
  });

  await test.step(`Hover "College/School*"`, async () => {
    await page.locator(LABEL_COLLEGE_SCHOOL).nth(0).hover();
  });

  await test.step(`Select "number:149999071101701"`, async () => {
    await page.locator("//SELECT[@id='input-f0rb6l-lookup'][@name='College1Name']").nth(0).selectOption("number:149999071101701");
  });

  await test.step(`Hover "Degree Level*"`, async () => {
    await page.locator(LABEL_DEGREE_LEVEL).nth(0).hover();
  });

  await test.step(`Select "number:149999071102056"`, async () => {
    await page.locator("//SELECT[@id='input-rz4q1k-undefined'][@name='DegreeLevelId']").nth(0).selectOption("number:149999071102056");
  });

  await test.step(`Hover "Graduation Term*"`, async () => {
    await page.locator(LABEL_GRADUATION_TERM).nth(0).hover();
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]/following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Fill "2029"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("2029");
  });

  await test.step(`Click "Spring 2029"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Spring 2029\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
  });

  await test.step(`Hover "Student saved successfully"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Student saved successfully\"]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("LinkedIn Test");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Hover "LinkedIn Test #1"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"LinkedIn Test #1\"]").nth(0).hover();
  });

  await test.step(`Hover "LinkedIn Test #2"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"LinkedIn Test #2\"]").nth(0).hover();
  });

  await test.step(`Click "LinkedIn Test #1"`, async () => {
    await page.locator("//A[normalize-space() = \"LinkedIn Test #1\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as LinkedIn Test #1"`, async () => {
    await page.locator("//H3[normalize-space() = \"Login as LinkedIn Test #1\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    const studentPagePromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await page.locator(BTN_OK).nth(0).click();
    const studentPage = await studentPagePromise;
    if (studentPage) {
      await studentPage.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      const studentUrl = studentPage.url();
      await studentPage.close();
      await page.goto(studentUrl, { timeout: 90000 });
    }
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  });

});
