// TC: TC63105
// Admin - Bulk Update Students

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_MORE_FILTERS,
  BTN_RESET_FILTERS,
  H1_STUDENTS_ALUMNI,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH_FILTERS,
  LABEL_BULK_UPDATE_1,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Admin - Bulk Update Students - TC63105", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/dashboard', {timeout: 90000});
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
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Student Group"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Student Group");
  });

  await test.step(`Hover "Student - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student - General\")]").nth(0).hover();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Student Group\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Bulk Update 1"`, async () => {
    await page.locator(LABEL_BULK_UPDATE_1).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"results-header-right\"]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update All"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Bulk Update All\"]").nth(0).click();
  });

  await test.step(`Hover "Field to update*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Field to update*\")]").nth(0).hover();
  });

  await test.step(`Select "number:1000100"`, async () => {
    await page.locator("//SELECT[@id='SelectAttribute'][@name='SelectAttribute']").nth(0).selectOption("number:1000100");
  });

  await test.step(`Hover "Bulk update options*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Bulk update options*\")]").nth(0).hover();
  });

  await test.step(`Hover "Append"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Append\"]").nth(0).hover();
  });

  await test.step(`Hover "Replace all values"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Replace all values\"]").nth(0).hover();
  });

  await test.step(`Hover "Replace"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Replace\"]").nth(0).hover();
  });

  await test.step(`Click "Append"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Append\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@type='radio'][@name='optionType'][@id='optionTypeAppend']").nth(0).check();
  });

  await test.step(`Hover "*"`, async () => {
    await page.locator("//SPAN[contains(text(),\"*\")]").nth(2).hover();
  });

  await test.step(`Hover "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(1).click();
  });

  await test.step(`Click "Bulk Update 2"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"New value\")]//following::LABEL[normalize-space()=\"Bulk Update 2\"]").nth(0).click();
  });

  await test.step(`Click "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"results-header-right\"]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"results-header-right\"]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.reload();
    await page.locator("//span[normalize-space()=\"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Bulk Update 2\"]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"List view\"]/ancestor::button").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"results-header-right\"]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update All"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Bulk Update All\"]").nth(0).click();
  });

  await test.step(`Hover "Bulk Update"`, async () => {
    await page.locator("//H3[contains(text(),\"Bulk Update \")]").nth(0).hover();
  });

  await test.step(`Hover "Field to update*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Field to update*\")]").nth(0).hover();
  });

  await test.step(`Select "number:1000100"`, async () => {
    await page.locator("//SELECT[@id='SelectAttribute'][@name='SelectAttribute']").nth(0).selectOption("number:1000100");
  });

  await test.step(`Click "Append"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Append\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@type='radio'][@name='optionType'][@id='optionTypeAppend']").nth(0).check();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(1).click();
  });

  await test.step(`Click "Replace"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Replace\"]").nth(0).click();
  });

  await test.step(`Click "Replace*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Replace*\"]//following-sibling::div").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Replace*\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(1).click();
  });

  await test.step(`Click "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]//following::label[normalize-space()=\"Bulk Update 3\"]").nth(0).click();
  });

  await test.step(`Click "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(1).click();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Student Group"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("Student Group");
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update 1"`, async () => {
    await page.locator(LABEL_BULK_UPDATE_1).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Student Group"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("Student Group");
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Bulk Update 2\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(3).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"results-header-right\"]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update All"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Bulk Update All\"]").nth(0).click();
  });

  await test.step(`Hover "Bulk Update"`, async () => {
    await page.locator("//H3[contains(text(),\"Bulk Update \")]").nth(0).hover();
  });

  await test.step(`Hover "Field to update*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Field to update*\")]").nth(0).hover();
  });

  await test.step(`Select "number:1000100"`, async () => {
    await page.locator("//SELECT[@id='SelectAttribute'][@name='SelectAttribute']").nth(0).selectOption("number:1000100");
  });

  await test.step(`Hover "Bulk update options*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Bulk update options*\")]").nth(0).hover();
  });

  await test.step(`Click "Replace all values"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Replace all values\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(1).click();
  });

  await test.step(`Click "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]//following::label[normalize-space()=\"Bulk Update 1\"]").nth(0).click();
  });

  await test.step(`Click "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]//following::label[normalize-space()=\"Group 1\"]").nth(0).click();
  });

  await test.step(`Click "New value*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"New value*\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(1).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Student - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student - General\")]").nth(0).hover();
  });

  await test.step(`Fill "Student Group"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("Student Group");
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Update 1"`, async () => {
    await page.locator(LABEL_BULK_UPDATE_1).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(5).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

});
