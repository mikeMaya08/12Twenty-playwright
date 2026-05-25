// TC: TC60746
// Tasks - New Task - Student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_SAVE_CONTAINS,
  INPUT_DATE,
  INPUT_SELECT_CONTACT,
  MODAL_SUCCESS_PLAIN_CT,
  NAV_HOME,
  RBTN_CANCEL_CONTAINS,
} from '@config/selectors';

test("Tasks - New Task - Student - TC60746", async ({ page, context }) => {
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsStudent(page);
  });


  await test.step(`Click "Student/Alumni Log In"`, async () => {
    await page.waitForTimeout(1000);
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Tasks"`, async () => {
    await page.locator("//A[normalize-space() = \"Tasks\"]").nth(0).click();
  });

  await test.step(`Hover "Tasks"`, async () => {
    await page.locator("//H1[contains(text(),\"Tasks\")]").nth(0).hover();
  });

  await test.step(`Click "Task Status:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='TaskStatusId'][@name='TaskStatusId']").nth(0).click();
  });

  await test.step(`Type "All"`, async () => {
    await page.keyboard.type("All");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[contains(text(),\"Client-Student Meeting\")]";
  });

  await test.step(`Click "Client-Student Meeting"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::A[normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::A[normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::A[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Task"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Task\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this tas"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this tas\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the task."`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the task.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"OK\")]").nth(0).click();
  });

  await test.step(`Click "New Task"`, async () => {
    await page.locator("//A[normalize-space() = \"New Task\"]").nth(0).click();
  });

  await test.step(`Hover "Add Task"`, async () => {
    await page.locator("//H1[contains(text(),\"Add Task\")]").nth(0).hover();
  });

  await test.step(`Fill "Client-Student Meeting"`, async () => {
    await page.locator("//INPUT[@name='Subject']").nth(0).fill("Client-Student Meeting");
  });

  await test.step(`Select "number:8"`, async () => {
    await page.locator("//SELECT[@name='outreach']").nth(0).selectOption("number:8");
  });

  await test.step(`Fill "10/15/2024"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("10/15/2024");
  });

  await test.step(`Click "Status *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Status *\")]").nth(0).click();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@name='status']").nth(0).selectOption("number:2");
  });

  await test.step(`Fill "Add description here"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here']").nth(0).fill("Prepare for the meeting with the client and student to discuss project process.");
  });

  await test.step(`Fill "Ensure to attach the report before send…"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add comments here']").nth(0).fill("Ensure to attach the report before sending");
  });

  await test.step(`Fill "Daryl Foster"`, async () => {
    await page.locator(INPUT_SELECT_CONTACT).nth(0).fill("Daryl Foster");
  });

  await test.step(`Click "Daryl Foster - Coca-Cola - Recruiter"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Daryl Foster - Coca-Cola - Recruiter\"]").nth(0).click();
  });

  await test.step(`Hover "Daryl Foster"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Daryl Foster\")]").nth(0).hover();
  });

  await test.step(`Hover "Coca-Cola"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Coca-Cola\")]").nth(0).hover();
  });

  await test.step(`Hover "Recruiter"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Recruiter\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Click "Clear Filters"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Clear Filters\"]").nth(0).click();
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
    await page.locator("//SELECT[@name='TaskStatusId']").nth(0).selectOption("2");
  });

  await test.step(`Fill "Daryl Foster - Coca-Cola - Recruiter"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='ContactName'][@placeholder='Enter a contact name here']").nth(0).fill("Daryl Foster - Coca-Cola - Recruiter");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
  });

  await test.step(`Hover "Client-Student Meeting"`, async () => {
    await page.reload();
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]").nth(0).hover();
  });

  await test.step(`Hover "Client-Student Meeting"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::span[contains(text(),\"Coca-Cola\")]").nth(0).hover();
  });

  await test.step(`Click "Task Status:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Task Status:\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='TaskStatusId'][@name='TaskStatusId']").nth(0).click();
  });

  await test.step(`Type "All"`, async () => {
    await page.keyboard.type("All");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Get Results\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[contains(text(),\"Client-Student Meeting\")]";
  });

  await test.step(`Click "Client-Student Meeting"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::BUTTON[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::A[normalize-space() = \"Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::A[normalize-space() = \"Delete\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//DIV[contains(text(),\"Client-Student Meeting\")]//following::A[normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Task"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Task\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete this tas"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to delete this tas\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Confirm"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Confirm\")]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the task."`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the task.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"OK\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[contains(text(),\"Client-Student Meeting\")]";
  });

});
