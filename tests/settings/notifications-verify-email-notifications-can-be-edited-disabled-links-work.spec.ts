// TC: TC_A82518
// Notifications - Verify Email notifications can be edited, disabled, links work

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_SAVE,
  LABEL_OFF,
  NAV_EDIT,
  NAV_HOME,
  NAV_SITE_SETTINGS,
  RBTN_CANCEL,
  RBTN_VIEW_AUDIT,
  SPAN_CLOSE_X,
} from '@config/selectors';

test("Notifications - Verify Email notifications can be edited, disabled, links work - TC_A82518", async ({ page, context }) => {
  let selector = `0`;
  let textContent = `0`;

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

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorships\"]").nth(0).click();
  });

  await test.step(`Hover "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).hover();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Fill "1"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Pending Request Reminder (Hours)\")]//following::INPUT[@name=\"numHoursBeforeSendRequestReminder\"]").nth(0).fill("1");
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//a[normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.reload();
    await page.locator("//A[@role='button'][normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).hover();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//label[contains(normalize-space(),\"Pending Request Reminder (Hours)\")]//following::INPUT[@name=\"numHoursBeforeSendRequestReminder\"]";
  });

  await test.step(`Set value "1"`, async () => {
    textContent = "1";
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "0"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Pending Request Reminder (Hours)\")]//following::INPUT[@name=\"numHoursBeforeSendRequestReminder\"]").nth(0).fill("0");
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//a[normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.reload();
    await page.locator("//A[@role='button'][normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).hover();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Set value "0"`, async () => {
    textContent = "0";
  });

  await test.step(`Click "Pending Request Reminder (Hours)"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Pending Request Reminder (Hours)\")]//following::INPUT[@name=\"numHoursBeforeSendRequestReminder\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
    await page.locator("//a[normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").nth(0).hover();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "E2E Tests Campuswide Mentorship Program"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set value "0"`, async () => {
    textContent = "0";
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).click();
  });

  await test.step(`Click "Notifications"`, async () => {
    await page.locator("//A[normalize-space() = \"Notifications\"]").nth(0).click();
  });

  await test.step(`Hover "Email Notification Templates"`, async () => {
    await page.locator("//H3[normalize-space() = \"Email Notification Templates\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship Request"`, async () => {
    await page.locator("//a[normalize-space()=\"Mentorship Request\"]").nth(0).click();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Email Enabled\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
  });

  await test.step(`Click "On"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"On\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Email Enabled\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
  });

  await test.step(`Click "Off"`, async () => {
    await page.locator(LABEL_OFF).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Email Enabled\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Send Me a Test Email"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send Me a Test Email\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "Test"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-bv1h9-text'][@name=''][@placeholder='Description']").nth(0).fill("Test");
  });

  await test.step(`Click "Subject Line"`, async () => {
    await page.locator("//INPUT[@id='subjectLineInput'][@name='Subject'][@placeholder='Subject Line'][@type='text']").nth(0).click();
  });

  await test.step(`Type "-"`, async () => {
    await page.keyboard.type(" - ");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Substitution Tags\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Term"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Graduation Term\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"cke_inner cke_reset\"]").nth(0).click();
  });

  await test.step(`Press PageUp`, async () => {
    await page.keyboard.press("PageUp");
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Type "-"`, async () => {
    await page.keyboard.type(" - ");
    await page.locator("//BUTTON[normalize-space() = \"Add Hyperlink\"]").nth(0).click();
  });

  await test.step(`Type "-"`, async () => {
    await page.keyboard.type(" - ");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Substitution Tags\"]").nth(1).click();
  });

  await test.step(`Click "MenteeFirstName"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"MenteeFirstName\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Verify "Test"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Description\"]/following-sibling::dd").nth(0)).toHaveText("Test");
  });

  await test.step(`Verify "Hi {{MentorFirstName}}, - [link title|h…"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Body\"]/following-sibling::dd//p").nth(0)).toHaveText("Hi {{MentorFirstName}}, - [link title|http://example.com] - {{MenteeFirstName}}");
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).click();
  });

  await test.step(`Click "Mentorship Request Audit Log"`, async () => {
    await page.locator("//H3[normalize-space() = \"Mentorship Request Audit Log\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(1).click();
  });

  await test.step(`Verify "None"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Description\"]//following::div[contains(@class,\"audit-log-diff-description-data\")]//div").nth(0)).toHaveText("None");
  });

  await test.step(`Verify "Test"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Description\"]//following::div[contains(@class,\"audit-log-diff-description-data\")]//div").nth(1)).toHaveText("Test");
  });

  await test.step(`Verify "New Mentorship Request"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Subject\"]//following::div[contains(@class,\"audit-log-diff-description-data\")]//div").nth(0)).toHaveText("New Mentorship Request");
  });

  await test.step(`Verify "New Mentorship Request - {{Student.Grad…"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Subject\"]//following::div[contains(@class,\"audit-log-diff-description-data\")]//div").nth(1)).toHaveText("New Mentorship Request - {{Student.GraduationTerm}}");
  });

  await test.step(`Verify "Hi {{MentorFirstName}},You have a new p…"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Body\"]//following::div[contains(@class,\"audit-log-diff-description-data\")]//div").nth(0)).toHaveText("Hi {{MentorFirstName}},You have a new pending {{MentorshipProgramName}} request from {{MenteeFirstName}} {{MenteeLastName}}!{{MenteeFirstName}} {{MenteeLastName}}: {{MentorshipRequestMessage}}{{AcceptOrDeclineMentorshipLinks}}{{SnoozeMentorshipLinks}}You may also review this request [via the platform|{{MentorshipLinkModule}}]!");
  });

  await test.step(`Verify "Hi {{MentorFirstName}}, - [link title|h…"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Body\"]//following::div[contains(@class,\"audit-log-diff-description-data\")]//div").nth(1)).toHaveText("Hi {{MentorFirstName}}, - [link title|http://example.com] - {{MenteeFirstName}}You have a new pending {{MentorshipProgramName}} request from {{MenteeFirstName}} {{MenteeLastName}}!{{MenteeFirstName}} {{MenteeLastName}}: {{MentorshipRequestMessage}}{{AcceptOrDeclineMentorshipLinks}}{{SnoozeMentorshipLinks}}You may also review this request [via the platform|{{MentorshipLinkModule}}]!");
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_UPPER).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
  });

  await test.step(`Fill "Description"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-bv1h9-text'][@name=''][@placeholder='Description']").nth(0).fill("");
  });

  await test.step(`Click "Subject Line"`, async () => {
    await page.locator("//INPUT[@id='subjectLineInput'][@name='Subject'][@placeholder='Subject Line'][@type='text']").nth(0).click();
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Type "New Mentorship Request"`, async () => {
    await page.keyboard.type("New Mentorship Request");
    await page.locator("//div[@class=\"cke_inner cke_reset\"]").nth(0).click();
  });

  await test.step(`Press PageUp`, async () => {
    await page.keyboard.press("PageUp");
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Type "Hi {{MentorFirstName}},"`, async () => {
    await page.keyboard.type("Hi {{MentorFirstName}},");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Launch Email Studio\"]").nth(0).click();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Verify "Test"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Description\"]/following-sibling::dd").nth(0)).not.toHaveText("Test");
  });

  await test.step(`Verify "Hi {{MentorFirstName}}, - [link title|h…"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Body\"]/following-sibling::dd//p").nth(0)).not.toHaveText("Hi {{MentorFirstName}}, - [link title|http://example.com] - {{MenteeFirstName}}");
  });

});
