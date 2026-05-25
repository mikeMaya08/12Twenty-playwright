// TC: TC59055
// Application Materials - Add new Resumes - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  INPUT_DOC_NAME,
  NAV_HOME,
  RBTN_ADD_NEW,
  RBTN_CANCEL_CONTAINS,
} from '@config/selectors';

test("Application Materials - Add new Resumes - Student - TC59055", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-campuswide.qa-12twenty.com/Login', {timeout: 90000});
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

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Hover "Add New Resume"`, async () => {
    await page.locator("//H3[contains(text(),\"Add New Resume\")]").nth(0).hover();
  });

  await test.step(`Hover "Resume Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Resume Name *\")]").nth(0).hover();
  });

  await test.step(`Fill "Chris_Arrieta_Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Chris_Arrieta_Resume");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Submit\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Chris_Arrieta_Resume"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Chris_Arrieta_Resume\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][contains(text(),\"Chris_Arrieta_Resume\")]";
  });

  await test.step(`Click "Chris_Arrieta_Resume"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Chris_Arrieta_Resume\")]//following::BUTTON[@type='button']").nth(0).click();
  });

  await test.step(`Hover "View Resume"`, async () => {
    await page.locator("//A[contains(text(),\"Chris_Arrieta_Resume\")]//following::A[normalize-space() = \"View Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Resume"`, async () => {
    await page.locator("//A[contains(text(),\"Chris_Arrieta_Resume\")]//following::A[normalize-space() = \"Edit Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//a[@role='button'][contains(text(),\"Chris_Arrieta_Resume\")]//following::a[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//a[@role='button'][contains(text(),\"Chris_Arrieta_Resume\")]//following::a[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Resume\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Resume\")]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.reload();
  });

});
