// TC: TC58916
// Students & Alumni Directory- Profile - Update and Clear Alternate Email Address - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { H1_E2E_TEST_STUDENT, NAV_PROFILE } from '@config/selectors';

test("Students & Alumni Directory- Profile - Update and Clear Alternate Email Address - Student - TC58916", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-law.qa-12twenty.com', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Recommended Job Listings"`, async () => {
    await page.locator("//H3[contains(text(),\"Recommended Job Listings\")]").nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(H1_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "e2e.student.fullaccess@law.com"`, async () => {
    await page.locator("//SPAN[contains(text(),\"e2e.student.fullaccess@law.com\")]").nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-aw88v9j-undefined'][@name='PreferredEmailAddress'][@placeholder='Non-School Email Address']").nth(0).fill("qatest@test.com");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//button[normalize-space()=\"Save\"]").nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-hqpo7o-undefined'][@name='PreferredEmailAddress'][@placeholder='Non-School Email Address']").nth(0).fill("");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//button[normalize-space()=\"Save\"]").nth(0).click();
  });

  await test.step(`Hover "Alternate/Preferred Email Address"`, async () => {
    await page.locator("//dt[contains(text(),\"Alternate/Preferred Email Address\")]").nth(0).hover();
  });

});
