// TC: TC63487
// Research Tools - Add Filters - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH_FILTERS,
  LABEL_SELECT_ALL,
  NAV_HOME,
} from '@config/selectors';

test("Research Tools - Add Filters - Student - TC63487", async ({ page, context }) => {
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

  await test.step(`Hover "Interview Questions"`, async () => {
    await page.locator("//A[normalize-space() = \"Interview Questions\"]").nth(0).hover();
  });

  await test.step(`Click "Research Tools"`, async () => {
    await page.locator("//A[normalize-space() = \"Research Tools\"]").nth(0).click();
  });

  await test.step(`Hover "Offer Trends"`, async () => {
    await page.locator("//A[contains(text(),\"Offer Trends\")]").nth(0).hover();
  });

  await test.step(`Click "Career Trends"`, async () => {
    await page.locator("//a[normalize-space()=\"Career Trends\"]").nth(0).click();
  });

  await test.step(`Hover "Career Trends"`, async () => {
    await page.locator("//H1[contains(text(),\"Career Trends\")]").nth(0).hover();
  });

  await test.step(`Click "Reset"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Reset\"]").nth(0).click();
  });

  await test.step(`Click "Add Filter"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add Filter\"]").nth(0).click();
  });

  await test.step(`Hover "Military Service"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Military Service\"]").nth(0).hover();
  });

  await test.step(`Fill "Detailed Industry"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Detailed Industry");
  });

  await test.step(`Click "Detailed Industry"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Detailed Industry\"]").nth(0).click();
  });

  await test.step(`Hover "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).hover();
  });

  await test.step(`Fill "Engineering"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Detailed Industry filter options']").nth(0).fill("Engineering");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click "Career Trends"`, async () => {
    await page.locator("//H1[contains(text(),\"Career Trends\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(40).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(40).click();
  });

  await test.step(`Click "Reset"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Reset\"]").nth(0).click();
  });

  await test.step(`Click "Add Filter"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add Filter\"]").nth(0).click();
  });

  await test.step(`Fill "Industr"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Industr");
  });

  await test.step(`Click "Detailed Industry"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Detailed Industry\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Career Trends"`, async () => {
    await page.locator("//H1[contains(text(),\"Career Trends\")]").nth(0).click();
  });

  await test.step(`Hover "Accounting - Accounting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Accounting - Accounting\")]").nth(0).hover();
  });

  await test.step(`Hover "Detailed Industry Accounting - Accounti…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Detailed Industry Accounting - Accounting (empty)\"]").nth(1).hover();
  });

  await test.step(`Click "Reset"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Reset\"]").nth(0).click();
  });

  await test.step(`Click "Add Filter"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Add Filter\"]").nth(0).click();
  });

  await test.step(`Fill "Industry"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Industry");
  });

  await test.step(`Click "Detailed Industry"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Detailed Industry\"]").nth(0).click();
  });

  await test.step(`Fill "Consulting"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Detailed Industry filter options']").nth(0).fill("Consulting");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click "Career Trends"`, async () => {
    await page.locator("//H1[contains(text(),\"Career Trends\")]").nth(0).click();
  });

  await test.step(`Hover "Consulting - General, Consulti... ("`, async () => {
    await page.locator("//SPAN[contains(text(),\"Consulting - General, Consulti... (\")]").nth(0).hover();
  });

});
