// TC: TC64499
// Job Listings &amp; Interviews - Admin posts a Job, student applies, admin deletes application and job

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Job Listings &amp; Interviews - Admin posts a Job, student applies, admin deletes application and job", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).hover();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Human Resource")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("a.primary-item.primary-item-with-icons.job-title>span.primary-item-text.ng-binding").click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//A[@role=\'tab\'][normalize-space() = "Applicants (1)"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "Applicants (1)" }).click();
  await page.getByRole('link', { name: "e2e Test Student" }).hover();
  await page.getByRole('link', { name: "Resume" }).hover();
  await page.locator("button.btn.dropdown-toggle.ng-binding.btn-icon>span.glyphicon.glyphicon-option-vertical.ng-scope").nth(2).click();
  await page.getByRole('link', { name: "Delete Application" }).click();
  await page.getByRole('heading', { name: "Remove Applicant" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete" }).click();
  await page.locator("div.search-results.ng-scope>div.no-results").nth(1).hover();
  }
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Job Posting" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Job Posting" }).click();
  }
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('link', { name: "Post a Job" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Create Job Posting" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Employer*\"]").hover();
  await page.getByPlaceholder("Employer").fill("Walmart");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.locator("//LABEL[normalize-space() = \"Job Title*\"]").hover();
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.getByPlaceholder("Job Title").fill("Human Resource");
  await page.getByRole('button', { name: "-- Type of Job --" }).click();
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
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Job Function*\"]").click();
  await page.getByRole('button', { name: "-- Job Function --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Preferred Years of Experience\"]").click();
  await page.getByRole('button', { name: "-- Work Authorization Requirement --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Application Method(s)*" }).click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via This Site*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.locator("div.form-group>label.control-label").nth(12).hover();
  await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]//following::label[normalize-space()=\"No\"]").click();
  await page.locator("div.form-group>label.control-label").nth(13).hover();
  await page.locator("//LABEL[normalize-space() = \"No\"]").nth(2).click();
  await page.locator("//LABEL[normalize-space() = \"Job Description*\"]").click();
  await page.locator("html").click();
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('heading', { name: "Job Dates" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]//following::button").click();
  await page.getByPlaceholder("Search").fill("Chennai");
  await page.locator("//LABEL[normalize-space() = \"Chennai, Kolkata, Mumbai, New Delhi (UTC+05:30)\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[normalize-space() = \"How do you plan on reviewing your applicants?\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"I will review applicants as they come in, and may close the job posting early\"]").click();
  await page.locator("div.form-group>label.control-label").nth(19).hover();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.locator("label.control-label>span.ng-binding").hover();
  await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").click();
  await page.locator("//label[normalize-space()=\"Interviewer\"]/following::select").click();
  await page.keyboard.press("ArrowDown");
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Use My Information" }).click();
  await page.getByPlaceholder("Title").fill("test");
  await page.getByPlaceholder("Job Posting Contact Phone").fill("7660072137");
  await page.getByPlaceholder("Job Posting Contact Address").fill("Texas");
  await page.locator("//LABEL[normalize-space() = \"Student Group*\"]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(3).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(4).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.ng-scope>label.control-label.ng-binding").nth(5).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Career Center Administrator" }).click();
  await page.locator("//LABEL[normalize-space() = \"Source of Job Posting\"]").hover();
  await page.locator("SELECT[id='JobPostingSourceId'][name='JobPostingSourceId']").selectOption("number:100063031018421");
  await page.locator("label.control-label>span.ng-binding").nth(1).hover();
  await page.locator("SELECT[id='custom_attribute_3'][name='custom_attribute_3']").selectOption("540016055100183");
  await page.getByRole('heading', { name: "Job Posting Owner" }).hover();
  await page.locator("div.form-section-header>span.form-section-header-help-text").nth(3).hover();
  await page.locator("//LABEL[normalize-space() = \"Owner Email*\"]").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save Draft" }).hover();
  await page.getByRole('button', { name: "Next" }).click();
  await page.getByRole('heading', { name: "Job Posting" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Ok" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Human Resource" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Job Posting Status: Application Open. Any edits will take effect immediately.\"]").hover();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
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
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('link', { name: "Advanced Search" }).click();
  await page.waitForTimeout(3000);
  await page.locator("tt-display-selected-filter-default.ng-isolate-scope>span.has-filter-value.ng-binding.not-excluded").click();
  await page.locator("//LABEL[normalize-space() = \"Approved\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Application Open\"]").click();
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).hover();
  await page.reload();
  await page.getByPlaceholder("Employer, Job Title, or Keyword").fill("Human Resource");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("a.primary-item.primary-item-with-icons.job-title>span.primary-item-text.ng-binding").click();
  await page.getByRole('link', { name: "Job Details" }).hover();
  await page.getByRole('heading', { name: "Human Resource" }).hover();
  await page.getByRole('link', { name: "Walmart" }).hover();
  await page.getByRole('link', { name: "Apply Now" }).click();
  await page.waitForTimeout(4000);
  indexPages = MK.onSetGV(`2`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('heading', { name: "Human Resource" }).hover();
  await page.getByRole('link', { name: "Walmart" }).hover();
  await page.locator("div.sub-header.ng-scope>text.ng-binding").hover();
  await page.locator("//SPAN[normalize-space() = \"Full-Time Job\"]").hover();
  await page.locator("em>span").hover();
  await page.locator("//LABEL[normalize-space() = \"Upload New\"]").click();
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("a.file-name>span.temp-file.ng-binding").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Back to Job Details" }).click();
  await page.getByRole('button', { name: "Withdraw from Application" }).hover();
  await page.getByRole('button', { name: "Edit Application" }).hover();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Human Resource")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("a.primary-item.primary-item-with-icons.job-title>span.primary-item-text.ng-binding").click();
  await page.waitForTimeout(3000);
  selector = MK.onSetGV(`//A[@role=\'tab\'][normalize-space() = "Applicants (1)"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "Applicants (1)" }).click();
  await page.getByRole('link', { name: "e2e Test Student" }).hover();
  await page.getByRole('link', { name: "Resume" }).hover();
  await page.locator("button.btn.dropdown-toggle.ng-binding.btn-icon>span.glyphicon.glyphicon-option-vertical.ng-scope").nth(2).click();
  await page.getByRole('link', { name: "Delete Application" }).click();
  await page.getByRole('heading', { name: "Remove Applicant" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete" }).click();
  await page.locator("div.search-results.ng-scope>div.no-results").nth(1).hover();
  }
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Job Posting" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Job Posting" }).click();
  }
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByPlaceholder("Employer, Job Title, or Keyword").fill("Human Resource");
  await page.locator("BUTTON[type='button']").nth(2).click();
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
