// TC: TC_A83747
// Experiential Learning - Experience Type Picklist Bulk Upload Success

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  BTN_UPLOAD,
  NAV_HOME,
  NAV_PICKLISTS,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_SITE_SETTINGS,
} from '@config/selectors';

test("Experiential Learning - Experience Type Picklist Bulk Upload Success - TC_A83747", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsAdmin(page);
  });



  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]").nth(1).click();
  });

  await test.step(`Click "Picklists"`, async () => {
    await page.locator(NAV_PICKLISTS).nth(0).click();
  });

  await test.step(`Click "Experience Type"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Experience Type\"]").nth(0).click();
  });

  await test.step(`Verify "Experience Type"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Experience Type\"]").nth(0)).toHaveText("Experience Type");
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[@class=\"edit-lookup-option__name ng-scope as-sortable-item-handle\"]/*[@title=\"Bulk Upload Experience Type\"]";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"edit-lookup-option__option ng-scope as-sortable-item\"]/following::span[@title=\"Bulk Upload Experience Type\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//span[@title=\"Bulk Upload Experience Type\"]/following::a[normalize-space()=\"Delete\"]").nth(0).click();
  });

  await test.step(`Verify "Delete?"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Delete?\"]").nth(0)).toHaveText("Delete?");
  });

  await test.step(`Verify "Are you sure you want to delete Bulk Up…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Bulk Upload Experience Type?\"]").nth(1)).toHaveText("Are you sure you want to delete Bulk Upload Experience Type?");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Upload Options"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Bulk Upload Options\"]").nth(0).click();
  });

  await test.step(`Verify "Experience Type Option Upload"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Experience Type Option Upload\"]").nth(0)).toHaveText("Experience Type Option Upload");
  });

  await test.step(`Verify "To upload picklist options, please down…"`, async () => {
    await expect(page.locator("//P[normalize-space() = \"To upload picklist options, please download the picklist template, add your new values, and upload the file below.\"]").nth(0)).toHaveText("To upload picklist options, please download the picklist template, add your new values, and upload the file below.");
  });

  await test.step(`Hover "Download picklist template"`, async () => {
    await page.locator("//A[normalize-space() = \"Download picklist template\"]").nth(0).hover();
  });

  await test.step(`Click "browse"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"browse\"]").nth(0).click();
  });

  await test.step(`Set filename "Experience_Type_template.csv"`, async () => {
    fileName = "Experience_Type_template.csv";
  });

  await test.step(`Click "Upload"`, async () => {
    await page.locator(BTN_UPLOAD).nth(0).click();
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"edit-lookup-option__option ng-scope as-sortable-item\"]/following::span[@title=\"Bulk Upload Experience Type\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await expect(page.locator("//H3[normalize-space() = \"Delete?\"]").nth(0)).toHaveText("Delete?");
  });

  await test.step(`Verify "Are you sure you want to delete Bulk Up…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Bulk Upload Experience Type?\"]").nth(1)).toHaveText("Are you sure you want to delete Bulk Upload Experience Type?");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"edit-lookup-option__option ng-scope as-sortable-item\"]/following::span[@title=\"Bulk Upload Experience Type\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//span[@title=\"Bulk Upload Experience Type\"]/following::a[normalize-space()=\"Delete\"]").nth(0).click();
  });

  await test.step(`Verify "Delete?"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Delete?\"]").nth(0)).toHaveText("Delete?");
  });

  await test.step(`Verify "Are you sure you want to delete Bulk Up…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Bulk Upload Experience Type?\"]").nth(1)).toHaveText("Are you sure you want to delete Bulk Upload Experience Type?");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

});
