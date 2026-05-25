// TC: TC_A80121
// Appointments - Settings - Add and delete a new appointment configuration

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_DELETE,
  BTN_OK,
  BTN_SAVE_CHANGES_SUBMIT,
  DATEPICKER_NEXT_DAY2,
  INPUT_END_TIME,
  INPUT_SEARCH_USERS,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_GROUP_1,
  LABEL_NO,
  LOGIN_AS_USER,
  MODAL_SUCCESS,
  NAV_APPOINTMENTS,
  NAV_DELETE,
  NAV_EDIT,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_MGMT_SIBLING_BTN,
  NAV_SITE_SETTINGS,
  RBTN_CANCEL,
  RBTN_SAVE,
  RBTN_WEEK,
} from '@config/selectors';

test("Appointments - Settings - Add and delete a new appointment configuration - TC_A80121", async ({ page, context }) => {
  let date = `8/24/2025`;
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

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"e2e Test Admin – 7am- 9am\"]";
  });

  await test.step(`Click "e2e Test Admin – 7am- 9am"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 7am- 9am\"]").nth(0).click();
  });

  await test.step(`Click "Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Appointment Block\"]/ancestor::div[@class=\"modal-header\"]//button[@data-toggle=\"dropdown\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//A[contains(normalize-space(),\"Edit\")]").nth(0).click();
  });

  await test.step(`Click "Delete Block"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Block\"]").nth(0).click();
  });

  await test.step(`Click "Delete Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Appointment Block\"]").nth(0).click();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this appointment block?\"]").nth(1).hover();
  });

  await test.step(`Click "Yes, delete it"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes, delete it\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(2).click();
  });

  await test.step(`Hover "Appointment Booking Settings New!"`, async () => {
    await page.locator("//H3[normalize-space() = \"Appointment Booking Settings New!\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DD[normalize-space()=\"General Career Coaching, Resume and Cover Letter Review\"]";
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@aria-label='Options']").nth(1).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this configuration?\"]").nth(1).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(BTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Successfully deleted configuration"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Successfully deleted configuration\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//LABEL[normalize-space() = \"Enable New Appointment Settings\"]/following-sibling::div//toggle//div[contains(@class,\"off\")]";
  });

  await test.step(`Hover "Enable New Appointment Settings"`, async () => {
    await page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Enable New Appointment Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Enable New Appointment Settings"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable New Appointment Settings\"]/following-sibling::div//toggle//div[contains(@class,\"off\")]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(BTN_SAVE_CHANGES_SUBMIT).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "The configuration values have been succ…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"The configuration values have been successfully saved.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Appointment Booking Settings"`, async () => {
    await page.locator("//H3[contains(normalize-space(),\"Appointment Booking Settings\")]/following::button[contains(text(),\"New\")]").nth(0).click();
  });

  await test.step(`Hover "Student Groups"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Groups\"]").nth(0).hover();
  });

  await test.step(`Click "Student Groups"`, async () => {
    await page.locator("//label[normalize-space()=\"Student Groups\"]//following::button").nth(0).click();
  });

  await test.step(`Click "Group 1"`, async () => {
    await page.locator(LABEL_GROUP_1).nth(0).click();
  });

  await test.step(`Click "Student Groups"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Groups\"]").nth(0).click();
  });

  await test.step(`Hover "Appointment Types"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Appointment Types\"]").nth(0).hover();
  });

  await test.step(`Click "Appointment Types"`, async () => {
    await page.locator("//label[normalize-space()=\"Appointment Types\"]//following::button").nth(0).click();
  });

  await test.step(`Click "General Career Coaching"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"General Career Coaching\"]").nth(0).click();
  });

  await test.step(`Click "Resume and Cover Letter Review"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Resume and Cover Letter Review\"]").nth(0).click();
  });

  await test.step(`Click "Appointment Types"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Appointment Types\"]").nth(0).click();
  });

  await test.step(`Hover "Booking Start (Days Before)*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Booking Start (Days Before)*\"]").nth(0).hover();
  });

  await test.step(`Fill "2"`, async () => {
    await page.locator("//INPUT[@type='number'][@id='input-nrow9a-number'][@name=''][@placeholder='Booking Start (Days Before)']").nth(0).fill("2");
  });

  await test.step(`Hover "Booking Cutoff (Hours Before)*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Booking Cutoff (Hours Before)*\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//input[@placeholder=\"Booking Cutoff (Hours Before)\"]").nth(0).fill("1");
  });

  await test.step(`Hover "Cancellation Cutoff (Hours Before)*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Cancellation Cutoff (Hours Before)*\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//input[@placeholder=\"Cancellation Cutoff (Hours Before)\"]").nth(0).fill("1");
  });

  await test.step(`Hover "Upcoming Appointment Limit*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upcoming Appointment Limit*\"]").nth(0).hover();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//input[@placeholder=\"Upcoming Appointment Limit\"]").nth(0).fill("1");
  });

  await test.step(`Hover "Upcoming Appointment Limit Frequency*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upcoming Appointment Limit Frequency*\"]").nth(0).hover();
  });

  await test.step(`Click "Upcoming Appointment Limit Frequency*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upcoming Appointment Limit Frequency*\"]//following::select").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Click "15"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"15\"]").nth(0).click();
  });

  await test.step(`Click "60"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"60\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(2).hover();
  });

  await test.step(`Click "15"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"15\"]").nth(1).click();
  });

  await test.step(`Click "60"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"60\"]").nth(1).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Hover "Student Groups"`, async () => {
    await page.locator("//DT[normalize-space()=\"Student Groups\"]").nth(0).hover();
  });

  await test.step(`Hover "Group 1"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Group 1\"]").nth(1).hover();
  });

  await test.step(`Hover "Appointment Types"`, async () => {
    await page.locator("//DT[normalize-space()=\"Appointment Types\"]").nth(0).hover();
  });

  await test.step(`Hover "General Career Coaching, Resume and Cov…"`, async () => {
    await page.locator("//DD[normalize-space()=\"General Career Coaching, Resume and Cover Letter Review\"]").nth(0).hover();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "Block"`, async () => {
    await page.locator("//A[normalize-space() = \"Block\"]").nth(0).click();
  });

  await test.step(`Hover "Create Appointment Block"`, async () => {
    await page.locator("//H1[normalize-space() = \"Create Appointment Block\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Fill "7:00am"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("7:00am");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(INPUT_END_TIME).nth(0).fill("9:00am");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Career Adviser *\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='AdviserId'][@name='AdviserId']").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select Type(s) --\"]").nth(0).click();
  });

  await test.step(`Click "General Career Coaching"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"General Career Coaching\"]").nth(0).click();
  });

  await test.step(`Click "Resume and Cover Letter Review"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Resume and Cover Letter Review\"]").nth(0).click();
  });

  await test.step(`Click "Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type *\"]").nth(0).click();
  });

  await test.step(`Click "Virtual"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual\"]").nth(0).click();
  });

  await test.step(`Hover "Virtual Location Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Virtual Location Type*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-wayk2hd-lookup'][@name='DetailedAppointmentBlockVirtualLocationTypeId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- All Student Groups --\"]").nth(0).click();
  });

  await test.step(`Click "Group 1"`, async () => {
    await page.locator(LABEL_GROUP_1).nth(0).click();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "Create Block"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Create Block\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Admin – 7am- 9am"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 7am- 9am\"]").nth(0).hover();
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Cydney");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//a[normalize-space()=\"Cydney Moore\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as Cydney Moore"`, async () => {
    await page.locator("//H3[normalize-space() = \"Login as Cydney Moore\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    const studentPagePromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await page.locator(BTN_OK).nth(0).click();
    const studentPage = await studentPagePromise;
    if (studentPage) {
      await studentPage.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      const studentUrl = studentPage.url();
      await studentPage.close();
      await page.goto(studentUrl, { timeout: 90000 });
    }
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"view-selection date-span-options\"]").nth(0).click();
  });

  await test.step(`Click "Week"`, async () => {
    await page.locator(RBTN_WEEK).nth(0).click();
  });

  await test.step(`Click "e2e Test Admin – 7am- 9am"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 7am- 9am\"]").nth(0).click();
  });

  await test.step(`Click "View Available Slots"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"View Available Slots\"]").nth(0).click();
  });

  await test.step(`Click "Book Appointment"`, async () => {
    await page.locator("//H1[normalize-space() = \"Book Appointment\"]").nth(0).click();
  });

  await test.step(`Click "Preferred Appointment Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Appointment Type*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='SelectedAppointmentType']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Duration*\"]").nth(0).hover();
  });

  await test.step(`Click "Preferred Appointment Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Appointment Type*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='SelectedAppointmentType']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@aria-label='Options']").nth(1).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
  });

  await test.step(`Fill "3"`, async () => {
    await page.locator("//INPUT[@type='number'][@id='input-d7gx4d-number'][@name=''][@placeholder='Booking Start (Days Before)']").nth(0).fill("3");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Group 1"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Group 1\"]").nth(1).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "e2e Test Admin – 7am- 9am"`, async () => {
    await page.reload();
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 7am- 9am\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@aria-label='Options']").nth(1).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//INPUT[@type='number'][@id='input-d7gx4d-number'][@name=''][@placeholder='Booking Start (Days Before)']").nth(0).fill("1");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Group 1"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Group 1\"]").nth(1).hover();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@aria-label='Options']").nth(1).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this configuration?\"]").nth(1).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(BTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Successfully deleted configuration"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Successfully deleted configuration\"]").nth(0).hover();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "e2e Test Admin – 7am- 9am"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 7am- 9am\"]").nth(0).click();
  });

  await test.step(`Click "Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Appointment Block\"]/ancestor::div[@class=\"modal-header\"]//button[@data-toggle=\"dropdown\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//A[contains(normalize-space(),\"Edit\")]").nth(0).click();
  });

  await test.step(`Click "Delete Block"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Block\"]").nth(0).click();
  });

  await test.step(`Click "Delete Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Appointment Block\"]").nth(0).click();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this appointment block?\"]").nth(1).hover();
  });

  await test.step(`Click "Yes, delete it"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes, delete it\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

});
