// TC: TC72642
// MONDAY-Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import { ADMIN_LOG_IN_BTN, NAV_OCI_JOB_LISTINGS, TAB_SCHEDULE } from '@config/selectors';

test("MONDAY-Admin - TC72642", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/dashboard', {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@placeholder='Password'][@name='Password']").nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Admin #"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Admin #\")]").nth(0).hover();
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//li[normalize-space()=\"Command Center\"]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Step 1`, async () => {
    let blockSizeJP = 9;
    let jobPostingNames = [];
  });

  await test.step(`Step 2`, async () => {
    let testStudentNamesSt = [];
  });

  await test.step(`Query elements`, async () => {
    let rows = await page.$$('//tr[@class="ng-scope"]');
    let testContactNames = [];
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
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    await page.reload();
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
    await page.waitForTimeout(5000);
  });

});
