// TC: TC_A83053
// Mentorships - Admin Can Assign and Update Mentorship Programs

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Mentorships - Admin Can Assign and Update Mentorship Programs", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Stacey Davis");
  await page.getByRole('link', { name: "Stacey Davis" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Mentorships" }).hover();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByRole('button', { name: "Mentorship Program 1" }).click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.reload();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd")).toContainText("Mentorship Program 1");
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByRole('button', { name: "Mentorship Program 1" }).click();
  await page.locator("//LABEL[normalize-space() = \"Mentorship Program 1\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd")).not.toContainText("Mentorship Program 1");
});
