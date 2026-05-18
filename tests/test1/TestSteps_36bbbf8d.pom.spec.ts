// TC: TC58325
// Home - Post a non-expired announcement for Admins - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Home - Post a non-expired announcement for Admins - Admin", async ({ page, context }) => {
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
  await page.getByRole('button', { name: "What would you like to announce, e2e?" }).click();
  await page.getByRole('heading', { name: "Select a user type" }).hover();
  await page.getByRole('button', { name: "Admins" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "New announcement to Admins" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Expiration*\"]").hover();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.day").nth(15).click();
  await page.getByPlaceholder("H:MMpm").fill("3:00pm");
  await page.locator("//LABEL[normalize-space() = \"Expiration*\"]").click();
  await page.locator("form.tt-form.form-horizontal.ng-pristine.ng-invalid.ng-invalid-required.ng-valid-pattern>div.form-group.ckeditor-container").click();
  await page.getByRole('button', { name: "Post" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.header-main>div.header-main-info").hover();
  await page.locator("div.rich-text-display.ng-binding>p").hover();
  await page.locator("div.header-main-info>span.announcement-create-user-name.ng-binding").hover();
  await page.getByRole('heading', { name: "37 Steps" }).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Pin" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.waitForLoadState('load');
  var elementLocator = page.locator('//P[contains(text(),"New announcement for Admins.")]');
  if (await elementLocator > 0) {
  throw new Error("Admin Announcement is present.");
  await expect(elementLocator).toBeVisible();
  } else {
  console.log("Admin Announcement was succesfully deleted.");
  }
});
