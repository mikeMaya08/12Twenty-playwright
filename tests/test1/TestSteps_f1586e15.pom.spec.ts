// TC: TC64830
// 12TE - Employer Profile - Employer user updates company profile

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE - Employer Profile - Employer user updates company profile", async ({ page, context }) => {
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

  await page.goto(employerQA, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Email Address").fill("e2e.employeruser.subscription.admin@walmart.com");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.waitForTimeout(2000);
  await page.locator("button.btn.btn-school.submit-login-form>span").click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").hover();
  await page.getByRole('link', { name: "My Company" }).click();
  await expect(page.getByRole('link', { name: "Profile" })).toHaveText("Profile");
  await expect(page.getByRole('link', { name: "Users" })).toHaveText("Users");
  await expect(page.getByRole('heading', { name: "Walmart" })).toHaveText("                    Walmart                                                                                                                                                                                                                                                                                                                                                                        ");
  await expect(page.locator("//DIV[normalize-space() = \">10000\"]")).toHaveText("                 >10000            ");
  await expect(page.locator("span>span.ng-binding.ng-scope")).toContainText("Retail");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.waitForLoadState('load');
  await page.locator("//LABEL[normalize-space() = \"Number of Employees\"]").click();
  await page.locator("svg>circle").hover();
  await page.locator("//LABEL[normalize-space() = \"Industries\"]").hover();
  await page.getByRole('button', { name: "Retail" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"LinkedIn\"]").click();
  await page.getByRole('link', { name: "Save Profile" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("//DIV[normalize-space() = \"5001-10000\"]")).toHaveText("                 5001-10000            ");
  await expect(page.locator("span>span.ng-binding.ng-scope")).toContainText("Accounting, Retail");
  selector = MK.onSetGV(`//DIV[normalize-space() = ">10000"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.waitForLoadState('load');
  await page.locator("//LABEL[normalize-space() = \"Industries\"]").click();
  await page.getByRole('button', { name: "Consulting, Retail" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Number of Employees\"]").click();
  await page.locator("svg>circle").hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save Profile" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("//DIV[normalize-space() = \">10000\"]")).toHaveText("                 >10000            ");
  await expect(page.locator("span>span.ng-binding.ng-scope")).toContainText("Retail");
  selector = MK.onSetGV(` //DIV[normalize-space() = "5001-10000"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
