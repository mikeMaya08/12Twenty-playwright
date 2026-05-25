// TC: TC62240
// 12TE Candidate Search - Analytics - Verify data is displayed

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { USER_ACCOUNT_NAME } from '@config/selectors';

test("12TE Candidate Search - Analytics - Verify data is displayed - TC62240", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://employer.qa-12twenty.com/hire', {timeout: 90000});
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

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).click();
  });

  await test.step(`Hover "Candidates"`, async () => {
    await page.locator("//A[contains(text(),\"Candidates\")]").nth(0).hover();
  });

  await test.step(`Hover "Partnership Requests"`, async () => {
    await page.locator("//A[contains(text(),\"Partnership Requests\")]").nth(0).hover();
  });

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]//following::li[contains(@class,\"side-nav-sub-menu-item\")]//A[contains(text(),\"Analytics\")]").nth(0).hover();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]//following::li[contains(@class,\"side-nav-sub-menu-item\")]//A[contains(text(),\"Analytics\")]").nth(0).click();
  });

  await test.step(`Hover "Candidate Search Analytics"`, async () => {
    await page.locator("//H1[contains(text(),\"Candidate Search Analytics\")]").nth(0).hover();
  });

  await test.step(`Hover "Unlocks by User"`, async () => {
    await page.locator("//H3[normalize-space() = \"Unlocks by User\"]").nth(0).hover();
  });

  await test.step(`Hover "Sent Messages"`, async () => {
    await page.locator("//H3[normalize-space() = \"Sent Messages\"]").nth(0).hover();
  });

  await test.step(`Hover "Sent Messages by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Sent Messages by School\"]").nth(0).hover();
  });

  await test.step(`Hover "Opened Messages"`, async () => {
    await page.locator("//H3[normalize-space() = \"Opened Messages\"]").nth(0).hover();
  });

  await test.step(`Hover "Opened Messages by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Opened Messages by School\"]").nth(0).hover();
  });

  await test.step(`Hover "Message Clicks"`, async () => {
    await page.locator("//H3[normalize-space() = \"Message Clicks\"]").nth(0).hover();
  });

  await test.step(`Hover "Message Clicks by School"`, async () => {
    await page.locator("//H3[normalize-space() = \"Message Clicks by School\"]").nth(0).hover();
  });

});
