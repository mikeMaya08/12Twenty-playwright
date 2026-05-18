// TC: TC65147
// Target Employers - Add note to a employee and delete it -Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Target Employers - Add note to a employee and delete it -Student", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-campuswide.qa-12twenty.com/dashboard', { timeout: 90000 });
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
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Target Employers" }).click();
  await page.getByRole('heading', { name: "Target Employers" }).hover();
  await page.getByRole('link', { name: "Target Employers" }).click();
  await page.getByRole('link', { name: "Add To Target Employers" }).click();
  await page.getByRole('heading', { name: "Oops!" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(1).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByPlaceholder("Select an employer").fill("Walmart");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.getByRole('link', { name: "Add To Target Employers" }).click();
  await page.getByRole('link', { name: "Walmart" }).hover();
  await page.locator("span>span.ng-binding.ng-scope").hover();
  await page.getByRole('link', { name: "Add Note" }).hover();
  await page.getByRole('link', { name: "Create Task" }).hover();
  await page.locator("a.btn.btn-default.btn-sm>i.glyphicon.glyphicon-pencil").hover();
  await page.getByRole('link', { name: "javascript:void(0)" }).hover();
  await page.getByRole('link', { name: "javascript:void(0)" }).hover();
  await page.getByRole('link', { name: "Add Note" }).click();
  await page.getByRole('heading', { name: "Add Note" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Employer: Walmart\"]").hover();
  await page.locator("div.form-group>label.control-label").nth(1).hover();
  await page.locator("div.form-group>label.control-label").nth(2).click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('link', { name: "Target Employers" }).click();
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
