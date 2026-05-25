// TC: TC65165
// 12TE Interviews - Create a meeting, post a job, add a schedule and add a interviewer - Employer

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTION,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_CONTAINS,
  CKE_DESCRIPTION,
  H2_JOB_DATES_CT,
  INPUT_DATE,
  INPUT_RADIO_MULTI,
  INPUT_SEARCH,
  LABEL_REVIEW_APPLICANTS,
  LABEL_SELECT_ALL,
  LABEL_TIME_ZONE,
  LABEL_WORK_AUTH,
  MODAL_PLEASE_CONFIRM_CT,
  MULTI_SELECT_VALUE,
  RBTN_CONTINUE_CONT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Interviews - Create a meeting, post a job, add a schedule and add a interviewer - Employer - TC65165", async ({ page, context }) => {
  let date = `8/24/2025`;

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
  });

  await test.step(`Hover "Interviews"`, async () => {
    await page.locator("//H1[contains(text(),\"Interviews\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
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

  await test.step(`Hover "Interview Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Format*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Format*\"]").nth(0).hover();
  });

  await test.step(`Hover "You will be able to add a virtual meeti…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL when creating schedules\"]").nth(0).hover();
  });

  await test.step(`Click "Interview Plan*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Plan*\"]").nth(0).click();
  });

  await test.step(`Select "number:31"`, async () => {
    await page.locator("//SELECT[@id='input-n3qriqw-select'][@name='CoreInterviewPlanTemplateId']").nth(0).selectOption("number:31");
  });

  await test.step(`Hover "Interview Dates"`, async () => {
    await page.locator("//H2[contains(text(),\"Interview Dates\")]").nth(0).hover();
  });

  await test.step(`Hover "When interview date"`, async () => {
    await page.locator("//DIV[contains(text(),\"When interview date\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Date Selection*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interview Date Selection*\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Automated Test"`, async () => {
    await page.locator("//INPUT[@name='Name'][@type='text'][@placeholder='Interview Name']").nth(0).fill("Muuktest Automated Test");
  });

  await test.step(`Click "Employer Selected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Selected\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='DateSelectionTypeId'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Muuktest Automated Test"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuktest Automated Test\"]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator("//DIV[contains(text(),\"Walmart\")]").nth(0).hover();
  });

  await test.step(`Hover "Date TBD"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Date TBD\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting Needed"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Job Posting Needed\")]").nth(0).hover();
  });

  await test.step(`Hover "Add a job posting to your interview"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Add a job posting to your interview\")]").nth(0).hover();
  });

  await test.step(`Click "New Job"`, async () => {
    await page.locator("//A[normalize-space() = \"New Job\"]").nth(0).click();
  });

  await test.step(`Hover "Please select one or more program types."`, async () => {
    await page.locator("//H3[contains(text(),\"Please select one or more program types.\")]").nth(0).hover();
  });

  await test.step(`Click "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Click "Cambridge University Judge Business Scho"`, async () => {
    await page.locator("//DIV[contains(text(),\"Cambridge University Judge Business Scho\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//POLICY").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Hover "Job Title *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Title *\"]").nth(0).hover();
  });

  await test.step(`Hover "Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Type of Job *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type of Job *\"]").nth(0).hover();
  });

  await test.step(`Fill "Business job posting (Muuktest)"`, async () => {
    await page.locator("//INPUT[@name='JobTitle'][@type='text'][@placeholder='Job Title'][@id='JobTitle']").nth(0).fill("Business job posting (Muuktest)");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreJobTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Industries *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Industries --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Industries --\"]").nth(0).click();
  });

  await test.step(`Click "Cybersecurity"`, async () => {
    await page.locator("//label[normalize-space()=\"Cybersecurity\"]").nth(0).click();
  });

  await test.step(`Click "Functions *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Functions *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Functions --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Functions --\"]").nth(0).click();
  });

  await test.step(`Fill "Information"`, async () => {
    await page.locator(INPUT_SEARCH).nth(1).fill("Information");
  });

  await test.step(`Click "Cybersecurity & Information Security"`, async () => {
    await page.locator("//label[normalize-space()=\"Cybersecurity & Information Security\"]").nth(0).click();
  });

  await test.step(`Click "Location Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location Type *\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='LocationTypeId']").nth(0).selectOption("number:3");
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Test"`, async () => {
    await page.keyboard.type("Test");
    await page.locator("//H2[normalize-space() = \"Application Document Requirements Applicants will always be required to submit a resume.\"]").nth(0).click();
  });

  await test.step(`Click "Apply via email"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via email\")]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='ApplicationEmailAddress'][@placeholder='Email Address']").nth(0).fill("test@gmail.com");
  });

  await test.step(`Click "Job Dates"`, async () => {
    await page.locator(H2_JOB_DATES_CT).nth(0).click();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Hover "Target Candidat"`, async () => {
    await page.locator("//H2[contains(text(),\"Target Candidat\")]").nth(0).hover();
  });

  await test.step(`Hover "Candidate Population*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Population*\"]").nth(0).hover();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students & Alumni\"]").nth(0).hover();
  });

  await test.step(`Hover "Students only"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students only\"]").nth(0).hover();
  });

  await test.step(`Hover "Alumni only"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Alumni only\"]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students & Alumni\"]").nth(0).click();
  });

  await test.step(`Click "Work Authorization"`, async () => {
    await page.locator(LABEL_WORK_AUTH).nth(0).click();
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(2).click();
  });

  await test.step(`Click "Other Work Authorization*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Other Work Authorization*\")]").nth(0).click();
  });

  await test.step(`Fill "Test"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='WorkAuthRequirementOther'][@placeholder='Work Auth Details']").nth(0).fill("Test");
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Back\")]").nth(1).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(1).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Hover "12twenty Job Posting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"12twenty Job Posting\")]").nth(0).hover();
  });

  await test.step(`Hover "Business job posting (Muuktest) | Remote"`, async () => {
    await page.locator("//A[contains(text(),\"Business job posting (Muuktest) | Remote\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(4).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(7).hover();
  });

  await test.step(`Click "Submit Free Order"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Submit Free Order\")]").nth(0).click();
  });

  await test.step(`Hover "Business job posting (Muuktest)"`, async () => {
    await page.locator("//H3[contains(text(),\"Business job posting (Muuktest)\")]").nth(0).hover();
  });

  await test.step(`Hover "Remote/Telecommute"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Remote/Telecommute\"]").nth(0).hover();
  });

  await test.step(`Hover "Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Application Open\")]").nth(0).hover();
  });

  await test.step(`Click "Schedules"`, async () => {
    await page.locator("//A[contains(text(),\"Schedules\")]").nth(0).click();
  });

  await test.step(`Hover "No schedules have been created yet"`, async () => {
    await page.locator("//SPAN[contains(text(),\"No schedules have been created yet\")]").nth(0).hover();
  });

  await test.step(`Click "Job Postings (1)"`, async () => {
    await page.locator("//A[contains(text(),\"Job Postings (1)\")]").nth(0).click();
  });

  await test.step(`Click "Schedules"`, async () => {
    await page.locator("//A[contains(text(),\"Schedules\")]").nth(0).click();
  });

  await test.step(`Click "Add Schedule"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Schedule\"]").nth(0).click();
  });

  await test.step(`Hover "Schedule"`, async () => {
    await page.locator("//H3[contains(text(),\"Schedule\")]").nth(0).hover();
  });

  await test.step(`Hover "School"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"School\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).click();
  });

  await test.step(`Click "Time Zone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]//following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Eastern Time (US & Canada) (UTC-05:00)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Eastern Time (US & Canada) (UTC-05:00)\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(1).check();
  });

  await test.step(`Hover "Date*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Date*\")]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(32).click();
  });

  await test.step(`Hover "Room Note"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Room Note\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Fill "Automated test case by muuktest"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-oldpzo-text'][@name='RoomNote'][@placeholder='Room Note']").nth(0).fill("Automated test case by muuktest");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Hover "Meeting has not been assigned a time"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Meeting has not been assigned a time\")]").nth(0).hover();
  });

  await test.step(`Hover "Please select a virtual meeting platform"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please select a virtual meeting platform\")]").nth(0).hover();
  });

  await test.step(`Hover "This schedule has no in"`, async () => {
    await page.locator("//DIV[contains(text(),\"This schedule has no in\")]").nth(0).hover();
  });

  await test.step(`Click "Assign Interviewer"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Assign Interviewer\")]").nth(0).click();
  });

  await test.step(`Hover "Assign Interviewers"`, async () => {
    await page.locator("//H3[normalize-space() = \"Assign Interviewers\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//ul//li").nth(2).click();
  });

  await test.step(`Click "Interviewers*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewers*\"]").nth(0).click();
  });

  await test.step(`Click "Select"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Select\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Meeting has not been assigned a time"`, async () => {
    await page.locator("//span[contains(text(),\"Meeting has not been assigned a time\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "12twenty"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"12twenty\"]").nth(0).click();
  });

  await test.step(`Hover "Meeting has not been assigned a time"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Meeting has not been assigned a time\")]").nth(0).hover();
  });

  await test.step(`Hover "12twenty Meeting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"12twenty Meeting\")]").nth(0).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
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
  });

  await test.step(`Hover "Canceled"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Canceled\")]").nth(0).hover();
  });

});
