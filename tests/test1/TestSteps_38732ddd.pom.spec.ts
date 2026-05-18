// TC: TC68634
// Job Listings - Admin - Update existing non-OCI test to download packet of student applicants

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Job Listings - Admin - Update existing non-OCI test to download packet of student applicants", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).hover();
  await page.getByRole('link', { name: "All" }).click();
  await page.getByRole('link', { name: "Job Listings" }).click();
  await page.getByRole('link', { name: "Post a Job" }).click();
  await page.getByRole('heading', { name: "Create Job Posting" }).hover();
  await page.getByRole('heading', { name: "Job Details" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Employer*\"]").hover();
  await page.getByPlaceholder("Employer").fill("Walmart");
  await page.locator("//DIV[normalize-space() = \"Walmart\"]").nth(2).click();
  await page.locator("//LABEL[normalize-space() = \"Hide Employer Name from Applicants\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Job Title*\"]").hover();
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.getByPlaceholder("Job Title").fill("Human Resource");
  await page.getByRole('button', { name: "-- Type of Job --" }).click();
  await page.getByPlaceholder("Search").fill("Full-Time");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Salary Range\"]").click();
  await page.getByPlaceholder("Min").fill("500");
  await page.getByPlaceholder("Max").fill("1000");
  await page.locator("SELECT[name='CurrencyId']").selectOption("number:1");
  await page.locator("SELECT[name='PayFormatId']").selectOption("number:3");
  await page.locator("//LABEL[normalize-space() = \"Location Type*\"]").hover();
  await page.locator("SELECT[id='LocationTypeId'][name='LocationTypeId']").selectOption("number:2");
  await page.locator("//LABEL[normalize-space() = \"Industry*\"]").hover();
  await page.getByRole('button', { name: "-- Industry --" }).click();
  await page.getByPlaceholder("Search").fill("Accounting ");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Job Function*\"]").click();
  await page.getByRole('button', { name: "-- Job Function --" }).click();
  await page.getByPlaceholder("Search").fill("Accounting");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Preferred Years of Experience\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Work Authorization\"]").click();
  await page.getByRole('button', { name: "-- Work Authorization --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Application Method(s)*" }).click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via This Site*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.locator("div.form-group>label.control-label").nth(12).click();
  await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]//following::label[normalize-space()=\"No\"]").click();
  await page.locator("div.form-group>label.control-label").nth(13).click();
  await page.locator("//LABEL[normalize-space() = \"No\"]").nth(2).click();
  await page.getByRole('heading', { name: "Job Description" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Job Description*\"]").click();
  await page.locator("SPAN[role='presentation']").click();
  await page.locator("body.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders>p").click();
  await page.getByRole('heading', { name: "Attachments" }).click();
  await page.locator("//LABEL[normalize-space() = \"I will review applicants as they come in, and may close the job posting early\"]").click();
  await page.getByRole('heading', { name: "Interview Detail" }).hover();
  await page.locator("div.form-section-header>span.form-section-header-help-text").nth(1).hover();
  await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").hover();
  await page.getByRole('heading', { name: "Primary Job Contact" }).hover();
  await page.getByRole('button', { name: "Use My Information" }).click();
  await page.getByPlaceholder("Title").fill("test");
  await page.locator("//LABEL[normalize-space() = \"Job Posting Contact Address*\"]").hover();
  await page.getByPlaceholder("Job Posting Contact Address").fill("5th Avenue");
  await page.getByPlaceholder("Job Posting Contact Phone").fill("9153455681");
  await page.getByRole('heading', { name: "Eligibility" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Student Group*\"]").hover();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(3).click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.locator("button.btn.btn-school.ng-scope>span.ng-scope").nth(1).hover();
  await page.getByRole('button', { name: "Next" }).click();
  await page.getByRole('heading', { name: "Job Posting" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Ok" }).click();
  await page.getByRole('heading', { name: "Human Resource" }).hover();
  await page.getByRole('link', { name: "Job Posting" }).hover();
  await page.getByRole('link', { name: "Applicants (0)" }).click();
  await page.locator("BUTTON[type='button']").nth(16).click();
  await page.getByRole('link', { name: "Add Applicant" }).click();
  await page.getByRole('heading', { name: "Add Student" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Student*\"]").hover();
  await page.getByPlaceholder("Name or Student Id").fill("e2e Test Student ");
  await page.locator("//DIV[normalize-space() = \"e2e Test Student (e2e.student.fullaccess@campuswide.com)\"]").nth(2).click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Add" }).click();
  await page.locator("//DIV[normalize-space() = \"Editing Application for e2e Test Student\"]").hover();
  await page.getByRole('heading', { name: "Resume (required)" }).hover();
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Applicants (1)" }).hover();
  await page.getByRole('link', { name: "e2e Test Student" }).hover();
  await page.getByRole('link', { name: "Resume" }).hover();
  await page.locator("div.num-results>span.ng-binding.ng-scope").hover();
  await page.locator("BUTTON[type='button']").nth(16).click();
  await page.getByRole('link', { name: "Add Applicant" }).click();
  await page.getByRole('heading', { name: "Add Student" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Student*\"]").hover();
  await page.getByPlaceholder("Name or Student Id").fill("Alexis Kramer ");
  await page.locator("//DIV[normalize-space() = \"Alexis Kramer (Alexis.Kramer@campuswide.com)\"]").nth(2).click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Add" }).click();
  await page.locator("//DIV[normalize-space() = \"Editing Application for Alexis Kramer\"]").hover();
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "Test_Resume_01.pdf (54 KB)" }).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Alexis Kramer" }).hover();
  await page.locator("//DIV[normalize-space() = \"Resume\"]").hover();
  await page.locator("div.num-results>span.ng-binding.ng-scope").hover();
  await page.locator("BUTTON[type='button']").nth(16).click();
  await page.getByRole('link', { name: "Download All Application Packages" }).hover();
  await page.getByRole('link', { name: "Export All" }).hover();
  await page.getByRole('link', { name: "Message All" }).hover();
  await page.getByRole('link', { name: "Download All Application Packages" }).click();
  await page.getByRole('heading', { name: "Packet Details" }).hover();
  await page.getByRole('heading', { name: "Cover Page" }).hover();
  await page.getByRole('heading', { name: "Documents Included in the Packet At least one document must be included in the packet" }).hover();
  await page.getByRole('heading', { name: "Delivery Options At least one delivery option must be selected" }).hover();
  await page.getByRole('heading', { name: "Share this Packet Use a comma to separate email addresses" }).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(5000);
  await page.locator("div.num-results>span.ng-binding.ng-scope").click();
  await page.waitForTimeout(2000);
  await page.locator("BUTTON[type='button']").nth(17).click();
  await page.getByRole('link', { name: "Delete Application" }).click();
  await page.getByRole('heading', { name: "Remove Applicant" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Delete" }).click();
  await page.waitForTimeout(5000);
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//A[contains(text(),"Alexis Kramer")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("BUTTON[type='button']").nth(17).click();
  await page.getByRole('link', { name: "Delete Application" }).click();
  await page.getByRole('heading', { name: "Remove Applicant" }).hover();
  await page.locator("//DIV[normalize-space() = \"This will delete the application of the student(s) and remove them from the process.\"]").hover();
  await page.getByRole('button', { name: "Delete" }).click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//A[contains(text(),"e2e Test Student")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "Applicants (0)" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Job Posting" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Delete Job Posting" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).hover();
  await page.reload();
  await page.waitForLoadState('load');
});
