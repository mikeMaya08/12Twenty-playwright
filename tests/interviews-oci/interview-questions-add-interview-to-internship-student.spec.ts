// TC: TC60691
// Interview Questions - Add interview to Internship - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_SEARCH,
  CONFIRM_PERM_DELETE,
  H1_E2E_TEST_STUDENT,
  INPUT_SEARCH_USERS,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_OOPS_CT,
  MODAL_SUCCESS_CT,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_OK_MODAL_CONT,
  SELECT_JOB_INDUSTRY,
} from '@config/selectors';

test("Interview Questions - Add interview to Internship - Student - TC60691", async ({ page, context }) => {
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

  await test.step(`Click "Interview Questions"`, async () => {
    await page.locator("//A[normalize-space() = \"Interview Questions\"]").nth(0).click();
  });

  await test.step(`Hover "Interview Questions"`, async () => {
    await page.locator("//H1[contains(text(),\"Interview Questions\")]").nth(0).hover();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//H3[contains(text(),\"Internship\")]").nth(0).hover();
  });

  await test.step(`Click "Add Interview"`, async () => {
    await page.locator("//H3[contains(text(),\"Internship\")]//following::a[normalize-space() = \"Add Interview\"]").nth(0).click();
  });

  await test.step(`Hover "Add an Interview - Interview (In Proces"`, async () => {
    await page.locator("//H1[contains(text(),\"Add an Interview - Interview (In Proces\")]").nth(0).hover();
  });

  await test.step(`Fill "Sysco"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.CompanyName'][@name='Job.CompanyName'][@placeholder='Employer Name']").nth(0).fill("Sysco");
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.locator("//DIV[contains(text(),\"Sysco\")]").nth(0).click();
  });

  await test.step(`Fill "Manager"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Job.JobTitle'][@name='Job.JobTitle'][@placeholder='Job Title']").nth(0).fill("Manager");
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).click();
  });

  await test.step(`Select "149999414151537"`, async () => {
    await page.locator(SELECT_JOB_INDUSTRY).nth(0).selectOption("149999414151537");
  });

  await test.step(`Select "100001010430350"`, async () => {
    await page.locator("//SELECT[@name='Job.JobFunctionId'][@id='Job.JobFunctionId']").nth(0).selectOption("100001010430350");
  });

  await test.step(`Select "5"`, async () => {
    await page.locator("//SELECT[@id='Length.Id'][@name='Length.Id']").nth(0).selectOption("5");
  });

  await test.step(`Select "6"`, async () => {
    await page.locator("//SELECT[@id='Format.Id'][@name='Format.Id']").nth(0).selectOption("6");
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@id='Round.Id'][@name='Round.Id']").nth(0).selectOption("1");
  });

  await test.step(`Hover "Questions"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Questions\")]").nth(0).hover();
  });

  await test.step(`Click "Add a question *"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='addQuestion'][normalize-space() = \"Add a question *\"]").nth(0).click();
  });

  await test.step(`Hover "Add interview question:"`, async () => {
    await page.locator("//H3[contains(text(),\"Add interview question:\")]").nth(0).hover();
  });

  await test.step(`Hover "Add interview question:"`, async () => {
    await page.locator("//P[normalize-space() = \"Add interview question:\"]").nth(0).hover();
  });

  await test.step(`Hover "Add another question"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Add another question\"]").nth(0).hover();
  });

  await test.step(`Fill "Why do you want to work for our company"`, async () => {
    await page.locator("//TEXTAREA[@id='questionText'][@name='questionText']").nth(0).fill("Why do you want to work for our company");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Save\")]").nth(0).click();
  });

  await test.step(`Hover "Why do you want to work for our company"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Why do you want to work for our company\")]").nth(0).hover();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Edit\")]").nth(0).hover();
  });

  await test.step(`Hover "Remove"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Remove\")]").nth(0).hover();
  });

  await test.step(`Hover "Insight Describe any other insight from…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Insight Describe any other insight from this interview *\"]").nth(0).hover();
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//TEXTAREA[@id='Insight'][@name='Insight']").nth(0).fill("The candidate appeared nervous at the beginning, but gradually became more confident.");
  });

  await test.step(`Fill "10/18/2024"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='Date'][@name='Date'][@placeholder='MM/DD/YYYY']").nth(0).fill("10/18/2024");
  });

  await test.step(`Select "100011010338748"`, async () => {
    await page.locator("//SELECT[@name='Job.CustomJobSourceId'][@id='Job.CustomJobSourceId']").nth(0).selectOption("100011010338748");
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator("//BUTTON[@id='submit'][@type='button'][contains(text(),\"Add\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "Successfully saved interview 'Manager' a"`, async () => {
    await page.locator("//DIV[contains(text(),\"Successfully saved interview 'Manager' a\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
  });

  await test.step(`Hover "Sysco"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Manager\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview (In Process)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Interview (In Process)\")]").nth(0).hover();
  });

  await test.step(`Hover "Interview - First Round"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Interview - First Round\")]").nth(0).hover();
  });

  await test.step(`Hover "Sysco"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]/following::*[@start=\"interview.Date\"]").nth(0).hover();
  });

  await test.step(`Click "View Details"`, async () => {
    await page.locator("//A[@role='button'][@title='Expand'][contains(text(),\"View Details\")]").nth(0).click();
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]/following::dt[contains(text(),\"Industry\")]").nth(0).click();
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]/following::dd[contains(text(),\"Accounting\")]").nth(0).click();
  });

  await test.step(`Hover "Additional Interview"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::a[normalize-space()=\"Additional Interview\"]").nth(0).hover();
  });

  await test.step(`Hover "Offered Job"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::a[normalize-space()=\"Offered Job\"]").nth(0).hover();
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Not Offered Job"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::a[normalize-space() = \"Not Offered Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::a[normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::a[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Interview"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Interview\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Interview"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Interview\")]").nth(0).click();
  });

  await test.step(`Hover "Oops!"`, async () => {
    await page.locator(MODAL_OOPS_CT).nth(0).hover();
  });

  await test.step(`Hover "An interview with associated interview q"`, async () => {
    await page.locator("//DIV[contains(text(),\"An interview with associated interview q\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
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

  await test.step(`Click "Interview Questions"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Interview Questions\")]").nth(0).click();
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]/following::a[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Why do you want to work for our company"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Why do you want to work for our company\")]//following::A[contains(text(),\"Remove\")]").nth(0).click();
  });

  await test.step(`Hover "Remove Question"`, async () => {
    await page.locator("//H3[contains(text(),\"Remove Question\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you wish to remove this que"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you wish to remove this que\")]").nth(0).hover();
  });

  await test.step(`Click "Remove"`, async () => {
    await page.locator("//div[@class=\"modal-content\"]//A[contains(text(),\"Remove\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Why do you want to work for our company\")]";
  });

  await test.step(`Click "Update"`, async () => {
    await page.locator("//BUTTON[@id='submit'][@type='button'][contains(text(),\"Update\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "Successfully saved interview questions a"`, async () => {
    await page.locator("//DIV[contains(text(),\"Successfully saved interview questions a\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Sysco"`, async () => {
    await page.reload();
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//H4[contains(text(),\"Sysco\")]//following::a[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Interview"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Interview\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Interview"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Interview\")]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Successfully deleted interview 'Manager'"`, async () => {
    await page.locator("//DIV[contains(text(),\"Successfully deleted interview 'Manager'\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//H4[contains(text(),\"Sysco\")]";
  });

});
