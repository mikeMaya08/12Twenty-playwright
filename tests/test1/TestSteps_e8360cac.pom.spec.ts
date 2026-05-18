// TC: TC67060
// 12TE Candidate Search - Employer user filters for candidate, favorites, unlocks, and sends email to candidates

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE Candidate Search - Employer user filters for candidate, favorites, unlocks, and sends email to candidates", async ({ page, context }) => {
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

  await page.goto(employerQA, { timeout: 90000 });
  await page.setViewportSize({ width: 1920, height: 1080 });
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
  await page.getByRole('link', { name: "Home" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Candidate Search" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Unlocked Candidates" }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  var resultsText = await page.locator('//div[contains(@class,"num-results")]').textContent();
  var match = resultsText?.match(/Results\s*:\s*([\d,]+)/);
  if (match) {
  resultsCount = parseInt(match[1].replace(/,/g, ''), 10);
  }
  snippetLog('Current unlocked candidates: ' + resultsCount)
  await page.getByRole('link', { name: "All" }).click();
  await page.waitForLoadState('load');
  await page.reload();
  await page.getByRole('button', { name: "School (empty)" }).click();
  await page.locator("//SPAN[contains(normalize-space(),\"School\")][contains(@class,\"selected-filter\")]").hover();
  await page.getByPlaceholder("School").fill("UCLA");
  await page.getByRole('button', { name: "School (empty)" }).click();
  await page.getByRole('button', { name: "More Filters" }).click();
  await page.getByPlaceholder("Search filters").fill("Unlocked Date");
  await page.locator("li.ng-scope>span.filter-group.ng-binding").hover();
  await page.getByRole('button', { name: "Unlocked Date" }).click();
  await page.locator("//SPAN[contains(normalize-space(),\"Unlocked Date\")][contains(@class,\"selected-filter\")]").hover();
  await page.getByPlaceholder("MM/DD/YYYY").fill("01/01/2025");
  await page.getByPlaceholder("MM/DD/YYYY").click();
  await page.locator("tr>td.today.day").click();
  await page.getByRole('heading', { name: "Candidate Search" }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: "More Filters" }).click();
  await page.getByPlaceholder("Search filters").fill("Unlocked Date");
  await page.getByRole('button', { name: "Unlocked Date 05/05/2025 - 05/26/2025 (empty)" }).click();
  await page.waitForTimeout(3000);
  await page.locator("div.selected-filter__actions.ng-scope>select.selected-filter__include.ng-valid.ng-not-empty.ng-touched.ng-dirty.ng-valid-parse").click();
  await page.getByRole('heading', { name: "Candidate Search" }).click();
  await page.reload();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: "Load more results..." }).click();
  await page.getByRole('button', { name: "Reset Filters" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: "Unlock" }).click();
  await expect(page.locator("div.auto-close>span")).toHaveText("Candidate Unlocked");
  await page.getByRole('link', { name: "Unlocked Candidates" }).click();
  await page.reload();
  await page.waitForTimeout(5000);
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  await page.locator("div.card-info-primary>span.primary-item.ng-binding.ng-scope").hover();
  await page.locator("a.ng-scope>i.fa-heart.far").click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: "Favorites" }).click();
  await expect(page.locator("div.card-info-primary>span.primary-item.ng-binding.ng-scope")).toHaveText("` + textContent + `");
  await page.locator("a.ng-scope.ng-isolate-scope>i.fal.fa-envelope").click();
  await expect(page.getByRole('heading', { name: "Send email to Latrina Leighton" })).toHaveText("Send email to ` + textContent + `");
  await page.locator("div.form-group.ng-scope>label.control-label").nth(1).hover();
  await page.locator("//label[normalize-space()=\"Cc:\"]//following::input").fill("test@gmail.com");
  await page.locator("div.form-group>label.control-label").nth(2).hover();
  await page.locator("INPUT[type='text'][name='subject']").fill("Make $5 per survey — quick tasks");
  await page.locator("div.form-group>label.control-label").nth(3).hover();
  await page.locator("SPAN[role='presentation']").click();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Send" }).click();
  await page.waitForLoadState('load');
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('button', { name: "Cancel" }).click();
  await page.locator("a.ng-scope.ng-isolate-scope>i.fal.fa-envelope").click();
  await page.locator("INPUT[type='text'][name='subject']").fill("Invitation to apply — Software Engineer Intern");
  await page.locator("SPAN[role='presentation']").click();
  await page.waitForTimeout(1000);
  await page.keyboard.down("End");
  await page.keyboard.press("Shift");
  await page.keyboard.up("Home");
  await page.keyboard.press("Shift");
  await page.keyboard.type("Backspace");
  await page.getByRole('button', { name: "Send" }).click();
  await expect(page.locator("div.auto-close>span")).toHaveText("Email successfully sent to 1 candidates.");
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "OK" }).click();
  await page.locator("a.ng-scope>i.fa-heart.far").click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//SPAN[contains(text(),"${textContent}")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
