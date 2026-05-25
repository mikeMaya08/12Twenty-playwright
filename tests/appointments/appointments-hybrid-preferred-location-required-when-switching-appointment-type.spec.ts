// TC: TC_A83741
// Appointments - Hybrid: Preferred Location Required When Switching Appointment Type

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OPTIONS_UPPER,
  BTN_RESET_FILTERS,
  BYPASS_ON_NEXT_LOGIN,
  DATEPICKER_NEXT_DAY2,
  H1_STUDENTS_ALUMNI,
  H2_ELIGIBILITY,
  INPUT_DATE,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_NO,
  LABEL_SELECT_ALL,
  LINK_TEST_STUDENT_0001,
  LOGIN_AS_BTN,
  MULTI_SELECT_VALUE,
  NAV_APPOINTMENTS,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_CANCEL,
  RBTN_LIST,
  SPAN_CLOSE_X,
} from '@config/selectors';

test("Appointments - Hybrid: Preferred Location Required When Switching Appointment Type - TC_A83741", async ({ page, context }) => {
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
    selector = "//DIV[normalize-space() = \"Test Student #0001 (e2e Test Admin) – 3:30pm- 4pm\"]";
  });

  await test.step(`Click "Test Student #0001 (e2e Test Admin) – 3…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Test Student #0001 (e2e Test Admin) – 3:30pm- 4pm\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][normalize-space(translate(., '\\u00A0', ' ')) = \"Cancel Appointment\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel the Appointment"`, async () => {
    await page.locator("//H3[normalize-space() = \"Cancel the Appointment\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure about this cancellation? O…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure about this cancellation? Once canceled, this time slot will be re-open to other students, Re-booking the same slot will not be guaranteed.\"]").nth(1).hover();
  });

  await test.step(`Hover "No, return to the appointment"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"No, return to the appointment\"]").nth(0).hover();
  });

  await test.step(`Click "Yes, cancel it"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes, cancel it\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"e2e Test Admin – 3:30pm- 6:30pm\"]";
  });

  await test.step(`Click "e2e Test Admin – 3:30pm- 6:30pm"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 3:30pm- 6:30pm\"]").nth(0).click();
  });

  await test.step(`Hover "Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Appointment Block\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"Show dropdown menu\"]/ancestor::button").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//A[@role=\"button\"][contains(normalize-space(),\"Edit\")]").nth(0).click();
  });

  await test.step(`Hover "Edit Appointment Block"`, async () => {
    await page.locator("//H1[normalize-space() = \"Edit Appointment Block\"]").nth(0).hover();
  });

  await test.step(`Hover "This block is part of a recurring appoi…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"This block is part of a recurring appointment block series.\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Block"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Block\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Recurring Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Recurring Block\"]").nth(0).hover();
  });

  await test.step(`Hover "Would you like to permanently delete on…"`, async () => {
    await page.locator("//P[normalize-space() = \"Would you like to permanently delete only this block, or this and all future blocks in the series?\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Only This"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Only This\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Following"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Following\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Delete Following"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Following\"]").nth(0).click();
  });

  await test.step(`Hover "Delete All Following Appointment Blocks"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete All Following Appointment Blocks\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure about this deletion? This …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure about this deletion? This and all future time blocks will be deleted.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Yes, delete all"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes, delete all\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Block"`, async () => {
    await page.locator("//A[normalize-space() = \"Block\"]").nth(0).click();
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Click "H:MMpm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).click();
  });

  await test.step(`Type "3:30pm"`, async () => {
    await page.keyboard.type("3:30pm");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(INPUT_END_TIME).nth(0).click();
  });

  await test.step(`Type "6:30pm"`, async () => {
    await page.keyboard.type("6:30pm");
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Occurs*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='FrequencyId'][@name='FrequencyId']").nth(0).click();
  });

  await test.step(`Type "Weekly"`, async () => {
    await page.keyboard.type("Weekly");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Hover "to"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"to\"]").nth(1).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY2).nth(6).click();
  });

  await test.step(`Hover "Occurs On*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Occurs On*\"]").nth(0).hover();
  });

  await test.step(`Click "M"`, async () => {
    await page.locator("//LABEL[@title='Monday'][normalize-space() = \"M\"]").nth(0).click();
  });

  await test.step(`Click "T"`, async () => {
    await page.locator("//LABEL[@title='Tuesday'][normalize-space() = \"T\"]").nth(0).click();
  });

  await test.step(`Click "W"`, async () => {
    await page.locator("//LABEL[@title='Wednesday'][normalize-space() = \"W\"]").nth(0).click();
  });

  await test.step(`Click "T"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"T\"][@title=\"Thursday\"]").nth(0).click();
  });

  await test.step(`Click "F"`, async () => {
    await page.locator("//LABEL[@title='Friday'][normalize-space() = \"F\"]").nth(0).click();
  });

  await test.step(`Hover "Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type *\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select Type(s) --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select Type(s) --\"]").nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(1).click();
  });

  await test.step(`Click "Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type *\"]").nth(0).click();
  });

  await test.step(`Hover "Location"`, async () => {
    await page.locator("//H2[normalize-space() = \"Location\"]").nth(0).hover();
  });

  await test.step(`Click "Hybrid"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Hybrid\"]").nth(0).click();
  });

  await test.step(`Hover "Virtual Location Type*"`, async () => {
    await page.locator("//LABEL[@id='DetailedAppointmentBlockVirtualLocationTypeId-label'][normalize-space() = \"Virtual Location Type*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-lcdn5-lookup'][@name='DetailedAppointmentBlockVirtualLocationTypeId']").nth(0).click();
  });

  await test.step(`Type "Select from a list"`, async () => {
    await page.keyboard.type("Select from a list");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Location*"`, async () => {
    await page.locator("//LABEL[@id='VirtualPicklistLocationIds-label'][normalize-space() = \"Location*\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Location*"`, async () => {
    await page.locator("(//LABEL[normalize-space() = \"Location*\"])[1]/following::LABEL[normalize-space() = \"Select all\"]").nth(0).click();
  });

  await test.step(`Click "In-Person Location Type*"`, async () => {
    await page.locator("//LABEL[@id='DetailedAppointmentBlockInPersonLocationTypeId-label'][normalize-space() = \"In-Person Location Type*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='input-qt5bsm-lookup'][@name='DetailedAppointmentBlockInPersonLocationTypeId']").nth(0).click();
  });

  await test.step(`Type "Select from a list"`, async () => {
    await page.keyboard.type("Select from a list");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Location*"`, async () => {
    await page.locator("//LABEL[@id='VirtualPicklistLocationIds-label'][normalize-space() = \"Location*\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Location*"`, async () => {
    await page.locator("(//LABEL[normalize-space() = \"Location*\"])[2]/following::LABEL[normalize-space() = \"Select all\"]").nth(0).click();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Click "-- All Student Groups --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- All Student Groups --\"]").nth(0).click();
  });

  await test.step(`Click "-- All Student Groups --"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"-- All Student Groups --\"]/following::LABEL[normalize-space() = \"Select all\"]").nth(0).click();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Current Adviser\\'s Students Only*\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Create Block"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Create Block\"]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \\'Bypass \"On Next Login\" (Admin Only)\\']";
  });

  await test.step(`Click element`, async () => {
    await page.locator(BYPASS_ON_NEXT_LOGIN).nth(0).click();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("(//button[contains(@class,\"btn btn-calendar\")])[last()]").nth(0).click();
  });

  await test.step(`Click "List"`, async () => {
    await page.locator(RBTN_LIST).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TT-DATE-TIME-DISPLAY").nth(0).click();
  });

  await test.step(`Hover "Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Appointment Block\"]").nth(0).hover();
  });

  await test.step(`Click "View Available Slots"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"View Available Slots\"]").nth(0).click();
  });

  await test.step(`Hover "Preferred Appointment Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Preferred Appointment Type*\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='SelectedAppointmentType']").nth(0).click();
  });

  await test.step(`Type "General Career Coaching"`, async () => {
    await page.keyboard.type("General Career Coaching");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Time*\"]").nth(0).hover();
  });

  await test.step(`Click "3:30pm PDT"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"3:30pm PDT\"]").nth(0).click();
  });

  await test.step(`Hover "Location Type*"`, async () => {
    await page.locator("//LABEL[@id='LocationTypeId-label'][normalize-space() = \"Location Type*\"]").nth(0).hover();
  });

  await test.step(`Click "In-Person"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"In-Person\"]").nth(0).click();
  });

  await test.step(`Click "Preferred Location*"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Preferred Location*\")]").nth(0).click();
  });

  await test.step(`Click "Preferred Location*"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Preferred Location*\")]/following::select").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Room 101"`, async () => {
    await page.keyboard.type("Room 101");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Book Appointment"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Book Appointment\"]").nth(0).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Hover "Time"`, async () => {
    await page.locator("//dt[normalize-space()=\"Time\"]").nth(0).hover();
  });

  await test.step(`Verify "3:30pm - 4:00pm PDT"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Time\"]/following-sibling::dd//tt-date-time-display").nth(0)).toContainText("3:30pm - 4:00pm PDT");
  });

  await test.step(`Hover "Career Adviser"`, async () => {
    await page.locator("//dt[normalize-space()=\"Career Adviser\"]").nth(0).hover();
  });

  await test.step(`Verify "e2e Test Admin"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Career Adviser\"]/following-sibling::dd//div[@class=\"adviser-summary\"]").nth(0)).toHaveText("e2e Test Admin");
  });

  await test.step(`Hover "Preferred Type"`, async () => {
    await page.locator("//dt[normalize-space()=\"Preferred Type\"]").nth(0).hover();
  });

  await test.step(`Verify "General Career Coaching"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Preferred Type\"]/following-sibling::dd").nth(0)).toHaveText("General Career Coaching");
  });

  await test.step(`Hover "Location"`, async () => {
    await page.locator("//dt[normalize-space()=\"Location\"]").nth(0).hover();
  });

  await test.step(`Verify "Room 101"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Location\"]/following-sibling::dd").nth(0)).toHaveText("Room 101");
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(1).click();
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "3:30pm - 4:00pm PDT"`, async () => {
    await page.locator("//TT-DATE-TIME-DISPLAY[normalize-space()=\"3:30pm - 4:00pm PDT\"]").nth(0).hover();
  });

  await test.step(`Verify "Test Student #0001"`, async () => {
    await expect(page.locator("//TT-DATE-TIME-DISPLAY[normalize-space()=\"3:30pm - 4:00pm PDT\"]/following::p[contains(@class,\"student\")]").nth(0)).toHaveText("Test Student #0001");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator(NAV_APPOINTMENTS).nth(0).click();
  });

  await test.step(`Click "Test Student #0001 (e2e Test Admin) – 3…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Test Student #0001 (e2e Test Admin) – 3:30pm- 4pm\"]").nth(0).click();
  });

  await test.step(`Hover "Time"`, async () => {
    await page.locator("//dt[normalize-space()=\"Time\"]").nth(0).hover();
  });

  await test.step(`Verify "3:30pm - 4:00pm PDT"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Time\"]/following-sibling::dd//tt-date-time-display").nth(0)).toContainText("3:30pm - 4:00pm PDT");
  });

  await test.step(`Hover "Career Adviser"`, async () => {
    await page.locator("//dt[normalize-space()=\"Career Adviser\"]").nth(0).hover();
  });

  await test.step(`Verify "e2e Test Admin"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Career Adviser\"]/following-sibling::dd//div[@class=\"adviser-summary\"]").nth(0)).toHaveText("e2e Test Admin");
  });

  await test.step(`Hover "Preferred Type"`, async () => {
    await page.locator("//dt[normalize-space()=\"Preferred Type\"]").nth(0).hover();
  });

  await test.step(`Verify "General Career Coaching"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Preferred Type\"]/following-sibling::dd").nth(0)).toHaveText("General Career Coaching");
  });

  await test.step(`Hover "Location"`, async () => {
    await page.locator("//dt[normalize-space()=\"Location\"]").nth(0).hover();
  });

  await test.step(`Verify "Room 101"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Location\"]/following-sibling::dd").nth(0)).toHaveText("Room 101");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][normalize-space(translate(., '\\u00A0', ' ')) = \"Cancel Appointment\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel the Appointment"`, async () => {
    await page.locator("//H3[normalize-space() = \"Cancel the Appointment\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure about this cancellation? O…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure about this cancellation? Once canceled, this time slot will be re-open to other students, Re-booking the same slot will not be guaranteed.\"]").nth(1).hover();
  });

  await test.step(`Hover "No, return to the appointment"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"No, return to the appointment\"]").nth(0).hover();
  });

  await test.step(`Click "Yes, cancel it"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes, cancel it\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Admin – 3:30pm- 6:30pm"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Admin – 3:30pm- 6:30pm\"]").nth(0).click();
  });

  await test.step(`Hover "Appointment Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Appointment Block\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@aria-label=\"Show dropdown menu\"]/ancestor::button").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator("//A[@role=\"button\"][contains(normalize-space(),\"Edit\")]").nth(0).click();
  });

  await test.step(`Hover "Edit Appointment Block"`, async () => {
    await page.locator("//H1[normalize-space() = \"Edit Appointment Block\"]").nth(0).hover();
  });

  await test.step(`Hover "This block is part of a recurring appoi…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"This block is part of a recurring appointment block series.\"]").nth(0).hover();
  });

  await test.step(`Click "Delete Block"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Block\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Recurring Block"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Recurring Block\"]").nth(0).hover();
  });

  await test.step(`Hover "Would you like to permanently delete on…"`, async () => {
    await page.locator("//P[normalize-space() = \"Would you like to permanently delete only this block, or this and all future blocks in the series?\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Only This"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Only This\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete Following"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Following\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Delete Following"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Following\"]").nth(0).click();
  });

  await test.step(`Hover "Delete All Following Appointment Blocks"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete All Following Appointment Blocks\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure about this deletion? This …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure about this deletion? This and all future time blocks will be deleted.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Yes, delete all"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Yes, delete all\"]").nth(0).click();
  });

});
