// TC: TC_A77814
// 12twenty Passport - Passport can be enabled/disabled and student can trigger email

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  BTN_SAVE_CHANGES_SUBMIT,
  BTN_SEARCH,
  INPUT_SEARCH_USERS,
  LOGIN_AS_USER,
  MODAL_LOGIN_AS_STUDENT,
  MODAL_SUCCESS,
  NAV_BACK_TO_LIST,
  NAV_GENERAL,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_MGMT_SIBLING_BTN,
  OPTIONS_ROW_STUDENT,
  SPAN_E2E_TEST_STUDENT,
} from '@config/selectors';

test("12twenty Passport - Passport can be enabled/disabled and student can trigger email - TC_A77814", async ({ page, context }) => {
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

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(1).click();
  });

  await test.step(`Hover "Enable 12Twenty Passport for Events and…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable 12Twenty Passport for Events and Appointments\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//toggle[@ng-model=\"Settings_111_IsAdminEnabled\"]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(BTN_SAVE_CHANGES_SUBMIT).nth(0).click();
    await page.waitForTimeout(2000);
    await page.reload();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//toggle[@ng-model=\"Settings_111_IsAdminEnabled\"]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(BTN_SAVE_CHANGES_SUBMIT).nth(0).click();
    await page.reload();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(OPTIONS_ROW_STUDENT).nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as e2e Test Student"`, async () => {
    await page.locator(MODAL_LOGIN_AS_STUDENT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You are about to log in as e2e Test Student. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
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

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//A[contains(normalize-space(),\"Account Settings\")]").nth(0).click();
  });

  await test.step(`Hover "Your 12twenty PassportTM"`, async () => {
    await page.locator("//H3[normalize-space() = \"Your 12twenty PassportTM\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV").nth(50).hover();
  });

  await test.step(`Hover "This is your 12twenty PassportTM, which…"`, async () => {
    await page.locator("//P[normalize-space() = \"This is your 12twenty PassportTM, which uniquely identifies you. You can use your 12twenty PassportTM to check in to events or appointments. You may also add your 12twenty PassportTM to your Apple Pay or Google Pay wallet by sending yourself an email. Alternatively, you can print your 12twenty PassportTM and use it to check in to events and appointments.\"]").nth(0).hover();
  });

  await test.step(`Click "sending yourself an email"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"sending yourself an email\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "You should receive the email shortly."`, async () => {
    await page.locator("//DIV[normalize-space() = \"You should receive the email shortly.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email Activity\"]").nth(0).click();
  });

  await test.step(`Hover "E2E-CPW QR Code"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E-CPW QR Code\"]").nth(0).hover();
  });

  await test.step(`Click "E2E-CPW QR Code"`, async () => {
    await page.locator("//A[normalize-space() = \"E2E-CPW QR Code\"]").nth(0).click();
  });

  await test.step(`Click "Back to List"`, async () => {
    await page.locator(NAV_BACK_TO_LIST).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Site Settings\"]").nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(1).click();
  });

  await test.step(`Hover "Enable 12Twenty Passport for Events and…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enable 12Twenty Passport for Events and Appointments\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//toggle[@ng-model=\"Settings_111_IsAdminEnabled\"]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(BTN_SAVE_CHANGES_SUBMIT).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Account Settings\"]").nth(0).click();
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H2[normalize-space() = \"Account Settings\"]").nth(0).hover();
    await page.reload();
  });

});
