// TC: TC_A83906
// Outcomes List Page - Post-Approval UX: Auto-Close Modal and Refresh List

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_DELETE_ENTRY,
  BTN_MORE_FILTERS,
  BTN_OPTIONS_LOWER,
  BTN_OPTIONS_UPPER,
  BTN_RESET_FILTERS,
  INPUT_SEARCH_FILTERS,
  LABEL_NO,
  LABEL_YES,
  LINK_TEST_STUDENT_0001,
  LOGIN_AS_BTN,
  LOGOUT_LINK,
  MODAL_SUCCESS_PLAIN,
  NAV_HOME,
  NAV_PROFILE,
  NAV_STUDENTS_ALUMNI,
  SELECT_JOB_INDUSTRY,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Outcomes List Page - Post-Approval UX: Auto-Close Modal and Refresh List - TC_A83906", async ({ page, context }) => {
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Muuk Product Specialist\"]";
  });

  await test.step(`Hover "Muuk Product Specialist"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Muuk Product Specialist\"]").nth(0).hover();
  });

  await test.step(`Hover "Unapproved"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Unapproved\"]").nth(0).hover();
  });

  await test.step(`Click "Muuk Product Specialist"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuk Product Specialist\"]/ancestor::div[contains(@class,\"tt-card\")]//button").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
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

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
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

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//P[normalize-space() = \"Post Graduation\"]").nth(0).hover();
  });

  await test.step(`Hover "Please tell us about your plans"`, async () => {
    await page.locator("//P[normalize-space() = \"Please tell us about your plans\"]").nth(0).hover();
  });

  await test.step(`Click "Accepted Job"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Accepted Job\"]").nth(0).click();
  });

  await test.step(`Hover "Job - Offer Accepted"`, async () => {
    await page.locator("//H1[normalize-space() = \"Job - Offer Accepted\"]").nth(0).hover();
  });

  await test.step(`Hover "(*) indicates a required field."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"(*) indicates a required field.\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Employer *\"]").nth(0).hover();
  });

  await test.step(`Fill "12twenty,"`, async () => {
    await page.locator("//INPUT[@id='Job_CompanyName'][@name='Job.CompanyName'][@placeholder='Employer'][@type='text']").nth(0).fill("12twenty,");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Job Title *\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuk Product Specialist"`, async () => {
    await page.locator("//INPUT[@id='Job_JobTitle'][@name='Job.JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Muuk Product Specialist ");
  });

  await test.step(`Hover "Detailed Industry"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Detailed Industry\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).click();
  });

  await test.step(`Type "Accounting - Accounting"`, async () => {
    await page.keyboard.type("Accounting - Accounting");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Detailed Function *\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='Job.JobFunctionId'][@id='Job.JobFunctionId']").nth(0).click();
  });

  await test.step(`Type "Accounting - Assurance"`, async () => {
    await page.keyboard.type("Accounting - Assurance");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Location If you are working remotely, please specify the location you will be working from.\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Location Type *\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='Job.LocationTypeId'][@id='Job.LocationTypeId']").nth(0).click();
  });

  await test.step(`Type "100% Remote"`, async () => {
    await page.keyboard.type("100% Remote");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Location not yet determined"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location not yet determined\"]").nth(0).click();
  });

  await test.step(`Hover "When If you do not know the exact day, …"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"When If you do not know the exact day, please approximate.\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Offer Received Date\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='OfferDate'][@name='Job.OfferDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]//preceding-sibling::td").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Offer Accepted Date *\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='AcceptedDate'][@name='Job.AcceptedDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Start Date *\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='JobStartDate'][@name='Job.Salary.JobStartDate'][@placeholder='MM/DD/YYYY']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[@class=\"today day\"]//following::td").nth(6).click();
  });

  await test.step(`Hover "Compensation Currency Receiving"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Compensation Currency Receiving\"]").nth(0).hover();
  });

  await test.step(`Hover "Primary Compensation"`, async () => {
    await page.locator("//H4[normalize-space() = \"Primary Compensation\"]").nth(0).hover();
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

  await test.step(`Type "Former Employer"`, async () => {
    await page.keyboard.type("Former Employer");
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

  await test.step(`Hover "Satisfaction"`, async () => {
    await page.locator("//label[normalize-space() = \"Satisfaction\"]").nth(0).hover();
  });

  await test.step(`Hover "Star Rating Attribute - Required"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Star Rating Attribute - Required\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@class,\"star-rating-star\")]//i").nth(2).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[@type='button'][normalize-space() = \"Cancel\"]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='submit'][normalize-space() = \"Submit\"]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully saved your job entry for \\'Muuk Product Specialist\\' at \\'12twenty, Inc.\\'.Would you also like to add an interview for this job? Add Interview Questions\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Interview Questions"`, async () => {
    await page.locator("//A[normalize-space() = \"Add Interview Questions\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][@id='modalDialogConfirm'][normalize-space() = \"No thanks. That\\'s all for now!\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Offer Accepted"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Offer Accepted\"]").nth(0)).toHaveText("Offer Accepted");
  });

  await test.step(`Verify "NOT SHARED"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"NOT SHARED\"]").nth(0)).toHaveText("NOT SHARED");
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Notifications 99+"`, async () => {
    await page.locator("//A[@id='navbar-notifications-btn'][@role='button'][normalize-space() = \"Notifications 99+\"]").nth(0).click();
  });

  await test.step(`Click "Outcomes"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Outcomes\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Is Appr"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Is Appr");
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Is Approved\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Click "Muuk Product Specialist"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Muuk Product Specialist\"]").nth(0).click();
  });

  await test.step(`Hover "Muuk Product Specialist"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Muuk Product Specialist\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Approve"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Approve\"]").nth(0).click();
  });

  await test.step(`Hover "Approve Job"`, async () => {
    await page.locator("//H3[normalize-space() = \"Approve Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to approve this j…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to approve this job?\"]").nth(1).hover();
  });

  await test.step(`Click "Approve"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Approve\"]").nth(0).click();
  });

  await test.step(`Hover "Job approved successfully."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job approved successfully.\"]").nth(0).hover();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Click "Muuk Product Specialist"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Muuk Product Specialist\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Unapprove"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Unapprove\"]").nth(0).click();
  });

  await test.step(`Hover "Unapprove Job"`, async () => {
    await page.locator("//H3[normalize-space() = \"Unapprove Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to unapprove this…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to unapprove this job?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Unapprove"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Unapprove\"]").nth(0).click();
  });

  await test.step(`Hover "Job unapproved successfully."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job unapproved successfully.\"]").nth(0).hover();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Hover "Is Approved"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Is Approved\"]").nth(1).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Hover "Muuk Product Specialist"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Muuk Product Specialist\"]").nth(0).hover();
  });

  await test.step(`Hover "Unapproved"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Unapproved\"]").nth(0).hover();
  });

  await test.step(`Click "Muuk Product Specialist"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuk Product Specialist\"]/ancestor::div[contains(@class,\"tt-card\")]//button").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
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
