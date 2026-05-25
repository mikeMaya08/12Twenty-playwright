// TC: TC58965
// Contacts - UI elements are visible - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_HOME } from '@config/selectors';

test("Contacts - UI elements are visible - Admin - TC58965", async ({ page, context }) => {
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

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//th[contains(text(),\"Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Most Recent Activity"`, async () => {
    await page.locator("//th[contains(text(),\"Most Recent Activity\")]").nth(0).hover();
  });

  await test.step(`Hover "Approval Status (Contact)"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Approval Status (Contact)\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Contact"`, async () => {
    await page.locator("//A[@id='addContact'][normalize-space() = \"Add Contact\"]").nth(0).hover();
  });

});
