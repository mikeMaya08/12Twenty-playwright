// TC: TC58479
// Employers - Delete a contact from an employer - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Delete a contact from an employer - Admin", async ({ page, context }) => {
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
  await page.getByPlaceholder("Company Name").fill("3M");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "3M" }).click();
  await page.getByRole('heading', { name: "3M" }).hover();
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.waitForTimeout(2000);
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Nishita Sunkara" }).hover();
  await page.getByRole('link', { name: "3M" }).hover();
  await page.locator("//DIV[normalize-space() = \"Manager\"]").hover();
  await page.getByRole('link', { name: "nishi@muukteam.testinator.com" }).hover();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Contact" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this contact? Please note that all meetings, notes, and tasks associated with this contact will be deleted also.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Delete Contact" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
});
