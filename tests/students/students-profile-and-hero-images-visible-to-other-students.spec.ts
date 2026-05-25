// TC: TC_A83425
// Students - Profile and Hero Images Visible to Other Students

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  H1_MANAGE_STUDENTS,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH,
  INPUT_SEARCH_USERS,
  LABEL_COLLEGE_SCHOOL,
  LABEL_DEGREE_LEVEL,
  LABEL_DELETE_STUDENT,
  LABEL_GRADUATION_TERM,
  LABEL_IS_ENROLLED,
  LABEL_PROGRAM,
  LABEL_ROLE_ID,
  LABEL_SELECT_ALL,
  LABEL_SPRING_2030,
  LABEL_STUDENT_GROUP_ID,
  LOGIN_AS_USER,
  MENU_DELETE,
  MODAL_CONFIRM_DELETE,
  MODAL_STUDENT_ACCOUNT,
  MODAL_SUCCESS,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_PROFILE,
  NAV_SITE_MGMT_NAVBAR_BTN,
  RBTN_OK,
  RBTN_SAVE_CHANGES,
} from '@config/selectors';

test("Students - Profile and Hero Images Visible to Other Students - TC_A83425", async ({ page, context }) => {
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

  await test.step(`Hover "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Hover "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).hover();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Manage Users\"]").nth(0).click();
  });

  await test.step(`Hover "Manage Students & Alumni"`, async () => {
    await page.locator(H1_MANAGE_STUDENTS).nth(0).hover();
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Hover "Student Account Information"`, async () => {
    await page.locator(MODAL_STUDENT_ACCOUNT).nth(0).hover();
  });

  await test.step(`Fill "Muuk Student"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-5pcc4d-undefined'][@name='FirstName'][@placeholder='First (Preferred) Name']").nth(0).fill("Muuk Student");
  });

  await test.step(`Fill "User"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-fdodyo-undefined'][@name='LastName'][@placeholder='Last Name']").nth(0).fill("User");
  });

  await test.step(`Verify "Active*"`, async () => {
    await expect(page.locator(LABEL_IS_ENROLLED).nth(0)).toContainText("Active*");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-artwwd-undefined'][@name='EmailAddress'][@placeholder='Email Address']").nth(0).fill("studentuser@university.com");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='input-qklqig-undefined'][@name='IsEnrolled']").nth(0).selectOption("number:1");
  });

  await test.step(`Verify "User Role*"`, async () => {
    await expect(page.locator(LABEL_ROLE_ID).nth(0)).toContainText("User Role*");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='input-ota7pv-undefined'][@name='RoleId']").nth(0).selectOption("number:3");
  });

  await test.step(`Verify "Student Group*"`, async () => {
    await expect(page.locator(LABEL_STUDENT_GROUP_ID).nth(0)).toContainText("Student Group*");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_ID).nth(0).click();
  });

  await test.step(`Verify "Program*"`, async () => {
    await expect(page.locator(LABEL_PROGRAM).nth(0)).toContainText("Program*");
  });

  await test.step(`Select "number:1814999953610478"`, async () => {
    await page.locator("//SELECT[@id='input-ousmdi-undefined'][@name='ProgramId']").nth(0).selectOption("number:1814999953610478");
  });

  await test.step(`Verify "College/School*"`, async () => {
    await expect(page.locator(LABEL_COLLEGE_SCHOOL).nth(0)).toContainText("College/School*");
  });

  await test.step(`Select "number:149999071101701"`, async () => {
    await page.locator("//SELECT[@id='input-w9qmmr-lookup'][@name='College1Name']").nth(0).selectOption("number:149999071101701");
  });

  await test.step(`Verify "Degree Level*"`, async () => {
    await expect(page.locator(LABEL_DEGREE_LEVEL).nth(0)).toContainText("Degree Level*");
  });

  await test.step(`Select "number:149999071102056"`, async () => {
    await page.locator("//SELECT[@id='input-suv3oq-undefined'][@name='DegreeLevelId']").nth(0).selectOption("number:149999071102056");
  });

  await test.step(`Verify "Graduation Term*"`, async () => {
    await expect(page.locator(LABEL_GRADUATION_TERM).nth(0)).toContainText("Graduation Term*");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title=\"-- Select a Value --\"][normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Fill "2030"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("2030");
  });

  await test.step(`Click "Spring 2030"`, async () => {
    await page.locator(LABEL_SPRING_2030).nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
  });

  await test.step(`Verify "Student saved successfully"`, async () => {
    await expect(page.locator("//DIV[@role='alert'][normalize-space() = \"Student saved successfully\"]").nth(0)).toHaveText("Student saved successfully");
  });

  await test.step(`Fill email`, async () => {
    await page.reload();
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Muuk Student User");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Verify "Login as Muuk Student User"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Login as Muuk Student User\"]").nth(0)).toContainText("Login as Muuk Student User");
  });

  await test.step(`Step 1`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"You are about to log in as Muuk Student User. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1)).toContainText("You are about to log in as Muuk Student User. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.");
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

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV").nth(49).hover();
  });

  await test.step(`Click "Change Image"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Change Image\"]").nth(0).click();
  });

  await test.step(`Verify "Select an Image"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Select an Image\"]").nth(0)).toHaveText("Select an Image");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"profile-image-input btn btn-school\"]").nth(0).click();
  });

  await test.step(`Set filename "profile_pic.jpg"`, async () => {
    fileName = "profile_pic.jpg";
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@aria-label=\"Change Hero Image\"]").nth(0).click();
  });

  await test.step(`Verify "Select an Image"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Select an Image\"]").nth(0)).toHaveText("Select an Image");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"profile-image-input btn btn-school\"]").nth(0).click();
  });

  await test.step(`Set filename "banner_pic.jpg"`, async () => {
    fileName = "banner_pic.jpg";
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

  await test.step(`Verify "Confirm Delete"`, async () => {
    await expect(page.locator(MODAL_CONFIRM_DELETE).nth(0)).toHaveText("Confirm Delete");
  });

  await test.step(`Click "I understand that deleting a student us…"`, async () => {
    await page.locator(LABEL_DELETE_STUDENT).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Verify "Success!"`, async () => {
    await expect(page.locator(MODAL_SUCCESS).nth(0)).toHaveText("Success!");
  });

  await test.step(`Verify "User has been deactivated and successfu…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"User has been deactivated and successfully flagged for deletion. Deletion occurs within 24 hours. A deactivated user does not have access to the site, is excluded from the standard reports and will not appear in auto complete for student name.\"]").nth(1)).toHaveText("User has been deactivated and successfully flagged for deletion. Deletion occurs within 24 hours. A deactivated user does not have access to the site, is excluded from the standard reports and will not appear in auto complete for student name.");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);
  });

  await test.step(`Verify "No users found"`, async () => {
    await page.reload();
    await expect(page.locator("//DIV[normalize-space() = \"No users found\"]").nth(0)).toHaveText("No users found");
  });

});
