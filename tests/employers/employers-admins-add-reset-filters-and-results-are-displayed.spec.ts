// TC: TC63116
// Employers - Admins add/reset filters and results are displayed

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_12TWENTY_ID,
  BTN_MORE_FILTERS,
  BTN_RESET_FILTERS,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH_FILTERS,
  LABEL_SELECT_ALL,
  NAV_EMPLOYERS,
  NAV_HOME,
} from '@config/selectors';

test("Employers - Admins add/reset filters and results are displayed - TC63116", async ({ page, context }) => {
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
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(1).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(3).hover();
  });

  await test.step(`Hover "Approval Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Approval Status\"]").nth(0).hover();
  });

  await test.step(`Hover "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).hover();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Employer - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer - General\")]").nth(0).hover();
  });

  await test.step(`Fill "12"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("12");
  });

  await test.step(`Hover "12twenty ID"`, async () => {
    await page.locator(BTN_12TWENTY_ID).nth(0).hover();
  });

  await test.step(`Hover "Linked To 12Twenty Network Employer"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Linked To 12Twenty Network Employer\"]").nth(0).hover();
  });

  await test.step(`Click "12twenty ID"`, async () => {
    await page.locator(BTN_12TWENTY_ID).nth(0).click();
  });

  await test.step(`Hover "12twenty ID"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"12twenty ID\")][contains(@class,\"selected-filter\")]").nth(0).hover();
  });

  await test.step(`Fill "12"`, async () => {
    await page.locator("//INPUT[@type='number'][@name='numericId_AN_company__id'][@placeholder='12twenty ID']").nth(0).fill("12");
  });

  await test.step(`Click "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).click();
  });

  await test.step(`Hover "No results were found."`, async () => {
    await page.locator("//DIV[contains(text(),\"No results were found.\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(51).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Employer - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer - General\")]").nth(0).hover();
  });

  await test.step(`Fill "# of Employees"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("# of Employees");
  });

  await test.step(`Click "# of Employees"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"# of Employees\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(9).click();
  });

  await test.step(`Click "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).click();
  });

  await test.step(`Hover ">10000"`, async () => {
    await page.locator("//SPAN[normalize-space() = \">10000\"]").nth(1).hover();
  });

  await test.step(`Set allMatch`, async () => {
    let allMatch = true;
    allMatch = false;
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForLoadState('load');
  });

});
