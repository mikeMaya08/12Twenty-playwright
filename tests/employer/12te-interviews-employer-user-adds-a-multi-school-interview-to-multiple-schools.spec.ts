// TC: TC67722
// 12TE Interviews - Employer user adds a multi-school interview to multiple schools

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTION,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_CONTAINS,
  CKE_DESCRIPTION,
  H2_JOB_DATES_CT,
  INPUT_CHECKBOX_MULTI,
  LABEL_REVIEW_APPLICANTS,
  MODAL_PLEASE_CONFIRM_CT,
  RBTN_CONTINUE_CONT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Interviews - Employer user adds a multi-school interview to multiple schools - TC67722", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
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
  });

  await test.step(`Click "Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Interviews\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//A[contains(text(),\"Interviews\")]").nth(0).hover();
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//A[contains(text(),\"Interviews\")]/../../li/a[contains(text(),\"Analytics\")]").nth(0).hover();
  });

  await test.step(`Click "Interviews"`, async () => {
    await page.locator("//A[contains(text(),\"Interviews\")]").nth(0).click();
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//H1[contains(text(),\"Interviews\")]").nth(0).hover();
  });

  await test.step(`Click "Interview Schedule"`, async () => {
    await page.locator("//A[normalize-space() = \"Interview Schedule\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H2[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Interview Test"`, async () => {
    await page.locator("//INPUT[@name='Name'][@type='text'][@placeholder='Interview Name']").nth(0).fill("Muuktest Interview Test");
  });

  await test.step(`Hover "Interview Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Format*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Format*\"]").nth(0).hover();
  });

  await test.step(`Hover "Interview Dates"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Dates\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Date Selection*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Date Selection*\"]").nth(0).hover();
  });

  await test.step(`Click "Employer Selected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Selected\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='DateSelectionTypeId'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Interview Plan*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Plan*\"]").nth(0).click();
  });

  await test.step(`Select "number:31"`, async () => {
    await page.locator("//SELECT[@id='input-n3qriqw-select'][@name='CoreInterviewPlanTemplateId']").nth(0).selectOption("number:31");
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Muuktest Interview Test"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Interview Test\"]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator("//DIV[contains(text(),\"Walmart\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Postings (0)"`, async () => {
    await page.locator("//A[contains(text(),\"Job Postings (0)\")]").nth(0).hover();
  });

  await test.step(`Hover "Add a job posting to your interview"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Add a job posting to your interview\")]").nth(0).hover();
  });

  await test.step(`Click "New Job"`, async () => {
    await page.locator("//A[normalize-space() = \"New Job\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Please select one or more program types."`, async () => {
    await page.locator("//H3[contains(text(),\"Please select one or more program types.\")]").nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "e2e"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='School']").nth(0).fill("e2e");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide"`, async () => {
    await page.locator("//DIV[contains(text(),\"E2E Tests Campuswide\")]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Law"`, async () => {
    await page.locator("//DIV[contains(text(),\"E2E Tests Law\")]").nth(0).click();
  });

  await test.step(`Hover "Selected Schools"`, async () => {
    await page.locator("//H3[contains(text(),\"Selected Schools\")]").nth(0).hover();
  });

  await test.step(`Hover "Items: 2"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Items: 2\"]").nth(0).hover();
  });

  await test.step(`Hover "E2E Tests Campuswide"`, async () => {
    await page.locator("//DIV[contains(text(),\"E2E Tests Campuswide\")]").nth(1).hover();
  });

  await test.step(`Hover "E2E Tests Law"`, async () => {
    await page.locator("//DIV[contains(text(),\"E2E Tests Law\")]").nth(1).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Continue\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Job Title *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Title *\"]").nth(0).hover();
  });

  await test.step(`Hover "Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Employment Types *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employment Types *\"]").nth(0).hover();
  });

  await test.step(`Fill "e2e Job Posting"`, async () => {
    await page.locator("//INPUT[@name='JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("e2e Job Posting");
  });

  await test.step(`Click "-- Please Select Employment Types --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Employment Types --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Type of Job *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type of Job *\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreJobTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Practice Areas *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Practice Areas *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Practice Areas --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Practice Areas --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(7).click();
  });

  await test.step(`Click "Industries *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Industries --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Industries --\"]").nth(0).click();
  });

  await test.step(`Click "Industries *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries *\"]//following::label[normalize-space()=\"Select all\"]").nth(0).click();
  });

  await test.step(`Click "Functions *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Functions *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Functions --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Functions --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space() = 'Functions *']//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "Location Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location Type *\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='LocationTypeId']").nth(0).selectOption("number:3");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Salary Range\"]").nth(0).click();
  });

  await test.step(`Click "Description *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description *\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Test"`, async () => {
    await page.keyboard.type("Test");
    await page.locator("//LABEL[contains(text(),\"Apply through an external application li\")]").nth(0).click();
  });

  await test.step(`Hover "Job Dates"`, async () => {
    await page.locator(H2_JOB_DATES_CT).nth(0).hover();
  });

  await test.step(`Hover "How do you plan on reviewing your appli…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"How do you plan on reviewing your applicants?*\"]").nth(0).hover();
  });

  await test.step(`Fill "https://www.linkedin.com"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='Url'][@placeholder='Url']").nth(0).fill("https://www.linkedin.com");
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Click "Target Candidat"`, async () => {
    await page.locator("//H2[contains(text(),\"Target Candidat\")]").nth(0).click();
  });

  await test.step(`Hover "Candidate Population*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Population*\"]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students & Alumni\"]").nth(0).click();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Back\")]").nth(1).hover();
  });

  await test.step(`Fill "Current"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='TargetCohort'][@placeholder='Additional Candidate Requirements']").nth(0).fill("Current");
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(1).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Order Details"`, async () => {
    await page.locator("//H3[contains(text(),\"Order Details\")]").nth(0).hover();
  });

  await test.step(`Click "Submit Free Order"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Submit Free Order\")]").nth(0).click();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Hover "Edit Interview"`, async () => {
    await page.locator("//A[normalize-space() = \"Edit Interview\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel Interview"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Interview\"]").nth(0).hover();
  });

  await test.step(`Click "Cancel Interview"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Interview\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Canceling an interview will update the s"`, async () => {
    await page.locator("//DIV[contains(text(),\"Canceling an interview will update the s\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Interviews\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Muuktest Interview Test\")]//ancestor::tr//SPAN[contains(text(),\"Schedule Needed\")]";
  });

});
