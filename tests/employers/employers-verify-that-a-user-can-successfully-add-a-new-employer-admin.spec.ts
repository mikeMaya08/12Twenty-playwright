// TC: TC58244
// Employers - Verify that a user can successfully add a new employer -Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMPLOYER_NAME,
  INPUT_SEARCH,
  LABEL_YES,
  NAV_EMPLOYERS,
  NAV_HOME,
} from '@config/selectors';

test("Employers - Verify that a user can successfully add a new employer -Admin - TC58244", async ({ page, context }) => {
  let fileName = `0`;

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

  await test.step(`Hover "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).hover();
  });

  await test.step(`Click "Add Employer"`, async () => {
    await page.locator("//A[@id='addCompany'][normalize-space() = \"Add Employer\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Add New Employer\")]").nth(0).hover();
  });

  await test.step(`Fill "Ramya"`, async () => {
    await page.locator("//INPUT[@name='EmployerName']").nth(0).fill("Ramya");
  });

  await test.step(`Fill "JPMorgan Chase"`, async () => {
    await page.locator("//INPUT").nth(3).fill("JPMorgan Chase");
  });

  await test.step(`Click "JPMorgan Chase"`, async () => {
    await page.locator("//STRONG[contains(text(),\"JPMorgan Chase\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "None-selected"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"None-selected\"]").nth(0).click();
  });

  await test.step(`Fill "Consulting - Healthcare"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Consulting - Healthcare");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(8).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='NumberOfEmployeesId'][@name='NumberOfEmployeesId']").nth(0).selectOption("number:3");
  });

  await test.step(`Click "Add New Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Add New Employer\")]").nth(0).click();
  });

  await test.step(`Click "Account Manager*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Account Manager*\"]").nth(0).click();
  });

  await test.step(`Select "number:540016055100183"`, async () => {
    await page.locator("//SELECT[@id='AccountManagerId'][@name='AccountManagerId']").nth(0).selectOption("number:540016055100183");
  });

  await test.step(`Fill "https://www.muuktest.com"`, async () => {
    await page.locator("//INPUT[@id='Website'][@name='Website'][@placeholder='Website'][@type='text']").nth(0).fill("https://www.muuktest.com");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='OutreachPriorityId'][@name='OutreachPriorityId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Hero Image"`, async () => {
    await page.locator("//label[contains(text(),\"Hero Image\")]//following::div[contains(@class,\"-image-cmp\")]").nth(0).click();
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
    await page.waitForTimeout(15000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator("//A[contains(text(),\"OK\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "None-selected"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"None-selected\"]").nth(0).click();
  });

  await test.step(`Fill "Org Capacity: DEIB"`, async () => {
    await page.locator(INPUT_SEARCH).nth(1).fill("Org Capacity: DEIB");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(99).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Priority Resources & Efforts\"]").nth(0).click();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@id='PublicDemographicsTypeId'][@name='PublicDemographicsTypeId']").nth(0).selectOption("number:2");
  });

  await test.step(`Fill "Maldives"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Enter your headquarters address']").nth(0).fill("Maldives");
  });

  await test.step(`Click "Maldives"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Maldives\")]").nth(0).click();
  });

  await test.step(`Fill "https://www.linkedin.com/in/ramya"`, async () => {
    await page.locator("//INPUT[@id='LinkedinProfileUrl'][@name='LinkedinProfileUrl'][@placeholder='Linkedin Profile'][@type='text']").nth(0).fill("https://www.linkedin.com/in/ramya");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Fill "Ramya"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("Ramya");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Ramya"`, async () => {
    await page.locator("//A[contains(text(),\"Ramya\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Reject"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reject\"]").nth(0).click();
  });

  await test.step(`Hover "Are you sure you want to reject this emp"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to reject this emp\")]").nth(0).hover();
  });

  await test.step(`Click "Reject"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Reject\")]").nth(0).click();
  });

  await test.step(`Hover "Rejected"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Rejected\")]").nth(0).hover();
  });

});
