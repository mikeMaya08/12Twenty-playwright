// TC: TC61312
// Events - Create, Cancel, Duplicate, and Delete an Event - Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Events - Create, Cancel, Duplicate, and Delete an Event - Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Events" }).click();
  await page.getByRole('link', { name: "Host an Event" }).click();
  await page.getByRole('heading', { name: "Host an Event" }).hover();
  await page.getByPlaceholder("Event Name").fill("Muuktest Event");
  await page.locator("SELECT[id='EventTypeId'][name='EventTypeId']").selectOption("number:1499993124744");
  await page.locator("SELECT[id='EventFormatId'][name='EventFormatId']").selectOption("number:1");
  await page.getByPlaceholder("Event Location").fill("Bangalore");
  await page.getByPlaceholder("# of Attendees Permitted").fill("7");
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.getByPlaceholder("Briefly describe who this event is meant for").fill("Freshmans");
  await page.locator("SELECT[id='DressAttireId'][name='DressAttireId']").selectOption("number:1");
  await page.getByPlaceholder("Employer Name").fill("Morgan Stanley");
  await page.locator("//DIV[normalize-space() = \"Morgan Stanley\"]").nth(2).click();
  await page.getByPlaceholder("Presenter").fill("John Mayer");
  await page.locator("SELECT[id='ConsolidatedIndustryId'][name='ConsolidatedIndustryId']").selectOption("number:101499994348789");
  await page.getByRole('button', { name: "-- Work Authorization Requirement --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("div.form-group.ng-isolate-scope>label.control-label").click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td").nth(4).click();
  await page.waitForTimeout(2000);
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
  await page.locator("INPUT[id='searchInput'][name='search'][type='search']").fill("11:55pm");
  await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").click();
  await page.locator("INPUT[type='TEXT'][name='login']").fill("` + date + `");
  await page.locator("INPUT[type='text'][name='txt_Key_Captcha'][id='txt_Key_Captcha']").fill("12:00am");
  await page.getByRole('heading', { name: "Additional Registration Method" }).click();
  await page.locator("//LABEL[contains(text(),\"Register via Ot\")]//following::LABEL[normalize-space() = \"Yes\"]").click();
  await page.getByPlaceholder("Additional Registration Instructions").fill("Registrations can be done in the office.");
  await page.getByRole('link', { name: "browse" }).click();
  fileName = MK.onSetGV(`logomuuk.jpg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "Add Document Type" }).click();
  await page.locator("SELECT[name='CoreApplicationDocumentTypeId']").selectOption("number:1");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("tr>th").nth(2).click();
  await page.getByRole('heading', { name: "Eligibility" }).click();
  await page.locator("//LABEL[normalize-space() = \"Student Group*\"]").click();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole('heading', { name: "Primary Event Contact" }).click();
  await page.getByRole('button', { name: "Use My Information" }).click();
  await page.getByPlaceholder("Contact Phone").fill("7660072137");
  await page.getByRole('heading', { name: "Admin" }).click();
  await page.locator("//LABEL[normalize-space() = \"Event Source\"]").click();
  await page.locator("SELECT[id='SourceId'][name='SourceId']").click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.locator("SELECT[id='custom_attribute_4'][name='custom_attribute_4']").click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Muuktest Event" }).hover();
  await page.getByRole('link', { name: "Morgan Stanley" }).hover();
  await page.locator("//DIV[normalize-space() = \"Career Center Workshop\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Bangalore\"]").hover();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  await page.locator("//H2[normalize-space() = \"Muuktest Event\"]/following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Cancel Event" }).click();
  await page.getByRole('heading', { name: "Cancel Event" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Success!" }).click();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.actionable-alert-message>span.ng-scope").hover();
  await page.locator("//H2[normalize-space() = \"Muuktest Event\"]/following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Duplicate" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.form-group>label.control-label").nth(9).click();
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("H:MMpm").fill("12:00am");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.waitForTimeout(1000);
  await page.locator("INPUT[id='searchInput'][name='search'][type='search']").fill("2:00pm");
  await page.locator("//LABEL[normalize-space() = \"Student Publish Date *\"]").click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  var today = new Date();
  var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
  ("0" + today.getDate()).slice(-2) + '/' +
  today.getFullYear();
  date = formattedDate;
  await page.getByPlaceholder("MM/DD/YYYY").fill("` + date + `");
  await page.getByPlaceholder("H:MMpm").fill("12:00am");
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Duplicate-Muuktest Event" }).hover();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Events" }).click();
  await page.waitForLoadState('load');
  await page.getByPlaceholder("Employer, Event Name, or Keyword").fill("Muuktest Event");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("a.event-name.primary-item.primary-item-with-icons>span.primary-item-text.ng-binding").nth(1).click();
  await page.locator("//H2[normalize-space() = \"Duplicate-Muuktest Event\"]/following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('button', { name: "Delete Event" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(` //SPAN[contains(text(),"Duplicate-Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.locator("//SPAN[contains(text(),\"Muuktest Event\")]/ancestor::tr//td[normalize-space()=\"Cancelled\"]").hover();
  await page.locator("a.event-name.primary-item.primary-item-with-icons>span.primary-item-text.ng-binding").click();
  await page.locator("//H2[normalize-space() = \"Muuktest Event\"]/following::button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Event" }).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Event" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//SPAN[contains(text(),"Muuktest Event")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
