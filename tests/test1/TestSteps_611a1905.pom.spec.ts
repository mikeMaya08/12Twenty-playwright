// TC: TC65814
// Manage Users - Admin adds, updates, and deletes student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Manage Users - Admin adds, updates, and deletes student", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.getByRole('heading', { name: "Manage Students & Alumni" }).hover();
  await page.getByRole('button', { name: "Add New Student" }).click();
  await page.getByPlaceholder("First (Preferred) Name").fill("Student");
  await page.getByPlaceholder("Last Name").fill("Muuktest");
  textContent = MK.onSetGV(` random text`, 5);
  await page.getByPlaceholder("Email Address").fill("studentmuuk+` + textContent + `@muukteam.testinator.com");
  await page.locator("//LABEL[normalize-space() = \"Program*\"]").click();
  await page.locator("SELECT[name='ProgramId']").selectOption("number:1814999953610478");
  await page.locator("//LABEL[normalize-space() = \"College/School*\"]").click();
  await page.locator("SELECT[name='College1Name']").selectOption("number:149999071101701");
  await page.locator("//LABEL[normalize-space() = \"Degree Level*\"]").click();
  await page.locator("SELECT[name='DegreeLevelId']").selectOption("number:149999071102056");
  await page.locator("//LABEL[normalize-space() = \"Major/Academic Program\"]").click();
  await page.locator("SELECT[name='Major1Name']").selectOption("number:360038051146044");
  await page.locator("//LABEL[normalize-space() = \"Graduation Term*\"]").click();
  await page.getByRole('button', { name: "-- Graduation Term --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Spring 2030\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[contains(normalize-space(),\"Student Id\")]").click();
  await page.getByPlaceholder("Student Id").fill("` + textContent + `");
  await page.locator("//LABEL[contains(normalize-space(),\"Active*\")]").click();
  await page.locator("SELECT[name='IsEnrolled']").selectOption("number:1");
  await page.locator("//LABEL[contains(normalize-space(),\"User Role*\")]").click();
  await page.locator("SELECT[name='RoleId']").selectOption("number:3");
  await page.locator("//LABEL[contains(normalize-space(),\"Student Group*\")]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(3000);
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Student Muuktest");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.reload();
  await page.locator("INPUT[name='btnK'][role='button'][type='submit']").nth(1).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.getByRole('heading', { name: "Student Account Information" }).hover();
  await page.getByPlaceholder("Last Name").fill("Automated");
  await page.getByPlaceholder("Student Id").fill("SM123EDT");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("Student Automated");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Student Automated" }).hover();
  await page.getByRole('link', { name: "Sign in" }).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Confirm Delete" }).hover();
  await page.locator("div.ng-scope>section.ng-binding").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.locator("tt-user-list.ng-scope.ng-isolate-scope>div.no-results").hover();
  selector = MK.onSetGV(`//A[contains(text(),"Student Automated")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
