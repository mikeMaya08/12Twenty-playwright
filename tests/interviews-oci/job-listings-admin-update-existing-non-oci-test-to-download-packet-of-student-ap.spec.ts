// TC: TC68634
// Job Listings - Admin - Update existing non-OCI test to download packet of student applicants

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ADD_CONTAINS,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  CKE_CONTENTS,
  CKE_DESCRIPTION,
  CONFIRM_DELETE_APP,
  CONFIRM_PERM_DELETE,
  H1_JOB_LISTINGS,
  H2_ATTACHMENTS_CT,
  H2_ELIGIBILITY_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_COMPANY_NAME,
  INPUT_JOB_TITLE,
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
  LABEL_STUDENT,
  LABEL_STUDENT_GROUP,
  LABEL_WORK_AUTH,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
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

test("Job Listings - Admin - Update existing non-OCI test to download packet of student applicants - TC68634", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
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

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
  });

  await test.step(`Click "Job Listings"`, async () => {
    await page.locator("//A[contains(text(),\"Job Listings\")]").nth(1).click();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
  });

  await test.step(`Hover "Create Job Posting"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Job Posting\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Details"`, async () => {
    await page.locator("//H2[normalize-space() = \"Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Employer*"`, async () => {
    await page.locator(LABEL_EMPLOYER).nth(0).hover();
  });

  await test.step(`Fill "Walmart"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("Walmart");
  });

  await test.step(`Click "Walmart"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Walmart\"]").nth(2).click();
  });

  await test.step(`Hover "Hide Employer Name from Applicants"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Hide Employer Name from Applicants\"]").nth(0).hover();
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

  await test.step(`Fill "Full-Time"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Full-Time");
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

  await test.step(`Fill "Accounting"`, async () => {
    await page.locator(INPUT_SEARCH).nth(2).fill("Accounting");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(105).click();
  });

  await test.step(`Click "Preferred Years of Experience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Years of Experience\"]").nth(0).click();
  });

  await test.step(`Click "Work Authorization"`, async () => {
    await page.locator(LABEL_WORK_AUTH).nth(0).click();
  });

  await test.step(`Click "-- Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Work Authorization --\"]").nth(0).click();
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

  await test.step(`Click "Apply via External Link"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via External Link\")]//following::label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Click "Apply via Email"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via Email\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(2).click();
  });

  await test.step(`Hover "Job Description"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Description\")]").nth(0).hover();
  });

  await test.step(`Click "Job Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Description*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "New Job Posting (Muuk)"`, async () => {
    await page.keyboard.type("New Job Posting (Muuk)");
    await page.locator(CKE_CONTENTS).nth(0).click();
  });

  await test.step(`Click "Attachments"`, async () => {
    await page.locator(H2_ATTACHMENTS_CT).nth(0).click();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Hover "Interview Detail"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Detail\")]").nth(0).hover();
  });

  await test.step(`Hover "If available, please specify the intervi"`, async () => {
    await page.locator("//SPAN[contains(text(),\"If available, please specify the intervi\")]").nth(0).hover();
  });

  await test.step(`Hover "Interviewer"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer\"]").nth(0).hover();
  });

  await test.step(`Hover "Primary Job Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Job Contact\")]").nth(0).hover();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "test"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("test");
  });

  await test.step(`Hover "Job Posting Contact Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Posting Contact Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "5th Avenue"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("5th Avenue");
  });

  await test.step(`Fill "9153455681"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("9153455681");
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).hover();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).hover();
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

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Hover "Draft"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Draft\")]").nth(1).hover();
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

  await test.step(`Hover "Human Resource"`, async () => {
    await page.locator("//H1[normalize-space() = \"Human Resource\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Pos"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Job Pos\")]").nth(0).hover();
  });

  await test.step(`Click "Applicants (0)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (0)\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(1).click();
  });

  await test.step(`Click "Add Applicant"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Applicant\"]").nth(0).click();
  });

  await test.step(`Hover "Add Student"`, async () => {
    await page.locator("//H3[contains(text(),\"Add Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Student*"`, async () => {
    await page.locator(LABEL_STUDENT).nth(0).hover();
  });

  await test.step(`Fill "e2e Test Student"`, async () => {
    await page.locator("//INPUT[@name='Applicant'][@placeholder='Name or Student Id'][@type='text']").nth(0).fill("e2e Test Student ");
  });

  await test.step(`Click "e2e Test Student (e2e.student.fullacces…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Student (e2e.student.fullaccess@campuswide.com)\"]").nth(2).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Editing Application for e2e Test Student"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Editing Application for e2e Test Student\"]").nth(0).hover();
  });

  await test.step(`Hover "Resume (required)"`, async () => {
    await page.locator("//H4[contains(text(),\"Resume (required)\")]").nth(0).hover();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Apply\")]").nth(0).click();
  });

  await test.step(`Hover "Applicants (1)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (1)\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover "Resume"`, async () => {
    await page.locator("//A[contains(text(),\"Resume\")]").nth(0).hover();
  });

  await test.step(`Hover "Results: 1"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Results: 1\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(1).click();
  });

  await test.step(`Click "Add Applicant"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Applicant\"]").nth(0).click();
  });

  await test.step(`Hover "Add Student"`, async () => {
    await page.locator("//H3[contains(text(),\"Add Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Student*"`, async () => {
    await page.locator(LABEL_STUDENT).nth(0).hover();
  });

  await test.step(`Fill "Alexis Kramer"`, async () => {
    await page.locator("//INPUT[@name='Applicant'][@placeholder='Name or Student Id'][@type='text']").nth(0).fill("Alexis Kramer ");
  });

  await test.step(`Click "Alexis Kramer (Alexis.Kramer@campuswide…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Alexis Kramer (Alexis.Kramer@campuswide.com)\"]").nth(2).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Editing Application for Alexis Kramer"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Editing Application for Alexis Kramer\"]").nth(0).hover();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf (54 KB)"`, async () => {
    await page.locator("//A[@title='Test_Resume_01.pdf'][normalize-space() = \"Test_Resume_01.pdf (54 KB)\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Apply\")]").nth(0).click();
  });

  await test.step(`Hover "Alexis Kramer"`, async () => {
    await page.locator("//A[contains(text(),\"Alexis Kramer\")]").nth(0).hover();
  });

  await test.step(`Hover "Resume"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Results: 2"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Results: 2\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(1).click();
  });

  await test.step(`Hover "Download All Application Packages"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Download All Application Packages\"]").nth(0).hover();
  });

  await test.step(`Hover "Export All"`, async () => {
    await page.locator("//A[normalize-space() = \"Export All\"]").nth(0).hover();
  });

  await test.step(`Hover "Message All"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Message All\"]").nth(0).hover();
  });

  await test.step(`Click "Download All Application Packages"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Download All Application Packages\"]").nth(0).click();
  });

  await test.step(`Hover "Packet Details"`, async () => {
    await page.locator("//H3[contains(text(),\"Packet Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Cover Page"`, async () => {
    await page.locator("//H2[contains(text(),\"Cover Page\")]").nth(0).hover();
  });

  await test.step(`Hover "Documents Included in the Packet At lea…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Documents Included in the Packet At least one document must be included in the packet\"]").nth(0).hover();
  });

  await test.step(`Hover "Delivery Options At least one delivery …"`, async () => {
    await page.locator("//H2[normalize-space() = \"Delivery Options At least one delivery option must be selected\"]").nth(0).hover();
  });

  await test.step(`Hover "Share this Packet Use a comma to separa…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Share this Packet Use a comma to separate email addresses\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"OK\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Results: 2"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Results: 2\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Application"`, async () => {
    await page.locator("//A[@role=\"button\"][normalize-space() = \"Delete Application\"]//ancestor::li").nth(0).click();
  });

  await test.step(`Hover "Remove Applicant"`, async () => {
    await page.locator("//H3[contains(text(),\"Remove Applicant\")]").nth(0).hover();
  });

  await test.step(`Hover "This will delete the application of the"`, async () => {
    await page.locator("//DIV[contains(text(),\"This will delete the application of the\")]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//A[contains(text(),\"Alexis Kramer\")]";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Application"`, async () => {
    await page.locator("//A[@role=\"button\"][normalize-space() = \"Delete Application\"]//ancestor::li").nth(0).click();
  });

  await test.step(`Hover "Remove Applicant"`, async () => {
    await page.locator("//H3[contains(text(),\"Remove Applicant\")]").nth(0).hover();
  });

  await test.step(`Hover "This will delete the application of the…"`, async () => {
    await page.locator(CONFIRM_DELETE_APP).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"e2e Test Student\")]";
  });

  await test.step(`Click "Applicants (0)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (0)\"]").nth(0).click();
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

  await test.step(`Click "Delete Job Posting"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Job Posting\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
    await page.reload();
    await page.waitForLoadState('load');
  });

});
