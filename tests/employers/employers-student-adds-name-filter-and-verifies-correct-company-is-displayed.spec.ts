// TC: TC61343
// Employers - Student adds name filter and verifies correct company is displayed

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_MORE_FILTERS, INPUT_SEARCH_FILTERS, NAV_EMPLOYERS, NAV_HOME } from '@config/selectors';

test("Employers - Student adds name filter and verifies correct company is displayed - TC61343", async ({ page, context }) => {
  let selector = `0`;

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

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "name"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("name");
  });

  await test.step(`Hover "Employer - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer - General\")]").nth(0).hover();
  });

  await test.step(`Click "Name"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Name\"]").nth(0).click();
  });

  await test.step(`Hover "Name"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Name\")][contains(@class,\"selected-filter\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//button[@class=\"selected-filter__clear\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//button[@class=\"selected-filter__remove\"]").nth(0).hover();
  });

  await test.step(`Fill "AIG"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_AN_company__name'][@placeholder='Name']").nth(0).fill("AIG");
  });

  await test.step(`Click "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).click();
  });

  await test.step(`Click "Name AIG (empty)"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Name AIG (empty)\"]").nth(0).click();
  });

  await test.step(`Hover "Results: 1"`, async () => {
    await page.locator("//DIV[contains(text(),\"Results: 1\")]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator("//H1[normalize-space() = \"Employers\"]").nth(0).click();
  });

  await test.step(`Hover "AIG"`, async () => {
    await page.locator("//A[contains(text(),\"AIG\")]").nth(0).hover();
  });

  await test.step(`Click "Name AIG (empty)"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Name AIG (empty)\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@class=\"selected-filter__remove\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Name AIG (empty)\"]";
  });

});
