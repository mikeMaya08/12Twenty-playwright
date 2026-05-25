// TC: TC58570
// Contacts - Find an Approved Contact by Name - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, NAV_HOME } from '@config/selectors';

test("Contacts - Find an Approved Contact by Name - Admin - TC58570", async ({ page, context }) => {
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
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//H1[contains(text(),\"Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Approved"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Approved\")]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Contact Name or Email Address']").nth(0).fill("Gianna Allen");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Gianna Allen"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Gianna Allen\")]").nth(0).hover();
  });

  await test.step(`Click "Gianna Allen"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Gianna Allen\")]").nth(0).click();
  });

});
