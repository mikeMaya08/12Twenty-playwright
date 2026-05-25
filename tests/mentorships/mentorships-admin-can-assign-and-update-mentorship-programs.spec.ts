// TC: TC_A83053
// Mentorships - Admin Can Assign and Update Mentorship Programs

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_SAVE_TYPE,
  INPUT_SEARCH_USERS,
  LABEL_SELECT_ALL,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  TAB_PROFILE,
} from '@config/selectors';

test("Mentorships - Admin Can Assign and Update Mentorship Programs - TC_A83053", async ({ page, context }) => {
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

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.reload();
    await page.locator(TAB_PROFILE).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).toContainText("Mentorship Program 1");
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Programs\"]/ancestor::ng-form[contains(@class,\"form-group\")]//button").nth(0).click();
  });

  await test.step(`Click "Mentorship Program 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Mentorship Program 1\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Verify "Mentorship Program 1"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd").nth(0)).not.toContainText("Mentorship Program 1");
  });

});
