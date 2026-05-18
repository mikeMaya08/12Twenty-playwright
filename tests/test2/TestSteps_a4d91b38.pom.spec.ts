// TC: TC_A84144
// Students - Send Passport and Verify Images Display in Email

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Students - Send Passport and Verify Images Display in Email", async ({ page, context }) => {
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
  await page.getByRole('heading', { name: "Students & Alumni" }).hover();
  selector = MK.onSetGV(`//BUTTON[@type=\'button\'][normalize-space() = "Reset Filters"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('button', { name: "Reset Filters" }).click();
  }
  await page.getByRole('link', { name: "Test Student #0001" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Login As" }).click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = \'Bypass "On Next Login" (Admin Only)\']`, null);
  await page.locator("//A[@role='button'][normalize-space() = 'Bypass \"On Next Login\" (Admin Only)']").click();
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  }
  await page.locator("//SPAN[normalize-space() = \"Test Student #0001\"]").click();
  await page.getByRole('link', { name: "Account Settings" }).click();
  await page.getByRole('heading', { name: "Your 12twenty PassportTM" }).hover();
  await page.getByRole('link', { name: "sending yourself an email" }).click();
  await page.locator("//DIV[normalize-space() = \"You should receive the email shortly.\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").click();
  await page.getByRole('link', { name: "Log Out" }).click();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.getByRole('link', { name: "Email Activity" }).click();
  await page.getByRole('link', { name: "E2E-CPW QR Code" }).click();
  await page.locator("//P[normalize-space() = \"Dear Test Student #0001,\"]").hover();
  await page.locator("//P[normalize-space() = \"Here is your 12twenty PassportTM QR code:\"]").hover();
  await page.locator("//P[normalize-space() = \"If you would like to add your QR code to your Apple Wallet or Google Pay, please click the link below while using your mobile device.\"]").hover();
  await page.locator("a>img").nth(3).hover();
  await page.locator("a>img").nth(3).hover();
});
