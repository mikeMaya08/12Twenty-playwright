// TC: TC75214
// Outcomes - Student creates Post Graduation Own Venture

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_SEARCH_LOWER,
  CONFIRM_PERM_DELETE,
  INPUT_SEARCH_USERS,
  LABEL_NO,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT,
  NAV_HOME,
  NAV_PROFILE,
  NAV_STUDENTS_ALUMNI,
  RBTN_OK_MODAL_CONT,
  SELECT_JOB_INDUSTRY,
} from '@config/selectors';

test("Outcomes - Student creates Post Graduation Own Venture - TC75214", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
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

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Home\")]").nth(0).click();
  });

  await test.step(`Click "Add Experience or Status"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Experience or Status\"]").nth(0).click();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Post Graduation\")]").nth(0).click();
  });

  await test.step(`Hover "Report Status"`, async () => {
    await page.locator("//H3[contains(text(),\"Report Status\")]").nth(0).hover();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//P[contains(text(),\"Post Graduation\")]").nth(0).hover();
  });

  await test.step(`Hover "Please tell us about your plans"`, async () => {
    await page.locator("//P[contains(text(),\"Please tell us about your plans\")]").nth(0).hover();
  });

  await test.step(`Click "Own Venture"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Own Venture\"]").nth(0).click();
  });

  await test.step(`Hover "Employer"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Employer\")]").nth(0).hover();
  });

  await test.step(`Fill "TBD"`, async () => {
    await page.locator("//INPUT[@id='Job_CompanyName'][@name='Job.CompanyName'][@placeholder='Employer'][@type='text']").nth(0).fill("TBD");
  });

  await test.step(`Click "Detailed Industry"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Detailed Industry\")]").nth(0).click();
  });

  await test.step(`Select "149999414151537"`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).selectOption("149999414151537");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='isCompanyNameTbd'][@type='checkbox']").nth(0).click();
  });

  await test.step(`Hover "Job Title"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Job Title\")]").nth(0).hover();
  });

  await test.step(`Fill "Owner Muuk"`, async () => {
    await page.locator("//INPUT[@id='Job_JobTitle'][@name='Job.JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Owner Muuk");
  });

  await test.step(`Select "2"`, async () => {
    await page.locator("//SELECT[@id='Job_OwnVentureTypeId'][@name='Job.OwnVentureTypeId']").nth(0).selectOption("2");
  });

  await test.step(`Hover "Location Type"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Location Type\")]").nth(0).hover();
  });

  await test.step(`Select "2"`, async () => {
    await page.locator("//SELECT[@name='Job.LocationTypeId'][@id='Job.LocationTypeId']").nth(0).selectOption("2");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='isLocationTbd'][@type='checkbox']").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='JobStartDate'][@name='Job.Salary.JobStartDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(8).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='Job.Salary.TotalCompensation_checkbox'][@name='Job.Salary.IsTotalCompensationToBeDetermined'][@type='checkbox']").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.TotalCompensation'][@name='Job.Salary.TotalCompensation']").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsFullTimeFalse'][@name='Job.IsFullTime'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a freelance position?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a freelance position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsFreelanceFalse'][@name='Job.IsFreelance'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a faculty position?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a faculty position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(2).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsFacultyPositionFalse'][@name='Job.IsFacultyPosition'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(4).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsTemporaryWorkFalse'][@name='Job.IsTemporaryWork'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a post-graduation internship?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a post-graduation internship?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(5).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsPostGradInternshipFalse'][@name='Job.IsPostGradInternship'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(6).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsCompanyStartupTrue'][@name='Job.IsCompanyStartup'][@type='radio']").nth(0).check();
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@id='Job_FundingRaisedId'][@name='Job.FundingRaisedId']").nth(0).selectOption("1");
  });

  await test.step(`Hover "Number of Employees (Own Venture)"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Number of Employees (Own Venture)\")]").nth(0).hover();
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@id='Job_OwnVentureNumberOfEmployeesId'][@name='Job.OwnVentureNumberOfEmployeesId']").nth(0).selectOption("1");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[@type='button'][contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Fill "Starting online company to sell clothes."`, async () => {
    await page.locator("//TEXTAREA[@id='Job_OptionalPertinentInformation'][@name='Job.OptionalPertinentInformation']").nth(0).fill("Starting online company to sell clothes.");
  });

  await test.step(`Hover "Satisfaction"`, async () => {
    await page.locator("//label[normalize-space() = \"Satisfaction\"]").nth(0).hover();
  });

  await test.step(`Hover "Star Rating Attribute - Required"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Star Rating Attribute - Required\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@class,\"star-rating-star\")]//i").nth(2).click();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='submit'][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Home\")]").nth(0).click();
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH_LOWER).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Owner Muuk"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Owner Muuk\"]").nth(0).hover();
  });

  await test.step(`Click "Owner Muuk"`, async () => {
    await page.locator("//A[@role=\"button\"][normalize-space() = \"Owner Muuk\"]/ancestor::div[@class=\"ng-scope\"][1]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Owner Muuk"`, async () => {
    await page.locator("//A[@role=\"button\"][normalize-space() = \"Owner Muuk\"]/following::a[normalize-space()=\"Approve\"]").nth(0).click();
  });

  await test.step(`Hover "Approve Job"`, async () => {
    await page.locator("//H3[normalize-space() = \"Approve Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to approve this j…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to approve this job?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Approve"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Approve\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Owner Muuk"`, async () => {
    await page.reload();
    await page.locator("//A[@role=\"button\"][normalize-space() = \"Owner Muuk\"]/ancestor::div[@class=\"ng-scope\"][1]//SPAN[normalize-space() = \"Approved\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Owner Muuk"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Owner Muuk\"]").nth(0).click();
  });

  await test.step(`Hover "Own Venture"`, async () => {
    await page.locator("//*[contains(text(),\"Own Venture\")]").nth(0).hover();
  });

  await test.step(`Hover "NOT SHARED"`, async () => {
    await page.locator("//SPAN[contains(text(),\"NOT SHARED\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Owner Muuk"`, async () => {
    await page.locator("//*[contains(text(),\"Owner Muuk\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//A[contains(text(),\"Owner Muuk\")]//following::A[@title=\"Edit Job\"][normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator("//A[contains(text(),\"Owner Muuk\")]//following::A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Interview Question"`, async () => {
    await page.locator("//A[contains(text(),\"Owner Muuk\")]//following::a[normalize-space() = \"Add Interview Question\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[contains(text(),\"Owner Muuk\")]//following::A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Entry"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Entry\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Entry"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Entry\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

});
