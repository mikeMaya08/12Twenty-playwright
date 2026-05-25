// TC: TC64779
// OCI - Register for Interview and Job and apply as Student - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  CKE_DESCRIPTION,
  CONFIRM_PERM_DELETE,
  DATEPICKER_NEXT_DAY,
  DATEPICKER_NEXT_DAY2,
  H1_JOB_LISTINGS,
  H2_ATTACHMENTS_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  INPUT_JOB_TITLE,
  INPUT_SALARY_MAX,
  INPUT_SALARY_MIN,
  INPUT_START_DATE,
  LABEL_EMPLOYER,
  LABEL_JOB_FUNCTION,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
  LINK_WALMART_CT,
  MODAL_PLEASE_CONFIRM_CT,
  MULTI_INDUSTRY,
  MULTI_JOB_FUNCTION,
  MULTI_TYPE_OF_JOB,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  NAV_POST_A_JOB,
  RBTN_CONTINUE_CONT,
  RBTN_DELETE,
  RBTN_DELETE_APP,
  SELECT_CURRENCY,
  SELECT_LOCATION_TYPE,
  SELECT_PAY_FORMAT,
} from '@config/selectors';

test("OCI - Register for Interview and Job and apply as Student - Admin - TC64779", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;
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
  });

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(H1_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Register for Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Register for Interviews\"]").nth(0).click();
  });

  await test.step(`Hover "Register For Interviews"`, async () => {
    await page.locator("//H1[contains(text(),\"Register For Interviews\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Details"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Details\"]").nth(0).hover();
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

  await test.step(`Hover "OCI Round* :"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"OCI Round* :\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='OciRoundId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(15).click();
  });

  await test.step(`Hover "Interview Periods Please Note: Once per…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Periods Please Note: Once period dates for individual OCI registrations have been customized, periods can no longer be added or removed from the round. OCI periods can be added or removed from a round, even if there are active OCI registrations, unless period dates have been customized for individual OCI registrations\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(1).hover();
  });

  await test.step(`Hover "Interview Date Preferences Preferred In…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Date Preferences Preferred Interview Dates cannot be the same.\"]").nth(0).hover();
  });

  await test.step(`Click "First Choice"`, async () => {
    await page.locator("//LABEL[contains(text(),\"First Choice\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Second Choice\"]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Third Choice\"]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(2).click();
  });

  await test.step(`Click "Time Preference *"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Time Preference *\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_800'][@name='custom_attribute_800']").nth(0).click();
  });

  await test.step(`Select "1180051101059"`, async () => {
    await page.locator("//SELECT[@id='custom_attribute_800'][@name='custom_attribute_800']").nth(0).selectOption("1180051101059");
  });

  await test.step(`Hover "Interview Preferences"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Preferences\"]").nth(0).hover();
  });

  await test.step(`Click "# of Total Interview Slots*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Total Interview Slots*\"]").nth(0).click();
  });

  await test.step(`Fill "20"`, async () => {
    await page.locator("//INPUT[@id='NumInterviewSlotsTotal'][@name='NumInterviewSlotsTotal'][@placeholder='# of Total Interview Slots'][@type='number']").nth(0).fill("20");
  });

  await test.step(`Click "# of Interview Rooms Requested*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Interview Rooms Requested*\"]").nth(0).click();
  });

  await test.step(`Fill "4"`, async () => {
    await page.locator("//INPUT[@id='NumRoomsRequired'][@name='NumRoomsRequired'][@placeholder='# of Interview Rooms Needed'][@type='number']").nth(0).fill("4");
  });

  await test.step(`Click "Length of Interview*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Length of Interview*\"]").nth(0).click();
  });

  await test.step(`Fill "15"`, async () => {
    await page.locator("//INPUT[@id='InterviewLengthMinutes'][@name='InterviewLengthMinutes'][@placeholder='Length of Interview'][@type='number']").nth(0).fill("15");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Rotating Schedule\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='HasRotatingSchedule'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Are you hiring for multiple positions?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Are you hiring for multiple positions?\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Click "Please set the number of applications a…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Please set the number of applications allowed per student across all positions\"]").nth(0).click();
  });

  await test.step(`Hover "Additional Information"`, async () => {
    await page.locator("//H2[normalize-space() = \"Additional Information\"]").nth(0).hover();
  });

  await test.step(`Hover "Visitation Description"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Visitation Description\")]").nth(0).hover();
  });

  await test.step(`Fill "7"`, async () => {
    await page.locator("//INPUT[@type='number'][@id='input-ho6ewo-number'][@name='MaxNumApplicationsPerStudent'][@placeholder='Please set the number of applications allowed per student across all positions']").nth(0).fill("7");
  });

  await test.step(`Hover "Special Request"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Special Request\")]").nth(0).hover();
  });

  await test.step(`Fill "Visitation Description"`, async () => {
    await page.locator("//TEXTAREA[@id='Description'][@name='Description'][@placeholder='Visitation Description']").nth(0).fill("Testing visitation description, muuktest automated test case");
  });

  await test.step(`Click "Special Request"`, async () => {
    await page.locator("//TEXTAREA[@id='OtherRequests'][@name='OtherRequests'][@placeholder='Special Request']").nth(0).click();
  });

  await test.step(`Hover "Employer Presentation?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Employer Presentation?\")]").nth(0).hover();
  });

  await test.step(`Fill "Testing special request, muuktest autom…"`, async () => {
    await page.locator("//TEXTAREA[@id='OtherRequests'][@name='OtherRequests'][@placeholder='Special Request']").nth(0).fill("Testing special request, muuktest automated test case");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='DoesWantPresentation'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Employer Presentation Details"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Employer Presentation Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Office Hours?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Office Hours?\")]").nth(0).hover();
  });

  await test.step(`Fill "Employer Presentation Details"`, async () => {
    await page.locator("//TEXTAREA[@id='PresentationRequirements'][@name='PresentationRequirements'][@placeholder='Employer Presentation Details']").nth(0).fill("Testing employer presentation details, muuktest automated test case");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(3).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='DoesWantOfficeHours'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Office Hour Details"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Office Hour Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview Contact"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Contact\"]").nth(0).hover();
  });

  await test.step(`Fill "Testing office hours details, muuktest …"`, async () => {
    await page.locator("//TEXTAREA[@id='OfficeHoursRequirements'][@name='OfficeHoursRequirements'][@placeholder='Office Hour Details']").nth(0).fill("Testing office hours details, muuktest automated test case");
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "Accountant"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("Accountant");
  });

  await test.step(`Hover "OCI Contact Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"OCI Contact Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "7897897890"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("7897897890");
  });

  await test.step(`Fill "Hyderabad"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("Hyderabad");
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator(BTN_NEXT_CONTAINS).nth(1).click();
  });

  await test.step(`Hover "On-Campus Interviews"`, async () => {
    await page.locator("//H3[contains(text(),\"On-Campus Interviews\")]").nth(0).hover();
  });

  await test.step(`Hover "Approve this request for On-Campus Inter"`, async () => {
    await page.locator("//DIV[contains(text(),\"Approve this request for On-Campus Inter\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator(BTN_OK_LOWERCASE).nth(0).click();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
  });

  await test.step(`Hover "Create Job Posting"`, async () => {
    await page.locator("//H1[contains(text(),\"Create Job Posting\")]").nth(0).hover();
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

  await test.step(`Click "Interviewer*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Interviewer*\"]").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
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

  await test.step(`Click "# of Total Interview Slots*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Total Interview Slots*\"]").nth(0).click();
  });

  await test.step(`Fill "3"`, async () => {
    await page.locator("//INPUT[@id='NumInterviewSlotsTotal'][@name='NumInterviewSlotsTotal'][@placeholder='# of Total Interview Slots'][@type='number']").nth(0).fill("3");
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

  await test.step(`Verify "Manager"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Manager\"]").nth(0)).toHaveText("                Manager                                                                                                                            ");
  });

  await test.step(`Verify "Walmart"`, async () => {
    await expect(page.locator(LINK_WALMART_CT).nth(0)).toHaveText("Walmart");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TEXT").nth(0).hover();
  });

  await test.step(`Verify "Full-Time Job"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Full-Time Job\"]").nth(0)).toHaveText(" Full-Time Job");
  });

  await test.step(`Verify "Schedule Not Released"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Schedule Not Released\"]").nth(0)).toHaveText("                        Schedule Not Released                    ");
  });

  await test.step(`Verify "Rotating Schedules Requested"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Rotating Schedu\")]").nth(0)).toHaveText("                        Rotating Schedules Requested                    ");
  });

  await test.step(`Verify "Date Needed"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Date Needed\")]").nth(0)).toHaveText("Date Needed");
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

  await test.step(`Fill "Manager"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Employer, Job Title, or Keyword']").nth(0).fill("Manager");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Manager"`, async () => {
    await page.locator("//A[normalize-space() = \"Manager\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Apply Now"`, async () => {
    await page.locator("//A[contains(text(),\"Apply Now\")]").nth(0).click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Please upload all application documents"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please upload all application documents\")]").nth(0).hover();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Click "I have completed the above application …"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"I have completed the above application requirements\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Yes\")]").nth(0).click();
  });

  await test.step(`Click "Mark as Applied"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Mark as Applied\")]").nth(0).click();
  });

  await test.step(`Hover "Thank you for letting us know you appli…"`, async () => {
    await page.locator("//H1[normalize-space() = \"Thank you for letting us know you applied!\"]").nth(0).hover();
  });

  await test.step(`Click "Back to Job Details"`, async () => {
    await page.locator("//A[contains(text(),\"Back to Job Details\")]").nth(0).click();
  });

  await test.step(`Verify "Application: You applied for this job p…"`, async () => {
    await expect(page.locator("//DIV[contains(normalize-space(), \"Application: You applied for this job posting on\")]").nth(1)).toContainText("                                Application: You applied for this job posting on                                                                                                                                                                                                ");
  });

  await test.step(`Hover "Withdraw from Application"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Withdraw from Application\")]").nth(0).hover();
  });

  await test.step(`Hover "Edit Application"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Edit Application\")]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(5000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Applicants (1)"`, async () => {
    await page.reload();
    await page.locator("//A[@role='tab'][normalize-space() = \"Applicants (1)\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e Test Student\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
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

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//A[contains(text(),\"e2e Test Student\")]";
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
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Manager\")]//ancestor::td//span[normalize-space()=\"Walmart\"]";
  });

});
