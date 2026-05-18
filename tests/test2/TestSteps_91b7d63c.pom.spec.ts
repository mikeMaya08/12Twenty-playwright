// TC: TC_A79158
// Analytics - Job Postings - Verify page load and filters

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Analytics - Job Postings - Verify page load and filters", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(e2eCampusWideAdminURL, { timeout: 90000 });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.locator("//a[normalize-space()=\"Job Listings & Interviews\"]//following::button[@aria-label=\"Expand Job Listings & Interviews submenu\"]").click();
  await page.getByRole('link', { name: "Analytics" }).click();
  await page.getByRole('heading', { name: "Job Posting Analytics" }).hover();
  await page.locator("div.results-header-right.ng-scope>select.ng-pristine.ng-untouched.ng-valid.ng-not-empty").click();
  await page.keyboard.press("Last 30 ");
  await page.getByRole('button', { name: "Type of Job (empty)" }).click();
  await page.locator("//LABEL[normalize-space() = \"Full-Time Job\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Full-Time Job\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Part-Time Job\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Part-Time Job\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Internship (During School)\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Internship (During School)\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Type of Job\"]").click();
  await page.getByRole('link', { name: "Show All" }).click();
  await page.locator("//*[normalize-space() = \"Interview Job Postings by Industry\"]").hover();
  await page.getByRole('heading', { name: "Interview Job Postings by Industry" }).hover();
  await page.locator("//SPAN[normalize-space() = \"More\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Construction & Manufacturing - Construct... Moreion, Buildings Less\"]").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"Construction & Manufacturing - Manufactu... Morering, Consumer Products (Food, Household, etc.) Less\"]").nth(1).hover();
  await page.locator("td.ant-table-cell.drag-visible.column-center.ant-table-cell-row-hover>div.ant-row.css-eqeg24").click();
  await page.locator("//h3[normalize-space()=\"Interview Job Postings by Industry\"]/following::a[normalize-space() = \"Show All\"]").click();
  await page.locator("//SPAN[contains(normalize-space(),\"Consumer Products/Trade - Apparel/Textil... Morees Less\")]").hover();
  await page.getByRole('heading', { name: "47 Steps" }).click();
  await page.locator("//SPAN[contains(normalize-space(),\"Consumer Products/Trade - Apparel/Textil... Morees Less\")]").hover();
  await page.locator("//SPAN[normalize-space() = \"×\"]").nth(2).click();
  await page.waitForTimeout(2000);
});
