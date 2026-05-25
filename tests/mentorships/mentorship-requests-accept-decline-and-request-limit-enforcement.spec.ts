// TC: TC_A83061
// Mentorship Requests - Accept, Decline, and Request Limit Enforcement

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE_TYPE,
  B_LOG_OUT,
  INPUT_SEARCH_USERS,
  LABEL_SELECT_ALL,
  LABEL_USER_ROLE,
  LOGIN_AS_BTN,
  MODAL_PLEASE_CONFIRM,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  NAV_MENTORSHIP,
  NAV_STUDENTS_ALUMNI,
  RBTN_DELETE_SELECTED,
  RBTN_OK,
  TAB_PROFILE,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Mentorship Requests - Accept, Decline, and Request Limit Enforcement - TC_A83061", async ({ page, context }) => {
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

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Mentorship Program 1\"]";
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this me…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Mentorship Program 1\"]";
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this me…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Stacey Davis");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Stacey Davis\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Programs\"]/ancestor::ng-form[contains(@class,\"form-group\")]//button").nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).toContainText("Mentorship Program 1");
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[normalize-space() = \"General\"]").nth(0).hover();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//H3[normalize-space() = \"General\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "User Role*"`, async () => {
    await page.locator(LABEL_USER_ROLE).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-x939na-undefined'][@name='RoleId']").nth(0).click();
  });

  await test.step(`Type "Full Access - Mentor"`, async () => {
    await page.keyboard.type("Full Access - Mentor");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Full Access - Mentor"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"User Role\"]/following-sibling::dd").nth(0)).toHaveText("Full Access - Mentor");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Ryan Branson");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Ryan Branson\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Programs\"]/ancestor::ng-form[contains(@class,\"form-group\")]//button").nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).toContainText("Mentorship Program 1");
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[normalize-space() = \"General\"]").nth(0).hover();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//H3[normalize-space() = \"General\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "User Role*"`, async () => {
    await page.locator(LABEL_USER_ROLE).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-x939na-undefined'][@name='RoleId']").nth(0).click();
  });

  await test.step(`Type "Full Access - Mentor"`, async () => {
    await page.keyboard.type("Full Access - Mentor");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Full Access - Mentor"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"User Role\"]/following-sibling::dd").nth(0)).toHaveText("Full Access - Mentor");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Jared Jackson");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Jared Jackson\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Programs\"]/ancestor::ng-form[contains(@class,\"form-group\")]//button").nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).toContainText("Mentorship Program 1");
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[normalize-space() = \"General\"]").nth(0).hover();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//H3[normalize-space() = \"General\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "User Role*"`, async () => {
    await page.locator(LABEL_USER_ROLE).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-x939na-undefined'][@name='RoleId']").nth(0).click();
  });

  await test.step(`Type "Full Access - Mentee"`, async () => {
    await page.keyboard.type("Full Access - Mentee");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Full Access - Mentee"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"User Role\"]/following-sibling::dd").nth(0)).toHaveText("Full Access - Mentee");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Jared Jackson"`, async () => {
    await expect(page.locator(USER_ACCOUNT_NAME).nth(0)).toHaveText("Jared Jackson");
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentorship Programs\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I[@class=\"fa fa-undo\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program 1\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentorship Programs\"]").nth(0).click();
  });

  await test.step(`Click "Ryan Branson"`, async () => {
    await page.locator("//A[normalize-space() = \"Ryan Branson\"]").nth(0).click();
  });

  await test.step(`Click "Request Ryan as a mentor"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Request Ryan as a mentor\"]").nth(0).click();
  });

  await test.step(`Hover "Request"`, async () => {
    await page.locator("//H3[normalize-space() = \"Request\"]").nth(0).hover();
  });

  await test.step(`Hover "Message *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Message *\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_editor1\"]").nth(0).click();
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Type "Automated test"`, async () => {
    await page.keyboard.type("Automated test");
    await page.locator("//A[@role='button'][normalize-space() = \"Request\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "Stacey Davis"`, async () => {
    await page.locator("//A[normalize-space() = \"Stacey Davis\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "Manage"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage\"]").nth(0).click();
  });

  await test.step(`Hover "Ryan Branson"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Ryan Branson\"]").nth(0).hover();
  });

  await test.step(`Hover "PENDING"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"PENDING\"]").nth(0).hover();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Ryan Branson");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Ryan Branson\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Ryan Branson"`, async () => {
    await expect(page.locator(USER_ACCOUNT_NAME).nth(0)).toHaveText("Ryan Branson");
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Hover "Jared Jackson"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Jared Jackson\"]").nth(0).hover();
  });

  await test.step(`Hover "PENDING"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"PENDING\"]").nth(0).hover();
  });

  await test.step(`Click "Jared Jackson"`, async () => {
    await page.locator("//a[normalize-space()=\"Jared Jackson\"]/ancestor::tr//button").nth(0).click();
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

  await test.step(`Click "Accept"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Accept\"]").nth(0).click();
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//h2[normalize-space()=\"Active\"]/ancestor::div[@class=\"active-mentorship-container\"]//div[@class=\"card-info\"]//a").nth(0)).toHaveText("Mentorship Program 1");
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//a[normalize-space()=\"Mentorship Program 1\"]//ancestor::div[contains(@class,\"tt-card\")]//button").nth(0).click();
  });

  await test.step(`Click "Complete Mentorship Tasks"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Complete Mentorship Tasks\"]").nth(0).click();
  });

  await test.step(`Verify "Tasks (0/"`, async () => {
    await expect(page.locator("//H3[contains(normalize-space(),\"Tasks\")]").nth(0)).toContainText("Tasks (0/");
  });

  await test.step(`Verify "Task 1"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Task 1\"]").nth(0)).toContainText("Task 1");
  });

  await test.step(`Click "Task 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Task 1\"]/following-sibling::div//input").nth(0).click();
  });

  await test.step(`Verify "Tasks (1/"`, async () => {
    await expect(page.locator("//H3[contains(normalize-space(),\"Tasks\")]").nth(0)).toContainText("Tasks (1/");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//a[normalize-space()=\"Mentorship Program 1\"]//ancestor::div[contains(@class,\"tt-card\")]//button").nth(0).click();
  });

  await test.step(`Click "Complete Mentorship Tasks"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Complete Mentorship Tasks\"]").nth(0).click();
  });

  await test.step(`Verify "Tasks (1/"`, async () => {
    await expect(page.locator("//H3[contains(normalize-space(),\"Tasks\")]").nth(0)).toContainText("Tasks (1/");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Hover "Mentorship Program 1"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Mentorship Program 1\"]").nth(0).hover();
  });

  await test.step(`Verify "Mentee: Jared Jackson"`, async () => {
    await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentee: \")]").nth(0)).toHaveText("Mentee: Jared Jackson");
  });

  await test.step(`Verify "Mentor: Ryan Branson"`, async () => {
    await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentor: \")]").nth(0)).toHaveText("Mentor: Ryan Branson");
  });

  await test.step(`Verify "ACTIVE"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//span[contains(@class,\"badge\")]").nth(0)).toHaveText("ACTIVE");
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this me…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Jared Jackson");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Jared Jackson\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Jared Jackson"`, async () => {
    await expect(page.locator(USER_ACCOUNT_NAME).nth(0)).toHaveText("Jared Jackson");
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Stacey Davis"`, async () => {
    await page.locator("//A[normalize-space() = \"Stacey Davis\"]").nth(0).click();
  });

  await test.step(`Click "Request Stacey as a mentor"`, async () => {
    await page.locator("//button[normalize-space() = \"Request Stacey as a mentor\"]").nth(0).click();
  });

  await test.step(`Hover "Request"`, async () => {
    await page.locator("//H3[normalize-space() = \"Request\"]").nth(0).hover();
  });

  await test.step(`Hover "Message *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Message *\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_editor1\"]").nth(0).click();
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Type "Automated test"`, async () => {
    await page.keyboard.type("Automated test");
    await page.locator("//A[@role='button'][normalize-space() = \"Request\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "Manage"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage\"]").nth(0).click();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Stacey Davis");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Stacey Davis\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Stacey Davis"`, async () => {
    await expect(page.locator(USER_ACCOUNT_NAME).nth(0)).toHaveText("Stacey Davis");
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Hover "Jared Jackson"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Jared Jackson\"]").nth(0).hover();
  });

  await test.step(`Hover "PENDING"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"PENDING\"]").nth(0).hover();
  });

  await test.step(`Click "Jared Jackson"`, async () => {
    await page.locator("//a[normalize-space()=\"Jared Jackson\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Decline"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Decline\"]").nth(0).click();
  });

  await test.step(`Hover "Decline"`, async () => {
    await page.locator("//H3[normalize-space() = \"Decline\"]").nth(0).hover();
  });

  await test.step(`Hover "Message (Optional)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Message (Optional)\"]").nth(0).hover();
  });

  await test.step(`Click "Decline"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Decline\"]").nth(0).click();
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "DECLINED"`, async () => {
    await expect(page.locator("//SPAN[@class=\"badge alert\"]").nth(0)).toHaveText("DECLINED");
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Hover "Mentorship Program 1"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Mentorship Program 1\"]").nth(0).hover();
  });

  await test.step(`Verify "Mentee: Jared Jackson"`, async () => {
    await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentee: \")]").nth(0)).toHaveText("Mentee: Jared Jackson");
  });

  await test.step(`Verify "Mentor: Stacey Davis"`, async () => {
    await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentor: \")]").nth(0)).toHaveText("Mentor: Stacey Davis");
  });

  await test.step(`Verify "DECLINED"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//span[contains(@class,\"badge\")]").nth(0)).toHaveText("DECLINED");
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this me…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

});
