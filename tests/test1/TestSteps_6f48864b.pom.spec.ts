// TC: TC58472
// Employers - Open Employer profile and create a new contact from the profile page

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Open Employer profile and create a new contact from the profile page", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByPlaceholder("Company Name").fill("3M");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "3M" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "3M" }).hover();
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.getByRole('link', { name: "Add Contact" }).click();
  await page.waitForLoadState('load');
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.locator("SELECT[id='prefix'][name='prefix']").selectOption("number:2");
  await page.locator("INPUT[name='FirstName']").fill("Nishita");
  await page.locator("INPUT[name='Lastname']").fill("Sunkara");
  await page.locator("div.form-controls>input.form-control").nth(3).fill("Manager");
  await page.locator("SELECT[id='visibility'][name='visibility']").selectOption("number:2");
  await page.locator("INPUT[name='EmailAddress']").fill("nishi@muukteam.testinator.com");
  await page.locator("//label[normalize-space()=\"Alternate Email\"]//following::input").fill("nishi123@gmail.com");
  await page.locator("//LABEL[normalize-space() = \"No\"]").nth(2).click();
  await page.getByPlaceholder("www.linkedin.com/in/your-public-profile-id").hover();
  await page.getByPlaceholder("www.linkedin.com/in/your-public-profile-id").fill(" https://www.linkedin.com/in/nishitha");
  await page.locator("INPUT[name='OfficePhone']").hover();
  await page.locator("INPUT[name='OfficePhone']").fill(" 123-456-7890");
  await page.locator("INPUT[name='CellPhone']").fill("9381393435");
  await page.locator("SELECT[id='country'][name='country']").selectOption("number:106");
  await page.locator("INPUT[id='city'][name='city']").hover();
  await page.locator("INPUT[id='city'][name='city']").fill("Hyderabad");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").nth(1).click();
  await page.locator("INPUT[name='Address']").fill("Sharadha Nagar");
  await page.locator("INPUT[name='Zip']").fill("500013");
  await page.getByRole('button', { name: "Save" }).click();
  await page.getByRole('link', { name: "Contacts" }).click();
  await page.waitForTimeout(2000);
  await page.locator("ng-transclude>span.primary-item-text.ng-binding.ng-scope").click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Nishita Sunkara" }).hover();
  await page.getByRole('link', { name: "3M" }).hover();
  await page.locator("//DIV[normalize-space() = \"Manager\"]").hover();
  await page.getByRole('link', { name: "nishi@muukteam.testinator.com" }).hover();
});
