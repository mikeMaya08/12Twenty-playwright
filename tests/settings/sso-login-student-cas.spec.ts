// TC: TC63396
// SSO - Login - Student - CAS

import { test, expect } from '@playwright/test';
import { MODAL_ANNOUNCEMENTS_CT, NAV_HOME } from '@config/selectors';

test("SSO - Login - Student - CAS - TC63396", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-campuswide.qa-12twenty.com/Login?isLogout=true', {timeout: 90000});
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Login to continue to E2E-CPW"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Login to continue to E2E-CPW\")]").nth(0).hover();
  });

  await test.step(`Hover "Login with your E2E-CPW SSO"`, async () => {
    await page.locator("//A[contains(text(),\"Login with your E2E-CPW SSO\")]").nth(0).hover();
  });

  await test.step(`Hover "or"`, async () => {
    await page.locator("//SPAN[contains(text(),\"or\")]").nth(0).hover();
  });

  await test.step(`Hover "Student/Alumni Log In"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student/Alumni Log In\")]").nth(0).hover();
  });

  await test.step(`Click "Login with your E2E-CPW SSO"`, async () => {
    await page.locator("//A[contains(text(),\"Login with your E2E-CPW SSO\")]").nth(0).click();
  });

  await test.step(`Hover "12Twenty Cas Identity Provider"`, async () => {
    await page.locator("//H1[contains(text(),\"12Twenty Cas Identity Provider\")]").nth(0).hover();
  });

  await test.step(`Hover "Is V2: True | ReturnUrl: https://sso.qa…"`, async () => {
    await page.locator("//P[normalize-space() = \"Is V2: True | ReturnUrl: https://sso.qa-12twenty.com/cas/auth?school=e2e-tests-campuswide&userTypeId=2\"]").nth(0).hover();
  });

  await test.step(`Fill "e2e.student.fullaccess1"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='ssoId'][@placeholder='ssoid']").nth(0).fill("e2e.student.fullaccess1");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='password'][@name='password']").nth(0).click();
  });

  await test.step(`Type "ssoWKR23TYedzfDSDoed$rfn#JRgf"`, async () => {
    await page.keyboard.type("ssoWKR23TYedzfDSDoed$rfn#JRgf");
    await page.locator("//BUTTON[@type='submit'][contains(text(),\"Submit\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Hover "Announcements"`, async () => {
    await page.locator(MODAL_ANNOUNCEMENTS_CT).nth(0).hover();
  });

  await test.step(`Hover "Outcomes"`, async () => {
    await page.locator("//H3[contains(text(),\"Outcomes\")]").nth(0).hover();
  });

});
