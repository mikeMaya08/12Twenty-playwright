// TC: TC_A79158
// Analytics - Job Postings - Verify page load and filters

import { test, expect } from '@playwright/test';
import { loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_HOME, SPAN_CLOSE_X } from '@config/selectors';

test("Analytics - Job Postings - Verify page load and filters - TC_A79158", async ({ page }) => {
  await test.step(`Setup & Login`, async () => {
    await page.goto(URLS.campusWideAdmin, { timeout: 90000 });
    await loginAsAdmin(page);
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator("//a[normalize-space()=\"Job Listings & Interviews\"]//following::button[@aria-label=\"Expand Job Listings & Interviews submenu\"]").nth(0).click();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(2).click();
  });

  await test.step(`Hover "Job Posting Analytics"`, async () => {
    await page.locator("//H1[normalize-space() = \"Job Posting Analytics\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT").nth(0).click();
  });

  await test.step(`Type "Last 30"`, async () => {
    await page.keyboard.type("Last 30 ");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Type of Job (empty)\"]").nth(0).click();
  });

  await test.step(`Click "Full-Time Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Full-Time Job\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Full-Time Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Full-Time Job\"]").nth(0).click();
  });

  await test.step(`Click "Part-Time Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Part-Time Job\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Part-Time Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Part-Time Job\"]").nth(0).click();
  });

  await test.step(`Click "Internship (During School)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Internship (During School)\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Internship (During School)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Internship (During School)\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Click "Show All"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Show All\"]").nth(0).click();
  });

  await test.step(`Hover "Interview Job Postings by Industry"`, async () => {
    await page.locator("//*[normalize-space() = \"Interview Job Postings by Industry\"]").nth(0).hover();
  });

  await test.step(`Hover "Interview Job Postings by Industry"`, async () => {
    await page.locator("//H3[contains(normalize-space(),\"Interview Job Postings by Industry\")]").nth(0).hover();
  });

  await test.step(`Click "More"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"More\"]").nth(0).click();
  });

  await test.step(`Hover "Construction & Manufacturing - Construc…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Construction & Manufacturing - Construct... Moreion, Buildings Less\"]").nth(1).hover();
  });

  await test.step(`Hover "Construction & Manufacturing - Manufact…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Construction & Manufacturing - Manufactu... Morering, Consumer Products (Food, Household, etc.) Less\"]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//h3[@class=\"modal-title\"]//following-sibling::button").nth(1).click();
  });

  await test.step(`Click "Interview Job Postings by Industry"`, async () => {
    await page.locator("//h3[normalize-space()=\"Interview Job Postings by Industry\"]/following::a[normalize-space() = \"Show All\"]").nth(0).click();
  });

  await test.step(`Hover "Consumer Products/Trade - Apparel/Texti…"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Consumer Products/Trade - Apparel/Textil... Morees Less\")]").nth(0).hover();
  });

  await test.step(`Click "Consumer Products/Trade - Apparel/Texti…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Consumer Products/Trade - Apparel/Textil... Morees Less\"]//*[normalize-space()=\"More\"]").nth(0).click();
  });

  await test.step(`Hover "Consumer Products/Trade - Apparel/Texti…"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Consumer Products/Trade - Apparel/Textil... Morees Less\")]").nth(0).hover();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(2).click();
    await page.waitForTimeout(2000);
  });

});
