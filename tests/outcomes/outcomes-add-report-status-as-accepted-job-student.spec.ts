// TC: TC60125
// Outcomes - Add Report Status as Accepted Job - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_SEARCH,
  CONFIRM_PERM_DELETE,
  H1_E2E_TEST_STUDENT,
  INPUT_SEARCH_USERS,
  LABEL_NO,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  SELECT_JOB_INDUSTRY,
} from '@config/selectors';

test("Outcomes - Add Report Status as Accepted Job - Student - TC60125", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
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

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//H4[contains(text(),\"Post Graduation\")]").nth(0).hover();
  });

  await test.step(`Hover "Please tell us"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please tell us\")]").nth(0).hover();
  });

  await test.step(`Click "Report Status"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Report Status\"]").nth(0).click();
  });

  await test.step(`Click "Accepted Job"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Accepted Job\"]").nth(0).click();
  });

  await test.step(`Fill "Amazon.com"`, async () => {
    await page.locator("//input[@id=\"Job_CompanyName\"]").nth(0).fill("Amazon.com");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Amazon.com"`, async () => {
    await page.locator("//div[contains(text(),\"Amazon.com\")]").nth(0).click();
  });

  await test.step(`Fill "Manager"`, async () => {
    await page.locator("//input[@placeholder=\"Job Title\"]").nth(0).fill("Manager");
  });

  await test.step(`Select "3"`, async () => {
    await page.locator("//SELECT[@id=\"Job_NumberOfEmployeesId\"]").nth(0).selectOption("3");
  });

  await test.step(`Select "149999414151628"`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).selectOption("149999414151628");
  });

  await test.step(`Select "100001010430462"`, async () => {
    await page.locator("//SELECT[@name='Job.JobFunctionId'][@id='Job.JobFunctionId']").nth(0).selectOption("100001010430462");
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//SELECT[@name='Job.LocationTypeId'][@id='Job.LocationTypeId']").nth(0).pressSequentially("1");
  });

  await test.step(`Fill "United States (USA)"`, async () => {
    await page.locator("//INPUT[@placeholder=\"Country\"]").nth(0).fill("United States (USA)");
  });

  await test.step(`Click "United States (USA)"`, async () => {
    await page.locator("//div[contains(text(),\"United States (USA)\")]").nth(0).click();
  });

  await test.step(`Fill "New York - NY"`, async () => {
    await page.locator("//INPUT[@id='Job.CityName'][@name='Job.CityName'][@placeholder='City'][@type='text']").nth(0).fill("New York - NY");
  });

  await test.step(`Click "New York - NY"`, async () => {
    await page.locator("//div[contains(text(),\"New York - NY\")]").nth(0).click();
  });

  await test.step(`Fill "123 Main Street"`, async () => {
    await page.locator("//INPUT[@id='Job.Address1'][@name='Job.Address1'][@type='text']").nth(0).fill("123 Main Street");
  });

  await test.step(`Fill "Suite 400"`, async () => {
    await page.locator("//INPUT[@id='Job.Address2'][@name='Job.Address2'][@type='text']").nth(0).fill("Suite 400");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Offer Received Date\"]").nth(0).hover();
  });

  await test.step(`Fill "10001"`, async () => {
    await page.locator("//INPUT[@id='Job.PostalCode'][@name='Job.PostalCode'][@type='text']").nth(0).fill("10001");
  });

  await test.step(`Fill "01/01/2024"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='OfferDate'][@name='Job.OfferDate'][@placeholder='MM/DD/YYYY']").nth(0).fill("01/01/2024");
  });

  await test.step(`Fill "01/15/2024"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='AcceptedDate'][@name='Job.AcceptedDate'][@placeholder='MM/DD/YYYY']").nth(0).fill("01/15/2024");
  });

  await test.step(`Fill "02/01/2024"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='JobStartDate'][@name='Job.Salary.JobStartDate'][@placeholder='MM/DD/YYYY']").nth(0).fill("02/01/2024");
  });

  await test.step(`Click "Compensation Currency Receiving"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Compensation Currency Receiving\"]").nth(0).click();
  });

  await test.step(`Click "Primary Compensation"`, async () => {
    await page.locator("//H4[contains(text(),\"Primary Compensation\")]").nth(0).click();
  });

  await test.step(`Fill "80000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.BaseSalary'][@name='Job.Salary.BaseSalary']").nth(0).fill("80000");
  });

  await test.step(`Fill "5000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.ExpectedCommission'][@name='Job.Salary.ExpectedCommission']").nth(0).fill("5000");
  });

  await test.step(`Fill "10000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.ExpectedBonus'][@name='Job.Salary.ExpectedBonus']").nth(0).fill("10000");
  });

  await test.step(`Fill "8000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.GuaranteedBonus'][@name='Job.Salary.GuaranteedBonus']").nth(0).fill("8000");
  });

  await test.step(`Fill "10000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.OtherCompensation'][@name='Job.Salary.OtherCompensation']").nth(0).fill("10000");
  });

  await test.step(`Fill "5000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.CarriedInterestAmount'][@name='Job.Salary.CarriedInterestAmount'][@title='Interest Amount']").nth(0).fill("5000");
  });

  await test.step(`Fill "2000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.SigningBonus'][@name='Job.Salary.SigningBonus']").nth(0).fill("2000");
  });

  await test.step(`Fill "1500"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.RelocationBonus'][@name='Job.Salary.RelocationBonus']").nth(0).fill("1500");
  });

  await test.step(`Fill "1200"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.TuitionReimbursementAmount'][@name='Job.Salary.TuitionReimbursementAmount']").nth(0).fill("1200");
  });

  await test.step(`Hover "Does your compensation include health i…"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Does your compensation include health insurance?\")]").nth(0).hover();
  });

  await test.step(`Fill "20000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.StockAmount'][@name='Job.Salary.StockAmount']").nth(0).fill("20000");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Hover "Does your compensation include tuition …"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Does your compensation include tuition reimbursement\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Hover "Did you negotiate any elements of this …"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Did you negotiate any elements of this offer?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Select "100011010338755"`, async () => {
    await page.locator("//SELECT[@name='Job.CustomJobSourceId'][@id='Job.CustomJobSourceId']").nth(0).selectOption("100011010338755");
  });

  await test.step(`Hover "Is this a full-time position?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is this a full-time position?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(3).click();
  });

  await test.step(`Hover "Did this job come as a result of an int…"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Did this job come as a result of an internship you had with this employer?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(4).click();
  });

  await test.step(`Hover "Is this a freelance position?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is this a freelance position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(5).click();
  });

  await test.step(`Hover "Is this a faculty position?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is this a faculty position?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(6).click();
  });

  await test.step(`Hover "Is this a temporary/contract job?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is this a temporary/contract job?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(8).click();
  });

  await test.step(`Hover "Is this a post-graduation internship?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is this a post-graduation internship?\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(9).click();
  });

  await test.step(`Hover "Is the employer a startup?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is the employer a startup?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(10).click();
  });

  await test.step(`Hover "Funding Raised"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Funding Raised\")]").nth(0).hover();
  });

  await test.step(`Select "2"`, async () => {
    await page.locator("//SELECT[@id='Job.FundingRaisedId'][@name='Job.FundingRaisedId']").nth(0).selectOption("2");
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
    await page.locator("//A[@type='button'][contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='submit'][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "Did you negotiate any elements of your c"`, async () => {
    await page.locator("//H3[contains(text(),\"Did you negotiate any elements of your c\")]").nth(0).hover();
  });

  await test.step(`Hover "Base Salary"`, async () => {
    await page.locator("//LABEL[@id='salaryRowLabel'][contains(text(),\"Base Salary\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(11).click();
  });

  await test.step(`Hover "Expected Bonus"`, async () => {
    await page.locator("//LABEL[@id='expectedBonusRowLabel'][contains(text(),\"Expected Bonus\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(12).click();
  });

  await test.step(`Hover "Guaranteed Bonus"`, async () => {
    await page.locator("//LABEL[@id='negotiatedGuaranteedBonusRowLabel'][contains(text(),\"Guaranteed Bonus\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(13).click();
  });

  await test.step(`Hover "Other Guaranteed Compensation"`, async () => {
    await page.locator("//LABEL[@id='otherGuaranteedCompensationRowLabel'][contains(text(),\"Other Guaranteed Compensation\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(14).click();
  });

  await test.step(`Hover "Carried Interest"`, async () => {
    await page.locator("//LABEL[@id='carriedInterestRowLabel'][contains(text(),\"Carried Interest\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(15).click();
  });

  await test.step(`Hover "Signing Bonus"`, async () => {
    await page.locator("//LABEL[@id='signingBonusRowLabel'][contains(text(),\"Signing Bonus\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(16).click();
    await page.waitForTimeout(20000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[@id='relocationBonusRowLabel']").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(17).click();
  });

  await test.step(`Hover "Tuition Reimbursement"`, async () => {
    await page.locator("//LABEL[@id='tuitionReimbursementAmountRowLabel'][contains(text(),\"Tuition Reimbursement\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(18).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[@id='stockAmountRowLabel']").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[@id='stockAmountRowLabel']//following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//A[contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Step 1`, async () => {
    await expect(page.locator("//*[contains(text(),\"You have successfully saved your job entry for 'Manager' at 'Amazon.com'\")]").nth(0)).toContainText("You have successfully saved your job entry for \\'Manager\\' at \\'Amazon.com\\'");
  });

  await test.step(`Click "No thanks. That's all for now!"`, async () => {
    await page.locator("//A[@role='button'][@id='modalDialogConfirm'][contains(text(),\"No thanks. That's all for now!\")]").nth(0).click();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Manager\")]").nth(0).hover();
  });

  await test.step(`Hover "Amazon.com"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Amazon.com\"]").nth(0).hover();
  });

  await test.step(`Hover "New York - NY"`, async () => {
    await page.locator("//SPAN[contains(text(),\"New York - NY\")]").nth(0).hover();
  });

  await test.step(`Hover "Offer Accepted"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Offer Accepted\")]").nth(0).hover();
    await page.waitForTimeout(2000);
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
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e Test Student");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(H1_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//H4[contains(text(),\"Post Graduation\")]").nth(0).hover();
  });

  await test.step(`Hover "Amazon.com"`, async () => {
    await page.locator("//A[contains(text(),\"Manager\")]/following::DIV[normalize-space() = \"Amazon.com\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//A[contains(text(),\"Manager\")]/following::SPAN[contains(text(),\"Offer Accepted\")]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//A[contains(text(),\"Manager\")]/following::SPAN[contains(text(),\"NOT SHARED\")]").nth(0).hover();
  });

  await test.step(`Click "Manager"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Manager\")]").nth(0).click();
  });

  await test.step(`Hover "Marketing - Product/Brand Management"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Marketing - Product/Brand Management\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"modal-\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space()=\"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Approve\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Move Outcome\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Unaccept\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Add Outcome Note\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Exclude from Reporting\"]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"View Outcome Audit Log\"]").nth(0).hover();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Is Approved\"]//following-sibling::dd[contains(@class,\"ng-scope\")]").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Approve\"]").nth(0).click();
  });

  await test.step(`Hover "Approve Job"`, async () => {
    await page.locator("//H3[contains(text(),\"Approve Job\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to approve this jo"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to approve this jo\")]").nth(0).hover();
  });

  await test.step(`Click "Approve"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Approve\")]").nth(0).click();
  });

  await test.step(`Click "Manager"`, async () => {
    await page.reload();
    await page.locator("//A[@role='button'][contains(text(),\"Manager\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"modal-\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space()=\"Unapprove\"]").nth(0).hover();
  });

  await test.step(`Click "Manager"`, async () => {
    await page.locator("//div[contains(@class,\"modal\")]//*[normalize-space()=\"Manager\"]/following::a[normalize-space() = \"Delete\"]").nth(0).click();
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
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//A[@role=\"button\"][contains(text(),\"Manager\")]";
  });

  await test.step(`Set selector`, async () => {
    selector = " //DIV[normalize-space() = \"Amazon.com\"]";
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForLoadState('load');
  });

});
