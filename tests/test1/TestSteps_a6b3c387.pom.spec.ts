// TC: TC60681
// Interview Questions - Add Interview to Post Graduation - Student

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Interview Questions - Add Interview to Post Graduation - Student", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Interview Questions" }).click();
  await page.getByRole('heading', { name: "Interview Questions" }).hover();
  await page.getByRole('heading', { name: "Post Graduation" }).hover();
  await page.getByRole('link', { name: "Add Interview" }).click();
  await page.getByRole('heading', { name: "Add an Interview - Post Graduation - Interview (In Process)" }).hover();
  await page.locator("div.grpDescr>label").hover();
  await page.getByPlaceholder("Employer Name").fill("Maksim Tank");
  await page.getByPlaceholder("Job Title").fill("Manager");
  await page.locator("SELECT[name='Job.JobIndustryId'][id='Job.JobIndustryId']").selectOption("149999414151563");
  await page.locator("SELECT[name='Job.JobFunctionId'][id='Job.JobFunctionId']").selectOption("100001010430350");
  await page.locator("div.grpDescr>label").nth(1).hover();
  await page.locator("SELECT[id='Length_Id']").selectOption("5");
  await page.locator("//LABEL[normalize-space() = \"Interview Format *\"]").hover();
  await page.locator("SELECT[id='Format_Id']").selectOption("6");
  await page.locator("//LABEL[normalize-space() = \"Interview Round *\"]").hover();
  await page.locator("SELECT[id='Round_Id']").selectOption("1");
  await page.locator("div.grpDescr>label").nth(2).hover();
  await page.getByRole('button', { name: "Add a question *" }).click();
  await page.getByRole('heading', { name: "Add interview question:" }).hover();
  await page.locator("//P[normalize-space() = \"Add interview question:\"]").hover();
  await page.locator("div>div.max250").hover();
  await page.locator("TEXTAREA[id='questionText'][name='questionText']").fill("Describe a challenging situation you faced at work and how you handled it.");
  await page.getByRole('link', { name: "Save" }).click();
  await page.locator("td.border-top-td>span.questionText").hover();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Remove" }).hover();
  await page.locator("td>div.max250").hover();
  await page.locator("TEXTAREA[id='Insight'][name='Insight']").fill("The candidate appeared nervous at the beginning but gradually became more confident.");
  await page.getByPlaceholder("MM/DD/YYYY").fill("10/17/2024");
  await page.locator("SELECT[name='Job.CustomJobSourceId'][id='Job.CustomJobSourceId']").selectOption("100011010338748");
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: "Add" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(3).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.waitForLoadState('load');
  await page.getByRole('heading', { name: "Maksim Tank" }).hover();
  await page.locator("div.header-main>span.sub-info.ng-binding.ng-scope").nth(1).hover();
  await page.locator("div.badges>span.badge").nth(1).hover();
  await page.locator("div.card-info-primary>span.primary-item.ng-binding").nth(1).hover();
  await page.locator("span.sub-info>tt-date-time-display.ng-binding").nth(1).hover();
  await page.getByRole('link', { name: "View Details" }).click();
  await page.locator("dl.dl-horizontal>dt.ng-scope").hover();
  await page.locator("dl.dl-horizontal>dd.ng-binding.ng-scope").hover();
  await page.getByRole('link', { name: "Hide Details" }).hover();
  await page.locator("BUTTON[type='button']").nth(3).click();
  await page.getByRole('link', { name: "Not Offered Job" }).hover();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Interview" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete Interview" }).click();
  await page.getByRole('heading', { name: "Oops!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  maxRetries = 0;
  while(!pageUpdated && maxRetries++ < 600){ await new Promise((resolve) => setTimeout(resolve, 100)); }
  await expect(await page.url()).toContain('e2e-tests-campuswide.admin.qa-12twenty.com/');
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByPlaceholder("Search by Name, Email Address or ID").fill("e2e Test Student");
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "e2e Test Student" }).click();
  await page.getByRole('heading', { name: "e2e Test Student" }).hover();
  await page.getByRole('link', { name: "Interview Questions" }).click();
  await page.getByRole('heading', { name: "Maksim Tank" }).hover();
  await page.locator("div.badges>span.badge").nth(2).hover();
  await page.locator("BUTTON[type='button']").nth(10).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.locator("td.border-top-td>span.questionText").hover();
  await page.getByRole('link', { name: "Remove" }).click();
  await page.getByRole('heading', { name: "Remove Question" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(4).hover();
  await page.getByRole('link', { name: "Remove" }).click();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(`//SPAN[contains(text(),"Describe a challenging situation you fac")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
  await page.getByRole('button', { name: "Update" }).click();
  await page.getByRole('heading', { name: "Success" }).hover();
  await page.locator("div.modal-content>div.modal-body").nth(3).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`0`, null);
  await page.locator("BUTTON[type='button']").nth(3).click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Interview" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "Delete Interview" }).click();
  await page.getByRole('heading', { name: "Success!" }).hover();
  await page.locator("div.modal-body.ng-pristine.ng-valid.ng-scope>div.text-area-display.ng-binding.ng-scope").hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.reload();
  await page.waitForTimeout(2000);
  selector = MK.onSetGV(` //H4[contains(text(),"Maksim Tank")]//following::SPAN[contains(text(),"Post Graduation - Interview (In Process)")]`, null);
  var isElementPresent = await page.locator(selector).count() > 0;
  if (!isElementPresent) {
  snippetLog('Element is not present.');
  } else {
  throw new Error('Element is present');
  }
});
