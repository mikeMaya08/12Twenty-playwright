// TC: TC59059
// Application Materials - Add new Cover Letters - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  INPUT_DOC_NAME,
  NAV_HOME,
} from '@config/selectors';

test("Application Materials - Add new Cover Letters - Student - TC59059", async ({ page, context }) => {
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
  });

  await test.step(`Hover "Cover Letters"`, async () => {
    await page.locator("//H3[contains(text(),\"Cover Letters\")]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator("//H3[contains(text(),\"Cover Letters\")]//following::A[@role='button'][normalize-space() = \"Add New\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Cover Letter"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Cover Letter\")]").nth(0).hover();
  });

  await test.step(`Hover "Cover Letter Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Cover Letter Name *\")]").nth(0).hover();
  });

  await test.step(`Fill "Amelia_Thermopolis_CoverLetter"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Amelia_Thermopolis_CoverLetter");
  });

  await test.step(`Set filename "MuukTest-CoverLetter.pdf"`, async () => {
    fileName = "MuukTest-CoverLetter.pdf";
  });

  await test.step(`Hover "MuukTest-CoverLetter.pdf"`, async () => {
    await page.locator("//SPAN[contains(text(),\"MuukTest-CoverLetter.pdf\")]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "Amelia_Thermopolis_CoverLetter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Amelia_Thermopolis_CoverLetter\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = " //A[@role=\\'button\\'][contains(text(),\"Amelia_Thermopolis_CoverLetter\")]";
  });

  await test.step(`Click "Amelia_Thermopolis_CoverLetter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Amelia_Thermopolis_CoverLetter\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "View Cover Letter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Amelia_Thermopolis_CoverLetter\")]//following::A[normalize-space() = \"View Cover Letter\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Cover Letter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Amelia_Thermopolis_CoverLetter\")]//following::A[normalize-space() = \"Edit Cover Letter\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Cover Letter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Amelia_Thermopolis_CoverLetter\")]//following::A[normalize-space() = \"Delete Cover Letter\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Cover Letter"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Cover Letter\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Cover Letter"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Cover Letter\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

});
