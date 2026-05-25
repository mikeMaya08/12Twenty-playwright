// TC: TC75256
// Outcomes - Student creates Post Graduation Military Service

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_MORE_FILTERS,
  BTN_OPTIONS_LOWER,
  BTN_RESET_FILTERS,
  CONFIRM_PERM_DELETE,
  INPUT_SEARCH_FILTERS,
  INPUT_SEARCH_USERS,
  LABEL_NO,
  LABEL_YES,
  LINK_E2E_TEST_STUDENT_CT,
  NAV_HOME,
  NAV_PROFILE,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Outcomes - Student creates Post Graduation Military Service - TC75256", async ({ page, context }) => {
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

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Home\")]").nth(0).click();
  });

  await test.step(`Click "Add Experience or Status"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Experience or Status\"]").nth(0).click();
  });

  await test.step(`Hover "Add Experience or Status..."`, async () => {
    await page.locator("//H3[contains(text(),\"Add Experience or Status...\")]").nth(0).hover();
  });

  await test.step(`Click "Post Graduation"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Post Graduation\")]").nth(0).click();
  });

  await test.step(`Click "Military Service"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Military Service\"]").nth(0).click();
  });

  await test.step(`Hover "Military Service"`, async () => {
    await page.locator("//H1[contains(text(),\"Military Service\")]").nth(0).hover();
  });

  await test.step(`Hover "(*) indicates a required field."`, async () => {
    await page.locator("//SPAN[contains(text(),\"(*) indicates a required field.\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Branch of the armed forces\"]").nth(0).hover();
  });

  await test.step(`Select "4"`, async () => {
    await page.locator("//SELECT[@id='Fields_MilitaryBranchId'][@name='Fields.MilitaryBranchId']").nth(0).selectOption("4");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Role in the service\"]").nth(0).hover();
  });

  await test.step(`Select "1"`, async () => {
    await page.locator("//SELECT[@id='Fields_MilitaryServiceRoleId'][@name='Fields.MilitaryServiceRoleId']").nth(0).selectOption("1");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Country serving\"]").nth(0).hover();
  });

  await test.step(`Fill "United States (USA)"`, async () => {
    await page.locator("//INPUT[@id='Fields_MilitaryCountryOfCitizenshipName'][@name='Fields.MilitaryCountryOfCitizenshipName'][@placeholder='Country'][@type='text']").nth(0).fill("United States (USA)");
  });

  await test.step(`Click "United States (USA)"`, async () => {
    await page.locator("//DIV[@id='ui-id-5'][contains(text(),\"United States (USA)\")]").nth(0).click();
  });

  await test.step(`Hover "Military Rank"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Military Rank\")]").nth(0).hover();
  });

  await test.step(`Hover "Seeking/Postponing Additional Details"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Seeking/Postponing Additional Details\")]").nth(0).hover();
  });

  await test.step(`Fill "Admiral"`, async () => {
    await page.locator("//INPUT[@id='Fields_MilitaryRank'][@name='Fields.MilitaryRank'][@type='text']").nth(0).fill("Admiral");
  });

  await test.step(`Fill "None."`, async () => {
    await page.locator("//TEXTAREA[@id='Fields_PostponingJobExplanation'][@name='Fields.PostponingJobExplanation']").nth(0).fill("None.");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Start Date\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@id='Fields_StartDate'][@name='Fields.StartDate'][@placeholder='MM/DD/YYYY'][@type='text']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(9).click();
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

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator("//A[contains(text(),\"Cancel\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='button'][@id='btnSubmit'][@name='btnSubmit']").nth(0).click();
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

  await test.step(`Click "Notifications"`, async () => {
    await page.locator("//A[@id='navbar-notifications-btn'][@role='button'][contains(normalize-space(),\"Notifications\")]").nth(0).click();
  });

  await test.step(`Click "Outcomes"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Outcomes\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Is Appr"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Is Appr");
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Is Approved\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator("//span[contains(text(),\"e2e Test Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Military Service"`, async () => {
    await page.locator("//a[contains(text(),\"Military Service\")]").nth(0).hover();
  });

  await test.step(`Click "Military Service"`, async () => {
    await page.locator("//a[contains(text(),\"Military Service\")]/ancestor::tr//td[contains(@class,\"checkbox\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Approve Selected (1)"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Approve Selected (1)\"]").nth(0).click();
  });

  await test.step(`Hover "Successfully approved 1 job(s)."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Successfully approved 1 job(s).\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Is Approved"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Is Approved\")]").nth(0).click();
  });

  await test.step(`Hover "Approved"`, async () => {
    await page.locator("//a[contains(text(),\"Military Service\")]/ancestor::tr//SPAN[normalize-space() = \"Approved\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator("//span[contains(text(),\"e2e Test Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Military Service"`, async () => {
    await page.locator("//a[contains(text(),\"Military Service\")]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(LINK_E2E_TEST_STUDENT_CT).nth(0).click();
  });

  await test.step(`Hover "Military Service"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Military Service\")]").nth(0).hover();
  });

  await test.step(`Verify "Approved"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Approved\")]").nth(0)).toHaveText("Approved");
  });

  await test.step(`Click "Military Service"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[@title='Edit Job'][normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Unapprove"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::A[@role='button'][normalize-space() = \"Unapprove\"]").nth(0).hover();
  });

  await test.step(`Hover "Move Outcome"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[normalize-space() = \"Move Outcome\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Interview Question"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[normalize-space() = \"Add Interview Question\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Outcome Note"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[normalize-space() = \"Add Outcome Note\"]").nth(0).hover();
  });

  await test.step(`Hover "Exclude from Reporting"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[normalize-space() = \"Exclude from Reporting\"]").nth(0).hover();
  });

  await test.step(`Hover "View Outcome Audit Log"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[normalize-space() = \"View Outcome Audit Log\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[contains(text(),\"Military Service\")]/following::a[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Entry"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Entry\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Click "Delete Entry"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Entry\")]").nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
  });

});
