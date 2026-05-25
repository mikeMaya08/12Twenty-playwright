// TC: TC59044
// Students & Alumni - Change to List view and Card view - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { H1_STUDENTS_ALUMNI, NAV_HOME, NAV_STUDENTS_ALUMNI } from '@config/selectors';

test("Students & Alumni - Change to List view and Card view - Admin - TC59044", async ({ page, context }) => {
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

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.reload();
    await page.locator("//button//i[@aria-label=\"List view\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//table[contains(@class,\"custom-view-table\")]//tbody//tr").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button//i[@aria-label=\"Card view\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[contains(@class,\"tt-custom-views\")]//tt-students-list-cards//div[contains(@class,\"floating-card-container\")]//tt-student-summary-card").nth(0).hover();
  });

});
