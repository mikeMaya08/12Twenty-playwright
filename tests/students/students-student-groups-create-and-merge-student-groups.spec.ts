// TC: TC_A79991
// Students - Student Groups - Create and Merge Student Groups

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_12TWENTY_ID,
  BTN_ADD,
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_MERGE,
  BTN_MORE_FILTERS,
  BTN_RESET_FILTERS,
  BTN_SAVE_TYPE,
  INPUT_SEARCH_FILTERS,
  LABEL_STUDENT_GROUP_CT,
  LINK_CYDNEY_MOORE,
  MODAL_OOPS,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_MGMT_SIBLING_BTN,
  NAV_STUDENTS_ALUMNI,
  RBTN_OK_MODAL,
  RBTN_VIEW_AUDIT,
  SPAN_CLOSE_X,
  TAB_PROFILE,
} from '@config/selectors';

test("Students - Student Groups - Create and Merge Student Groups - TC_A79991", async ({ page, context }) => {
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

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Groups"`, async () => {
    await page.locator("//A[normalize-space() = \"Groups\"]").nth(0).click();
  });

  await test.step(`Click "Add a new Group"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add a new Group\"]").nth(0).click();
  });

  await test.step(`Fill "Muuk Merge Group 1"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-j6u5r-text'][@name='name'][@placeholder='Student Group Name']").nth(0).fill("Muuk Merge Group 1");
  });

  await test.step(`Click "Enable display on site under student na…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable display on site under student name\"]").nth(0).click();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD).nth(0).click();
  });

  await test.step(`Hover "The student group was created successfu…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The student group was created successfully\"]").nth(0).hover();
  });

  await test.step(`Click "Add a new Group"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add a new Group\"]").nth(0).click();
  });

  await test.step(`Fill "Muuk Merge Group 2"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-j6u5r-text'][@name='name'][@placeholder='Student Group Name']").nth(0).fill("Muuk Merge Group 2");
  });

  await test.step(`Click "Enable display on site under student na…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable display on site under student name\"]").nth(0).click();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD).nth(0).click();
  });

  await test.step(`Hover "The student group was created successfu…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The student group was created successfully\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuk Merge Group 2"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 2\"]").nth(0).hover();
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

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "12twenty"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("12twenty ");
  });

  await test.step(`Click "12twenty ID"`, async () => {
    await page.locator(BTN_12TWENTY_ID).nth(0).click();
  });

  await test.step(`Fill "540016054866989"`, async () => {
    await page.locator("//INPUT[@type='number'][@name='numericId_AN_student__id'][@placeholder='12twenty ID']").nth(0).fill("540016054866989");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_CT).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Student Group*\")]//following::BUTTON").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Muuk Merge Group 1\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_CT).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Muuk Merge Group 1"`, async () => {
    await expect(page.locator("//span[@class=\"sub-header\"]/span").nth(0)).toContainText("Muuk Merge Group 1");
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Groups"`, async () => {
    await page.locator("//A[normalize-space() = \"Groups\"]").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 1"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 1\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 1"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 1\"]/ancestor::tr//button//following::A[normalize-space() = \"Merge Group\"]").nth(0).click();
  });

  await test.step(`Hover "Merge Into*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Merge Into*\"]").nth(0).hover();
  });

  await test.step(`Hover "Merge Student Group"`, async () => {
    await page.locator("//H3[normalize-space() = \"Merge Student Group\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-86v2wf-lookup'][@name='selectedStudentGroupId']").nth(0).click();
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Merge"`, async () => {
    await page.locator(BTN_MERGE).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(1).click();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Groups"`, async () => {
    await page.locator("//A[normalize-space() = \"Groups\"]").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 2"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 2\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 2"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 2\"]//following::A[normalize-space() = \"Delete Group\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Student Group"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Student Group\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this student group?\"]").nth(1).hover();
  });

  await test.step(`Click "Delete Student Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Student Group\"]").nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"This student group cannot be deleted because it is associated with 1 student(s). Please un-assign this student group from student accounts. To identify these students, add the \\'Student Group\\' filter on the Student Directory. You may also use the bulk update tool to move these students to a different student group.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP_CT).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Student Group*\")]//following::BUTTON").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Muuk Merge Group 2\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Muuk Merge Group 2"`, async () => {
    await expect(page.locator("//span[@class=\"sub-header\"]/span").nth(0)).toContainText("Muuk Merge Group 2");
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Groups"`, async () => {
    await page.locator("//A[normalize-space() = \"Groups\"]").nth(0).click();
  });

  await test.step(`Hover "Muuk Merge Group 2"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 2\"]").nth(0).hover();
  });

  await test.step(`Click "Muuk Merge Group 2"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 2\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Muuk Merge Group 2"`, async () => {
    await page.locator("//TD[normalize-space()=\"Muuk Merge Group 2\"]//following::A[normalize-space() = \"Delete Group\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Student Group"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Student Group\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Student Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Student Group\"]").nth(0).click();
  });

  await test.step(`Hover "The student group was deleted successfu…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The student group was deleted successfully\"]").nth(0).hover();
  });

});
