// TC: TC65807
// On Login - Attributes on login for interval 'once' and specific student group - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_OPTIONS_UPPER,
  BTN_SEARCH,
  CONFIRM_PERM_DELETE,
  DIV_NO_USERS_FOUND_CT,
  DIV_USER_DEACTIVATED_CT,
  H1_MANAGE_STUDENTS,
  INPUT_CHECKBOX,
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
  LABEL_NO,
  LABEL_PROGRAM,
  LABEL_SPRING_2030,
  LABEL_STUDENT_GROUP_CT,
  LABEL_STUDENT_ID,
  LABEL_USER_ROLE,
  LABEL_YES,
  LOGIN_AS_BTN,
  LOGIN_AS_USER,
  LOGOUT_LINK,
  MENU_DELETE,
  MENU_EDIT,
  MODAL_CONFIRM_DELETE_CT,
  MODAL_SUCCESS_CT,
  MULTI_SELECT_VALUE,
  MULTI_SELECT_VALUE2,
  NAV_DELETE,
  NAV_EDIT,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_PROFILE,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_SITE_SETTINGS,
  NAV_STUDENTS_ALUMNI,
  RBTN_ADD_NOTE,
  RBTN_CANCEL_CONTAINS,
  SELECT_COLLEGE_NAME,
  SELECT_DEGREE_LEVEL_ID,
  SELECT_IS_ENROLLED,
  SELECT_MAJOR_NAME,
  SELECT_PROGRAM_ID,
  SELECT_ROLE_ID,
} from '@config/selectors';

