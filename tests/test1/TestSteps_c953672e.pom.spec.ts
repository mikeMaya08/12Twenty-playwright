// TC: TC58566
// Tasks - Delete an Added and Completed Task - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Tasks - Delete an Added and Completed Task - Admin", async ({ page, context }) => {
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
  await page.getByRole('heading', { name: "Tasks" }).hover();
  await page.getByRole('link', { name: "New Task" }).click();
  await page.locator("INPUT[name='Subject'][id='subjectId']").fill("Task to complete");
  await page.locator("SELECT[id='status'][name='status']").click();
  await page.getByPlaceholder("MM/DD/YYYY").fill("12/12/2026");
  await page.locator("SELECT[id='status'][name='status']").click();
  await page.getByRole('button', { name: "None" }).click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.getByPlaceholder("Add description here").fill("Testing tasks");
  await page.getByPlaceholder("Select a contact").fill("elliott");
  await page.locator("//DIV[normalize-space() = \"Adam Elliott - McKesson - Recruiter\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(1000);
  await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").hover();
  await page.locator("td.ant-table-cell.drag-visible.column-center.ant-table-cell-row-hover>div.ant-row.css-eqeg24").click();
  await page.keyboard.press("All");
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.locator("td>div.ng-binding").nth(2).hover();
  await page.getByRole('link', { name: "Complete" }).click();
  await page.locator("SELECT[id='status'][name='status']").hover();
  await page.getByRole('button', { name: "Save" }).click();
});
