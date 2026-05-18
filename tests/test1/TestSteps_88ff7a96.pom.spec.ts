// TC: TC_A76131
// SSO - Login - Student - Shibboleth

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("SSO - Login - Student - Shibboleth", async ({ page, context }) => {
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

  await page.goto('https://e2e-tests-law.qa-12twenty.com/Login', { timeout: 90000 });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByRole('link', { name: "Login with your E2E-LAW SSO" }).click();
  await page.locator("INPUT[type='text'][id='username'][name='j_username']").fill("ssoidptestuser");
  await page.waitForTimeout(1000);
  await page.locator('input[type="password"]').click();
  await page.getByRole('button', { name: "Login" }).click();
  await page.waitForTimeout(15000);
  await page.waitForLoadState('load');
  const msg = await page.locator('//h1[normalize-space()="Join the E2E-LAW Platform"]');
  if (await msg.count() > 0){
  snippetLog("Performing steps");
  await page.getByRole('heading', { name: "Join the E2E-LAW Platform" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Email Address*:\"]").hover();
  await page.locator("//LABEL[@id='doesAgreeToTermsLabel'][normalize-space() = \"I agree to the 12Twenty Terms of Service and Privacy Policy.\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Student/Alumni Sign Up" }).click();
  }
  await page.locator("a.dropdown-toggle.account-settings-lnk>div.nav-user-account-name-and-company").hover();
});
