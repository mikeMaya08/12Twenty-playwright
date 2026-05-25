// TC: TC58294
// Employers - Admin Searches Employer Directory by Company Name

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, INPUT_EMPLOYER_NAME, NAV_EMPLOYERS, NAV_HOME } from '@config/selectors';

test("Employers - Admin Searches Employer Directory by Company Name - TC58294", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Hover "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).hover();
  });

  await test.step(`Fill "3M"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("3M");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "3M"`, async () => {
    await page.locator("//A[contains(text(),\"3M\")]").nth(0).click();
  });

  await test.step(`Hover "3M"`, async () => {
    await page.locator("//H1[normalize-space() = \"3M\"]").nth(0).hover();
  });

});
