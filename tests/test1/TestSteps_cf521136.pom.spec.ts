// TC: TC63487
// Research Tools - Add Filters - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Research Tools - Add Filters - Student", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Interview Questions" }).hover();
  await page.getByRole('link', { name: "Research Tools" }).click();
  await page.getByRole('link', { name: "Offer Trends" }).hover();
  await page.getByRole('link', { name: "Career Trends" }).click();
  await page.getByRole('heading', { name: "Career Trends" }).hover();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.getByRole('button', { name: "Military Service" }).hover();
  await page.getByPlaceholder("Search filters").fill("Detailed Industry");
  await page.getByRole('button', { name: "Detailed Industry" }).click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").hover();
  await page.getByPlaceholder("Search Detailed Industry filter options").fill("Engineering");
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Career Trends" }).click();
  await page.locator("span.selected-filter__toggle-chevron>i.fa.fa-caret-down").nth(5).click();
  await page.locator("span.selected-filter__toggle-chevron>i.fa.fa-caret-down").nth(5).click();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.getByPlaceholder("Search filters").fill("Industr");
  await page.getByRole('button', { name: "Detailed Industry" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Career Trends" }).click();
  await page.locator("tt-display-selected-filter-default.ng-isolate-scope>span.has-filter-value.ng-binding").nth(5).hover();
  await page.locator("//DIV[normalize-space() = \"Detailed Industry Accounting - Accounting (empty)\"]").nth(1).hover();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.getByPlaceholder("Search filters").fill("Industry");
  await page.getByRole('button', { name: "Detailed Industry" }).click();
  await page.getByPlaceholder("Search Detailed Industry filter options").fill("Consulting");
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Career Trends" }).click();
  await page.locator("tt-display-selected-filter-default.ng-isolate-scope>span.has-filter-value.ng-binding").nth(5).hover();
});
