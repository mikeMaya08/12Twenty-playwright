// TC: TC58570
// Contacts - Find an Approved Contact by Name - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Contacts - Find an Approved Contact by Name - Admin", async ({ page, context }) => {
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
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Contact Directory" }).hover();
  await page.locator("tt-display-selected-filter-default.ng-isolate-scope>span.has-filter-value.ng-binding").nth(1).hover();
  await page.getByPlaceholder("Contact Name or Email Address").fill("Gianna Allen");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.waitForLoadState('load');
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").hover();
  await expect(page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope")).toHaveText("Gianna Allen");
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").click();
});
