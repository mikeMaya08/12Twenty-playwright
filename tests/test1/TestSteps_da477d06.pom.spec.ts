// TC: TC_A77940
// Calendar Sync - Add&#x2F;Revoke Google and Microsoft Accounts - Part 1

import { test, expect } from '@playwright/test';
import * as OTPAuth from 'otpauth';
import * as fs from 'fs';

test("Calendar Sync - Add&#x2F;Revoke Google and Microsoft Accounts - Part 1", async ({ page, context }) => {
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
  await page.locator("//SPAN[normalize-space() = \"e2e Test Student\"]").click();
  await page.getByRole('link', { name: "Account Settings" }).click();
  await page.getByRole('heading', { name: "Account Settings" }).hover();
  await page.getByRole('link', { name: "General" }).click();
  await page.getByRole('link', { name: "Security" }).click();
  await page.getByRole('link', { name: "Integrations" }).click();
  await page.getByRole('heading', { name: "Calendar Sync" }).hover();
  await page.locator("dl.dl-horizontal>dt").nth(4).hover();
  await page.getByRole('button', { name: "login-microsoft Microsoft" }).click();
  await page.waitForTimeout(2000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.locator("//DIV[@role='heading'][normalize-space() = \"Sign in\"]").hover();
  await page.getByPlaceholder("Email, phone, or Skype").fill("veronica.autmtn@outlook.com");
  await page.locator("INPUT[type='submit'][id='idSIButton9']").click();
  await page.getByRole('heading', { name: "Enter your password" }).hover();
  await page.locator('input[type="password"]').fill("MuukTest1234!");
  await page.getByRole('button', { name: "Next" }).click();
  await page.locator("//*[normalize-space()=\"Verify\" or normalize-space()=\"Next\"]").click();
  await page.getByRole('button', { name: "Yes" }).click();
});
