// TC: TC58961
// Manage Users - Impersonation - Announcements and homepage tiles are visible to students-Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Manage Users - Impersonation - Announcements and homepage tiles are visible to students-Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("e2e");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "e2e Test Student" }).hover();
  await page.getByRole('link', { name: "e2e Test Student" }).click();
  await page.getByRole('heading', { name: "e2e Test Student" }).hover();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Add Note" }).hover();
  await page.getByRole('link', { name: "Flag User" }).hover();
  await page.getByRole('link', { name: "Login As" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).hover();
  await page.getByRole('link', { name: "Login As" }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('heading', { name: "Announcements" }).hover();
  await page.getByRole('heading', { name: "My Calendar" }).hover();
  await page.getByRole('heading', { name: "Recommended Job Listings" }).hover();
  await page.getByRole('heading', { name: "Recommended Events" }).hover();
  await page.getByRole('heading', { name: "Outcomes" }).hover();
});
