// TC: TC63507
// BLOCKED---Candidate_Unlock_Candidate_Analytics UI elements-Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import {
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SEARCH_LOWER,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("BLOCKED---Candidate_Unlock_Candidate_Analytics UI elements-Employer - TC63507", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://employer.qa-12twenty.com/#', {timeout: 90000});
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
    await page.waitForLoadState('load');
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

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//H1[contains(text(),\"Candidate Search\")]").nth(0).hover();
  });

  await test.step(`Click "Granted Access"`, async () => {
    await page.locator("//A[contains(text(),\"Granted Access\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "Rochester"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Resume Keyword Search']").nth(0).fill("Rochester");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH_LOWER).nth(0).click();
  });

  await test.step(`Verify "Rochester - NY"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Rochester - NY\")]").nth(0)).toHaveText("Rochester - NY");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Unlock"`, async () => {
    await page.locator("//A[@role='menuitem'][contains(text(),\"Unlock\")]").nth(0).hover();
  });

  await test.step(`Click "Unlock"`, async () => {
    await page.locator("//A[@role='menuitem'][contains(text(),\"Unlock\")]").nth(0).click();
  });

  await test.step(`Hover "More Credits Required"`, async () => {
    await page.locator("//H3[contains(text(),\"More Credits Required\")]").nth(0).hover();
  });

  await test.step(`Hover "You do not have enough credits to unlock"`, async () => {
    await page.locator("//DIV[contains(text(),\"You do not have enough credits to unlock\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

});
