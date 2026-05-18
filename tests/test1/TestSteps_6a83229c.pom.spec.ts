// TC: TC65399
// Student - Audit log updates - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Student - Audit log updates - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.locator("div.results-view-options>button.btn.selected").click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Test Student #0002");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Test Student #002" }).click();
  await page.getByRole('heading', { name: "Test Student #002" }).hover();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.locator("dd.ng-scope>span.ng-binding.ng-scope").nth(1).hover();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("h3.modal-title>span.ng-binding.ng-scope").nth(1).hover();
  await page.locator("//LABEL[normalize-space() = \"Middle Name\"]").hover();
  await page.getByPlaceholder("Middle Name").fill("Test Student First Name");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await expect(page.locator("dd.ng-scope>span.ng-binding.ng-scope").nth(2)).toHaveText("Test Student First Name");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Add Note" }).hover();
  await page.getByRole('link', { name: "Flag User" }).hover();
  await page.getByRole('link', { name: "Login As" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).click();
  await page.locator("//td//DIV[normalize-space() = \"e2e Test Admin\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Student - Update Student\"]").hover();
  await page.locator("button.close>span").click();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("//LABEL[contains(normalize-space(),\"Middle Name\")]").hover();
  await page.getByPlaceholder("Middle Name").fill("");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(8000);
  selector = MK.onSetGV(`//SPAN[contains(text(),"Test Student First Name")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
