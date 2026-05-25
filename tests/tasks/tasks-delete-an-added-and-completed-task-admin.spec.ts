// TC: TC58566
// Tasks - Delete an Added and Completed Task - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { BTN_SAVE_CONTAINS, INPUT_DATE, NAV_HOME } from '@config/selectors';

test("Tasks - Delete an Added and Completed Task - Admin - TC58566", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsAdmin(page);
  });



  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Tasks"`, async () => {
    await page.locator("//A[normalize-space() = \"Tasks\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Tasks"`, async () => {
    await page.locator("//H1[contains(text(),\"Tasks\")]").nth(0).hover();
  });

  await test.step(`Click "New Task"`, async () => {
    await page.locator("//A[normalize-space() = \"New Task\"]").nth(0).click();
  });

  await test.step(`Fill "Task to complete"`, async () => {
    await page.locator("//INPUT[@name='Subject'][@id='subjectId']").nth(0).fill("Task to complete");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='status'][@name='status']").nth(0).click();
  });

  await test.step(`Fill "12/12/2026"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("12/12/2026");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='status'][@name='status']").nth(0).click();
  });

  await test.step(`Click "None"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"None\"]").nth(0).click();
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  await test.step(`Fill "Testing tasks"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here'][@id='description']").nth(0).fill("Testing tasks");
  });

  await test.step(`Fill "elliott"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-luqbme-autocomplete'][@name=''][@placeholder='Select a contact']").nth(0).fill("elliott");
  });

  await test.step(`Click "Adam Elliott - McKesson - Recruiter"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Adam Elliott - McKesson - Recruiter\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Hover "Task Status:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//select[@id=\"TaskStatusId\"]").nth(0).click();
  });

  await test.step(`Type "All"`, async () => {
    await page.keyboard.type("All");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
  });

  await test.step(`Hover "Task to complete"`, async () => {
    await page.locator("//DIV[contains(text(),\"Task to complete\")]").nth(0).hover();
  });

  await test.step(`Click "Task to complete"`, async () => {
    await page.locator("(//DIV[contains(text(),\"Task to complete\")]/preceding::a)[last()]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SELECT[@id='status'][@name='status']").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

});
