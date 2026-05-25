// TC: TC64499
// Job Listings & Interviews - Admin posts a Job, student applies, admin deletes application and job

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_UPPER,
  BTN_SAVE_DRAFT,
  CKE_DESCRIPTION,
  CONFIRM_PERM_DELETE,
  H1_JOB_LISTINGS,
  H2_CAREER_CENTER_CT,
  H2_JOB_DATES_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  INPUT_JOB_TITLE,
  INPUT_RADIO_MULTI,
  INPUT_SALARY_MAX,
  INPUT_SALARY_MIN,
  LABEL_EMPLOYER,
  LABEL_INDUSTRY,
  LABEL_JOB_FUNCTION,
  LABEL_JOB_TITLE,
  LABEL_LOCATION_TYPE,
  LABEL_NO,
  LABEL_REVIEW_APPLICANTS,
  LABEL_STUDENT_GROUP,
  LABEL_TIMEZONE_CITY,
  LABEL_TIME_ZONE,
  LABEL_UPLOAD_NEW,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
  LINK_WALMART_CT,
  MULTI_INDUSTRY,
  MULTI_JOB_FUNCTION,
  MULTI_TYPE_OF_JOB,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  NAV_POST_A_JOB,
  RBTN_DELETE,
  RBTN_DELETE_APP,
  SELECT_CURRENCY,
  SELECT_LOCATION_TYPE,
  SELECT_PAY_FORMAT,
  SPAN_WALMART_CT,
} from '@config/selectors';

