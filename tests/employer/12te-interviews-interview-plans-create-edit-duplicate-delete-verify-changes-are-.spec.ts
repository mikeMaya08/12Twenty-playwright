// TC: TC_A78092
// 12TE Interviews - Interview Plans - Create/edit/duplicate/delete - Verify changes are saved

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_DELETE,
  BTN_SAVE,
  RBTN_DELETE,
  RBTN_EDIT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Interviews - Interview Plans - Create/edit/duplicate/delete - Verify changes are saved - TC_A78092", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Interviews\"]").nth(0).click();
  });

  await test.step(`Click "Settings"`, async () => {
    await page.locator("//A[normalize-space() = \"Settings\"]").nth(0).click();
  });

  await test.step(`Hover "Settings"`, async () => {
    await page.locator("//H1[normalize-space() = \"Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Add Interview Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Add Interview Plan\"]").nth(0).click();
  });

  await test.step(`Hover "Add Interview Plan"`, async () => {
    await page.locator("//H1[normalize-space() = \"Add Interview Plan\"]").nth(0).hover();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H2[normalize-space() = \"General\"]").nth(0).hover();
  });

  await test.step(`Hover "Plan Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Plan Name*\"]").nth(0).hover();
  });

  await test.step(`Hover "Plan Description"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Plan Description\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest QA Test Plan"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-qpw6ve-text'][@name='PlanName'][@placeholder='Plan Name']").nth(0).fill("Muuktest QA Test Plan");
  });

  await test.step(`Fill "This is a test plan with Stage for e2e …"`, async () => {
    await page.locator("//TEXTAREA[@id='input-z6aoxc-textarea'][@name='PlanDescription'][@placeholder='Plan Description']").nth(0).fill("This is a test plan with Stage for e2e tests");
  });

  await test.step(`Click "Add Stage"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Stage\"]").nth(0).click();
  });

  await test.step(`Hover "Add Stage"`, async () => {
    await page.locator("//H3[normalize-space() = \"Add Stage\"]").nth(0).hover();
  });

  await test.step(`Hover "Stage Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Stage Name*\"]").nth(0).hover();
  });

  await test.step(`Hover "Stage Description"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Stage Description\"]").nth(0).hover();
  });

  await test.step(`Fill "Initial Screen"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-hj1la3-text'][@name='StageName'][@placeholder='e.g. Phone Screen']").nth(0).fill("Initial Screen");
  });

  await test.step(`Fill "This takes place before the interview"`, async () => {
    await page.locator("//TEXTAREA[@id='input-u4qczm-textarea'][@name='StageDescription'][@placeholder='Describe what happens in this stage']").nth(0).fill("This takes place before the interview");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Apply\"]").nth(0).click();
  });

  await test.step(`Click "Add Stage"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Stage\"]").nth(0).click();
  });

  await test.step(`Fill "Phone Interview"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-np7hpu-text'][@name='StageName'][@placeholder='e.g. Phone Screen']").nth(0).fill("Phone Interview");
  });

  await test.step(`Fill "Call with hiring manager"`, async () => {
    await page.locator("//TEXTAREA[@id='input-u4qczm-textarea'][@name='StageDescription'][@placeholder='Describe what happens in this stage']").nth(0).fill("Call with hiring manager");
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Apply\"]").nth(0).click();
  });

  await test.step(`Click "Add Stage"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Stage\"]").nth(0).click();
  });

  await test.step(`Fill "In person interview"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-np7hpu-text'][@name='StageName'][@placeholder='e.g. Phone Screen']").nth(0).fill("In person interview");
  });

  await test.step(`Fill "With hiring team"`, async () => {
    await page.locator("//TEXTAREA[@id='input-u4qczm-textarea'][@name='StageDescription'][@placeholder='Describe what happens in this stage']").nth(0).fill("With hiring team");
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Apply\"]").nth(0).click();
  });

  await test.step(`Click "Add Stage"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Stage\"]").nth(0).click();
  });

  await test.step(`Fill "In person interview - Round 2"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-np7hpu-text'][@name='StageName'][@placeholder='e.g. Phone Screen']").nth(0).fill("In person interview - Round 2");
  });

  await test.step(`Fill "Second and final round of interviews"`, async () => {
    await page.locator("//TEXTAREA[@id='input-u4qczm-textarea'][@name='StageDescription'][@placeholder='Describe what happens in this stage']").nth(0).fill("Second and final round of interviews");
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Apply\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(15).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(2).click();
  });

  await test.step(`Hover "Edit Stage"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Stage\"]").nth(0).hover();
  });

  await test.step(`Fill "In person interview - Round 1"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-rwft6o-text'][@name='StageName'][@placeholder='e.g. Phone Screen']").nth(0).fill("In person interview - Round 1");
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Apply\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "Initial Screen"`, async () => {
    await page.locator("//a[normalize-space() = \"Initial Screen\"]/ancestor::tr//td[normalize-space()=\"1\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//td[normalize-space()=\"1\"]//span";
  });

  await test.step(`Mouse action`, async () => {
    await page.mouse.down();
    await page.mouse.up();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "Initial Screen"`, async () => {
    await page.locator("//a[normalize-space() = \"Initial Screen\"]/ancestor::tr//td[normalize-space()=\"2\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//td[normalize-space()=\"2\"]//span";
  });

  await test.step(`Mouse action`, async () => {
    await page.mouse.down();
    await page.mouse.up();
  });

  await test.step(`Hover "Initial Screen"`, async () => {
    await page.locator("//a[normalize-space() = \"Initial Screen\"]/ancestor::tr//td[normalize-space()=\"1\"]").nth(0).hover();
  });

  await test.step(`Click "Initial Screen"`, async () => {
    await page.locator("//A[normalize-space() = \"Initial Screen\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Click "Add Stage"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Stage\"]").nth(0).click();
  });

  await test.step(`Fill "Initial Screen - Phone"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-hj1la3-text'][@name='StageName'][@placeholder='e.g. Phone Screen']").nth(0).fill("Initial Screen - Phone");
  });

  await test.step(`Fill "This is a call with HR"`, async () => {
    await page.locator("//TEXTAREA[@id='input-u4qczm-textarea'][@name='StageDescription'][@placeholder='Describe what happens in this stage']").nth(0).fill("This is a call with HR");
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//BUTTON[@type='submit'][normalize-space() = \"Apply\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "Initial Screen - Phone"`, async () => {
    await page.locator("//A[normalize-space() = \"Initial Screen - Phone\"]/ancestor::tr//td[normalize-space()=\"4\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//td[normalize-space()=\"4\"]//span";
  });

  await test.step(`Mouse action`, async () => {
    await page.mouse.down();
    await page.mouse.up();
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Initial Screen - Phone"`, async () => {
    await page.locator("//A[normalize-space() = \"Initial Screen - Phone\"]/ancestor::tr//td[normalize-space()=\"1\"]").nth(0).hover();
  });

  await test.step(`Hover "This is a call with HR"`, async () => {
    await page.locator("//span[normalize-space() = \"This is a call with HR\"]/ancestor::tr//td[normalize-space()=\"1\"]").nth(0).hover();
  });

  await test.step(`Hover "Phone Interview"`, async () => {
    await page.locator("//A[normalize-space() = \"Phone Interview\"]/ancestor::tr//td[normalize-space()=\"2\"]").nth(0).hover();
  });

  await test.step(`Hover "Call with hiring manager"`, async () => {
    await page.locator("//span[normalize-space() = \"Call with hiring manager\"]/ancestor::tr//td[normalize-space()=\"2\"]").nth(0).hover();
  });

  await test.step(`Hover "In person interview - Round 1"`, async () => {
    await page.locator("//A[normalize-space() = \"In person interview - Round 1\"]/ancestor::tr//td[normalize-space()=\"3\"]").nth(0).hover();
  });

  await test.step(`Hover "With hiring team"`, async () => {
    await page.locator("//span[normalize-space() = \"With hiring team\"]/ancestor::tr//td[normalize-space()=\"3\"]").nth(0).hover();
  });

  await test.step(`Hover "In person interview - Round 2"`, async () => {
    await page.locator("//A[normalize-space() = \"In person interview - Round 2\"]/ancestor::tr//td[normalize-space()=\"4\"]").nth(0).hover();
  });

  await test.step(`Hover "Second and final round of interviews"`, async () => {
    await page.locator("//span[normalize-space() = \"Second and final round of interviews\"]/ancestor::tr//td[normalize-space()=\"4\"]").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]//following::A[@role='button'][normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/following::A[@role='button'][normalize-space() = \"Duplicate\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Interview Plan"`, async () => {
    await page.locator("//H1[normalize-space() = \"Edit Interview Plan\"]").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//td[normalize-space()=\"This is a test plan with Stage for e2e tests\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//span[normalize-space()=\"Active\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//A[normalize-space() = \"Deactivate\"]").nth(0).click();
  });

  await test.step(`Click "Active"`, async () => {
    await page.locator("//button//span[normalize-space()=\"Active\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@title=\"Reset This Filter\"]").nth(0).click();
  });

  await test.step(`Click "Settings"`, async () => {
    await page.locator("//H1[normalize-space() = \"Settings\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//span[normalize-space()=\"Inactive\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan (Copy)"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan (Copy)\"]/ancestor::tr//a[normalize-space()=\"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Interview Plan?"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Interview Plan?\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete \\'Muuktest QA Test Plan (Copy)\\'? This action cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(BTN_DELETE).nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Interviews\"]").nth(1).click();
  });

  await test.step(`Click "Interview Schedule"`, async () => {
    await page.locator("//A[normalize-space() = \"Interview Schedule\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//select[@name=\"CoreInterviewPlanTemplateId\"]").nth(0).click();
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Click "Employer Selected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Selected\"]").nth(0).click();
  });

  await test.step(`Click "Settings"`, async () => {
    await page.locator("//A[normalize-space() = \"Settings\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//td[normalize-space()=\"This is a test plan with Stage for e2e tests\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//span[normalize-space()=\"Active\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest QA Test Plan"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest QA Test Plan\"]/ancestor::tr//a[normalize-space()=\"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Interview Plan?"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Interview Plan?\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete \\'Muuktest QA Test Plan\\'? This action cannot be undone.\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(BTN_DELETE).nth(0).click();
    await page.waitForTimeout(5000);
  });

});
