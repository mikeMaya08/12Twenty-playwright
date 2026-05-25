// TC: TC60317
// Application Materials - Add new Others - Student

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

test("Application Materials - Add new Others - Student - TC60317", async ({ page, context }) => {
  let fileName = `0`;
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

  await test.step(`Hover "Others"`, async () => {
    await page.locator("//H3[contains(text(),\"Others\")]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator("//H3[contains(text(),\"Others\")]//following::A[normalize-space() = \"Add New\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Other"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Other\")]").nth(0).hover();
  });

  await test.step(`Hover "Other Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Other Name *\")]").nth(0).hover();
  });

  await test.step(`Hover "Upload New Other *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload New Other *\"]").nth(0).hover();
  });

  await test.step(`Fill "Laura_Malik_Other document"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Laura_Malik_Other document");
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
  });

  await test.step(`Hover "Laura_Malik_Other document"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Laura_Malik_Other document\")]").nth(0).hover();
  });

  await test.step(`Click "Laura_Malik_Other document"`, async () => {
    await page.locator("//A[contains(text(),\"Laura_Malik_Other document\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "View Other"`, async () => {
    await page.locator("//A[contains(text(),\"Laura_Malik_Other document\")]//following::A[normalize-space() = \"View Other\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Other"`, async () => {
    await page.locator("//A[contains(text(),\"Laura_Malik_Other document\")]//following::A[normalize-space() = \"Edit Other\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Other"`, async () => {
    await page.locator("//A[contains(text(),\"Laura_Malik_Other document\")]//following::A[normalize-space() = \"Delete Other\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Other"`, async () => {
    await page.locator("//A[contains(text(),\"Laura_Malik_Other document\")]//following::A[normalize-space() = \"Delete Other\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Other"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Other\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Other"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Other\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Laura_Malik_Other document\")]";
  });

});
