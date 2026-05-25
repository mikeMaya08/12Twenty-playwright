// TC: TC72046
// LoadTesting - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import {
  ADMIN_LOG_IN_BTN,
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  LOGIN_AS_BTN,
  NAV_OCI_JOB_LISTINGS,
} from '@config/selectors';

test("LoadTesting - Student - TC72046", async ({ page, context }) => {
  let selector = `0`;
  let jobPostingName = `0`;

  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/dashboard', {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//li[normalize-space()=\"Command Center\"]").nth(0).click();
  });

  await test.step(`Click "Waiting"`, async () => {
    await page.locator("//A[contains(text(),\"Waiting\")]").nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
    await page.waitForTimeout(5000);
    await page.waitForTimeout(5000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(5000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Bypass \"On Next Login\" (Admin Only)\"]";
  });

  await test.step(`Click "Bypass"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Bypass \"On Next Login\" (Admin Only)\"]").nth(0).click();
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Job Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Status\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(39).click();
  });

  await test.step(`Click "${jobPostingName}"`, async () => {
    await page.locator(`//*[normalize-space()="${jobPostingName}"]`).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"12twenty Meeting\")]";
  });

  await test.step(`Set found`, async () => {
    let elapsed = 0;
    let found = false;
    found = true;
    await page.reload();
    await page.locator(`//*[normalize-space()="${jobPostingName}"]`).nth(0).click();
  });

  await test.step(`Click "12twenty Meeting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"12twenty Meeting\")]").nth(0).click();
    await page.waitForTimeout(4000);
    await page.waitForLoadState('load');
    await page.waitForTimeout(15000);
  });

  await test.step(`Click "Join Now..."`, async () => {
    await page.reload();
    await page.locator("//div[contains(@class,\"virtual-meeting\") and not(contains(@class,\"has-ended\"))]//A[@role='button'][normalize-space() = \"Join Now...\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "Request to join"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='haircheck-join'][normalize-space() = \"Request to join\"]").nth(0).click();
  });

  await test.step(`Hover "Waiting for host to respond"`, async () => {
    await page.locator("//H2[contains(text(),\"Waiting for host to respond\")]").nth(0).hover();
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(15000);
  });

  await test.step(`Step 1`, async () => {
    let foundCount = 0;
  });

});
