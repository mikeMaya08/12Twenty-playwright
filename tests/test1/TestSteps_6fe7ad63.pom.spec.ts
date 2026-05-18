// TC: TC58510
// Tasks - Add a New Task as Open - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Tasks - Add a New Task as Open - Admin", async ({ page, context }) => {
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
  selector = MK.onSetGV(`//div[normalize-space()="Review Quarterly Report"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//div[normalize-space()=\"Review Quarterly Report\"]/following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Task" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "Confirm" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(1).hover();
  await page.getByRole('link', { name: "OK" }).click();
  }
  await page.getByRole('link', { name: "New Task" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Add Task" }).hover();
  await page.locator("INPUT[name='Subject'][id='subjectId']").fill("Review Quarterly Report");
  await page.waitForTimeout(1000);
  await page.locator("SELECT[id='assignee'][name='assignee']").click();
  await page.locator("SELECT[id='assignee'][name='assignee']").click();
  await page.locator("div.visibility-option-header>label.visibility-option-header-label.control-label.ng-binding").click();
  await page.locator("SELECT[id='outreach'][name='outreach']").selectOption("number:2");
  await page.locator("SELECT[id='status'][name='status']").click();
  await page.getByPlaceholder("MM/DD/YYYY").fill("09/30/2025");
  await page.locator("SELECT[id='status'][name='status']").click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Add description here").fill("Follow up on client feedback");
  await page.getByPlaceholder("Add description here").fill("Please prioritize this task as it needs to be completed.");
  await page.getByPlaceholder("Select a contact").fill("Dominik Smith");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(10000);
  await page.waitForLoadState('load');
  await page.locator("SELECT[id='TaskStatusId'][name='TaskStatusId']").click();
  await page.keyboard.press("Home");
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.locator("td>div.ng-binding").hover();
  await page.locator("a>span.ng-binding").hover();
  selector = MK.onSetGV(`//div[normalize-space()="Review Quarterly Report"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//div[normalize-space()=\"Review Quarterly Report\"]/following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Task" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "Confirm" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(1).hover();
  await page.getByRole('link', { name: "OK" }).click();
  }
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "Get Results" }).click();
});
