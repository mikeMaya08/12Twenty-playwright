// TC: TC63483
// Students - Engagement Directory - Verify students are displayed and education short summary is shown

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Engagement Directory - Verify students are displayed and education short summary is shown", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.results-view-options>button.btn").nth(1).click();
  await page.locator("div.results-view-options>button.btn").click();
  await page.locator("tt-student-summary-card.ng-scope>div.tt-card.floating-card.ng-scope").hover();
  await page.reload();
  await page.getByPlaceholder("Search by Name").fill("Brandon Williams");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Brandon Williams" }).click();
  await page.waitForLoadState('load');
  await expect(page.getByRole('heading', { name: "Education" })).toHaveText("Education");
  await page.getByRole('heading', { name: "Bachelor's PRIMARY" }).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(1).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(2).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(3).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(4).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.results-view-options>button.btn").nth(1).click();
  await page.locator("tt-student-summary-card.ng-scope.ng-isolate-scope>div.tt-card.floating-card.ng-scope").hover();
  await page.getByPlaceholder("Search by Name").fill("Brandon Williams");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Brandon Williams" }).click();
  await expect(page.getByRole('heading', { name: "Education" })).toHaveText("Education");
  await page.getByRole('heading', { name: "Bachelor's PRIMARY" }).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(1).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(2).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(3).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(4).hover();
  await page.getByRole('link', { name: "Profile" }).click();
});
