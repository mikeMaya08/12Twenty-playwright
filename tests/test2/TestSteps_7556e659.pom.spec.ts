// TC: TC_A83695
// Mentorships - Data Upload Success, Upload Error Handling, and Deletion Flow

import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test("Mentorships - Data Upload Success, Upload Error Handling, and Deletion Flow", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Mentorship" }).click();
  selector = MK.onSetGV(`//SPAN[normalize-space() = "Mentee: Test Student #0004"]//ancestor::tr//td[@class="select-checkbox"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('heading', { name: "97 Steps" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  }
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Data Uploads" }).click();
  await page.getByRole('heading', { name: "Data Uploads" }).hover();
  await page.getByRole('button', { name: "Download CSV Template" }).click();
  await page.locator("div.form-controls>select.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty").click();
  await page.keyboard.press("Mentorship");
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//BUTTON[@type=\'button\'][normalize-space() = "Reset Filters"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('button', { name: "Reset Filters" }).click();
  }
  await page.getByRole('link', { name: "Test Student #0003" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Mentorships" }).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(38).hover();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByRole('heading', { name: "Edit Mentorships" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Allow users to request me as a mentor\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.getByRole('button', { name: "E2E Tests Campuswide Mentorship Program" }).click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Select all\"]").click();
  await page.locator("//LABEL[normalize-space() = \"E2E Tests Campuswide Mentorship Program\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following-sibling::dd")).toHaveText("Yes");
  await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]//following-sibling::dd//span")).toHaveText("E2E Tests Campuswide Mentorship Program");
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Test Student #0004" }).click();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Mentorships" }).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(38).hover();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.getByRole('heading', { name: "Edit Mentorships" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Allow users to request me as a mentor\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"No\"]").click();
  await page.getByRole('button', { name: "Save" }).click();
  await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following-sibling::dd")).toHaveText("No");
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Data Uploads" }).click();
  await page.getByRole('button', { name: "New Upload" }).click();
  await page.getByRole('heading', { name: "New Data Upload" }).hover();
  fileName = MK.onSetGV(`MuukMentorshipUpload.csv`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("div.form-controls>select.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty").click();
  await page.keyboard.press("Mentorship");
  await page.getByRole('button', { name: "Upload" }).click();
  await page.locator("//DIV[normalize-space() = \"Total Records: 1\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"Mentor: Test Student #0003 Mentee: Test Student #0004\"]").hover();
  await page.getByRole('link', { name: "Mentorship" }).click();
  selector = MK.onSetGV(`//BUTTON[@type=\'button\'][normalize-space() = "Reset Filters"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('button', { name: "Reset Filters" }).click();
  }
  await page.getByRole('heading', { name: "97 Steps" }).click();
  await page.getByRole('heading', { name: "Mentee" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Test Student #0004\"]").nth(2).hover();
  await page.getByRole('heading', { name: "Mentor" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Test Student #0003\"]").nth(2).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Data Uploads" }).click();
  await page.getByRole('button', { name: "New Upload" }).click();
  await page.getByRole('heading', { name: "New Data Upload" }).hover();
  fileName = MK.onSetGV(`MuukMentorshipUpload.csv`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("div.form-controls>select.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty").click();
  await page.keyboard.press("Mentorship");
  await page.getByRole('button', { name: "Upload" }).click();
  await page.locator("//DIV[normalize-space() = \"No rows were processed because one or more rows included errors\"]").hover();
  await page.locator("//LI[normalize-space()=\"This mentor and mentee are already in an active mentorship for this program. (1 Rows)\"]").hover();
  await page.locator("//LI[normalize-space()=\"Mentee has met their maximum active mentorships limit. (1 Rows)\"]").hover();
  await page.locator("//LI[normalize-space()=\"Mentor has met their maximum active mentorships limit. (1 Rows)\"]").hover();
  await page.getByRole('link', { name: "Mentorship" }).click();
  await page.getByRole('heading', { name: "97 Steps" }).hover();
  await page.locator("//SPAN[normalize-space() = \"Mentee: Test Student #0004\"]//ancestor::tr//td[@class=\"select-checkbox\"]").click();
  await page.locator("BUTTON[type='button']").nth(7).click();
  await page.getByRole('link', { name: "Delete Selected" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to cancel this mentorship pair? This action will permanently delete the record and cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
});
