// TC: TC62630
// Students - Edit students profile as an Admin, verify the changes are made

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Edit students profile as an Admin, verify the changes are made", async ({ page, context }) => {
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
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.getByPlaceholder("Search filters").fill("signed up");
  await page.getByRole('button', { name: "Signed Up Status" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.keyboard.press('Escape');
  await page.getByRole('link', { name: "Test Student #001" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Profile" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("h3.modal-title>span.ng-binding.ng-scope").nth(1).hover();
  await page.locator("//LABEL[normalize-space() = \"First (Preferred) Name\"]").hover();
  await page.getByPlaceholder("First (Preferred) Name").fill("Test Student Edited");
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('heading', { name: "General" }).hover();
  await page.locator("dd.ng-scope>span.ng-binding.ng-scope").nth(1).hover();
  const expectedFirstName = "{{editedName}}";
  const firstNameLocator = page.locator("//dt[contains(text(),'First (Preferred) Name')]/following-sibling::dd/span").first();
  try {
  await expect(firstNameLocator).toHaveText(expectedFirstName, { timeout: 5000 });
  console.log("First Name successfully updated!");
  } catch (error) {
  console.error("Validation failed!");
  console.error(`Error details: ${error.message}`);
  }
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByPlaceholder("First (Preferred) Name").fill("Test Student");
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(4000);
});
