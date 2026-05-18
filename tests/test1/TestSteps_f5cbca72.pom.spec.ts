// TC: TC58244
// Employers - Verify that a user can successfully add a new employer -Admin

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Verify that a user can successfully add a new employer -Admin", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Employers" }).click();
  await page.getByRole('heading', { name: "Employer Directory" }).hover();
  await page.getByRole('link', { name: "Add Employer" }).click();
  await page.getByRole('heading', { name: "Add New Employer" }).hover();
  await page.locator("INPUT[name='EmployerName']").fill("Ramya");
  await page.locator("span.twitter-typeahead>input.form-control").nth(1).fill("JPMorgan Chase");
  await page.locator("div.tt-suggestion.tt-selectable>strong.tt-highlight").click();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").click();
  await page.getByRole('button', { name: "None-selected" }).click();
  await page.getByPlaceholder("Search").fill("Consulting - Healthcare");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("SELECT[id='NumberOfEmployeesId'][name='NumberOfEmployeesId']").selectOption("number:3");
  await page.getByRole('heading', { name: "Add New Employer" }).click();
  await page.locator("//LABEL[normalize-space() = \"Account Manager*\"]").click();
  await page.locator("SELECT[id='AccountManagerId'][name='AccountManagerId']").selectOption("number:540016055100183");
  await page.getByPlaceholder("Website").fill("https://www.muuktest.com");
  await page.locator("SELECT[id='OutreachPriorityId'][name='OutreachPriorityId']").selectOption("number:1");
  await page.locator("div.uploaded-image-cmp>div.uploaded-image-no-image-container.ng-scope").click();
  fileName = MK.onSetGV(`logomuuk.jpg`, null);
  await page.waitForTimeout(15000);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "OK" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "None-selected" }).click();
  await page.getByPlaceholder("Search").fill("Org Capacity: DEIB");
  await page.locator('input[type="checkbox"]').click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Priority Resources & Efforts\"]").click();
  await page.locator("SELECT[id='PublicDemographicsTypeId'][name='PublicDemographicsTypeId']").selectOption("number:2");
  await page.getByPlaceholder("Enter your headquarters address").fill("Maldives");
  await page.locator("span.pac-item-query>span.pac-matched").click();
  await page.getByPlaceholder("Linkedin Profile").fill("https://www.linkedin.com/in/ramya");
  await page.getByRole('button', { name: "Save" }).click();
  await page.waitForTimeout(5000);
  await page.getByPlaceholder("Company Name").fill("Ramya");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Ramya" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Reject" }).click();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Reject" }).click();
  await page.locator("div.sub-header.badges>span.badge.rejected").hover();
});
