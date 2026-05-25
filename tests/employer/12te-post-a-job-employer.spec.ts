// TC: TC62792
// 12TE - Post a Job - Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_GET_RESULTS,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  CKE_CONTENTS,
  DIV_RESULTS_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_DATE,
  MODAL_PLEASE_CONFIRM_CT,
  NAV_POST_A_JOB,
  RBTN_CONTINUE_CONT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE - Post a Job - Employer - TC62792", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://employer.qa-12twenty.com/', {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Job Postings"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Postings\"]").nth(0).click();
  });

  await test.step(`Hover "Job Postings"`, async () => {
    await page.locator("//A[contains(text(),\"Job Postings\")]").nth(0).hover();
  });

  await test.step(`Hover "Analytics"`, async () => {
    await page.locator("//A[contains(text(),\"Analytics\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Postings"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Postings\")]").nth(0).hover();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
  });

  await test.step(`Hover "Please select one or more program types…"`, async () => {
    await page.locator("//h3[contains(text(),\"Please select one or more program types...\")]").nth(0).hover();
  });

  await test.step(`Click "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).click();
  });

  await test.step(`Hover "MBA, EMBA & PTMBA"`, async () => {
    await page.locator("//P[normalize-space() = \"MBA, EMBA & PTMBA\"]").nth(0).hover();
  });

  await test.step(`Hover "Please select one or more program types."`, async () => {
    await page.locator("//H3[contains(text(),\"Please select one or more program types.\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Hover "1 School Selection"`, async () => {
    await page.locator("//DIV[normalize-space() = \"1 School Selection\"]").nth(0).hover();
  });

  await test.step(`Hover "2 Job Details"`, async () => {
    await page.locator("//DIV[normalize-space() = \"2 Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "3 Extras"`, async () => {
    await page.locator("//DIV[normalize-space() = \"3 Extras\"]").nth(0).hover();
  });

  await test.step(`Hover "4 Review & Submit"`, async () => {
    await page.locator("//DIV[normalize-space() = \"4 Review & Submit\"]").nth(0).hover();
  });

  await test.step(`Click "Columbia Business School"`, async () => {
    await page.locator("//DIV[contains(text(),\"Columbia Business School\")]").nth(0).click();
  });

  await test.step(`Hover "Selected Schools"`, async () => {
    await page.locator("//H3[contains(text(),\"Selected Schools\")]").nth(0).hover();
  });

  await test.step(`Hover "Items: 1"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Items: 1\"]").nth(0).hover();
  });

  await test.step(`Hover "Columbia Business Schoo"`, async () => {
    await page.locator("//DIV[contains(text(),\"Columbia Business Schoo\")]").nth(1).hover();
  });

  await test.step(`Click "Harvard Business School"`, async () => {
    await page.locator("//DIV[contains(text(),\"Harvard Business School\")]").nth(0).click();
  });

  await test.step(`Hover "Harvard Business School"`, async () => {
    await page.locator("//DIV[contains(text(),\"Harvard Business School\")]").nth(1).hover();
  });

  await test.step(`Hover "Selected Schools"`, async () => {
    await page.locator("//H3[contains(text(),\"Selected Schools\")]").nth(0).hover();
  });

  await test.step(`Hover "Items: 2"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Items: 2\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//policy[@class=\"ng-scope\"]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Hover "2 Job Details"`, async () => {
    await page.locator("//DIV[normalize-space() = \"2 Job Details\"]").nth(0).hover();
  });

  await test.step(`Fill "Business job posting"`, async () => {
    await page.locator("//INPUT[@name='JobTitle'][@type='text'][@placeholder='Job Title'][@id='JobTitle']").nth(0).fill("Business job posting");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreJobTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "-- Please Select Industries --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Industries --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(17).click();
  });

  await test.step(`Click "Functions *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Functions *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Functions --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Functions --\"]").nth(0).click();
  });

  await test.step(`Fill "informat"`, async () => {
    await page.locator("//label[contains(text(),\"Functions\")]//following::input[@placeholder=\"Search\"]").nth(0).fill("informat");
  });

  await test.step(`Click "Cybersecurity & Information Security"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Cybersecurity & Information Security\"]").nth(0).click();
  });

  await test.step(`Click "Location Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location Type *\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='LocationTypeId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover "Candidate Population*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Population*\"]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students & Alumni\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click "Work Authorization *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Authorization *\"]/following::LABEL[normalize-space() = \"All Work Authorizations Accepted\"]").nth(0).click();
  });

  await test.step(`Click "Description *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description *\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_CONTENTS).nth(0).click();
  });

  await test.step(`Type "Require 2 years of experience in React …"`, async () => {
    await page.keyboard.type("Require 2 years of experience in React development");
    await page.locator("//LABEL[contains(text(),\"Apply through an external application li\")]").nth(0).click();
  });

  await test.step(`Fill "test@gmail.com"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='Url'][@placeholder='Url']").nth(0).fill("test@gmail.com");
  });

  await test.step(`Fill "12345"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='ExternalId'][@placeholder='External ID']").nth(0).fill("12345");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "I will wait until the end of the applic…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"I will wait until the end of the application period to review all of the applicants\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@name='ApplicantReviewPlan'][@type='radio'][@id='input-snixkl-radio-buttons']").nth(1).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Click "Submit Free Order"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Submit Free Order\")]").nth(0).click();
  });

  await test.step(`Hover "Thank You!"`, async () => {
    await page.locator("//H1[contains(text(),\"Thank You!\")]").nth(0).hover();
  });

  await test.step(`Hover "You've submitted a payment"`, async () => {
    await page.locator("//DIV[contains(text(),\"You've submitted a payment\")]").nth(0).hover();
  });

  await test.step(`Hover "This order has been moved to the Order …"`, async () => {
    await page.locator("//P[normalize-space() = \"This order has been moved to the Order History page. An email has also been sent to you confirming that your order has been paid.\"]").nth(0).hover();
  });

  await test.step(`Hover "Order Details"`, async () => {
    await page.locator("//H3[contains(text(),\"Order Details\")]").nth(0).hover();
  });

  await test.step(`Click "Job Postings"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Postings\"]").nth(0).click();
  });

  await test.step(`Click "Business job posting"`, async () => {
    await page.locator("//A[normalize-space() = \"Business job posting\"]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Business job posting"`, async () => {
    await page.locator("//H1[normalize-space() = \"Business job posting\"]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator("//DIV[contains(text(),\"Walmart\")]").nth(0).hover();
  });

  await test.step(`Hover "Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Application Open\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(1).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(4).hover();
  });

  await test.step(`Hover "Require 2 years of experience in React d"`, async () => {
    await page.locator("//P[contains(text(),\"Require 2 years of experience in React d\")]").nth(0).hover();
  });

  await test.step(`Click "Applicants (0)"`, async () => {
    await page.locator("//A[contains(text(),\"Applicants (0)\")]").nth(0).click();
  });

  await test.step(`Click "Schools (2)"`, async () => {
    await page.locator("//A[contains(text(),\"Schools (2)\")]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[normalize-space(translate(., '\\u00A0', ' ')) = \"Delivered\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(5).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[normalize-space(translate(., '\\u00A0', ' ')) = \"Delivered\"]").nth(0).hover();
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator("//A[contains(text(),\"Home\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//A[contains(text(),\"Edit\")]").nth(0).hover();
  });

  await test.step(`Hover "Duplicate"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Duplicate\")]").nth(0).hover();
  });

  await test.step(`Hover "Deactivate"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Deactivate\")]").nth(0).hover();
  });

  await test.step(`Click "Deactivate"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Deactivate\")]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "By deactivating this posting, the applic"`, async () => {
    await page.locator("//DIV[contains(text(),\"By deactivating this posting, the applic\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Inactive"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Inactive\")]").nth(0).hover();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "Business job posting"`, async () => {
    await page.locator("//INPUT[@id='JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Business job posting");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(11).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Results:"`, async () => {
    await page.locator(DIV_RESULTS_CT).nth(0).hover();
  });

  await test.step(`Hover "Business job posting"`, async () => {
    await page.locator("//A[normalize-space() = \"Business job posting\"]").nth(0).hover();
  });

  await test.step(`Hover "Inactive"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Inactive\")]").nth(0).hover();
  });

});
