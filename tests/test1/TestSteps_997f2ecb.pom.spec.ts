// TC: TC62256
// 12TE Events - Create and cancel an event

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE Events - Create and cancel an event", async ({ page, context }) => {
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

  await page.goto('https://employer.qa-12twenty.com/hire', { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Email Address").fill("e2e.employeruser.subscription.admin@walmart.com");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.waitForTimeout(2000);
  await page.locator("button.btn.btn-school.submit-login-form>span").click();
  await page.locator("div.nav-user-account-name-and-company>span.nav-user-account-name").hover();
  await page.getByRole('link', { name: "Events" }).click();
  await page.getByRole('link', { name: "Host an Event" }).click();
  await page.getByRole('heading', { name: "Business" }).click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Continue" }).click();
  await page.locator("ul.allow-select>li.school-card.ng-scope").nth(6).hover();
  await page.waitForTimeout(2000);
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.getByPlaceholder("School").fill("e2e");
  await page.locator("//SPAN[normalize-space() = \"School\"]").click();
  await page.locator("//DIV[normalize-space() = \"E2E Tests Business\"]").click();
  await page.getByRole('link', { name: "Continue" }).click();
  await page.locator("//LABEL[normalize-space() = \"Time Zone*\"]").hover();
  await page.getByPlaceholder("Event Name").fill("Muuktest Anual Event");
  await page.locator("//LABEL[normalize-space() = \"Event Type*\"]").click();
  await page.locator("SELECT[id='CoreEventTypeId'][name='CoreEventTypeId']").click();
  await page.keyboard.press("ArrowDown");
  await page.locator("//LABEL[normalize-space() = \"Event Format*\"]").hover();
  await page.waitForTimeout(2000);
  await page.locator("SELECT[name='FormatId']").click();
  await page.keyboard.press("ArrowDown");
  await page.locator("//DIV[normalize-space() = \"You will be able to add a virtual meeting URL once the event is submitted\"]").hover();
  await page.getByRole('button', { name: "-- Select a Value --" }).click();
  await page.getByPlaceholder("Search").fill("Pacific Time");
  await page.locator("//LABEL[normalize-space() = \"Pacific Time (US & Canada) (UTC-08:00)\"]").click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Event Date and Time*\"]").hover();
  var today = new Date();
  today.setDate(today.getDate() + 1);
  var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
  ("0" + today.getDate()).slice(-2) + '/' +
  today.getFullYear();
  date = formattedDate;
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.waitForTimeout(2000);
  await page.locator("tr>td.day").nth(24).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("H:MMpm").fill("12:00am");
  await page.getByPlaceholder("H:MMpm").fill("11:45pm");
  await page.locator("div.form-group>label.control-label.ng-binding.ng-scope").nth(1).hover();
  await page.getByRole('heading', { name: "Event Dates" }).click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByPlaceholder("H:MMpm").fill("12:00am");
  await page.locator("div.form-group>label.control-label").nth(6).hover();
  await page.getByPlaceholder("H:MMpm").fill("11:45pm");
  await page.locator("div.form-group>label.control-label.ng-binding.ng-scope").nth(1).click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByPlaceholder("H:MMpm").click();
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByPlaceholder("H:MMpm").click();
  await page.getByRole('button', { name: "-- Please Select a Work Authorization --" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space() = \"Description*\"]").click();
  await page.locator("body.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders>p").click();
  textContent = MK.onSetGV(`Agenda: Relationship with Roxanne`, null);
  page.keyboard.type(textContent);
  await page.getByRole('heading', { name: "Additional Candidate Requirements" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Additional Candidate Requirements*\"]").click();
  await page.getByPlaceholder("Additional Candidate Requirements").fill("Stem Students");
  await page.getByRole('heading', { name: "Primary Event Contact" }).hover();
  await page.getByPlaceholder("Name").fill("John");
  await page.getByPlaceholder("Phone").fill("8456321478");
  await page.getByPlaceholder("Email").fill("john@yopmail.com");
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.waitForTimeout(2000);
  await page.locator("tr>td.day").nth(24).click();
  await page.getByRole('link', { name: "Continue" }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: "Event Details" })).toHaveText("Event Details");
  await page.getByRole('link', { name: "Submit" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('link', { name: "Events" }).click();
  await page.locator("//span[normalize-space()=\"Active\"]//ancestor::tr//span[normalize-space()=\"Muuktest Anual Event\"]").click();
  await page.waitForLoadState('load');
  await expect(page.getByRole('heading', { name: "Muuktest Anual Event" })).toHaveText("                    Muuktest Anual Event                                                                                ");
  await expect(page.locator("div.header-main>div.sub-header.ng-binding")).toHaveText("Walmart");
  await expect(page.locator("div.text-left.ng-scope>span.meeting-status-text.ng-binding")).toContainText("Event starts in ");
  await page.getByRole('link', { name: "Registrants (0)" }).hover();
  await page.getByRole('button', { name: "Action" }).click();
  await expect(page.getByRole('link', { name: "Edit Event" })).toHaveText("Edit Event");
  await expect(page.getByRole('link', { name: "Duplicate Event" })).toHaveText("Duplicate Event");
  await page.getByRole('link', { name: "Cancel Event" }).click();
  await expect(page.getByRole('heading', { name: "Please Confirm" })).toHaveText("Please Confirm");
  await expect(page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope")).toHaveText("Are you sure you would like to cancel this event?  This action cannot be undone.");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('link', { name: "Events" }).click();
  await page.reload();
  await page.reload();
  selector = MK.onSetGV(` //H2[normalize-space() = "Muuktest Anual Event"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
