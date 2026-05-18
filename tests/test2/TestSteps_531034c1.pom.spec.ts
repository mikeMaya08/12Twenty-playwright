// TC: TC_A81288
// Students - Create, Save, Delete a custom list view

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Create, Save, Delete a custom list view", async ({ page, context }) => {
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
  await page.locator("div.results-view-options>button.btn").nth(1).click();
  await page.locator("button.btn.btn-default.dropdown-toggle>i.far.fa-sliders-h").click();
  await page.locator("//SPAN[normalize-space() = \"Create New View...\"]").click();
  await page.getByPlaceholder("View Name").fill("Muuktest QA Test View");
  await page.locator("//LABEL[normalize-space() = \"Available Columns\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Job Preferences\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Preferred City\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("Preferred City");
  await page.locator("//SPAN[normalize-space() = \"Education\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Graduation Term\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("Graduation Term");
  await page.locator("//DIV[normalize-space() = \"Active\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("Active");
  await page.locator("//DIV[normalize-space() = \"12twenty ID\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("12twenty ID");
  await page.locator("//DIV[normalize-space() = \"Email Address\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("Email Addres");
  await page.locator("//DIV[normalize-space() = \"Allow Employers to contact me with job opportunities\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("Allow Employers to contact me with job opportunities");
  await page.locator("//DIV[normalize-space() = \"I want to be included in the Student & Alumni Directory\"]").click();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await expect(page.locator("div.modal-body.filter-selection-modal-content.ordered-selection.ng-scope>div.filter-list.selected-columns")).toContainText("I want to be included in the Student & Alumni Directory");
  await page.getByRole('button', { name: "Save View" }).click();
  await page.locator("//TH[normalize-space()=\"Preferred City\"]").hover();
  await page.locator("//TH[normalize-space()=\"Graduation Term\"]").hover();
  await page.locator("//TH[normalize-space()=\"Active\"]").hover();
  await page.locator("//TH[normalize-space()=\"12twenty ID\"]").hover();
  await page.locator("//TH[normalize-space()=\"Email Address\"]").hover();
  await page.locator("//TH[normalize-space()=\"Allow Employers to contact me with job opportunities\"]").hover();
  await page.locator("//TH[normalize-space()=\"I want to be included in the Student & Alumni Directory\"]").hover();
  await page.reload();
  await page.locator("button.btn.btn-default.dropdown-toggle>i.far.fa-sliders-h").click();
  await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View\"]").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View\"]/ancestor::li//span[contains(@class,\"glyphicon-pencil\")]").click();
  await page.getByPlaceholder("View Name").fill("Muuktest QA Test View - Renamed");
  await page.getByRole('button', { name: "Save View" }).click();
  await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View - Renamed\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View - Renamed\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Muuktest QA Test View - Renamed\"]/ancestor::li//span[contains(@class,\"glyphicon-trash\")]").click();
  await page.getByRole('heading', { name: "Delete Custom View" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this custom view?\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Custom View" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("//DIV[normalize-space() = \"You have successfully deleted the Custom View\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
});
