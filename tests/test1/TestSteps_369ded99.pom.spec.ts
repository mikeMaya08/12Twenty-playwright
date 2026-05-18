// TC: TC58293
// Employers - Verify that the user can save a search - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Verify that the user can save a search - Admin", async ({ page, context }) => {
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
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByRole('heading', { name: "Employer Directory" }).hover();
  await page.getByPlaceholder("Company Name").fill("3M");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "3M" }).hover();
  await page.getByRole('button', { name: "Save this search" }).click();
  await page.getByRole('heading', { name: "Save Search" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Saved Search Name*\"]").hover();
  await page.getByPlaceholder("Saved Search Name").fill("3M Search");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.locator("div.auto-close>span").hover();
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
  await page.locator("button.saved-search__toggle.dropdown-toggle>span.saved-search__selected-name.ng-binding").click();
  await page.locator("//SPAN[normalize-space() = \"3M Search\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"3M Search\"]").click();
  await page.locator("button.saved-search__toggle.dropdown-toggle>span.saved-search__selected-name.ng-binding").click();
  await page.locator("button.saved-search__button>i.far.fa-trash-alt").click();
  await page.getByRole('heading', { name: "Delete Saved Search" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Saved Search" }).click();
  await page.locator("div.auto-close>span").hover();
  await page.locator("button.saved-search__toggle.dropdown-toggle>span.saved-search__selected-name.ng-binding").click();
  var spanLocator = page.locator('//SPAN[normalize-space() = "3M Search"]');
  if (await spanLocator > 0) {
  throw new Error("3M Search is present.");
  await expect(spanLocator).toBeVisible();
  } else {
  console.log("3M Search was succesfully deleted.");
  }
});
