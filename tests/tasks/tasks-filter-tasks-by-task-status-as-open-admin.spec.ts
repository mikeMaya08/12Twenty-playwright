// TC: TC58514
// Tasks - Filter tasks by Task Status as Open - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_HOME } from '@config/selectors';

test("Tasks - Filter tasks by Task Status as Open - Admin - TC58514", async ({ page, context }) => {
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

  await test.step(`Click "Tasks"`, async () => {
    await page.locator("//A[normalize-space() = \"Tasks\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='TaskStatusId'][@name='TaskStatusId']").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
  });

  await test.step(`Click "Overview"`, async () => {
    await page.locator("//A[contains(text(),\"Overview\")]").nth(1).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

});
