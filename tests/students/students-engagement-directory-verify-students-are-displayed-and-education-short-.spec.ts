// TC: TC63483
// Students - Engagement Directory - Verify students are displayed and education short summary is shown

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_RESET_FILTERS,
  BTN_SEARCH,
  INPUT_SEARCH_NAME,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students - Engagement Directory - Verify students are displayed and education short summary is shown - TC63483", async ({ page, context }) => {
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"List view\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(17).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]").nth(0).hover();
  });

  await test.step(`Fill "Brandon Williams"`, async () => {
    await page.reload();
    await page.locator(INPUT_SEARCH_NAME).nth(0).fill("Brandon Williams");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Brandon Williams"`, async () => {
    await page.locator("//A[contains(text(),\"Brandon Williams\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Education"`, async () => {
    await expect(page.locator("//H3[contains(text(),\"Education\")]").nth(0)).toHaveText("Education");
  });

  await test.step(`Hover "Bachelor's PRIMARY"`, async () => {
    await page.locator("//H4[normalize-space() = \"Bachelor's PRIMARY\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(1).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(3).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(4).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"List view\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]").nth(0).hover();
  });

  await test.step(`Fill "Brandon Williams"`, async () => {
    await page.locator(INPUT_SEARCH_NAME).nth(0).fill("Brandon Williams");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Brandon Williams"`, async () => {
    await page.locator("//A[contains(text(),\"Brandon Williams\")]").nth(0).click();
  });

  await test.step(`Verify "Education"`, async () => {
    await expect(page.locator("//H3[contains(text(),\"Education\")]").nth(0)).toHaveText("Education");
  });

  await test.step(`Hover "Bachelor's PRIMARY"`, async () => {
    await page.locator("//H4[normalize-space() = \"Bachelor's PRIMARY\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(1).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(3).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(4).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

});
