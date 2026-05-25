// TC: TC58510
// Tasks - Add a New Task as Open - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_SAVE_CONTAINS,
  INPUT_DATE,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  RBTN_OK_ID_CONTAINS,
} from '@config/selectors';

test("Tasks - Add a New Task as Open - Admin - TC58510", async ({ page, context }) => {
  let selector = `0`;

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
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[normalize-space()=\"Review Quarterly Report\"]";
  });

  await test.step(`Click "Review Quarterly Report"`, async () => {
    await page.locator("//div[normalize-space()=\"Review Quarterly Report\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[@title='Delete Task'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Task"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Task\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this tas"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this tas\")]").nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[contains(text(),\"Confirm\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the task."`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the task.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_ID_CONTAINS).nth(0).click();
  });

  await test.step(`Click "New Task"`, async () => {
    await page.locator("//A[normalize-space() = \"New Task\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Add Task"`, async () => {
    await page.locator("//H1[contains(text(),\"Add Task\")]").nth(0).hover();
  });

  await test.step(`Fill "Review Quarterly Report"`, async () => {
    await page.locator("//INPUT[@name='Subject'][@id='subjectId']").nth(0).fill("Review Quarterly Report");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='assignee'][@name='assignee']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='assignee'][@name='assignee']").nth(0).click();
  });

  await test.step(`Click "Everyone"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Everyone\")]").nth(0).click();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@id='outreach'][@name='outreach']").nth(0).selectOption("number:2");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='status'][@name='status']").nth(0).click();
  });

  await test.step(`Fill "09/30/2025"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("09/30/2025");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='status'][@name='status']").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "Follow up on client feedback"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here'][@id='description']").nth(0).fill("Follow up on client feedback");
  });

  await test.step(`Fill "Please prioritize this task as it needs…"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here'][@id='description']").nth(0).fill("Please prioritize this task as it needs to be completed.");
  });

  await test.step(`Fill "Dominik Smith"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-luqbme-autocomplete'][@name=''][@placeholder='Select a contact']").nth(0).fill("Dominik Smith");
  });

  await test.step(`Click "Dominik Smith"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Dominik Smith\")]").nth(0).click();
  });

  await test.step(`Hover "Dominik Smith"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Dominik Smith\")]").nth(0).hover();
  });

  await test.step(`Hover "Tyson Foods"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Tyson Foods\")]").nth(0).hover();
  });

  await test.step(`Hover "Account Executive"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Account Executive\")]").nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='TaskStatusId'][@name='TaskStatusId']").nth(0).click();
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
  });

  await test.step(`Hover "Review Quarterly Report"`, async () => {
    await page.locator("//DIV[contains(text(),\"Review Quarterly Report\")]").nth(0).hover();
  });

  await test.step(`Hover "Dominik Smith"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Dominik Smith\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//div[normalize-space()=\"Review Quarterly Report\"]";
  });

  await test.step(`Click "Review Quarterly Report"`, async () => {
    await page.locator("//div[normalize-space()=\"Review Quarterly Report\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[@title='Delete Task'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Task"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Task\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this tas"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this tas\")]").nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[contains(text(),\"Confirm\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the task."`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the task.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_ID_CONTAINS).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
  });

});
