// TC: TC61347
// Contacts - Students can search for a contact and open profile

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Contacts - Students can search for a contact and open profile", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.reload();
  await page.getByPlaceholder("Contact Name or Email Address").fill("Test Contact 01-002");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("tr>th").hover();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  await page.locator("tr>th.table-non-primary-col").hover();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").click();
  await page.getByRole('heading', { name: "Test Contact 1-2" }).hover();
  await page.getByRole('link', { name: "Profile" }).hover();
  await page.getByRole('link', { name: "contact-2@vm-test-company-1.com" }).hover();
});
