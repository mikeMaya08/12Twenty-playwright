// TC: TC66112
// 12TE Events - Employer user adds a multi-school event to multiple schools

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTION,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  CKE_DESCRIPTION,
  INPUT_CHECKBOX_MULTI,
  INPUT_END_TIME,
  INPUT_RADIO_MULTI,
  INPUT_SEARCH,
  INPUT_START_DATE,
  INPUT_START_TIME,
  LABEL_TIMEZONE_CITY,
  LABEL_TIME_ZONE,
  MODAL_PLEASE_CONFIRM_CT,
  MODAL_SUCCESS_CT,
  NAV_EVENTS,
  RBTN_CANCEL_CONTAINS,
  RBTN_CONTINUE_CONT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Events - Employer user adds a multi-school event to multiple schools - TC66112", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Hover "Events"`, async () => {
    await page.locator("//H1[contains(text(),\"Events\")]").nth(0).hover();
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Hover "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).hover();
  });

  await test.step(`Click "Business"`, async () => {
    await page.locator("//H3[contains(text(),\"Business\")]").nth(0).click();
  });

  await test.step(`Click "Law"`, async () => {
    await page.locator("//H3[contains(text(),\"Law\")]").nth(0).click();
  });

  await test.step(`Click "Specialized Business Masters"`, async () => {
    await page.locator("//H3[contains(text(),\"Specialized Business Masters\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Continue\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni from non-12twenty sch…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Students & Alumni from non-12twenty schools\"]").nth(0).click();
  });

  await test.step(`Click "Arizona State University Law School (JD,"`, async () => {
    await page.locator("//DIV[contains(text(),\"Arizona State University Law School (JD,\")]").nth(0).click();
  });

  await test.step(`Click "Barry University Dwayne O. Andreas Schoo"`, async () => {
    await page.locator("//DIV[contains(text(),\"Barry University Dwayne O. Andreas Schoo\")]").nth(0).click();
  });

  await test.step(`Click "Boston College Law School (JD, LLM)"`, async () => {
    await page.locator("//DIV[contains(text(),\"Boston College Law School (JD, LLM)\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Back\")]").nth(0).hover();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H2[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Hover "Event Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0).hover();
  });

  await test.step(`Click "Event Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='CoreEventTypeId'][@name='CoreEventTypeId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[contains(text(),\"Event Format\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@name='FormatId']").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[contains(text(),\"Presenter\")]").nth(0).hover();
  });

  await test.step(`Hover "Event Dates"`, async () => {
    await page.locator("//H2[contains(text(),\"Event Dates\")]").nth(0).hover();
  });

  await test.step(`Hover "Time Zone*"`, async () => {
    await page.locator(LABEL_TIME_ZONE).nth(0).hover();
  });

  await test.step(`Fill "Muuk Event Multiple Schools"`, async () => {
    await page.locator("//INPUT[@name='Name'][@type='text'][@placeholder='Event Name']").nth(0).fill("Muuk Event Multiple Schools");
  });

  await test.step(`Hover "Event Format*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Event Format*\"]").nth(0).hover();
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//SELECT[@name='FormatId']").nth(0).pressSequentially("number:1");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='-- Select a Value --'][normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Fill "Chennai"`, async () => {
    await page.locator(INPUT_SEARCH).nth(0).fill("Chennai");
  });

  await test.step(`Click "Chennai, Kolkata, Mumbai, New Delhi (UT…"`, async () => {
    await page.locator(LABEL_TIMEZONE_CITY).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(44).check();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Event Date and Time*\"]").nth(0).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[contains(@class,\"today\")]//following::td").nth(0).click();
  });

  await test.step(`Fill "12:00pm"`, async () => {
    await page.locator(INPUT_START_TIME).nth(0).fill("12:00pm");
  });

  await test.step(`Fill "11:30pm"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("11:30pm");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator(INPUT_START_TIME).nth(1).fill("12:00am");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator("//INPUT[@name='endDateText'][@placeholder='MM/DD/YYYY'][@type='text'][@title='End Date']").nth(0).click();
  });

  await test.step(`Fill "11:00am"`, async () => {
    await page.locator(INPUT_END_TIME).nth(0).fill("11:00am");
  });

  await test.step(`Click "Work Authorization"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Work Authorization\")]").nth(0).click();
  });

  await test.step(`Click "-- Please Select a Work Authorization --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Please Select a Work Authorization --\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(3).click();
  });

  await test.step(`Click "Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Description*\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
  });

  await test.step(`Type "Testing event with multiple schools"`, async () => {
    await page.keyboard.type("Testing event with multiple schools");
    await page.locator("//INPUT[@type='text'][@name='TargetCohort'][@placeholder='Additional Candidate Requirements']").nth(0).fill("MBA");
  });

  await test.step(`Click "Primary Event Contact"`, async () => {
    await page.locator("//H2[contains(text(),\"Primary Event Contact\")]").nth(0).click();
  });

  await test.step(`Click "Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Name*\"]").nth(0).click();
  });

  await test.step(`Fill "John"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactName'][@type='text'][@placeholder='Name']").nth(0).fill("John");
  });

  await test.step(`Click "Phone*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Phone*\"]").nth(0).click();
  });

  await test.step(`Fill "8456321478"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactPhone'][@type='text'][@placeholder='Phone']").nth(0).fill("8456321478");
  });

  await test.step(`Click "Email*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email*\"]").nth(0).click();
  });

  await test.step(`Click "Email"`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactEmail'][@type='text'][@placeholder='Email']").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@name='PrimaryContactEmail'][@type='text'][@placeholder='Email']").nth(0).fill("john@yopmail.com");
  });

  await test.step(`Hover "Registration Document(s)"`, async () => {
    await page.locator("//H2[contains(text(),\"Registration Document(s)\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(1).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(2).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//td[contains(@class,\"today\")]//following::td").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator(RBTN_CONTINUE_CONT).nth(1).click();
  });

  await test.step(`Hover "Event Details"`, async () => {
    await page.locator("//H2[contains(text(),\"Event Details\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(1).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Your event has been submitted to your se"`, async () => {
    await page.locator("//DIV[contains(text(),\"Your event has been submitted to your se\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Muuk Event Multiple Schools"`, async () => {
    await page.locator("//H2[normalize-space() = \"Muuk Event Multiple Schools\"]").nth(0).hover();
  });

  await test.step(`Hover "Virtual Meeting URL Missing"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Virtual Meeting URL Missing\")]").nth(0).hover();
  });

  await test.step(`Hover "Arizona State University Law School (JD,"`, async () => {
    await page.locator("//DIV[contains(text(),\"Arizona State University Law School (JD,\")]").nth(0).hover();
  });

  await test.step(`Hover "Barry University Dwayne O. Andreas Schoo"`, async () => {
    await page.locator("//DIV[contains(text(),\"Barry University Dwayne O. Andreas Schoo\")]").nth(0).hover();
  });

  await test.step(`Hover "Boston College Law School (JD, LLM)"`, async () => {
    await page.locator("//DIV[contains(text(),\"Boston College Law School (JD, LLM)\")]").nth(0).hover();
  });

  await test.step(`Hover "Students & Alumni from non-12twenty sch…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Students & Alumni from non-12twenty schools\"]").nth(0).hover();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//A[normalize-space()=\"Events\"]").nth(0).click();
  });

  await test.step(`Hover "Active"`, async () => {
    await page.locator("//span[contains(text(),\"Active\")]//ancestor::tr//SPAN[contains(text(),\"Muuk Event Multiple Schools\")]").nth(0).hover();
  });

  await test.step(`Verify "Active"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Muuk Event Multiple Schools\")]//ancestor::tr//td//span[contains(@class,\"badge\")][contains(text(),\"Active\")]").nth(0)).toHaveText("Active");
  });

  await test.step(`Click "Active"`, async () => {
    await page.locator("//span[contains(text(),\"Active\")]//ancestor::tr//SPAN[contains(text(),\"Muuk Event Multiple Schools\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Hover "Edit Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Edit Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Duplicate Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Duplicate Event\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).hover();
  });

  await test.step(`Click "Cancel Event"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Cancel Event\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you would like to cancel th"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you would like to cancel th\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//A[normalize-space()=\"Events\"]").nth(0).click();
  });

  await test.step(`Hover "Muuk Event Multiple Schools"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Muuk Event Multiple Schools\")]").nth(0).hover();
  });

  await test.step(`Verify "Canceled"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Muuk Event Multiple Schools\")]//ancestor::tr//td//span[contains(@class,\"badge\")]").nth(0)).toHaveText("Canceled");
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//A[normalize-space()=\"Events\"]").nth(0).click();
  });

  await test.step(`Click "Upcoming"`, async () => {
    await page.locator("//A[contains(text(),\"Upcoming\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Muuk Event Multiple Schools\")]//ancestor::tr//td//span[contains(text(),\"Active\")]";
  });

});
