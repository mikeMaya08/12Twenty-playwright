// TC: TC_A78122
// Employers - Judge Directory - Students add Judge via outcome and admin approves

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_DELETE_ENTRY,
  BTN_OPTIONS_LOWER,
  BTN_OPTIONS_UPPER,
  BTN_RESET_FILTERS,
  BTN_SEARCH,
  DATEPICKER_NEXT_DAY2,
  DIV_USA,
  INPUT_SEARCH_USERS,
  LABEL_NO,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT,
  NAV_CANCEL,
  NAV_EMPLOYERS,
  NAV_HOME,
  NAV_PROFILE,
  NAV_STUDENTS_ALUMNI,
  RBTN_VIEW_AUDIT,
  SPAN_CLOSE_X,
  TAB_HOME,
} from '@config/selectors';

test("Employers - Judge Directory - Students add Judge via outcome and admin approves - TC_A78122", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.lawStudent, {timeout: 90000});
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
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Post JD"`, async () => {
    await page.locator("//h4[normalize-space()=\"Post JD\"]/following::A[normalize-space() = \"Add Experience or Status\"]").nth(0).click();
  });

  await test.step(`Hover "Report Status"`, async () => {
    await page.locator("//H3[normalize-space() = \"Report Status\"]").nth(0).hover();
  });

  await test.step(`Hover "Post JD"`, async () => {
    await page.locator("//P[normalize-space() = \"Post JD\"]").nth(0).hover();
  });

  await test.step(`Hover "Please tell us about your plans"`, async () => {
    await page.locator("//P[normalize-space() = \"Please tell us about your plans\"]").nth(0).hover();
  });

  await test.step(`Click "Judicial Clerkship"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Judicial Clerkship\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Court *\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Test Judge"`, async () => {
    await page.locator("//INPUT[@id='Fields_CompanyName'][@name='Fields.CompanyName'][@placeholder='Judge Name'][@type='text']").nth(0).fill("Muuktest Test Judge");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Court *\"]").nth(0).click();
  });

  await test.step(`Hover "Detailed Employment Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Detailed Employment Type\"]").nth(0).hover();
  });

  await test.step(`Fill "MT Test Court QA"`, async () => {
    await page.locator("//INPUT[@id='Fields_CourtName'][@name='Fields.CourtName'][@placeholder='Court Name'][@type='text']").nth(0).fill("MT Test Court QA");
  });

  await test.step(`Select "15002603121613"`, async () => {
    await page.locator("//SELECT[@id='Fields_EmploymentTypeId'][@name='Fields.EmploymentTypeId']").nth(0).selectOption("15002603121613");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@id='Fields_AcceptedDate'][@name='Fields.AcceptedDate'][@placeholder='MM/DD/YYYY'][@type='text']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(33).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Start Date *\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@id='Fields_StartDate'][@name='Fields.StartDate'][@placeholder='MM/DD/YYYY'][@type='text']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(0).click();
  });

  await test.step(`Hover "End Date"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"End Date\"]").nth(0).hover();
  });

  await test.step(`Fill "12/12/2026"`, async () => {
    await page.locator("//INPUT[@id='Fields_EndDate'][@name='Fields.EndDate'][@placeholder='MM/DD/YYYY'][@type='text']").nth(0).fill("12/12/2026");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Did you receive your job offer before you received your bar results? *\"]").nth(0).click();
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@id='Fields_DidReceiveOfferBeforeBarId'][@name='Fields.DidReceiveOfferBeforeBarId']").nth(0).selectOption("1");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Estimated Total Compensation *\"]").nth(0).hover();
  });

  await test.step(`Fill "2000"`, async () => {
    await page.locator("//INPUT[@id='Fields_TotalCompensation'][@name='Fields.TotalCompensation'][@type='text']").nth(0).fill("2000");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Stipend *\"]").nth(0).hover();
  });

  await test.step(`Fill "0"`, async () => {
    await page.locator("//INPUT[@id='Fields_StipendAmount'][@name='Fields.StipendAmount'][@type='text']").nth(0).fill("0");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Job Source *\"]").nth(0).hover();
  });

  await test.step(`Select "100011010338735"`, async () => {
    await page.locator("//SELECT[@name='Fields.CustomJobSourceId'][@id='Fields.CustomJobSourceId']").nth(0).selectOption("100011010338735");
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='Fields.IsFullTimeTrue'][@name='Fields.IsFullTime'][@type='radio']").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Are you still seeking another job?\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='Fields.IsStillLookingFalse'][@name='Fields.IsStillLooking'][@type='radio']").nth(0).click();
  });

  await test.step(`Select "4"`, async () => {
    await page.locator("//SELECT[@id='Fields_LawJobFundingSourceId'][@name='Fields.LawJobFundingSourceId']").nth(0).selectOption("4");
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='Fields.IsJobFromSummerInternshipFalse'][@name='Fields.IsJobFromSummerInternship'][@type='radio']").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Employment Requirement *\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@id='Fields.IsJobFromSummerInternshipFalse'][@name='Fields.IsJobFromSummerInternship'][@type='radio']").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Employment Requirement *\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='Fields_EmploymentRequirementId'][@name='Fields.EmploymentRequirementId']").nth(0).click();
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@id='Fields_EmploymentRequirementId'][@name='Fields.EmploymentRequirementId']").nth(0).selectOption("1");
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@name='Fields.LocationTypeId'][@id='Fields.LocationTypeId']").nth(0).selectOption("1");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Job Country *\"]").nth(0).hover();
  });

  await test.step(`Fill "United States (USA)"`, async () => {
    await page.locator("//INPUT[@id='Fields_Country'][@name='Fields.Country'][@placeholder='Country'][@type='text']").nth(0).fill("United States (USA)");
  });

  await test.step(`Click "United States (USA)"`, async () => {
    await page.locator(DIV_USA).nth(0).click();
  });

  await test.step(`Fill "San Diego - CA"`, async () => {
    await page.locator("//INPUT[@id='Fields_CityName'][@name='Fields.CityName'][@placeholder='City'][@type='text']").nth(0).fill("San Diego - CA");
  });

  await test.step(`Click "San Diego - CA"`, async () => {
    await page.locator("//DIV[normalize-space() = \"San Diego - CA\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Address 1 *\"]").nth(0).hover();
  });

  await test.step(`Fill "123 Test"`, async () => {
    await page.locator("//INPUT[@id='Fields_Address1'][@name='Fields.Address1'][@type='text']").nth(0).fill("123 Test");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Postal Code *\"]").nth(0).hover();
  });

  await test.step(`Fill "92101"`, async () => {
    await page.locator("//INPUT[@id='Fields_PostalCode'][@name='Fields.PostalCode'][@type='text']").nth(0).fill("92101");
  });

  await test.step(`Fill "test123.com"`, async () => {
    await page.locator("//INPUT[@id='Fields_EmployerWebsiteUrl'][@name='Fields.EmployerWebsiteUrl'][@type='text']").nth(0).fill("test123.com");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(NAV_CANCEL).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//*[@type=\"button\"][@value=\"Add\"]").nth(0).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Hover "MT Test Court QA"`, async () => {
    await page.locator("//div[normalize-space()=\"MT Test Court QA\"]/ancestor::div[1]//A[normalize-space() = \"Judicial Clerkship\"]").nth(0).hover();
  });

  await test.step(`Hover "Judicial Clerkship"`, async () => {
    await page.locator("//A[normalize-space() = \"Judicial Clerkship\"]/ancestor::div[2]//SPAN[normalize-space() = \"Offer Accepted\"]").nth(0).hover();
  });

  await test.step(`Hover "Judicial Clerkship"`, async () => {
    await page.locator("//A[normalize-space() = \"Judicial Clerkship\"]/ancestor::div[2]//SPAN[normalize-space() = \"At Graduation\"]").nth(0).hover();
  });

  await test.step(`Hover "Judicial Clerkship"`, async () => {
    await page.locator("//A[normalize-space() = \"Judicial Clerkship\"]/ancestor::div[2]//SPAN[normalize-space() = \"NOT SHARED\"]").nth(0).hover();
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



  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e Test Admin\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@id='navbar-notifications-btn'][@role='button']").nth(0).click();
  });

  await test.step(`Click "Outcomes"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Outcomes\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator("//span[normalize-space() = \"e2e Test Student\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest Test Judge"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest Test Judge\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Test Judge"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest Test Judge\"]/ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Approve Selected (1)"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Approve Selected (1)\"]").nth(0).click();
  });

  await test.step(`Hover "Successfully approved 1 job(s)."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Successfully approved 1 job(s).\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Approval Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Approval Status\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@title=\"Remove This Filter\"]").nth(0).click();
  });

  await test.step(`Fill "Test"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Employer Name or Court']").nth(0).fill("Test");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Muuktest Test Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Test Judge\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I[@aria-label=\"Expand\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Rejected"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Rejected\"]").nth(0).hover();
  });

  await test.step(`Hover "Approved"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Approved\"]").nth(0).hover();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(0).click();
  });

  await test.step(`Click "Hires"`, async () => {
    await page.locator("//A[normalize-space() = \"Hires\"]").nth(0).click();
  });

  await test.step(`Click "Locations"`, async () => {
    await page.locator("//A[normalize-space() = \"Locations\"]").nth(0).click();
  });

  await test.step(`Hover "San Diego - CA"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"San Diego - CA\"]").nth(0).hover();
  });

  await test.step(`Hover "United States (USA)"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"United States (USA)\"]").nth(0).hover();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(1).click();
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
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Hover "Judicial Clerkship"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Judicial Clerkship\"]").nth(0).hover();
  });

  await test.step(`Hover "MT Test Court QA"`, async () => {
    await page.locator("//DIV[normalize-space() = \"MT Test Court QA\"]").nth(0).hover();
  });

  await test.step(`Click "Judicial Clerkship"`, async () => {
    await page.locator("//A[normalize-space() = \"Judicial Clerkship\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Judicial Clerkship"`, async () => {
    await page.locator("//A[normalize-space() = \"Judicial Clerkship\"]/following::A[@role='button'][@title='Edit Job'][normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Click "Judicial Clerkship"`, async () => {
    await page.locator("//A[normalize-space() = \"Judicial Clerkship\"]/following::A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
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
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
  });

});
