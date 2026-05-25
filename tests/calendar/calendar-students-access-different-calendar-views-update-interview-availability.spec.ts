// TC: TC_A77717
// Calendar - Students - Access different calendar views, update interview availability

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  NAV_HOME,
  NAV_JOB_LISTINGS,
  RBTN_CANCEL,
  RBTN_DAY,
  RBTN_DELETE,
  RBTN_LIST,
  RBTN_SAVE,
  RBTN_WEEK,
} from '@config/selectors';

test("Calendar - Students - Access different calendar views, update interview availability - TC_A77717", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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

  await test.step(`Click "My Calendar"`, async () => {
    await page.locator("//A[normalize-space() = \"My Calendar\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"dropdown\"]//button").nth(0).click();
  });

  await test.step(`Click "List"`, async () => {
    await page.locator(RBTN_LIST).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"dropdown\"]//button").nth(0).click();
  });

  await test.step(`Click "Month"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Month\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"dropdown\"]//button").nth(0).click();
  });

  await test.step(`Click "Week"`, async () => {
    await page.locator(RBTN_WEEK).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"dropdown\"]//button").nth(0).click();
  });

  await test.step(`Click "Day"`, async () => {
    await page.locator(RBTN_DAY).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"dropdown\"]//button").nth(0).click();
  });

  await test.step(`Click "Week"`, async () => {
    await page.locator(RBTN_WEEK).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "My Interview Availability"`, async () => {
    await page.locator("//A[normalize-space() = \"My Interview Availability\"]").nth(0).click();
  });

  await test.step(`Click "week"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"week\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tr[@data-time=\"15:30:00\"]").nth(0).click();
  });

  await test.step(`Hover "Create Time Slot"`, async () => {
    await page.locator("//H3[normalize-space() = \"Create Time Slot\"]").nth(0).hover();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='TypeId'][@name='TypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "What*:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"What*:\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Fill "Muuktest Class"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='Location']").nth(0).fill("Muuktest Class");
  });

  await test.step(`Click "Create"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Create\"]").nth(0).click();
  });

  await test.step(`Click "My Calendar"`, async () => {
    await page.locator("//A[normalize-space() = \"My Calendar\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Class – 3:30pm- 4pm"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest Class – 3:30pm- 4pm\"]").nth(0).hover();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "My Interview Availability"`, async () => {
    await page.locator("//A[normalize-space() = \"My Interview Availability\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest Class"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Muuktest Class\"]").nth(0).click();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Hover "Save"`, async () => {
    await page.locator(RBTN_SAVE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "My Calendar"`, async () => {
    await page.locator("//A[normalize-space() = \"My Calendar\"]").nth(0).click();
  });

  await test.step(`Hover "My Calendar"`, async () => {
    await page.locator("//H1[normalize-space() = \"My Calendar\"]").nth(0).hover();
  });

});
