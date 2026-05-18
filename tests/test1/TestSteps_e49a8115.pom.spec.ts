// TC: TC63691
// Students &amp; Alumni - Admin Email Student from Profile

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students &amp; Alumni - Admin Email Student from Profile", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('heading', { name: "Students & Alumni" }).hover();
  await page.reload();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByPlaceholder("Search filters").fill("Signed Up");
  await page.getByRole('button', { name: "Signed Up Status" }).hover();
  await page.getByRole('button', { name: "Signed Up Status" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Test Student #001" }).click();
  await page.getByRole('heading', { name: "Test Student #001" }).hover();
  await page.getByRole('link', { name: "Send Email" }).hover();
  await page.getByRole('link', { name: "Send Email" }).click();
  await page.getByRole('heading', { name: "Send email to Test Student #001" }).hover();
  await page.locator("label.ng-scope>span.ng-binding.ng-scope").hover();
  await page.locator("div.form-group.ng-scope>label.control-label").nth(1).hover();
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.locator("INPUT[type='text'][name='subject']").fill("Welcome (Muuktest TC)");
  await page.locator("div.form-group>label.control-label").nth(3).hover();
  await page.locator("SPAN[role='presentation']").nth(1).click();
  await page.getByRole('button', { name: "Send" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('link', { name: "More" }).click();
  await page.getByRole('link', { name: "Emails" }).click();
  await expect(page.locator("//*[normalize-space() = \"Delivered\"]")).toHaveText("Delivered");
  await page.getByRole('link', { name: "Welcome" }).click();
  await expect(page.locator("td>p")).toHaveText("Testing sending Emails (Muuktest Automated Test Case)");
  await page.getByRole('link', { name: "Ok" }).click();
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.locator("//SPAN[normalize-space() = \"Email Activity\"]").click();
  await page.getByRole('heading', { name: "Email Activity" }).hover();
  await page.getByRole('link', { name: "Welcome (Muuktest TC)" }).click();
  await page.getByRole('heading', { name: "Welcome (Muuktest TC)" }).hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding").hover();
  await page.locator("//span[contains(normalize-space(),\"student-1@e2e-tests-campuswide.com\")]").hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(2).hover();
  await page.locator("//P[normalize-space() = \"Testing sending Emails (Muuktest Automated Test Case)\"]").hover();
  await page.getByRole('link', { name: "Back to List" }).click();
  await page.getByRole('link', { name: "Scheduled" }).click();
  await page.getByRole('link', { name: "Bounced Recipients" }).click();
  await page.getByRole('heading', { name: "Bounced Recipients" }).hover();
  await page.locator("//P[normalize-space() = \"This page lists students and contacts whose email addresses have permanently bounced due to issues like invalid addresses, non-existent domains, or blocks by the recipient\\'s email server. If you believe an email address is still valid, you can remove it from the bounce list.\"]").hover();
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.getByRole('link', { name: "Students" }).click();
});
