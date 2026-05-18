// TC: TC_A77717
// Calendar - Students - Access different calendar views, update interview availability

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Calendar - Students - Access different calendar views, update interview availability", async ({ page, context }) => {
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
  await page.setViewportSize({ width: 1920, height: 1080 });
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
  await page.getByRole('link', { name: "My Calendar" }).click();
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "List" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "Month" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "Week" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "Day" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: "Week" }).click();
  await page.getByRole('link', { name: "Week" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('link', { name: "My Interview Availability" }).click();
  await page.getByRole('button', { name: "week" }).click();
  await page.locator("div.fc-scroller.fc-time-grid-container>div.fc-time-grid").click();
  await page.getByRole('heading', { name: "Create Time Slot" }).hover();
  await page.locator("SELECT[id='TypeId'][name='TypeId']").selectOption("number:1");
  await page.locator("//LABEL[normalize-space() = \"What*:\"]").hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.locator("INPUT[type='text'][name='Location']").fill("Muuktest Class");
  await page.getByRole('link', { name: "Create" }).click();
  await page.getByRole('link', { name: "My Calendar" }).click();
  await page.locator("//DIV[normalize-space() = \"Muuktest Class – 3:30pm- 4pm\"]").hover();
  await page.getByRole('link', { name: "Job Listings & Interviews" }).click();
  await page.getByRole('link', { name: "My Interview Availability" }).click();
  await page.locator("//DIV[normalize-space() = \"Muuktest Class\"]").click();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "My Calendar" }).click();
  await page.getByRole('heading', { name: "My Calendar" }).hover();
});
