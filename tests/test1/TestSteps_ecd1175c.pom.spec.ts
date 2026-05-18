// TC: TC58734
// Events - Job Fairs - Admin creates&#x2F;edits, adds a student, registers an employer, deletes event

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Events - Job Fairs - Admin creates&#x2F;edits, adds a student, registers an employer, deletes event", async ({ page, context }) => {
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
  await page.waitForLoadState('load');
  var today = new Date();
  today.setDate(today.getDate() + 1);
  var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
  ("0" + today.getDate()).slice(-2) + '/' +
  today.getFullYear();
  date = formattedDate;
  await page.getByRole('link', { name: "Events" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Host a Job Fair" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Host a Job Fair" }).hover();
  await page.getByPlaceholder("Event Name").fill("Muuktest Job Fair");
  await page.locator("SELECT[id='EventTypeId'][name='EventTypeId']").selectOption("number:1499993124749");
  await page.locator("SELECT[id='EventFormatId'][name='EventFormatId']").click();
  await page.keyboard.press("virtual");
  await page.getByPlaceholder("Event Location").fill("60000");
  await page.getByPlaceholder("Briefly describe who this event is meant for").fill("College Students");
  await page.locator("SELECT[id='DressAttireId'][name='DressAttireId']").selectOption("number:1");
  await page.getByRole('button', { name: "-- Work Authorization Requirement --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Event Dates" }).click();
  await page.locator("div.form-group.ng-isolate-scope>label.control-label").click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td").nth(4).click();
  await page.getByPlaceholder("H:MMpm").fill("2:05pm");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td").nth(78).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("H:MMpm").fill("3:45pm");
  var today = new Date();
  var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
  ("0" + today.getDate()).slice(-2) + '/' +
  today.getFullYear();
  date = formattedDate;
  await page.locator("div.form-group>label.control-label").nth(9).click();
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("H:MMpm").fill("12:00am");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.waitForTimeout(1000);
  await page.locator("INPUT[id='searchInput'][name='search'][type='search']").fill("11:59pm");
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.locator("INPUT[type='search'][title='Search Wikipedia'][name='search'][id='ooui-php-1'][role='combobox']").fill("12:05am");
  await page.getByPlaceholder("BUSCAR").fill("` + date + `");
  await page.getByPlaceholder("Busca licenciatura, maestría, doctorado, curso, etc").fill("11:55pm");
  await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").click();
  await page.locator("INPUT[type='TEXT'][name='login']").fill("` + date + `");
  await page.locator("INPUT[type='text'][name='txt_Key_Captcha'][id='txt_Key_Captcha']").fill("12:00am");
  await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").click();
  await page.locator("//H2[normalize-space()=\"Additional Registration Method\"]//following::LABEL[normalize-space() = \"Yes\"]").click();
  await page.getByPlaceholder("Additional Registration Instructions").fill("Testing");
  await page.getByPlaceholder("Other Information").fill("Muuktest testing");
  fileName = MK.onSetGV(`logomuuk.jpg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.locator("a.file-name>span.temp-file.ng-binding").hover();
  await page.getByRole('link', { name: "Add Document Type" }).click();
  await page.locator("SELECT[name='CoreApplicationDocumentTypeId']").selectOption("number:1");
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Primary Event Contact" }).click();
  await page.getByRole('heading', { name: "Primary Event Contact" }).hover();
  await page.getByRole('button', { name: "Use My Information" }).click();
  await page.getByPlaceholder("Contact Phone").fill("7660072137");
  await page.getByRole('link', { name: "Add Registration Type" }).click();
  await page.waitForLoadState('load');
  await page.getByPlaceholder("Registration Type").fill("General Admission");
  await page.getByPlaceholder("Description").fill("This registration type allows general access to all sessions.");
  await page.getByPlaceholder("Fee").fill("49");
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.getByPlaceholder("H:MMpm").fill("7:00am");
  await page.getByPlaceholder("H:MMpm").fill("2:00pm");
  await page.getByPlaceholder("Quantity Available").fill("6");
  await page.getByRole('link', { name: "Add Additional Item" }).click();
  await page.getByPlaceholder("ID").fill("Additional");
  await page.getByPlaceholder("Description").fill("Description");
  await page.getByPlaceholder("1").fill("5");
  await page.getByPlaceholder("Fee").fill("50");
  await page.getByPlaceholder("Fecha de Nac.(DDMMAA) ").fill("7");
  await page.locator("SELECT[id='SourceId'][name='SourceId']").selectOption("number:1030070311959");
  await page.locator("SELECT[id='custom_attribute_4'][name='custom_attribute_4']").click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.getByRole('heading', { name: "Payment Method" }).hover();
  await page.locator("div.form-section-header.ng-scope>span.form-section-header-help-text.ng-binding").hover();
  await page.locator("//LABEL[normalize-space() = \"Payment Method*\"]").click();
  await page.locator("//h2[normalize-space()=\"Payment Method\"]/following::select").click();
  await page.keyboard.press("ArrowDown");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: "Muuktest Job Fair" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Events" }).click();
  await page.getByPlaceholder("Employer, Event Name, or Keyword").fill("Muuktest Job Fair");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("a.event-name.primary-item.primary-item-with-icons>span.primary-item-text.ng-binding").nth(2).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Muuktest Job Fair" }).hover();
  await page.getByRole('link', { name: "Employers (0)" }).click();
  await page.locator("BUTTON[type='button']").nth(16).click();
  await page.getByRole('link', { name: "Add New Employer" }).click();
  await page.getByRole('heading', { name: "Muuktest Job Fair - Employer Registration" }).hover();
  await page.getByPlaceholder("Select a contact").fill("Ryan Douglas");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").hover();
  await page.locator("//LABEL[normalize-space() = \"Make Visible to Students\"]").click();
  await page.locator("label.radio-inline>span.name-price.ng-binding").click();
  await page.locator('input[type="radio"]').check();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Register" }).click();
  await page.locator("ng-transclude>span.ng-binding.ng-scope").hover();
  await expect(page.locator("td.table-non-primary-col>span.badge.company-registration.pending-approval")).toHaveText("Pending Approval");
  await page.locator("td.table-non-primary-col>span.badge.company-registration.pending-approval").click();
  await page.locator("ng-transclude>span.ng-binding.ng-scope").click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Approve Registration" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Back to Event" }).click();
  await page.waitForLoadState('load');
  await expect(page.locator("td.table-non-primary-col>span.badge.company-registration.approved")).toHaveText("Approved");
  await page.locator("td.table-non-primary-col>span.badge.company-registration.approved").click();
  await page.getByRole('link', { name: "Registered Students (0)" }).click();
  await page.getByRole('heading', { name: "Registered Students" }).hover();
  await page.locator("BUTTON[type='button']").nth(4).click();
  await page.getByRole('link', { name: "Add Registrant" }).click();
  await page.getByRole('heading', { name: "Register Student" }).hover();
  await page.locator("div.col-xs-3>label.control-label").hover();
  await page.locator("INPUT[type='text'][placeholder=''][name='StudentId']").fill("Max Peterson");
  await page.waitForTimeout(2000);
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Register" }).click();
  await page.getByRole('link', { name: "Continue" }).click();
  await page.locator("//LABEL[normalize-space() = \"I have completed the above registration instructions\"]").hover();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('link', { name: "Complete Registration" }).click();
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
  await page.getByRole('link', { name: "Events" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Events" }).hover();
  await page.getByPlaceholder("Employer, Event Name, or Keyword").fill("Muuktest Job Fair");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.waitForLoadState('load');
  await page.locator("//SPAN[normalize-space() = \"End Date\"]").click();
  await page.locator("button.selected-filter__remove>i.far.fa-trash-alt").click();
  await page.locator("td.table-non-primary-col.center>span.badge.event-status.registration-open").hover();
  await page.locator("tt-event-registration-status-badge.ng-isolate-scope>span.badge.info.ng-scope").nth(1).hover();
  await page.locator("a.event-name.primary-item.primary-item-with-icons>span.primary-item-text.ng-binding").click();
  await page.getByRole('link', { name: "Event Details" }).hover();
  await page.getByRole('link', { name: "Employers (1)" }).hover();
  await page.getByRole('button', { name: "Register Now" }).click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`2`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('heading', { name: "Registration Documents" }).hover();
  await page.getByRole('link', { name: "Continue" }).click();
  await page.waitForLoadState('load');
  await page.locator("button.btn.btn-icon>label").click();
  await page.getByRole('link', { name: "Complete Registration" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.ant-typography.ant-typography-ellipsis.ant-typography-single-line.ant-tooltip-open.css-eqeg24>span").hover();
  await page.getByRole('button', { name: "Execute Now" }).click();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(2000);
  await page.reload();
  await page.locator("button.btn.dropdown-toggle.ng-binding>span.glyphicon.glyphicon-option-vertical.ng-scope").nth(1).click();
  await page.getByRole('link', { name: "Cancel Registration" }).hover();
  await page.getByRole('link', { name: "Edit Registration" }).hover();
  await page.getByRole('link', { name: "Print Name Tag" }).hover();
  await page.getByRole('link', { name: "Message" }).hover();
  await page.getByRole('link', { name: "Cancel Registration" }).click();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//a[contains(text(),"Max Peterson")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('link', { name: "e2e Test Student" }).hover();
  await page.locator("BUTTON[type='button']").nth(9).click();
  await page.getByRole('link', { name: "Cancel Registration" }).click();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//A[contains(text(),"e2e Test Student")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Event" }).hover();
  await page.getByRole('button', { name: "Delete Event" }).click();
  await page.waitForLoadState('load');
  await page.reload();
  await page.getByRole('link', { name: "Events" }).click();
  await page.waitForTimeout(3000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await page.getByRole('link', { name: "Events" }).click();
  selector = MK.onSetGV(` //SPAN[contains(text(),"Muuktest Job Fair")]`, null);
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
  await page.waitForTimeout(2000);
  await page.reload();
  await page.getByRole('button', { name: "Reset" }).click();
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
