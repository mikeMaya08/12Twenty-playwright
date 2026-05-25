// TC: TC63119
// Employers - Create a new Employer - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_RESET_FILTERS,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  INPUT_CHECKBOX_MULTI,
  INPUT_EMPLOYER_NAME,
  INPUT_SEARCH,
  LABEL_YES,
  MENU_EDIT,
  NAV_EMPLOYERS,
  NAV_HOME,
  RBTN_ADD_NOTE,
  RBTN_VIEW_AUDIT,
} from '@config/selectors';

test("Employers - Create a new Employer - Admin - TC63119", async ({ page, context }) => {
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
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Add Employer"`, async () => {
    await page.reload();
    await page.locator("//A[@id='addCompany'][normalize-space() = \"Add Employer\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Add New Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Add New Employer\")]").nth(0).hover();
  });

  await test.step(`Hover "Parent Employer"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Parent Employer\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Employment Employer\"]").nth(0).hover();
  });

  await test.step(`Hover "Industry *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industry *\"]").nth(0).hover();
  });

  await test.step(`Fill "Amazon Test Alias"`, async () => {
    await page.locator("//INPUT[@name='EmployerName']").nth(0).fill("Amazon Test Alias");
  });

  await test.step(`Click "None-selected"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"None-selected\"]").nth(0).click();
  });

  await test.step(`Fill "Consulting - Other"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Consulting - Other");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(10).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='IsStudentEmploymentEmployer'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "# of Employees*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"# of Employees*\"]").nth(0).hover();
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='NumberOfEmployeesId'][@name='NumberOfEmployeesId']").nth(0).selectOption("number:3");
  });

  await test.step(`Hover "Account Manager*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Account Manager*\"]").nth(0).hover();
  });

  await test.step(`Select "number:540016055100183"`, async () => {
    await page.locator("//SELECT[@id='AccountManagerId'][@name='AccountManagerId']").nth(0).selectOption("number:540016055100183");
  });

  await test.step(`Hover "Website"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Website\"]").nth(0).hover();
  });

  await test.step(`Fill "https://www.muuktest.com"`, async () => {
    await page.locator("//INPUT[@id='Website'][@name='Website'][@placeholder='Website'][@type='text']").nth(0).fill("https://www.muuktest.com");
  });

  await test.step(`Hover "Outreach Priority*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Outreach Priority*\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='OutreachPriorityId'][@name='OutreachPriorityId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "Hero Image PNG or JPG file type.800x500…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Hero Image PNG or JPG file type.800x500 minimum size recommended\"]").nth(0).hover();
  });

  await test.step(`Hover "Overview"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Overview\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Priority Resources & Efforts\"]").nth(0).hover();
  });

  await test.step(`Hover "Demographic Data Available?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Demographic Data Available?\"]").nth(0).hover();
  });

  await test.step(`Hover "Headquarters"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Headquarters\")]").nth(0).hover();
  });

  await test.step(`Hover "Linkedin Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Linkedin Profile\"]").nth(0).hover();
  });

  await test.step(`Hover "Twitter Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Twitter Profile\"]").nth(0).hover();
  });

  await test.step(`Hover "Facebook Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Facebook Profile\"]").nth(0).hover();
  });

  await test.step(`Hover "Instagram Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Instagram Profile\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Employer"`, async () => {
    await page.locator("//H1[contains(text(),\"Employer\")]").nth(0).hover();
  });

  await test.step(`Fill "Amazon Test Alias"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("Amazon Test Alias");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Results: 1"`, async () => {
    await page.locator("//DIV[contains(text(),\"Results: 1\")]").nth(0).hover();
  });

  await test.step(`Hover "Amazon Test Alias"`, async () => {
    await page.locator("//A[contains(text(),\"Amazon Test Alias\")]").nth(0).hover();
  });

  await test.step(`Hover "Consulting - Other"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Consulting - Other\"]").nth(0).hover();
  });

  await test.step(`Hover "11-50"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"11-50\"]").nth(0).hover();
  });

  await test.step(`Click "Amazon Test Alias"`, async () => {
    await page.locator("//A[contains(text(),\"Amazon Test Alias\")]").nth(0).click();
  });

  await test.step(`Hover "Amazon Test Alias"`, async () => {
    await page.locator("//H1[normalize-space() = \"Amazon Test Alias\"]").nth(0).hover();
  });

  await test.step(`Hover "https://www.muuktest.com"`, async () => {
    await page.locator("//A[contains(text(),\"https://www.muuktest.com\")]").nth(0).hover();
  });

  await test.step(`Hover "11-50"`, async () => {
    await page.locator("//SPAN[@title='Number of employees'][normalize-space() = \"11-50\"]").nth(0).hover();
  });

  await test.step(`Hover "Consulting - Other"`, async () => {
    await page.locator("//SPAN[@title='Industries'][normalize-space() = \"Consulting - Other\"]").nth(0).hover();
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator("//A[contains(text(),\"Home\")]").nth(0).hover();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[contains(text(),\"Activities\")]").nth(0).click();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Contacts\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LI").nth(89).click();
  });

  await test.step(`Click "Hires"`, async () => {
    await page.locator("//A[contains(text(),\"Hires\")]").nth(0).click();
  });

  await test.step(`Click "Locations"`, async () => {
    await page.locator("//A[contains(text(),\"Locations\")]").nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//A[contains(text(),\"Events\")]").nth(1).click();
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator("//A[contains(text(),\"OCI and Job Listings\")]").nth(0).click();
  });

  await test.step(`Click "Experiences"`, async () => {
    await page.locator("//A[contains(text(),\"Experiences\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//UIB-TAB-HEADING").nth(0).click();
  });

  await test.step(`Hover "12twenty Job IQ"`, async () => {
    await page.locator("//DIV[normalize-space() = \"12twenty Job IQ\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Hover "Add Note"`, async () => {
    await page.locator(RBTN_ADD_NOTE).nth(0).hover();
  });

  await test.step(`Hover "Create Task"`, async () => {
    await page.locator("//A[normalize-space() = \"Create Task\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Merge"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Merge\"]").nth(0).hover();
  });

  await test.step(`Hover "Reject"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reject\"]").nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
  });

  await test.step(`Click "Reject"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reject\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Reject Employer"`, async () => {
    await page.locator("//H3[contains(text(),\"Reject Employer\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to reject this emp"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to reject this emp\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Reject"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Reject\")]").nth(0).click();
  });

  await test.step(`Hover "Rejected"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Rejected\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Hover "Approve"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Approve\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Amazon Test Alias"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("Amazon Test Alias");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "No results were found."`, async () => {
    await page.locator("//DIV[contains(text(),\"No results were found.\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Amazon Test Alias\")]";
  });

});
