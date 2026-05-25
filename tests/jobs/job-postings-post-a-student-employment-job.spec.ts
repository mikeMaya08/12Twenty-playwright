// TC: TC62910
// Job Postings - Post a Student Employment Job

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_DELETE,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_SAVE_DRAFT,
  CKE_DESCRIPTION,
  CONFIRM_DELETE_APP,
  CONFIRM_PERM_DELETE,
  DIV_CRITERIA_CT,
  H1_JOB_LISTINGS,
  H2_ATTACHMENTS_CT,
  H2_CAREER_CENTER_CT,
  H2_ELIGIBILITY_CT,
  H2_JOB_DATES_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  INPUT_JOB_TITLE,
  INPUT_RADIO_MULTI,
  INPUT_SALARY_MAX,
  INPUT_SALARY_MIN,
  INPUT_SEARCH,
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
  LABEL_YES,
  LINK_E2E_TEST_STUDENT,
  MODAL_PLEASE_CONFIRM,
  MULTI_INDUSTRY,
  MULTI_JOB_FUNCTION,
  MULTI_TYPE_OF_JOB,
  NAV_ADVANCED_SEARCH,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  RBTN_CONTINUE,
  RBTN_DELETE,
  RBTN_DELETE_APP,
  SELECT_CURRENCY,
  SELECT_LOCATION_TYPE,
  SELECT_PAY_FORMAT,
  SPAN_RESUME_FILE_CT,
} from '@config/selectors';

