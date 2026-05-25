// TC: TC58479
// Employers - Delete a contact from an employer - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  INPUT_EMPLOYER_NAME,
  MODAL_SUCCESS_CT,
  NAV_DELETE,
  NAV_EMPLOYERS,
  NAV_HOME,
} from '@config/selectors';

test("Employers - Delete a contact from an employer - Admin - TC58479", async ({ page, context }) => {
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

  await test.step(`Fill "3M"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("3M");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "3M"`, async () => {
    await page.locator("//A[contains(text(),\"3M\")]").nth(0).click();
  });

  await test.step(`Hover "3M"`, async () => {
    await page.locator("//H1[normalize-space() = \"3M\"]").nth(0).hover();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Contacts\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Miss. Nishita Sunkara"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Miss. Nishita Sunkara\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Nishita Sunkara"`, async () => {
    await page.locator("//H1[contains(text(),\"Nishita Sunkara\")]").nth(0).hover();
  });

  await test.step(`Hover "3M"`, async () => {
    await page.locator("//A[contains(text(),\"3M\")]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Manager\"]").nth(0).hover();
  });

  await test.step(`Hover "nishi@muukteam.testinator.com"`, async () => {
    await page.locator("//A[contains(text(),\"nishi@muukteam.testinator.com\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Contact"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this contact? Please note that all meetings, notes, and tasks associated with this contact will be deleted also.\"]").nth(1).hover();
  });

  await test.step(`Click "Delete Contact"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Contact\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the contac"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the contac\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

});
