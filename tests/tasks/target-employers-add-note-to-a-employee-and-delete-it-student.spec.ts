// TC: TC65147
// Target Employers - Add note to a employee and delete it -Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import {
  BTN_CANCEL_CONTAINS,
  BTN_SAVE_CONTAINS,
  INPUT_DATE,
  LINK_WALMART_CT,
  MODAL_OOPS_CT,
  NAV_HOME,
  RBTN_OK_MODAL_CONT,
} from '@config/selectors';

test("Target Employers - Add note to a employee and delete it -Student - TC65147", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-campuswide.qa-12twenty.com/dashboard', {timeout: 90000});
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
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Target Employers\"]").nth(0).click();
  });

  await test.step(`Hover "Target Employers"`, async () => {
    await page.locator("//H1[contains(text(),\"Target Employers\")]").nth(0).hover();
  });

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[contains(text(),\"Target Employers\")]").nth(0).click();
  });

  await test.step(`Click "Add To Target Employers"`, async () => {
    await page.locator("//A[@role='button'][@type='button'][normalize-space() = \"Add To Target Employers\"]").nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS_CT).nth(0).hover();
  });

  await test.step(`Hover "Please select the company"`, async () => {
    await page.locator("//DIV[contains(text(),\"Please select the company\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
  });

  await test.step(`Fill "Walmart"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-rz2sxo-autocomplete'][@name=''][@placeholder='Select an employer']").nth(0).fill("Walmart");
  });

  await test.step(`Click "Walmart"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Walmart\")]").nth(0).click();
  });

  await test.step(`Click "Add To Target Employers"`, async () => {
    await page.locator("//A[@role='button'][@type='button'][normalize-space() = \"Add To Target Employers\"]").nth(0).click();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator(LINK_WALMART_CT).nth(0).hover();
  });

  await test.step(`Hover "Research Company"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Research Company\")]").nth(0).hover();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator("//A[@title='Add a note'][normalize-space() = \"Add Note\"]").nth(0).hover();
  });

  await test.step(`Hover "Create Task"`, async () => {
    await page.locator("//A[@title='Add a task'][normalize-space() = \"Create Task\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//I").nth(36).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[@role='button'][@title='Edit this target employer']").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[@role='button'][@title='Remove this employer from my target list']").nth(0).hover();
  });

  await test.step(`Click "Add Note"`, async () => {
    await page.locator("//A[@title='Add a note'][normalize-space() = \"Add Note\"]").nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator("//H1[contains(text(),\"Add Note\")]").nth(0).hover();
  });

  await test.step(`Hover "Employer: Walmart"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer: Walmart\"]").nth(0).hover();
  });

  await test.step(`Hover "Note *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Note *\")]").nth(0).hover();
  });

  await test.step(`Click "Note Date *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Note Date *\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Target Employers\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][@title='Remove this employer from my target list']").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

});
