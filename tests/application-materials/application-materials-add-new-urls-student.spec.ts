// TC: TC60476
// Application Materials - Add new URLs - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  INPUT_DOC_NAME,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
} from '@config/selectors';

test("Application Materials - Add new URLs - Student - TC60476", async ({ page, context }) => {
  let selector = `0`;

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

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "Application Materials"`, async () => {
    await page.locator("//H1[contains(text(),\"Application Materials\")]").nth(0).hover();
  });

  await test.step(`Hover "Urls"`, async () => {
    await page.locator("//H3[contains(text(),\"Urls\")]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator("//H3[contains(text(),\"Urls\")]//following::A[normalize-space() = \"Add New\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Url"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Url\")]").nth(0).hover();
  });

  await test.step(`Hover "Url Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Url Name *\")]").nth(0).hover();
  });

  await test.step(`Fill "Emmanuel-LinkedinProfile"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Emmanuel-LinkedinProfile");
  });

  await test.step(`Hover "Url *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Url *\")]").nth(0).hover();
  });

  await test.step(`Fill "https://www.linkedin.com/in/username"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='url']").nth(0).fill("https://www.linkedin.com/in/username");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Hover "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "Emmanuel-LinkedinProfile"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Emmanuel-LinkedinProfile\")]").nth(0).hover();
  });

  await test.step(`Click "Emmanuel-LinkedinProfile"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Emmanuel-LinkedinProfile\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.reload();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Emmanuel-LinkedinProfile"`, async () => {
    await page.locator("//A[contains(text(),\"Emmanuel-LinkedinProfile\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "View Url"`, async () => {
    await page.locator("//A[contains(text(),\"Emmanuel-LinkedinProfile\")]//following::A[normalize-space() = \"View Url\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Url"`, async () => {
    await page.locator("//A[contains(text(),\"Emmanuel-LinkedinProfile\")]//following::A[normalize-space() = \"Edit Url\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Url"`, async () => {
    await page.locator("//A[contains(text(),\"Emmanuel-LinkedinProfile\")]//following::A[normalize-space() = \"Delete Url\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Url"`, async () => {
    await page.locator("//A[contains(text(),\"Emmanuel-LinkedinProfile\")]//following::A[normalize-space() = \"Delete Url\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Url"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Url\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Url"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Url\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Emmanuel-LinkedinProfile\")]";
  });

});
