// TC: TC58418
// Home - Post a non-expired announcement for Employers - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { INPUT_DATE, INPUT_TIME, NAV_DELETE, NAV_EDIT, NAV_HOME } from '@config/selectors';

test("Home - Post a non-expired announcement for Employers - Admin - TC58418", async ({ page, context }) => {
  let selector = `0`;

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

  await test.step(`Click "What would you like to announce,"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"What would you like to announce,\")]").nth(0).click();
  });

  await test.step(`Hover "Select a user type"`, async () => {
    await page.locator("//H4[normalize-space() = \"Select a user type\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Employers\"]").nth(0).click();
  });

  await test.step(`Hover "New announcement to Employers"`, async () => {
    await page.locator("//H4[normalize-space() = \"New announcement to Employers\"]").nth(0).hover();
  });

  await test.step(`Hover "Expiration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Expiration*\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"active day\"]//following::td").nth(0).click();
  });

  await test.step(`Fill "3:00pm"`, async () => {
    await page.locator(INPUT_TIME).nth(0).fill("3:00pm");
  });

  await test.step(`Click "Expiration*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Expiration*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_text\"]").nth(0).click();
  });

  await test.step(`Type "New announcement for Employers."`, async () => {
    await page.keyboard.type("New announcement for Employers.");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Post"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Post\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//div[contains(@class,\"header-main\")]//span[contains(text(),\"e2e Test Admin\")]").nth(0).hover();
  });

  await test.step(`Hover "New announcement for Empl"`, async () => {
    await page.locator("//P[contains(text(),\"New announcement for Empl\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//div[contains(@class,\"header-main\")]//span[contains(text(),\"e2e Test Admin\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[contains(@aria-label,\"Options - Announcement\")]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Pin"`, async () => {
    await page.locator("//A[normalize-space() = \"Pin\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = " //P[contains(text(),\"New announcement for Employer\")]";
  });

});
