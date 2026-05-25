// TC: TC_A84046
// Students – Job Preferences can be added and removed successfully

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_RESET_FILTERS,
  BTN_SAVE_TYPE,
  DIV_USA,
  H1_STUDENTS_ALUMNI,
  LINK_TEST_STUDENT_0001,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  TAB_HOME,
} from '@config/selectors';

test("Students – Job Preferences can be added and removed successfully - TC_A84046", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Hover "Job Preferences"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Preferences\"]").nth(0).hover();
  });

  await test.step(`Click "Job Preferences"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Preferences\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Preferred Industry"`, async () => {
    await page.locator("//LABEL[@id='PreferredConsolidatedIndustry1Id-label'][normalize-space() = \"Preferred Industry\"]").nth(0).hover();
  });

  await test.step(`Click "Accounting"`, async () => {
    await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").nth(0).click();
  });

  await test.step(`Hover "1. Accounting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").nth(0).hover();
  });

  await test.step(`Click "Construction & Manufacturing"`, async () => {
    await page.locator("//LABEL[@title='Construction & Manufacturing'][normalize-space() = \"Construction & Manufacturing\"]").nth(0).click();
  });

  await test.step(`Hover "2. Construction & Manufacturing"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"2. Construction & Manufacturing\"]").nth(0).hover();
  });

  await test.step(`Click "Consulting"`, async () => {
    await page.locator("//LABEL[@title='Consulting'][normalize-space() = \"Consulting\"]").nth(0).click();
  });

  await test.step(`Hover "3. Consulting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"3. Consulting\"]").nth(0).hover();
  });

  await test.step(`Hover "Preferred Function"`, async () => {
    await page.locator("//LABEL[@id='PreferredConsolidatedJobFunction1Id-label'][normalize-space() = \"Preferred Function\"]").nth(0).hover();
  });

  await test.step(`Click "Accounting"`, async () => {
    await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").nth(0).click();
  });

  await test.step(`Hover "1. Accounting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").nth(0).hover();
  });

  await test.step(`Click "Architecture and Engineering"`, async () => {
    await page.locator("//LABEL[@title='Architecture and Engineering'][normalize-space() = \"Architecture and Engineering\"]").nth(0).click();
  });

  await test.step(`Hover "2. Architecture and Engineering"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"2. Architecture and Engineering\"]").nth(0).hover();
  });

  await test.step(`Click "Arts and Design"`, async () => {
    await page.locator("//LABEL[@title='Arts and Design'][normalize-space() = \"Arts and Design\"]").nth(0).click();
  });

  await test.step(`Hover "3. Arts and Design"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"3. Arts and Design\"]").nth(0).hover();
  });

  await test.step(`Hover "Preferred City"`, async () => {
    await page.locator("//LABEL[@id='PreferredCity1Id-label'][normalize-space() = \"Preferred City\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//NG-FORM[@name='$ctrl.inputForm']").nth(2).click();
  });

  await test.step(`Click "Add Preferred City"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Preferred City\"]").nth(0).click();
  });

  await test.step(`Fill "Grand Rapids - MI"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Preferred City']").nth(0).fill("Grand Rapids - MI");
  });

  await test.step(`Click "Grand Rapids - MI"`, async () => {
    await page.locator("//STRONG[normalize-space() = \"Grand Rapids - MI\"]").nth(0).click();
  });

  await test.step(`Click "Preferred Country"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Country\"]").nth(0).click();
  });

  await test.step(`Click "Add Preferred Country"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Preferred Country\"]").nth(0).click();
  });

  await test.step(`Fill "United States (USA)"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search Preferred Country']").nth(0).fill("United States (USA)");
  });

  await test.step(`Click "United States (USA)"`, async () => {
    await page.locator(DIV_USA).nth(2).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover "What is your post-graduation Preferred …"`, async () => {
    await page.locator("//DT[contains(text(),\"What is your post-graduation Preferred Industry?\")]").nth(0).hover();
  });

  await test.step(`Hover "1. Accounting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").nth(0).hover();
  });

  await test.step(`Hover "2. Construction & Manufacturing"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"2. Construction & Manufacturing\"]").nth(0).hover();
  });

  await test.step(`Hover "3. Consulting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"3. Consulting\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your post-graduation preferred …"`, async () => {
    await page.locator("//DT[contains(text(),\"What is your post-graduation preferred job function?\")]").nth(0).hover();
  });

  await test.step(`Hover "1. Accounting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").nth(0).hover();
  });

  await test.step(`Hover "2. Architecture and Engineering"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"2. Architecture and Engineering\"]").nth(0).hover();
  });

  await test.step(`Hover "3. Arts and Design"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"3. Arts and Design\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your post-graduation preferred …"`, async () => {
    await page.locator("//DT[contains(text(),\"What is your post-graduation preferred job city?\")]").nth(0).hover();
  });

  await test.step(`Hover "1. Grand Rapids - MI"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. Grand Rapids - MI\"]").nth(0).hover();
  });

  await test.step(`Hover "What is your post-graduation preferred …"`, async () => {
    await page.locator("//DT[contains(text(),\"What is your post-graduation preferred job country?\")]").nth(0).hover();
  });

  await test.step(`Hover "1. United States (USA)"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"1. United States (USA)\"]").nth(0).hover();
  });

  await test.step(`Click "Job Preferences"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Preferences\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//i[contains(@class,\"remove-icon\")]";
    await page.waitForTimeout(300);
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

});
