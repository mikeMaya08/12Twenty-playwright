// TC: TC58295
// Employers - Add a Note to an Existing Company - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Add a Note to an Existing Company - Admin", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;
  const text = msg.text();
  const timestamp = new Date().toLocaleString();

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(e2eCampusWideAdminURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByPlaceholder("Company Name").fill("A&E Networks");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "A&E Networks" }).hover();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Add Note" }).click();
  await page.waitForTimeout(3000);
  await page.waitForSelector('//div[@id="cke_NoteDescription"]');
  await page.click('//div[@id="cke_NoteDescription"]');
  page.keyboard.type('We are in the story business and just as the industry and art form have evolved, so too have we. Since our founding in 1983 with just two cable channels, we have grown into a multi-platform, multimedia, multi-genre content creator.');
  await page.locator("SELECT[id='UTypeId'][name='TypeId']").selectOption("number:3809");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Add" }).click();
  await page.getByRole('link', { name: "A&E Networks" }).click();
  await page.getByRole('link', { name: "Activities" }).click();
  await page.locator("span.text-area-display.ng-binding.ng-scope>p").hover();
  await page.getByRole('link', { name: "javascript:void(0)" }).click();
  await page.getByRole('heading', { name: "Delete Note" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(2).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Confirm" }).click();
  await page.locator("div.modal-content>div.modal-body").nth(1).hover();
  await page.getByRole('link', { name: "OK" }).click();
  var elementLocator = page.locator('//P[contains(text(),"We are in the story business and just as")]');
  if (await elementLocator > 0) {
  throw new Error("Note is still present.");
  await expect(elementLocator).toBeVisible();
  } else {
  console.log("Note was succesfully deleted.");
  }
});
