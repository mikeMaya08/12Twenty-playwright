// TC: TC_A83213
// Application Documents - Document Approval Lifecycle - Manual Approval, Auto Approval, and Deletion

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Application Documents - Document Approval Lifecycle - Manual Approval, Auto Approval, and Deletion", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Site Management" }).hover();
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "Document Review" }).click();
  await expect(page.getByRole('heading', { name: "Document Review" })).toHaveText("Document Review");
  await page.getByRole('button', { name: "New Approval Requirement" }).click();
  await expect(page.getByRole('heading', { name: "New Approval Requirement" })).toHaveText("New Approval Requirement");
  await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Document Types*\"]")).toContainText("Document Types*");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Resume\"]").click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Student Groups*\"]")).toContainText("60000");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Group 1\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Group 2\"]").click();
  await page.getByRole('link', { name: "Save" }).click();
  await expect(page.locator("//DIV[normalize-space() = \"Approval Requirement Edit Delete View Audit Log Document Types: Resume Student Groups: Group 1, Group 2\"]")).toHaveText("Approval Requirement Edit Delete View Audit Log Document Types: Resume Student Groups: Group 1, Group 2");
  await expect(page.getByRole('heading', { name: "Approval Requirement" })).toHaveText("Approval Requirement");
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await expect(page.getByRole('heading', { name: "Students & Alumni" })).toHaveText("Students & Alumni");
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Stacey");
  await page.locator("tt-student-summary-card.ng-scope.ng-isolate-scope>div.tt-card.floating-card.ng-scope").hover();
  await page.getByRole('link', { name: "Stacey Davis" }).click();
  await page.getByRole('link', { name: "Application Materials" }).click();
  await expect(page.getByRole('heading', { name: "Resumes" })).toHaveText("Resumes");
  await page.getByRole('link', { name: "Add New" }).click();
  await expect(page.getByRole('heading', { name: "Add New Resume" })).toHaveText("Add New Resume");
  await expect(page.locator("//LABEL[normalize-space() = \"Resume Name *\"]")).toHaveText("Resume Name *");
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Resume");
  await expect(page.locator("//LABEL[normalize-space() = \"Upload New Resume *\"]")).toContainText("Upload New Resume *");
  await page.getByRole('link', { name: "browse" }).click();
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "Submit for approval" }).click();
  await expect(page.locator("tt-application-document-status.ng-scope.ng-isolate-scope>span.badge.pending")).toHaveText("Pending");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "Approve Resume" }).click();
  await expect(page.locator("tt-application-document-status.ng-scope.ng-isolate-scope>span.badge.approved")).toHaveText("Approved");
  await page.locator("//LABEL[normalize-space() = \"Auto-Approve\"]").click();
  await page.getByRole('link', { name: "Add New" }).click();
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Resume 2");
  await page.getByRole('link', { name: "browse" }).click();
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "Submit" }).click();
  await page.locator("section>div.tt-card.card-with-actions.ng-scope").nth(1).hover();
  await page.locator("BUTTON[type='button']").nth(5).click();
  await page.getByRole('link', { name: "Delete Resume" }).click();
  await expect(page.getByRole('heading', { name: "Delete Resume" })).toHaveText("Delete Resume");
  await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1)).toHaveText("Are you sure you want to permanently delete this resume?");
  await page.getByRole('button', { name: "Delete Resume" }).click();
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "Delete Resume" }).click();
  await page.getByRole('button', { name: "Delete Resume" }).click();
  await expect(page.locator("//SPAN[normalize-space() = \"You currently have no resumes in the system.\"]")).toHaveText("You currently have no resumes in the system.");
  await page.locator("//LABEL[normalize-space() = \"Auto-Approve\"]").click();
  await page.getByRole('link', { name: "Site Management" }).hover();
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "Document Review" }).click();
  await expect(page.getByRole('heading', { name: "Document Review" })).toHaveText("Document Review");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await expect(page.getByRole('heading', { name: "Delete Approval Requirement" })).toHaveText("Delete Approval Requirement");
  await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this approval requirement? This action cannot be undone.\"]").nth(1)).toHaveText("Are you sure you want to permanently delete this approval requirement? This action cannot be undone.");
  await page.getByRole('button', { name: "Delete Approval Requirement" }).click();
  await expect(page.locator("//DIV[@role='alert'][normalize-space() = \"Successfully deleted approval requirement.\"]")).toHaveText("Successfully deleted approval requirement.");
  await expect(page.locator("//DIV[normalize-space() = \"There are no approval requirements configured yet.\"]")).toHaveText("There are no approval requirements configured yet.");
});
