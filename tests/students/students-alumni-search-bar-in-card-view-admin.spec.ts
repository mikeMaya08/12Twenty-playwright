// TC: TC59045
// Students & Alumni - Search bar in card view - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  DIV_RESULTS_CT,
  H1_STUDENTS_ALUMNI,
  LABEL_SPRING_2030,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Students & Alumni - Search bar in card view - Admin - TC59045", async ({ page, context }) => {
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
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.reload();
    await page.locator("//button//i[@aria-label=\"Card view\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Term"`, async () => {
    await page.locator("//SPAN[contains(text(), \"Graduation Term\")]").nth(0).click();
  });

  await test.step(`Click "Spring 2030"`, async () => {
    await page.locator(LABEL_SPRING_2030).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Hover "Spring 2030"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Spring 2030\")]").nth(1).hover();
  });

  await test.step(`Verify "Results"`, async () => {
    await expect(page.locator(DIV_RESULTS_CT).nth(0)).toContainText("Results");
  });

});
