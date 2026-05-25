// TC: TC_A83922
// Interview Experience - Clicking Student Name Opens Resume Slideout for Employers

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTIONS,
  BTN_ADD,
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_DELETE,
  BTN_OK,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_DRAFT,
  CKE_DESCRIPTION,
  CONFIRM_DELETE_APP,
  H2_ELIGIBILITY,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  INPUT_END_TIME,
  INPUT_JOB_TITLE,
  INPUT_START_TIME,
  LABEL_EMPLOYER,
  LABEL_INDUSTRY,
  LABEL_JOB_FUNCTION,
  LABEL_JOB_TITLE,
  LABEL_LOCATION_TYPE,
  LABEL_STUDENT,
  LABEL_STUDENT_GROUP,
  MODAL_SUCCESS,
  MULTI_INDUSTRY,
  MULTI_JOB_FUNCTION,
  MULTI_TYPE_OF_JOB,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  NAV_POST_A_JOB,
  RBTN_DELETE,
  RBTN_DELETE_APP,
  SELECT_LOCATION_TYPE,
  SPAN_CLOSE_X,
  TAB_SCHEDULE,
} from '@config/selectors';

test("Interview Experience - Clicking Student Name Opens Resume Slideout for Employers - TC_A83922", async ({ page, context }) => {
  let date = `8/24/2025`;
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Register for Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Register for Interviews\"]").nth(0).click();
  });

  await test.step(`Hover "Employer*"`, async () => {
    await page.locator(LABEL_EMPLOYER).nth(0).hover();
  });

  await test.step(`Fill "12twenty,"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("12twenty,");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"OCI Round* :\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='OciRoundId']").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//H2[normalize-space() = \"Interview Periods Please Note: Once period dates for individual OCI registrations have been customized, periods can no longer be added or removed from the round. OCI periods can be added or removed from a round, even if there are active OCI registrations, unless period dates have been customized for individual OCI registrations\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Period"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Period\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@name='endDateText'][@placeholder='MM/DD/YYYY'][@type='text'][@title='End Date']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]//following::td").nth(14).click();
  });

  await test.step(`Hover "Interview Date Preferences Preferred In…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Date Preferences Preferred Interview Dates cannot be the same.\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"First Choice *\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD[contains(@class,\"today\")]").nth(0).click();
  });

  await test.step(`Hover "Time Preference *"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Time Preference *\"]").nth(0).hover();
  });

  await test.step(`Click "Time Preference *"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Time Preference *\"]/following::select").nth(0).click();
  });

  await test.step(`Type "Morning"`, async () => {
    await page.keyboard.type("Morning");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//H2[normalize-space() = \"Interview Preferences\"]").nth(0).hover();
  });

  await test.step(`Hover "# of Total Interview Slots*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Total Interview Slots*\"]").nth(0).hover();
  });

  await test.step(`Hover "# of Interview Rooms Requested*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Interview Rooms Requested*\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//INPUT[@id='NumInterviewSlotsTotal'][@name='NumInterviewSlotsTotal'][@placeholder='# of Total Interview Slots'][@type='number']").nth(0).fill("1");
  });

  await test.step(`Hover "Length of Interview*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Length of Interview*\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//INPUT[@id='NumRoomsRequired'][@name='NumRoomsRequired'][@placeholder='# of Interview Rooms Requested'][@type='number']").nth(0).fill("1");
  });

  await test.step(`Fill "30"`, async () => {
    await page.locator("//INPUT[@id='InterviewLengthMinutes'][@name='InterviewLengthMinutes'][@placeholder='Length of Interview'][@type='number']").nth(0).fill("30");
  });

  await test.step(`Hover "Rotating Schedule"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Rotating Schedule\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Rotating Schedule\")]/ancestor::div[contains(@class,\"form-group\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Are you hiring for multiple positions?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Are you hiring for multiple positions?\"]").nth(0).hover();
  });

  await test.step(`Click "Are you hiring for multiple positions?"`, async () => {
    await page.locator("//LABEL[@id=\"IsHiringForMultiplePositions-label\"][normalize-space() = \"Are you hiring for multiple positions?\"]/following-sibling::div//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Use My Information\"]").nth(0).click();
  });

  await test.step(`Hover "OCI Contact Title*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"OCI Contact Title*\"]").nth(0).hover();
  });

  await test.step(`Hover "OCI Contact Phone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"OCI Contact Phone*\"]").nth(0).hover();
  });

  await test.step(`Fill "MBA Recruiter"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='OCI Contact Title'][@type='text']").nth(0).fill("MBA Recruiter");
  });

  await test.step(`Hover "OCI Contact Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"OCI Contact Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "2223334444"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='OCI Contact Phone'][@type='text']").nth(0).fill("2223334444");
  });

  await test.step(`Fill "1234"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='OCI Contact Address']").nth(0).fill("1234");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(1).hover();
  });

  await test.step(`Hover "Save Draft"`, async () => {
    await page.locator(BTN_SAVE_DRAFT).nth(1).hover();
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Next\"]").nth(1).click();
  });

  await test.step(`Hover "Approve this request for On-Campus Inte…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Approve this request for On-Campus Interviews?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Ok\"]").nth(0).click();
  });

  await test.step(`Hover "TBD"`, async () => {
    await page.locator("//H1[normalize-space() = \"TBD\"]").nth(0).hover();
  });

  await test.step(`Hover "12twenty, Inc."`, async () => {
    await page.locator("//A[normalize-space() = \"12twenty, Inc.\"]").nth(0).hover();
  });

  await test.step(`Hover "Registration - Active"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Registration - Active\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting - Non-Existent"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Posting - Non-Existent\"]").nth(0).hover();
  });

  await test.step(`Hover "Schedule Not Released"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Schedule Not Released\"]").nth(0).hover();
  });

  await test.step(`Hover "Date Needed"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Date Needed\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting Status: There is no job pos…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Posting Status: There is no job posting associated with this OCI registration. Please post job details as early as possible.\"]").nth(0).hover();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
  });

  await test.step(`Click "Create Job Posting"`, async () => {
    await page.locator("//H1[normalize-space() = \"Create Job Posting\"]").nth(0).click();
  });

  await test.step(`Hover "Job Details"`, async () => {
    await page.locator("//H2[normalize-space() = \"Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Title*"`, async () => {
    await page.locator(LABEL_JOB_TITLE).nth(0).hover();
  });

  await test.step(`Hover "Type of Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type of Job\"]").nth(0).hover();
  });

  await test.step(`Fill "Senior Associate"`, async () => {
    await page.locator(INPUT_JOB_TITLE).nth(0).fill("Senior Associate");
  });

  await test.step(`Click "-- Type of Job --"`, async () => {
    await page.locator(MULTI_TYPE_OF_JOB).nth(0).click();
  });

  await test.step(`Click "Full-Time Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Full-Time Job\"]").nth(0).click();
  });

  await test.step(`Click "Type of Job"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type of Job\"]").nth(0).click();
  });

  await test.step(`Hover "Location Type*"`, async () => {
    await page.locator(LABEL_LOCATION_TYPE).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_LOCATION_TYPE).nth(0).click();
  });

  await test.step(`Type "Remote/Telecommute"`, async () => {
    await page.keyboard.type("Remote/Telecommute");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(LABEL_INDUSTRY).nth(0).hover();
  });

  await test.step(`Click "-- Industry --"`, async () => {
    await page.locator(MULTI_INDUSTRY).nth(0).click();
  });

  await test.step(`Click "Accounting - Accounting"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Accounting - Accounting\"]").nth(0).click();
  });

  await test.step(`Click "Job Function*"`, async () => {
    await page.locator(LABEL_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Click "-- Job Function --"`, async () => {
    await page.locator(MULTI_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Click "Accounting - Assurance"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Accounting - Assurance\"]").nth(0).click();
  });

  await test.step(`Click "Job Function*"`, async () => {
    await page.locator(LABEL_JOB_FUNCTION).nth(0).click();
  });

  await test.step(`Hover "Job Description"`, async () => {
    await page.locator("//H2[normalize-space() = \"Job Description\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Description*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Test"`, async () => {
    await page.keyboard.type("Test");
    await page.locator("//LABEL[@id='contactToAdd-label'][normalize-space() = \"Interviewer*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-64pf4-select'][@name='contactToAdd']").nth(0).click();
  });

  await test.step(`Type "Jane Doe"`, async () => {
    await page.keyboard.type("Jane Doe");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Hover "Primary Job Contact"`, async () => {
    await page.locator("//H2[normalize-space() = \"Primary Job Contact\"]").nth(0).hover();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Use My Information\"]").nth(0).click();
  });

  await test.step(`Hover "Job Posting Contact Title*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Posting Contact Title*\"]").nth(0).hover();
  });

  await test.step(`Fill "MBA Recruiter"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Job Posting Contact Title'][@type='text']").nth(0).fill("MBA Recruiter");
  });

  await test.step(`Hover "Job Posting Contact Phone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Posting Contact Phone*\"]").nth(0).hover();
  });

  await test.step(`Fill "2223334444"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Job Posting Contact Phone'][@type='text']").nth(0).fill("2223334444");
  });

  await test.step(`Hover "Job Posting Contact Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Posting Contact Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "1234"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Job Posting Contact Address']").nth(0).fill("1234");
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Hover "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).hover();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group*\"]//following::LABEL[normalize-space() = \"Select all\"]").nth(0).click();
  });

  await test.step(`Click "Student Group*"`, async () => {
    await page.locator(LABEL_STUDENT_GROUP).nth(0).click();
  });

  await test.step(`Hover "Career Center Administrator"`, async () => {
    await page.locator("//H2[normalize-space() = \"Career Center Administrator\"]").nth(0).hover();
  });

  await test.step(`Hover "# of Total Interview Slots*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Total Interview Slots*\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//INPUT[@id='NumInterviewSlotsTotal'][@name='NumInterviewSlotsTotal'][@placeholder='# of Total Interview Slots'][@type='number']").nth(0).fill("1");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(1).hover();
  });

  await test.step(`Hover "Save Draft"`, async () => {
    await page.locator(BTN_SAVE_DRAFT).nth(1).hover();
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Next\"]").nth(1).click();
  });

  await test.step(`Hover "Job Posting"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Posting\"]").nth(0).hover();
  });

  await test.step(`Hover "Approve this job posting?"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Approve this job posting?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Ok\"]").nth(0).click();
  });

  await test.step(`Hover "Senior Associate"`, async () => {
    await page.locator("//H1[normalize-space() = \"Senior Associate\"]").nth(0).hover();
  });

  await test.step(`Click "Applicants (0)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (0)\"]").nth(0).click();
  });

  await test.step(`Click "Schedule"`, async () => {
    await page.locator(TAB_SCHEDULE).nth(0).click();
  });

  await test.step(`Hover "The Employer has not been notified of t…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The Employer has not been notified of the interview date\"]").nth(0).hover();
  });

  await test.step(`Click "Add Schedule"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Schedule\"]").nth(0).click();
  });

  await test.step(`Hover "Add Schedule(s)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add Schedule(s)\"]").nth(0).hover();
  });

  await test.step(`Hover "Pacific Time (US & Canada) (UTC-08:00)"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Pacific Time (US & Canada) (UTC-08:00)\"]").nth(1).hover();
  });

  await test.step(`Hover "Add Schedule Options"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Add Schedule Options\"]").nth(0).hover();
  });

  await test.step(`Click "Create your own schedule"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Create your own schedule\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Time*\"]").nth(0).hover();
  });

  await test.step(`Hover "to"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"to\"]").nth(0).hover();
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).click();
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
    await page.locator(INPUT_START_TIME).nth(0).fill("10:30pm");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(INPUT_END_TIME).nth(0).fill("11:30pm");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//DIV[normalize-space() = \"If you would also like to add schedules now, complete the fields below.\"]").nth(0).hover();
  });

  await test.step(`Hover "Duration of Slots (min)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Duration of Slots (min)\"]").nth(0).hover();
  });

  await test.step(`Fill "30"`, async () => {
    await page.locator("//INPUT[@type='number']").nth(0).fill("30");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Hover "Interview Preferences"`, async () => {
    await page.locator("//H4[normalize-space() = \"Interview Preferences\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[contains(@class,\"interview-info\")]").nth(0).hover();
  });

  await test.step(`Hover "1 Schedule, 2 Slots"`, async () => {
    await page.locator("//H3[normalize-space() = \"1 Schedule, 2 Slots\"]").nth(0).hover();
  });

  await test.step(`Click "Actions"`, async () => {
    await page.locator(BTN_ACTIONS).nth(1).click();
  });

  await test.step(`Click "Assign Interviewer"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Assign Interviewer\"]").nth(0).click();
  });

  await test.step(`Hover "Assign Interviewer"`, async () => {
    await page.locator("//H3[normalize-space() = \"Assign Interviewer\"]").nth(0).hover();
  });

  await test.step(`Hover "Interviewer Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer Name\"]").nth(0).hover();
  });

  await test.step(`Click "-- Interviewer Name --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Interviewer Name --\"]").nth(0).click();
  });

  await test.step(`Click "Jane Doe"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Jane Doe\"]").nth(0).click();
  });

  await test.step(`Click "Interviewer Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer Name\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Assign"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Assign\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Jane Doe"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Interviewer\"]//following-sibling::dd").nth(0)).toHaveText("Jane Doe");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TT-DATE-TIME-DISPLAY").nth(16).hover();
  });

  await test.step(`Click "10:30pm - 11:00pm PDT"`, async () => {
    await page.locator("//tt-date-time-display[normalize-space()=\"10:30pm - 11:00pm PDT\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "10:30pm - 11:00pm PDT"`, async () => {
    await page.locator("//tt-date-time-display[normalize-space()=\"10:30pm - 11:00pm PDT\"]/following::A[@role='button'][normalize-space() = \"Add New Applicant\"]").nth(0).click();
  });

  await test.step(`Hover "Add Student"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add Student\"]").nth(0).hover();
  });

  await test.step(`Hover "Student*"`, async () => {
    await page.locator(LABEL_STUDENT).nth(0).hover();
  });

  await test.step(`Click "Name or Student Id"`, async () => {
    await page.locator("//INPUT[@id='Applicant'][@name='Applicant'][@placeholder='Name or Student Id'][@type='text']").nth(0).click();
  });

  await test.step(`Type "Alexa Kane"`, async () => {
    await page.keyboard.type("Alexa Kane");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//H3[normalize-space() = \"Add Student\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Apply\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Not Notified"`, async () => {
    await expect(page.locator("//div[normalize-space()=\"Alexa Kane\"]/ancestor::div[@class=\"entity-short-summary\"]//span[contains(@class,\"badge\")]").nth(0)).toHaveText("Not Notified");
  });

  await test.step(`Click "10:30pm - 11:00pm PDT"`, async () => {
    await page.locator("//tt-date-time-display[normalize-space()=\"10:30pm - 11:00pm PDT\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Notify Interview Time"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Notify Interview Time\"]").nth(0).click();
  });

  await test.step(`Hover "Notify"`, async () => {
    await page.locator("//H3[normalize-space() = \"Notify\"]").nth(0).hover();
  });

  await test.step(`Hover "Do you want to notify Alexa Kane about …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Do you want to notify Alexa Kane about their scheduled interview with an email?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Confirm\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "Alexa Kane was successfully notified of…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Alexa Kane was successfully notified of their schedule interview.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Notified"`, async () => {
    await expect(page.locator("//div[normalize-space()=\"Alexa Kane\"]/ancestor::div[@class=\"entity-short-summary\"]//span[contains(@class,\"badge\")]").nth(0)).toHaveText("Notified");
  });

  await test.step(`Hover "12twenty Meeting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"12twenty Meeting\"]").nth(0).hover();
  });

  await test.step(`Click "12twenty Meeting"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"12twenty Meeting\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Copy Meeting URL"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Copy Meeting URL\"]").nth(0).click();
  });

  await test.step(`Hover "Select Link to Copy"`, async () => {
    await page.locator("//H3[normalize-space() = \"Select Link to Copy\"]").nth(0).hover();
  });

  await test.step(`Hover "Admin Link"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Link\"]").nth(0).hover();
  });

  await test.step(`Hover "Jane Doe"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Jane Doe\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(1).click();
  });

  await test.step(`Hover "The link was copied to the clipboard"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The link was copied to the clipboard\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//span[normalize-space()=\"Jane Doe\"]/following-sibling::tt-clipboard-button";
  });

  await test.step(`Step 1`, async () => {
    await page.locator(selector).click;
    await page.waitForTimeout(500);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TT-DATE-TIME-DISPLAY").nth(0).hover();
  });

  await test.step(`Hover "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]").nth(3).hover();
  });

  await test.step(`Hover "Senior Associate"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Senior Associate\"]").nth(0).hover();
  });

  await test.step(`Hover "12twenty, Inc."`, async () => {
    await page.locator("//DIV[normalize-space() = \"12twenty, Inc.\"]").nth(0).hover();
  });

  await test.step(`Hover "Jane Doe"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Jane Doe\"]").nth(0).hover();
  });

  await test.step(`Click "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]").nth(3).click();
  });

  await test.step(`Hover "This applicant has submitted no documen…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"This applicant has submitted no documents for this job posting.\"]").nth(1).hover();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(1).click();
  });

  await test.step(`Hover "This applicant has submitted no documen…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"This applicant has submitted no documents for this job posting.\"]").nth(1).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Close"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Close\"]").nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Senior Associate"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Senior Associate\"]").nth(0).click();
  });

  await test.step(`Click "Schedule"`, async () => {
    await page.locator(TAB_SCHEDULE).nth(0).click();
  });

  await test.step(`Click "10:30pm - 11:00pm PDT"`, async () => {
    await page.locator("//tt-date-time-display[normalize-space()=\"10:30pm - 11:00pm PDT\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "10:30pm - 11:00pm PDT"`, async () => {
    await page.locator("//tt-date-time-display[normalize-space()=\"10:30pm - 11:00pm PDT\"]/following::A[@role='button'][normalize-space() = \"Unassign Applicant\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Applicants (1)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (1)\"]").nth(0).click();
  });

  await test.step(`Hover "Alexa Kane"`, async () => {
    await page.locator("//A[normalize-space() = \"Alexa Kane\"]").nth(0).hover();
  });

  await test.step(`Click "Alexa Kane"`, async () => {
    await page.locator("//A[normalize-space() = \"Alexa Kane\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Job Posting"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Job Posting\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this job posting?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Job Posting"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Job Posting\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
    await page.waitForLoadState('load');
    await page.reload();
  });

});
