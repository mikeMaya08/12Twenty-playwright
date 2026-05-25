// TC: TC_A76131
// SSO - Login - Student - Shibboleth

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';

test("SSO - Login - Student - Shibboleth - TC_A76131", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-law.qa-12twenty.com/Login', {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Click "Login with your E2E-LAW SSO"`, async () => {
    await page.locator("//A[normalize-space() = \"Login with your E2E-LAW SSO\"]").nth(0).click();
  });

  await test.step(`Fill "ssoidptestuser"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='username'][@name='j_username']").nth(0).fill("ssoidptestuser");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='password'][@id='password'][@name='j_password']").nth(0).click();
  });

  await test.step(`Type "2d596nwXI5DpcHmHCEkp147Z4XX0XNbS"`, async () => {
    await page.keyboard.type("2d596nwXI5DpcHmHCEkp147Z4XX0XNbS");
    await page.locator("//BUTTON[@type='submit'][@name='_eventId_proceed'][normalize-space() = \"Login\"]").nth(0).click();
    await page.waitForTimeout(15000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Join the E2E-LAW Platform"`, async () => {
    await page.locator("//H1[normalize-space() = \"Join the E2E-LAW Platform\"]").nth(0).hover();
  });

  await test.step(`Hover "Email Address*:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Email Address*:\"]").nth(0).hover();
  });

  await test.step(`Click "I agree to the 12Twenty Terms of Servic…"`, async () => {
    await page.locator("//LABEL[@id='doesAgreeToTermsLabel'][normalize-space() = \"I agree to the 12Twenty Terms of Service and Privacy Policy.\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@id='doesAgreeToTerms'][@name='doesAgreeToTerms']").nth(0).click();
  });

  await test.step(`Click "Student/Alumni Sign Up"`, async () => {
    await page.locator("//BUTTON[@id='registerButton'][@type='button'][normalize-space() = \"Student/Alumni Sign Up\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//ul[@class=\"nav-user-account\"]").nth(0).hover();
  });

});
