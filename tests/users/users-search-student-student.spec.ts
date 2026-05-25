// TC: TC59052
// Users - Search Student - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, INPUT_SEARCH_NAME, NAV_HOME, NAV_STUDENTS_ALUMNI } from '@config/selectors';

test("Users - Search Student - Student - TC59052", async ({ page, context }) => {
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "Test Student"`, async () => {
    await page.reload();
    await page.locator(INPUT_SEARCH_NAME).nth(0).fill("Test Student ");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"Test Student\")]").nth(0).hover();
  });

  await test.step(`Click "Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"Test Student\")]").nth(0).click();
  });

  await test.step(`Verify "Test Student"`, async () => {
    await expect(page.locator("//H1[contains(text(),\"Test Student\")]").nth(0)).toContainText("Test Student ");
  });

});
