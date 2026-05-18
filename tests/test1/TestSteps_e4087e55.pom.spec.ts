// TC: TC63794
// Students - Admin filters for student and test page views

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Admin filters for student and test page views", async ({ page, context }) => {
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
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.locator("div.results-view-options>button.btn").nth(1).click();
  await page.reload();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.getByPlaceholder("Search filters").fill("Matt");
  await page.getByRole('heading', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.locator("div.results-view-options>button.btn").nth(1).click();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.locator("li.ng-scope>span.filter-group.ng-binding").nth(1).hover();
  await page.getByRole('button', { name: "Major/Academic Program" }).hover();
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByRole('button', { name: "What is the name of the fellowship program?" }).hover();
  await page.getByPlaceholder("Search filters").fill("Program");
  await page.getByRole('button', { name: "Major/Academic Program" }).click();
  await page.locator("//LABEL[normalize-space() = \"Major 2\"]").click();
  await page.getByRole('heading', { name: "Students & Alumni" }).click();
  await page.locator("div.results-header-right>div.num-results.ng-binding").hover();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.locator("div.results-view-options>button.btn").nth(1).click();
  await page.getByRole('link', { name: "Test Student #001" }).click();
  await page.getByRole('heading', { name: "Test Student #001" }).hover();
  await page.locator("span.sub-header.ng-scope>span.ng-binding.ng-scope").hover();
  await page.locator("tt-student-shared-badge.ng-scope>span.badge.ng-binding.ng-scope").hover();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "General" }).hover();
  await page.getByRole('heading', { name: "Account Settings" }).hover();
  await page.getByRole('heading', { name: "Contact Info" }).hover();
  await page.getByRole('heading', { name: "Activity" }).hover();
  await page.getByRole('heading', { name: "Outcome" }).hover();
  await page.getByRole('heading', { name: "Other" }).hover();
  await page.getByRole('link', { name: "Home" }).click();
  await page.getByRole('heading', { name: "Announcements" }).hover();
});
