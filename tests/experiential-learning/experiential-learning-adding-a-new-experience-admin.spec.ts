// TC: TC60700
// Experiential Learning - Adding a new experience - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  CONFIRM_PERM_DELETE,
  H2_BASICS_CT,
  INPUT_DATE,
  INPUT_SEARCH,
  INPUT_SELECT_CONTACT,
  LINK_E2E_TEST_STUDENT_CT,
  MODAL_PLEASE_CONFIRM_CT,
  NAV_BACK_TO_LIST,
  NAV_EDIT,
  NAV_HOME,
  RBTN_DELETE,
  RBTN_VIEW_AUDIT,
} from '@config/selectors';

test("Experiential Learning - Adding a new experience - Admin - TC60700", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsAdmin(page);
  });



  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]").nth(0).click();
  });

  await test.step(`Hover "Experiential Learning"`, async () => {
    await page.locator("//H2[contains(text(),\"Experiential Learning\")]").nth(0).hover();
  });

  await test.step(`Click "New Experience"`, async () => {
    await page.locator("//A[normalize-space() = \"New Experience\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Create New Experience"`, async () => {
    await page.locator("//H1[contains(text(),\"Create New Experience\")]").nth(0).hover();
  });

  await test.step(`Hover "Basics"`, async () => {
    await page.locator(H2_BASICS_CT).nth(0).hover();
  });

  await test.step(`Fill "e2e Test Student"`, async () => {
    await page.locator("//INPUT[@name='StudentName'][@placeholder='Student'][@type='text']").nth(0).fill("e2e Test Student");
  });

  await test.step(`Click "e2e Test Student (e2e.student.fullacces…"`, async () => {
    await page.locator("//div[normalize-space()=\"e2e Test Student (e2e.student.fullaccess@campuswide.com)\"]").nth(0).click();
  });

  await test.step(`Fill "Archer Daniels Midland"`, async () => {
    await page.locator("//INPUT[@name='CompanyName'][@placeholder='Specify employer name'][@type='text']").nth(0).fill("Archer Daniels Midland");
  });

  await test.step(`Click "Archer Daniels Midland"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Archer Daniels Midland\")]").nth(0).click();
  });

  await test.step(`Hover "Experiential Learning Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Experiential Learning Type*\"]").nth(0).hover();
  });

  await test.step(`Select "number:1001430512365"`, async () => {
    await page.locator("//SELECT[@name='TypeId']").nth(0).selectOption("number:1001430512365");
  });

  await test.step(`Hover "Street Address*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Street Address*\"]").nth(0).hover();
  });

  await test.step(`Fill "Chiromo lane"`, async () => {
    await page.locator("//INPUT[@name='Address1'][@placeholder='Address'][@type='text']").nth(0).fill("Chiromo lane");
  });

  await test.step(`Click "Country*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Country*\"]//following::button").nth(0).click();
  });

  await test.step(`Fill "Kenya"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Kenya");
  });

  await test.step(`Click "Kenya"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Kenya\"]").nth(0).click();
  });

  await test.step(`Fill "Nairobi - Kenya"`, async () => {
    await page.locator("//INPUT[@name='CityName'][@placeholder='City'][@type='text']").nth(0).fill("Nairobi - Kenya");
  });

  await test.step(`Click "Nairobi - Kenya"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Nairobi - Kenya\"]").nth(2).click();
  });

  await test.step(`Hover "Supervisor"`, async () => {
    await page.locator("//H2[contains(text(),\"Supervisor\")]").nth(0).hover();
  });

  await test.step(`Hover "Contact*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact*\"]").nth(0).hover();
  });

  await test.step(`Click "Contact*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact*\"]/following-sibling::div//select").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact\"]").nth(2).hover();
  });

  await test.step(`Fill "6453643654"`, async () => {
    await page.locator("//INPUT[@name='ContactPhone'][@placeholder='Employer Supervisor Phone'][@type='text']").nth(0).fill("6453643654");
  });

  await test.step(`Fill "Adam Elliott"`, async () => {
    await page.locator(INPUT_SELECT_CONTACT).nth(0).fill("Adam Elliott");
  });

  await test.step(`Click "Adam Elliott - McKesson - Recruiter"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Adam Elliott - McKesson - Recruiter\"]").nth(0).click();
  });

  await test.step(`Hover "Adam Elliott"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Adam Elliott\")]").nth(0).hover();
  });

  await test.step(`Hover "McKesson"`, async () => {
    await page.locator("//SPAN[contains(text(),\"McKesson\")]").nth(0).hover();
  });

  await test.step(`Hover "Recruiter"`, async () => {
    await page.locator("//*[contains(text(),\"Recruiter\")]").nth(1).hover();
  });

  await test.step(`Fill "10/07/2022"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("10/07/2022");
  });

  await test.step(`Fill "10/15/2024"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(), \"End Date\")]/following::input").nth(0).fill("10/15/2024");
  });

  await test.step(`Click "Academic Term*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Academic Term*\"]").nth(0).click();
  });

  await test.step(`Select "number:190017010143207"`, async () => {
    await page.locator("//SELECT[@name='AcademicTermId']").nth(0).selectOption("number:190017010143207");
  });

  await test.step(`Hover "Class Year*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Class Year*\"]").nth(0).hover();
  });

  await test.step(`Select "number:21"`, async () => {
    await page.locator("//SELECT[@name='SchoolYearId']").nth(0).selectOption("number:21");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Save\")]").nth(1).click();
  });

  await test.step(`Hover "Archer Daniels"`, async () => {
    await page.locator("//H1[contains(text(),\"Archer Daniels\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover "Summer 2022"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Summer 2022\"]").nth(0).hover();
  });

  await test.step(`Click "Back to List"`, async () => {
    await page.locator(NAV_BACK_TO_LIST).nth(0).click();
  });

  await test.step(`Hover "10/07/2022"`, async () => {
    await page.locator("//TT-DATE-TIME-DISPLAY[contains(text(),\"10/07/2022\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).hover();
  });

  await test.step(`Hover "Internship (No Credit)"`, async () => {
    await page.locator("//TD[contains(text(),\"Internship (No Credit)\")]").nth(0).hover();
  });

  await test.step(`Hover "Summer 2022"`, async () => {
    await page.locator("//TD[contains(text(),\"Summer 2022\")]").nth(0).hover();
  });

  await test.step(`Hover "Draft"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Draft\")]").nth(0).hover();
  });

  await test.step(`Hover "0"`, async () => {
    await page.locator("//TD[contains(text(),\"0\")]").nth(0).hover();
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

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]").nth(0).click();
  });

  await test.step(`Click "Archer Daniels Midland"`, async () => {
    await page.locator("//A[contains(text(),\"Archer Daniels Midland\")]").nth(0).click();
  });

  await test.step(`Hover "Draft"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Draft\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Archer Daniels Midland"`, async () => {
    await page.locator("//A[contains(text(),\"Archer Daniels Midland\")]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Archer Daniels Midland"`, async () => {
    await page.locator("//A[contains(text(),\"Archer Daniels Midland\")]/following::A[contains(text(),\"Email Student\")]").nth(0).hover();
  });

  await test.step(`Click "Archer Daniels Midland"`, async () => {
    await page.locator("//A[contains(text(),\"Archer Daniels Midland\")]").nth(0).click();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@class=\"btn btn-school\"][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "In Progress"`, async () => {
    await page.locator("//SPAN[contains(text(),\"In Progress\")]").nth(0).hover();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover "In Progress"`, async () => {
    await page.reload();
    await page.locator("//SPAN[contains(text(),\"In Progress\")]").nth(0).hover();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "In Progress"`, async () => {
    await page.reload();
    await page.locator("//SPAN[contains(text(),\"In Progress\")]").nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@class=\"btn btn-school\"][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "This will change the status to Complete."`, async () => {
    await page.locator("//DIV[contains(text(),\"This will change the status to Complete.\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Complete"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Complete\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Complete"`, async () => {
    await page.reload();
    await page.locator("//SPAN[contains(text(),\"Complete\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Archer Daniels"`, async () => {
    await page.locator("//H1[contains(text(),\"Archer Daniels\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Back To In Progress"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Back To In Progress\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Experience"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Experience\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Experience"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Experience\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Archer Daniels Midland\")]";
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//H1[contains(text(),\"Archer Daniels\")]";
  });

});
