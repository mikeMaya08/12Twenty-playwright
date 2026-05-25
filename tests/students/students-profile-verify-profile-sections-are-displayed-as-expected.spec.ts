// TC: TC63720
// Students - Profile - Verify profile sections are displayed as expected

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { NAV_HOME, NAV_PROFILE } from '@config/selectors';

test("Students - Profile - Verify profile sections are displayed as expected - TC63720", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-law.qa-12twenty.com/Login', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Verify "Home"`, async () => {
    await expect(page.locator("//A[@role='tab'][contains(text(),\"Home\")]").nth(0)).toHaveText("Home");
  });

  await test.step(`Verify "Profile"`, async () => {
    await expect(page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0)).toHaveText("Profile");
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Hover "Contact Info"`, async () => {
    await page.locator("//H3[contains(text(),\"Contact Info\")]").nth(0).hover();
  });

  await test.step(`Hover "Outcome"`, async () => {
    await page.locator("//H3[contains(text(),\"Outcome\")]").nth(0).hover();
  });

  await test.step(`Hover "Other"`, async () => {
    await page.locator("//H3[contains(text(),\"Other\")]").nth(0).hover();
  });

  await test.step(`Hover "Pro Bono Pledge"`, async () => {
    await page.locator("//H3[contains(text(),\"Pro Bono Pledge\")]").nth(0).hover();
  });

});
