// TC: TC64833
// 12TE - School Directory - Add and remove from favorites - Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import { USER_ACCOUNT_NAME } from '@config/selectors';

test("12TE - School Directory - Add and remove from favorites - Employer - TC64833", async ({ page, context }) => {
  let selector = `0`;
  let textContent = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "School Directory"`, async () => {
    await page.locator("//A[normalize-space() = \"School Directory\"]").nth(0).click();
  });

  await test.step(`Hover "School Directory"`, async () => {
    await page.locator("//H1[contains(text(),\"School Directory\")]").nth(0).hover();
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Abilene Christian University"`, async () => {
    await page.locator("//A[normalize-space() = \"Abilene Christian University\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "favorite not present";
  });

  await test.step(`Click "Abilene Christian University"`, async () => {
    await page.locator("//A[normalize-space() = \"Abilene Christian University\"]//ancestor::div[contains(@class,\"tt-card\")]//a[@role=\"button\"]").nth(0).click();
  });

  await test.step(`Click "Favorites"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Favorites\"]").nth(0).click();
  });

  await test.step(`Hover "Abilene Christian University"`, async () => {
    await page.locator("//A[normalize-space() = \"Abilene Christian University\"]").nth(0).hover();
  });

  await test.step(`Click "Abilene Christian University"`, async () => {
    await page.locator("//A[normalize-space() = \"Abilene Christian University\"]//ancestor::div[contains(@class,\"tt-card\")]//a[@role=\"button\"]").nth(0).click();
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "You haven't selected any favorites"`, async () => {
    await page.locator("//DIV[contains(text(),\"You haven't selected any favorites\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[normalize-space() = \"Abilene Christian University\"]";
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
  });

  await test.step(`Fill "Law"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Program Type filter options']").nth(0).fill("Law");
  });

  await test.step(`Click "Law"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Law\"]").nth(0).click();
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[@class=\"card-info-primary\"]//i[@class=\"fal fa-diploma\"]//ancestor::span";
  });

  await test.step(`Set value "Law"`, async () => {
    textContent = "Law";
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@title=\"Reset This Filter\"]").nth(0).click();
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "e2e"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='School']").nth(0).fill("e2e");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[@class=\"card-info-primary\"]//a";
  });

  await test.step(`Set value "E2E"`, async () => {
    textContent = "E2E";
  });

  await test.step(`Click "E2E Tests Campuswide"`, async () => {
    await page.locator("//a[contains(text(),\"E2E Tests Campuswide\")]//ancestor::div[contains(@class,\"tt-card\")]//i[contains(@class,\"fa-heart\")]").nth(0).click();
  });

  await test.step(`Click "Favorites"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Favorites\"]").nth(0).click();
  });

  await test.step(`Verify "E2E Tests Campuswide"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"E2E Tests Campuswide\"]").nth(0)).toHaveText("E2E Tests Campuswide ");
  });

  await test.step(`Click "E2E Tests Campuswide"`, async () => {
    await page.locator("//a[contains(text(),\"E2E Tests Campuswide\")]//ancestor::div[contains(@class,\"tt-card\")]//i[contains(@class,\"fa-heart\")]").nth(0).click();
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "You haven't selected any favorites"`, async () => {
    await page.locator("//DIV[contains(text(),\"You haven't selected any favorites\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[normalize-space() = \"E2E Tests Campuswide\"]";
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@title=\"Reset This Filter\"]").nth(0).click();
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Click "Ajman University"`, async () => {
    await page.locator("//A[normalize-space() = \"Ajman University\"]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(6000);
    await page.waitForTimeout(2000);
  });

});
