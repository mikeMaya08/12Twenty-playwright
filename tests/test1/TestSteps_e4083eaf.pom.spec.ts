// TC: TC63793
// Contacts - Add Filter - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Contacts - Add Filter - Student", async ({ page, context }) => {
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
  await page.setViewportSize({ width: 1920, height: 1080 });
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
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.reload();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByPlaceholder("Search filters").fill("Email Address");
  await page.getByRole('button', { name: "Email Address" }).click();
  await page.locator("//SPAN[contains(normalize-space(),\"Email Address\")][contains(@class,\"selected-filter\")]").hover();
  await page.locator("div.selected-filter__actions>select.selected-filter__include.ng-pristine.ng-untouched.ng-valid").hover();
  await page.getByPlaceholder("Email Address").fill("contact-2@vm-test-company-1.com");
  await page.getByRole('heading', { name: "Contact Directory" }).click();
  await expect(page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope")).toHaveText("Test Contact 01-002");
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  await page.locator("//DIV[normalize-space() = \"Results: 1\"]").nth(2).hover();
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
});
