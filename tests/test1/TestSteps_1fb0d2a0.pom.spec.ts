// TC: TC62561
// OCI - Student views&#x2F;applies&#x2F;withdraws

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("OCI - Student views&#x2F;applies&#x2F;withdraws", async ({ page, context }) => {
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
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).hover();
  await page.getByRole('link', { name: "Advanced Search" }).click();
  await page.getByRole('link', { name: "All" }).hover();
  await page.getByRole('link', { name: "Interviews" }).hover();
  await page.getByRole('link', { name: "Job Listings" }).hover();
  await page.getByRole('link', { name: "Student Employment" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Job Title\"]").click();
  await page.getByPlaceholder("Job Title").fill("Job Posting 1");
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).click();
  await page.locator("//SPAN[normalize-space() = \"Job Status\"]").click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Application Open\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Approved\"]").click();
  await page.getByRole('heading', { name: "Job Listings & Interviews" }).click();
  await page.locator("//A[normalize-space() = \"Job Posting 1\"]").click();
  await page.getByRole('link', { name: "Job Details" }).hover();
  await page.getByRole('link', { name: "Apply Now" }).click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  await page.waitForLoadState('load');
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  await page.locator("//LABEL[normalize-space() = \"Upload New\"]").click();
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByPlaceholder("Please name the file").fill("PostingForJob-Resume");
  await page.getByRole('link', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Back to Job Details" }).click();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("//A[normalize-space() = \"Job Details\"]//following::SPAN[contains(text(),\"×\")]").click();
  await page.reload();
  await page.getByRole('link', { name: "Applied" }).hover();
  await page.reload();
  await page.getByPlaceholder("Employer, Job Title, or Keyword").fill("Job Posting");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("//span[normalize-space()=\"Application Open\"]/ancestor::tr//span[normalize-space()=\"Job Posting 1\"]").click();
  await page.locator("div.job-posting-application-status-text.ng-binding>strong.ng-binding").hover();
  await page.locator("div.actionable-alert-message>div.job-posting-application-status-text.ng-binding").hover();
  await page.getByRole('button', { name: "Withdraw from Application" }).hover();
  await page.getByRole('button', { name: "Edit Application" }).hover();
  await page.waitForTimeout(2000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.admin.qa-12twenty.com/Login');
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
  await page.getByRole('button', { name: "Job Status Approved, Application Open (empty)" }).click();
  await page.locator("//LABEL[normalize-space() = \"Approved\"]").click();
  await page.getByRole('button', { name: "Job Status Approved, Application Open (empty)" }).click();
  await page.locator("//a[contains(normalize-space(),\"applicant\")]/ancestor::tr//span[contains(text(),\"Job Posting 1\")]").click();
  await page.getByRole('heading', { name: "Job Posting 1" }).hover();
  await page.locator("div.sub-header.badges>span.badge.active").hover();
  await page.locator("div.sub-header.badges>span.badge.application-open").hover();
  await page.getByRole('link', { name: "Applicants (145)" }).click();
  await page.getByRole('button', { name: "Interview Decision" }).click();
  await page.locator("//LABEL[normalize-space() = \"Pending\"]").click();
  await page.getByRole('heading', { name: "Job Posting 1" }).click();
  await page.locator("div.num-results>span.ng-binding.ng-scope").hover();
  await page.getByRole('link', { name: "e2e Test Student" }).hover();
  await page.getByRole('link', { name: "Resume" }).hover();
  await page.locator("//DIV[normalize-space() = \"Pending ()\"]").hover();
  await page.locator("div.badge.decision.pending>span.fas.fa-pencil-alt.pointer.ng-scope").click();
  await page.getByRole('heading', { name: "Manage Interview Decision" }).hover();
  await page.locator("SELECT[id='EmployerDecisionId'][name='EmployerDecisionId']").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("div.search-results.ng-scope>div.no-results").hover();
  await page.getByRole('button', { name: "Pending" }).click();
  await page.locator("//LABEL[normalize-space() = \"Pending\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Extended Interview\"]").click();
  await page.getByRole('heading', { name: "Job Posting 1" }).click();
  await page.locator("td.center.ng-scope>div.decision").nth(289).hover();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await page.getByRole('button', { name: "Withdraw from Application" }).click();
  await page.getByRole('heading', { name: "Withdraw Job Posting Application" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Withdraw" }).click();
  await page.getByRole('link', { name: "Apply Now" }).hover();
  await page.locator("//A[normalize-space() = \"Job Details\"]//following::SPAN[contains(text(),\"×\")]").click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  selector = MK.onSetGV(` //SPAN[contains(text(),"Job Posting 1")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await page.waitForTimeout(1000);
  selector = MK.onSetGV(`//A[contains(text(),"e2e Test Student")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
