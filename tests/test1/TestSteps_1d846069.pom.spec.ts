// TC: TC61325
// Resume Books - Add New Resume Book - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Resume Books - Add New Resume Book - Admin", async ({ page, context }) => {
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
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Resume Books" }).click();
  await page.getByRole('heading', { name: "Resume Books" }).hover();
  selector = MK.onSetGV(`//A[contains(text(),"Ivan Everdeen")]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('link', { name: "Ivan Everdeen" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Resume Book" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Resume Book" }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Resume Books" }).click();
  await page.waitForTimeout(1000);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  }
  await page.getByRole('link', { name: "New Resume Book" }).click();
  await page.getByRole('heading', { name: "Create New Resume Book" }).hover();
  await page.getByRole('heading', { name: "Basics" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Academic Year*\"]").hover();
  await page.getByPlaceholder("Name").fill("Ivan Everdeen");
  await page.locator("SELECT[id='AcademicYearId'][name='AcademicYearId']").selectOption("number:2019");
  await page.locator("//LABEL[normalize-space() = \"Student Description*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Student Description*\"]//following::div[@class=\"cke_inner cke_reset\"]").click();
  textContent = MK.onSetGV(`Testing student description`, null);
  page.keyboard.type(textContent);
  await page.locator("//LABEL[normalize-space() = \"Employer Description*\"]//following::div[@class=\"cke_inner cke_reset\"]").click();
  textContent = MK.onSetGV(`Testing employer description`, null);
  page.keyboard.type(textContent);
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByPlaceholder("H:MMpm").fill("12:00am");
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.day").nth(12).click();
  await page.getByPlaceholder("H:MMpm").fill("12:00pm");
  await page.getByRole('heading', { name: "Eligibility" }).click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Career Center Administrator" }).click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Require approval when students apply to this resume book?*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Allow students to initially submit resumes in Microsoft Word file format?*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Are students able to download and view approved resume applicants once it is published and archived?*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(2).click();
  await page.locator('input[type="radio"]').check();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Allow students to apply even when the resume book is published?*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(3).click();
  await page.locator('input[type="radio"]').check();
  await page.locator("div.form-section-inputs>div.form-group.form-setting-header").nth(1).click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Is this resume book visible to Employers?*\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(4).click();
  await page.locator('input[type="radio"]').check();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Ivan Everdeen" }).hover();
  await page.locator("div.sub-header.badges>span.badge").hover();
  await page.getByRole('link', { name: "Resume Book Details" }).hover();
  await page.getByRole('link', { name: "Resumes" }).hover();
  await page.locator("dl.dl-horizontal>dt").nth(7).hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding").nth(5).hover();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Publish" }).hover();
  await page.getByRole('link', { name: "Archive" }).hover();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Deactivate" }).hover();
  await page.locator("ul.dropdown-menu.dropdown-menu-right>li.dropdown-header.ng-scope").hover();
  await page.getByRole('link', { name: "Copy Student URL" }).hover();
  await page.getByRole('link', { name: "Copy Employer URL" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).hover();
  await page.getByRole('link', { name: "Publish" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.locator("div.sub-header.badges>span.badge").hover();
  await page.getByRole('heading', { name: "Ivan Everdeen" }).hover();
  urlpage1 = page.url();
  await page.waitForTimeout(3000);
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
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
  await page.getByRole('link', { name: "Resume Books" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: "Ivan Everdeen" }).click();
  await page.getByRole('link', { name: "Apply" }).click();
  await page.getByRole('heading', { name: "Apply To This Resume Book" }).hover();
  await page.getByPlaceholder("Name of file").fill("e2eTestStudent_Resume");
  fileName = MK.onSetGV(`Test_Resume_01.pdf`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("a.file-name>span.temp-file.ng-binding").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Submit" }).click();
  urlpage2 = page.url();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  var targetPage = context.pages().find(page => page.url() === urlpage1);
  if (targetPage) {
  await targetPage.bringToFront();
  } else {
  throw new Error(`A page with the next url was not found: ${urlpage1}`);
  }
  await page.waitForTimeout(3000);
  await page.reload();
  await page.getByRole('link', { name: "Resumes" }).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.getByRole('link', { name: "Resume Books" }).click();
  await page.getByRole('link', { name: "Ivan Everdeen" }).click();
  await page.getByRole('link', { name: "Download Full Book" }).click();
  await page.waitForLoadState('load');
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await expect(page.locator("div.sub-header.badges>span.badge.published")).toHaveText("Published");
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Resume Book" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Resume Book" }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Resume Books" }).click();
  await page.waitForTimeout(1000);
  selector = MK.onSetGV(`//A[contains(text(),"Ivan Everdeen")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
