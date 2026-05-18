// TC: TC_A81778
// API Documentation - Confirm API endpoints page opens and data is displayed

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("API Documentation - Confirm API endpoints page opens and data is displayed", async ({ page, context }) => {
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
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/help/', { timeout: 90000 });
  await page.getByRole('heading', { name: "12twenty API V2 Documentation" }).hover();
  await page.getByRole('heading', { name: "12twenty API V2 Documentation" }).click();
  await page.getByRole('heading', { name: "ApplicationDocuments" }).click();
  await page.getByRole('heading', { name: "Create an application document" }).click();
  await page.getByRole('heading', { name: "Delete an application document" }).click();
  await page.getByRole('heading', { name: "Download an application document" }).click();
  await page.getByRole('heading', { name: "Get an application document" }).click();
  await page.locator("//SPAN[normalize-space() = \"Query application documents​#Copy link\"]").click();
  await page.getByRole('heading', { name: "Update an application document" }).click();
  await page.getByRole('heading', { name: "AppointmentBlocks (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Appointments (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Attributes (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Cities (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Companies (Collapsed)" }).click();
  await page.getByRole('heading', { name: "CompanyTasks (Collapsed)" }).click();
  await page.getByRole('heading', { name: "ContactMeetings (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Contacts (Collapsed)" }).click();
  await page.getByRole('heading', { name: "ContactTasks (Collapsed)" }).click();
  await page.getByRole('heading', { name: "EventCompanyRegistrations (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Events (Collapsed)" }).click();
  await page.getByRole('heading', { name: "EventStudentRegistrations (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Experiences (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Files (Collapsed)" }).click();
  await page.getByRole('heading', { name: "JobPostingApplications (Collapsed)" }).click();
  await page.getByRole('heading', { name: "JobPostings (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Jobs (Collapsed)" }).click();
  await page.getByRole('heading', { name: "LookupOptions (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Lookups (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Notes (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Ocis (Collapsed)" }).click();
  await page.getByRole('heading', { name: "OciSchedule (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Orders (Collapsed)" }).click();
  await page.getByRole('heading', { name: "ReportDistributionFile (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Students (Collapsed)" }).click();
  await page.getByRole('heading', { name: "Tasks (Collapsed)" }).click();
});
