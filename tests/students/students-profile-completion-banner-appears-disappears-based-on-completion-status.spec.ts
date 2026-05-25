// TC: TC_A83525
// Students - Profile Completion Banner Appears/Disappears Based on Completion Status

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_EDIT,
  BTN_OK,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_TYPE,
  INPUT_CHECKBOX_MULTI,
  INPUT_DOC_NAME,
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
  LOGOUT_LINK,
  MENU_DELETE,
  MODAL_ADD_RESUME,
  MODAL_CONFIRM_DELETE,
  MODAL_STUDENT_ACCOUNT,
  MODAL_SUCCESS,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_PROFILE,
  NAV_SITE_MGMT_COLLAPSE,
  RBTN_ADD_NEW,
  RBTN_OK,
  RBTN_SAVE_CHANGES,
  RBTN_SUBMIT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Students - Profile Completion Banner Appears/Disappears Based on Completion Status - TC_A83525", async ({ page, context }) => {
  let fileName = `0`;
  let textContent = `0`;

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

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Hover "Student Account Information"`, async () => {
    await page.locator(MODAL_STUDENT_ACCOUNT).nth(0).hover();
  });

  await test.step(`Fill "Muuk Profile"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-9otjdr-undefined'][@name='FirstName'][@placeholder='First (Preferred) Name']").nth(0).fill("Muuk Profile");
  });

  await test.step(`Fill "Completer"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-4q61i-undefined'][@name='LastName'][@placeholder='Last Name']").nth(0).fill("Completer");
  });

  await test.step(`Set value "profile.completed@gmail.com"`, async () => {
    textContent = "profile.completed@gmail.com";
  });

  await test.step(`Verify "Active*"`, async () => {
    await expect(page.locator(LABEL_IS_ENROLLED).nth(0)).toContainText("Active*");
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

  await test.step(`Click "Manage Users"`, async () => {
    await page.reload();
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Muuk Profile Completer");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(45).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as Muuk Profile Completer"`, async () => {
    await page.locator("//H3[normalize-space() = \"Login as Muuk Profile Completer\"]").nth(0).hover();
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

  await test.step(`Hover "Your profile is 0% complete"`, async () => {
    await page.locator("//H3[normalize-space() = \"Your profile is 0% complete\"]").nth(0).hover();
  });

  await test.step(`Hover "Tell us about yourself"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Tell us about yourself\"]").nth(0).hover();
  });

  await test.step(`Hover "Upload profile picture"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Upload profile picture\"]").nth(0).hover();
  });

  await test.step(`Hover "Upload resume"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Upload resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Add job preferences"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Add job preferences\"]").nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DIV").nth(50).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Hover "About Muuk Profile"`, async () => {
    await page.locator("//H4[normalize-space() = \"About Muuk Profile\"]").nth(0).hover();
  });

  await test.step(`Hover "Write a summary to highlight your perso…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Write a summary to highlight your personality or work experience\"]").nth(1).hover();
  });

  await test.step(`Click "Add Summary"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Add Summary\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Hire me!!! Please?!"`, async () => {
    await page.keyboard.type("Hire me!!! Please?!");
    await page.locator("//H4[normalize-space() = \"About Muuk Profile\"]").nth(0).click();
  });

  await test.step(`Click "Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Resume\"]").nth(0).click();
  });

  await test.step(`Hover "NO RESUME PROVIDED"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"NO RESUME PROVIDED\"]").nth(0).hover();
  });

  await test.step(`Click "Upload my resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Upload my resume\"]").nth(0).click();
  });

  await test.step(`Hover "Application Materials"`, async () => {
    await page.locator("//H1[normalize-space() = \"Application Materials\"]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Hover "Add New Resume"`, async () => {
    await page.locator(MODAL_ADD_RESUME).nth(0).hover();
  });

  await test.step(`Fill "Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Resume");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test_Resume_01.pdf\"]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator(RBTN_SUBMIT).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Click "Add job preferences"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Add job preferences\"]").nth(0).click();
  });

  await test.step(`Click "Job Preferences"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Preferences\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(BTN_EDIT).nth(0).click();
  });

  await test.step(`Click "Accounting"`, async () => {
    await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").nth(0).click();
  });

  await test.step(`Click "Accounting"`, async () => {
    await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").nth(0).click();
  });

  await test.step(`Click "Add Preferred City"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Preferred City\"]").nth(0).click();
  });

  await test.step(`Click "Search Preferred City"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Preferred City']").nth(0).click();
  });

  await test.step(`Type "Grand Rapids"`, async () => {
    await page.keyboard.type("Grand Rapids ");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[@role='button'][normalize-space() = \"Add Preferred Country\"]").nth(0).click();
  });

  await test.step(`Click "Search Preferred Country"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Preferred Country']").nth(0).click();
  });

  await test.step(`Type "USA"`, async () => {
    await page.keyboard.type("USA");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover "What is your post-graduation Preferred …"`, async () => {
    await page.locator("//dt[normalize-space()=\"What is your post-graduation Preferred Industry?\"]").nth(0).hover();
  });

  await test.step(`Hover "1. Accounting"`, async () => {
    await page.locator("//DIV[@title='Accounting'][normalize-space() = \"1. Accounting\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your post-graduation preferred …"`, async () => {
    await page.locator("//dt[normalize-space()=\"What is your post-graduation preferred job function?\"]").nth(0).hover();
  });

  await test.step(`Hover "1. Accounting"`, async () => {
    await page.locator("//DIV[@title='Accounting'][normalize-space() = \"1. Accounting\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your post-graduation preferred …"`, async () => {
    await page.locator("//dt[normalize-space()=\"What is your post-graduation preferred job city?\"]").nth(0).hover();
  });

  await test.step(`Hover "1. Grand Rapids - MI"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. Grand Rapids - MI\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your post-graduation preferred …"`, async () => {
    await page.locator("//dt[normalize-space()=\"What is your post-graduation preferred job country?\"]").nth(0).hover();
  });

  await test.step(`Hover "1. United States (USA)"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. United States (USA)\"]").nth(0).hover();
  });

  await test.step(`Click "About Muuk Profile"`, async () => {
    await page.locator("//H4[normalize-space() = \"About Muuk Profile\"]").nth(0).click();
  });

  await test.step(`Click "Edit Summary"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Edit Summary\"]").nth(0).click();
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
    await page.locator("//H4[normalize-space() = \"About Muuk Profile\"]").nth(0).click();
  });

  await test.step(`Click "Add Summary"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Add Summary\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Hire me!!! Please?!"`, async () => {
    await page.keyboard.type("Hire me!!! Please?!");
    await page.locator("//H4[normalize-space() = \"About Muuk Profile\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

  await test.step(`Hover "Confirm Delete"`, async () => {
    await page.locator(MODAL_CONFIRM_DELETE).nth(0).hover();
  });

  await test.step(`Click "I understand that deleting a student us…"`, async () => {
    await page.locator(LABEL_DELETE_STUDENT).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Muuk Profile Completer");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(45).click();
  });

});
