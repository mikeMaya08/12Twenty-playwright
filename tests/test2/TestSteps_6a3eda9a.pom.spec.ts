// TC: TC_A83003
// Mentorships - Admin creates and deletes mentorship

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Mentorships - Admin creates and deletes mentorship", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideAdminURL, { timeout: 90000 });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Clara Clarkson" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Mentorships" }).hover();
  selector = MK.onSetGV(`//SPAN[contains(text(),"E2E Tests Campuswide Mentorship Program")]`, null);
  source = await page.locator(selector);
  if (await source.count() == 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByRole('button', { name: "Mentorship Program 1" }).click();
  await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  }
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd")).toContainText("E2E Tests Campuswide Mentorship Program");
  await page.getByRole('link', { name: "Mentorship" }).click();
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "E2E Tests Campuswide Mentorship Program"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]/ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('button', { name: "OK" }).click();
  }
  await page.getByRole('button', { name: "New Mentorship" }).click();
  await page.getByRole('heading', { name: "Add New Mentorship" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").click();
  await page.keyboard.press("E2E Test Campuswide");
  await page.locator("//LABEL[normalize-space() = \"Mentor*\"]").hover();
  await page.getByPlaceholder("Mentor").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.getByPlaceholder("Mentee").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save" }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: "E2E Tests Campuswide Mentorship Program" }).click();
  await expect(page.locator("//H3[normalize-space() = \"Mentee\"]/ancestor::section//a")).toHaveText("Stacey Davis");
  await expect(page.locator("//H3[normalize-space() = \"Mentor\"]/ancestor::section//a")).toHaveText("Clara Clarkson");
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Program\"]/following-sibling::dd")).toHaveText("E2E Tests Campuswide Mentorship Program");
  await page.getByRole('link', { name: "OK" }).click();
  await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]/ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
});
