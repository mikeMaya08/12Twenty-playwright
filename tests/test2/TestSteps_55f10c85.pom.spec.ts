// TC: TC_A84046
// Students – Job Preferences can be added and removed successfully

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students – Job Preferences can be added and removed successfully", async ({ page, context }) => {
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
  await page.getByRole('heading', { name: "Students & Alumni" }).hover();
  selector = MK.onSetGV(`//BUTTON[@type=\'button\'][normalize-space() = "Reset Filters"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('button', { name: "Reset Filters" }).click();
  }
  await page.getByRole('link', { name: "Test Student #0001" }).click();
  await page.getByRole('link', { name: "Home" }).click();
  await page.getByRole('heading', { name: "Job Preferences" }).hover();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("//LABEL[@id='PreferredConsolidatedIndustry1Id-label'][normalize-space() = \"Preferred Industry\"]").hover();
  await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").click();
  await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").hover();
  await page.locator("//LABEL[@title='Construction & Manufacturing'][normalize-space() = \"Construction & Manufacturing\"]").click();
  await page.locator("//SPAN[normalize-space() = \"2. Construction & Manufacturing\"]").hover();
  await page.locator("//LABEL[@title='Consulting'][normalize-space() = \"Consulting\"]").click();
  await page.locator("//SPAN[normalize-space() = \"3. Consulting\"]").hover();
  await page.locator("//LABEL[@id='PreferredConsolidatedJobFunction1Id-label'][normalize-space() = \"Preferred Function\"]").hover();
  await page.locator("//LABEL[@title='Accounting'][normalize-space() = \"Accounting\"]").click();
  await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").hover();
  await page.locator("//LABEL[@title='Architecture and Engineering'][normalize-space() = \"Architecture and Engineering\"]").click();
  await page.locator("//SPAN[normalize-space() = \"2. Architecture and Engineering\"]").hover();
  await page.locator("//LABEL[@title='Arts and Design'][normalize-space() = \"Arts and Design\"]").click();
  await page.locator("//SPAN[normalize-space() = \"3. Arts and Design\"]").hover();
  await page.locator("//LABEL[@id='PreferredCity1Id-label'][normalize-space() = \"Preferred City\"]").hover();
  await page.locator("NG-FORM[name='$ctrl.inputForm']").nth(2).click();
  await page.getByRole('link', { name: "Add Preferred City" }).click();
  await page.getByPlaceholder("Search Preferred City").fill("Grand Rapids - MI");
  await page.locator("//STRONG[normalize-space() = \"Grand Rapids - MI\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Preferred Country\"]").click();
  await page.getByRole('link', { name: "Add Preferred Country" }).click();
  await page.getByPlaceholder("Search Preferred Country").fill("United States (USA)");
  await page.locator("//DIV[normalize-space() = \"United States (USA)\"]").nth(2).click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").hover();
  await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"2. Construction & Manufacturing\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"3. Consulting\"]").hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"1. Accounting\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"2. Architecture and Engineering\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"3. Arts and Design\"]").hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(2).hover();
  await page.locator("//SPAN[normalize-space() = \"1. Grand Rapids - MI\"]").hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(3).hover();
  await page.locator("//SPAN[normalize-space() = \"1. United States (USA)\"]").hover();
  await page.getByRole('button', { name: "Edit" }).click();
  selector = MK.onSetGV(`//i[contains(@class,"remove-icon")]`, null);
  // Keep clicking remove icons until none are left
  const removeIcons = page.locator(selector);
  while (await removeIcons.count() > 0) {
  // Always click the first visible element
  await removeIcons.first().click();
  // Optional small wait for UI update
  await page.waitForTimeout(300);
  }
  snippetLog('All remove icons were clicked and removed.');
  await page.getByRole('button', { name: "Save" }).click();
});
