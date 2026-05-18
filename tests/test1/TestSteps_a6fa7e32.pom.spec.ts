// TC: TC60746
// Tasks - New Task - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Tasks - New Task - Student", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Tasks" }).click();
  await page.getByRole('heading', { name: "Tasks" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").click();
  await page.locator("SELECT[id='TaskStatusId'][name='TaskStatusId']").click();
  await page.keyboard.press("All");
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//DIV[contains(text(),"Client-Student Meeting")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Task" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Confirm" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(1).hover();
  await page.getByRole('link', { name: "OK" }).click();
  }
  await page.getByRole('link', { name: "New Task" }).click();
  await page.getByRole('heading', { name: "Add Task" }).hover();
  await page.locator("INPUT[name='Subject']").fill("Client-Student Meeting");
  await page.locator("SELECT[name='outreach']").selectOption("number:8");
  await page.getByPlaceholder("MM/DD/YYYY").fill("10/15/2024");
  await page.locator("div.form-group>label.control-label").nth(3).click();
  await page.locator("SELECT[name='status']").selectOption("number:2");
  await page.getByPlaceholder("Add description here").fill("Prepare for the meeting with the client and student to discuss project process.");
  await page.getByPlaceholder("Add comments here").fill("Ensure to attach the report before sending");
  await page.getByPlaceholder("Select a contact").fill("Daryl Foster");
  await page.locator("//DIV[normalize-space() = \"Daryl Foster - Coca-Cola - Recruiter\"]").click();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('link', { name: "Clear Filters" }).click();
  await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").hover();
  await page.locator("td.ant-table-cell.drag-visible.column-center.ant-table-cell-row-hover>div.ant-row.css-eqeg24").click();
  await page.keyboard.press("All");
  await page.locator("SELECT[name='TaskStatusId']").fill("60000");
  await page.getByPlaceholder("Enter a contact name here").fill("Daryl Foster - Coca-Cola - Recruiter");
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.reload();
  await page.locator("td>div.ng-binding").nth(1).hover();
  await page.getByRole('link', { name: "Coca-Cola" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").click();
  await page.locator("SELECT[id='TaskStatusId'][name='TaskStatusId']").click();
  await page.keyboard.press("All");
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//DIV[contains(text(),"Client-Student Meeting")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Task" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Confirm" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(1).hover();
  await page.getByRole('link', { name: "OK" }).click();
  }
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//DIV[contains(text(),"Client-Student Meeting")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
