// TC: TC65130
// Target Employers - Create a contact, add a note, create a task and delete it - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  CKE_DESCRIPTION,
  CONFIRM_PERM_DELETE,
  INPUT_DATE,
  INPUT_EMAIL_CONTACT,
  INPUT_FIRSTNAME_CONTACT,
  INPUT_LASTNAME_CONTACT,
  MODAL_DELETE_NOTE_CT,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  RBTN_ADD_NOTE,
  RBTN_OK_MODAL_CONT,
  SELECT_PREFIX,
  SPAN_WALMART_CT,
} from '@config/selectors';

test("Target Employers - Create a contact, add a note, create a task and delete it - Student - TC65130", async ({ page, context }) => {
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

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Target Employers\"]").nth(0).click();
  });

  await test.step(`Click "Target Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Target Contacts\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]//ancestor::tr//A[contains(@title,\"Remove\")]";
  });

  await test.step(`Click "Mr. Test Testing (MuukTest)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]//ancestor::tr//A[contains(@title,\"Remove\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]";
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//TH[contains(text(),\"Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Phone/Email"`, async () => {
    await page.locator("//TH[contains(text(),\"Phone/Email\")]").nth(0).hover();
  });

  await test.step(`Click "Add Contact"`, async () => {
    await page.locator("//A[@id='addContact'][normalize-space() = \"Add Contact\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Contact"`, async () => {
    await page.locator("//H1[contains(text(),\"Add New Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Primary Contact"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Primary Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Employer *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Employer *\")]").nth(0).hover();
  });

  await test.step(`Fill "Walmart"`, async () => {
    await page.locator("//INPUT[@name='Company']").nth(0).fill("Walmart");
  });

  await test.step(`Click "Walmart"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Walmart\")]").nth(0).click();
  });

  await test.step(`Hover "Prefix"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Prefix\")]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator(SELECT_PREFIX).nth(0).selectOption("number:1");
  });

  await test.step(`Click "First Name*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"First Name*\")]").nth(0).click();
  });

  await test.step(`Fill "Test"`, async () => {
    await page.locator(INPUT_FIRSTNAME_CONTACT).nth(0).fill("Test");
  });

  await test.step(`Click "Last Name*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Last Name*\")]").nth(0).click();
  });

  await test.step(`Fill "Testing"`, async () => {
    await page.locator(INPUT_LASTNAME_CONTACT).nth(0).fill("Testing");
  });

  await test.step(`Click "Preferred Name"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Preferred Name\")]").nth(0).click();
  });

  await test.step(`Fill "MuukTest"`, async () => {
    await page.locator("//INPUT").nth(7).fill("MuukTest");
  });

  await test.step(`Click "Job Title"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Job Title\")]").nth(0).click();
  });

  await test.step(`Fill "Project Manager"`, async () => {
    await page.locator("//INPUT").nth(8).fill("Project Manager");
  });

  await test.step(`Click "Professional Email*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Professional Email*\")]").nth(0).click();
  });

  await test.step(`Hover "Alternate Email"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Alternate Email\")]").nth(0).hover();
  });

  await test.step(`Fill "test@gmail.com"`, async () => {
    await page.locator(INPUT_EMAIL_CONTACT).nth(0).fill("test@gmail.com");
  });

  await test.step(`Fill "test+1@gmail.com"`, async () => {
    await page.locator("//INPUT").nth(10).fill("test+1@gmail.com");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Hover "Mr. Test Testing (MuukTest)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]").nth(0).hover();
  });

  await test.step(`Hover "Walmart"`, async () => {
    await page.locator(SPAN_WALMART_CT).nth(0).hover();
  });

  await test.step(`Hover "test@gmail.com"`, async () => {
    await page.locator("//SPAN[contains(text(),\"test@gmail.com\")]").nth(0).hover();
  });

  await test.step(`Click "Add Note"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]//ancestor::tr//A[@title=\"Add a note\"][normalize-space() = \"Add Note\"]").nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator("//H1[contains(text(),\"Add Note\")]").nth(0).hover();
  });

  await test.step(`Hover "Employer: Test Testing"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer: Test Testing\"]").nth(0).hover();
  });

  await test.step(`Hover "Note *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Note *\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Type "Automated Test Case by Muuktest"`, async () => {
    await page.keyboard.type("Automated Test Case by Muuktest");
    await page.locator("//LABEL[contains(text(),\"Note Date *\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Mr. Test Testing (MuukTest)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).click();
  });

  await test.step(`Click "Notes"`, async () => {
    await page.locator("//A[contains(text(),\"Notes\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Verify "Automated Test Case by Muuktest"`, async () => {
    await page.reload();
    await expect(page.locator("//*[contains(text(),\"Automated Test Case by Muuktest\")]").nth(0)).toContainText("Automated Test Case by Muuktest");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(2).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(3).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//i[@aria-label=\"Edit note\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"Remove note\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Note"`, async () => {
    await page.locator(MODAL_DELETE_NOTE_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Note"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Note\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(20000);
    await page.reload();
    await page.waitForLoadState('load');
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//P[contains(text(),\"Automated Test Case by Muuktest\")]";
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator(RBTN_ADD_NOTE).nth(0).hover();
  });

  await test.step(`Hover "New Task"`, async () => {
    await page.locator("//A[normalize-space() = \"New Task\"]").nth(0).hover();
  });

  await test.step(`Hover "New Meeting"`, async () => {
    await page.locator("//A[normalize-space() = \"New Meeting\"]").nth(0).hover();
  });

  await test.step(`Click "New Task"`, async () => {
    await page.locator("//A[normalize-space() = \"New Task\"]").nth(0).click();
  });

  await test.step(`Hover "Add Task"`, async () => {
    await page.locator("//H1[contains(text(),\"Add Task\")]").nth(0).hover();
  });

  await test.step(`Click "Subject *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Subject *\")]").nth(0).click();
  });

  await test.step(`Fill "Muuktest"`, async () => {
    await page.locator("//INPUT[@name='Subject'][@id='subjectId']").nth(0).fill("Muuktest");
  });

  await test.step(`Click "Outreach Type"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Outreach Type\")]").nth(0).click();
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//SELECT[@id='outreach'][@name='outreach']").nth(0).pressSequentially("number:7");
  });

  await test.step(`Click "Due Date *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Due Date *\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Verify "Mr. Test Testing (MuukTest)"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Test Testing\")]").nth(0)).toHaveText("Mr. Test Testing (MuukTest)");
  });

  await test.step(`Verify "Walmart"`, async () => {
    await expect(page.locator(SPAN_WALMART_CT).nth(0)).toHaveText("Walmart");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Target Employers\"]").nth(0).click();
  });

  await test.step(`Click "Target Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Target Contacts\")]").nth(0).click();
  });

  await test.step(`Click "Mr. Test Testing (MuukTest)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).click();
  });

  await test.step(`Verify "Muuktest"`, async () => {
    await page.reload();
    await expect(page.locator("//SPAN[contains(text(),\"Muuktest\")]").nth(0)).toHaveText("Muuktest");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//A[@title='Complete']").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][@title='linkLabel']").nth(0).click();
  });

  await test.step(`Verify "Open"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Open\")]").nth(0)).toHaveText("Open");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@title='Edit']").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).click();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][@title='Delete']").nth(0).click();
  });

  await test.step(`Verify "Delete Task"`, async () => {
    await expect(page.locator("//H3[contains(text(),\"Delete Task\")]").nth(0)).toHaveText("Delete Task");
  });

  await test.step(`Verify "Are you sure you want to delete this Ta…"`, async () => {
    await expect(page.locator("//DIV[contains(text(),\"Are you sure you want to delete this Tas\")]").nth(0)).toHaveText("Are you sure you want to delete this Task?");
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
  });

  await test.step(`Verify "Success"`, async () => {
    await expect(page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0)).toHaveText("Success");
  });

  await test.step(`Verify "You have successfully deleted the task."`, async () => {
    await expect(page.locator("//DIV[contains(text(),\"You have successfully deleted the task.\")]").nth(0)).toHaveText("You have successfully deleted the task.");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "There are currently no notes, tasks or …"`, async () => {
    await expect(page.locator("//DIV[contains(text(),\"There are currently no notes, tasks or a\")]").nth(0)).toHaveText("There are currently no notes, tasks or activities.");
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Muuktest\")]";
  });

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Target Employers\"]").nth(0).click();
  });

  await test.step(`Click "Target Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Target Contacts\")]").nth(0).click();
  });

  await test.step(`Click "Mr. Test Testing (MuukTest)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Mr. Test Testing (MuukTest)\")]//ancestor::tr//A[contains(@title,\"Remove\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

});
