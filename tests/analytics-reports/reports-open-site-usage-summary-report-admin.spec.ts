// TC: TC58658
// Reports - Open Site Usage Summary Report - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { LABEL_DEGREE_LEVEL_PLAIN, LABEL_WORK_AUTH, NAV_HOME } from '@config/selectors';

test("Reports - Open Site Usage Summary Report - Admin - TC58658", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Reports"`, async () => {
    await page.locator("//A[normalize-space() = \"Reports\"]").nth(0).click();
  });

  await test.step(`Click "12twenty Reports"`, async () => {
    await page.locator("//A[contains(text(),\"12twenty Reports\")]").nth(0).click();
  });

  await test.step(`Hover "12twenty Reports"`, async () => {
    await page.locator("//H1[contains(text(),\"12twenty Reports\")]").nth(0).hover();
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Usage Summary"`, async () => {
    await page.locator("//A[contains(text(),\"Site Usage Summary\")]").nth(0).click();
  });

  await test.step(`Hover "Graduation Class"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Class\"]").nth(0).hover();
  });

  await test.step(`Hover "Graduation Term"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Term\"]").nth(0).hover();
  });

  await test.step(`Hover "Assigned Adviser"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Assigned Adviser\"]").nth(0).hover();
  });

  await test.step(`Hover "Degree Level"`, async () => {
    await page.locator(LABEL_DEGREE_LEVEL_PLAIN).nth(0).hover();
  });

  await test.step(`Hover "Job Phase"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Phase\"]").nth(0).hover();
  });

  await test.step(`Hover "Work Authorization"`, async () => {
    await page.locator(LABEL_WORK_AUTH).nth(0).hover();
  });

  await test.step(`Hover "Desired Industry"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Desired Industry\"]").nth(0).hover();
  });

  await test.step(`Hover "Include Rumor Jobs"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Include Rumor Jobs\"]").nth(0).hover();
  });

  await test.step(`Hover "Included in Reporting"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Included in Reporting\"]").nth(0).hover();
  });

  await test.step(`Hover "Offer Timing"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Offer Timing\"]").nth(0).hover();
  });

  await test.step(`Hover "Degree"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree\")]").nth(1).hover();
  });

  await test.step(`Hover "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]").nth(0).hover();
  });

  await test.step(`Hover "Undergrad Major"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Undergrad Major\")]").nth(0).hover();
  });

  await test.step(`Hover "Site Usage Summary"`, async () => {
    await page.locator("//H3[@id='report-header'][contains(text(),\"Site Usage Summary\")]").nth(0).hover();
  });

  await test.step(`Hover "Total Students"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Total Students\")]").nth(0).hover();
  });

  await test.step(`Hover "Total Students Signed Up"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Total Students Signed Up\")]").nth(0).hover();
  });

  await test.step(`Hover "Total Students Not Signed Up"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Total Students Not Signed Up\")]").nth(0).hover();
  });

});
