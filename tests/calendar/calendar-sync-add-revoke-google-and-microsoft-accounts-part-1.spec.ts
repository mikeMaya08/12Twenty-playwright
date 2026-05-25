// TC: TC_A77940
// Calendar Sync - Add/Revoke Google and Microsoft Accounts - Part 1

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_GENERAL, NAV_HOME, SPAN_E2E_TEST_STUDENT } from '@config/selectors';

test("Calendar Sync - Add/Revoke Google and Microsoft Accounts - Part 1 - TC_A77940", async ({ page, context }) => {
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

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(0).click();
  });

  await test.step(`Click "Security"`, async () => {
    await page.locator("//A[normalize-space() = \"Security\"]").nth(0).click();
  });

  await test.step(`Click "Integrations"`, async () => {
    await page.locator("//A[normalize-space() = \"Integrations\"]").nth(0).click();
  });

  await test.step(`Hover "Calendar Sync"`, async () => {
    await page.locator("//H3[normalize-space() = \"Calendar Sync\"]").nth(0).hover();
  });

  await test.step(`Hover "Calendar Access Authorization"`, async () => {
    await page.locator("//DT[contains(text(),\"Calendar Access Authorization\")]").nth(0).hover();
  });

  await test.step(`Click "login-microsoft Microsoft"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"login-microsoft Microsoft\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Sign in"`, async () => {
    await page.locator("//DIV[@role='heading'][normalize-space() = \"Sign in\"]").nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='email'][@name='loginfmt'][@id='i0116'][@placeholder='Email, phone, or Skype']").nth(0).fill("veronica.autmtn@outlook.com");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='submit'][@id='idSIButton9']").nth(0).click();
  });

  await test.step(`Hover "Enter your password"`, async () => {
    await page.locator("//H1[normalize-space() = \"Enter your password\"]").nth(0).hover();
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@name='passwd'][@id='passwordEntry'][@placeholder='']").nth(0).fill("MuukTest1234!");
  });

  await test.step(`Click "Next"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Next\"]").nth(0).click();
  });

  await test.step(`Click "Verify"`, async () => {
    await page.locator("//*[normalize-space()=\"Verify\" or normalize-space()=\"Next\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Yes\"]").nth(0).click();
  });

});
