// TC: TC64832
// 12TE - My Company - Edit a user profile - Employer

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE - My Company - Edit a user profile - Employer", async ({ page, context }) => {
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
  await page.waitForLoadState('load');
  await expect(page.getByRole('link', { name: "Profile" })).toHaveText("Profile");
  await expect(page.getByRole('link', { name: "Users" })).toHaveText("Users");
  await page.getByRole('link', { name: "Users" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Users" }).hover();
  await page.locator("tr>th").hover();
  await page.locator("tr>th").nth(1).hover();
  await expect(page.locator("tr.ng-scope>td.ng-binding")).toHaveText("Associate");
  await page.getByRole('link', { name: "Abraham Postlethwait" }).click();
  await page.waitForLoadState('load');
  await page.locator("dl.dl-horizontal>dt").hover();
  await page.locator("dl.dl-horizontal>dt").nth(1).hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(1).hover();
  await expect(page.locator("dd>span.ng-binding")).toHaveText("Associate");
  await page.getByRole('link', { name: "Change" }).click();
  await expect(page.locator("div.form-group>label.control-label")).toHaveText("User Role*");
  await page.locator("SELECT[name='roleId']").selectOption("number:21");
  await page.getByRole('heading', { name: "Edit User Role" }).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("dd>span.ng-binding")).toHaveText("Administrator");
  await page.getByRole('link', { name: "Users" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("tr.ng-scope>td.ng-binding")).toHaveText("Administrator");
  selector = MK.onSetGV(`//a[@class="primary-item ng-binding ng-scope"]//ancestor::tr//td[@class="ng-binding"][normalize-space="Administrator"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "Abraham Postlethwait" }).click();
  await page.getByRole('link', { name: "Change" }).click();
  await page.locator("div.form-group>label.control-label").hover();
  await page.locator("SELECT[name='roleId']").selectOption("number:20");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Users" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("tr.ng-scope>td.ng-binding")).toHaveText("Associate");
  selector = MK.onSetGV(`//a[@class="primary-item ng-binding ng-scope"]//ancestor::tr//td[@class="ng-binding"][normalize-space="Administrator"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
