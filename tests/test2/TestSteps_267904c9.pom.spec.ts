// TC: TC_A81561
// Attributes - Enable&#x2F;Disable eligibility for Employers

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Attributes - Enable&#x2F;Disable eligibility for Employers", async ({ page, context }) => {
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
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "General" }).click();
  await page.locator("//th[normalize-space()=\"Undergraduate GPA\"]").hover();
  selector = MK.onSetGV(`(//th[normalize-space()="Undergraduate GPA"]/ancestor::tr//div[contains(@class,"btn-success")])[last()]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//label[contains(@class,\"btn toggle-off\")])[last()]").click();
  await page.getByRole('button', { name: "Save Changes" }).click();
  }
  await page.locator("tr>th").nth(2).hover();
  await page.locator("(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//label[contains(@class,\"btn toggle-off\")])[last()]").click();
  await page.getByRole('button', { name: "Save Changes" }).click();
  await page.locator("//SPAN[normalize-space() = \"Eligibility configuration saved successfully.\"]").hover();
  await page.getByRole('link', { name: "Manage Users" }).click();
  await page.getByRole('link', { name: "Employers" }).click();
  await page.locator("tr>td.ng-binding").hover();
  await page.locator("//td[contains(normalize-space(),\"e2e.employeruser.subscription.admin@walmart.com\")]/ancestor::tr//button").click();
  await page.getByRole('link', { name: "Login as user..." }).click();
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.qa-12twenty.com/on-login?returnUrl=%2Fdashboard%2Femployer');
  await page.getByRole('heading', { name: "Post a Student Employment Job" }).hover();
  await page.locator("//P[normalize-space() = \"Create a Student Employment job posting to find the ideal student for your position\"]").hover();
  await page.getByRole('link', { name: "Post" }).click();
  await page.getByRole('heading', { name: "Create Student Employment Job" }).hover();
  await page.getByRole('heading', { name: "Eligibility" }).hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]").hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]/following-sibling::div[@class=\"form-controls\"]").hover();
  await page.getByRole('button', { name: "Cancel" }).click();
  await page.getByRole('link', { name: "Host" }).click();
  await page.getByRole('heading', { name: "Host an Event" }).hover();
  await page.getByRole('heading', { name: "Eligibility" }).hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]").hover();
  await page.locator("//LABEL[contains(normalize-space(),\"Minimum Undergraduate GPA\")]/following-sibling::div[@class=\"form-controls\"]").hover();
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "General" }).click();
  await page.locator("//th[normalize-space()=\"Undergraduate GPA\"]").hover();
  await page.locator("tr>th").nth(2).hover();
  await page.locator("(//th[normalize-space()=\"Undergraduate GPA\"]/ancestor::tr//label[contains(@class,\"btn toggle-off\")])[last()]").click();
  await page.getByRole('button', { name: "Save Changes" }).click();
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.getByRole('link', { name: "Home" }).click();
  await page.getByRole('heading', { name: "Post a Student Employment Job" }).hover();
  await page.locator("//P[normalize-space() = \"Create a Student Employment job posting to find the ideal student for your position\"]").hover();
  await page.getByRole('link', { name: "Post" }).click();
  await page.getByRole('heading', { name: "Create Student Employment Job" }).hover();
  await page.getByRole('heading', { name: "Eligibility" }).hover();
  await page.getByRole('button', { name: "Cancel" }).click();
  await page.getByRole('link', { name: "Host" }).click();
  await page.getByRole('heading', { name: "Host an Event" }).hover();
  await page.getByRole('heading', { name: "Eligibility" }).hover();
});
