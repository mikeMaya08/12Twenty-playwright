// TC: TC63691
// Students & Alumni - Admin Email Student from Profile

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_MORE_FILTERS,
  BTN_OK_CONTAINS,
  H1_STUDENTS_ALUMNI,
  INPUT_SUBJECT,
  MODAL_SUCCESS_CT,
  NAV_BACK_TO_LIST,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students & Alumni - Admin Email Student from Profile - TC63691", async ({ page, context }) => {
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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.reload();
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Student - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student - General\")]").nth(0).hover();
  });

  await test.step(`Fill "Signed Up"`, async () => {
    await page.locator("//INPUT[@id='search-filter-input'][@type='text'][contains(@placeholder,'Search ')]").nth(0).fill("Signed Up");
  });

  await test.step(`Hover "Signed Up"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Signed Up\"]").nth(0).hover();
  });

  await test.step(`Click "Signed Up"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Signed Up\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//label[contains(normalize-space(),\"Yes\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//A[normalize-space()=\"Test Student #0001\"]").nth(0).click();
  });

  await test.step(`Hover "Test Student #0001"`, async () => {
    await page.locator("//H1[normalize-space() = \"Test Student #0001\"]").nth(0).hover();
  });

  await test.step(`Hover "Send Email"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Send Email\"]").nth(0).hover();
  });

  await test.step(`Click "Send Email"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Send Email\"]").nth(0).click();
  });

  await test.step(`Hover "Send email to Test Student #0001"`, async () => {
    await page.locator("//H3[normalize-space() = \"Send email to Test Student #0001\"]").nth(0).hover();
  });

  await test.step(`Hover "Test Student #0001"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Test Student #0001\")]").nth(0).hover();
  });

  await test.step(`Hover "Bcc:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Bcc:\")]").nth(0).hover();
  });

  await test.step(`Hover "Subject:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Subject:\")]").nth(0).hover();
  });

  await test.step(`Fill "Welcome (Muuktest TC)"`, async () => {
    await page.locator(INPUT_SUBJECT).nth(0).fill("Welcome (Muuktest TC)");
  });

  await test.step(`Hover "Message:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Message:\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@id,\"editor\")]").nth(0).click();
  });

  await test.step(`Type "Testing sending Emails (Muuktest Automa…"`, async () => {
    await page.keyboard.type("Testing sending Emails (Muuktest Automated Test Case)");
    await page.locator("//BUTTON[contains(text(),\"Send\")]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Email successfully sent to student."`, async () => {
    await page.locator("//DIV[contains(text(),\"Email successfully sent to student.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Click "More"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"More\"]").nth(0).click();
  });

  await test.step(`Click "Emails"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Emails\")]").nth(0).click();
  });

  await test.step(`Verify "Delivered"`, async () => {
    await expect(page.locator("//*[normalize-space() = \"Delivered\"]").nth(0)).toHaveText("Delivered");
  });

  await test.step(`Click "Welcome"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Welcome\")]").nth(0).click();
  });

  await test.step(`Verify "Testing sending Emails (Muuktest Automa…"`, async () => {
    await expect(page.locator("//P[contains(text(),\"Testing sending Emails (Muuktest Automat\")]").nth(0)).toHaveText("Testing sending Emails (Muuktest Automated Test Case)");
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Ok\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email Activity\"]").nth(0).click();
  });

  await test.step(`Hover "Email Activity"`, async () => {
    await page.locator("//H1[normalize-space() = \"Email Activity\"]").nth(0).hover();
  });

  await test.step(`Click "Welcome (Muuktest TC)"`, async () => {
    await page.locator("//A[normalize-space() = \"Welcome (Muuktest TC)\"]").nth(0).click();
  });

  await test.step(`Hover "Welcome (Muuktest TC)"`, async () => {
    await page.locator("//H1[normalize-space() = \"Welcome (Muuktest TC)\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//DD[contains(text(),\"e2e Test Admin\")]").nth(0).hover();
  });

  await test.step(`Hover "student-1@e2e-tests-campuswide.com"`, async () => {
    await page.locator("//span[contains(normalize-space(),\"student-1@e2e-tests-campuswide.com\")]").nth(0).hover();
  });

  await test.step(`Hover "Testing sending Emails"`, async () => {
    await page.locator("//*[contains(text(),\"Testing sending Emails\")]").nth(0).hover();
  });

  await test.step(`Hover "Testing sending Emails (Muuktest Automa…"`, async () => {
    await page.locator("//P[normalize-space() = \"Testing sending Emails (Muuktest Automated Test Case)\"]").nth(0).hover();
  });

  await test.step(`Click "Back to List"`, async () => {
    await page.locator(NAV_BACK_TO_LIST).nth(0).click();
  });

  await test.step(`Click "Scheduled"`, async () => {
    await page.locator("//A[normalize-space() = \"Scheduled\"]").nth(0).click();
  });

  await test.step(`Click "Bounced Recipients"`, async () => {
    await page.locator("//A[normalize-space() = \"Bounced Recipients\"]").nth(0).click();
  });

  await test.step(`Hover "Bounced Recipients"`, async () => {
    await page.locator("//H1[normalize-space() = \"Bounced Recipients\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//P[normalize-space() = \"This page lists students and contacts whose email addresses have permanently bounced due to issues like invalid addresses, non-existent domains, or blocks by the recipient\\'s email server. If you believe an email address is still valid, you can remove it from the bounce list.\"]").nth(0).hover();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(1).click();
  });

  await test.step(`Click "Students"`, async () => {
    await page.locator("//A[normalize-space() = \"Students\"]").nth(0).click();
  });

});
