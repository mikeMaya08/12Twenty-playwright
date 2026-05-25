// TC: TC58659
// Standard Reports - Generate and Export NACE Complete Report

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_HOME, RBTN_CANCEL_CONTAINS } from '@config/selectors';

test("Standard Reports - Generate and Export NACE Complete Report - TC58659", async ({ page, context }) => {
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

  await test.step(`Click "Reports"`, async () => {
    await page.locator("//A[normalize-space() = \"Reports\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Standard Reports"`, async () => {
    await page.locator("//A[contains(text(),\"Standard Reports\")]").nth(0).click();
  });

  await test.step(`Hover "Standard Reports"`, async () => {
    await page.locator("//H1[contains(text(),\"Standard Reports\")]").nth(0).hover();
  });

  await test.step(`Click "Generate and Export Complete Report"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Generate and Export Complete Report\"]").nth(0).click();
  });

  await test.step(`Hover "Generate and Export NACE Reports"`, async () => {
    await page.locator("//H3[normalize-space() = \"Generate and Export NACE Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Generate Report"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Generate Report\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(3000);
  });

});
