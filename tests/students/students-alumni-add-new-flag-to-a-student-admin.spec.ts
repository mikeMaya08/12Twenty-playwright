// TC: TC58233
// Students & Alumni - Add new flag to a student - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import {
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  H1_E2E_TEST_STUDENT,
  INPUT_SEARCH_USERS,
  LINK_E2E_TEST_STUDENT_CT,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students & Alumni - Add new flag to a student - Admin - TC58233", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/Login', {timeout: 90000});
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

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e ");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
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
    await page.locator("//A[normalize-space() = \"Add Note\"]").nth(0).hover();
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

  await test.step(`Click "Flag User"`, async () => {
    await page.locator("//A[normalize-space() = \"Flag User\"]").nth(0).click();
  });

  await test.step(`Hover "Flag e2e Test Student"`, async () => {
    await page.locator("//H3[contains(text(),\"Flag e2e Test Student\")]").nth(0).hover();
  });

  await test.step(`Fill "Behaviour"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-gix4ch-text'][@name='flaggedReason'][@placeholder='Flag Note']").nth(0).fill("Behaviour");
  });

  await test.step(`Click "Flag User"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Flag User\")]").nth(0).click();
  });

  await test.step(`Hover "Flag Added"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Flag Added\")]").nth(0).hover();
  });

  await test.step(`Hover "FLAGGED"`, async () => {
    await page.locator("//SPAN[@title='Behaviour'][normalize-space() = \"FLAGGED\"]").nth(0).hover();
  });

  await test.step(`Click "FLAGGED"`, async () => {
    await page.locator("//SPAN[@title='Behaviour'][normalize-space() = \"FLAGGED\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Remove Flag"`, async () => {
    await page.locator("//A[normalize-space() = \"Remove Flag\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Flag Removed"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Flag Removed\")]").nth(0).hover();
  });

});
