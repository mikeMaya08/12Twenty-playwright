// TC: TC58567
// Activity Stream - Add New Campaign - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { MODAL_SUCCESS_PLAIN_CT, NAV_HOME, RBTN_OK_ID_CONTAINS } from '@config/selectors';

test("Activity Stream - Add New Campaign - Admin - TC58567", async ({ page, context }) => {
  let selector = `0`;

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

  await test.step(`Click "Activity Stream"`, async () => {
    await page.locator("//A[normalize-space() = \"Activity Stream\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = " //A[contains(text(),\"MuukTest Campaign\")]";
  });

  await test.step(`Hover "MuukTest Campaign"`, async () => {
    await page.locator("//A[contains(text(),\"MuukTest Campaign\")]").nth(0).hover();
  });

  await test.step(`Click "MuukTest Campaign"`, async () => {
    await page.locator("//A[contains(text(),\"MuukTest Campaign\")]//following::a[@class=\"delete-btn\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[contains(text(),\"Delete\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the campai"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the campai\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_ID_CONTAINS).nth(0).click();
    await page.reload();
  });

  await test.step(`Click "+ Add New"`, async () => {
    await page.locator("//A[contains(text(),\"+ Add New\")]").nth(0).click();
  });

  await test.step(`Hover "Add Campaign"`, async () => {
    await page.locator("//H3[contains(text(),\"Add Campaign\")]").nth(0).hover();
  });

  await test.step(`Fill "MuukTest Campaign"`, async () => {
    await page.locator("//INPUT[@type='text']").nth(3).fill("MuukTest Campaign");
  });

  await test.step(`Select "2"`, async () => {
    await page.locator("//SELECT[@id='VisibilityId'][@name='VisibilityId']").nth(0).selectOption("2");
  });

  await test.step(`Click "Add Campaign"`, async () => {
    await page.locator("//A[contains(text(),\"Add Campaign\")]").nth(0).click();
  });

  await test.step(`Click "MuukTest Campaign"`, async () => {
    await page.locator("//A[contains(text(),\"MuukTest Campaign\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = " //A[contains(text(),\"MuukTest Campaign\")]";
  });

  await test.step(`Click "MuukTest Campaign"`, async () => {
    await page.locator("//A[contains(text(),\"MuukTest Campaign\")]//following::a[@class=\"delete-btn\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[contains(text(),\"Delete\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the campai"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the campai\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_ID_CONTAINS).nth(0).click();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(3000);
  });

});
