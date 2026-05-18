// TC: TC59052
// Users - Search Student - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Users - Search Student - Student", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.getByPlaceholder("Search by Name").fill("Test Student ");
  await page.waitForTimeout(1000);
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.waitForLoadState('load');
  await page.locator("a.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-has-children.main-menu-link>span").nth(7).hover();
  await page.locator("a.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-has-children.main-menu-link>span").nth(7).click();
  await expect(page.getByRole('heading', { name: "Kathie Bergquist" })).toContainText("Test Student ");
});
