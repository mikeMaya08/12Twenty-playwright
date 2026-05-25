// TC: TC72648
// MONDAY-Interviewer

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import { ADMIN_LOG_IN_BTN, NAV_OCI_JOB_LISTINGS } from '@config/selectors';

test("MONDAY-Interviewer - TC72648", async ({ page, context }) => {
  let interviewerurl = `0`;
  let indexWindow = `0`;

  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/dashboard', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='email'][@placeholder='Email Address'][@name='UserName']").nth(0).fill("admin-1@e2e-tests-business.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@placeholder='Password'][@name='Password']").nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
  });

  await test.step(`Hover "Admin #"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Admin #\")]").nth(0).hover();
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//li[normalize-space()=\"Command Center\"]").nth(0).click();
    await page.waitForTimeout(15000);
  });

  await test.step(`Query elements`, async () => {
    let trElements = await page.$$('//tr[@class="ng-scope"]');
    let total = trElements.length;
    await page.waitForTimeout(2000);
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Set found`, async () => {
    let maxAttempts = 2;
    let found = false;
    found = true;
    await page.reload();
  });

  await test.step(`Click "Emails"`, async () => {
    await page.locator("//A[contains(text(),\"Emails\")]").nth(0).click();
  });

  await test.step(`Click "Interview Link"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Interview Link\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "this link"`, async () => {
    await page.locator("//A[contains(text(),\"this link\")]").nth(0).click();
    await page.waitForTimeout(5000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set interviewerurl`, async () => {
    interviewerurl = page.url();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set indexWindow`, async () => {
    indexWindow = "0";
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Welcome"`, async () => {
    await page.locator("//*[contains(text(),\"Welcome\")]").nth(0).hover();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Join Now..."`, async () => {
    await page.locator("//div[contains(@class,\"virtual-meeting\") and not(contains(@class,\"has-ended\"))]//A[@role='button'][normalize-space() = \"Join Now...\"]").nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "Join"`, async () => {
    await page.locator("//span[contains(text(),\"Join\") or contains(text(),\"Request to join\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"tile-info\")]").nth(0).click();
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(5000);
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
  });

});
