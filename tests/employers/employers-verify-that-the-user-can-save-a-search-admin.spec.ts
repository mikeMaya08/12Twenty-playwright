// TC: TC58293
// Employers - Verify that the user can save a search - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_RESET_FILTERS,
  BTN_SEARCH,
  CONFIRM_PERM_DELETE,
  INPUT_EMPLOYER_NAME,
  NAV_EMPLOYERS,
  NAV_HOME,
} from '@config/selectors';

test("Employers - Verify that the user can save a search - Admin - TC58293", async ({ page, context }) => {
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

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Hover "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).hover();
  });

  await test.step(`Fill "3M"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("3M");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "3M"`, async () => {
    await page.locator("//A[contains(text(),\"3M\")]").nth(0).hover();
  });

  await test.step(`Click "Save this search"`, async () => {
    await page.locator("//BUTTON[@role='menuitem'][normalize-space() = \"Save this search\"]").nth(0).click();
  });

  await test.step(`Hover "Save Search"`, async () => {
    await page.locator("//H3[contains(text(),\"Save Search\")]").nth(0).hover();
  });

  await test.step(`Hover "Saved Search Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Saved Search Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "3M Search"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-lxcqlc-text'][@name='name'][@placeholder='Saved Search Name']").nth(0).fill("3M Search");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Your search has been saved."`, async () => {
    await page.locator("//SPAN[contains(text(),\"Your search has been saved.\")]").nth(0).hover();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "My Saved Searches"`, async () => {
    await page.locator("//SPAN[contains(text(),\"My Saved Searches\")]").nth(0).click();
  });

  await test.step(`Hover "3M Search"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"3M Search\"]").nth(0).hover();
  });

  await test.step(`Click "3M Search"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"3M Search\"]").nth(0).click();
  });

  await test.step(`Click "3M Search"`, async () => {
    await page.locator("//SPAN[contains(text(),\"3M Search\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@aria-label=\"Delete 3M Search\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Saved Search"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Saved Search\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Saved Search"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Saved Search\")]").nth(0).click();
  });

  await test.step(`Hover "The search has been deleted."`, async () => {
    await page.locator("//SPAN[contains(text(),\"The search has been deleted.\")]").nth(0).hover();
  });

  await test.step(`Click "My Saved Searches"`, async () => {
    await page.locator("//SPAN[contains(text(),\"My Saved Searches\")]").nth(0).click();
  });

});
