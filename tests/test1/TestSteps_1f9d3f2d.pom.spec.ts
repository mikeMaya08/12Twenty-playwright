// TC: TC62634
// Users - Impersonate Student, Employer and Admin users

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Users - Impersonate Student, Employer and Admin users", async ({ page, context }) => {
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
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.waitForLoadState('load');
  await page.locator("a>span.notification-name").nth(20).click();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.locator("BUTTON[type='button']").nth(13).click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('heading', { name: "Login as Test Student #001" }).hover();
  await page.locator("//DIV[normalize-space() = \"You are about to log in as Test Student #0001. This user's account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/on-login?returnUrl=%2Fdashboard');
  await page.waitForTimeout(2000);
  const expectedUrlstd = 'https://e2e-tests-campuswide.qa-12twenty.com/dashboard/';
  const currentUrlstd = page.url();
  if (currentUrlstd === expectedUrlstd) {
  console.log('The URL is correct:', currentUrlstd);
  } else {
  console.error('The URL is incorrect:', currentUrlstd);
  }
  await page.locator("//DIV[normalize-space() = \"You're currently logged in as Test Student #0001 (Student). When you're done, please log out.\"]").hover();
  await page.locator("a.logout>b").click();
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByRole('heading', { name: "Manage Employers" }).hover();
  await page.locator("BUTTON[type='button']").nth(21).click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('heading', { name: "Login as Criselda Paredez" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/on-login?returnUrl=%2Fdashboard%2Femployer');
  await page.waitForTimeout(2000);
  const expectedUrl = 'https://e2e-tests-campuswide.qa-12twenty.com/dashboard/employer';
  const currentUrl = page.url();
  if (currentUrl === expectedUrl) {
  console.log('The URL is correct:', currentUrl);
  } else {
  console.error('The URL is incorrect:', currentUrl);
  }
  await page.locator("body.has-fixed-alert-header.container-nav-v3.logged-in-user.has-side-nav.dashboard-body>div.body-fixed-alert-header.alert.alert-danger").hover();
  await page.locator("a.logout>b").click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Admins" }).click();
  await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]/ancestor::tr//button").click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('heading', { name: "Login as Admin Admin" }).hover();
  await page.locator("//DIV[normalize-space() = \"You are about to log in as Admin Admin. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(1000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("//DIV[normalize-space() = \"You\\'re currently logged in as Admin Admin (School). When you\\'re done, please log out.\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]").hover();
  await page.locator("a.logout>b").click();
});
