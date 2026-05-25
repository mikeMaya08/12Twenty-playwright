// TC: TC58963
// Employers - UI elements are visible - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { INPUT_EMPLOYER_NAME, NAV_EMPLOYERS, NAV_HOME } from '@config/selectors';

test("Employers - UI elements are visible - Admin - TC58963", async ({ page, context }) => {
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

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(1).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(3).hover();
  });

  await test.step(`Hover "Employer Name"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).hover();
  });

  await test.step(`Hover "Approval Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Approval Status\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Employer"`, async () => {
    await page.locator("//A[@id='addCompany'][normalize-space() = \"Add Employer\"]").nth(0).hover();
  });

});
