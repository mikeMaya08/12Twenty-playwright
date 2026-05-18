// TC: TC58567
// Activity Stream - Add New Campaign - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Activity Stream - Add New Campaign - Admin", async ({ page, context }) => {
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
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Activity Stream" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(` //A[contains(text(),"MuukTest Campaign")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "MuukTest Campaign" }).hover();
  await page.locator("a.delete-btn>i.glyphicon.glyphicon-trash").nth(1).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.reload();
  await page.reload();
  }
  await page.getByRole('link', { name: "+ Add New" }).click();
  await page.getByRole('heading', { name: "Add Campaign" }).hover();
  await page.locator("INPUT[type='text']").nth(3).fill("MuukTest Campaign");
  await page.locator("SELECT[id='VisibilityId'][name='VisibilityId']").selectOption("2");
  await page.getByRole('link', { name: "Add Campaign" }).click();
  await page.getByRole('link', { name: "MuukTest Campaign" }).click();
  selector = MK.onSetGV(` //A[contains(text(),"MuukTest Campaign")]`, null);
  await page.locator("a.delete-btn>i.glyphicon.glyphicon-trash").nth(1).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(3000);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
