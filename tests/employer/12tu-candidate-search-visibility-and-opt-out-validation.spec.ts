// TC: TC_A83699
// 12TU Candidate Search -  Visibility and Opt-Out Validation

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_EDIT,
  BTN_GET_RESULTS,
  BTN_SAVE_TYPE,
  H1_STUDENTS_ALUMNI,
  INPUT_DOC_NAME,
  LABEL_NO,
  LABEL_YES,
  LINK_TEST_STUDENT_0001,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_ADD_NEW,
  RBTN_CANCEL,
  RBTN_SUBMIT,
  TAB_PROFILE,
} from '@config/selectors';

test("12TU Candidate Search -  Visibility and Opt-Out Validation - TC_A83699", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
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

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Application Materials\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Resume\"]";
  });

  await test.step(`Click "Resume"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume\"]/ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Resumes"`, async () => {
    await page.locator("//H3[normalize-space() = \"Resumes\"]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Hover "Resume Name *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Resume Name *\"]").nth(0).hover();
  });

  await test.step(`Fill "Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Resume");
  });

  await test.step(`Hover "Upload New Resume *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload New Resume *\"]").nth(0).hover();
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator(RBTN_SUBMIT).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H3[normalize-space() = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd[1]//span[normalize-space()=\"No\"]";
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd//span").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(BTN_EDIT).nth(2).click();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[@id=\"IncludeInResumeBook-label\"][contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd//span").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).click();
  });

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//H2[normalize-space() = \"Candidate Search\"]").nth(0).hover();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test Student #0001\"]").nth(0).click();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(80).click();
  });

  await test.step(`Click "View Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Preview Resume'][normalize-space() = \"View Resume\"]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(15).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test Student #0001\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(BTN_EDIT).nth(2).click();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[@id=\"IncludeInResumeBook-label\"][contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd//span").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "Resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Resume\"]").nth(1).hover();
  });

  await test.step(`Click "Resume"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume\"]/ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

});
