// TC: TC58320
// Contacts - Admin can add&#x2F;delete a Contact

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Contacts - Admin can add&#x2F;delete a Contact", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.getByRole('heading', { name: "Contact Directory" }).hover();
  await page.getByRole('link', { name: "Add Contact" }).click();
  await page.getByRole('heading', { name: "Add New Contact" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.locator("INPUT[name='Company']").fill("Cisco Systems");
  await page.locator("//DIV[normalize-space() = \"Cisco Systems\"]").nth(2).click();
  await page.locator("SELECT[id='prefix'][name='prefix']").selectOption("number:2");
  await page.locator("INPUT[name='FirstName']").fill("Sucharitha");
  await page.locator("INPUT[name='Lastname']").fill("Gouru");
  await page.locator("div.form-controls>input.form-control").nth(3).fill("Manager");
  await page.locator("SELECT[id='visibility'][name='visibility']").selectOption("number:2");
  await page.locator("INPUT[name='EmailAddress']").fill("suchi@muukteam.testinator.com");
  await page.locator("//label[normalize-space()=\"Alternate Email\"]//following::input").fill("suchi123@gmail.com");
  await page.getByPlaceholder("www.linkedin.com/in/your-public-profile-id").fill("https://www.linkedin.com/in/sucharitha-gouru");
  await page.locator("INPUT[name='OfficePhone']").fill("1234567890");
  await page.locator("INPUT[name='CellPhone']").fill("9381393435");
  await page.locator("SELECT[id='country'][name='country']").selectOption("number:106");
  await page.locator("INPUT[id='city'][name='city']").fill("Hyderabad - India");
  await page.locator("//DIV[normalize-space() = \"Hyderabad - India\"]").click();
  await page.locator("INPUT[name='Address']").fill("Sharadha Nagar");
  await page.locator("INPUT[name='Zip']").fill("500013");
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.getByPlaceholder("Contact Name or Email Address").fill("Sucharitha");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").nth(1).hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding").nth(2).hover();
  await page.locator("div.entity-short-summary-primary>span.sub-info.ng-binding.ng-scope").nth(1).hover();
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").nth(1).click();
  await page.waitForTimeout(3000);
  await page.locator("div.sub-header.badges>span.badge.primary.ng-scope").hover();
  await page.getByRole('link', { name: "suchi@muukteam.testinator.com" }).hover();
  await page.locator("dd>span.ng-binding.ng-scope").hover();
  await page.locator("dd>span.ng-binding.ng-scope").nth(1).hover();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Contact" }).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Contact" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForTimeout(20000);
  var elementLocator = page.locator('//SPAN[contains(text(),"Miss. Sucharitha Gouru")]');
  if (await elementLocator > 0) {
  throw new Error("Contact is still present.");
  await expect(elementLocator).toBeVisible();
  } else {
  console.log("Contact was succesfully deleted.");
  }
});
