// TC: TC65130
// Target Employers - Create a contact, add a note, create a task and delete it - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Target Employers - Create a contact, add a note, create a task and delete it - Student", async ({ page, context }) => {
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
  await page.setViewportSize({ width: 1920, height: 1080 });
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
  await page.getByRole('link', { name: "Target Employers" }).click();
  await page.getByRole('link', { name: "Target Contacts" }).click();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Mr. Test Testing (MuukTest)")]//ancestor::tr//A[contains(@title,"Remove")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//SPAN[contains(text(),"Mr. Test Testing (MuukTest)")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  }
  await page.locator("tr>th").nth(4).hover();
  await page.locator("tr>th").nth(5).hover();
  await page.getByRole('link', { name: "Add Contact" }).click();
  await page.getByRole('heading', { name: "Add New Contact" }).hover();
  await page.locator("div.form-group>label.control-label").hover();
  await page.locator("div.form-group>label.control-label").nth(1).hover();
  await page.locator("INPUT[name='Company']").fill("Walmart");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.locator("SELECT[id='prefix'][name='prefix']").selectOption("number:1");
  await page.locator("div.form-group>label.control-label").nth(3).click();
  await page.locator("INPUT[name='FirstName']").fill("Test");
  await page.locator("div.form-group>label.control-label").nth(4).click();
  await page.locator("INPUT[name='Lastname']").fill("Testing");
  await page.locator("div.form-group>label.control-label").nth(5).click();
  await page.locator("div.form-controls>input.form-control").nth(2).fill("MuukTest");
  await page.locator("div.form-group>label.control-label").nth(6).click();
  await page.locator("div.form-controls>input.form-control").nth(3).fill("Project Manager");
  await page.locator("div.form-group>label.control-label").nth(7).click();
  await page.locator("div.form-group>label.control-label").nth(8).hover();
  await page.locator("INPUT[name='EmailAddress']").fill("test@gmail.com");
  await page.locator("div.form-controls>input.form-control").nth(5).fill("test+1@gmail.com");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("a.ellipsis>span.ng-binding").nth(1).hover();
  await page.locator("div>span.ng-binding").nth(2).hover();
  await page.locator("li.ng-scope>span.ng-binding").nth(1).hover();
  await page.getByRole('link', { name: "Add Note" }).click();
  await page.getByRole('heading', { name: "Add Note" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Employer: Test Testing\"]").hover();
  await page.locator("div.form-group>label.control-label").nth(1).hover();
  await page.locator("body.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders>p").click();
  await page.waitForTimeout(3000);
  await page.locator("div.form-group>label.control-label").nth(2).click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForLoadState('load');
  await page.locator("a.ellipsis>span.ng-binding").nth(1).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('link', { name: "Activities" }).click();
  await page.getByRole('link', { name: "Notes" }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await expect(page.locator("span.text-area-display.ng-binding>p").nth(2)).toContainText("Automated Test Case by Muuktest");
  await page.locator("tr.ng-scope>td.ng-binding.ng-scope").nth(1).hover();
  await page.locator("tr.ng-scope>td.ng-binding.ng-scope").nth(2).hover();
  await page.getByRole('link', { name: "javascript:void(0);" }).hover();
  await page.getByRole('link', { name: "javascript:void(0);" }).click();
  await page.getByRole('heading', { name: "Delete Note" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Note" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(20000);
  await page.reload();
  await page.waitForLoadState('load');
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//P[contains(text(),"Automated Test Case by Muuktest")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Add Note" }).hover();
  await page.getByRole('link', { name: "New Task" }).hover();
  await page.getByRole('link', { name: "New Meeting" }).hover();
  await page.getByRole('link', { name: "New Task" }).click();
  await page.getByRole('heading', { name: "Add Task" }).hover();
  await page.locator("div.form-group>label.control-label").click();
  await page.locator("INPUT[name='Subject'][id='subjectId']").fill("Muuktest");
  await page.locator("div.form-group>label.control-label").nth(1).click();
  await page.locator("div.form-group>label.control-label").nth(2).click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await expect(page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope")).toHaveText("Mr. Test Testing (MuukTest)");
  await expect(page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding")).toHaveText("Walmart");
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(2000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Target Employers" }).click();
  await page.getByRole('link', { name: "Target Contacts" }).click();
  await page.locator("a.ellipsis>span.ng-binding").nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Activities" }).click();
  await page.reload();
  await expect(page.locator("span>span.title.ng-binding.ng-scope")).toHaveText("Muuktest");
  await page.getByRole('link', { name: "#/tasks/15917/edit?from=%2FContacts%2F220048011214963&setCompleted=true" }).hover();
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await expect(page.locator("span.fourSpaces>span.ng-binding")).toHaveText("Open");
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "#/tasks/15917/edit?from=%2FContacts%2F220048011214963&type=Contact" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "Cancel" }).click();
  await page.getByRole('link', { name: "Activities" }).click();
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await expect(page.getByRole('heading', { name: "Delete Task" })).toHaveText("Delete Task");
  await expect(page.locator("div.modal-content>div.modal-body").nth(2)).toHaveText("Are you sure you want to delete this Task?");
  await page.getByRole('link', { name: "Confirm" }).click();
  await expect(page.getByRole('heading', { name: "Success" })).toHaveText("Success");
  await expect(page.locator("div.modal-content>div.modal-body").nth(1)).toHaveText("You have successfully deleted the task.");
  await page.getByRole('link', { name: "OK" }).click();
  await page.waitForTimeout(2000);
  await expect(page.locator("div.activity-stream.clearfix>div.gray-text.no-items.ng-scope")).toHaveText("There are currently no notes, tasks or activities.");
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "Target Employers" }).click();
  await page.getByRole('link', { name: "Target Contacts" }).click();
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
});
