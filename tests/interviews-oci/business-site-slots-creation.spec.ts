// TC: TC76012
// Business site - Slots creation

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import { ADMIN_LOG_IN_BTN, NAV_OCI_JOB_LISTINGS } from '@config/selectors';

test("Business site - Slots creation - TC76012", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/login', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='email'][@placeholder='Email Address'][@name='UserName']").nth(0).fill("admin-1@e2e-tests-business.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@placeholder='Password'][@name='Password']").nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//A[normalize-space() = \"Command Center\"]").nth(0).click();
    await page.waitForTimeout(17000);
  });

  await test.step(`Click "Upcoming"`, async () => {
    await page.reload();
    await page.locator("//A[contains(text(),\"Upcoming\")]").nth(0).click();
  });

});
