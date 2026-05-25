// TC: TC58295
// Employers - Add a Note to an Existing Company - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ADD_CONTAINS,
  BTN_CANCEL_CONTAINS,
  BTN_SEARCH,
  INPUT_EMPLOYER_NAME,
  MODAL_DELETE_NOTE_CT,
  NAV_EMPLOYERS,
  NAV_HOME,
  RBTN_OK_ID_CONTAINS,
} from '@config/selectors';

test("Employers - Add a Note to an Existing Company - Admin - TC58295", async ({ page, context }) => {
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

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Fill "A&E Networks"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("A&E Networks");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "A&E Networks"`, async () => {
    await page.locator("//A[normalize-space() = \"A&E Networks\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//table//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Add Note"`, async () => {
    await page.locator("//A[@title='Add a note'][normalize-space() = \"Add Note\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Step 1`, async () => {
    await page.waitForSelector('//div[@id="cke_NoteDescription"]');
    await page.click('//div[@id="cke_NoteDescription"]');
  });

  await test.step(`Select "number:3809"`, async () => {
    await page.locator("//SELECT[@id='UTypeId'][@name='TypeId']").nth(0).selectOption("number:3809");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD_CONTAINS).nth(0).click();
  });

  await test.step(`Click "A&E Networks"`, async () => {
    await page.locator("//A[normalize-space() = \"A&E Networks\"]").nth(0).click();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).click();
  });

  await test.step(`Hover "We are in the story business and just as"`, async () => {
    await page.locator("//P[contains(text(),\"We are in the story business and just as\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@title='Delete']").nth(0).click();
  });

  await test.step(`Hover "Delete Note"`, async () => {
    await page.locator(MODAL_DELETE_NOTE_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this Not"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this Not\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[contains(text(),\"Confirm\")]").nth(0).click();
  });

  await test.step(`Hover "You have successfully deleted the note."`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the note.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_ID_CONTAINS).nth(0).click();
  });

});
