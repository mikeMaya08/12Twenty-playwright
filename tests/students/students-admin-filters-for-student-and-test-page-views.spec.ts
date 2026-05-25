// TC: TC63794
// Students - Admin filters for student and test page views

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_MORE_FILTERS,
  BTN_RESET_FILTERS,
  H1_STUDENTS_ALUMNI,
  MODAL_ANNOUNCEMENTS_CT,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students - Admin filters for student and test page views - TC63794", async ({ page, context }) => {
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
    await page.locator("//button//i[@aria-label=\"List view\"]").nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Matt"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("Matt");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button//i[@aria-label=\"List view\"]").nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Student Education - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student Education - General\")]").nth(0).hover();
  });

  await test.step(`Hover "Major/Academic Program"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Major/Academic Program\"]").nth(0).hover();
  });

  await test.step(`Hover "Outcome - Basics"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Outcome - Basics\")]").nth(0).hover();
  });

  await test.step(`Hover "What is the name of the fellowship prog…"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"What is the name of the fellowship program?\"]").nth(0).hover();
  });

  await test.step(`Fill "Program"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("Program");
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Major/Academic Program\"]").nth(0).click();
  });

  await test.step(`Click "Major 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Major 2\"]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Hover "Results: 0"`, async () => {
    await page.locator("//DIV[contains(text(),\"Results: 0\")]").nth(0).hover();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button//i[@aria-label=\"List view\"]").nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//A[normalize-space()=\"Test Student #0001\"]").nth(1).click();
  });

  await test.step(`Hover "Test Student #0001"`, async () => {
    await page.locator("//H1[normalize-space() = \"Test Student #0001\"]").nth(0).hover();
  });

  await test.step(`Hover "student-1@e2e-tests-campuswide.com"`, async () => {
    await page.locator("//SPAN[contains(text(),\"student-1@e2e-tests-campuswide.com\")]").nth(0).hover();
  });

  await test.step(`Hover "SHARED"`, async () => {
    await page.locator("//SPAN[contains(text(),\"SHARED\")]").nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H3[contains(text(),\"Account Settings\")]").nth(0).hover();
  });

  await test.step(`Hover "Contact Info"`, async () => {
    await page.locator("//H3[contains(text(),\"Contact Info\")]").nth(0).hover();
  });

  await test.step(`Hover "Activity"`, async () => {
    await page.locator("//H3[contains(text(),\"Activity\")]").nth(0).hover();
  });

  await test.step(`Hover "Outcome"`, async () => {
    await page.locator("//H3[contains(text(),\"Outcome\")]").nth(0).hover();
  });

  await test.step(`Hover "Other"`, async () => {
    await page.locator("//H3[contains(text(),\"Other\")]").nth(0).hover();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
  });

  await test.step(`Hover "Announcements"`, async () => {
    await page.locator(MODAL_ANNOUNCEMENTS_CT).nth(0).hover();
  });

});
