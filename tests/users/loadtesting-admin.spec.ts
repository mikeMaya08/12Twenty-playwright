// TC: TC72143
// LoadTesting - Admin

import { test, expect } from '@playwright/test';
import { loginAsAdmin } from '@fixtures/test';
import { NAV_OCI_JOB_LISTINGS, TAB_SCHEDULE } from '@config/selectors';
import { URLS } from '@config/environments';

test("LoadTesting - Admin - TC72143", async ({ page }) => {
  await test.step(`Setup & Login`, async () => {
    await page.goto(URLS.campusWideAdmin, { timeout: 90000 });
    await loginAsAdmin(page);
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//li[normalize-space()=\"Command Center\"]").nth(0).click();
  });

  await test.step(`Click "Waiting"`, async () => {
    await page.locator("//a[contains(text(),\"Waiting\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(10000);
  });

  await test.step(`Step 1`, async () => {
    let blockSizeJP = 5;
    let jobPostingNames = [];
  });

  await test.step(`Step 2`, async () => {
    let testStudentNamesSt = [];
  });

  await test.step(`Query elements`, async () => {
    let rows = await page.$$('//tr[@class="ng-scope"]');
    let lastFiveRows = rows.slice(-5).reverse();
  });

  await test.step(`Click "Interview Command Center"`, async () => {
    await page.locator("//H1[contains(text(),\"Interview Command Center\")]").nth(0).click();
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
    await page.waitForTimeout(1000);
  });

  await test.step(`Step 3`, async () => {
    await page.screenshot({ path: 'click_error_debug.png' });
  });

  await test.step(`Verify "Job Posting"`, async () => {
    await expect(page.locator("//H1[contains(normalize-space(),\"Job Posting\")]").nth(0)).toContainText("Job Posting                                                                                                                            ");
  });

  await test.step(`Click "Schedule"`, async () => {
    await page.locator(TAB_SCHEDULE).nth(0).click();
  });

  await test.step(`Click "Schedule Actions"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Schedule Actions\"]").nth(0).click();
  });

  await test.step(`Click "Send Interviewer Links"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send Interviewer Links\"]").nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//li[normalize-space()=\"Command Center\"]").nth(0).click();
  });

  await test.step(`Click "Waiting"`, async () => {
    await page.locator("//a[contains(text(),\"Waiting\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

});
