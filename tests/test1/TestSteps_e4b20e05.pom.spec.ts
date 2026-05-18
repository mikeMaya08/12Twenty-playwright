// TC: TC63720
// Students - Profile - Verify profile sections are displayed as expected

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Profile - Verify profile sections are displayed as expected", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-law.qa-12twenty.com/Login', { timeout: 90000 });
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
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Profile" }).click();
  await expect(page.getByRole('link', { name: "Home" })).toHaveText("Home");
  await expect(page.getByRole('link', { name: "Profile" })).toHaveText("Profile");
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "General" }).hover();
  await page.getByRole('heading', { name: "Contact Info" }).hover();
  await page.getByRole('heading', { name: "Outcome" }).hover();
  await page.getByRole('heading', { name: "Other" }).hover();
  await page.getByRole('heading', { name: "Pro Bono Pledge" }).hover();
});
