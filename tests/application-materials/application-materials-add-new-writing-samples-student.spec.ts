// TC: TC60172
// Application Materials - Add new Writing Samples - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  INPUT_DOC_NAME,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
  SPAN_RESUME_FILE_CT,
} from '@config/selectors';

test("Application Materials - Add new Writing Samples - Student - TC60172", async ({ page, context }) => {
  let fileName = `0`;

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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "Writing Samples"`, async () => {
    await page.locator("//H3[contains(text(),\"Writing Samples\")]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator("//H3[contains(text(),\"Writing Samples\")]//following::A[normalize-space() = \"Add New\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Writing Sample"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Writing Sample\")]").nth(0).hover();
  });

  await test.step(`Hover "Writing Sample Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Writing Sample Name *\")]").nth(0).hover();
  });

  await test.step(`Hover "Upload New Writing Sample *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload New Writing Sample *\"]").nth(0).hover();
  });

  await test.step(`Fill "Edgar_Writing Sample"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Edgar_Writing Sample");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator(SPAN_RESUME_FILE_CT).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Edgar_Writing Sample"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Edgar_Writing Sample\")]").nth(0).hover();
  });

  await test.step(`Click "Edgar_Writing Sample"`, async () => {
    await page.locator("//A[contains(text(),\"Edgar_Writing Sample\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "View Writing Sample"`, async () => {
    await page.locator("//A[contains(text(),\"Edgar_Writing Sample\")]//following::A[normalize-space() = \"View Writing Sample\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Writing Sample"`, async () => {
    await page.locator("//A[contains(text(),\"Edgar_Writing Sample\")]//following::A[normalize-space() = \"Edit Writing Sample\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Writing Sample"`, async () => {
    await page.locator("//A[contains(text(),\"Edgar_Writing Sample\")]//following::A[normalize-space() = \"Delete Writing Sample\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Writing Sample"`, async () => {
    await page.locator("//A[contains(text(),\"Edgar_Writing Sample\")]//following::A[normalize-space() = \"Delete Writing Sample\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Delete Writing Sample"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Writing Sample\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this writing sample?\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Writing Sample"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Writing Sample\")]").nth(0).click();
  });

});