test("Job Listings & Interviews - Admin posts a Job, student applies, admin deletes application and job - TC64499", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

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

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Human Resource\")]";
  });

  await test.step(`Click "Human Resource"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Human Resource\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'tab\\'][normalize-space() = \"Applicants (1)\"]";
  });

  await test.step(`Click "Applicants (1)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (1)\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover "Resume"`, async () => {
    await page.locator("//A[contains(text(),\"Resume\")]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(116).click();
  });

  await test.step(`Click "Delete Application"`, async () => {
    await page.locator(RBTN_DELETE_APP).nth(0).click();
  });

  await test.step(`Hover "Remove Applicant"`, async () => {
    await page.locator("//H3[contains(text(),\"Remove Applicant\")]").nth(0).hover();
  });

  await test.step(`Hover "This will delete the application of the"`, async () => {
    await page.locator("//DIV[contains(text(),\"This will delete the application of the\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete\")]").nth(0).click();
  });

  await test.step(`Hover "No one has applied to this"`, async () => {
    await page.locator("//DIV[contains(text(),\"No one has applied to this\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
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
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Create Job Posting"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Job Posting\")]").nth(0).hover();
  });

  await test.step(`Hover "Employer*"`, async () => {
    await page.locator(LABEL_EMPLOYER).nth(0).hover();
  });

  await test.step(`Fill "Walmart"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("Walmart");
  });

  await test.step(`Click "Walmart"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Walmart\")]").nth(0).click();
  });

  await test.step(`Hover "Job Title*"`, async () => {
    await page.locator(LABEL_JOB_TITLE).nth(0).hover();
  });

  await test.step(`Hover "Type of Job"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Type of Job\")]").nth(0).hover();
  });

  await test.step(`Fill "Human Resource"`, async () => {
    await page.locator(INPUT_JOB_TITLE).nth(0).fill("Human Resource");
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

  await test.step(`Fill "500"`, async () => {
    await page.locator(INPUT_SALARY_MIN).nth(0).fill("500");
  });

  await test.step(`Fill "1000"`, async () => {
    await page.locator(INPUT_SALARY_MAX).nth(0).fill("1000");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator(SELECT_CURRENCY).nth(0).selectOption("number:1");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator(SELECT_PAY_FORMAT).nth(0).selectOption("number:3");
  });

  await test.step(`Hover "Location Type*"`, async () => {
    await page.locator(LABEL_LOCATION_TYPE).nth(0).hover();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator(SELECT_LOCATION_TYPE).nth(0).selectOption("number:2");
  });

  await test.step(`Hover "Industry*"`, async () => {
    await page.locator(LABEL_INDUSTRY).nth(0).hover();
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

  await test.step(`Click "-- Work Authorization"`, async () => {
    await page.locator("//BUTTON[@type=\"button\"][@title=\"None selected\"][contains(text(),\"-- Work Authorization\")]").nth(0).click();
  });

  await test.step(`Click "Work Authorization"`, async () => {
    await page.locator("//*[contains(text(),\"Work Authorization\")]//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "Application Method(s)*"`, async () => {
    await page.locator("//H2[normalize-space() = \"Application Method(s)*\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via This Site*\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Hover "Apply via External Link"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]//following::label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Apply via Email"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via Email\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(2).click();
  });

  await test.step(`Click "Job Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Description*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Test"`, async () => {
    await page.keyboard.type("Test");
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Job Dates"`, async () => {
    await page.locator(H2_JOB_DATES_CT).nth(0).hover();
  });

  await test.step(`Hover "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).hover();
  });

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]//following::button").nth(0).click();
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

  await test.step(`Hover "How do you plan on reviewing your appli…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"How do you plan on reviewing your applicants?\"]").nth(0).hover();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Hover "Anticipated Job Start Date"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Anticipated Job Start Date\")]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(21).click();
  });

  await test.step(`Hover "For Immediate Hire"`, async () => {
    await page.locator("//SPAN[contains(text(),\"For Immediate Hire\")]").nth(0).hover();
  });

  await test.step(`Hover "Interviewer"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").nth(0).hover();
  });

  await test.step(`Click "Interviewer"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").nth(0).click();
  });

  await test.step(`Click "Interviewer"`, async () => {
    await page.locator("//label[normalize-space()=\"Interviewer\"]/following::select").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(SPAN_WALMART_CT).nth(0).hover();
  });

  await test.step(`Click "Make Visible to Students"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Make Visible to Students\"]").nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "test"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("test");
  });

  await test.step(`Fill "7660072137"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("7660072137");
  });

  await test.step(`Fill "Texas"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("Texas");
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
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
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]//following::label[contains(text(),\"Bachelor\")]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]").nth(0).click();
  });

  await test.step(`Click "-- All College/Schools --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::BUTTON[normalize-space()=\"-- All College/Schools --\"]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::label[contains(text(),\"Campus Wide University\")]").nth(0).click();
  });

  await test.step(`Click "Major/Academic Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]").nth(0).click();
  });

  await test.step(`Click "-- All Major/Academic Programs --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Major/Academic Program\")]//following::BUTTON[normalize-space()=\"-- All Major/Academic Programs --\"]").nth(0).click();
  });

  await test.step(`Click "Major 1"`, async () => {
    await page.locator("//label[contains(text(),\"Major 1\")]").nth(0).click();
  });

  await test.step(`Click "Career Center Administrator"`, async () => {
    await page.locator(H2_CAREER_CENTER_CT).nth(0).click();
  });

  await test.step(`Hover "Source of Job Posting"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Source of Job Posting\"]").nth(0).hover();
  });

  await test.step(`Select "number:100063031018421"`, async () => {
    await page.locator("//SELECT[@id='JobPostingSourceId'][@name='JobPostingSourceId']").nth(0).selectOption("number:100063031018421");
  });

  await test.step(`Hover "Career Center Account Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Career Center Account Manager\")]").nth(0).hover();
  });

  await test.step(`Select "540016055100183"`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_3'][@name='custom_attribute_3']").nth(0).selectOption("540016055100183");
  });

  await test.step(`Hover "Job Posting Owner"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Posting Owner\")]").nth(0).hover();
  });

  await test.step(`Hover "If you would like a specific employer to"`, async () => {
    await page.locator("//SPAN[contains(text(),\"If you would like a specific employer to\")]").nth(0).hover();
  });

  await test.step(`Hover "Owner Email*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Owner Email*\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Hover "Save Draft"`, async () => {
    await page.locator(BTN_SAVE_DRAFT).nth(1).hover();
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(1).click();
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
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Human Resource"`, async () => {
    await page.locator("//H1[normalize-space() = \"Human Resource\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting Status: Application Open. A…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Posting Status: Application Open. Any edits will take effect immediately.\"]").nth(0).hover();
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Advanced Search"`, async () => {
    await page.locator("//A[contains(text(),\"Advanced Search\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Approved, Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Approved, Application Open\")]").nth(0).click();
  });

  await test.step(`Click "Approved"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Approved\"]").nth(0).click();
  });

  await test.step(`Click "Application Open"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Application Open\"]").nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Fill "Human Resource"`, async () => {
    await page.reload();
    await page.locator("//INPUT[@type='text'][@placeholder='Employer, Job Title, or Keyword']").nth(0).fill("Human Resource");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "Human Resource"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Human Resource\")]").nth(0).click();
  });

  await test.step(`Hover "Job Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Human Resource"`, async () => {
    await page.locator("//H1[normalize-space() = \"Human Resource\"]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator(LINK_WALMART_CT).nth(0).hover();
  });

  await test.step(`Click "Apply Now"`, async () => {
    await page.locator("//A[contains(text(),\"Apply Now\")]").nth(0).click();
    await page.waitForTimeout(4000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Human Resource"`, async () => {
    await page.locator("//H1[normalize-space() = \"Human Resource\"]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator(LINK_WALMART_CT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TEXT").nth(0).hover();
  });

  await test.step(`Hover "Full-Time Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Full-Time Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Please upload all application documents"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please upload all application documents\")]").nth(0).hover();
  });

  await test.step(`Click "Upload New"`, async () => {
    await page.locator(LABEL_UPLOAD_NEW).nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator("//*[contains(text(),\"Test_Resume_01.pdf\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Apply\")]").nth(0).click();
  });

  await test.step(`Click "Back to Job Details"`, async () => {
    await page.locator("//A[contains(text(),\"Back to Job Details\")]").nth(0).click();
  });

  await test.step(`Hover "Withdraw from Application"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Withdraw from Application\")]").nth(0).hover();
  });

  await test.step(`Hover "Edit Application"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Edit Application\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Human Resource\")]";
  });

  await test.step(`Click "Human Resource"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Human Resource\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'tab\\'][normalize-space() = \"Applicants (1)\"]";
  });

  await test.step(`Click "Applicants (1)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (1)\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover "Resume"`, async () => {
    await page.locator("//A[contains(text(),\"Resume\")]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(116).click();
  });

  await test.step(`Click "Delete Application"`, async () => {
    await page.locator(RBTN_DELETE_APP).nth(0).click();
  });

  await test.step(`Hover "Remove Applicant"`, async () => {
    await page.locator("//H3[contains(text(),\"Remove Applicant\")]").nth(0).hover();
  });

  await test.step(`Hover "This will delete the application of the"`, async () => {
    await page.locator("//DIV[contains(text(),\"This will delete the application of the\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete\")]").nth(0).click();
  });

  await test.step(`Hover "No one has applied to this"`, async () => {
    await page.locator("//DIV[contains(text(),\"No one has applied to this\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
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

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Fill "Human Resource"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Employer, Job Title, or Keyword']").nth(0).fill("Human Resource");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

});
