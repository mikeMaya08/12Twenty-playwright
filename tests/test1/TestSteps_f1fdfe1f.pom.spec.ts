// TC: TC64776
// OCI - Export Applicant Summary - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("OCI - Export Applicant Summary - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.waitForLoadState('load');
  await expect(page.getByRole('heading', { name: "Job Listings & Interviews" })).toHaveText("                    Job Listings & Interviews                                        ");
  await page.getByRole('link', { name: "OCI Management" }).click();
  await page.getByRole('heading', { name: "OCI Management" }).hover();
  await page.locator("tr>th.ng-binding").hover();
  await page.getByRole('link', { name: "Schedules Summary" }).hover();
  await page.getByRole('link', { name: "Applicants Summary" }).click();
  await page.waitForTimeout(3000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.admin.qa-12twenty.com/jobPostings#/jobPostings/dashboard/applicants-summary/');
  await page.waitForLoadState('load');
  await page.locator("span.ng-binding.ng-scope>label").hover();
  await page.locator("span.ng-binding.ng-scope>label").hover();
  await page.locator("span>label").nth(1).hover();
  await page.getByRole('link', { name: "Export Detailed Applicant Summary to CSV" }).hover();
  var [download] = await Promise.all([
  page.waitForEvent('download'),
  await page.click('//A[normalize-space() = "Export Detailed Applicant Summary to CSV"]', { force: true })
  ]);
  var filePath = await download.path();
  console.log(filePath);
  expect(fs.existsSync(filePath)).toBeTruthy();
  //size validation
  var fileSize = fs.statSync(filePath).size;
  console.log(fileSize);
  expect(fileSize).toBeGreaterThan(0);
});
