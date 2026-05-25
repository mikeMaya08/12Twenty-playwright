// TC: TC60749
// Student Employment - Post a Student Employment Job - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  BTN_RESET_FILTERS,
  BTN_SAVE_DRAFT,
  BTN_SEARCH,
  CKE_CONTENTS,
  CONFIRM_PERM_DELETE,
  H1_JOB_LISTINGS,
  H2_ATTACHMENTS_CT,
  H2_CAREER_CENTER_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  INPUT_JOB_TITLE,
  INPUT_SALARY_MAX,
  INPUT_SALARY_MIN,
  INPUT_SEARCH,
  LABEL_JOB_FUNCTION,
  LABEL_NO,
  LABEL_REVIEW_APPLICANTS,
  LABEL_STUDENT_GROUP,
  LABEL_YES,
  MULTI_INDUSTRY,
  MULTI_JOB_FUNCTION,
  MULTI_TYPE_OF_JOB,
  NAV_HOME,
  RBTN_COPY_EMPLOYER_URL,
  RBTN_COPY_STUDENT_URL,
  RBTN_DELETE,
  RBTN_DUPLICATE,
  RBTN_VIEW_AUDIT,
  SELECT_CURRENCY,
  SELECT_LOCATION_TYPE,
} from '@config/selectors';

