// TC: TC63507
// BLOCKED---Candidate_Unlock_Candidate_Analytics UI elements-Employer

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("BLOCKED---Candidate_Unlock_Candidate_Analytics UI elements-Employer", async ({ page, context }) => {
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

  await page.goto('https://employer.qa-12twenty.com/#', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Email Address").fill("e2e.employeruser.subscription.admin@walmart.com");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.waitForTimeout(2000);
  await page.locator("button.btn.btn-school.submit-login-form>span").click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").hover();
  await page.getByRole('link', { name: "Candidate Search" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Candidates" }).hover();
  await page.getByRole('link', { name: "Partnership Requests" }).hover();
  await page.getByRole('link', { name: "Analytics" }).hover();
  await page.getByRole('heading', { name: "Candidate Search" }).hover();
  await page.getByRole('link', { name: "Granted Access" }).click();
  await page.waitForLoadState('load');
  await page.getByPlaceholder("Resume Keyword Search").fill("Rochester");
  await page.locator("button.btn.btn-default.filters-primary-search-button.ng-scope>i.fa.fa-search").click();
  await expect(page.locator("span.sub-info>span.ng-binding.ng-scope")).toHaveText("Rochester - NY");
  await page.locator("BUTTON[type='button']").nth(13).click();
  await page.getByRole('link', { name: "Unlock (1)" }).hover();
  await page.getByRole('link', { name: "Unlock (1)" }).click();
  await page.getByRole('heading', { name: "More Credits Required" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
});
