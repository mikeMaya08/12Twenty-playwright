// TC: TC58964
// Employers - Directory Page UI elements are visible - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, INPUT_EMPLOYER_NAME, NAV_EMPLOYERS, NAV_HOME } from '@config/selectors';

test("Employers - Directory Page UI elements are visible - Admin - TC58964", async ({ page, context }) => {
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

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Fill "Apple"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("Apple");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Apple"`, async () => {
    await page.locator("//A[contains(text(),\"Apple\")]").nth(0).click();
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator("//A[contains(text(),\"Home\")]").nth(0).hover();
  });

  await test.step(`Hover "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).hover();
  });

  await test.step(`Hover "Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Contacts\")]").nth(0).hover();
  });

  await test.step(`Hover "Hires"`, async () => {
    await page.locator("//A[contains(text(),\"Hires\")]").nth(0).hover();
  });

  await test.step(`Hover "Locations"`, async () => {
    await page.locator("//A[contains(text(),\"Locations\")]").nth(0).hover();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//A[contains(text(),\"Events\")]").nth(1).hover();
  });

  await test.step(`Hover "OCI and Job Listings"`, async () => {
    await page.locator("//A[contains(text(),\"OCI and Job Listings\")]").nth(0).hover();
  });

  await test.step(`Hover "Experiences"`, async () => {
    await page.locator("//A[contains(text(),\"Experiences\")]").nth(0).hover();
  });

  await test.step(`Hover "Job IQ"`, async () => {
    await page.locator("//UIB-TAB-HEADING[normalize-space()=\"Job IQ\"]").nth(0).hover();
  });

  await test.step(`Hover "Overview"`, async () => {
    await page.locator("//H3[contains(text(),\"Overview\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Postings"`, async () => {
    await page.locator("//H3[contains(text(),\"Job Postings\")]").nth(0).hover();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H3[contains(text(),\"Events\")]").nth(0).hover();
  });

  await test.step(`Hover "Information"`, async () => {
    await page.locator("//H3[contains(text(),\"Information\")]").nth(0).hover();
  });

});
