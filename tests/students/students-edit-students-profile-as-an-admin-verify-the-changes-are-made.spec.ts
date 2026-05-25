// TC: TC62630
// Students - Edit students profile as an Admin, verify the changes are made

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_MORE_FILTERS, NAV_HOME, NAV_STUDENTS_ALUMNI } from '@config/selectors';

test("Students - Edit students profile as an Admin, verify the changes are made - TC62630", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "signed up"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("signed up");
  });

  await test.step(`Click "Signed Up"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Signed Up\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Yes\")]").nth(0).click();
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press('Escape');
  });

  await test.step(`Click "Test Student"`, async () => {
    await page.locator("//A[contains(text(),\"Test Student\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify visible "General"`, async () => {
    await expect(page.locator("//H3[contains(text(),\"General\")]").nth(0)).toBeVisible();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit General"`, async () => {
    await page.locator("//h3[contains(text(),\"Edit General\")]").nth(0).hover();
  });

  await test.step(`Hover "First (Preferred) Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"First (Preferred) Name\"]").nth(0).hover();
  });

  await test.step(`Fill "Test Student Edited"`, async () => {
    await page.locator("INPUT[type='text'][name='FirstName'][placeholder='First (Preferred) Name']").nth(0).fill("Test Student Edited");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//button[normalize-space()=\"Save\"]").nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Hover "Test Student Edited"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Student Edited\")]").nth(0).hover();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Fill "Test Student"`, async () => {
    await page.locator("INPUT[type='text'][name='FirstName'][placeholder='First (Preferred) Name']").nth(0).fill("Test Student");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//button[normalize-space()=\"Save\"]").nth(0).click();
    await page.waitForTimeout(4000);
  });

});
