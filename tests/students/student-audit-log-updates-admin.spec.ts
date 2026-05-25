// TC: TC65399
// Student - Audit log updates - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  INPUT_SEARCH_USERS,
  LOGIN_AS_BTN,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_ADD_NOTE,
  RBTN_VIEW_AUDIT,
} from '@config/selectors';

test("Student - Audit log updates - Admin - TC65399", async ({ page, context }) => {
  let selector = `0`;

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
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"List view\"]/ancestor::button").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Test Student #0002");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Test Student #0002"`, async () => {
    await page.locator("//A[contains(text(),\"Test Student #0002\")]").nth(1).click();
  });

  await test.step(`Hover "Test Student #0002"`, async () => {
    await page.locator("//H1[normalize-space() = \"Test Student #0002\"]").nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Hover "Test Student"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Student\")]").nth(0).hover();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit General"`, async () => {
    await page.locator("//H3[contains(text(),\"Edit General\")]").nth(0).hover();
  });

  await test.step(`Hover "Middle Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Middle Name\"]").nth(0).hover();
  });

  await test.step(`Fill "Test Student First Name"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='MiddleName'][@placeholder='Middle Name']").nth(0).fill("Test Student First Name");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
  });

  await test.step(`Verify "Test Student First Name"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Test Student First Name\")]").nth(0)).toHaveText("Test Student First Name");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator(RBTN_ADD_NOTE).nth(0).hover();
  });

  await test.step(`Hover "Flag User"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Flag User\"]").nth(0).hover();
  });

  await test.step(`Hover "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
  });

  await test.step(`Click "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).click();
  });

  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//td//DIV[normalize-space() = \"e2e Test Admin\"]").nth(0).hover();
  });

  await test.step(`Hover "Student - Update Student"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Student - Update Student\"]").nth(0).hover();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator("//SPAN[contains(text(),\"×\")]").nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator("//h3[normalize-space()=\"General\"]/following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Middle Name"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Middle Name\")]").nth(0).hover();
  });

  await test.step(`Fill "Middle Name"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='MiddleName'][@placeholder='Middle Name']").nth(0).fill("");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForTimeout(8000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Test Student First Name\")]";
  });

});
