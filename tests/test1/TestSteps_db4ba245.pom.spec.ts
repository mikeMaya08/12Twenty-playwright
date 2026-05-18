// TC: TC60136
// Outcomes - Add Report Experience as Received Internship - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Outcomes - Add Report Experience as Received Internship - Student", async ({ page, context }) => {
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
  await page.getByRole('heading', { name: "Internship" }).hover();
  await page.locator("div.add-job-in-phase>span.add-job-in-phase-blurb").nth(1).hover();
  await page.getByRole('button', { name: "Report Experience" }).click();
  await page.getByRole('button', { name: "Received Internship" }).click();
  await page.getByRole('heading', { name: "Internship - Offer Received" }).hover();
  await page.getByPlaceholder("Employer").fill("Google Inc.");
  await page.getByRole('link', { name: "Google Inc." }).click();
  await page.getByPlaceholder("Job Title").fill("Software Engineer Intern");
  await page.locator("SELECT[id='Job_NumberOfEmployeesId']").selectOption("3");
  await page.locator("SELECT[name='Job.JobIndustryId'][id='Job.JobIndustryId']").selectOption("149999414151628");
  await page.locator("SELECT[name='Job.JobFunctionId'][id='Job.JobFunctionId']").selectOption("100001010430430");
  await page.locator("SELECT[name='Job.LocationTypeId'][id='Job.LocationTypeId']").selectOption("1");
  await page.getByPlaceholder("Country").fill("United States (USA)");
  await page.getByRole('link', { name: "United States (USA)" }).click();
  await page.getByPlaceholder("City").fill("New York - NY");
  await page.getByRole('link', { name: "New York - NY" }).click();
  await page.locator("INPUT[id='Job_Address1']").fill("123 Main Street");
  await page.locator("INPUT[id='Job_Address2']").fill("Suite 400");
  await page.locator("INPUT[id='Job_PostalCode']").fill("10001");
  await page.getByPlaceholder("MM/DD/YYYY").fill("09/15/2024");
  await page.locator("//LABEL[normalize-space() = \"Compensation Currency Receiving\"]").click();
  await page.locator("SELECT[id='Job_AcademicTermId']").selectOption("190017010143207");
  await page.locator("SELECT[id='Job_SchoolYearId']").selectOption("36");
  await page.locator("INPUT[type='text'][id='Job.Salary.BaseSalary'][name='Job.Salary.BaseSalary']").fill("5000");
  await page.locator("SELECT[name='Job.CustomJobSourceId'][id='Job.CustomJobSourceId']").selectOption("100011010338756");
  await page.locator("div.FullTimeJob.Internship.inputRow.clearfix>label.control-label.otherRadio").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.locator("div.Internship.inputRow.clearfix>label.control-label.otherRadio").nth(1).hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.locator("div.FullTimeJob.inputRow.clearfix>label.control-label.otherRadio").nth(1).hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(2).click();
  await page.locator("SELECT[id='Job_FundingRaisedId']").selectOption("2");
  await page.locator("div>label.control-label").nth(20).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.locator("TEXTAREA[id='Job_OptionalPertinentInformation']").fill("Internship involves hands-on coding and project management experience");
  await page.locator("//label[normalize-space() = \"Satisfaction\"]").hover();
  await page.locator("//label[contains(normalize-space(),\"Star Rating Attribute - Required\")]").hover();
  await page.locator("td.ant-table-cell.drag-visible.column-center.ant-table-cell-row-hover>div.ant-row.css-eqeg24").click();
  await page.getByRole('button', { name: "Submit" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await expect(page.locator("div.modal-content>div.modal-body").nth(1)).toContainText("You have successfully saved your job entry for \\'Software Engineer Intern\\' at \\'Google Inc.\\'");
  await page.getByRole('link', { name: "No thanks. That's all for now!" }).click();
  await page.getByRole('link', { name: "Software Engineer Intern" }).hover();
  await page.locator("//DIV[normalize-space() = \"Google\"]").hover();
  await page.locator("div.sub-info.ng-scope>span.ng-binding").hover();
  await page.locator("BUTTON[type='button']").nth(3).click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Accept" }).hover();
  await page.getByRole('link', { name: "Reject" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Entry" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Entry" }).click();
  await page.waitForTimeout(4000);
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//A[@role=\'button\'][contains(text(),"Software Engineer Inter")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  selector = MK.onSetGV(` //DIV[normalize-space() = "Google"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