test("Job Postings - Post a Student Employment Job - TC62910", async ({ page, context }) => {
  let fileName = `0`;

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
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Student Employment"`, async () => {
    await page.locator("//A[contains(text(),\"Student Employment\")]").nth(1).click();
  });

  await test.step(`Click "Post a Student Employment Job"`, async () => {
    await page.locator("//A[normalize-space() = \"Post a Student Employment Job\"]").nth(0).click();
  });

  await test.step(`Hover "Create Student Employment Job"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Student Employment Job\")]").nth(0).hover();
  });

  await test.step(`Hover "Employer*"`, async () => {
    await page.locator(LABEL_EMPLOYER).nth(0).hover();
  });

  await test.step(`Fill "State Farm Insurance"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("State Farm Insurance");
  });

  await test.step(`Click "State Farm Insurance"`, async () => {
    await page.locator("//STRONG[contains(text(),\"State Farm Insurance\")]").nth(0).click();
  });

  await test.step(`Click "Job Title*"`, async () => {
    await page.locator(LABEL_JOB_TITLE).nth(0).click();
  });

  await test.step(`Fill "Manager"`, async () => {
    await page.locator(INPUT_JOB_TITLE).nth(0).fill("Manager");
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Type of Job\")]").nth(0).click();
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

  await test.step(`Fill "50"`, async () => {
    await page.locator(INPUT_SALARY_MIN).nth(0).fill("50");
  });

  await test.step(`Fill "70"`, async () => {
    await page.locator(INPUT_SALARY_MAX).nth(0).fill("70");
  });

  await test.step(`Select "number:14"`, async () => {
    await page.locator(SELECT_CURRENCY).nth(0).selectOption("number:14");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator(SELECT_PAY_FORMAT).nth(0).selectOption("number:3");
  });

  await test.step(`Click "Location Type*"`, async () => {
    await page.locator(LABEL_LOCATION_TYPE).nth(0).click();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator(SELECT_LOCATION_TYPE).nth(0).selectOption("number:2");
  });

  await test.step(`Click "Industry*"`, async () => {
    await page.locator(LABEL_INDUSTRY).nth(0).click();
  });

  await test.step(`Click "-- Industry --"`, async () => {
    await page.locator(MULTI_INDUSTRY).nth(0).click();
  });

  await test.step(`Fill "Accounting"`, async () => {
    await page.locator(INPUT_SEARCH).nth(1).fill("Accounting ");
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

  await test.step(`Fill "Audit"`, async () => {
    await page.locator(INPUT_SEARCH).nth(2).fill("Audit");
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

  await test.step(`Click "Interview Format"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Format\"]").nth(0).click();
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

  await test.step(`Click "Work-Study Required?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work-Study Required?\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via This Site*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via External Link\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via Email\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(3).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@id='ApplicationEmailAddress'][@name='ApplicationEmailAddress'][@placeholder='e.g. sample@domain.com'][@type='email']").nth(0).fill("state123@gmail.com");
  });

  await test.step(`Click "Job Description"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Description\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Testing student description"`, async () => {
    await page.keyboard.type("Testing student description");
    await page.locator(H2_ATTACHMENTS_CT).nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator(SPAN_RESUME_FILE_CT).nth(0).hover();
  });

  await test.step(`Click "Application Document Requirements"`, async () => {
    await page.locator("//H2[contains(text(),\"Application Document Requirements\")]").nth(0).click();
  });

  await test.step(`Click "Request or require students to submit be"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Request or require students to submit be\")]").nth(0).click();
  });

  await test.step(`Click "Job Dates"`, async () => {
    await page.locator(H2_JOB_DATES_CT).nth(0).click();
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

  await test.step(`Click "Application Begins On*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Application Begins On*\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(14).click();
  });

  await test.step(`Click "Application Deadline*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Application Deadline*\")]").nth(0).click();
  });

  await test.step(`Click "How do you plan on reviewing your appli…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"How do you plan on reviewing your applicants?\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='ApplicantReviewPlan'][@type='radio'][@id='input-v6xkt-radio-buttons']").nth(0).check();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Click "Anticipated Job Start Date"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Anticipated Job Start Date\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TH").nth(7).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(10).click();
  });

  await test.step(`Click "Interview Detail"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Detail\")]").nth(0).click();
  });

  await test.step(`Click "If available, please specify the intervi"`, async () => {
    await page.locator("//SPAN[contains(text(),\"If available, please specify the intervi\")]").nth(0).click();
  });

  await test.step(`Click "Interviewer"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").nth(0).click();
  });

  await test.step(`Click "Primary Job Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Job Contact\")]").nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "test"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("test");
  });

  await test.step(`Fill "9153455681"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("9153455681");
  });

  await test.step(`Fill "Hyderabad"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("Hyderabad");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Is Alumnus\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(4).click();
  });

  await test.step(`Click "Grad Year"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Grad Year\")]").nth(0).click();
  });

  await test.step(`Select "number:2021"`, async () => {
    await page.locator("//SELECT[@id='ContactAlumniGraduationYear'][@name='ContactAlumniGraduationYear']").nth(0).selectOption("number:2021");
  });

  await test.step(`Click "Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Program\")]").nth(2).click();
  });

  await test.step(`Select "number:14999901011484"`, async () => {
    await page.locator("//SELECT[@id='ContactAlumniGraduationProgramId'][@name='ContactAlumniGraduationProgramId']").nth(0).selectOption("number:14999901011484");
  });

  await test.step(`Click "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).click();
  });

  await test.step(`Click "The criteria below determines who can vi"`, async () => {
    await page.locator(DIV_CRITERIA_CT).nth(0).click();
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
    await page.locator("//LABEL[contains(text(),\"Degree Level\")]/following::label[@class=\"checkbox\"]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]").nth(0).click();
  });

  await test.step(`Click "-- All College/Schools --"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]//following::BUTTON[normalize-space()=\"-- All College/Schools --\"]").nth(0).click();
  });

  await test.step(`Click "College/School"`, async () => {
    await page.locator("//LABEL[contains(text(),\"College/School\")]/following::label[@class=\"checkbox\"]").nth(0).click();
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

  await test.step(`Click "Career Center Administrator"`, async () => {
    await page.locator(H2_CAREER_CENTER_CT).nth(0).click();
  });

  await test.step(`Click "This section is only available to career"`, async () => {
    await page.locator("//SPAN[contains(text(),\"This section is only available to career\")]").nth(0).click();
  });

  await test.step(`Click "Source of Job Posting"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Source of Job Posting\"]").nth(0).click();
  });

  await test.step(`Select "number:100063031018421"`, async () => {
    await page.locator("//SELECT[@id='JobPostingSourceId'][@name='JobPostingSourceId']").nth(0).selectOption("number:100063031018421");
  });

  await test.step(`Click "Career Center Account Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Career Center Account Manager\")]").nth(0).click();
  });

  await test.step(`Click "Career Center Account Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Career Center Account Manager\")]/following::select").nth(0).click();
  });

  await test.step(`Click "Job Posting Owner"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Posting Owner\")]").nth(0).click();
  });

  await test.step(`Click "If you would like a specific employer to"`, async () => {
    await page.locator("//SPAN[contains(text(),\"If you would like a specific employer to\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Hover "Draft"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Draft\")]").nth(1).hover();
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

  await test.step(`Hover "Job Posting - Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Job Posting - Application Open\")]").nth(0).hover();
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
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Advanced Search"`, async () => {
    await page.locator(NAV_ADVANCED_SEARCH).nth(0).click();
  });

  await test.step(`Fill "Manager"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Employer, Job Title, or Keyword']").nth(0).fill("Manager");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "Manager"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Manager\"]").nth(0).click();
  });

  await test.step(`Hover "Job Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//H1[normalize-space() = \"Manager\"]").nth(0).hover();
  });

  await test.step(`Hover "State Farm Insurance"`, async () => {
    await page.locator("//A[normalize-space() = \"State Farm Insurance\"]").nth(0).hover();
  });

  await test.step(`Click "Apply Now"`, async () => {
    await page.locator("//A[normalize-space() = \"Apply Now\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//H1[normalize-space() = \"Manager\"]").nth(0).hover();
  });

  await test.step(`Hover "State Farm Insurance"`, async () => {
    await page.locator("//A[normalize-space() = \"State Farm Insurance\"]").nth(0).hover();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE).nth(0).click();
  });

  await test.step(`Hover "Application Instructions"`, async () => {
    await page.locator("//H3[normalize-space() = \"Application Instructions\"]").nth(0).hover();
  });

  await test.step(`Hover "Apply Externally"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Apply Externally\"]").nth(0).hover();
  });

  await test.step(`Hover "Documents to Include"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Documents to Include\"]").nth(0).hover();
  });

  await test.step(`Click "I have completed the above application …"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"I have completed the above application requirements\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you have completed the app…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you have completed the application instructions on this page? This employer is requiring you to: Apply via email: state123@gmail.com\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Mark as Applied"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Mark as Applied\"]").nth(0).click();
  });

  await test.step(`Hover "Thank you for letting us know you appli…"`, async () => {
    await page.locator("//H1[normalize-space() = \"Thank you for letting us know you applied!\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Manager\"]").nth(0).hover();
  });

  await test.step(`Hover "State Farm Insurance"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"State Farm Insurance\"]").nth(0).hover();
  });

  await test.step(`Click "Back to Job Details"`, async () => {
    await page.locator("//A[normalize-space() = \"Back to Job Details\"]").nth(0).click();
  });

  await test.step(`Hover "Withdraw from Application"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Withdraw from Application\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit Application"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Edit Application\"]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Applicants (1)"`, async () => {
    await page.reload();
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (1)\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e Test Student\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Application"`, async () => {
    await page.locator(RBTN_DELETE_APP).nth(0).click();
  });

  await test.step(`Hover "Remove Applicant"`, async () => {
    await page.locator("//H3[normalize-space() = \"Remove Applicant\"]").nth(0).hover();
  });

  await test.step(`Hover "This will delete the application of the…"`, async () => {
    await page.locator(CONFIRM_DELETE_APP).nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(BTN_DELETE).nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
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

});
