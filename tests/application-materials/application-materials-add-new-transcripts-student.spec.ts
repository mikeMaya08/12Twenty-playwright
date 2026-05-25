// TC: TC59061
// Application Materials - Add new Transcripts - Student

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

test("Application Materials - Add new Transcripts - Student - TC59061", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

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

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[normalize-space() = \"Application Materials\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Transcripts"`, async () => {
    await page.locator("//H3[contains(text(),\"Transcripts\")]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator("//H3[contains(text(),\"Transcripts\")]//following::A[@role='button'][normalize-space() = \"Add New\"]").nth(0).click();
  });

  await test.step(`Hover "Upload New Transcript *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload New Transcript *\"]").nth(0).hover();
  });

  await test.step(`Fill "Joe_Jonas_Transcript"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Joe_Jonas_Transcript");
  });

  await test.step(`Hover "Add New Transcript"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Transcript\")]").nth(0).hover();
  });

  await test.step(`Set filename "Muuktest-transcript.pdf"`, async () => {
    fileName = "Muuktest-transcript.pdf";
  });

  await test.step(`Hover "Muuktest-transcript.pdf"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Muuktest-transcript.pdf\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Joe_Jonas_Transcript"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Joe_Jonas_Transcript\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = " //A[@role=\\'button\\'][contains(text(),\"Joe_Jonas_Transcript\")]";
  });

  await test.step(`Click "Joe_Jonas_Transcript"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Joe_Jonas_Transcript\")]//following::BUTTON[@type='button']").nth(0).click();
  });

  await test.step(`Hover "View Transcript"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Joe_Jonas_Transcript\")]//following::A[normalize-space() = \"View Transcript\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Transcript"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Joe_Jonas_Transcript\")]//following::A[normalize-space() = \"Edit Transcript\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Transcript"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Joe_Jonas_Transcript\")]//following::A[normalize-space() = \"Delete Transcript\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Delete Transcript"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Transcript\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Transcript"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Transcript\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = " //A[@role=\\'button\\'][contains(text(),\"Joe_Jonas_Transcript\")]";
  });

});
