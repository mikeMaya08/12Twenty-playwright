// TC: TC58961
// Manage Users - Impersonation - Announcements and homepage tiles are visible to students-Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  H1_E2E_TEST_STUDENT,
  INPUT_SEARCH_USERS,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_ANNOUNCEMENTS_CT,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_ADD_NOTE,
} from '@config/selectors';

test("Manage Users - Impersonation - Announcements and homepage tiles are visible to students-Admin - TC58961", async ({ page, context }) => {
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
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
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

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator(RBTN_ADD_NOTE).nth(0).hover();
  });

  await test.step(`Hover "Flag User"`, async () => {
    await page.locator("//A[normalize-space() = \"Flag User\"]").nth(0).hover();
  });

  await test.step(`Hover "Login As"`, async () => {
    await page.locator("//A[normalize-space() = \"Login As\"]").nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator("//A[normalize-space() = \"View Audit Log\"]").nth(0).hover();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator("//A[normalize-space() = \"Login As\"]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Announcements"`, async () => {
    await page.locator(MODAL_ANNOUNCEMENTS_CT).nth(0).hover();
  });

  await test.step(`Hover "My Calendar"`, async () => {
    await page.locator("//H3[contains(text(),\"My Calendar\")]").nth(0).hover();
  });

  await test.step(`Hover "Recommended Job Listings"`, async () => {
    await page.locator("//H3[contains(text(),\"Recommended Job Listings\")]").nth(0).hover();
  });

  await test.step(`Hover "Recommended Events"`, async () => {
    await page.locator("//H3[contains(text(),\"Recommended Events\")]").nth(0).hover();
  });

  await test.step(`Hover "Outcomes"`, async () => {
    await page.locator("//H3[contains(text(),\"Outcomes\")]").nth(0).hover();
  });

});
