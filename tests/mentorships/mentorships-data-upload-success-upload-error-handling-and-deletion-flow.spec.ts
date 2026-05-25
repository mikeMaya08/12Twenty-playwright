// TC: TC_A83695
// Mentorships - Data Upload Success, Upload Error Handling, and Deletion Flow

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OPTIONS_LOWER,
  BTN_RESET_FILTERS,
  BTN_SAVE_TYPE,
  BTN_UPLOAD,
  LABEL_NO,
  LABEL_SELECT_ALL,
  LABEL_YES,
  MODAL_PLEASE_CONFIRM,
  NAV_DATA_UPLOADS,
  NAV_HOME,
  NAV_MENTORSHIP,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_STUDENTS_ALUMNI,
  RBTN_DELETE_SELECTED,
  RBTN_OK,
  TAB_PROFILE,
} from '@config/selectors';

test("Mentorships - Data Upload Success, Upload Error Handling, and Deletion Flow - TC_A83695", async ({ page, context }) => {
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

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//td[@class=\"select-checkbox\"]";
  });

  await test.step(`Hover "Mentee: Test Student #0004"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//a[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).hover();
  });

  await test.step(`Click "Mentee: Test Student #0004"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this me…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Data Uploads"`, async () => {
    await page.locator(NAV_DATA_UPLOADS).nth(0).click();
  });

  await test.step(`Hover "Data Uploads"`, async () => {
    await page.locator("//H1[normalize-space() = \"Data Uploads\"]").nth(0).hover();
  });

  await test.step(`Click "Download CSV Template"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Download CSV Template\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT").nth(0).click();
  });

  await test.step(`Type "Mentorship"`, async () => {
    await page.keyboard.type("Mentorship");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Test Student #0003"`, async () => {
    await page.locator("//A[normalize-space() = \"Test Student #0003\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//DT[contains(text(),\"Allow users to request me as a mentor\")]").nth(0).hover();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Mentorships\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Allow users to request me as a mentor\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Mentorship Programs"`, async () => {
    await page.locator("//label[normalize-space()=\"Mentorship Programs\"]/following::button[@data-toggle=\"dropdown\"]").nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Verify "E2E Tests Campuswide Mentorship Program"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]//following-sibling::dd//span").nth(0)).toHaveText("E2E Tests Campuswide Mentorship Program");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Test Student #0004"`, async () => {
    await page.locator("//A[normalize-space() = \"Test Student #0004\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//DT[contains(text(),\"Allow users to request me as a mentor\")]").nth(0).hover();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorships\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Mentorships"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Mentorships\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow users to request me as a mentor"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Allow users to request me as a mentor\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Data Uploads"`, async () => {
    await page.locator(NAV_DATA_UPLOADS).nth(0).click();
  });

  await test.step(`Click "New Upload"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Upload\"]").nth(0).click();
  });

  await test.step(`Hover "New Data Upload"`, async () => {
    await page.locator("//H3[normalize-space() = \"New Data Upload\"]").nth(0).hover();
  });

  await test.step(`Set filename "MuukMentorshipUpload.csv"`, async () => {
    fileName = "MuukMentorshipUpload.csv";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT").nth(0).click();
  });

  await test.step(`Type "Mentorship"`, async () => {
    await page.keyboard.type("Mentorship");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_UPLOAD).nth(0).click();
  });

  await test.step(`Hover "Total Records: 1"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Total Records: 1\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentor: Test Student #0003 Mentee: Test…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentor: Test Student #0003 Mentee: Test Student #0004\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Mentee: Test Student #0004"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//a[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).click();
  });

  await test.step(`Hover "Mentee"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentee\"]").nth(0).hover();
  });

  await test.step(`Hover "Test Student #0004"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test Student #0004\"]").nth(2).hover();
  });

  await test.step(`Hover "Mentor"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentor\"]").nth(0).hover();
  });

  await test.step(`Hover "Test Student #0003"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test Student #0003\"]").nth(2).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Data Uploads"`, async () => {
    await page.locator(NAV_DATA_UPLOADS).nth(0).click();
  });

  await test.step(`Click "New Upload"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Upload\"]").nth(0).click();
  });

  await test.step(`Hover "New Data Upload"`, async () => {
    await page.locator("//H3[normalize-space() = \"New Data Upload\"]").nth(0).hover();
  });

  await test.step(`Set filename "MuukMentorshipUpload.csv"`, async () => {
    fileName = "MuukMentorshipUpload.csv";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT").nth(0).click();
  });

  await test.step(`Type "Mentorship"`, async () => {
    await page.keyboard.type("Mentorship");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(BTN_UPLOAD).nth(0).click();
  });

  await test.step(`Hover "No rows were processed because one or m…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"No rows were processed because one or more rows included errors\"]").nth(0).hover();
  });

  await test.step(`Hover "This mentor and mentee are already in a…"`, async () => {
    await page.locator("//LI[normalize-space()=\"This mentor and mentee are already in an active mentorship for this program. (1 Rows)\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentee has met their maximum active men…"`, async () => {
    await page.locator("//LI[normalize-space()=\"Mentee has met their maximum active mentorships limit. (1 Rows)\"]").nth(0).hover();
  });

  await test.step(`Hover "Mentor has met their maximum active men…"`, async () => {
    await page.locator("//LI[normalize-space()=\"Mentor has met their maximum active mentorships limit. (1 Rows)\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Hover "Mentee: Test Student #0004"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//a[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).hover();
  });

  await test.step(`Click "Mentee: Test Student #0004"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//td[@class=\"select-checkbox\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete Selected"`, async () => {
    await page.locator(RBTN_DELETE_SELECTED).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to cancel this me…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

});
