// TC: TC61347
// Contacts - Students can search for a contact and open profile

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SEARCH, NAV_HOME } from '@config/selectors';

test("Contacts - Students can search for a contact and open profile - TC61347", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
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

  await test.step(`Fill email`, async () => {
    await page.reload();
    await page.locator("//INPUT[@type='text'][@placeholder='Contact Name or Email Address']").nth(0).fill("Test Contact 01-002");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover "Test Contact 01-002"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Contact 01-002\")]").nth(0).hover();
  });

  await test.step(`Hover "vm-test-company-1"`, async () => {
    await page.locator("//SPAN[contains(text(),\"vm-test-company-1\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(2).hover();
  });

  await test.step(`Click "Test Contact 01-002"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Contact 01-002\")]").nth(0).click();
  });

  await test.step(`Hover "Test Contact 01-002"`, async () => {
    await page.locator("//H1[contains(text(),\"Test Contact 01-002\")]").nth(0).hover();
  });

  await test.step(`Hover "Profile"`, async () => {
    await page.locator("//A[contains(text(),\"Profile\")]").nth(0).hover();
  });

  await test.step(`Hover "contact-2@vm-test-company-1.com"`, async () => {
    await page.locator("//a[contains(text(),\"contact-2@vm-test-company-1.com\")]").nth(0).hover();
  });

});
