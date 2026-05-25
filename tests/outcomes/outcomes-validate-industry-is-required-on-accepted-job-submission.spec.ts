// TC: TC_A84040
// Outcomes – Validate Industry is required on Accepted Job submission

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_DELETE_ENTRY,
  DATEPICKER_NEXT_DAY2,
  DIV_USA,
  H1_E2E_TEST_STUDENT,
  MODAL_SUCCESS_PLAIN,
  NAV_HOME,
  NAV_PROFILE,
  RBTN_OK,
  SELECT_JOB_INDUSTRY,
  SPAN_CLOSE_X,
  TAB_HOME,
} from '@config/selectors';

test("Outcomes – Validate Industry is required on Accepted Job submission - TC_A84040", async ({ page, context }) => {
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
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(H1_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//H4[normalize-space() = \"Post Graduation\"]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//H4[normalize-space() = \"Post Graduation\"]//following::A[@role=\"button\"][normalize-space() = \"Add Experience or Status\"]").nth(0).click();
  });

  await test.step(`Hover "Report Status"`, async () => {
    await page.locator("//H3[normalize-space() = \"Report Status\"]").nth(0).hover();
  });

  await test.step(`Click "Accepted Job"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Accepted Job\"]").nth(0).click();
  });

  await test.step(`Hover "Job - Offer Accepted"`, async () => {
    await page.locator("//H1[normalize-space() = \"Job - Offer Accepted\"]").nth(0).hover();
  });

  await test.step(`Hover "Basics"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Basics\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Employer *\"]").nth(0).hover();
  });

  await test.step(`Fill "12twenty, Inc."`, async () => {
    await page.locator("//INPUT[@id='Job_CompanyName'][@name='Job.CompanyName'][@placeholder='Employer'][@type='text']").nth(0).fill("12twenty, Inc.");
  });

  await test.step(`Click "12twenty, Inc."`, async () => {
    await page.locator("//DIV[normalize-space() = \"12twenty, Inc.\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Job Title *\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Detailed Industry *\"]").nth(0).hover();
  });

  await test.step(`Fill "Product Specialist"`, async () => {
    await page.locator("//INPUT[@id='Job_JobTitle'][@name='Job.JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Product Specialist");
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).click();
  });

  await test.step(`Type "Technology/Engeneering/Science"`, async () => {
    await page.keyboard.type("Technology/Engeneering/Science");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[contains(normalize-space(),\"Detailed Function\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='Job.JobFunctionId'][@id='Job.JobFunctionId']").nth(0).click();
  });

  await test.step(`Type "Administrative"`, async () => {
    await page.keyboard.type("Administrative");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[contains(normalize-space(),\"Location Type\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='Job.LocationTypeId'][@id='Job.LocationTypeId']").nth(0).click();
  });

  await test.step(`Type "On Site"`, async () => {
    await page.keyboard.type("On Site");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Country *\"]").nth(0).hover();
  });

  await test.step(`Fill "United States (USA)"`, async () => {
    await page.locator("//INPUT[@id='Job_Country'][@name='Job.Country'][@placeholder='Country'][@type='text']").nth(0).fill("United States (USA)");
  });

  await test.step(`Click "United States (USA)"`, async () => {
    await page.locator(DIV_USA).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"City *\"]").nth(0).hover();
  });

  await test.step(`Click "City"`, async () => {
    await page.locator("//INPUT[@id='Job_CityName'][@name='Job.CityName'][@placeholder='City'][@type='text']").nth(0).click();
  });

  await test.step(`Type "Grand Rapids - MI"`, async () => {
    await page.keyboard.type("Grand Rapids - MI");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Address 1 *\"]").nth(0).hover();
  });

  await test.step(`Fill "123 Main Street"`, async () => {
    await page.locator("//INPUT[@id='Job_Address1'][@name='Job.Address1'][@type='text']").nth(0).fill("123 Main Street");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Postal Code *\"]").nth(0).hover();
  });

  await test.step(`Fill "12345"`, async () => {
    await page.locator("//INPUT[@id='Job_PostalCode'][@name='Job.PostalCode'][@type='text']").nth(0).fill("12345");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Offer Received Date\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='OfferDate'][@name='Job.OfferDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[contains(@class,\"today\")]/preceding::td").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Offer Accepted Date *\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='AcceptedDate'][@name='Job.AcceptedDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(17).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Start Date *\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='JobStartDate'][@name='Job.Salary.JobStartDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(6).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Base Salary *\"]").nth(0).hover();
  });

  await test.step(`Fill "75000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.BaseSalary'][@name='Job.Salary.BaseSalary']").nth(0).fill("75000");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Expected Commission\"]").nth(0).hover();
  });

  await test.step(`Click "Do not expect to receive Expected Commi…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Do not expect to receive Expected Commission\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Expected Bonus *\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive an Expected Bonus"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive an Expected Bonus\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Guaranteed Bonus *\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Guaranteed Bonus"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Guaranteed Bonus\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Other Guaranteed Compensation *\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Other Guaranteed Compen…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Other Guaranteed Compensation\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Carried Interest *\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Carried Interest"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Carried Interest\"]").nth(0).click();
  });

  await test.step(`Hover "Sign On Compensation"`, async () => {
    await page.locator("//H4[normalize-space() = \"Sign On Compensation\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Signing Bonus *\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Signing Bonus"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Signing Bonus\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Relocation Reimbursement\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Relocation Reimbursement"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Relocation Reimbursement\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Tuition Reimbursement\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Tuition Reimbursement"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Tuition Reimbursement\"]").nth(0).click();
  });

  await test.step(`Hover "Other Compensation"`, async () => {
    await page.locator("//H4[normalize-space() = \"Other Compensation\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Stock or Equity Value *\"]").nth(0).hover();
  });

  await test.step(`Click "Did not receive Stock or Equity Value"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Did not receive Stock or Equity Value\"]").nth(0).click();
  });

  await test.step(`Click "Does your compensation include health i…"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Does your compensation include health insurance?\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Does your compensation include health insurance?\")]/ancestor::div[contains(@class,\"inline\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Click "Does your compensation include tuition …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Does your compensation include tuition reimbursement\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Does your compensation include tuition reimbursement\")]/ancestor::div[contains(@class,\"inline\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Click "Did you negotiate any elements of this …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Did you negotiate any elements of this offer?\")]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Did you negotiate any elements of this offer?\")]/ancestor::div[contains(@class,\"inline\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Other"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Other\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Job Source *\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='Job.CustomJobSourceId'][@id='Job.CustomJobSourceId']").nth(0).click();
  });

  await test.step(`Type "Alumni Contact"`, async () => {
    await page.keyboard.type("Alumni Contact");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a full-time position?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a full-time position?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Did this job come as a result of an int…"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Did this job come as a result of an internship you had with this employer?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Did this job come as a result of an internship you had with this employer?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Is this a freelance position?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a freelance position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a freelance position?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Is this a faculty position?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a faculty position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a faculty position?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Is this a temporary/contract job?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a temporary/contract job?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a temporary/contract job?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Is this a post-graduation internship?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a post-graduation internship?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is this a post-graduation internship?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Is the employer a startup?"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is the employer a startup?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Is the employer a startup?\")]/ancestor::div[contains(@class,\"FullTimeJob\")]//label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Employer *\"]").nth(0).hover();
  });

  await test.step(`Fill "Google"`, async () => {
    await page.locator("//INPUT[@id='Job_CompanyName'][@name='Job.CompanyName'][@placeholder='Employer'][@type='text']").nth(0).fill("Google");
  });

  await test.step(`Click "Google Inc."`, async () => {
    await page.locator("//DIV[normalize-space() = \"Google Inc.\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[@type='button'][normalize-space() = \"Cancel\"]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='submit'][normalize-space() = \"Submit\"]").nth(0).click();
  });

  await test.step(`Hover "The following fields were not filled ou…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"The following fields were not filled out:\"]").nth(0).hover();
  });

  await test.step(`Hover "Industry"`, async () => {
    await page.locator("//LI[contains(normalize-space(),\"Industry\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Hover "*Required"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"*Required\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Detailed Industry *\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Technology/Engeneering/Science"`, async () => {
    await page.keyboard.type("Technology/Engeneering/Science");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Detailed Industry *\"]").nth(0).click();
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
    await page.locator("//BUTTON[@type='button'][@id='submit'][normalize-space() = \"Submit\"]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully saved your job entry for \\'Product Specialist\\' at \\'Google Inc.\\'.Would you also like to add an interview for this job? Add Interview Questions\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Interview Questions"`, async () => {
    await page.locator("//A[normalize-space() = \"Add Interview Questions\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][@id='modalDialogConfirm'][normalize-space() = \"No thanks. That\\'s all for now!\"]").nth(0).click();
  });

  await test.step(`Click "Product Specialist"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Product Specialist\"]").nth(0).click();
  });

  await test.step(`Hover "Job Details"`, async () => {
    await page.locator("//H3[normalize-space() = \"Job Details\"]").nth(0).hover();
  });

  await test.step(`Hover "Product Specialist"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Product Specialist\"]").nth(0).hover();
  });

  await test.step(`Hover "Office and Administrative Support"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Office and Administrative Support\"]").nth(0).hover();
  });

  await test.step(`Hover "Technology/Engineering/Science - Softwa…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Technology/Engineering/Science - Software Products\"]").nth(0).hover();
  });

  await test.step(`Hover "Technology/Engineering/Science"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Technology/Engineering/Science\"]").nth(0).hover();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(0).click();
  });

  await test.step(`Click "Product Specialist"`, async () => {
    await page.locator("//A[normalize-space() = \"Product Specialist\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Product Specialist"`, async () => {
    await page.locator("//A[normalize-space() = \"Product Specialist\"]/following::A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Entry"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Entry\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this entry?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Entry"`, async () => {
    await page.locator(BTN_DELETE_ENTRY).nth(0).click();
    await page.waitForLoadState('load');
  });

});
