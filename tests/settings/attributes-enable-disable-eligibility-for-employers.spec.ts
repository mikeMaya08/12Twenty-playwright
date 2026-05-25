// TC: TC_A81561
// Attributes - Enable/Disable eligibility for Employers

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_OK,
  H1_HOST_AN_EVENT,
  H2_ELIGIBILITY,
  NAV_EMPLOYERS,
  NAV_GENERAL,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_SETTINGS,
} from '@config/selectors';

test("Attributes - Enable/Disable eligibility for Employers - TC_A81561", async ({ page, context }) => {
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

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(1).click();
  });

  await test.step(`Hover "Undergraduate GPA"`, async () => {
    await page.locator("//th[normalize-space()=\"Undergraduate GPA\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//div[contains(@class,\"btn-success\")])[last()]";
  });

  await test.step(`Click "Undergraduate GPA"`, async () => {
    await page.locator("(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//label[contains(@class,\"btn toggle-off\")])[last()]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(2).hover();
  });

  await test.step(`Click "Undergraduate GPA"`, async () => {
    await page.locator("(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//label[contains(@class,\"btn toggle-off\")])[last()]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover "Eligibility configuration saved success…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Eligibility configuration saved successfully.\"]").nth(0).hover();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(1).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(1).hover();
  });

  await test.step(`Click "e2e.employeruser.subscription.admin@wal…"`, async () => {
    await page.locator("//td[contains(normalize-space(),\"e2e.employeruser.subscription.admin@walmart.com\")]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator("//td[contains(normalize-space(),\"e2e.employeruser.subscription.admin@walmart.com\")]/ancestor::tr//a[normalize-space()=\"Login as user...\"]").nth(0).click();
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

  await test.step(`Hover "Post a Student Employment Job"`, async () => {
    await page.locator("//H3[normalize-space() = \"Post a Student Employment Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Create a Student Employment job posting…"`, async () => {
    await page.locator("//P[normalize-space() = \"Create a Student Employment job posting to find the ideal student for your position\"]").nth(0).hover();
  });

  await test.step(`Click "Post"`, async () => {
    await page.locator("//A[normalize-space() = \"Post\"]").nth(1).click();
  });

  await test.step(`Hover "Create Student Employment Job"`, async () => {
    await page.locator("//H1[normalize-space() = \"Create Student Employment Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Hover "Minimum Undergraduate GPA"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]").nth(0).hover();
  });

  await test.step(`Hover "Minimum Undergraduate GPA"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]/following-sibling::div[@class=\"form-controls\"]").nth(0).hover();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(1).click();
  });

  await test.step(`Click "Host"`, async () => {
    await page.locator("//A[normalize-space() = \"Host\"]").nth(0).click();
  });

  await test.step(`Hover "Host an Event"`, async () => {
    await page.locator(H1_HOST_AN_EVENT).nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Hover "Minimum Undergraduate GPA"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]").nth(0).hover();
  });

  await test.step(`Hover "Minimum Undergraduate GPA"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]/following-sibling::div[@class=\"form-controls\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(1).click();
  });

  await test.step(`Hover "Undergraduate GPA"`, async () => {
    await page.locator("//th[normalize-space()=\"Undergraduate GPA\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(2).hover();
  });

  await test.step(`Click "Undergraduate GPA"`, async () => {
    await page.locator("(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//label[contains(@class,\"btn toggle-off\")])[last()]").nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Save Changes\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
  });

  await test.step(`Hover "Post a Student Employment Job"`, async () => {
    await page.locator("//H3[normalize-space() = \"Post a Student Employment Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Create a Student Employment job posting…"`, async () => {
    await page.locator("//P[normalize-space() = \"Create a Student Employment job posting to find the ideal student for your position\"]").nth(0).hover();
  });

  await test.step(`Click "Post"`, async () => {
    await page.locator("//A[normalize-space() = \"Post\"]").nth(1).click();
  });

  await test.step(`Hover "Create Student Employment Job"`, async () => {
    await page.locator("//H1[normalize-space() = \"Create Student Employment Job\"]").nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(1).click();
  });

  await test.step(`Click "Host"`, async () => {
    await page.locator("//A[normalize-space() = \"Host\"]").nth(0).click();
  });

  await test.step(`Hover "Host an Event"`, async () => {
    await page.locator(H1_HOST_AN_EVENT).nth(0).hover();
  });

  await test.step(`Hover "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY).nth(0).hover();
  });

});
