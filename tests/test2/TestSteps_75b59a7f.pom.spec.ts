// TC: TC_A83699
// 12TU Candidate Search -  Visibility and Opt-Out Validation

import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test("12TU Candidate Search -  Visibility and Opt-Out Validation", async ({ page, context }) => {
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
  await page.getByRole('heading', { name: "Students & Alumni" }).hover();
  await page.getByRole('link', { name: "Test Student #0001" }).click();
  await page.getByRole('link', { name: "Application Materials" }).click();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//A[@role=\'button\'][normalize-space() = "Resume"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("//A[normalize-space() = \"Resume\"]/ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete Resume" }).click();
  await page.getByRole('heading', { name: "Delete Resume" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Resume" }).click();
  await page.waitForLoadState('load');
  }
  await page.getByRole('heading', { name: "Resumes" }).hover();
  await page.getByRole('link', { name: "Add New" }).click();
  await page.locator("//LABEL[normalize-space() = \"Resume Name *\"]").hover();
  await page.locator("INPUT[type='text'][name='documentName'][id='applicationDocumentName']").fill("Resume");
  await page.locator("//LABEL[normalize-space() = \"Upload New Resume *\"]").hover();
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Submit" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Account Settings" }).hover();
  selector = MK.onSetGV(`//dt[normalize-space()="Allow Employers to contact me with job opportunities"]/following-sibling::dd[1]//span[normalize-space()="No"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd//span")).toHaveText("No");
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("//LABEL[@id=\"IncludeInResumeBook-label\"][contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  }
  await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd//span")).toHaveText("Yes");
  await page.getByRole('link', { name: "Candidate Search" }).click();
  await page.getByRole('heading', { name: "Candidate Search" }).hover();
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.locator("//SPAN[normalize-space() = \"Test Student #0001\"]").click();
  await page.getByRole('link', { name: "Candidate Search" }).click();
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.locator("button.btn.btn-icon.dropdown-toggle>span.glyphicon.glyphicon-option-vertical").click();
  await page.getByRole('link', { name: "View Resume" }).click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("BUTTON[type='button']").nth(15).click();
  await page.locator("//SPAN[normalize-space() = \"Test Student #0001\"]").click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("//LABEL[@id=\"IncludeInResumeBook-label\"][contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").hover();
  await page.locator("//LABEL[normalize-space() = \"No\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd//span")).toHaveText("No");
  await page.getByRole('link', { name: "Candidate Search" }).click();
  await page.getByRole('button', { name: "Get Results" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Test Student #0001" }).click();
  await page.getByRole('link', { name: "Application Materials" }).click();
  await page.getByRole('link', { name: "Resume" }).hover();
  await page.locator("//A[normalize-space() = \"Resume\"]/ancestor::div[contains(@class,\"tt-card\")]//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete Resume" }).click();
  await page.getByRole('heading', { name: "Delete Resume" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Resume" }).click();
  await page.waitForLoadState('load');
});