test("On Login - Attributes on login for interval 'once' and specific student group - Admin - TC65807", async ({ page, context }) => {
  let date = `8/24/2025`;
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

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Manage Users"`, async () => {
    await page.locator("//H3[contains(text(),\"Manage Users\")]").nth(0).hover();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(2).hover();
  });

  await test.step(`Hover "Admins"`, async () => {
    await page.locator("//A[contains(text(),\"Admins\")]").nth(0).hover();
  });

  await test.step(`Hover "Employers"`, async () => {
    await page.locator("//A[contains(text(),\"Employers\")]").nth(0).hover();
  });

  await test.step(`Hover "Manage Students & Alumni"`, async () => {
    await page.locator(H1_MANAGE_STUDENTS).nth(0).hover();
  });

  await test.step(`Hover "Bulk Student Upload"`, async () => {
    await page.locator("//A[@type='button'][contains(text(),\"Bulk Student Upload\")]").nth(0).hover();
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Fill "MuukTest"`, async () => {
    await page.locator(INPUT_FIRST_NAME).nth(0).fill("MuukTest");
  });

  await test.step(`Fill "Student"`, async () => {
    await page.locator(INPUT_LAST_NAME).nth(0).fill("Student");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='EmailAddress'][@placeholder='Email Address']").nth(0).fill("muukteststudent@muukteam.testinator.com");
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

  await test.step(`Click "Group 1"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Group 1\")]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//a[contains(text(),\"Save\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("MuukTest Student");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "MuukTest Student"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"MuukTest Student\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(1).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(2).click();
  });

  await test.step(`Hover "Attributes"`, async () => {
    await page.locator("//A[contains(text(),\"Attributes\")]").nth(0).hover();
  });

  await test.step(`Hover "Picklists"`, async () => {
    await page.locator("//A[contains(text(),\"Picklists\")]").nth(0).hover();
  });

  await test.step(`Click "Login"`, async () => {
    await page.locator("//A[contains(text(),\"Login\")]").nth(0).click();
  });

  await test.step(`Hover "Survey on Login"`, async () => {
    await page.locator("//H3[contains(text(),\"Survey on Login\")]").nth(0).hover();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "New"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"New\"]").nth(0).click();
  });

  await test.step(`Hover "New Configuration"`, async () => {
    await page.locator("//H3[contains(text(),\"New Configuration\")]").nth(0).hover();
  });

  await test.step(`Hover "Interval*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interval*\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Target Student Groups"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Target Student Groups\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Group 1"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Group 1\")]").nth(0).click();
  });

  await test.step(`Click "Attributes *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Attributes *\"]").nth(0).click();
  });

  await test.step(`Click "Add Attribute"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add Attribute\"]").nth(0).click();
  });

  await test.step(`Click "Are you a stude"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Are you a stude\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Hover "Once"`, async () => {
    await page.locator("//H4[contains(text(),\"Once\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(0).hover();
  });

  await test.step(`Hover "Group 1"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Group 1\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(1).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"List view\"]/ancestor::button").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("MuukTest Student");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "MuukTest Student"`, async () => {
    await page.locator("//A[@title='MuukTest Student'][contains(text(),\"MuukTest Student\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Sign up for an account"`, async () => {
    await page.locator("//A[contains(text(),\"Sign up for an account\")]").nth(0).click();
  });

  await test.step(`Hover "Join the E2E-CPW Platform"`, async () => {
    await page.locator("//H1[contains(text(),\"Join the E2E-CPW Platform\")]").nth(0).hover();
  });

  await test.step(`Hover "Sign up with your E2E-CPW SSO"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Sign up with your E2E-CPW SSO\")]").nth(0).hover();
  });

  await test.step(`Hover "Sign up by entering the following inform"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Sign up by entering the following inform\")]").nth(0).hover();
  });

  await test.step(`Hover "Email Address*:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Email Address*:\")]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='emailOrUniqueId'][@placeholder='Email Address']").nth(0).fill("muukteststudent@muukteam.testinator.com");
  });

  await test.step(`Click "Create a Password*:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Create a Password*:\")]").nth(0).click();
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='password'][@placeholder='Password']").nth(0).fill("MuukT!1234");
  });

  await test.step(`Verify "Minimum 10 characters"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(0)).toHaveText("Minimum 10 characters");
  });

  await test.step(`Verify "An uppercase letter"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(1)).toHaveText("An uppercase letter");
  });

  await test.step(`Verify "A lowercase letter"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(2)).toHaveText("A lowercase letter");
  });

  await test.step(`Verify "A special character (!,@,#,$,%,^,&,*)"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(3)).toHaveText("A special character (!,@,#,$,%,^,&,*)");
  });

  await test.step(`Verify "A number"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(4)).toHaveText("A number");
  });

  await test.step(`Verify "Example: ThisSchool10$"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(5)).toHaveText("Example: ThisSchool10$");
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='password'][@placeholder='Password']").nth(0).fill("MuukT!1234");
  });

  await test.step(`Click "Confirm Password*:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Confirm Password*:\")]").nth(0).click();
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='confirmPassword'][@placeholder='Confirm New Password']").nth(0).fill("MuukT!1234");
  });

  await test.step(`Click "I agree to the 12Twenty Terms of Service"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"I agree to the 12Twenty Terms of Service\")]//input").nth(0).click();
  });

  await test.step(`Hover "Already a member? Student/Alumni Log In"`, async () => {
    await page.locator("//P[normalize-space() = \"Already a member? Student/Alumni Log In\"]").nth(0).hover();
  });

  await test.step(`Click "Student/Alumni Sign Up"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Student/Alumni Sign Up\")]").nth(0).click();
  });

  await test.step(`Hover "Hi MuukTest!"`, async () => {
    await page.locator("//H1[contains(text(),\"Hi MuukTest!\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Help keep us up to date! Please"`, async () => {
    await page.locator("//P[contains(text(),\"Help keep us up to date! Please\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you a student athlete?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Are you a student athlete?\")]").nth(0).hover();
  });

  await test.step(`Hover "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).hover();
  });

  await test.step(`Hover "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Save & Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save & Continue\"]").nth(0).click();
    await page.waitForTimeout(5000);
    await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Student Athlete"`, async () => {
    await page.locator("//dt[normalize-space()=\"Student Athlete\"]").nth(0).click();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Student Athlete\"]/following-sibling::dd//span").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click "MuukTest Student"`, async () => {
    await page.locator("//SPAN[contains(text(),\"MuukTest Student\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "MuukTest Student"`, async () => {
    await page.locator("//H1[normalize-space() = \"MuukTest Student\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(4000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "MuukTest Student"`, async () => {
    await page.locator("//SPAN[contains(text(),\"MuukTest Student\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//LABEL[normalize-space() = \"Are you a student athlete?\"]";
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Email History\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator("//A[normalize-space() = \"Site Management\"]").nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Add New Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add New Student\"]").nth(0).click();
  });

  await test.step(`Fill "MuukTest"`, async () => {
    await page.locator(INPUT_FIRST_NAME).nth(0).fill("MuukTest");
  });

  await test.step(`Fill "Student2"`, async () => {
    await page.locator(INPUT_LAST_NAME).nth(0).fill("Student2");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='EmailAddress'][@placeholder='Email Address']").nth(0).fill("muukteststudent2@muukteam.testinator.com");
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

  await test.step(`Select "number:360038051146045"`, async () => {
    await page.locator(SELECT_MAJOR_NAME).nth(0).selectOption("number:360038051146045");
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator(LABEL_GRADUATION_TERM).nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE2).nth(0).click();
  });

  await test.step(`Click "Summer 2029"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Summer 2029\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(3).check();
  });

  await test.step(`Click "Student Id"`, async () => {
    await page.locator(LABEL_STUDENT_ID).nth(0).click();
  });

  await test.step(`Fill "M1232"`, async () => {
    await page.locator(INPUT_UNIQUE_ID).nth(0).fill("M1232");
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

  await test.step(`Click "Group 2"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Group 2\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//a[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//a[contains(text(),\"Save\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Fill email`, async () => {
    await page.reload();
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("MuukTest Student2");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "MuukTest Student2"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"MuukTest Student2\")]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("MuukTest Student2");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "MuukTest Student2"`, async () => {
    await page.locator("//A[@title='MuukTest Student2'][contains(text(),\"MuukTest Student2\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator(RBTN_ADD_NOTE).nth(0).hover();
  });

  await test.step(`Hover "Flag User"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Flag User\"]").nth(0).hover();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Sign up for an account"`, async () => {
    await page.locator("//A[contains(text(),\"Sign up for an account\")]").nth(0).click();
  });

  await test.step(`Hover "Join the E2E-CPW Platform"`, async () => {
    await page.locator("//H1[contains(text(),\"Join the E2E-CPW Platform\")]").nth(0).hover();
  });

  await test.step(`Hover "Sign up with your E2E-CPW SSO"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Sign up with your E2E-CPW SSO\")]").nth(0).hover();
  });

  await test.step(`Hover "Sign up by entering the following inform"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Sign up by entering the following inform\")]").nth(0).hover();
  });

  await test.step(`Hover "Email Address*:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Email Address*:\")]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='emailOrUniqueId'][@placeholder='Email Address']").nth(0).fill("muukteststudent2@muukteam.testinator.com");
  });

  await test.step(`Click "Create a Password*:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Create a Password*:\")]").nth(0).click();
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='password'][@placeholder='Password']").nth(0).fill("MuukT!1234");
  });

  await test.step(`Verify "Minimum 10 characters"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(0)).toHaveText("Minimum 10 characters");
  });

  await test.step(`Verify "An uppercase letter"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(1)).toHaveText("An uppercase letter");
  });

  await test.step(`Verify "A lowercase letter"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(2)).toHaveText("A lowercase letter");
  });

  await test.step(`Verify "A special character (!,@,#,$,%,^,&,*)"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(3)).toHaveText("A special character (!,@,#,$,%,^,&,*)");
  });

  await test.step(`Verify "A number"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(4)).toHaveText("A number");
  });

  await test.step(`Verify "Example: ThisSchool10$"`, async () => {
    await expect(page.locator("//div[@id=\"password-info\"]//ul//li").nth(5)).toHaveText("Example: ThisSchool10$");
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='password'][@placeholder='Password']").nth(0).fill("MuukT!1234");
  });

  await test.step(`Click "Confirm Password*:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Confirm Password*:\")]").nth(0).click();
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='confirmPassword'][@placeholder='Confirm New Password']").nth(0).fill("MuukT!1234");
  });

  await test.step(`Click "I agree to the 12Twenty Terms of Service"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"I agree to the 12Twenty Terms of Service\")]//input").nth(0).click();
  });

  await test.step(`Hover "Already a member? Student/Alumni Log In"`, async () => {
    await page.locator("//P[normalize-space() = \"Already a member? Student/Alumni Log In\"]").nth(0).hover();
  });

  await test.step(`Click "Student/Alumni Sign Up"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Student/Alumni Sign Up\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//LABEL[normalize-space() = \"Are you a student athlete?\"]";
  });

  await test.step(`Click "MuukTest Student2"`, async () => {
    await page.locator("//SPAN[contains(text(),\"MuukTest Student2\")]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Email History\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator("//A[normalize-space() = \"Site Management\"]").nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("muukteststudent@muukteam.testinator.com");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "MuukTest Student"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"MuukTest Student\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(1).hover();
  });

  await test.step(`Click "MuukTest Student"`, async () => {
    await page.locator("//A[contains(text(),\"MuukTest Student\")]//ancestor::tr//button").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).hover();
  });

  await test.step(`Hover "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).hover();
  });

  await test.step(`Hover "Send PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Manual PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Manual PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Reset Sign-In Cookies"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reset Sign-In Cookies\"]").nth(0).hover();
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
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("muukteststudent@muukteam.testinator.com");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "No users found"`, async () => {
    await page.locator(DIV_NO_USERS_FOUND_CT).nth(0).click();
  });

  await test.step(`Click "Search by Name, Email Address or ID"`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("muukteststudent2@muukteam.testinator.com");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "MuukTest Student2"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"MuukTest Student2\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(1).hover();
  });

  await test.step(`Click "MuukTest Student"`, async () => {
    await page.locator("//A[contains(text(),\"MuukTest Student\")]//ancestor::tr//button").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).hover();
  });

  await test.step(`Hover "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).hover();
  });

  await test.step(`Hover "Send PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Manual PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Manual PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Reset Sign-In Cookies"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reset Sign-In Cookies\"]").nth(0).hover();
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
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

  await test.step(`Hover "No users found"`, async () => {
    await page.locator(DIV_NO_USERS_FOUND_CT).nth(0).hover();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Site Settings\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(2).click();
  });

  await test.step(`Click "Login"`, async () => {
    await page.locator("//A[contains(text(),\"Login\")]").nth(0).click();
  });

  await test.step(`Click "Once"`, async () => {
    await page.locator("//h4[normalize-space()=\"Once\"]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Configuration"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Configuration\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Configuration"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Configuration\")]").nth(0).click();
  });

  await test.step(`Verify "Successfully deleted configuration"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Successfully deleted configuration\")]").nth(0)).toHaveText("Successfully deleted configuration");
  });

});
