// TC: TC58514
// Tasks - Filter tasks by Task Status as Open - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Tasks - Filter tasks by Task Status as Open - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Tasks" }).click();
  await page.waitForLoadState('load');
  await page.locator("SELECT[id='TaskStatusId'][name='TaskStatusId']").click();
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.getByRole('link', { name: "Overview" }).click();
  await page.waitForTimeout(2000);
  await page.waitForLoadState('load');
  const elements = await page.$$('xpath=//tr//td[7]');
  for (let element of elements) {
  const textContent = await element.textContent();
  expect(textContent.trim()).toBe('Open');
  }
});
