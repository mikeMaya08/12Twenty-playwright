// TC: TC_A83041
// Linkedin Test

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Linkedin Test", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-law.admin.qa-12twenty.com/dashboard', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@law.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.locator("//SPAN[normalize-space() = \"e2e Test Admin\"]").hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Linkedin Test Student 1" }).click();
  await page.getByRole('link', { name: "Home" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.locator("dl.dl-horizontal>dd.ng-scope").nth(28).click();
  await page.locator("button.btn.dropdown-toggle.ng-binding.btn-icon>span.glyphicon.glyphicon-option-vertical.ng-scope").click();
  await page.getByRole('link', { name: "Login As" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-law.qa-12twenty.com/on-login?returnUrl=%2Fdashboard');
  await page.locator("//DIV[normalize-space() = \"Please enter your LinkedIn profile URL. Recommended\"]").click();
  await page.getByPlaceholder("LinkedIn URL").click();
  await page.getByPlaceholder("LinkedIn URL").click();
  await page.getByPlaceholder("LinkedIn URL").fill("https://www.linkedin.com/in/jane-doe-639957145");
  await page.locator("//DIV[normalize-space() = \"LinkedIn URL* *Required\"]").nth(3).click();
  await page.getByRole('button', { name: "Save & Continue" }).click();
  await page.locator('input[type="radio"]').click();
  await page.getByRole('button', { name: "Save & Continue" }).click();
  await page.getByRole('button', { name: "Continue" }).click();
  await page.getByRole('button', { name: "Continue" }).click();
  await page.locator("div.uploaded-image-cmp.uploaded-image-person>img.uploaded-image.ng-scope.ng-isolate-scope").click();
  await page.getByRole('button', { name: "Continue" }).click();
  await page.getByRole('button', { name: "Select Category" }).click();
  await page.getByRole('link', { name: "Post JD" }).click();
  await page.locator("BUTTON[type='button']").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//SPAN[normalize-space() = \"*\"]").nth(3).click();
  await page.locator("//LABEL[normalize-space() = \"End Date*\"]").click();
  await page.getByPlaceholder("MM/DD/YYYY").hover();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('button', { name: "Save & Continue" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('link', { name: "Home" }).click();
  await page.locator("SPAN[id='social-networks']").click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.locator("dl.dl-horizontal>dd.ng-scope").nth(23).click();
  await page.getByRole('link', { name: "Home" }).click();
  await page.locator("//DIV[normalize-space() = \"HR Manager ACME 01/01/2014 Offer Accepted At Graduation SHARED\"]").nth(3).click();
  await page.locator("button.btn.dropdown-toggle.ng-binding.btn-icon>span.glyphicon.glyphicon-option-vertical.ng-scope").nth(1).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('button', { name: "Delete Entry" }).click();
  await page.locator("//DIV[normalize-space() = \"Post JD No information reported Add Experience or Status\"]").nth(1).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.locator("//B[normalize-space() = \"log out\"]").click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-law.admin.qa-12twenty.com/students/540016054867507?tab=profile');
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("//DIV[normalize-space() = \"LinkedIn URL *Required\"]").nth(2).click();
  await page.getByPlaceholder("LinkedIn URL").click();
  await page.getByPlaceholder("LinkedIn URL").fill("null");
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("dl.dl-horizontal>dd.ng-scope").nth(16).click();
});
