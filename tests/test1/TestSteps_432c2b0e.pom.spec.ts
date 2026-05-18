// TC: TC58233
// Students &amp; Alumni - Add new flag to a student - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students &amp; Alumni - Add new flag to a student - Admin", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/Login', { timeout: 90000 });
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
  await page.getByRole('link', { name: "Students & Alumni" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("e2e ");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "e2e Test Student" }).click();
  await page.getByRole('heading', { name: "e2e Test Student" }).hover();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Add Note" }).hover();
  await page.getByRole('link', { name: "Flag User" }).hover();
  await page.getByRole('link', { name: "Login As" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).hover();
  await page.getByRole('link', { name: "Flag User" }).click();
  await page.getByRole('heading', { name: "Flag e2e Test Student" }).hover();
  await page.getByPlaceholder("Flag Note").fill("Behaviour");
  await page.getByRole('button', { name: "Flag User" }).click();
  await page.locator("div.auto-close>span").hover();
  await page.locator("//SPAN[@title='Behaviour'][normalize-space() = \"FLAGGED\"]").hover();
  await page.locator("//SPAN[@title='Behaviour'][normalize-space() = \"FLAGGED\"]").click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Remove Flag" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.auto-close>span").hover();
});
