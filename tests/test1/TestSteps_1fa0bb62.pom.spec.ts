// TC: TC62636
// Students - Student connects&#x2F;emails student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Student connects&#x2F;emails student", async ({ page, context }) => {
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
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('heading', { name: "Students & Alumni" }).hover();
  await page.waitForTimeout(5000);
  await page.reload();
  await page.getByPlaceholder("Search by Name").fill("Test Student");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Test Student #001" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "General" }).hover();
  await page.getByRole('button', { name: "Connect" }).click();
  await page.getByRole('heading', { name: "Connect with Test Student" }).hover();
  await page.getByRole('button', { name: "Send message to Test Student" }).hover();
  await page.getByRole('button', { name: "Close" }).hover();
  await page.getByRole('button', { name: "Send message to Test Student" }).click();
  await page.locator("div.form-group>label.control-label").nth(1).hover();
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Send" }).hover();
  await page.locator("div.form-group>label.control-label").nth(1).hover();
  await page.locator("INPUT[type='text'][name='subject']").fill("Job Fair");
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.waitForTimeout(3000);
  await page.locator("DIV[role='application']").click();
  await page.waitForTimeout(3000);
  await page.locator("INPUT[type='text'][name='subject']").click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: "Send" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").click();
  await page.getByRole('link', { name: "Log Out" }).click();
  await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon.collapsed").click();
  await page.getByRole('link', { name: "Email Activity" }).click();
  await page.getByRole('heading', { name: "Email Activity" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Date\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Relative Range\"]").click();
  await page.locator("//SPAN[normalize-space() = \"Date\"]").click();
  await page.getByRole('link', { name: "e2e Test Student has messaged you via E2E Tests Campuswide E2E-CPW - Job Fair" }).click();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(2).hover();
  await page.locator("//DIV[normalize-space() = \"e2e Test Student\"]").hover();
  await page.locator("//P[normalize-space() = \"Connect with top employers, explore career opportunities, network with professionals, and discover your next job at our vibrant fair.\"]").hover();
});
