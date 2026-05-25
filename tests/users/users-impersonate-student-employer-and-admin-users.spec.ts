// TC: TC62634
// Users - Impersonate Student, Employer and Admin users

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  H1_MANAGE_STUDENTS,
  LOGIN_AS_USER,
  NAV_HOME,
  NAV_SITE_MGMT_NAVBAR_BTN,
} from '@config/selectors';

test("Users - Impersonate Student, Employer and Admin users - TC62634", async ({ page, context }) => {
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
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Manage Users\")]").nth(0).click();
  });

  await test.step(`Hover "Manage Students & Alumni"`, async () => {
    await page.locator(H1_MANAGE_STUDENTS).nth(0).hover();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//A[contains(text(),\"Test Student #0001\")]//ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator("//A[contains(text(),\"Test Student #0001\")]//following::A[@role=\"menuitem\"][normalize-space() = \"Login as user...\"]").nth(0).click();
  });

  await test.step(`Hover "Login as Test Student #0001"`, async () => {
    await page.locator("//H3[contains(text(),\"Login as Test Student #0001\")]").nth(0).hover();
  });

  await test.step(`Hover "You are about to log in as Test Student…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You are about to log in as Test Student #0001. This user's account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    const studentPagePromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
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

  await test.step(`Hover "You're currently logged in as Test Stud…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"You're currently logged in as Test Student #0001 (Student). When you're done, please log out.\"]").nth(0).hover();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator("//B[contains(text(),\"log out\")]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator("//A[contains(text(),\"Employers\")]").nth(0).click();
  });

  await test.step(`Hover "Manage Employers"`, async () => {
    await page.locator("//H1[contains(text(),\"Manage Employers\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as"`, async () => {
    await page.locator("//H3[contains(text(),\"Login as\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    const studentPagePromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
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

  await test.step(`Hover "You're currently logged in as"`, async () => {
    await page.locator("//DIV[contains(text(),\"You're currently logged in as \")]").nth(0).hover();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator("//B[contains(text(),\"log out\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Admins"`, async () => {
    await page.locator("//A[normalize-space() = \"Admins\"]").nth(0).click();
  });

  await test.step(`Hover "Admin Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]").nth(1).hover();
  });

  await test.step(`Click "Admin Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Admin Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]/ancestor::tr//A[@role=\"menuitem\"][normalize-space() = \"Login as user...\"]").nth(0).click();
  });

  await test.step(`Hover "Login as Admin Admin"`, async () => {
    await page.locator("//H3[normalize-space() = \"Login as Admin Admin\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You are about to log in as Admin Admin. This user\\'s account will be opened in a new tab and you will be concurrently logged in as the user. Please make sure to log out of the account once you are done.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
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

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"You\\'re currently logged in as Admin Admin (School). When you\\'re done, please log out.\"]").nth(0).hover();
  });

  await test.step(`Hover "Admin Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Admin Admin\"]").nth(0).hover();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator("//B[contains(text(),\"log out\")]").nth(0).click();
  });

});
