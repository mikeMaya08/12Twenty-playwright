// TC: TC_A83003
// Mentorships - Admin creates and deletes mentorship

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE_TYPE,
  INPUT_SEARCH_USERS,
  MODAL_PLEASE_CONFIRM,
  NAV_HOME,
  NAV_MENTORSHIP,
  NAV_STUDENTS_ALUMNI,
  RBTN_CANCEL,
  RBTN_DELETE_SELECTED,
  RBTN_OK,
  RBTN_SAVE,
  TAB_PROFILE,
} from '@config/selectors';

test("Mentorships - Admin creates and deletes mentorship - TC_A83003", async ({ page, context }) => {
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

  await test.step(`Type in "Search by Name, Email Address or ID"`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).pressSequentially("Clara Clarkson");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[normalize-space() = \"Clara Clarkson\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"E2E Tests Campuswide Mentorship Program\")]";
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Programs\"]/ancestor::ng-form[contains(@class,\"form-group\")]//button").nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "E2E Tests Campuswide Mentorship Program"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).toContainText("E2E Tests Campuswide Mentorship Program");
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
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
  });

  await test.step(`Click "New Mentorship"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Mentorship\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Mentorship"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add New Mentorship\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentorship Program*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]").nth(0).hover();
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

  await test.step(`Type "Clara Clarkson"`, async () => {
    await page.keyboard.type("Clara Clarkson");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//INPUT[@type='text'][@id='input-7b5nd9-autocomplete'][@name=''][@placeholder='Mentee']").nth(0).click();
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
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Verify "Stacey Davis"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Mentee\"]/ancestor::section//a").nth(0)).toHaveText("Stacey Davis");
  });

  await test.step(`Verify "Clara Clarkson"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Mentor\"]/ancestor::section//a").nth(0)).toHaveText("Clara Clarkson");
  });

  await test.step(`Verify "E2E Tests Campuswide Mentorship Program"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Program\"]/following-sibling::dd").nth(0)).toHaveText("E2E Tests Campuswide Mentorship Program");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
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

});
