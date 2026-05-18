// TC: TC_A83124
// Mentorship Admin Validation - Duplicate Prevention, Limits, and Recreate After Deletion

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Mentorship Admin Validation - Duplicate Prevention, Limits, and Recreate After Deletion", async ({ page, context }) => {
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
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Stacey Davis");
  await page.getByRole('link', { name: "Stacey Davis" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Mentorships" }).hover();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByRole('button', { name: "Mentorship Program 1" }).click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").click();
  await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd")).toContainText("Mentorship Program 1");
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following-sibling::dd")).not.toContainText("E2E Tests Campuswide Mentorship Program");
  await page.getByRole('link', { name: "Mentorship" }).click();
  await page.waitForLoadState('load');
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "Mentorship Program 1"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
  }
  await page.getByRole('button', { name: "New Mentorship" }).click();
  await page.getByRole('heading', { name: "Add New Mentorship" }).hover();
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
  await page.getByRole('heading', { name: "Oops!" }).hover();
  await page.locator("//DIV[normalize-space() = \"The mentor selected is not available to participate in this mentorship program.\"]").hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").click();
  await page.keyboard.press("Mentorship Program 1");
  await page.getByRole('link', { name: "Save" }).click();
  await page.getByRole('link', { name: "Mentorship Program 1" }).hover();
  await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentee: \")]")).toHaveText("Mentee: Jared Jackson");
  await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentor: \")]")).toHaveText("Mentor: Stacey Davis");
  await expect(page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//span[contains(@class,\"badge\")]")).toHaveText("ACTIVE");
  await page.getByRole('button', { name: "New Mentorship" }).click();
  await page.getByRole('heading', { name: "Add New Mentorship" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Mentor*\"]").hover();
  await page.getByPlaceholder("Mentor").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.getByPlaceholder("Mentee").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").click();
  await page.keyboard.press("Mentorship Program 1");
  await page.getByRole('link', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Oops!" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Please address the following issues before proceeding:\"]").hover();
  await page.locator("//LI[normalize-space()=\"Mentor has met their maximum active mentorships limit.\"]").hover();
  await page.locator("//LI[normalize-space()=\"Mentee has met their maximum active mentorships limit.\"]").hover();
  await page.locator("//LI[normalize-space()=\"This mentor and mentee are already in an active mentorship for this program.\"]").hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByRole('link', { name: "Cancel" }).click();
  await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('button', { name: "New Mentorship" }).click();
  await page.locator("//LABEL[normalize-space() = \"Mentor*\"]").hover();
  await page.getByPlaceholder("Mentor").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.getByPlaceholder("Mentee").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.locator("//LABEL[normalize-space() = \"Mentorship Program*\"]/following-sibling::div//select").click();
  await page.keyboard.press("Mentorship Program 1");
  await page.getByRole('link', { name: "Save" }).click();
  await page.getByRole('link', { name: "Mentorship Program 1" }).hover();
  await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentee: \")]")).toHaveText("Mentee: Jared Jackson");
  await expect(page.locator("//SPAN[contains(normalize-space(),\"Mentor: \")]")).toHaveText("Mentor: Stacey Davis");
  await expect(page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//span[contains(@class,\"badge\")]")).toHaveText("ACTIVE");
  await page.getByRole('link', { name: "Mentorship Program 1" }).click();
  await page.getByRole('heading', { name: "Mentorship" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Jared Jackson\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Stacey Davis\"]").hover();
  await page.getByRole('heading', { name: "Tasks (0/1)" }).hover();
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Program\"]//following-sibling::dd")).toHaveText("Mentorship Program 1");
  await page.getByRole('link', { name: "OK" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "E2E Tests Campuswide Mentorship Program"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//A[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]/ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('button', { name: "OK" }).click();
  }
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "Mentorship Program 1"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//A[normalize-space() = \"Mentorship Program 1\"]/ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "OK" }).click();
  }
});
