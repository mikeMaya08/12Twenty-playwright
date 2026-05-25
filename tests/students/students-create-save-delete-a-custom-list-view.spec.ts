// TC: TC_A81288
// Students - Create, Save, Delete a custom list view

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  MODAL_SUCCESS,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students - Create, Save, Delete a custom list view - TC_A81288", async ({ page, context }) => {
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

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"List view\"]/ancestor::button").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@id=\"custom-view-dropdown\"]").nth(0).click();
  });

  await test.step(`Click "Create New View..."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Create New View...\"]").nth(0).click();
  });

  await test.step(`Fill "Muuktest QA Test View"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='View Name']").nth(0).fill("Muuktest QA Test View");
  });

  await test.step(`Hover "Available Columns"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Available Columns\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Preferences"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Preferences\"]").nth(0).hover();
  });

  await test.step(`Click "Preferred City"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Preferred City\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "Preferred City"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("Preferred City");
  });

  await test.step(`Hover "Education"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Education\"]").nth(0).hover();
  });

  await test.step(`Click "Graduation Term"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Graduation Term\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "Graduation Term"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("Graduation Term");
  });

  await test.step(`Click "Active"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Active\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "Active"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("Active");
  });

  await test.step(`Click "12twenty ID"`, async () => {
    await page.locator("//DIV[normalize-space() = \"12twenty ID\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "12twenty ID"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("12twenty ID");
  });

  await test.step(`Click "Email Address"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Email Address\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "Email Addres"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("Email Addres");
  });

  await test.step(`Click "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Allow Employers to contact me with job opportunities\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "Allow Employers to contact me with job …"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("Allow Employers to contact me with job opportunities");
  });

  await test.step(`Click "I want to be included in the Student & …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"I want to be included in the Student & Alumni Directory\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button']").nth(0).click();
  });

  await test.step(`Verify "I want to be included in the Student & …"`, async () => {
    await expect(page.locator("//div[@class=\"filter-list selected-columns\"]").nth(0)).toContainText("I want to be included in the Student & Alumni Directory");
  });

  await test.step(`Click "Save View"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save View\"]").nth(0).click();
  });

  await test.step(`Hover "Preferred City"`, async () => {
    await page.locator("//TH[normalize-space()=\"Preferred City\"]").nth(0).hover();
  });

  await test.step(`Hover "Graduation Term"`, async () => {
    await page.locator("//TH[normalize-space()=\"Graduation Term\"]").nth(0).hover();
  });

  await test.step(`Hover "Active"`, async () => {
    await page.locator("//TH[normalize-space()=\"Active\"]").nth(0).hover();
  });

  await test.step(`Hover "12twenty ID"`, async () => {
    await page.locator("//TH[normalize-space()=\"12twenty ID\"]").nth(0).hover();
  });

  await test.step(`Hover "Email Address"`, async () => {
    await page.locator("//TH[normalize-space()=\"Email Address\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//TH[normalize-space()=\"Allow Employers to contact me with job opportunities\"]").nth(0).hover();
  });

  await test.step(`Hover "I want to be included in the Student & …"`, async () => {
    await page.locator("//TH[normalize-space()=\"I want to be included in the Student & Alumni Directory\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.reload();
    await page.locator("//button[@id=\"custom-view-dropdown\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest QA Test View"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View\"]").nth(1).hover();
  });

  await test.step(`Click "Muuktest QA Test View"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View\"]/ancestor::li//span[contains(@class,\"glyphicon-pencil\")]").nth(0).click();
  });

  await test.step(`Fill "Muuktest QA Test View - Renamed"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='View Name']").nth(0).fill("Muuktest QA Test View - Renamed");
  });

  await test.step(`Click "Save View"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save View\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest QA Test View - Renamed"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View - Renamed\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest QA Test View - Renamed"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View - Renamed\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test View - Renamed"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View - Renamed\"]/ancestor::li//span[contains(@class,\"glyphicon-trash\")]").nth(0).click();
  });

  await test.step(`Hover "Delete Custom View"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Custom View\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this custom view?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Custom View"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Custom View\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the Custo…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully deleted the Custom View\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

});
