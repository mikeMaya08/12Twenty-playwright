// TC: TC60477
// Saved Search Notifications - Employers - Students can add&#x2F;delete employer saved search

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Saved Search Notifications - Employers - Students can add&#x2F;delete employer saved search", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByRole('heading', { name: "Employer Directory" }).hover();
  await page.reload();
  await page.getByRole('heading', { name: "Employer Directory" }).hover();
  await page.getByPlaceholder("Company Name").fill("12twenty, Inc");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('button', { name: "Save this search" }).click();
  await page.getByRole('heading', { name: "Save Search" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Saved Search Name*\"]").hover();
  await page.getByPlaceholder("Saved Search Name").fill("12twenty search");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.locator("div.auto-close>span").hover();
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.locator("button.saved-search__toggle>span.saved-search__selected-name.ng-binding").click();
  await page.locator("//SPAN[normalize-space() = \"12twenty search\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"12twenty search\"]").click();
  await page.getByRole('link', { name: "12twenty, Inc." }).hover();
  await page.locator("button.saved-search__toggle>span.saved-search__selected-name.ng-binding").click();
  await page.locator("//SPAN[normalize-space() = \"12twenty search\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"12twenty search\"]//following::button[@title=\"Update\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"12twenty search\"]//ancestor::li//button[@title=\"Delete\"]").click();
  await page.getByRole('heading', { name: "Delete Saved Search" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Saved Search" }).click();
  await page.locator("div.auto-close>span").hover();
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.locator("button.saved-search__toggle>span.saved-search__selected-name.ng-binding").click();
  selector = MK.onSetGV(`//SPAN[normalize-space() = "12twenty search"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
