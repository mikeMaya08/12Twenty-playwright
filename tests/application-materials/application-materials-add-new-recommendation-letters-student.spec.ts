// TC: TC60171
// Application Materials - Add new Recommendation Letters - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  INPUT_DOC_NAME,
  NAV_HOME,
  RBTN_ADD_NEW,
  RBTN_CANCEL_CONTAINS,
  SPAN_RESUME_FILE_CT,
} from '@config/selectors';

test("Application Materials - Add new Recommendation Letters - Student - TC60171", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "Recommendation Letters"`, async () => {
    await page.locator("//H3[contains(text(),\"Recommendation Letters\")]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(3).click();
  });

  await test.step(`Hover "Add New Recommendation Letter"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Recommendation Letter\")]").nth(0).hover();
  });

  await test.step(`Hover "Recommendation Letter Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Recommendation Letter Name *\")]").nth(0).hover();
  });

  await test.step(`Fill "Chris_Arrieta_Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Chris_Arrieta_Resume");
  });

  await test.step(`Hover "Upload New Recommendation Letter *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload New Recommendation Letter *\"]").nth(0).hover();
  });

  await test.step(`Fill "Ava_Jones_Recommendation Letter"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Ava_Jones_Recommendation Letter");
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

  await test.step(`Hover "Ava_Jones_Recommendation Letter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Ava_Jones_Recommendation Letter\")]").nth(0).hover();
  });

  await test.step(`Click "Ava_Jones_Recommendation Letter"`, async () => {
    await page.locator("//A[contains(text(),\"Ava_Jones_Recommendation Letter\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "View Recommendation Letter"`, async () => {
    await page.locator("//A[contains(text(),\"Ava_Jones_Recommendation Letter\")]//following::A[normalize-space() = \"View Recommendation Letter\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Recommendation Letter"`, async () => {
    await page.locator("//A[contains(text(),\"Ava_Jones_Recommendation Letter\")]//following::A[normalize-space() = \"Edit Recommendation Letter\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Recommendation Letter"`, async () => {
    await page.locator("//A[contains(text(),\"Ava_Jones_Recommendation Letter\")]//following::A[normalize-space() = \"Delete Recommendation Letter\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Recommendation Letter"`, async () => {
    await page.locator("//A[contains(text(),\"Ava_Jones_Recommendation Letter\")]//following::A[normalize-space() = \"Delete Recommendation Letter\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Recommendation Letter"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Recommendation Letter\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Recommendation Letter"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Recommendation Letter\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Ava_Jones_Recommendation Letter\")]";
  });

});
