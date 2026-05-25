// TC: TC_A83263
// Site Settings - Custom Branding Lifecycle - Create, Verify as Student, and Remove

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_UPPER,
  BTN_RESET_FILTERS,
  LOGIN_AS_BTN,
  MENU_DELETE,
  MENU_EDIT,
  NAV_HOME,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_SITE_SETTINGS,
  NAV_STUDENTS_ALUMNI,
  RBTN_CANCEL,
  RBTN_OK,
  RBTN_SAVE,
} from '@config/selectors';

test("Site Settings - Custom Branding Lifecycle - Create, Verify as Student, and Remove - TC_A83263", async ({ page, context }) => {
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

  await test.step(`Click "Site Branding"`, async () => {
    await page.locator("//A[normalize-space() = \"Site Branding\"]").nth(0).click();
  });

  await test.step(`Hover "Site Branding"`, async () => {
    await page.locator("//H2[normalize-space() = \"Site Branding\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//H3[normalize-space() = \"Custom Branding\"]";
  });

  await test.step(`Hover "Custom Branding"`, async () => {
    await page.locator("//H3[normalize-space() = \"Custom Branding\"]").nth(0).hover();
  });

  await test.step(`Click "Custom Branding"`, async () => {
    await page.locator("//h3[normalize-space()=\"Custom Branding\"]/following::BUTTON").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(1).click();
  });

  await test.step(`Click "New"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"New\"]").nth(0).click();
  });

  await test.step(`Hover "School Logo"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"School Logo\"]").nth(0).hover();
  });

  await test.step(`Click "School Logo"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"School Logo\"]//ancestor::div[@class=\"form-group\"]//div[@class=\"profile-image-cmp\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set filename "MuukTestImage.png"`, async () => {
    fileName = "MuukTestImage.png";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Site Logo"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Site Logo\"]//ancestor::div[@class=\"form-group\"]//div[@class=\"profile-image-cmp\"]").nth(0).click();
  });

  await test.step(`Hover "Select an Image"`, async () => {
    await page.locator("//H3[normalize-space() = \"Select an Image\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Background Image"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Background Image\"]//ancestor::div[@class=\"form-group\"]//div[@class=\"profile-image-cmp\"]").nth(0).click();
  });

  await test.step(`Set filename "wallpaper.jpeg"`, async () => {
    fileName = "wallpaper.jpeg";
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Custom Branding"`, async () => {
    await page.locator("//H3[normalize-space() = \"Custom Branding\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//H3[normalize-space() = \"Custom Branding\"]/following::dt[contains(normalize-space(),\"Site Logo\")]/following-sibling::dd//img";
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Test"`, async () => {
    await page.locator("//a[contains(text(),\"Test\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//img[@alt=\"E2E Tests Campuswide - Home\"][contains(@src,\"https://ttpfmstrpublicusncqa.blob.core.windows.net/files\")]";
    await page.waitForTimeout(3000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Site Branding"`, async () => {
    await page.locator("//A[normalize-space() = \"Site Branding\"]").nth(0).click();
  });

  await test.step(`Click "Custom Branding"`, async () => {
    await page.locator("//h3[normalize-space()=\"Custom Branding\"]/following::BUTTON").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(1).click();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

});
