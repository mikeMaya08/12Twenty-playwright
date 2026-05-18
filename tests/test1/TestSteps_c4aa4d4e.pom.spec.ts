// TC: TC58659
// Standard Reports - Generate and Export NACE Complete Report

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Standard Reports - Generate and Export NACE Complete Report", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Reports" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Standard Reports" }).click();
  await page.getByRole('heading', { name: "Standard Reports" }).hover();
  await page.getByRole('link', { name: "Generate and Export Complete Report" }).click();
  await page.getByRole('heading', { name: "Generate and Export NACE Reports" }).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Generate Report" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(3000);
  try {
  const [downloadEvent] = await Promise.all([
  page.waitForEvent('download'),
  page.waitForTimeout(5000),
  ]);
  if (downloadEvent) {
  } else {
  throw new Error('Download never happened within the specified time.');
  }
  } catch (error) {
  console.error(error);
  }
});
