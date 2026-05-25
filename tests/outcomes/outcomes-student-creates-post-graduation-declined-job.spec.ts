// TC: TC75195
// Outcomes - Student creates Post Graduation Declined Job

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  LABEL_NO,
  LABEL_YES,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  NAV_PROFILE,
  RBTN_OK_MODAL_CONT,
  SELECT_JOB_INDUSTRY,
} from '@config/selectors';

test("Outcomes - Student creates Post Graduation Declined Job - TC75195", async ({ page, context }) => {
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

  await test.step(`Hover "Add Experience or Status..."`, async () => {
    await page.locator("//H3[contains(text(),\"Add Experience or Status...\")]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Post Graduation\")]").nth(0).click();
  });

  await test.step(`Click "Declined Job"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Declined Job\"]").nth(0).click();
  });

  await test.step(`Fill "Sysco"`, async () => {
    await page.locator("//INPUT[@id='Job_CompanyName'][@name='Job.CompanyName'][@placeholder='Employer'][@type='text']").nth(0).fill("Sysco");
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.locator("//DIV[contains(text(),\"Sysco\")]").nth(0).click();
  });

  await test.step(`Hover "Detailed Industry"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Detailed Industry\")]").nth(0).hover();
  });

  await test.step(`Select "149999414151538"`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).selectOption("149999414151538");
  });

  await test.step(`Hover "Job Title"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Job Title\")]").nth(0).hover();
  });

  await test.step(`Fill "Muuk Manager"`, async () => {
    await page.locator("//INPUT[@id='Job_JobTitle'][@name='Job.JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Muuk Manager");
  });

  await test.step(`Hover "Detailed Function"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Detailed Function\")]").nth(0).hover();
  });

  await test.step(`Select "100001010430353"`, async () => {
    await page.locator("//SELECT[@name='Job.JobFunctionId'][@id='Job.JobFunctionId']").nth(0).selectOption("100001010430353");
  });

  await test.step(`Select "9"`, async () => {
    await page.locator("//SELECT[@id='Job_NumberOfEmployeesId'][@name='Job.NumberOfEmployeesId']").nth(0).selectOption("9");
  });

  await test.step(`Select "2"`, async () => {
    await page.locator("//SELECT[@name='Job.LocationTypeId'][@id='Job.LocationTypeId']").nth(0).selectOption("2");
  });

  await test.step(`Hover "Country"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Country\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='isLocationTbd'][@type='checkbox']").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='OfferDate'][@name='Job.OfferDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(1).click();
  });

  await test.step(`Hover "Primary Compensation"`, async () => {
    await page.locator("//H4[contains(text(),\"Primary Compensation\")]").nth(0).hover();
  });

  await test.step(`Hover "Expected Commission"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Expected Commission\")]").nth(0).hover();
  });

  await test.step(`Fill "65000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.BaseSalary'][@name='Job.Salary.BaseSalary']").nth(0).fill("65000");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveExpectedCommission']").nth(0).click();
  });

  await test.step(`Hover "Expected Bonus"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Expected Bonus\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveExpectedBonus']").nth(0).click();
  });

  await test.step(`Hover "Guaranteed Bonus"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Guaranteed Bonus\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveGuaranteedBonus']").nth(0).click();
  });

  await test.step(`Hover "Other Guaranteed Compensation"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Other Guaranteed Compensation\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveOtherCompensation']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveCarriedInterestAmount']").nth(0).click();
  });

  await test.step(`Hover "Signing Bonus"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Signing Bonus\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveSigningBonus']").nth(0).click();
  });

  await test.step(`Hover "Relocation Reimbursement"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Relocation Reimbursement\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveRelocationBonus']").nth(0).click();
  });

  await test.step(`Hover "Tuition Reimbursement"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Tuition Reimbursement\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveTuitionReimbursementAmount']").nth(0).click();
  });

  await test.step(`Hover "Stock or Equity Value"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Stock or Equity Value\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@name='Job.Salary.DidNotReceiveStockAmount']").nth(0).click();
  });

  await test.step(`Hover "Does your compensation include health i…"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Does your compensation include health insurance?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.Salary.HasMedicalInsuranceTrue'][@name='Job.Salary.HasMedicalInsurance'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Does your compensation include tuition …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Does your compensation include tuition reimbursement\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.Salary.HasTuitionReimbursementFalse'][@name='Job.Salary.HasTuitionReimbursement'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Job Source"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Job Source\")]").nth(0).hover();
  });

  await test.step(`Select "100011010338751"`, async () => {
    await page.locator("//SELECT[@name='Job.CustomJobSourceId'][@id='Job.CustomJobSourceId']").nth(0).selectOption("100011010338751");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsFullTimeTrue'][@name='Job.IsFullTime'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Did this job come as a result of an int…"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Did this job come as a result of an internship you had with this employer?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(3).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsJobFromSummerInternshipFalse'][@name='Job.IsJobFromSummerInternship'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a freelance position?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a freelance position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(4).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsFreelanceFalse'][@name='Job.IsFreelance'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a faculty position?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a faculty position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(5).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsFacultyPositionFalse'][@name='Job.IsFacultyPosition'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a temporary/contract job?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a temporary/contract job?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(7).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsTemporaryWorkFalse'][@name='Job.IsTemporaryWork'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is this a post-graduation internship?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a post-graduation internship?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(8).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsPostGradInternshipFalse'][@name='Job.IsPostGradInternship'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Is the employer a startup?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is the employer a startup?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(9).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@id='Job.IsCompanyStartupFalse'][@name='Job.IsCompanyStartup'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Please provide other pertinent informat…"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Please provide other pertinent information about your job\")]").nth(0).hover();
  });

  await test.step(`Fill "I am not accepting this job due to loca…"`, async () => {
    await page.locator("//TEXTAREA[@id='Job_OptionalPertinentInformation'][@name='Job.OptionalPertinentInformation']").nth(0).fill("I am not accepting this job due to location.");
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

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully saved your job ent"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully saved your job ent\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Home\")]").nth(0).click();
  });

  await test.step(`Hover "Muuk Manager"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Muuk Manager\")]").nth(0).hover();
  });

  await test.step(`Hover "Sysco"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Sysco\"]").nth(0).hover();
  });

  await test.step(`Hover "Offer Rejected"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Offer Rejected\")]").nth(0).hover();
  });

  await test.step(`Hover "NOT SHARED"`, async () => {
    await page.locator("//SPAN[contains(text(),\"NOT SHARED\")]").nth(0).hover();
  });

  await test.step(`Click "Muuk Manager"`, async () => {
    await page.locator("//A[contains(text(),\"Muuk Manager\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//A[contains(text(),\"Muuk Manager\")]//following::a[normalize-space()=\"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Interview Question"`, async () => {
    await page.locator("//A[contains(text(),\"Muuk Manager\")]//following::a[normalize-space() = \"Add Interview Question\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[contains(text(),\"Muuk Manager\")]//following::a[normalize-space()=\"Delete\"]").nth(0).click();
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
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
  });

});
