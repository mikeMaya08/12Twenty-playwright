// TC: TC61343
// Employers - Student adds name filter and verifies correct company is displayed

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Employers - Student adds name filter and verifies correct company is displayed", async ({ page, context }) => {
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

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
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
  await page.getByRole('link', { name: "Employers" }).click();
  await page.reload();
  await page.getByRole('button', { name: "Add Filter" }).click();
  await page.getByPlaceholder("Search filters").fill("name");
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByRole('button', { name: "Name" }).click();
  await page.locator("//SPAN[contains(normalize-space(),\"Name\")][contains(@class,\"selected-filter\")]").hover();
  await page.locator("button.selected-filter__clear>i.fa.fa-undo").hover();
  await page.locator("button.selected-filter__remove>i.far.fa-trash-alt").hover();
  await page.getByPlaceholder("Name").fill("AIG");
  await page.getByRole('heading', { name: "Employer Directory" }).click();
  await page.getByRole('button', { name: "Name AIG (empty)" }).click();
  await page.locator("div.results-header-right>div.num-results.ng-binding.ng-scope").hover();
  await page.getByRole('heading', { name: "Employers" }).click();
  await page.getByRole('link', { name: "AIG" }).hover();
  await page.getByRole('button', { name: "Name AIG (empty)" }).click();
  await page.locator("button.selected-filter__remove>i.far.fa-trash-alt").click();
  selector = MK.onSetGV(`//BUTTON[@type=\'button\'][normalize-space() = "Name AIG (empty)"]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
