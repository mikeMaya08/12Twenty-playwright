// TC: TC58987
// Contacts - List page is displayed, search for contact and open profile

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, NAV_HOME } from '@config/selectors';

test("Contacts - List page is displayed, search for contact and open profile - TC58987", async ({ page, context }) => {
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

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//th[contains(text(),\"Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Most Recent Activity"`, async () => {
    await page.reload();
    await page.locator("//th[contains(text(),\"Most Recent Activity\")]").nth(0).hover();
  });

  await test.step(`Hover "Approval Status (Contact)"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Approval Status (Contact)\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Contact"`, async () => {
    await page.locator("//A[@id='addContact'][normalize-space() = \"Add Contact\"]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Contact Name or Email Address']").nth(0).fill("Fiona Alexander");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Fiona Alexander"`, async () => {
    await page.locator("//a[normalize-space()=\"Fiona Alexander\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Profile"`, async () => {
    await page.locator("//A[contains(text(),\"Profile\")]").nth(0).hover();
  });

  await test.step(`Hover "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).hover();
  });

  await test.step(`Hover "Notes"`, async () => {
    await page.locator("//A[contains(text(),\"Notes\")]").nth(0).hover();
  });

  await test.step(`Hover "Emails"`, async () => {
    await page.locator("//A[contains(text(),\"Emails\")]").nth(0).hover();
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

});
