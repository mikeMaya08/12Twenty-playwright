// TC: TC64776
// OCI - Export Applicant Summary - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { H1_JOB_LISTINGS, NAV_HOME, NAV_JOB_LISTINGS } from '@config/selectors';

test("OCI - Export Applicant Summary - Admin - TC64776", async ({ page, context }) => {
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

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Job Listings & Interviews"`, async () => {
    await expect(page.locator(H1_JOB_LISTINGS).nth(0)).toHaveText("                    Job Listings & Interviews                                        ");
  });

  await test.step(`Click "OCI Management"`, async () => {
    await page.locator("//a[normalize-space()=\"OCI Management\"]").nth(0).click();
  });

  await test.step(`Hover "OCI Management"`, async () => {
    await page.locator("//H2[contains(text(),\"OCI Management\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover "Schedules Summary"`, async () => {
    await page.locator("//A[contains(text(),\"Schedules Summary\")]").nth(0).hover();
  });

  await test.step(`Click "Applicants Summary"`, async () => {
    await page.locator("//A[contains(text(),\"Applicants Summary\")]").nth(0).click();
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "OCI Round:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"OCI Round:\")]").nth(0).hover();
  });

  await test.step(`Hover "OCI Round:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"OCI Round:\")]").nth(0).hover();
  });

  await test.step(`Hover "Over-Cap/Conflicted:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Over-Cap/Conflicted:\")]").nth(0).hover();
  });

  await test.step(`Hover "Export Detailed Applicant Summary to CSV"`, async () => {
    await page.locator("//A[normalize-space() = \"Export Detailed Applicant Summary to CSV\"]").nth(0).hover();
  });

});
