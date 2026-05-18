// TC: TC76012
// Business site - Slots creation

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Business site - Slots creation", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/login', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  const adminUserLoadTestingIndex = (context.index + 1 || 1) + Number(repeatEachOffset);
  adminUserLoadTesting = `admin-${adminUserLoadTestingIndex}@e2e-tests-business.com`;
  snippetLog(adminUserLoadTestingIndex);
  snippetLog(context.index);
  await page.getByPlaceholder("Email Address").fill("admin-1@e2e-tests-business.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('link', { name: "OCI and Job Listings" }).click();
  await page.getByRole('link', { name: "Command Center" }).click();
  const nowUtc = new Date();
  nowUtc.setUTCHours(hour, minutes, 0, 0); // time 18:00:00.000 UTC
  const utcString = nowUtc.toISOString();
  snippetLog(`StartTime: ${utcString}`);
  const response = await page.request.post('https://e2e-tests-business.admin.qa-12twenty.com/api/internal/virtual-meetings/load-test-setup', {
  data: {
  StartTime: utcString
  },
  headers: {
  'Content-Type': 'application/json',
  }
  });
  try {
  const responseBody = await response.json();
  snippetLog(`Response JSON: ${JSON.stringify(responseBody)}`);
  } catch (e) {
  const responseText = await response.text();
  snippetLog(`Response Text: ${responseText}`);
  }
  await page.waitForTimeout(17000);
  await page.reload();
  await page.getByRole('link', { name: "Upcoming (2,880)" }).click();
});
