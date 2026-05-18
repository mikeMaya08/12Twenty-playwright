// TC: TC63116
// Employers - Admins add&#x2F;reset filters and results are displayed

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Admins add&#x2F;reset filters and results are displayed", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;
  const text = msg.text();
  const timestamp = new Date().toLocaleString();

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(e2eCampusWideAdminURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Employers" }).click();
  await page.reload();
  await page.waitForLoadState('load');
  await page.locator("tr>th.company-name").hover();
  await page.locator("tr>th.table-non-primary-col.center").hover();
  await page.locator("tr>th.table-non-primary-col.center").nth(1).hover();
  await page.locator("tr>th.table-non-primary-col").nth(2).hover();
  await page.locator("//SPAN[normalize-space() = \"Approval Status\"]").hover();
  await page.getByRole('button', { name: "Add Filter" }).hover();
  await page.reload();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByPlaceholder("Search filters").fill("12");
  await page.getByRole('button', { name: "12twenty ID" }).hover();
  await page.getByRole('button', { name: "Linked To 12Twenty Network Employer" }).hover();
  await page.getByRole('button', { name: "12twenty ID" }).click();
  await page.locator("//SPAN[contains(normalize-space(),\"12twenty ID\")][contains(@class,\"selected-filter\")]").hover();
  await page.getByPlaceholder("12twenty ID").fill("12");
  await page.getByRole('heading', { name: "Employer Directory" }).click();
  await page.locator("div.search-results.ng-scope>div.no-results").hover();
  await page.locator("button>i.far.fa-undo").click();
  await page.reload();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByPlaceholder("Search filters").fill("# of Employees");
  await page.getByRole('button', { name: "# of Employees" }).click();
  await page.waitForLoadState('load');
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Employer Directory" }).click();
  await page.locator("//SPAN[normalize-space() = \">10000\"]").nth(1).hover();
  const elements = await page.$$('//i[@class="fal fa-user-friends"]//ancestor::span');
  let allMatch = true;
  for (const element of elements) {
  const textContent = await element.textContent();
  if (textContent.trim() === '>10000') {
  } else {
  throw new Error(`Invalid element: "${textContent.trim()}"`);
  allMatch = false;
  }
  }
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.waitForLoadState('load');
});
