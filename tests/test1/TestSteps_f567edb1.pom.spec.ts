// TC: TC58964
// Employers - Directory Page UI elements are visible - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Directory Page UI elements are visible - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByPlaceholder("Company Name").fill("Apple");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Apple" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Activities" }).hover();
  await page.getByRole('link', { name: "Contacts" }).hover();
  await page.getByRole('link', { name: "Hires" }).hover();
  await page.getByRole('link', { name: "Locations" }).hover();
  await page.getByRole('link', { name: "Events" }).hover();
  await page.getByRole('link', { name: "OCI and Job Listings" }).hover();
  await page.getByRole('link', { name: "Experiences" }).hover();
  await page.locator("//UIB-TAB-HEADING[normalize-space()=\"Job IQ\"]").hover();
  await page.getByRole('heading', { name: "Overview" }).hover();
  await page.getByRole('heading', { name: "Job Postings" }).hover();
  await page.getByRole('heading', { name: "Events" }).hover();
  await page.getByRole('heading', { name: "Information" }).hover();
});
