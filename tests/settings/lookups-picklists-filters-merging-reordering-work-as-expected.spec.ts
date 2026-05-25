// TC: TC_A82325
// Lookups/Picklists - Filters, Merging, reordering work as expected

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_MERGE,
  BTN_RESET_FILTERS,
  BTN_SAVE,
  NAV_HOME,
  NAV_PICKLISTS,
  NAV_SITE_SETTINGS,
  NAV_STUDENTS_ALUMNI,
  RBTN_BACK,
} from '@config/selectors';

test("Lookups/Picklists - Filters, Merging, reordering work as expected - TC_A82325", async ({ page, context }) => {
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

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(2).click();
  });

  await test.step(`Click "Picklists"`, async () => {
    await page.locator(NAV_PICKLISTS).nth(0).click();
  });

  await test.step(`Click "Consolidated Industry"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Consolidated Industry\"]").nth(0).click();
  });

  await test.step(`Click "Option"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Option\"]").nth(0).click();
  });

  await test.step(`Fill "government"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='Option']").nth(0).fill("government");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//SPAN[@title='Government'][normalize-space() = \"Government\"]").nth(0).hover();
  });

  await test.step(`Hover "Government & Public Sector"`, async () => {
    await page.locator("//SPAN[@title='Government & Public Sector'][normalize-space() = \"Government & Public Sector\"]").nth(0).hover();
  });

  await test.step(`Hover "Government"`, async () => {
    await page.locator("//SPAN[@title='Government'][normalize-space() = \"Government\"]").nth(0).hover();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Reorder Descending"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Reorder Descending\"]").nth(0).click();
  });

  await test.step(`Click "Option"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Option\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[@id=\"sortable-container\"][contains(@class,\"edit-lookup\")]//div[@as-sortable-item-handle]//span";
  });

  await test.step(`Click "Back"`, async () => {
    await page.locator(RBTN_BACK).nth(0).click();
  });

  await test.step(`Click "Consolidated Industry"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Consolidated Industry\"]").nth(0).click();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Reorder Ascending"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Reorder Ascending\"]").nth(0).click();
  });

  await test.step(`Click "Option"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Option\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Add New Option"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add New Option\"]").nth(0).click();
  });

  await test.step(`Hover "Consolidated Industry Option"`, async () => {
    await page.locator("//H3[normalize-space() = \"Consolidated Industry Option\"]").nth(0).hover();
  });

  await test.step(`Hover "Option Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Option Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Test by Muuk"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Option Name']").nth(0).fill("Test by Muuk");
  });

  await test.step(`Hover "Core Industry*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Core Industry*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='core_industry']").nth(0).click();
  });

  await test.step(`Type "accounting"`, async () => {
    await page.keyboard.type("accounting");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Standard Reporting Industry*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='mbacsea_industry']").nth(0).click();
  });

  await test.step(`Type "accounting services"`, async () => {
    await page.keyboard.type("accounting services");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[normalize-space() = \"Test by Muuk\"]/ancestor::div[@as-sortable-item]//i[@class=\"fas fa-bars fa-fw\"]";
  });

  await test.step(`Mouse action`, async () => {
    await page.mouse.down();
    await page.mouse.up();
  });

  await test.step(`Verify "Test by Muuk"`, async () => {
    await expect(page.locator("//div[@id=\"sortable-container\"]//div[@as-sortable-item][contains(@class,\"edit-lookup-option\")]//i/following-sibling::span").nth(0)).not.toHaveText("Test by Muuk");
  });

  await test.step(`Verify "Test by Muuk"`, async () => {
    await expect(page.locator("//div[@id=\"sortable-container\"]//div[@as-sortable-item][contains(@class,\"edit-lookup-option\")]//i/following-sibling::span").nth(1)).toHaveText("Test by Muuk");
  });

  await test.step(`Mouse action`, async () => {
    await page.mouse.down();
    await page.mouse.up();
  });

  await test.step(`Verify "Test by Muuk"`, async () => {
    await expect(page.locator("//div[@id=\"sortable-container\"]//div[@as-sortable-item][contains(@class,\"edit-lookup-option\")]//i/following-sibling::span").nth(0)).toHaveText("Test by Muuk");
  });

  await test.step(`Verify "Test by Muuk"`, async () => {
    await expect(page.locator("//div[@id=\"sortable-container\"]//div[@as-sortable-item][contains(@class,\"edit-lookup-option\")]//i/following-sibling::span").nth(1)).not.toHaveText("Test by Muuk");
  });

  await test.step(`Click "Test by Muuk"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test by Muuk\"]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Test by Muuk"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test by Muuk\"]/ancestor::div[@as-sortable-item]//a[normalize-space()=\"Merge\"]").nth(0).click();
  });

  await test.step(`Hover "Merge Attribute Option"`, async () => {
    await page.locator("//H3[normalize-space() = \"Merge Attribute Option\"]").nth(0).hover();
  });

  await test.step(`Hover "Warning: Merging one option into anothe…"`, async () => {
    await page.locator("//DIV[@role='alert'][normalize-space() = \"Warning: Merging one option into another will update historical data as well. This action cannot be undone.\"]").nth(0).hover();
  });

  await test.step(`Click "-- Please Select an Option --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title=''][normalize-space() = \"-- Please Select an Option --\"]").nth(0).click();
  });

  await test.step(`Fill "Accounting"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search options...']").nth(0).fill("Accounting");
  });

  await test.step(`Click "Accounting"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Accounting\"]").nth(0).click();
  });

  await test.step(`Verify "Accounting"`, async () => {
    await expect(page.locator("//label[normalize-space()=\"Merge Into:\"]//following::dt[normalize-space()=\"Core Option Name\"]/following-sibling::dd//span").nth(0)).toHaveText("Accounting");
  });

  await test.step(`Verify "Financial Services"`, async () => {
    await expect(page.locator("//label[normalize-space()=\"Merge Into:\"]//following::dt[normalize-space()=\"Mba Csea Option Name\"]/following-sibling::dd//span").nth(0)).toHaveText("Financial Services");
  });

  await test.step(`Click "Merge"`, async () => {
    await page.locator(BTN_MERGE).nth(0).click();
    await page.waitForLoadState('load');
  });

});
