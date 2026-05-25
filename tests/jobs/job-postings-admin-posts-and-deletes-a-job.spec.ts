// TC: TC61664
// Job Postings - Admin posts and deletes a job

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  CKE_DESCRIPTION,
  CONFIRM_PERM_DELETE,
  H1_JOB_LISTINGS,
  H2_ATTACHMENTS_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  INPUT_JOB_TITLE,
  INPUT_RADIO_MULTI,
  INPUT_SALARY_MAX,
  INPUT_SALARY_MIN,
  LABEL_JOB_FUNCTION,
  LABEL_REVIEW_APPLICANTS,
  LABEL_TIMEZONE_CITY,
  LABEL_TIME_ZONE,
  LABEL_YES,
  MULTI_INDUSTRY,
  MULTI_JOB_FUNCTION,
  MULTI_TYPE_OF_JOB,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  NAV_POST_A_JOB,
  RBTN_DELETE,
  SELECT_CURRENCY,
  SELECT_LOCATION_TYPE,
  SELECT_PAY_FORMAT,
} from '@config/selectors';

test("Job Postings - Admin posts and deletes a job - TC61664", async ({ page, context }) => {
  let fileName = `0`;
  let textContent = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
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
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Create Job Posting"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Job Posting\")]").nth(0).hover();
  });

  await test.step(`Fill "State Farm Insurance"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("State Farm Insurance");
  });

  await test.step(`Fill "Manager"`, async () => {
    await page.locator(INPUT_JOB_TITLE).nth(0).fill("Manager");
  });

  await test.step(`Click "-- Type of Job --"`, async () => {
    await page.locator(MULTI_TYPE_OF_JOB).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Salary Range\"]").nth(0).click();
  });

  await test.step(`Fill "50000"`, async () => {
    await page.locator(INPUT_SALARY_MIN).nth(0).fill("50000");
  });

  await test.step(`Fill "70000"`, async () => {
    await page.locator(INPUT_SALARY_MAX).nth(0).fill("70000");
  });

  await test.step(`Select "number:14"`, async () => {
    await page.locator(SELECT_CURRENCY).nth(0).selectOption("number:14");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator(SELECT_PAY_FORMAT).nth(0).selectOption("number:3");
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator(SELECT_LOCATION_TYPE).nth(0).selectOption("number:2");
  });

  await test.step(`Click "-- Industry --"`, async () => {
    await page.locator(MULTI_INDUSTRY).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(6).click();
  });

  await test.step(`Click "Job Function*"`, async () => {
    await page.locator(LABEL_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Click "-- Job Function --"`, async () => {
    await page.locator(MULTI_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(105).click();
  });

  await test.step(`Click "Preferred Years of Experience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Years of Experience\"]").nth(0).click();
  });

  await test.step(`Fill "2"`, async () => {
    await page.locator("//INPUT[@id='RequiredYearsOfExperience'][@name='RequiredYearsOfExperience'][@placeholder='Preferred Years of Experience'][@type='number']").nth(0).fill("2");
  });

  await test.step(`Select "number:6"`, async () => {
    await page.locator("//SELECT[@id='InterviewFormatId'][@name='InterviewFormatId']").nth(0).selectOption("number:6");
  });

  await test.step(`Click "-- Work Authorization"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][@title=\"None selected\"][contains(text(),\"-- Work Authorization\")]").nth(0).click();
  });

  await test.step(`Click "Work Authorization"`, async () => {
    await page.locator("//*[contains(text(),\"Work Authorization\")]//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "Application Method(s)*"`, async () => {
    await page.locator("//H2[normalize-space() = \"Application Method(s)*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via This Site*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='ShouldApplyViaSite'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Apply via External Link"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]//following::label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='ShouldApplyExternally'][@type='radio']").nth(1).check();
  });

  await test.step(`Click "Apply via Email"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via Email\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via Email\")]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='ShouldApplyViaEmail'][@type='radio']").nth(0).check();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@id='ApplicationEmailAddress'][@name='ApplicationEmailAddress'][@placeholder='e.g. sample@domain.com'][@type='email']").nth(0).fill("john123@12twenty.com");
  });

  await test.step(`Click "Job Description"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Description\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Set textContent`, async () => {
    textContent = "Managing a portfolio of clients, developing strong relationships, and ensuring the successful delivery of our products and services.";
  });

  await test.step(`Click "Attachments"`, async () => {
    await page.locator(H2_ATTACHMENTS_CT).nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).click();
  });

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]/following::button").nth(0).click();
  });

  await test.step(`Fill "Chennai"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]/following::INPUT[@type='text'][@placeholder='Search']").nth(0).fill("Chennai");
  });

  await test.step(`Click "Chennai, Kolkata, Mumbai, New Delhi (UT…"`, async () => {
    await page.locator(LABEL_TIMEZONE_CITY).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(44).check();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD[@class=\"active day\"]/following::td").nth(1).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD[@class=\"active day\"]/following::td").nth(2).click();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Fill "03/01/2025"`, async () => {
    await page.locator(INPUT_DATE).nth(2).fill("03/01/2025");
  });

  await test.step(`Click "For Immediate Hire"`, async () => {
    await page.locator("//SPAN[contains(text(),\"For Immediate Hire\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(3).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "Project Manager"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("Project Manager");
  });

  await test.step(`Fill "9766336543"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("9766336543");
  });

  await test.step(`Fill "Hyderabad 123"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("Hyderabad 123");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(4).click();
  });

  await test.step(`Select "number:2021"`, async () => {
    await page.locator("//SELECT[@id='ContactAlumniGraduationYear'][@name='ContactAlumniGraduationYear']").nth(0).selectOption("number:2021");
  });

  await test.step(`Select "number:14999901011484"`, async () => {
    await page.locator("//SELECT[@id='ContactAlumniGraduationProgramId'][@name='ContactAlumniGraduationProgramId']").nth(0).selectOption("number:14999901011484");
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]/following::BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]/following::label[contains(normalize-space(),\"Select all\")]").nth(0).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]").nth(0).click();
  });

  await test.step(`Click "-- All Degree Levels --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]//following::BUTTON[normalize-space()=\"-- All Degree Levels --\"]").nth(0).click();
  });

  await test.step(`Click "Degree Level"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]").nth(0).click();
  });

  await test.step(`Click "-- All College/Schools --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::BUTTON[normalize-space()=\"-- All College/Schools --\"]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]").nth(0).click();
  });

  await test.step(`Click "-- All Major/Academic Programs --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]//following::BUTTON[normalize-space()=\"-- All Major/Academic Programs --\"]").nth(0).click();
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]").nth(0).click();
  });

  await test.step(`Select "number:100063031018421"`, async () => {
    await page.locator("//SELECT[@id='JobPostingSourceId'][@name='JobPostingSourceId']").nth(0).selectOption("number:100063031018421");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_3'][@name='custom_attribute_3']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(1).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Job Posting"`, async () => {
    await page.locator("//H3[contains(text(),\"Job Posting\")]").nth(0).hover();
  });

  await test.step(`Hover "Approve this job posting?"`, async () => {
    await page.locator("//DIV[contains(text(),\"Approve this job posting?\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator(BTN_OK_LOWERCASE).nth(0).click();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//H1[normalize-space() = \"Manager\"]").nth(0).hover();
  });

  await test.step(`Hover "State Farm Insurance"`, async () => {
    await page.locator("//A[contains(text(),\"State Farm Insurance\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TEXT").nth(0).hover();
  });

  await test.step(`Hover "Full-Time Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Full-Time Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Apply Immediately"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Apply Immediately\"]").nth(1).hover();
  });

  await test.step(`Hover "Job Posting - Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Job Posting - Application Open\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting Status: Application Open. A…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Posting Status: Application Open. Any edits will take effect immediately.\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Job Posting"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Job Posting\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Job Posting"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Job Posting\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForLoadState('load');
  });

});
