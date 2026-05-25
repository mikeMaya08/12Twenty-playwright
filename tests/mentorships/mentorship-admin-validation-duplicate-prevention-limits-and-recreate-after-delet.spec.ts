// TC: TC_A83124
// Mentorship Admin Validation - Duplicate Prevention, Limits, and Recreate After Deletion

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE_TYPE,
  INPUT_SEARCH_USERS,
  LABEL_SELECT_ALL,
  MODAL_OOPS,
  MODAL_PLEASE_CONFIRM,
  NAV_HOME,
  NAV_MENTORSHIP,
  NAV_STUDENTS_ALUMNI,
  RBTN_CANCEL,
  RBTN_DELETE_SELECTED,
  RBTN_OK,
  RBTN_OK_MODAL,
  RBTN_SAVE,
  TAB_PROFILE,
} from '@config/selectors';

test("Mentorship Admin Validation - Duplicate Prevention, Limits, and Recreate After Deletion - TC_A83124", async ({ page, context }) => {
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

  await test.step(`Verify "E2E Tests Campuswide Mentorship Program"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).not.toContainText("E2E Tests Campuswide Mentorship Program");
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
    await page.waitForLoadState('load');
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

  await test.step(`Click "New Mentorship"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Mentorship\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Mentorship"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add New Mentorship\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship Program*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").nth(0).click();
  });

  await test.step(`Type "E2E Test Campuswide"`, async () => {
    await page.keyboard.type("E2E Test Campuswide");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Mentor*\"]").nth(0).hover();
  });

  await test.step(`Click "Mentor"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-1oa72k-autocomplete'][@name=''][@placeholder='Mentor']").nth(0).click();
  });

  await test.step(`Type "Stacey Davis"`, async () => {
    await page.keyboard.type("Stacey Davis");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@type='text'][@id='input-7b5nd9-autocomplete'][@name=''][@placeholder='Mentee']").nth(0).click();
  });

  await test.step(`Type "Jared Jackson"`, async () => {
    await page.keyboard.type("Jared Jackson");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS).nth(0).hover();
  });

  await test.step(`Hover "The mentor selected is not available to…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"The mentor selected is not available to participate in this mentorship program.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
  });

  await test.step(`Click "Mentorship Program*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").nth(0).click();
  });

  await test.step(`Type "Mentorship Program 1"`, async () => {
    await page.keyboard.type("Mentorship Program 1");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(RBTN_SAVE).nth(0).click();
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

  await test.step(`Verify "ACTIVE"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//span[contains(@class,\"badge\")]").nth(0)).toHaveText("ACTIVE");
  });

  await test.step(`Click "New Mentorship"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Mentorship\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Mentorship"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add New Mentorship\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentor*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentor*\"]").nth(0).hover();
  });

  await test.step(`Click "Mentor"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-1oa72k-autocomplete'][@name=''][@placeholder='Mentor']").nth(0).click();
  });

  await test.step(`Type "Stacey Davis"`, async () => {
    await page.keyboard.type("Stacey Davis");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@type='text'][@id='input-7b5nd9-autocomplete'][@name=''][@placeholder='Mentee']").nth(0).click();
  });

  await test.step(`Type "Jared Jackson"`, async () => {
    await page.keyboard.type("Jared Jackson");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").nth(0).click();
  });

  await test.step(`Type "Mentorship Program 1"`, async () => {
    await page.keyboard.type("Mentorship Program 1");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS).nth(0).hover();
  });

  await test.step(`Hover "Please address the following issues bef…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Please address the following issues before proceeding:\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentor has met their maximum active men…"`, async () => {
    await page.locator("//LI[normalize-space()=\"Mentor has met their maximum active mentorships limit.\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentee has met their maximum active men…"`, async () => {
    await page.locator("//LI[normalize-space()=\"Mentee has met their maximum active mentorships limit.\"]").nth(0).hover();
  });

  await test.step(`Hover "This mentor and mentee are already in a…"`, async () => {
    await page.locator("//LI[normalize-space()=\"This mentor and mentee are already in an active mentorship for this program.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).click();
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

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "New Mentorship"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Mentorship\"]").nth(0).click();
  });

  await test.step(`Hover "Mentor*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentor*\"]").nth(0).hover();
  });

  await test.step(`Click "Mentor"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-1oa72k-autocomplete'][@name=''][@placeholder='Mentor']").nth(0).click();
  });

  await test.step(`Type "Stacey Davis"`, async () => {
    await page.keyboard.type("Stacey Davis");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@type='text'][@id='input-7b5nd9-autocomplete'][@name=''][@placeholder='Mentee']").nth(0).click();
  });

  await test.step(`Type "Jared Jackson"`, async () => {
    await page.keyboard.type("Jared Jackson");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").nth(0).click();
  });

  await test.step(`Type "Mentorship Program 1"`, async () => {
    await page.keyboard.type("Mentorship Program 1");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(RBTN_SAVE).nth(0).click();
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

  await test.step(`Verify "ACTIVE"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//span[contains(@class,\"badge\")]").nth(0)).toHaveText("ACTIVE");
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Mentorship Program 1\"]").nth(0).click();
  });

  await test.step(`Hover "Mentorship"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorship\"]").nth(0).hover();
  });

  await test.step(`Hover "Jared Jackson"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Jared Jackson\"]").nth(0).hover();
  });

  await test.step(`Hover "Stacey Davis"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Stacey Davis\"]").nth(0).hover();
  });

  await test.step(`Hover "Tasks (0/"`, async () => {
    await page.locator("//H3[contains(normalize-space(),\"Tasks (0/\")]").nth(0).hover();
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Program\"]//following-sibling::dd").nth(0)).toHaveText("Mentorship Program 1");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]";
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]/ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
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

});
