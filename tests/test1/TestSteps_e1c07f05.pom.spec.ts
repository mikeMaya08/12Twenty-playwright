// TC: TC_A78092
// 12TE Interviews - Interview Plans - Create&#x2F;edit&#x2F;duplicate&#x2F;delete - Verify changes are saved

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("12TE Interviews - Interview Plans - Create&#x2F;edit&#x2F;duplicate&#x2F;delete - Verify changes are saved", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Interviews" }).click();
  await page.getByRole('link', { name: "Settings" }).click();
  await page.getByRole('heading', { name: "Settings" }).hover();
  await page.getByRole('link', { name: "Add Interview Plan" }).click();
  await page.getByRole('heading', { name: "Add Interview Plan" }).hover();
  await page.getByRole('heading', { name: "General" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Plan Name*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Plan Description\"]").hover();
  await page.getByPlaceholder("Plan Name").fill("Muuktest QA Test Plan");
  await page.getByPlaceholder("Plan Description").fill("This is a test plan with Stage for e2e tests");
  await page.getByRole('link', { name: "Add Stage" }).click();
  await page.getByRole('heading', { name: "Add Stage" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Stage Name*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Stage Description\"]").hover();
  await page.getByPlaceholder("e.g. Phone Screen").fill("Initial Screen");
  await page.getByPlaceholder("Describe what happens in this stage").fill("This takes place before the interview");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Add Stage" }).click();
  await page.getByPlaceholder("e.g. Phone Screen").fill("Phone Interview");
  await page.getByPlaceholder("Describe what happens in this stage").fill("Call with hiring manager");
  await page.getByRole('button', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Add Stage" }).click();
  await page.getByPlaceholder("e.g. Phone Screen").fill("In person interview");
  await page.getByPlaceholder("Describe what happens in this stage").fill("With hiring team");
  await page.getByRole('button', { name: "Apply" }).click();
  await page.getByRole('link', { name: "Add Stage" }).click();
  await page.getByPlaceholder("e.g. Phone Screen").fill("In person interview - Round 2");
  await page.getByPlaceholder("Describe what happens in this stage").fill("Second and final round of interviews");
  await page.getByRole('button', { name: "Apply" }).click();
  await page.locator("button.btn.dropdown-toggle.ng-binding.btn-icon>span.glyphicon.glyphicon-option-vertical.ng-scope").nth(2).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.getByRole('heading', { name: "Edit Stage" }).hover();
  await page.getByPlaceholder("e.g. Phone Screen").fill("In person interview - Round 1");
  await page.getByRole('button', { name: "Apply" }).click();
  await page.waitForTimeout(3000);
  await page.locator("//a[normalize-space() = \"Initial Screen\"]/ancestor::tr//td[normalize-space()=\"1\"]").hover();
  selector = MK.onSetGV(`//td[normalize-space()="1"]//span`, null);
  offsetY = MK.onSetGV(`+50`, null);
  source = page.locator(selector);
  offsetY = Number(offsetY);
  box = await source.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
  box.x + box.width / 2,
  box.y + box.height / 2 + offsetY,
  { steps: 10 }
  );
  await page.mouse.up();
  await page.waitForTimeout(3000);
  await page.locator("//a[normalize-space() = \"Initial Screen\"]/ancestor::tr//td[normalize-space()=\"2\"]").hover();
  selector = MK.onSetGV(`//td[normalize-space()="2"]//span`, null);
  offsetY = MK.onSetGV(`-50`, null);
  source = page.locator(selector);
  offsetY = Number(offsetY);
  box = await source.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
  box.x + box.width / 2,
  box.y + box.height / 2 + offsetY,
  { steps: 10 }
  );
  await page.mouse.up();
  await page.locator("//a[normalize-space() = \"Initial Screen\"]/ancestor::tr//td[normalize-space()=\"1\"]").hover();
  await page.locator("//A[normalize-space() = \"Initial Screen\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('link', { name: "Add Stage" }).click();
  await page.getByPlaceholder("e.g. Phone Screen").fill("Initial Screen - Phone");
  await page.getByPlaceholder("Describe what happens in this stage").fill("This is a call with HR");
  await page.getByRole('button', { name: "Apply" }).click();
  await page.waitForTimeout(3000);
  await page.locator("//A[normalize-space() = \"Initial Screen - Phone\"]/ancestor::tr//td[normalize-space()=\"4\"]").hover();
  selector = MK.onSetGV(`//td[normalize-space()="4"]//span`, null);
  offsetY = MK.onSetGV(`-165`, null);
  source = page.locator(selector);
  offsetY = Number(offsetY);
  box = await source.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
  box.x + box.width / 2,
  box.y + box.height / 2 + offsetY,
  { steps: 10 }
  );
  await page.mouse.up();
  await page.waitForTimeout(5000);
  await page.locator("//A[normalize-space() = \"Initial Screen - Phone\"]/ancestor::tr//td[normalize-space()=\"1\"]").hover();
  await page.locator("//span[normalize-space() = \"This is a call with HR\"]/ancestor::tr//td[normalize-space()=\"1\"]").hover();
  await page.locator("//A[normalize-space() = \"Phone Interview\"]/ancestor::tr//td[normalize-space()=\"2\"]").hover();
  await page.locator("//span[normalize-space() = \"Call with hiring manager\"]/ancestor::tr//td[normalize-space()=\"2\"]").hover();
  await page.locator("//A[normalize-space() = \"In person interview - Round 1\"]/ancestor::tr//td[normalize-space()=\"3\"]").hover();
  await page.locator("//span[normalize-space() = \"With hiring team\"]/ancestor::tr//td[normalize-space()=\"3\"]").hover();
  await page.locator("//A[normalize-space() = \"In person interview - Round 2\"]/ancestor::tr//td[normalize-space()=\"4\"]").hover();
  await page.locator("//span[normalize-space() = \"Second and final round of interviews\"]/ancestor::tr//td[normalize-space()=\"4\"]").hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.getByRole('button', { name: "Cancel" }).click();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Duplicate" }).click();
  await page.getByRole('heading', { name: "Edit Interview Plan" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]").hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//td[normalize-space()=\"This is a test plan with Stage for e2e tests\"]").hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//span[normalize-space()=\"Active\"]").hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Deactivate" }).click();
  await page.getByRole('button', { name: "Active (empty)" }).click();
  await page.locator("button.selected-filter__clear>i.fa.fa-undo").click();
  await page.getByRole('heading', { name: "Settings" }).click();
  await page.getByRole('link', { name: "Muuktest QA Test Plan (Copy)" }).hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//span[normalize-space()=\"Inactive\"]").hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//a[normalize-space()=\"Delete\"]").click();
  await page.getByRole('heading', { name: "Delete Interview Plan?" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete \\'Muuktest QA Test Plan (Copy)\\'? This action cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete" }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: "Interviews" }).click();
  await page.getByRole('link', { name: "Interview Schedule" }).click();
  await page.getByPlaceholder("Interview Name").click();
  const optionLocator = page.locator(
  '//select[@name="CoreInterviewPlanTemplateId"]//option[@label="Muuktest QA Test Plan"]'
  );
  const count = await optionLocator.count();
  if (count > 0) {
  snippetLog("Option found: 'Muuktest QA Test Plan'");
  } else {
  throw new Error("'Muuktest QA Test Plan' option was not found");
  }
  await page.locator("//LABEL[normalize-space() = \"Employer Selected\"]").click();
  await page.getByRole('link', { name: "Settings" }).click();
  await page.getByRole('link', { name: "Muuktest QA Test Plan" }).hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//td[normalize-space()=\"This is a test plan with Stage for e2e tests\"]").hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//span[normalize-space()=\"Active\"]").hover();
  await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Delete" }).click();
  await page.getByRole('heading', { name: "Delete Interview Plan?" }).hover();
  await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete \\'Muuktest QA Test Plan\\'? This action cannot be undone.\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Delete" }).click();
  await page.waitForTimeout(5000);
});
