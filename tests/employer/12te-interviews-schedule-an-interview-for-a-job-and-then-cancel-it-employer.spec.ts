// TC: TC64300
// 12TE Interviews - Schedule an interview for a job and then cancel it - Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_NEXT_CONTAINS,
  H2_JOB_DATES_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH,
  RBTN_CONTINUE_CONT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Interviews - Schedule an interview for a job and then cancel it - Employer - TC64300", async ({ page, context }) => {
  let date = `8/24/2025`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
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
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//A[contains(text(),\"Interviews\")]").nth(0).hover();
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//A[contains(text(),\"Interviews\")]/../../li/a[contains(text(),\"Analytics\")]").nth(0).hover();
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//H1[contains(text(),\"Interviews\")]").nth(0).hover();
  });

  await test.step(`Click "Interview Schedule"`, async () => {
    await page.locator("//A[normalize-space() = \"Interview Schedule\"]").nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H2[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Test"`, async () => {
    await page.locator("//INPUT[@name='Name'][@type='text'][@placeholder='Interview Name']").nth(0).fill("Test");
  });

  await test.step(`Hover "Interview Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Format*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Format*\"]").nth(0).hover();
  });

  await test.step(`Hover "You will be able to add a virtual meeti…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL when creating schedules\"]").nth(0).hover();
  });

  await test.step(`Click "Interview Dates"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Dates\")]").nth(0).click();
  });

  await test.step(`Hover "When interview date"`, async () => {
    await page.locator("//DIV[contains(text(),\"When interview date\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Date Selection*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Date Selection*\"]").nth(0).hover();
  });

  await test.step(`Hover "Employer Selected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Selected\"]").nth(0).hover();
  });

  await test.step(`Hover "School Selected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"School Selected\"]").nth(0).hover();
  });

  await test.step(`Hover "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Hover "Interview Dates"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Dates\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Date Selection*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Date Selection*\"]").nth(0).hover();
  });

  await test.step(`Hover "Employer Selected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Selected\"]").nth(0).hover();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='DateSelectionTypeId'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Add a job posting to your interview"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Add a job posting to your interview\")]").nth(0).hover();
  });

  await test.step(`Click "Job Posting"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Posting\"]").nth(0).click();
  });

  await test.step(`Hover "Please select one or more program types."`, async () => {
    await page.locator("//H3[contains(text(),\"Please select one or more program types.\")]").nth(0).hover();
  });

  await test.step(`Click "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).click();
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

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Hover "Select All Results"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Select All Results\")]").nth(0).hover();
  });

  await test.step(`Hover "School (empty)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"School (empty)\"]").nth(1).hover();
  });

  await test.step(`Hover "Program Type Business (empty)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Program Type Business (empty)\"]").nth(1).hover();
  });

  await test.step(`Hover "Metro Region (empty)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Metro Region (empty)\"]").nth(1).hover();
  });

  await test.step(`Hover "State (empty)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"State (empty)\"]").nth(1).hover();
  });

  await test.step(`Hover "North America Region (empty)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"North America Region (empty)\"]").nth(1).hover();
  });

  await test.step(`Hover "Reset"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Selected Schools"`, async () => {
    await page.locator("//H3[contains(text(),\"Selected Schools\")]").nth(0).hover();
  });

  await test.step(`Hover "Items:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Items:\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//li[@class=\"school-card ng-scope\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//li[@class=\"school-card ng-scope\"]").nth(1).hover();
  });

  await test.step(`Click "My company agrees to all institution"`, async () => {
    await page.locator("//policy[contains(text(),\"My company agrees to all institution\")]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Hover "2 Job Details"`, async () => {
    await page.locator("//DIV[normalize-space() = \"2 Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Title *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Title *\"]").nth(0).hover();
  });

  await test.step(`Fill "Business job posting"`, async () => {
    await page.locator("//INPUT[@name='JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Business job posting");
  });

  await test.step(`Click "Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Details\")]").nth(0).click();
  });

  await test.step(`Hover "Type of Job *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type of Job *\"]").nth(0).hover();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Hover "Industries *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries *\"]").nth(0).hover();
  });

  await test.step(`Click "-- Please Select Industries --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Industries --\"]").nth(0).click();
  });

  await test.step(`Fill "tech"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("tech");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(17).click();
  });

  await test.step(`Hover "Functions *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Functions *\"]").nth(0).hover();
  });

  await test.step(`Fill "inform"`, async () => {
    await page.locator(INPUT_SEARCH).nth(1).fill("inform");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(28).click();
  });

  await test.step(`Hover "Description *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description *\"]").nth(0).hover();
  });

  await test.step(`Click "Location Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location Type *\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='LocationTypeId']").nth(0).selectOption("number:3");
  });

  await test.step(`Click "Additional Appl"`, async () => {
    await page.locator("//H2[contains(text(),\"Additional Appl\")]").nth(0).click();
  });

  await test.step(`Click "Apply via E"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via E\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='ShouldApplyViaEmail']").nth(0).click();
  });

  await test.step(`Click "Email Address * Use a comma to separate…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email Address * Use a comma to separate email addresses\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='ApplicationEmailAddress'][@placeholder='Email Address']").nth(0).fill("test@gmail.com");
  });

  await test.step(`Click "Job Dates"`, async () => {
    await page.locator(H2_JOB_DATES_CT).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='ApplicantReviewPlan'][@type='radio']").nth(1).check();
  });

  await test.step(`Hover "Target Candidat"`, async () => {
    await page.locator("//H2[contains(text(),\"Target Candidat\")]").nth(0).hover();
  });

  await test.step(`Hover "Target Cohort*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Target Cohort*\"]").nth(0).hover();
  });

  await test.step(`Fill "1st year MBA"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='TargetCohort'][@placeholder='Target Cohort']").nth(0).fill("1st year  MBA");
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(37).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(1).click();
  });

});
