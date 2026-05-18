// TC: TC58916
// Students &amp; Alumni Directory- Profile - Update and Clear Alternate Email Address - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students &amp; Alumni Directory- Profile - Update and Clear Alternate Email Address - Student", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-law.qa-12twenty.com', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@law.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(3000);
  await page.waitForLoadState('load');
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: "Recommended Job Listings" }).hover();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "e2e Test Student" }).hover();
  await page.locator("span.sub-header.ng-scope>span.ng-binding.ng-scope").hover();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByPlaceholder("Non-School Email Address").fill("qatest@test.com");
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByPlaceholder("Non-School Email Address").fill("");
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(9).hover();
});
