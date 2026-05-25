// TC: TC63509
// Contacts - Activity Stream - Add/Delete Note/Meeting

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ADD_CONTAINS,
  BTN_CANCEL_CONTAINS,
  BTN_OPTIONS_UPPER,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  INPUT_DATE,
  MODAL_DELETE_NOTE_CT,
  MODAL_SUCCESS_PLAIN,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  RBTN_ADD_NOTE,
  RBTN_CANCEL_CONTAINS,
  RBTN_OK_MODAL,
  RBTN_OK_MODAL_CONT,
} from '@config/selectors';

test("Contacts - Activity Stream - Add/Delete Note/Meeting - TC63509", async ({ page, context }) => {
  let date = `8/24/2025`;
  let selector = `0`;
  let textContent = `0`;

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
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Contact Name or Email Address']").nth(0).fill("Test Contact 01-001");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Test Contact 01-001"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Contact 01-001\")]").nth(0).click();
  });

  await test.step(`Hover "Test Contact 01-001"`, async () => {
    await page.locator("//H1[contains(text(),\"Test Contact 01-001\")]").nth(0).hover();
  });

  await test.step(`Hover "Profile"`, async () => {
    await page.locator("//A[contains(text(),\"Profile\")]").nth(0).hover();
  });

  await test.step(`Hover "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).hover();
  });

  await test.step(`Hover "Notes"`, async () => {
    await page.locator("//A[contains(text(),\"Notes\")]").nth(0).hover();
  });

  await test.step(`Hover "Emails"`, async () => {
    await page.locator("//A[contains(text(),\"Emails\")]").nth(0).hover();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//A[contains(text(),\"Events\")]").nth(1).hover();
  });

  await test.step(`Hover "OCI and Job Listings"`, async () => {
    await page.locator("//A[contains(text(),\"OCI and Job Listings\")]").nth(0).hover();
  });

  await test.step(`Hover "Experiences"`, async () => {
    await page.locator("//A[contains(text(),\"Experiences\")]").nth(0).hover();
  });

  await test.step(`Click "e2e Test Admin"`, async () => {
    await page.locator("//SPAN[contains(text(),\"e2e Test Admin\")]").nth(0).click();
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//A[contains(text(),\"Account Settings\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//a[@class=\"logout\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@class=\"logout\"]").nth(0).click();
    await page.waitForLoadState('load');
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

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Contact Name or Email Address']").nth(0).fill("Test Contact 01-001");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Test Contact 01-001"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Contact 01-001\")]").nth(0).click();
  });

  await test.step(`Hover "Test Contact 01-001"`, async () => {
    await page.locator("//H1[contains(text(),\"Test Contact 01-001\")]").nth(0).hover();
  });

  await test.step(`Hover "AutoSync Enabled"`, async () => {
    await page.locator("//SPAN[@title='When auto-sync is enabled, employer user account updates will automatically carry over to this contact profile.'][normalize-space() = \"AutoSync Enabled\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@title='Click to toggle']").nth(0).hover();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[normalize-space() = \"Activities\"][@class=\"nav-link ng-binding\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Student/Contact Meeting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student/Contact Meeting\")]/following::A[@role=\"button\"][@title=\"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Activity"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Activity\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this Act"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this Act\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the activi"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the activi\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[normalize-space() = \"Profile\"][@class=\"nav-link ng-binding\"]").nth(0).click();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[normalize-space() = \"Activities\"][@class=\"nav-link ng-binding\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Add quick, detailed notes to organize y…"`, async () => {
    await page.locator("//P[normalize-space() = \"Add quick, detailed notes to organize your thoughts, document ideas, or provide context for tasks, events, and projects efficiently.\"]/following::A[@role=\"button\"][@title=\"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Note"`, async () => {
    await page.locator(MODAL_DELETE_NOTE_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this Not"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this Not\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the note."`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully deleted the note.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[normalize-space() = \"Profile\"][@class=\"nav-link ng-binding\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Add Note"`, async () => {
    await page.locator(RBTN_ADD_NOTE).nth(0).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator("//H3[contains(text(),\"Add Note\")]").nth(0).hover();
  });

  await test.step(`Hover "Contact: Test Contact 01-001"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Contact: Test Contact 01-001\"]").nth(0).hover();
  });

  await test.step(`Hover "Note Description *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Note Description *\")]").nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_NoteDescription\"]").nth(0).click();
  });

  await test.step(`Set textContent`, async () => {
    textContent = "Add quick, detailed notes to organize your thoughts, document ideas, or provide context for tasks, events, and projects efficiently.";
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//HTML").nth(0).hover();
  });

  await test.step(`Select "number:3809"`, async () => {
    await page.locator("//SELECT[@id='UTypeId'][@name='TypeId']").nth(0).selectOption("number:3809");
  });

  await test.step(`Hover "Note Date * *Required. *Date must be in…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Note Date * *Required. *Date must be in the past. *Invalid. Please enter a date between 1900 and 2078.\"]").nth(0).hover();
  });

  await test.step(`Hover "Attach a file"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Attach a file\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Add"`, async () => {
    await page.locator(BTN_ADD_CONTAINS).nth(0).click();
  });

  await test.step(`Click "Notes"`, async () => {
    await page.locator("//A[contains(text(),\"Notes\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Add quick, detailed notes to organize y…"`, async () => {
    await page.locator("//P[normalize-space() = \"Add quick, detailed notes to organize your thoughts, document ideas, or provide context for tasks, events, and projects efficiently.\"]").nth(0).hover();
  });

  await test.step(`Hover "Outreach Update"`, async () => {
    await page.locator("//td[contains(text(),\"Outreach Update\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator("//td[contains(text(),\"e2e Test Student\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
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

  await test.step(`Click "New Meeting"`, async () => {
    await page.locator("//A[normalize-space() = \"New Meeting\"]").nth(0).click();
  });

  await test.step(`Hover "Add Meeting"`, async () => {
    await page.locator("//H1[contains(text(),\"Add Meeting\")]").nth(0).hover();
  });

  await test.step(`Fill "Student/Contact Meeting"`, async () => {
    await page.locator("//INPUT[@name='Title'][@type='text'][@placeholder='Add title here']").nth(0).fill("Student/Contact Meeting");
  });

  await test.step(`Click "Meeting Type"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Meeting Type\")]").nth(0).click();
  });

  await test.step(`Click "Start Date*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Start Date*\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(24).click();
  });

  await test.step(`Click "End Date*"`, async () => {
    await page.locator("//LABEL[contains(text(),\"End Date*\")]").nth(0).click();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(24).click();
  });

  await test.step(`Click "Description"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Description\")]").nth(0).click();
  });

  await test.step(`Hover "Add description here"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here']").nth(0).hover();
  });

  await test.step(`Fill "Meeting to consult data"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here']").nth(0).fill("Meeting to consult data");
  });

  await test.step(`Click "Comments"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Comments\")]").nth(0).click();
  });

  await test.step(`Fill "Testing creation of meeting"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add comments here']").nth(0).fill("Testing creation of meeting");
  });

  await test.step(`Click "Meeting Contact(s)"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Meeting Contact(s)\")]").nth(0).click();
  });

  await test.step(`Hover "Search Contacts"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='contactname'][@name='contactname'][@placeholder='Search Contacts']").nth(0).hover();
  });

  await test.step(`Hover "Company"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Company\")]").nth(0).hover();
  });

  await test.step(`Hover "Name"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Name\")]").nth(0).hover();
  });

  await test.step(`Hover "Email"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Email\")]").nth(0).hover();
  });

  await test.step(`Hover "Phone"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Phone\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).click();
  });

  await test.step(`Hover "Student/Contact Meeting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student/Contact Meeting\")]").nth(0).hover();
  });

  await test.step(`Hover "Meeting to consult data"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Meeting to consult data\")]").nth(0).hover();
  });

  await test.step(`Hover "-e2e Test Student"`, async () => {
    await page.locator("//SPAN[contains(text(),\"-e2e Test Student\")]").nth(1).hover();
  });

  await test.step(`Hover "Contact: Test Contact 01-001"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Contact: Test Contact 01-001\"]").nth(1).hover();
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[normalize-space() = \"Activities\"][@class=\"nav-link ng-binding\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Student/Contact Meeting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student/Contact Meeting\")]/following::A[@role=\"button\"][@title=\"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Activity"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Activity\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this Act"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this Act\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the activi"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the activi\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL_CONT).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[normalize-space() = \"Profile\"][@class=\"nav-link ng-binding\"]").nth(0).click();
    await page.waitForTimeout(4000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Student/Contact Meeting\")]";
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[normalize-space() = \"Activities\"][@class=\"nav-link ng-binding\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Add quick, detailed notes to organize y…"`, async () => {
    await page.locator("//P[normalize-space() = \"Add quick, detailed notes to organize your thoughts, document ideas, or provide context for tasks, events, and projects efficiently.\"]/following::A[@role=\"button\"][@title=\"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Note"`, async () => {
    await page.locator(MODAL_DELETE_NOTE_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this Not"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this Not\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the note."`, async () => {
    await page.locator("//DIV[normalize-space() = \"You have successfully deleted the note.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await page.reload();
    await page.waitForTimeout(5000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//P[normalize-space() = \"Add quick, detailed notes to organize your thoughts, document ideas, or provide context for tasks, events, and projects efficiently.\"]";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@title='Click to toggle']").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@title='Click to toggle']").nth(0).hover();
  });

  await test.step(`Hover "There are currently no notes, tasks or a"`, async () => {
    await page.reload();
    await page.locator("//DIV[contains(text(),\"There are currently no notes, tasks or a\")]").nth(0).hover();
  });

});
