// TC: TC_A77814
// 12twenty Passport - Passport can be enabled&#x2F;disabled and student can trigger email

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12twenty Passport - Passport can be enabled&#x2F;disabled and student can trigger email", async ({ page, context }) => {
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
  await page.locator("//a[normalize-space()=\"Site Management\"]/following-sibling::button").click();
  await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").click();
  await page.getByRole('link', { name: "General" }).click();
  await page.locator("//LABEL[normalize-space() = \"Enable 12Twenty Passport for Events and Appointments\"]").hover();
  var locator = page.locator('//input[@name="Settings[0].IsAdminEnabled"]');
  snippetLog('Waiting for element...');
  await locator.waitFor({ state: 'attached', timeout: 5000 });
  snippetLog('Element attached');
  var value = await locator.getAttribute('value');
  snippetLog(`Value found: ${value}`);
  if (value === 'true') {
  snippetLog('Disabling 12twenty passport');
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Save Changes" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.reload();
  }
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Save Changes" }).click();
  await page.reload();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("e2e");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.locator("//a[normalize-space()=\"e2e Test Student\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('heading', { name: "Login as e2e Test Student" }).hover();
  await page.locator("//DIV[normalize-space() = \"You are about to log in as e2e Test Student. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/on-login?returnUrl=%2Fdashboard');
  await page.locator("//SPAN[normalize-space() = \"e2e Test Student\"]").click();
  await page.getByRole('link', { name: "Account Settings" }).click();
  await page.getByRole('heading', { name: "Your 12twenty PassportTM" }).hover();
  await page.locator("div.grp>div").hover();
  await page.locator("//P[normalize-space() = \"This is your 12twenty PassportTM, which uniquely identifies you. You can use your 12twenty PassportTM to check in to events or appointments. You may also add your 12twenty PassportTM to your Apple Pay or Google Pay wallet by sending yourself an email. Alternatively, you can print your 12twenty PassportTM and use it to check in to events and appointments.\"]").hover();
  await page.getByRole('link', { name: "sending yourself an email" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("//DIV[normalize-space() = \"You should receive the email shortly.\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("//SPAN[normalize-space() = \"Email Activity\"]").click();
  await page.getByRole('link', { name: "E2E-CPW QR Code" }).hover();
  await page.getByRole('link', { name: "E2E-CPW QR Code" }).click();
  await page.getByRole('link', { name: "Back to List" }).click();
  await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").click();
  await page.getByRole('link', { name: "General" }).click();
  await page.locator("//LABEL[normalize-space() = \"Enable 12Twenty Passport for Events and Appointments\"]").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Save Changes" }).click();
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.locator("//SPAN[normalize-space() = \"e2e Test Student\"]").click();
  await page.getByRole('link', { name: "Account Settings" }).click();
  await page.getByRole('heading', { name: "Account Settings" }).hover();
  await page.reload();
  await page.reload();
});
