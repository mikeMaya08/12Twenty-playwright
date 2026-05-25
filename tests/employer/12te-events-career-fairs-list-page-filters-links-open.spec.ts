// TC: TC_A80380
// 12TE Events - Career Fairs - List page, filters, links open

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import { RBTN_DAY, RBTN_LIST, RBTN_WEEK, USER_ACCOUNT_NAME } from '@config/selectors';

test("12TE Events - Career Fairs - List page, filters, links open - TC_A80380", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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

  await test.step(`Click "Career Fairs"`, async () => {
    await page.locator("//A[normalize-space() = \"Career Fairs\"]").nth(0).click();
  });

  await test.step(`Hover "All Career Fairs"`, async () => {
    await page.locator("//A[normalize-space() = \"All Career Fairs\"]").nth(0).hover();
  });

  await test.step(`Click "Registered"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered\"]").nth(0).click();
  });

  await test.step(`Click "All Career Fairs"`, async () => {
    await page.locator("//A[normalize-space() = \"All Career Fairs\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//tbody//tr[@class=\"event ng-scope\"]";
  });

  await test.step(`Click "List"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][contains(normalize-space(),\"List\")]").nth(0).click();
  });

  await test.step(`Click "Month"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Month\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[@class=\"fc-content\"]";
  });

  await test.step(`Click "Month"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][contains(normalize-space(),\"Month\")]").nth(0).click();
  });

  await test.step(`Click "Week"`, async () => {
    await page.locator(RBTN_WEEK).nth(0).click();
  });

  await test.step(`Click "Today"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Today\"]").nth(0).click();
  });

  await test.step(`Click "Week"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][contains(normalize-space(),\"Week\")]").nth(0).click();
  });

  await test.step(`Click "Day"`, async () => {
    await page.locator(RBTN_DAY).nth(0).click();
  });

  await test.step(`Click "Day"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(normalize-space(),\"Day\")]").nth(0).click();
  });

  await test.step(`Click "List"`, async () => {
    await page.locator(RBTN_LIST).nth(0).click();
  });

  await test.step(`Hover "End Date All Future"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][contains(normalize-space(),\"End Date All Future\")]").nth(0).hover();
  });

  await test.step(`Hover "Event Status Registration Not Open, Reg…"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Event Status Registration Not Open, Registr... (2 Total) (empty)\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//tr//td//span[@class=\"sub-info ng-binding\"]").nth(0).hover();
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Hover "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(1).hover();
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//tbody//tr//td//span[@class=\"sub-info ng-binding\"]";
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@title=\"Reset This Filter\"]").nth(0).click();
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tbody//tr[@class=\"event ng-scope\"]//a[contains(@class,\"event-name\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify element visible`, async () => {
    await expect(page.locator("//h2[contains(@class,\"title\")]").nth(0)).toBeVisible();
  });

});
