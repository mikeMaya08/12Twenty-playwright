// TC: TC64830
// 12TE - Employer Profile - Employer user updates company profile

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_LOWER,
  INPUT_CHECKBOX_MULTI,
  MENU_EDIT,
  RBTN_CANCEL_CONTAINS,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE - Employer Profile - Employer user updates company profile - TC64830", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "My Company"`, async () => {
    await page.locator("//A[normalize-space() = \"My Company\"]").nth(0).click();
  });

  await test.step(`Verify "Profile"`, async () => {
    await expect(page.locator("//a[normalize-space()=\"Profile\"]").nth(0)).toHaveText("Profile");
  });

  await test.step(`Verify "Users"`, async () => {
    await expect(page.locator("//a[normalize-space()=\"Users\"]").nth(0)).toHaveText("Users");
  });

  await test.step(`Verify "Walmart"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Walmart\"]").nth(0)).toHaveText("                    Walmart                                                                                                                                                                                                                                                                                                                                                                        ");
  });

  await test.step(`Verify ">10000"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \">10000\"]").nth(0)).toHaveText("                 >10000            ");
  });

  await test.step(`Verify "Retail"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Retail\")]").nth(0)).toContainText("Retail");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Number of Employees"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Number of Employees\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//select[@name=\"numberOfEmployees\"]").nth(0).hover();
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//select[@name=\"numberOfEmployees\"]").nth(0).pressSequentially("5001-10000");
  });

  await test.step(`Hover "Industries"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries\"]").nth(0).hover();
  });

  await test.step(`Click "Industries"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries\"]//following::button").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "LinkedIn"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"LinkedIn\"]").nth(0).click();
  });

  await test.step(`Click "Save Profile"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Save Profile\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "5001-10000"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"5001-10000\"]").nth(0)).toHaveText("                 5001-10000            ");
  });

  await test.step(`Verify "Accounting, Retail"`, async () => {
    await expect(page.locator("//tt-lookup-label[@lookup-option-ids-csv=\"$ctrl.coreCompany.IndustryIdsCsv\"]").nth(0)).toContainText("Accounting, Retail");
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \">10000\"]";
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Industries"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries\"]").nth(0).click();
  });

  await test.step(`Click "Industries"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries\"]//following::button").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Number of Employees"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Number of Employees\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//select[@name=\"numberOfEmployees\"]").nth(0).hover();
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//select[@name=\"numberOfEmployees\"]").nth(0).pressSequentially(">10000");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save Profile"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Save Profile\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify ">10000"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \">10000\"]").nth(0)).toHaveText("                 >10000            ");
  });

  await test.step(`Verify "Retail"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Retail\")]").nth(0)).toContainText("Retail");
  });

  await test.step(`Set selector`, async () => {
    selector = " //DIV[normalize-space() = \"5001-10000\"]";
  });

});
