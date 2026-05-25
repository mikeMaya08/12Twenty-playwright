// TC: TC69203
// Mentorships - Set mentor, browse mentors, request mentor, complete tasks

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_SAVE_TYPE,
  H1_MANAGE_STUDENTS,
  INPUT_SEARCH_USERS,
  INPUT_SUBJECT,
  LABEL_BULK_UPDATE_1,
  LABEL_COLLEGE_SCHOOL,
  LABEL_DEGREE_LEVEL,
  LABEL_DELETE_STUDENT,
  LABEL_IS_ENROLLED,
  LABEL_NO,
  LABEL_RELATIVE_RANGE,
  LABEL_ROLE_ID,
  LABEL_SPRING_2030,
  LABEL_STUDENT_GROUP_ID,
  LABEL_YES,
  LOGIN_AS_USER,
  LOGOUT_LINK,
  MENU_DELETE,
  MENU_EDIT,
  MODAL_CONFIRM_DELETE,
  MODAL_LOGIN_AS_STUDENT,
  MODAL_OOPS,
  MODAL_STUDENT_ACCOUNT,
  MODAL_SUCCESS,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_MENTORSHIP,
  NAV_SITE_MGMT_SIBLING_BTN,
  OPTIONS_ROW_STUDENT,
  RBTN_CANCEL,
  RBTN_OK,
  RBTN_SAVE_CHANGES,
  SELECT_DATE,
  SELECT_IS_ENROLLED,
  SPAN_E2E_TEST_STUDENT,
  TAB_PROFILE,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Mentorships - Set mentor, browse mentors, request mentor, complete tasks - TC69203", async ({ page, context }) => {
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
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
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

  await test.step(`Fill "Muuktest"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-x5df8-undefined'][@name='FirstName'][@placeholder='First (Preferred) Name']").nth(0).fill("Muuktest");
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_IS_ENROLLED).nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='input-jpwndk-undefined'][@name='IsEnrolled']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_ROLE_ID).nth(0).hover();
  });

  await test.step(`Select "number:149999900505"`, async () => {
    await page.locator("//SELECT[@id='input-clzy7h-undefined'][@name='RoleId']").nth(0).selectOption("number:149999900505");
  });

  await test.step(`Click "Graduation Term*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]/following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update 1"`, async () => {
    await page.locator(LABEL_BULK_UPDATE_1).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_ID).nth(0).click();
  });

  await test.step(`Select "number:1814999953610478"`, async () => {
    await page.locator("//SELECT[@id='input-slburh-undefined'][@name='ProgramId']").nth(0).selectOption("number:1814999953610478");
  });

  await test.step(`Hover "College/School*"`, async () => {
    await page.locator(LABEL_COLLEGE_SCHOOL).nth(0).hover();
  });

  await test.step(`Select "number:149999071101701"`, async () => {
    await page.locator("//SELECT[@id='input-4bsm69-lookup'][@name='College1Name']").nth(0).selectOption("number:149999071101701");
  });

  await test.step(`Hover "Degree Level*"`, async () => {
    await page.locator(LABEL_DEGREE_LEVEL).nth(0).hover();
  });

  await test.step(`Select "number:149999071102056"`, async () => {
    await page.locator("//SELECT[@id='input-wop5f-undefined'][@name='DegreeLevelId']").nth(0).selectOption("number:149999071102056");
  });

  await test.step(`Select "number:360038051146044"`, async () => {
    await page.locator("//SELECT[@id='input-h9uk48-lookup'][@name='Major1Name']").nth(0).selectOption("number:360038051146044");
  });

  await test.step(`Click "Graduation Term"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Graduation Term\")]/following::button[@title=\"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Spring 2030"`, async () => {
    await page.locator(LABEL_SPRING_2030).nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@target=\"_self\"][@class=\"ng-binding\"]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//DT[contains(text(),\"Allow users to request me as a mentor\")]").nth(0).hover();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Mentorships\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Allow users to request me as a mentor\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Hover "Snooze Mentorship Availability"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Snooze Mentorship Availability\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Fill "Please see that I have terms and this i…"`, async () => {
    await page.locator("//TEXTAREA[@id='input-pd5kd-undefined'][@name='MentorshipTerms'][@placeholder='Mentorship Terms']").nth(0).fill("Please see that I have terms and this is a test text.");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//DT[contains(text(),\"Allow users to request me as a mentor\")]").nth(0).hover();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Hover "Snooze Mentorship Availability"`, async () => {
    await page.locator("//dt[normalize-space()=\"Snooze Mentorship Availability\"]").nth(0).hover();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Snooze Mentorship Availability\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Hover "Mentorship Terms"`, async () => {
    await page.locator("//dt[normalize-space()=\"Mentorship Terms\"]").nth(0).hover();
  });

  await test.step(`Hover "Please see that I have terms and this i…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Please see that I have terms and this is a test text.\"]").nth(0).hover();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(OPTIONS_ROW_STUDENT).nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as e2e Test Student"`, async () => {
    await page.locator(MODAL_LOGIN_AS_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
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

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You\\'re currently logged in as e2e Test Student (Student). When you\\'re done, please log out.\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[contains(@class,\"card-title\")]").nth(0).click();
  });

  await test.step(`Click "Request Muuktest as a mentor"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Request Muuktest as a mentor\"]").nth(0).click();
  });

  await test.step(`Hover "Request"`, async () => {
    await page.locator("//H3[normalize-space() = \"Request\"]").nth(0).hover();
  });

  await test.step(`Hover "Please see that I have terms and this i…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Please see that I have terms and this is a test text.\"]").nth(0).hover();
  });

  await test.step(`Click "Message *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Message *\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_editor1\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Hi, please be my mentor!"`, async () => {
    await page.keyboard.type("Hi, please be my mentor!");
    await page.locator("//A[@role='button'][normalize-space() = \"Request\"]").nth(0).click();
  });

  await test.step(`Hover "Your request has been sent successfully."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Your request has been sent successfully.\"]").nth(0).hover();
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
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@target=\"_self\"][@class=\"ng-binding\"]").nth(0).click();
  });

  await test.step(`Click "More"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"More\"]").nth(0).click();
  });

  await test.step(`Click "Emails"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Emails\"]").nth(0).click();
  });

  await test.step(`Click "New Mentorship Request"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"New Mentorship Request\"]").nth(0).click();
  });

  await test.step(`Hover "Email Overview"`, async () => {
    await page.locator("//H3[normalize-space() = \"Email Overview\"]").nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Ok\"]").nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click "Muuktest Mentor"`, async () => {
    await page.locator("//a[contains(text(),\"Muuktest Mentor\")]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
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

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Hover "Manage Mentorship"`, async () => {
    await page.locator("//H1[normalize-space() = \"Manage Mentorship\"]").nth(0).hover();
  });

  await test.step(`Hover "Active"`, async () => {
    await page.locator("//H2[normalize-space() = \"Active\"]").nth(0).hover();
  });

  await test.step(`Hover "Requests"`, async () => {
    await page.locator("//H2[normalize-space() = \"Requests\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(1).hover();
  });

  await test.step(`Hover "PENDING"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"PENDING\"]").nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//span[normalize-space()=\"e2e Test Student\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Hover "Accept"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Accept\"]").nth(0).hover();
  });

  await test.step(`Hover "Decline"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Decline\"]").nth(0).hover();
  });

  await test.step(`Click "Accept"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Accept\"]").nth(0).click();
  });

  await test.step(`Hover "Accept"`, async () => {
    await page.locator("//H3[normalize-space() = \"Accept\"]").nth(0).hover();
  });

  await test.step(`Hover "Message (Optional)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Message (Optional)\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"cke\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "I have accepted"`, async () => {
    await page.keyboard.type("I have accepted");
    await page.locator("//A[@role='button'][normalize-space() = \"Accept\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//span[normalize-space()=\"e2e Test Student\"]//following::button").nth(0).click();
  });

  await test.step(`Click "Send Email"`, async () => {
    await page.locator("//A[@role='button'][@title='mentorship.recipientFullName'][normalize-space() = \"Send Email\"]").nth(0).click();
  });

  await test.step(`Hover "Message:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Message:\"]").nth(0).hover();
  });

  await test.step(`Fill "Test Email"`, async () => {
    await page.locator(INPUT_SUBJECT).nth(0).fill("Test Email");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"cke\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Test"`, async () => {
    await page.keyboard.type("Test");
    await page.locator("//BUTTON[normalize-space() = \"Send\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "Your email has been sent."`, async () => {
    await page.locator("//DIV[normalize-space() = \"Your email has been sent.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
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

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"e2e Test Student\"]").nth(0).click();
  });

  await test.step(`Click "More"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"More\"]").nth(0).click();
  });

  await test.step(`Click "Emails"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Emails\"]").nth(0).click();
  });

  await test.step(`Click "Date"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Date\"]").nth(0).click();
  });

  await test.step(`Click "Custom Range"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Custom Range\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='radio'][@name='dateFilterType']").nth(0).click();
  });

  await test.step(`Click "Relative Range"`, async () => {
    await page.locator(LABEL_RELATIVE_RANGE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='radio'][@name='dateFilterType']").nth(1).click();
  });

  await test.step(`Select "number:7"`, async () => {
    await page.locator(SELECT_DATE).nth(0).selectOption("number:7");
  });

  await test.step(`Click "Date"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Date\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest Mentor"`, async () => {
    await page.locator("//A[contains(text(),\"Muuktest Mentor\") and contains(text(),\"has messaged you via E2E Tests Campuswide E2E-CPW - Test Email\")]").nth(0).click();
  });

  await test.step(`Hover "Email Overview"`, async () => {
    await page.locator("//H3[normalize-space() = \"Email Overview\"]").nth(0).hover();
  });

  await test.step(`Hover "Test"`, async () => {
    await page.locator("//P[normalize-space() = \"Test\"]").nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Ok\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Mentorship"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorship\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentee"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentee\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(1).hover();
  });

  await test.step(`Hover "Mentor"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentor\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest Mentor"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Muuktest Mentor\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(OPTIONS_ROW_STUDENT).nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as e2e Test Student"`, async () => {
    await page.locator(MODAL_LOGIN_AS_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
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

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You\\'re currently logged in as e2e Test Student (Student). When you\\'re done, please log out.\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "Manage"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(1).click();
  });

  await test.step(`Hover "Tasks (0/3)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Tasks (0/3)\"]").nth(0).hover();
  });

  await test.step(`Click "Task 1"`, async () => {
    await page.locator("//label[normalize-space()=\"Task 1\"]/following-sibling::div//input").nth(0).click();
  });

  await test.step(`Click "Task 3"`, async () => {
    await page.locator("//label[normalize-space()=\"Task 3\"]/following-sibling::div//input").nth(0).click();
  });

  await test.step(`Hover "Tasks (2/3)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Tasks (2/3)\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(1).click();
  });

  await test.step(`Click "Task 3"`, async () => {
    await page.locator("//label[normalize-space()=\"Task 3\"]/following-sibling::div//input").nth(0).click();
  });

  await test.step(`Hover "Tasks (1/3)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Tasks (1/3)\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
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

  await test.step(`Click "More"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"More\"]").nth(0).click();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Mentorships\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Tasks (1/3)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Tasks (1/3)\"]").nth(0).hover();
  });

  await test.step(`Hover "Task 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Task 1\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click "Muuktest Mentor"`, async () => {
    await page.locator("//a[contains(text(),\"Muuktest Mentor\")]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//a[normalize-space()=\"e2e Test Student\"]/following::button").nth(0).click();
  });

  await test.step(`Click "Complete Mentorship Tasks"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Complete Mentorship Tasks\"]").nth(0).click();
  });

  await test.step(`Hover "Tasks (1/3)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Tasks (1/3)\"]").nth(0).hover();
  });

  await test.step(`Click "Task 3"`, async () => {
    await page.locator("//label[normalize-space()=\"Task 3\"]/following-sibling::div//input").nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
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

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Tasks (2/3)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Tasks (2/3)\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Mentor"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Muuktest Mentor\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Click "Muuktest Mentor"`, async () => {
    await page.locator("//a[contains(text(),\"Muuktest Mentor\")]/ancestor::tr//button").nth(0).click();
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

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS).nth(0).hover();
  });

  await test.step(`Hover "This user can not be deleted as they ar…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"This user can not be deleted as they are associated with a mentorship record. Please set the user to inactive status instead.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Muuktest Mentor"`, async () => {
    await page.locator("//a[contains(text(),\"Muuktest Mentor\")]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).click();
  });

  await test.step(`Hover "Student Account Information"`, async () => {
    await page.locator(MODAL_STUDENT_ACCOUNT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator(LABEL_IS_ENROLLED).nth(0).hover();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator(SELECT_IS_ENROLLED).nth(0).selectOption("number:2");
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

});
