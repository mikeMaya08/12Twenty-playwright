// TC: TC62240
// 12TE Candidate Search - Analytics - Verify data is displayed

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE Candidate Search - Analytics - Verify data is displayed", async ({ page, context }) => {
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

  await page.goto('https://employer.qa-12twenty.com/hire', { timeout: 90000 });
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
  await page.getByRole('link', { name: "Candidates" }).hover();
  await page.getByRole('link', { name: "Partnership Requests" }).hover();
  await page.getByRole('link', { name: "Analytics" }).hover();
  await page.getByRole('link', { name: "Analytics" }).click();
  await page.getByRole('heading', { name: "Candidate Search Analytics" }).hover();
  await page.getByRole('heading', { name: "Unlocks by User" }).hover();
  await page.getByRole('heading', { name: "Sent Messages" }).hover();
  await page.getByRole('heading', { name: "Sent Messages by School" }).hover();
  await page.getByRole('heading', { name: "Opened Messages" }).hover();
  await page.getByRole('heading', { name: "Opened Messages by School" }).hover();
  await page.getByRole('heading', { name: "Message Clicks" }).hover();
  await page.getByRole('heading', { name: "Message Clicks by School" }).hover();
});
