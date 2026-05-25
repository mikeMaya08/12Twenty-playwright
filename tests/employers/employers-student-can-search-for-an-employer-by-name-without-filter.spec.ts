// TC: TC61345
// Employers - Student can search for an employer by name without filter

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, INPUT_EMPLOYER_NAME, NAV_EMPLOYERS, NAV_HOME } from '@config/selectors';

test("Employers - Student can search for an employer by name without filter - TC61345", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "A&E Networks"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("A&E Networks");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "A&E Networks"`, async () => {
    await page.locator("//A[normalize-space() = \"A&E Networks\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Information"`, async () => {
    await page.locator("//H3[contains(text(),\"Information\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Postings"`, async () => {
    await page.locator("//H3[contains(text(),\"Job Postings\")]").nth(0).hover();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H3[contains(text(),\"Events\")]").nth(0).hover();
  });

});
