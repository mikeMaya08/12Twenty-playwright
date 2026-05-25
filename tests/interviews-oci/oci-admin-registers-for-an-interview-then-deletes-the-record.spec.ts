// TC: TC61658
// OCI - Admin registers for an Interview then deletes the record

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_NEXT_CONTAINS,
  BTN_OK_LOWERCASE,
  BTN_OPTIONS_LOWER,
  CONFIRM_PERM_DELETE,
  H1_JOB_LISTINGS,
  INPUT_COMPANY_NAME,
  INPUT_DATE,
  LABEL_YES,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  RBTN_COPY_EMPLOYER_URL,
  RBTN_COPY_STUDENT_URL,
  RBTN_DELETE,
  RBTN_VIEW_AUDIT,
} from '@config/selectors';

test("OCI - Admin registers for an Interview then deletes the record - TC61658", async ({ page, context }) => {
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

  await test.step(`Click "Register for Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Register for Interviews\"]").nth(0).click();
  });

  await test.step(`Hover "Register For Interviews"`, async () => {
    await page.locator("//H1[contains(text(),\"Register For Interviews\")]").nth(0).hover();
  });

  await test.step(`Fill "Duolingo"`, async () => {
    await page.locator(INPUT_COMPANY_NAME).nth(0).fill("Duolingo");
    await page.waitForTimeout(3000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='OciRoundId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Hover "Interview Periods Please Note: Once per…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Periods Please Note: Once period dates for individual OCI registrations have been customized, periods can no longer be added or removed from the round. OCI periods can be added or removed from a round, even if there are active OCI registrations, unless period dates have been customized for individual OCI registrations\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Period"`, async () => {
    await page.locator("//DIV[contains(text(),\"e2e Test Period\")]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(12).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[contains(@class,\"today\")]//following::td").nth(1).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[contains(@class,\"today\")]//following::td").nth(2).click();
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

  await test.step(`Hover "# of Total Interview Slots*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Total Interview Slots*\"]").nth(0).hover();
  });

  await test.step(`Hover "# of Interview Rooms Requested*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Interview Rooms Requested*\"]").nth(0).hover();
  });

  await test.step(`Fill "2"`, async () => {
    await page.locator("//INPUT[@id='NumInterviewSlotsTotal'][@name='NumInterviewSlotsTotal'][@placeholder='# of Total Interview Slots'][@type='number']").nth(0).fill("2");
  });

  await test.step(`Hover "Length of Interview*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Length of Interview*\"]").nth(0).hover();
  });

  await test.step(`Fill "3"`, async () => {
    await page.locator("//INPUT[@id='NumRoomsRequired'][@name='NumRoomsRequired'][@placeholder='# of Interview Rooms Needed'][@type='number']").nth(0).fill("3");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Rotating Schedule\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//INPUT[@id='InterviewLengthMinutes'][@name='InterviewLengthMinutes'][@placeholder='Length of Interview'][@type='number']").nth(0).fill("1");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Hover "Are you hiring for multiple positions?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Are you hiring for multiple positions?\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Hover "Please set the number of applications a…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Please set the number of applications allowed per student across all positions\"]").nth(0).hover();
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

  await test.step(`Click "Visitation Description"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Visitation Description\")]").nth(0).click();
  });

  await test.step(`Fill "Visitation Description test"`, async () => {
    await page.locator("//TEXTAREA[@id='Description'][@name='Description'][@placeholder='Visitation Description']").nth(0).fill("Visitation Description test");
  });

  await test.step(`Click "Special Request"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Special Request\")]").nth(0).click();
  });

  await test.step(`Hover "Employer Presentation?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Employer Presentation?\")]").nth(0).hover();
  });

  await test.step(`Fill "Special Request"`, async () => {
    await page.locator("//TEXTAREA[@id='OtherRequests'][@name='OtherRequests'][@placeholder='Special Request']").nth(0).fill("Special Request");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Click "Employer Presentation Details"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Employer Presentation Details\")]").nth(0).click();
  });

  await test.step(`Fill "Employer Presentation Details"`, async () => {
    await page.locator("//TEXTAREA[@id='PresentationRequirements'][@name='PresentationRequirements'][@placeholder='Employer Presentation Details']").nth(0).fill("Employer Presentation Details");
  });

  await test.step(`Click "Office Hours?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Office Hours?\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(3).click();
  });

  await test.step(`Click "Office Hour Details"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Office Hour Details\")]").nth(0).click();
  });

  await test.step(`Fill "Office Hour Details"`, async () => {
    await page.locator("//TEXTAREA[@id='OfficeHoursRequirements'][@name='OfficeHoursRequirements'][@placeholder='Office Hour Details']").nth(0).fill("Office Hour Details");
  });

  await test.step(`Click "Interview Contact"`, async () => {
    await page.locator("//H2[normalize-space() = \"Interview Contact\"]").nth(0).click();
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][contains(text(),\"Use My Information\")]").nth(0).click();
  });

  await test.step(`Fill "9766336543"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Phone'][@type='text']").nth(0).fill("9766336543");
  });

  await test.step(`Fill "Accountant"`, async () => {
    await page.locator("//INPUT[@id='ContactJobTitle'][@name='ContactJobTitle'][@placeholder='Title'][@type='text']").nth(0).fill("Accountant");
  });

  await test.step(`Click "OCI Contact Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"OCI Contact Address*\"]").nth(0).click();
  });

  await test.step(`Fill "Hyderabad 123"`, async () => {
    await page.locator("//TEXTAREA[@id='ContactAddress'][@name='ContactAddress'][@placeholder='Address']").nth(0).fill("Hyderabad 123");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Is Alumni\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(4).click();
  });

  await test.step(`Hover "Grad Year"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Grad Year\")]").nth(0).hover();
  });

  await test.step(`Select "number:2021"`, async () => {
    await page.locator("//SELECT[@id='ContactAlumniGraduationYear'][@name='ContactAlumniGraduationYear']").nth(0).selectOption("number:2021");
  });

  await test.step(`Hover "Program"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Program\")]").nth(0).hover();
  });

  await test.step(`Select "number:14999901011484"`, async () => {
    await page.locator("//SELECT[@id='ContactAlumniGraduationProgramId'][@name='ContactAlumniGraduationProgramId']").nth(0).selectOption("number:14999901011484");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Hover "Save Draft"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Save Draft\")]").nth(1).hover();
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
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Registration - Active"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Registration - Active\")]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting - Non-Existent"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Job Posting - Non-Existent\")]").nth(0).hover();
  });

  await test.step(`Hover "Schedule Not Released"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Schedule Not Released\"]").nth(0).hover();
  });

  await test.step(`Hover "Rotating Schedu"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Rotating Schedu\")]").nth(0).hover();
  });

  await test.step(`Hover "Date Needed"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Date Needed\")]").nth(0).hover();
  });

  await test.step(`Hover "Duolingo"`, async () => {
    await page.locator("//A[contains(text(),\"Duolingo\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Job Posting Actions"`, async () => {
    await page.locator("//LI[contains(text(),\"Job Posting Actions\")]").nth(0).hover();
  });

  await test.step(`Hover "Link to Another OCI"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Link to Another OCI\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
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
    await page.waitForLoadState('load');
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
