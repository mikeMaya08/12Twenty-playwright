// TC: TC_A84144
// Students - Send Passport and Verify Images Display in Email

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  BTN_OPTIONS_UPPER,
  BTN_RESET_FILTERS,
  BYPASS_ON_NEXT_LOGIN,
  H1_STUDENTS_ALUMNI,
  LINK_TEST_STUDENT_0001,
  LOGIN_AS_BTN,
  LOGOUT_LINK,
  NAV_EMAIL_ACTIVITY,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Students - Send Passport and Verify Images Display in Email - TC_A84144", async ({ page, context }) => {
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
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \\'Bypass \"On Next Login\" (Admin Only)\\']";
  });

  await test.step(`Click element`, async () => {
    await page.locator(BYPASS_ON_NEXT_LOGIN).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Test Student #0001\"]").nth(0).click();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//A[contains(normalize-space(),\"Account Settings\")]").nth(0).click();
  });

  await test.step(`Hover "Your 12twenty PassportTM"`, async () => {
    await page.locator("//H3[normalize-space() = \"Your 12twenty PassportTM\"]").nth(0).hover();
  });

  await test.step(`Click "sending yourself an email"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"sending yourself an email\"]").nth(0).click();
  });

  await test.step(`Hover "You should receive the email shortly."`, async () => {
    await page.locator("//DIV[normalize-space() = \"You should receive the email shortly.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator(NAV_EMAIL_ACTIVITY).nth(0).click();
  });

  await test.step(`Click "E2E-CPW QR Code"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E-CPW QR Code\"]").nth(0).click();
  });

  await test.step(`Hover "Dear Test Student #0001,"`, async () => {
    await page.locator("//P[normalize-space() = \"Dear Test Student #0001,\"]").nth(0).hover();
  });

  await test.step(`Hover "Here is your 12twenty PassportTM QR cod…"`, async () => {
    await page.locator("//P[normalize-space() = \"Here is your 12twenty PassportTM QR code:\"]").nth(0).hover();
  });

  await test.step(`Hover "If you would like to add your QR code t…"`, async () => {
    await page.locator("//P[normalize-space() = \"If you would like to add your QR code to your Apple Wallet or Google Pay, please click the link below while using your mobile device.\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//p//a").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//p//a").nth(0).hover();
  });

});
