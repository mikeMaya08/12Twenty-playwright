// TC: TC66686
// 12TE Job Postings - Employer user creates job posting for multiple schools and pays

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_GET_RESULTS,
  BTN_OK_CONTAINS,
  CKE_DESCRIPTION,
  H2_JOB_DATES_CT,
  INPUT_DATE,
  INPUT_EMAIL_LOGIN,
  INPUT_PASSWORD_LOGIN,
  INPUT_SALARY_MAX,
  INPUT_SALARY_MIN,
  INPUT_SEARCH,
  LABEL_REVIEW_APPLICANTS,
  MODAL_PLEASE_CONFIRM_CT,
  MULTI_SELECT_VALUE,
  NAV_POST_A_JOB,
  RBTN_CONTINUE_CONT,
  SELECT_CURRENCY,
  SELECT_PAY_FORMAT,
} from '@config/selectors';

test("12TE Job Postings - Employer user creates job posting for multiple schools and pays - TC66686", async ({ page, context }) => {
  let selector = `0`;

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
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.employeruser.nosubscription@flemco.com");
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Employer Log In"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer Log In\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Job Postings"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Postings\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Job Postings"`, async () => {
    await page.locator("//H2[contains(text(),\"Job Postings\")]").nth(0).hover();
  });

  await test.step(`Click "Post a Job"`, async () => {
    await page.locator(NAV_POST_A_JOB).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Please select one or more program types."`, async () => {
    await page.locator("//H3[contains(text(),\"Please select one or more program types.\")]").nth(0).hover();
  });

  await test.step(`Click "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).click();
  });

  await test.step(`Hover "MBA, EMBA & PTMBA"`, async () => {
    await page.locator("//P[normalize-space() = \"MBA, EMBA & PTMBA\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Continue\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "e2e"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='School']").nth(0).fill("e2e");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Business"`, async () => {
    await page.locator("//DIV[contains(text(),\"E2E Tests Business\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni from non-12twenty sch…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Students & Alumni from non-12twenty schools\"]").nth(0).click();
  });

  await test.step(`Hover "Selected Schools"`, async () => {
    await page.locator("//H3[contains(text(),\"Selected Schools\")]").nth(0).hover();
  });

  await test.step(`Hover "Items: 2"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Items: 2\"]").nth(0).hover();
  });

  await test.step(`Hover "Students & Alumni from non-12twenty sch…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Students & Alumni from non-12twenty schools\"]").nth(1).hover();
  });

  await test.step(`Hover "E2E Tests Business"`, async () => {
    await page.locator("//DIV[contains(text(),\"E2E Tests Business\")]").nth(1).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Continue\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Job Title *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Job Title *\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuk Multiple Schools"`, async () => {
    await page.locator("//INPUT[@name='JobTitle'][@type='text'][@placeholder='Job Title']").nth(0).fill("Muuk Multiple Schools");
  });

  await test.step(`Click "Employer *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer *\"]").nth(0).click();
  });

  await test.step(`Hover "Employer"`, async () => {
    await page.locator("//INPUT[@name='CompanyName'][@placeholder='Employer'][@type='text']").nth(0).hover();
  });

  await test.step(`Hover "Type of Job *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type of Job *\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@name='CoreJobTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "Industries *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries *\"]").nth(0).hover();
  });

  await test.step(`Click "-- Please Select Industries --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Industries --\"]").nth(0).click();
  });

  await test.step(`Fill "Technology"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Technology");
  });

  await test.step(`Click "Industries *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industries *\"]//following::INPUT[@type='checkbox'][@name='multiselect']").nth(0).click();
  });

  await test.step(`Click "Functions *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Functions *\"]").nth(0).click();
  });

  await test.step(`Click "-- Please Select Functions --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select Functions --\"]").nth(0).click();
  });

  await test.step(`Click "Functions *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Functions *\"]//following::INPUT[@type=\"checkbox\"][@name=\"multiselect\"]").nth(0).click();
  });

  await test.step(`Click "Location Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Location Type *\"]").nth(0).click();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@name='LocationTypeId']").nth(0).selectOption("number:3");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Salary Range\"]").nth(0).click();
  });

  await test.step(`Fill "2000"`, async () => {
    await page.locator(INPUT_SALARY_MIN).nth(0).fill("2000");
  });

  await test.step(`Fill "40000"`, async () => {
    await page.locator(INPUT_SALARY_MAX).nth(0).fill("40000");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator(SELECT_CURRENCY).nth(0).selectOption("number:1");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator(SELECT_PAY_FORMAT).nth(0).selectOption("number:3");
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Automated Test"`, async () => {
    await page.keyboard.type("Automated Test");
    await page.locator("//H2[normalize-space() = \"Attachments You will need to re-upload your attachments.\"]").nth(0).click();
  });

  await test.step(`Hover "Drop files to attach, or browse"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Drop files to attach, or browse\"]").nth(7).hover();
  });

  await test.step(`Hover "Application Document Requirements Appli…"`, async () => {
    await page.locator("//H2[normalize-space() = \"Application Document Requirements Applicants will always be required to submit a resume.\"]").nth(0).hover();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Apply via e"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Apply via e\")]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='ApplicationEmailAddress'][@placeholder='Email Address']").nth(0).fill("test@gmail.com");
  });

  await test.step(`Click "Job Dates"`, async () => {
    await page.locator(H2_JOB_DATES_CT).nth(0).click();
  });

  await test.step(`Click "How do you plan on reviewing your appli…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"How do you plan on reviewing your applicants?*\"]").nth(0).click();
  });

  await test.step(`Click "I will review applicants as they come i…"`, async () => {
    await page.locator(LABEL_REVIEW_APPLICANTS).nth(0).click();
  });

  await test.step(`Hover "Anticipated Job Start Date"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Anticipated Job Start Date\")]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(36).click();
  });

  await test.step(`Hover "Target Candidat"`, async () => {
    await page.locator("//H2[contains(text(),\"Target Candidat\")]").nth(0).hover();
  });

  await test.step(`Hover "Additional Candidate Requirements"`, async () => {
    await page.locator("//label[normalize-space()=\"Additional Candidate Requirements\"]").nth(0).hover();
  });

  await test.step(`Fill "1st year MBA"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='TargetCohort'][@placeholder='Additional Candidate Requirements']").nth(0).fill("1st year MBA");
  });

  await test.step(`Click "Years of Experience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Years of Experience\"]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "1 to 2 years"`, async () => {
    await page.locator("//input[@type=\"checkbox\"]//ancestor::label[contains(text(),\"1 to 2 years\")]").nth(0).click();
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click "All Work Authorizations Accepted"`, async () => {
    await page.locator("//input[@type=\"checkbox\"]//ancestor::label[contains(text(),\"All Work Authorizations Accepted\")]").nth(0).click();
  });

  await test.step(`Hover "Candidate Population*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Population*\"]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Students & Alumni\"]").nth(0).click();
  });

  await test.step(`Click "Primary Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Contact\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Title"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Title\")]").nth(1).hover();
  });

  await test.step(`Hover "Email Address *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email Address *\"]").nth(0).hover();
  });

  await test.step(`Hover "Phone Number *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Phone Number *\"]").nth(0).hover();
  });

  await test.step(`Hover "Address *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Address *\"]").nth(0).hover();
  });

  await test.step(`Hover "Country *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Country *\"]").nth(0).hover();
  });

  await test.step(`Hover "City *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"City *\"]").nth(0).hover();
  });

  await test.step(`Hover "Zip Code *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Zip Code *\"]").nth(0).hover();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Back\")]").nth(1).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(1).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Add to Cart"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Add to Cart\"]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "12twenty Job Posting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"12twenty Job Posting\")]").nth(0).hover();
  });

  await test.step(`Hover "Muuk Multiple Schools | Remote/Telecommu"`, async () => {
    await page.locator("//A[contains(text(),\"Muuk Multiple Schools | Remote/Telecommu\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(4).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(7).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(10).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(13).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(16).hover();
  });

  await test.step(`Hover "Promo Code"`, async () => {
    await page.locator("//H3[contains(text(),\"Promo Code\")]").nth(0).hover();
  });

  await test.step(`Hover "Payment"`, async () => {
    await page.locator("//H3[contains(text(),\"Payment\")]").nth(0).hover();
  });

  await test.step(`Click "PAY NOW"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"PAY NOW\"]").nth(0).click();
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.locator("//INPUT[@name='cardNumber'][@type='text'][@placeholder='1234 1234 1234 1234']").nth(0).fill("4242 4242 4242 4242");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.locator("//INPUT[@name='cardExpiry'][@type='text'][@placeholder='MM / YY']").nth(0).fill("03 / 30");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.locator("//INPUT[@name='cardCvc'][@type='text'][@placeholder='CVC']").nth(0).fill("789");
  });

  await test.step(`Verify visible "Country or region"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Country or region\")]").nth(0)).toBeVisible();
  });

  await test.step(`Fill "Xhang San"`, async () => {
    await page.locator("//INPUT[@name='billingName'][@type='text'][@placeholder='Full name on card']").nth(0).fill("Xhang San");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.locator("//SELECT[@name='billingCountry']").nth(0).selectOption("US");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.locator("//INPUT[@name='billingPostalCode'][@type='text'][@placeholder='ZIP']").nth(0).fill("94523");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DIV").nth(300).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(4000);
  });

  await test.step(`Click "Orders"`, async () => {
    await page.locator("//A[normalize-space() = \"Orders\"]").nth(0).click();
  });

  await test.step(`Click "Paid"`, async () => {
    await page.locator("//A[contains(text(),\"Paid\")]").nth(0).click();
  });

  await test.step(`Click "Job Postings"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Postings\"]").nth(0).click();
  });

  await test.step(`Click "Muuk Multiple Schools"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuk Multiple Schools\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Muuk Multiple Schools"`, async () => {
    await page.locator("//H1[normalize-space() = \"Muuk Multiple Schools\"]").nth(0).hover();
  });

  await test.step(`Hover "Flemco"`, async () => {
    await page.locator("//dd[normalize-space()=\"Flemco\"]").nth(0).hover();
  });

  await test.step(`Hover "Application Open"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Application Open\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "Deactivate"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Deactivate\")]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "By deactivating this posting, the applic"`, async () => {
    await page.locator("//DIV[contains(text(),\"By deactivating this posting, the applic\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Job Postings"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Postings\"]").nth(0).click();
    await page.waitForTimeout(20000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[normalize-space() = \"Muuk Multiple Schools\"]//ancestor::tr//span[contains(text(),\"Application Open\")]";
  });

  await test.step(`Fill "Muuk Multiple Schools"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Job Title']").nth(0).fill("Muuk Multiple Schools");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[contains(@class,\"today\")]").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Muuk Multiple Schools"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Muuk Multiple Schools\"]").nth(0)).toHaveText("Muuk Multiple Schools");
  });

  await test.step(`Verify "Inactive"`, async () => {
    await expect(page.locator("//A[normalize-space() = \"Muuk Multiple Schools\"]//ancestor::tr//span[contains(text(),\"Inactive\")]").nth(0)).toHaveText("Inactive");
  });

});
