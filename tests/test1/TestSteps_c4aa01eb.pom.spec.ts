// TC: TC58658
// Reports - Open Site Usage Summary Report - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Reports - Open Site Usage Summary Report - Admin", async ({ page, context }) => {
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
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Reports" }).click();
  await page.getByRole('link', { name: "12twenty Reports" }).click();
  await page.getByRole('heading', { name: "12twenty Reports" }).hover();
  await page.waitForTimeout(3000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Site Usage Summary" }).click();
  await page.locator("//LABEL[normalize-space() = \"Graduation Class\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Graduation Term\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Assigned Adviser\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Degree Level\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Job Phase\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Work Authorization\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Desired Industry\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Include Rumor Jobs\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Included in Reporting\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Offer Timing\"]").hover();
  await page.locator("li.multi-select>label").nth(3).hover();
  await page.locator("li.multi-select>label").nth(4).hover();
  await page.locator("li.multi-select>label").nth(5).hover();
  await page.getByRole('heading', { name: "Site Usage Summary" }).hover();
  await page.locator("th>strong").nth(2).hover();
  await page.locator("th>strong").nth(3).hover();
  await page.locator("th>strong").nth(4).hover();
});
