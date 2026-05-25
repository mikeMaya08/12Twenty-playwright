// TC: TC58656
// Analytics - Mentorships - Filter by relative Range - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_HOME, NAV_MENTORSHIP, SELECT_DATE } from '@config/selectors';

test("Analytics - Mentorships - Filter by relative Range - Admin - TC58656", async ({ page, context }) => {
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

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator("//a[contains(text(),\"Mentorship\")]//following::A[contains(text(),\"Analytics\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(44).click();
  });

  await test.step(`Select "number:11"`, async () => {
    await page.locator(SELECT_DATE).nth(0).selectOption("number:11");
  });

  await test.step(`Click "Mentorship Analytics"`, async () => {
    await page.locator("//H1[contains(text(),\"Mentorship Analytics\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Mentorship Requests"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorship Requests\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentorship Request Breakdown"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorship Request Breakdown\"]").nth(0).hover();
  });

  await test.step(`Hover "Active Mentorships Breakdown"`, async () => {
    await page.locator("//H3[normalize-space() = \"Active Mentorships Breakdown\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentorship Approval Rate"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorship Approval Rate\"]").nth(0).hover();
  });

});
