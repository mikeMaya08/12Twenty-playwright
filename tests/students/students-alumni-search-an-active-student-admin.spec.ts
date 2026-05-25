// TC: TC58569
// Students & Alumni - Search an Active student - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_SEARCH,
  H1_E2E_TEST_STUDENT,
  INPUT_SEARCH_USERS,
  LABEL_BULK_UPDATE_1,
  LINK_E2E_TEST_STUDENT_CT,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students & Alumni - Search an Active student - Admin - TC58569", async ({ page, context }) => {
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Active"`, async () => {
    await page.locator("//span[contains(text(),\"Active\")]//following::i[@class=\"fa fa-chevron-down\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify visible "Bulk Update 1"`, async () => {
    await expect(page.locator(LABEL_BULK_UPDATE_1).nth(0)).toBeVisible();
  });

  await test.step(`Click "Active"`, async () => {
    await page.locator("//span[contains(text(),\"Active\")]//following::i[@class=\"fa fa-chevron-down\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e ");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(H1_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Yes"`, async () => {
    await page.locator("//dt[contains(text(),\"Active\")]/following-sibling::dd[normalize-space()=\"Yes\"]").nth(0).hover();
  });

});
