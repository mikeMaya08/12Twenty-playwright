// TC: TC83327
// Events – Waitlisted Student Auto-Promotion on Cancellation

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE,
  H1_HOST_AN_EVENT,
  INPUT_DATE,
  INPUT_EMPLOYER_KEYWORD,
  INPUT_END_TIME,
  INPUT_START_DATE,
  INPUT_START_TIME,
  INPUT_TIME,
  LABEL_SELECT_ALL,
  LINK_TEST_STUDENT_0001,
  LOGIN_AS_BTN,
  MULTI_SELECT_VALUE,
  NAV_ADVANCED_SEARCH,
  NAV_EVENTS,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  RBTN_DELETE,
} from '@config/selectors';

test("Events – Waitlisted Student Auto-Promotion on Cancellation - TC83327", async ({ page, context }) => {
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Verify "Events"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Events\"]").nth(0)).toHaveText("Events");
  });

  await test.step(`Click "Host an Event"`, async () => {
    await page.locator("//A[normalize-space() = \"Host an Event\"]").nth(0).click();
  });

  await test.step(`Verify "Host an Event"`, async () => {
    await expect(page.locator(H1_HOST_AN_EVENT).nth(0)).toHaveText("Host an Event");
  });

  await test.step(`Verify "General Info"`, async () => {
    await expect(page.locator("//H2[normalize-space() = \"General Info\"]").nth(0)).toHaveText("General Info");
  });

  await test.step(`Verify "Event Name*"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Event Name*\"]").nth(0)).toHaveText("Event Name*");
  });

  await test.step(`Fill "Waitlist Event Test"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Event Name'][@type='text']").nth(0).fill("Waitlist Event Test");
  });

  await test.step(`Verify "Event Type*"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Event Type*\"]").nth(0)).toHaveText("Event Type*");
  });

  await test.step(`Select "number:1499993124744"`, async () => {
    await page.locator("//SELECT[@id='EventTypeId'][@name='EventTypeId']").nth(0).selectOption("number:1499993124744");
  });

  await test.step(`Verify "Event Format"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Event Format\"]").nth(0)).toHaveText("Event Format");
  });

  await test.step(`Select "number:3"`, async () => {
    await page.locator("//SELECT[@id='EventFormatId'][@name='EventFormatId']").nth(0).selectOption("number:3");
  });

  await test.step(`Verify "# of Attendees Permitted*"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"# of Attendees Permitted*\"]").nth(0)).toHaveText("# of Attendees Permitted*");
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//INPUT[@id='TotalSeats'][@name='TotalSeats'][@placeholder='# of Attendees Permitted'][@type='number']").nth(0).fill("1");
  });

  await test.step(`Hover "Enable Waitlist"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Enable Waitlist\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Enable Waitlist\")]//following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Verify "Dress Attire*"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Dress Attire*\"]").nth(0)).toHaveText("Dress Attire*");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='DressAttireId'][@name='DressAttireId']").nth(0).selectOption("number:1");
  });

  await test.step(`Verify "Work Authorization Requirement*"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Work Authorization Requirement*\"]").nth(0)).toHaveText("Work Authorization Requirement*");
  });

  await test.step(`Click "-- Work Authorization Requirement --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Work Authorization Requirement --\"]").nth(0).click();
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await expect(page.locator("//H2[normalize-space() = \"Event Dates\"]").nth(0)).toHaveText("Event Dates");
  });

  await test.step(`Verify "Event Date and Time*"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Event Date and Time*\"]").nth(0)).toHaveText("Event Date and Time*");
  });

  await test.step(`Fill "04/14/2027"`, async () => {
    await page.locator(INPUT_START_DATE).nth(0).fill("04/14/2027");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator(INPUT_START_TIME).nth(0).fill("5:00pm");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator(INPUT_END_TIME).nth(0).fill("8:00pm");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await expect(page.locator("//LABEL[normalize-space() = \"Student Registration*\"]").nth(0)).toHaveText("Student Registration*");
  });

  await test.step(`Fill "03/30/2026"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("03/30/2026");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator(INPUT_TIME).nth(0).fill("5:00pm");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator("//DIV[normalize-space() = \"Enterprise Solutions\"]").nth(1).fill("04/13/2027");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator("//DIV[normalize-space() = \"BGP Monitoring\"]").nth(0).fill("5:00pm");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await expect(page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Publish Date *\"]").nth(0)).toHaveText("Student Publish Date *");
  });

  await test.step(`Fill "03/30/2026"`, async () => {
    await page.locator("//DIV[normalize-space() = \"API Monitoring\"]").nth(0).fill("03/30/2026");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator("//DIV[normalize-space() = \"DNS Monitoring\"]").nth(0).fill("5:00pm");
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await expect(page.locator("//H2[normalize-space() = \"Event Description\"]").nth(0)).toHaveText("Event Description");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(1).click();
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await expect(page.locator("//H2[normalize-space() = \"Primary Event Contact\"]").nth(0)).toHaveText("Primary Event Contact");
  });

  await test.step(`Click "Use My Information"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Use My Information\"]").nth(0).click();
  });

  await test.step(`Verify "Contact Phone"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Contact Phone\"]").nth(0)).toHaveText("Contact Phone");
  });

  await test.step(`Fill "2222222222"`, async () => {
    await page.locator("//INPUT[@id='ContactPhone'][@name='ContactPhone'][@placeholder='Contact Phone'][@type='text']").nth(0).fill("2222222222");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(1).click();
  });

  await test.step(`Verify "This event has been approved. Any edits…"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"This event has been approved. Any edits will take effect immediately.\"]").nth(0)).toContainText("This event has been approved. Any edits will take effect immediately.");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tt-action-dropdown[@ng-if=\"$ctrl.currentUser.IsEmployer || $ctrl.currentUser.IsMasterAdmin || $ctrl.event.State.hasAnyActionType($ctrl.eventCommandTypeId.Duplicate, $ctrl.eventCommandTypeId.Delete, $ctrl.eventCommandTypeId.Cancel, $ctrl.eventCommandTypeId.GenerateNameTag, $ctrl.eventCommandTypeId.Update)\"]").nth(0).click();
  });

  await test.step(`Click "12twenty"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"12twenty\"]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@role=\"button\"]/following-sibling::tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Verify "Events"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Events\"]").nth(0)).toHaveText("Events");
  });

  await test.step(`Fill "Waitlist Event Test"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Waitlist Event Test");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await expect(page.locator("//SPAN[normalize-space() = \"Registration Open\"]").nth(1)).toHaveText("Registration Open");
  });

  await test.step(`Verify "Not Registered"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Not Registered\"]").nth(2)).toHaveText("Not Registered");
  });

  await test.step(`Click "Waitlist Event Test"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Waitlist Event Test\"]").nth(3).click();
  });

  await test.step(`Click "Register Now"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Register Now\"]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step(`Verify "Are you sure you want to register for t…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to register for this event?\"]").nth(0)).toHaveText("Are you sure you want to register for this event?");
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Verify "Registration Complete"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Registration Complete\"]").nth(0)).toHaveText("Registration Complete");
  });

  await test.step(`Click "Go Back to Event Page"`, async () => {
    await page.locator("//A[normalize-space() = \"Go Back to Event Page\"]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(1).click();
  });

  await test.step(`Click "Test Student #0002"`, async () => {
    await page.locator("//A[normalize-space() = \"Test Student #0002\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@role=\"button\"]/following-sibling::tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Verify "Events"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Events\"]").nth(0)).toHaveText("Events");
  });

  await test.step(`Fill "Waitlist Event Test"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Waitlist Event Test");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await expect(page.locator("//SPAN[normalize-space() = \"Registration Open\"]").nth(1)).toHaveText("Registration Open");
  });

  await test.step(`Verify "Not Registered"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Not Registered\"]").nth(2)).toHaveText("Not Registered");
  });

  await test.step(`Click "Waitlist Event Test"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Waitlist Event Test\"]").nth(3).click();
  });

  await test.step(`Click "Register for Waitlist"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Register for Waitlist\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Are you sure you want to register for t…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to register for the waitlist?\"]").nth(0)).toHaveText("Are you sure you want to register for the waitlist?");
  });

  await test.step(`Click "Register"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Register\"]").nth(0).click();
  });

  await test.step(`Verify "Registration Complete - Waitlist"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Registration Complete - Waitlist\"]").nth(0)).toHaveText("Registration Complete - Waitlist");
  });

  await test.step(`Click "Go Back to Event Page"`, async () => {
    await page.locator("//A[normalize-space() = \"Go Back to Event Page\"]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Events"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Events\"]").nth(0)).toHaveText("Events");
  });

  await test.step(`Fill "Waitlist Event Test"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Waitlist Event Test");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//SPAN[normalize-space() = \"Waitlist Event Test\"]").nth(3).click();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered Students (1)\"]").nth(0).click();
  });

  await test.step(`Verify "Registered Students"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Registered Students\"]").nth(0)).toHaveText("Registered Students");
  });

  await test.step(`Verify "Waitlist Auto Promote Enabled Auto Prom…"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Waitlist Auto Promote Enabled Auto Promote Disabled\"]").nth(0)).toHaveText("Waitlist Auto Promote Enabled Auto Promote Disabled");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
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

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Verify "Events"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Events\"]").nth(0)).toHaveText("Events");
  });

  await test.step(`Click "Advanced Search"`, async () => {
    await page.locator(NAV_ADVANCED_SEARCH).nth(0).click();
  });

  await test.step(`Fill "Waitlist Event Test"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Waitlist Event Test");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await expect(page.locator("//SPAN[normalize-space() = \"Registered\"]").nth(2)).toHaveText("Registered");
  });

  await test.step(`Click "Waitlist Event Test"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Waitlist Event Test\"]").nth(3).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Verify "Are you sure you want to cancel your re…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel your registration for this event?\"]").nth(1)).toHaveText("Are you sure you want to cancel your registration for this event?");
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

  await test.step(`Fill "Waitlist Event Test"`, async () => {
    await page.locator(INPUT_EMPLOYER_KEYWORD).nth(0).fill("Waitlist Event Test");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//SPAN[normalize-space() = \"Waitlist Event Test\"]").nth(3).click();
  });

  await test.step(`Click "Registered Students (1)"`, async () => {
    await page.locator("//A[normalize-space() = \"Registered Students (1)\"]").nth(0).click();
  });

  await test.step(`Verify "Registered Students"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Registered Students\"]").nth(0)).toHaveText("Registered Students");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tt-action-dropdown[@ng-if=\"$ctrl.event.State.HasManageAccess || $ctrl.event.State.HasOwnerAccess\"]").nth(0).click();
  });

  await test.step(`Click "Cancel Registration"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Cancel Registration\"]").nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tt-action-dropdown[@ng-if=\"$ctrl.currentUser.IsEmployer || $ctrl.currentUser.IsMasterAdmin || $ctrl.event.State.hasAnyActionType($ctrl.eventCommandTypeId.Duplicate, $ctrl.eventCommandTypeId.Delete, $ctrl.eventCommandTypeId.Cancel, $ctrl.eventCommandTypeId.GenerateNameTag, $ctrl.eventCommandTypeId.Update)\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Verify "Are you sure you want to permanently de…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this event?\"]").nth(1)).toHaveText("Are you sure you want to permanently delete this event?");
  });

  await test.step(`Click "Delete Event"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Event\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(0).click();
  });

});
