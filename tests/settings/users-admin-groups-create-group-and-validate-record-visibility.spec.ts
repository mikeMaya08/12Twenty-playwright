// TC: TC_A79933
// Users - Admin Groups - Create group and validate record visibility

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  ADMIN_LOG_IN_BTN,
  BTN_12TWENTY_ID,
  BTN_ADD,
  BTN_CANCEL,
  BTN_MORE_FILTERS,
  BTN_OK,
  BTN_RESET_FILTERS,
  BTN_SAVE_TYPE,
  B_LOG_OUT,
  DIV_RESULTS_CT,
  INPUT_EMAIL_LOGIN,
  INPUT_PASSWORD_LOGIN,
  INPUT_SEARCH_FILTERS,
  LABEL_MAJOR_PROGRAM,
  LABEL_STUDENT_GROUP_CT,
  LINK_CYDNEY_MOORE,
  LOGIN_AS_USER,
  MENU_EDIT,
  MODAL_SUCCESS,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_MGMT_SIBLING_BTN,
  NAV_STUDENTS_ALUMNI,
  TAB_PROFILE,
} from '@config/selectors';

test("Users - Admin Groups - Create group and validate record visibility - TC_A79933", async ({ page, context }) => {
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "id"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("id");
  });

  await test.step(`Click "12twenty ID"`, async () => {
    await page.locator(BTN_12TWENTY_ID).nth(0).click();
  });

  await test.step(`Hover "12twenty ID"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"12twenty ID\"]").nth(1).hover();
  });

  await test.step(`Fill "540016054866989"`, async () => {
    await page.locator("//INPUT[@type='number'][@name='numericId_AN_student__id'][@placeholder='12twenty ID']").nth(0).fill("540016054866989");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"Student Group\"]//following-sibling::dd[1]//span//span[not(contains(text(),\"e2e Test Group\"))]";
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//H3[contains(text(),\"General\")]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_CT).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Student Group*\")]/following::button").nth(0).click();
  });

  await test.step(`Click "e2e Test Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"e2e Test Group\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "e2e Test Group"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Student Group\"]//following-sibling::dd").nth(0)).toContainText("e2e Test Group");
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Admins"`, async () => {
    await page.locator("//A[normalize-space() = \"Admins\"]").nth(0).click();
  });

  await test.step(`Click "Groups"`, async () => {
    await page.locator("//A[normalize-space() = \"Groups\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Admin Test Group - Muuktest\"]";
  });

  await test.step(`Hover "Admin Test Group - Muuktest"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Admin Test Group - Muuktest\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(60).click();
  });

  await test.step(`Click "Delete Group"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Delete Group\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Admin Group"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Admin Group\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this admin group?\"]").nth(1).hover();
  });

  await test.step(`Click "Delete Admin Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Admin Group\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Add a new Group"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add a new Group\"]").nth(0).click();
  });

  await test.step(`Hover "Student Groups"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Groups\"]").nth(0).hover();
  });

  await test.step(`Fill "Admin Test Group - Muuktest"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-smwvp5-text'][@name='name'][@placeholder='Admin Group Name']").nth(0).fill("Admin Test Group - Muuktest");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "e2e Test Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"e2e Test Group\"]").nth(0).click();
  });

  await test.step(`Click "Student Groups"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Groups\"]").nth(0).click();
  });

  await test.step(`Hover "Major/Academic Program"`, async () => {
    await page.locator(LABEL_MAJOR_PROGRAM).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD).nth(0).click();
  });

  await test.step(`Hover "Admin Test Group - Muuktest"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Admin Test Group - Muuktest\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(1).hover();
  });

  await test.step(`Hover "e2e Test Group"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e Test Group\"]").nth(1).hover();
  });

  await test.step(`Click "Users"`, async () => {
    await page.locator("//A[normalize-space() = \"Users\"]").nth(0).click();
  });

  await test.step(`Hover "Admin Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(14).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).click();
  });

  await test.step(`Hover "Edit Admin Admin"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Admin Admin\"]").nth(0).hover();
  });

  await test.step(`Click "Admin Groups"`, async () => {
    await page.locator("//label[normalize-space()=\"Admin Groups\"]/following-sibling::div").nth(0).click();
  });

  await test.step(`Click "Admin Test Group - Muuktest"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Admin Test Group - Muuktest\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//A[@role='button'][@id='btnSave'][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "You have successfully saved the user."`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully saved the user.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Hover "Admin Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(14).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as Admin Admin"`, async () => {
    await page.locator("//H3[normalize-space() = \"Login as Admin Admin\"]").nth(0).hover();
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Results: 1"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Results: 1\"]").nth(0).click();
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).hover();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.admin.schooladministrator@campuswide.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
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

  await test.step(`Click "Admins"`, async () => {
    await page.locator("//A[normalize-space() = \"Admins\"]").nth(0).click();
  });

  await test.step(`Click "Users"`, async () => {
    await page.locator("//A[normalize-space() = \"Users\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(14).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(100).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).click();
  });

  await test.step(`Click "Edit Admin Admin"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Admin Admin\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Admin Admin"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Admin Admin\"]").nth(0).hover();
  });

  await test.step(`Click "Admin Groups"`, async () => {
    await page.locator("//label[normalize-space()=\"Admin Groups\"]/following-sibling::div").nth(0).click();
  });

  await test.step(`Click "Admin Test Group - Muuktest"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Admin Test Group - Muuktest\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//A[@role='button'][@id='btnSave'][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "You have successfully saved the user."`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully saved the user.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.reload();
    await page.locator("//SPAN").nth(100).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as Admin Admin"`, async () => {
    await page.locator("//H3[normalize-space() = \"Login as Admin Admin\"]").nth(0).hover();
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Verify "Results: 1"`, async () => {
    await expect(page.locator(DIV_RESULTS_CT).nth(0)).not.toHaveText("Results: 1");
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.admin.schooladministrator@campuswide.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
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

  await test.step(`Click "Admins"`, async () => {
    await page.locator("//A[normalize-space() = \"Admins\"]").nth(0).click();
  });

  await test.step(`Click "Groups"`, async () => {
    await page.locator("//A[normalize-space() = \"Groups\"]").nth(0).click();
  });

  await test.step(`Hover "Admin Test Group - Muuktest"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Admin Test Group - Muuktest\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(60).click();
  });

  await test.step(`Click "Delete Group"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Delete Group\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Admin Group"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Admin Group\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this admin group?\"]").nth(1).hover();
  });

  await test.step(`Click "Delete Admin Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Admin Group\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "id"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("id");
  });

  await test.step(`Click "12twenty ID"`, async () => {
    await page.locator(BTN_12TWENTY_ID).nth(0).click();
  });

  await test.step(`Hover "12twenty ID"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"12twenty ID\"]").nth(1).hover();
  });

  await test.step(`Fill "540016054866989"`, async () => {
    await page.locator("//INPUT[@type='number'][@name='numericId_AN_student__id'][@placeholder='12twenty ID']").nth(0).fill("540016054866989");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//H3[contains(text(),\"General\")]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_CT).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Student Group*\")]/following::button").nth(0).click();
  });

  await test.step(`Click "e2e Test Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"e2e Test Group\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "e2e Test Group"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Student Group\"]//following-sibling::dd").nth(0)).toContainText("e2e Test Group");
  });

});
