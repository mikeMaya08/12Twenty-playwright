// TC: TC65367
// Email Template-Create an email template and delete it-Employer(non admin)

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Email Template-Create an email template and delete it-Employer(non admin)", async ({ page, context }) => {
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

  await page.goto(employerQA, { timeout: 90000 });
  await page.waitForTimeout(2000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Email Address").fill("e2e.employeruser.subscription.nonadmin@walmart.com");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.waitForTimeout(2000);
  await page.locator("button.btn.btn-school.submit-login-form>span").click();
  await page.getByRole('link', { name: "Candidate Search" }).hover();
  await expect(page.locator("div.nav-user-account-name-and-company>span.nav-user-account-company")).toHaveText("Walmart");
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Email Activity" }).click();
  await page.getByRole('link', { name: "Email Templates" }).click();
  await page.getByRole('heading', { name: "Email Templates" }).hover();
  await page.getByRole('button', { name: "Reset" }).click();
});
