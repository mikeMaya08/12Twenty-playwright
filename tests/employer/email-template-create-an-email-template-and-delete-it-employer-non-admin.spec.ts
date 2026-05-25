// TC: TC65367
// Email Template-Create an email template and delete it-Employer(non admin)

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  INPUT_EMAIL_LOGIN,
  INPUT_PASSWORD_LOGIN,
  NAV_EMAIL_ACTIVITY,
  NAV_HOME,
  SPAN_WALMART_CT,
} from '@config/selectors';

test("Email Template-Create an email template and delete it-Employer(non admin) - TC65367", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(2000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.employeruser.subscription.nonadmin@walmart.com");
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Employer Log In"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer Log In\")]").nth(0).click();
  });

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).hover();
  });

  await test.step(`Verify "Walmart"`, async () => {
    await expect(page.locator(SPAN_WALMART_CT).nth(0)).toHaveText("Walmart");
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator(NAV_EMAIL_ACTIVITY).nth(0).click();
  });

  await test.step(`Click "Email Templates"`, async () => {
    await page.locator("//A[normalize-space() = \"Email Templates\"]").nth(0).click();
  });

  await test.step(`Hover "Email Templates"`, async () => {
    await page.locator("//H1[contains(text(),\"Email Templates\")]").nth(0).hover();
  });

  await test.step(`Click "Reset"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Reset\"]").nth(0).click();
  });

});
