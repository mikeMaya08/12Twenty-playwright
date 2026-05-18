// TC: TC63396
// SSO - Login - Student - CAS

import { test, expect } from '@playwright/test';

test("SSO - Login - Student - CAS", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-campuswide.qa-12twenty.com/Login?isLogout=true', { timeout: 90000 });
  await page.waitForLoadState('load');
  await page.locator("div.login-box>span.sign-in-msg").hover();
  await page.getByRole('link', { name: "Login with your E2E-CPW SSO" }).hover();
  await page.locator("div.or-divider>span").hover();
  await page.locator("button.btn.btn-school.submit-login-form>span").hover();
  await page.getByRole('link', { name: "Login with your E2E-CPW SSO" }).click();
  await page.getByRole('heading', { name: "12Twenty Cas Identity Provider" }).hover();
  await page.locator("//P[normalize-space() = \"Is V2: True | ReturnUrl: https://sso.qa-12twenty.com/cas/auth?school=e2e-tests-campuswide&userTypeId=2\"]").hover();
  await page.getByPlaceholder("ssoid").fill("e2e.student.fullaccess1");
  await page.waitForTimeout(1000);
  await page.locator('input[type="password"]').click();
  await page.getByRole('button', { name: "Submit" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('heading', { name: "Announcements" }).hover();
  await page.getByRole('heading', { name: "Outcomes" }).hover();
});
