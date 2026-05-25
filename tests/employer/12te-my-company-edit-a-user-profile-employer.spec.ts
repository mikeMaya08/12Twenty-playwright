// TC: TC64832
// 12TE - My Company - Edit a user profile - Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_CANCEL_CONTAINS, BTN_SAVE_CONTAINS, USER_ACCOUNT_NAME } from '@config/selectors';

test("12TE - My Company - Edit a user profile - Employer - TC64832", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Profile"`, async () => {
    await expect(page.locator("//a[normalize-space()=\"Profile\"]").nth(0)).toHaveText("Profile");
  });

  await test.step(`Verify "Users"`, async () => {
    await expect(page.locator("//a[normalize-space()=\"Users\"]").nth(0)).toHaveText("Users");
  });

  await test.step(`Click "Users"`, async () => {
    await page.locator("//a[normalize-space()=\"Users\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Users"`, async () => {
    await page.locator("//H2[normalize-space() = \"Users\"]").nth(0).hover();
  });

  await test.step(`Hover "User"`, async () => {
    await page.locator("//TH[contains(text(),\"User\")]").nth(0).hover();
  });

  await test.step(`Hover "Role"`, async () => {
    await page.locator("//TH[contains(text(),\"Role\")]").nth(0).hover();
  });

  await test.step(`Verify "Associate"`, async () => {
    await expect(page.locator("//A[contains(text(),\"\")]//ancestor::tr//td[@class=\"ng-binding\"]").nth(0)).toHaveText("Associate");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@class=\"primary-item ng-binding ng-scope\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Phone"`, async () => {
    await page.locator("//DT[contains(text(),\"Phone\")]").nth(0).hover();
  });

  await test.step(`Hover "Email"`, async () => {
    await page.locator("//DT[contains(text(),\"Email\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//span[@class=\"ng-binding\"]").nth(0).hover();
  });

  await test.step(`Verify "Associate"`, async () => {
    await expect(page.locator("//span[@class=\"ng-binding\"]").nth(0)).toHaveText("Associate");
  });

  await test.step(`Click "Change"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Change\")]").nth(0).click();
  });

  await test.step(`Verify "User Role*"`, async () => {
    await expect(page.locator("//LABEL[contains(text(),\"User Role*\")]").nth(0)).toHaveText("User Role*");
  });

  await test.step(`Select "number:21"`, async () => {
    await page.locator("//SELECT[@name='roleId']").nth(0).selectOption("number:21");
  });

  await test.step(`Hover "Edit User Role"`, async () => {
    await page.locator("//H3[contains(text(),\"Edit User Role\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Administrator"`, async () => {
    await expect(page.locator("//span[@class=\"ng-binding\"]").nth(0)).toHaveText("Administrator");
  });

  await test.step(`Click "Users"`, async () => {
    await page.locator("//a[normalize-space()=\"Users\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Administrator"`, async () => {
    await expect(page.locator("//a[@class=\"primary-item ng-binding ng-scope\"]//ancestor::tr//td[@class=\"ng-binding\"]").nth(0)).toHaveText("Administrator");
  });

  await test.step(`Set selector`, async () => {
    selector = "//a[@class=\"primary-item ng-binding ng-scope\"]//ancestor::tr//td[@class=\"ng-binding\"][normalize-space=\"Administrator\"]";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@class=\"primary-item ng-binding ng-scope\"]").nth(0).click();
  });

  await test.step(`Click "Change"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Change\")]").nth(0).click();
  });

  await test.step(`Verify visible "Edit User Role"`, async () => {
    await expect(page.locator("//H3[contains(text(),\"Edit User Role\")]").nth(0)).toBeVisible();
  });

  await test.step(`Hover "User Role*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"User Role*\")]").nth(0).hover();
  });

  await test.step(`Select "number:20"`, async () => {
    await page.locator("//SELECT[@name='roleId']").nth(0).selectOption("number:20");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Users"`, async () => {
    await page.locator("//a[normalize-space()=\"Users\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Associate"`, async () => {
    await expect(page.locator("//A[contains(text(),\"\")]//ancestor::tr//td[@class=\"ng-binding\"]").nth(0)).toHaveText("Associate");
  });

  await test.step(`Set selector`, async () => {
    selector = "//a[@class=\"primary-item ng-binding ng-scope\"]//ancestor::tr//td[@class=\"ng-binding\"][normalize-space=\"Administrator\"]";
  });

});
