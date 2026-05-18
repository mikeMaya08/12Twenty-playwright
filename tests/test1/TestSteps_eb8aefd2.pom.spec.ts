// TC: TC64022
// Attributes - Site Settings - Add New Attribute to Student Profile - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Attributes - Site Settings - Add New Attribute to Student Profile - Admin", async ({ page, context }) => {
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
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Site Management" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "GENERAL CONFIGURATION" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('heading', { name: "Admin" }).hover();
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "Add New Attribute" }).hover();
  await page.getByRole('link', { name: "Edit Section" }).hover();
  await page.getByRole('link', { name: "Delete Section" }).hover();
  await page.getByRole('link', { name: "Add New Attribute" }).click();
  await page.getByRole('heading', { name: "Add New Attribute" }).hover();
  await page.getByRole('heading', { name: "Basics" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Enabled\"]").hover();
  await page.locator("div.toggle-group>label.btn.toggle-on-pad.btn-xs.btn-success.toggle-on").nth(1).hover();
  await page.locator("//SPAN[normalize-space() = \"Group\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Admin\"]").hover();
  await page.getByPlaceholder("Short Display Name").fill("Muuktest Attribute");
  await page.locator("//LABEL[normalize-space() = \"Long Display Name*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Help Text\"]").hover();
  await page.getByPlaceholder("Long Display Name").fill("Muuktest Attribute Test");
  await page.locator("//LABEL[normalize-space() = \"Field Type*\"]").hover();
  await page.getByPlaceholder("Help Text").fill("Testing attributes");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator("//LABEL[normalize-space() = \"Text (Single Line)\"]").click();
  await page.locator('input[type="radio"]').check();
  await page.getByRole('heading', { name: "Permissions and Visibility" }).hover();
  await page.getByRole('heading', { name: "Student" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Visible\"]").hover();
  await page.locator("div.toggle-group>label.btn.toggle-off-pad.active.btn-xs.btn-default.toggle-off").nth(2).click();
  await page.locator("//LABEL[normalize-space() = \"Required\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Editable\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Shared\"]").hover();
  await page.getByRole('heading', { name: "Parent Attribute" }).hover();
  await page.getByRole('link', { name: "Assign a dependent parent attribute" }).hover();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Muuktest Attribute" }).hover();
  await page.locator("div.sortable-list__col-2.sortable-list__col-right>span.badge.active").nth(1).hover();
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.locator("//DIV[normalize-space() = \"Admin Add New Attribute Edit Section Delete Section\"]").click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/');
  await page.waitForLoadState('load');
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
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "e2e Test Student" }).hover();
  await page.locator("span.sub-header.ng-scope>span.ng-binding.ng-scope").hover();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Profile" }).click();
  await page.getByRole('heading', { name: "Admin" }).hover();
  await page.locator("dl.dl-horizontal>dt.ng-binding.ng-scope").nth(28).hover();
  selector = MK.onSetGV(`//h3[normalize-space()="Admin"]/following-sibling::div//button[@aria-label="Edit"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "Muuktest Attribute" }).click();
  await page.locator("//LABEL[normalize-space() = \"Editable\"]").hover();
  await page.locator("div.toggle-group>label.btn.toggle-off-pad.active.btn-xs.btn-default.toggle-off").nth(4).click();
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.reload();
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("h3.modal-title>span.ng-binding.ng-scope").hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Muuktest Attribute Test\")]").hover();
  await page.getByPlaceholder("Muuktest Attribute Test").fill("Manzanita");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("dd.ng-scope>span.ng-binding.ng-scope").nth(16)).toHaveText("Manzanita");
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "Muuktest Attribute" }).click();
  await page.getByRole('link', { name: "Back" }).hover();
  await page.getByRole('button', { name: "Actions" }).click();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).hover();
  await page.getByRole('link', { name: "View Audit Log" }).click();
  await page.getByRole('heading', { name: "Muuktest Attribute Audit Log" }).hover();
  await page.getByRole('link', { name: "Export" }).hover();
  await page.getByRole('link', { name: "Expand All" }).click();
  await expect(page.locator("//DIV[normalize-space() = \"Attribute - Add Attribute\"]")).toHaveText("                            Attribute -                            Add Attribute                                                                                ");
  await page.locator("button.close>span").click();
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('button', { name: "Edit" }).click();
  await page.locator("h3.modal-title>span.ng-binding.ng-scope").hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Muuktest Attribute Test\")]").hover();
  await page.getByPlaceholder("Muuktest Attribute Test").fill("");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(` //SPAN[contains(text(),"Manzanita")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('button', { name: "Actions" }).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete attribute" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this attribute?\"]").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete attribute" }).click();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(` //A[@role=\'button\'][contains(text(),"Muuktest Attribute")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(`//dt[contains(text(),"Muuktest Attribute")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
