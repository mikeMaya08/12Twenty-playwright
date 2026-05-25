// TC: TC69198
// Analytics - Recruiting Intelligence - Verify Population Analysis Report is Loaded -  Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import { SPAN_WALMART_CT, USER_ACCOUNT_NAME } from '@config/selectors';

test("Analytics - Recruiting Intelligence - Verify Population Analysis Report is Loaded -  Employer - TC69198", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator(SPAN_WALMART_CT).nth(0).hover();
  });

  await test.step(`Click "Recruiting Intelligence"`, async () => {
    await page.locator("//A[normalize-space() = \"Recruiting Intelligence\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//IMG[@alt=\"Sign in to 12twenty Analytics\"]").nth(0).hover();
  });

  await test.step(`Hover "Email*"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Email*\"]").nth(1).hover();
  });

  await test.step(`Hover "Password*"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Password*\"]").nth(1).hover();
  });

  await test.step(`Hover "Sign In"`, async () => {
    await page.locator("//BUTTON[@type='submit'][@title='Sign In'][normalize-space() = \"Sign In\"]").nth(0).hover();
  });

  await test.step(`Hover "Forgot Password?"`, async () => {
    await page.locator("//A[normalize-space() = \"Forgot Password?\"]").nth(0).hover();
  });

});
