// TC: TC_A79344
// Calendar Sync - Add/Revoke Google and Microsoft Accounts - Part 2

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  LABEL_NO,
  LABEL_YES,
  MODAL_PLEASE_CONFIRM,
  NAV_HOME,
  RBTN_CANCEL,
  RBTN_EDIT,
  RBTN_SAVE_CHANGES,
  SPAN_E2E_TEST_STUDENT,
} from '@config/selectors';

test("Calendar Sync - Add/Revoke Google and Microsoft Accounts - Part 2 - TC_A79344", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
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

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//A[contains(normalize-space(),\"Account Settings\")]").nth(0).click();
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H2[normalize-space() = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Integrations"`, async () => {
    await page.locator("//A[normalize-space() = \"Integrations\"]").nth(0).click();
  });

  await test.step(`Hover "Calendar Sync"`, async () => {
    await page.locator("//H3[normalize-space() = \"Calendar Sync\"]").nth(0).hover();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(3).click();
  });

  await test.step(`Hover "Edit Your Calendar Sync Preferences"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Your Calendar Sync Preferences\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from 12Twenty to my personal calendar*\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from my personal calendar to 12twenty*\"]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
    await page.waitForTimeout(20000);
  });

  await test.step(`Click "My Calendar"`, async () => {
    await page.locator("//A[normalize-space() = \"My Calendar\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]";
    await page.reload();
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Muuktest/12twenty Testing – 11am- 11:30…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest/12twenty Testing – 11am- 11:30…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest/12twenty Testing – 11am- 11:30…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest/12twenty Testing – 11am- 11:30…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Account Settings\"]").nth(0).click();
  });

  await test.step(`Click "Integrations"`, async () => {
    await page.locator("//A[normalize-space() = \"Integrations\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(3).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from 12Twenty to my personal calendar*\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from my personal calendar to 12twenty*\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(1).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "login-microsoft Revoke"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"login-microsoft Revoke\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM).nth(0).hover();
  });

  await test.step(`Hover "This will prevent synchronization with …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"This will prevent synchronization with your external calendar. Once you revoke authorization you can re-authorize at any time. Are you sure you would like to revoke authorization?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "My Calendar"`, async () => {
    await page.locator("//A[normalize-space() = \"My Calendar\"]").nth(0).click();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForLoadState('load');
    await page.waitForTimeout(3000);
  });

});
