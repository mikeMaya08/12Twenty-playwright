// TC: TC63506
// 12TE - Job Posting Analytics - Verify page loads and data is displayed

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import { USER_ACCOUNT_NAME } from '@config/selectors';

test("12TE - Job Posting Analytics - Verify page loads and data is displayed - TC63506", async ({ page, context }) => {
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

  await test.step(`Click "Job Postings"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Postings\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Analytics"`, async () => {
    await page.locator("//A[contains(text(),\"Analytics\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Postings"`, async () => {
    await page.locator("//A[contains(text(),\"Job Postings\")]").nth(0).hover();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[contains(text(),\"Analytics\")]").nth(0).click();
  });

  await test.step(`Hover "Job Posting Analytics"`, async () => {
    await page.locator("//H1[contains(text(),\"Job Posting Analytics\")]").nth(0).hover();
  });

  await test.step(`Hover "Date Range Last 90 days (empty)"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Date Range Last 90 days (empty)\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Postings Created By User"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Postings Created By User\"]").nth(0).hover();
  });

  await test.step(`Verify visible "Impressions"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Impressions\"]").nth(0)).toBeVisible();
  });

  await test.step(`Hover "Impressions by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Impressions by School\"]").nth(0).hover();
  });

  await test.step(`Hover "Impressions (Promoted)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Impressions (Promoted)\"]").nth(0).hover();
  });

  await test.step(`Hover "Impressions (Promoted) by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Impressions (Promoted) by School\"]").nth(0).hover();
  });

  await test.step(`Hover "Impressions (Recommended)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Impressions (Recommended)\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting Views"`, async () => {
    await page.locator("//H2[normalize-space() = \"Job Posting Views\"]").nth(0).hover();
  });

  await test.step(`Hover "Views by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Views by School\"]").nth(0).hover();
  });

  await test.step(`Hover "Views (Promoted)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Views (Promoted)\"]").nth(0).hover();
  });

  await test.step(`Hover "Views (Recommended)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Views (Recommended)\"]").nth(0).hover();
  });

  await test.step(`Hover "Applied"`, async () => {
    await page.locator("//H3[normalize-space() = \"Applied\"]").nth(0).hover();
  });

  await test.step(`Hover "Applied by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Applied by School\"]").nth(0).hover();
  });

  await test.step(`Hover "Applied (Promoted)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Applied (Promoted)\"]").nth(0).hover();
  });

  await test.step(`Hover "Applied (Recommended)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Applied (Recommended)\"]").nth(0).hover();
    await page.reload();
  });

});
