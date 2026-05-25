// TC: TC61996
// Experiential Learning - Add a new experience - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  H1_E2E_TEST_STUDENT,
  H2_BASICS_CT,
  INPUT_DATE,
  INPUT_SEARCH_USERS,
  INPUT_SELECT_CONTACT,
  LABEL_EMPLOYER,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_PLEASE_CONFIRM_CT,
  NAV_BACK_TO_LIST,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_DELETE,
} from '@config/selectors';

test("Experiential Learning - Add a new experience - Student - TC61996", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]").nth(0).click();
  });

  await test.step(`Hover "Experiential Learning"`, async () => {
    await page.locator("//H2[contains(text(),\"Experiential Learning\")]").nth(0).hover();
  });

  await test.step(`Click "New Experience"`, async () => {
    await page.locator("//A[normalize-space() = \"New Experience\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Create New Experience"`, async () => {
    await page.locator("//H1[contains(text(),\"Create New Experience\")]").nth(0).hover();
  });

  await test.step(`Hover "Basics"`, async () => {
    await page.locator(H2_BASICS_CT).nth(0).hover();
  });

  await test.step(`Click "Employer*"`, async () => {
    await page.locator(LABEL_EMPLOYER).nth(0).click();
  });

  await test.step(`Fill "Albertsons"`, async () => {
    await page.locator("//INPUT[@name='CompanyName'][@placeholder='Specify employer name'][@type='text']").nth(0).fill("Albertsons");
  });

  await test.step(`Click "Albertsons"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Albertsons\")]").nth(0).click();
  });

  await test.step(`Click "Experiential Learning Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Experiential Learning Type*\"]").nth(0).click();
  });

  await test.step(`Select "number:1001430512364"`, async () => {
    await page.locator("//SELECT[@name='TypeId']").nth(0).selectOption("number:1001430512364");
  });

  await test.step(`Click "Supervisor"`, async () => {
    await page.locator("//H2[contains(text(),\"Supervisor\")]").nth(0).click();
  });

  await test.step(`Click "Contact*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact*\"]").nth(0).click();
  });

  await test.step(`Select "number:220048011149329"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact*\"]/following-sibling::div//select").nth(0).selectOption("number:220048011149329");
  });

  await test.step(`Hover "Fiona Alexander"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Fiona Alexander\")]").nth(0).hover();
  });

  await test.step(`Hover "Albertsons"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Albertsons\")]").nth(0).hover();
  });

  await test.step(`Hover "Customer Success Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Customer Success Manager\")]").nth(0).hover();
  });

  await test.step(`Click "Employer Supervisor Phone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Supervisor Phone*\"]").nth(0).click();
  });

  await test.step(`Fill "7546822186"`, async () => {
    await page.locator("//INPUT[@name='ContactPhone'][@placeholder='Employer Supervisor Phone'][@type='text']").nth(0).fill("7546822186");
  });

  await test.step(`Click "Contact"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact\"]").nth(2).click();
  });

  await test.step(`Fill "Brad Andrews"`, async () => {
    await page.locator(INPUT_SELECT_CONTACT).nth(0).fill("Brad Andrews");
  });

  await test.step(`Click "Brad Andrews"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Brad Andrews\")]").nth(0).click();
  });

  await test.step(`Hover "Brad Andrews"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Brad Andrews\")]").nth(0).hover();
  });

  await test.step(`Hover "Boeing"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Boeing\")]").nth(0).hover();
  });

  await test.step(`Hover "Customer Success Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Customer Success Manager\")]").nth(1).hover();
  });

  await test.step(`Click "Faculty Supervisor First Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Faculty Supervisor First Name\"]").nth(0).click();
  });

  await test.step(`Hover "Faculty Supervisor Last Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Faculty Supervisor Last Name\"]").nth(0).hover();
  });

  await test.step(`Hover "Faculty Supervisor Email"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Faculty Supervisor Email\"]").nth(0).hover();
  });

  await test.step(`Click "When"`, async () => {
    await page.locator("//H2[contains(text(),\"When\")]").nth(0).click();
  });

  await test.step(`Fill "12/01/2022"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("12/01/2022");
  });

  await test.step(`Fill "12/01/2023"`, async () => {
    await page.locator(INPUT_DATE).nth(1).fill("12/01/2023");
  });

  await test.step(`Click "Academic Term*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Academic Term*\"]").nth(0).click();
  });

  await test.step(`Select "number:190017010143208"`, async () => {
    await page.locator("//SELECT[@name='AcademicTermId']").nth(0).selectOption("number:190017010143208");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='AcademicTermId']").nth(0).click();
  });

  await test.step(`Select "number:19"`, async () => {
    await page.locator("//SELECT[@name='SchoolYearId']").nth(0).selectOption("number:19");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Save\")]").nth(1).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Albertsons"`, async () => {
    await page.locator("//H1[contains(text(),\"Albertsons\")]").nth(0).hover();
  });

  await test.step(`Hover "Fall 2022"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Fall 2022\"]").nth(0).hover();
  });

  await test.step(`Hover "Draft"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Draft\")]").nth(0).hover();
  });

  await test.step(`Click "Submit for Approval"`, async () => {
    await page.locator("//BUTTON[normalize-space()=\"Submit for Approval\"][not(contains(@class,\"ng-hide\"))]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Would you like to submit your experience"`, async () => {
    await page.locator("//DIV[contains(text(),\"Would you like to submit your experience\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Pending Initial Approval"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Pending Initial Approval\")]").nth(0).hover();
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

  await test.step(`Click "Albertsons"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Albertsons\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Pending Initial Approval"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Pending Initial Approval\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Approve"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Approve\"]").nth(0).click();
  });

  await test.step(`Hover "Please confirm to approve the experience"`, async () => {
    await page.locator("//DIV[contains(text(),\"Please confirm to approve the experience\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "In Progress"`, async () => {
    await page.locator("//SPAN[contains(text(),\"In Progress\")]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@class=\"btn btn-school\"][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Pending Final Approval"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Pending Final Approval\"]").nth(0).hover();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Approve"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Approve\"]").nth(1).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Complete"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Complete\")]").nth(0).hover();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Back to List"`, async () => {
    await page.reload();
    await page.locator(NAV_BACK_TO_LIST).nth(0).click();
  });

  await test.step(`Hover "Albertsons"`, async () => {
    await page.locator("//A[contains(text(),\"Albertsons\")]").nth(0).hover();
  });

  await test.step(`Click "Albertsons"`, async () => {
    await page.locator("//A[contains(text(),\"Albertsons\")]").nth(0).click();
  });

  await test.step(`Click "Documents and Forms"`, async () => {
    await page.locator("//A[contains(text(),\"Documents and Forms\")]").nth(0).click();
  });

  await test.step(`Click "Details"`, async () => {
    await page.locator("//A[contains(text(),\"Details\")]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Experience"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Experience\")]").nth(0).hover();
  });

  await test.step(`Click "Delete Experience"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Experience\")]").nth(0).click();
  });

});
