// TC: TC62561
// OCI - Student views/applies/withdraws

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  H1_JOB_LISTINGS,
  INPUT_CHECKBOX_MULTI,
  LABEL_UPLOAD_NEW,
  LINK_E2E_TEST_STUDENT_CT,
  NAV_HOME,
  NAV_JOB_LISTINGS,
} from '@config/selectors';

test("OCI - Student views/applies/withdraws - TC62561", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Advanced Search"`, async () => {
    await page.locator("//A[contains(text(),\"Advanced Search\")]").nth(0).click();
  });

  await test.step(`Hover "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).hover();
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//A[contains(text(),\"Interviews\")]").nth(1).hover();
  });

  await test.step(`Hover "Job Listings"`, async () => {
    await page.locator("//A[contains(text(),\"Job Listings\")]").nth(1).hover();
  });

  await test.step(`Hover "Student Employment"`, async () => {
    await page.locator("//A[contains(text(),\"Student Employment\")]").nth(0).hover();
  });

  await test.step(`Click "Job Title"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Title\"]").nth(0).click();
  });

  await test.step(`Fill "Job Posting 1"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_AN_job_posting__job_title'][@placeholder='Job Title']").nth(0).fill("Job Posting 1");
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Job Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Status\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click "Application Open"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Application Open\"]").nth(0).click();
  });

  await test.step(`Click "Approved"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Approved\"]").nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Job Posting 1"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Posting 1\"]").nth(0).click();
  });

  await test.step(`Hover "Job Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Details\"]").nth(0).hover();
  });

  await test.step(`Click "Apply Now"`, async () => {
    await page.locator("//A[contains(text(),\"Apply Now\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Click "Upload New"`, async () => {
    await page.locator(LABEL_UPLOAD_NEW).nth(0).click();
  });

  await test.step(`Fill "PostingForJob-Resume"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='documentName'][@placeholder='Please name the file'][@title='file name']").nth(0).fill("PostingForJob-Resume");
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Apply\")]").nth(0).click();
  });

  await test.step(`Click "Back to Job Details"`, async () => {
    await page.locator("//A[contains(text(),\"Back to Job Details\")]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Job Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Details\"]//following::SPAN[contains(text(),\"×\")]").nth(0).click();
  });

  await test.step(`Hover "Job Posting 1"`, async () => {
    await page.reload();
    await page.locator("//SPAN[normalize-space() = \"Job Posting 1\"]//ancestor::tr//span[normalize-space()=\"Applied\"]").nth(0).hover();
  });

  await test.step(`Fill "Job Posting"`, async () => {
    await page.reload();
    await page.locator("//INPUT[@type='text'][@placeholder='Employer, Job Title, or Keyword']").nth(0).fill("Job Posting");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Application Open"`, async () => {
    await page.locator("//span[normalize-space()=\"Application Open\"]/ancestor::tr//span[normalize-space()=\"Job Posting 1\"]").nth(0).click();
  });

  await test.step(`Hover "Application:"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Application:\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[contains(@class,\"job-posting-application-status-text\")]").nth(0).hover();
  });

  await test.step(`Hover "Withdraw from Application"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Withdraw from Application\")]").nth(0).hover();
  });

  await test.step(`Hover "Edit Application"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Edit Application\")]").nth(0).hover();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsAdmin(page);
  });



  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Job Status Approved, Application Open (…"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Job Status Approved, Application Open (empty)\"]").nth(0).click();
  });

  await test.step(`Click "Approved"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Approved\"]").nth(0).click();
  });

  await test.step(`Click "Job Status Approved, Application Open (…"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Job Status Approved, Application Open (empty)\"]").nth(0).click();
  });

  await test.step(`Click "applicant"`, async () => {
    await page.locator("//a[contains(normalize-space(),\"applicant\")]/ancestor::tr//span[contains(text(),\"Job Posting 1\")]").nth(0).click();
  });

  await test.step(`Hover "Job Posting 1"`, async () => {
    await page.locator("//H1[normalize-space() = \"Job Posting 1\"]").nth(0).hover();
  });

  await test.step(`Hover "Registration - Active"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Registration - Active\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting - Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Job Posting - Application Open\")]").nth(0).hover();
  });

  await test.step(`Click "Applicants"`, async () => {
    await page.locator("//A[@role='tab'][contains(normalize-space(),\"Applicants\")]").nth(0).click();
  });

  await test.step(`Click "Interview Decision"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"Interview Decision\"]").nth(0).click();
  });

  await test.step(`Click "Pending"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Pending\"]").nth(0).click();
  });

  await test.step(`Click "Job Posting 1"`, async () => {
    await page.locator("//H1[normalize-space() = \"Job Posting 1\"]").nth(0).click();
  });

  await test.step(`Hover "Results: 1"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Results: 1\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover "Resume"`, async () => {
    await page.locator("//A[contains(text(),\"Resume\")]").nth(0).hover();
  });

  await test.step(`Hover "Pending ()"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Pending ()\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"badge decision pending\"]//span[contains(@class,\"fa-pencil-alt\")]").nth(0).click();
  });

  await test.step(`Hover "Manage Interview Decision"`, async () => {
    await page.locator("//H3[contains(text(),\"Manage Interview Decision\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='EmployerDecisionId'][@name='EmployerDecisionId']").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "No Results"`, async () => {
    await page.locator("//DIV[contains(text(),\"No Results\")]").nth(0).hover();
  });

  await test.step(`Click "Pending"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='Pending'][normalize-space() = \"Pending\"]").nth(0).click();
  });

  await test.step(`Click "Pending"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Pending\"]").nth(0).click();
  });

  await test.step(`Click "Extended Interview"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Extended Interview\"]").nth(0).click();
  });

  await test.step(`Click "Job Posting 1"`, async () => {
    await page.locator("//H1[normalize-space() = \"Job Posting 1\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[@class=\"decision \"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Withdraw from Application"`, async () => {
    await page.reload();
    await page.locator("//BUTTON[contains(text(),\"Withdraw from Application\")]").nth(0).click();
  });

  await test.step(`Hover "Withdraw Job Posting Application"`, async () => {
    await page.locator("//H3[contains(text(),\"Withdraw Job Posting Application\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to withdraw your j"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to withdraw your j\")]").nth(0).hover();
  });

  await test.step(`Click "Withdraw"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Withdraw\")]").nth(0).click();
  });

  await test.step(`Hover "Apply Now"`, async () => {
    await page.locator("//A[contains(text(),\"Apply Now\")]").nth(0).hover();
  });

  await test.step(`Click "Job Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Details\"]//following::SPAN[contains(text(),\"×\")]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = " //SPAN[contains(text(),\"Job Posting 1\")]";
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"e2e Test Student\")]";
  });

});
