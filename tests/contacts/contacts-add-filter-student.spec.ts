// TC: TC63793
// Contacts - Add Filter - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_MORE_FILTERS,
  BTN_RESET_FILTERS,
  INPUT_SEARCH_FILTERS,
  NAV_HOME,
} from '@config/selectors';

test("Contacts - Add Filter - Student - TC63793", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Contact - Contact Info"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Contact - Contact Info\")]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Email Address");
  });

  await test.step(`Click "Email Address"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Email Address\"]").nth(0).click();
  });

  await test.step(`Hover "Email Address"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Email Address\")][contains(@class,\"selected-filter\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SELECT").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_AN_contact__email_address'][@placeholder='Email Address']").nth(0).fill("contact-2@vm-test-company-1.com");
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//H1[contains(text(),\"Contacts\")]").nth(0).click();
  });

  await test.step(`Verify "Test Contact 01-002"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Test Contact 01-002\")]").nth(0)).toHaveText("Test Contact 01-002");
  });

  await test.step(`Hover "vm-test-company-1"`, async () => {
    await page.locator("//SPAN[contains(text(),\"vm-test-company-1\")]").nth(0).hover();
  });

  await test.step(`Hover "Results: 1"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Results: 1\"]").nth(2).hover();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

});
