// TC: TC60136
// Outcomes - Add Report Experience as Received Internship - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  CONFIRM_PERM_DELETE,
  LABEL_YES,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  SELECT_JOB_INDUSTRY,
} from '@config/selectors';

test("Outcomes - Add Report Experience as Received Internship - Student - TC60136", async ({ page, context }) => {
  let selector = `0`;

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

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//H4[contains(text(),\"Internship\")]").nth(0).hover();
  });

  await test.step(`Hover "Please tell us"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Please tell us\")]").nth(1).hover();
  });

  await test.step(`Click "Report Experience"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Report Experience\"]").nth(0).click();
  });

  await test.step(`Click "Received Internship"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Received Internship\"]").nth(0).click();
  });

  await test.step(`Hover "Internship - Offer Received"`, async () => {
    await page.locator("//H1[contains(text(),\"Internship - Offer Received\")]").nth(0).hover();
  });

  await test.step(`Fill "Google Inc."`, async () => {
    await page.locator("//INPUT[@placeholder='Employer']").nth(0).fill("Google Inc.");
  });

  await test.step(`Click "Google Inc."`, async () => {
    await page.locator("//div[contains(text(),\"Google Inc.\")]").nth(0).click();
  });

  await test.step(`Fill "Software Engineer Intern"`, async () => {
    await page.locator("//INPUT[@placeholder='Job Title']").nth(0).fill("Software Engineer Intern");
  });

  await test.step(`Select "3"`, async () => {
    await page.locator("//SELECT[@id='Job.NumberOfEmployeesId'][@name='Job.NumberOfEmployeesId']").nth(0).selectOption("3");
  });

  await test.step(`Select "149999414151628"`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).selectOption("149999414151628");
  });

  await test.step(`Select "100001010430430"`, async () => {
    await page.locator("//SELECT[@name='Job.JobFunctionId'][@id='Job.JobFunctionId']").nth(0).selectOption("100001010430430");
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@name='Job.LocationTypeId'][@id='Job.LocationTypeId']").nth(0).selectOption("1");
  });

  await test.step(`Fill "United States (USA)"`, async () => {
    await page.locator("//INPUT[@id='Job.Country'][@name='Job.Country'][@placeholder='Country'][@type='text']").nth(0).fill("United States (USA)");
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

  await test.step(`Fill "10001"`, async () => {
    await page.locator("//INPUT[@id='Job.PostalCode'][@name='Job.PostalCode'][@type='text']").nth(0).fill("10001");
  });

  await test.step(`Fill "09/15/2024"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='OfferDate'][@name='Job.OfferDate'][@placeholder='MM/DD/YYYY']").nth(0).fill("09/15/2024");
  });

  await test.step(`Click "Compensation Currency Receiving"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Compensation Currency Receiving\"]").nth(0).click();
  });

  await test.step(`Select "190017010143207"`, async () => {
    await page.locator("//SELECT[@id='Job.AcademicTermId'][@name='Job.AcademicTermId']").nth(0).selectOption("190017010143207");
  });

  await test.step(`Select "36"`, async () => {
    await page.locator("//SELECT[@id='Job.SchoolYearId'][@name='Job.SchoolYearId']").nth(0).selectOption("36");
  });

  await test.step(`Fill "5000"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.Salary.BaseSalary'][@name='Job.Salary.BaseSalary']").nth(0).fill("5000");
  });

  await test.step(`Select "100011010338756"`, async () => {
    await page.locator("//SELECT[@name='Job.CustomJobSourceId'][@id='Job.CustomJobSourceId']").nth(0).selectOption("100011010338756");
  });

  await test.step(`Hover "Is this a full-time position?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is this a full-time position?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Hover "Received course credit"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Received course credit\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Hover "Is the employer a startup?"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Is the employer a startup?\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Select "2"`, async () => {
    await page.locator("//SELECT[@id='Job.FundingRaisedId'][@name='Job.FundingRaisedId']").nth(0).selectOption("2");
  });

  await test.step(`Hover "Please provide other pertinent informat…"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Please provide other pertinent information about your job\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[@type='button'][contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//TEXTAREA[@id='Job.OptionalPertinentInformation'][@name='Job.OptionalPertinentInformation']").nth(0).fill("Internship involves hands-on coding and project management experience");
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

  await test.step(`Step 1`, async () => {
    await expect(page.locator("//*[contains(text(),\"You have successfully saved your job entry for 'Software Engineer Intern' at 'Google Inc.'\")]").nth(0)).toContainText("You have successfully saved your job entry for \\'Software Engineer Intern\\' at \\'Google Inc.\\'");
  });

  await test.step(`Click "No thanks. That's all for now!"`, async () => {
    await page.locator("//A[@role='button'][@id='modalDialogConfirm'][contains(text(),\"No thanks. That's all for now!\")]").nth(0).click();
  });

  await test.step(`Hover "Software Engineer Inter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]").nth(0).hover();
  });

  await test.step(`Hover "Google"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Google\"]").nth(0).hover();
  });

  await test.step(`Hover "New York - NY"`, async () => {
    await page.locator("//SPAN[contains(text(),\"New York - NY\")]").nth(0).hover();
  });

  await test.step(`Click "Software Engineer Inter"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]//following::A[@role='button'][@title='Edit Job'][normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]//following::A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Hover "Accept"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]//following::A[@role='button'][normalize-space() = \"Accept\"]").nth(0).hover();
  });

  await test.step(`Hover "Reject"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]//following::A[@role='button'][normalize-space() = \"Reject\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Software Engineer Inter\")]//following::A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
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
    await page.waitForTimeout(4000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//A[@role=\\'button\\'][contains(text(),\"Software Engineer Inter\")]";
  });

  await test.step(`Set selector`, async () => {
    selector = " //DIV[normalize-space() = \"Google\"]";
  });

});
