// TC: TC60476
// Application Materials - Add new URLs - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Application Materials - Add new URLs - Student", async ({ page, context }) => {
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
  await page.setViewportSize({ width: 1920, height: 1080 });
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
  await page.getByRole('link', { name: "Application Materials" }).click();
  await page.getByRole('heading', { name: "Application Materials" }).hover();
  await page.getByRole('heading', { name: "Urls" }).hover();
  await page.getByRole('link', { name: "Add New" }).click();
  await page.getByRole('heading', { name: "Add New Url" }).hover();
  await page.locator("div.form-group>label.control-label.ng-binding").hover();
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Emmanuel-LinkedinProfile");
  await page.locator("div.form-group>label.control-label").nth(1).hover();
  await page.locator("INPUT[type='text'][name='url']").fill("https://www.linkedin.com/in/username");
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Submit" }).hover();
  await page.getByRole('link', { name: "Submit" }).click();
  await page.getByRole('link', { name: "Emmanuel-LinkedinProfile" }).hover();
  await page.getByRole('link', { name: "Emmanuel-LinkedinProfile" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('linkedin.com/in/username');
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await page.reload();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.locator("BUTTON[type='button']").nth(8).click();
  await page.getByRole('link', { name: "View Url" }).hover();
  await page.getByRole('link', { name: "Edit Url" }).hover();
  await page.getByRole('link', { name: "Delete Url" }).hover();
  await page.getByRole('link', { name: "Delete Url" }).click();
  await page.getByRole('heading', { name: "Delete Url" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Url" }).click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//A[contains(text(),"Emmanuel-LinkedinProfile")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