test("Student Employment - Post a Student Employment Job - Admin - TC60749", async ({ page, context }) => {
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
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Student Employment"`, async () => {
    await page.locator("//A[normalize-space() = \"Student Employment\"]").nth(0).click();
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Post a Student Employment Job"`, async () => {
    await page.locator("//A[normalize-space() = \"Post a Student Employment Job\"]").nth(0).click();
  });

  await test.step(`Hover "Create Student Employment Job"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Student Employment Job\")]").nth(0).hover();
  });

  await test.step(`Fill "Alphabet"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("Alphabet");
  });

  await test.step(`Click "Alphabet"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Alphabet\")]").nth(0).click();
  });

  await test.step(`Fill "Software Engineer"`, async () => {
    await page.locator(INPUT_JOB_TITLE).nth(0).fill("Software Engineer");
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

  await test.step(`Click "Full-Time Job"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='Full-Time Job'][normalize-space() = \"Full-Time Job\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Salary Range\"]").nth(0).click();
  });

  await test.step(`Fill "60000"`, async () => {
    await page.locator(INPUT_SALARY_MIN).nth(0).fill("60000");
  });

  await test.step(`Fill "90000"`, async () => {
    await page.locator(INPUT_SALARY_MAX).nth(0).fill("90000");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator(SELECT_CURRENCY).nth(0).selectOption("number:1");
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_LOCATION_TYPE).nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT").nth(4).selectOption("number:1");
  });

  await test.step(`Fill "New York - NY"`, async () => {
    await page.locator("//INPUT[@name='locationCityName0'][@placeholder='City']").nth(0).fill("New York - NY");
  });

  await test.step(`Click "New York - NY"`, async () => {
    await page.locator("//DIV[normalize-space() = \"New York - NY\"]").nth(0).click();
  });

  await test.step(`Click "-- Industry --"`, async () => {
    await page.locator(MULTI_INDUSTRY).nth(0).click();
  });

  await test.step(`Fill "Technology/Engineering/Science"`, async () => {
    await page.locator(INPUT_SEARCH).nth(1).fill("Technology/Engineering/Science");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(99).click();
  });

  await test.step(`Click "Job Function*"`, async () => {
    await page.locator(LABEL_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Click "-- Job Function --"`, async () => {
    await page.locator(MULTI_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Fill "Information Technology"`, async () => {
    await page.locator(INPUT_SEARCH).nth(2).fill("Information Technology");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(189).click();
  });

  await test.step(`Click "Preferred Years of Experience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Years of Experience\"]").nth(0).click();
  });

  await test.step(`Fill "5"`, async () => {
    await page.locator("//INPUT[@id='RequiredYearsOfExperience'][@name='RequiredYearsOfExperience'][@placeholder='Preferred Years of Experience'][@type='number']").nth(0).fill("5");
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

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Application Method(s)*"`, async () => {
    await page.locator("//H2[normalize-space() = \"Application Method(s)*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Apply via This Site*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_CONTENTS).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Attachments"`, async () => {
    await page.locator(H2_ATTACHMENTS_CT).nth(0).click();
  });

  await test.step(`Click "browse"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"browse\")]").nth(0).click();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "10/16/2024"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("10/16/2024");
  });

  await test.step(`Click "Application Deadline*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Application Deadline*\")]").nth(0).click();
  });

  await test.step(`Fill "12/31/2028"`, async () => {
    await page.locator(INPUT_DATE).nth(1).fill("12/31/2028");
  });

  await test.step(`Click "How do you plan on reviewing your appli…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"How do you plan on reviewing your applicants?\"]").nth(0).click();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Click "Anticipated Job Start Date"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Anticipated Job Start Date\")]").nth(0).click();
  });

  await test.step(`Fill "12/01/2024"`, async () => {
    await page.locator(INPUT_DATE).nth(2).fill("12/01/2024");
  });

  await test.step(`Click "Interview Detail"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Detail\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space() = 'Interviewer']/following::SELECT").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "Software Engineer"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("Software Engineer");
  });

  await test.step(`Fill "+1-123-456-7890"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("+1-123-456-7890");
  });

  await test.step(`Fill "1234 Technology Drive New York, NY 1000…"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("1234 Technology Drive New York, NY 10001 USA");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Is Alumnus\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(4).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='ContactIsAlumni'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]/following::BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::LABEL[contains(normalize-space(),\"Select all\")]").nth(0).click();
  });

  await test.step(`Click "Career Center Administrator"`, async () => {
    await page.locator(H2_CAREER_CENTER_CT).nth(0).click();
  });

  await test.step(`Click "Source of Job Posting"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Source of Job Posting\"]").nth(0).click();
  });

  await test.step(`Select "number:100063031018426"`, async () => {
    await page.locator("//SELECT[@id='JobPostingSourceId'][@name='JobPostingSourceId']").nth(0).selectOption("number:100063031018426");
  });

  await test.step(`Click "Career Center Account Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Career Center Account Manager\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_3'][@name='custom_attribute_3']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Hover "Save Draft"`, async () => {
    await page.locator(BTN_SAVE_DRAFT).nth(1).hover();
    await page.waitForTimeout(3000);
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

  await test.step(`Hover "Software Engineer"`, async () => {
    await page.locator("//H1[normalize-space() = \"Software Engineer\"]").nth(0).hover();
  });

  await test.step(`Hover "Alphabet"`, async () => {
    await page.locator("//A[contains(text(),\"Alphabet\")]").nth(0).hover();
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

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[normalize-space() = \"\\$60,000.00 - \\$90,000.00 USD per year\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(3).hover();
  });

  await test.step(`Hover "All Work Authorizations Accepted"`, async () => {
    await page.locator("//SPAN[contains(text(),\"All Work Authorizations Accepted\")]").nth(0).hover();
  });

  await test.step(`Hover "Technology/Engineering/Science - Systems"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Technology/Engineering/Science - Systems\")]").nth(0).hover();
  });

  await test.step(`Hover "Information Technology - Software Design"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Information Technology - Software Design\")]").nth(0).hover();
  });

  await test.step(`Hover "Reid Farrell"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Reid Farrell\")]").nth(0).hover();
  });

  await test.step(`Hover "Alphabet"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Alphabet\")]").nth(0).hover();
  });

  await test.step(`Hover "Account Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Account Manager\")]").nth(0).hover();
  });

  await test.step(`Hover "I will review applicants as they come in"`, async () => {
    await page.locator("//SPAN[contains(text(),\"I will review applicants as they come in\")]").nth(0).hover();
  });

  await test.step(`Hover "Resume (Required)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Resume (Required)\"]").nth(0).hover();
  });

  await test.step(`Hover "Software Engineer"`, async () => {
    await page.locator("//DIV[contains(text(),\"Software Engineer\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e.admin.schooladministrator@campuswide"`, async () => {
    await page.locator("//DIV[contains(text(),\"e2e.admin.schooladministrator@campuswide\")]").nth(0).hover();
  });

  await test.step(`Hover "1234 Technology Drive New York, NY 10001"`, async () => {
    await page.locator("//DIV[contains(text(),\"1234 Technology Drive New York, NY 10001\")]").nth(0).hover();
  });

  await test.step(`Click "Student Employment"`, async () => {
    await page.locator("//A[normalize-space() = \"Student Employment\"]").nth(0).click();
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
  });

  await test.step(`Click "Job Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Status\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Fill "Software Engineer"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Employer, Job Title, or Keyword']").nth(3).fill("Software Engineer");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "Software Engineer"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Software Engineer\")]").nth(0).hover();
  });

  await test.step(`Hover "Alphabet"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Alphabet\")]").nth(0).hover();
  });

  await test.step(`Hover "New York - NY"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"New York - NY\"]").nth(0).hover();
  });

  await test.step(`Hover "0 applicants"`, async () => {
    await page.locator("//A[normalize-space() = \"0 applicants\"]").nth(0).hover();
  });

  await test.step(`Click "Software Engineer"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Software Engineer\")]").nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Job Posting Actions"`, async () => {
    await page.locator("//LI[contains(text(),\"Job Posting Actions\")]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Duplicate"`, async () => {
    await page.locator(RBTN_DUPLICATE).nth(0).hover();
  });

  await test.step(`Hover "Deactivate"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Deactivate\"]").nth(0).hover();
  });

  await test.step(`Hover "Shareable Links"`, async () => {
    await page.locator("//LI[contains(text(),\"Shareable Links \")]").nth(0).hover();
  });

  await test.step(`Hover "Copy Student URL"`, async () => {
    await page.locator(RBTN_COPY_STUDENT_URL).nth(0).hover();
  });

  await test.step(`Hover "Copy Employer URL"`, async () => {
    await page.locator(RBTN_COPY_EMPLOYER_URL).nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
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

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = " //SPAN[contains(text(),\"Software Engineer\")]";
  });

});
