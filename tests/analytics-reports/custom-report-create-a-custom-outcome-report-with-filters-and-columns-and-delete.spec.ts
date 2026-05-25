// TC: TC67639
// Custom Report - Create a custom outcome report with filters and columns and delete it

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_MORE_FILTERS,
  BTN_OK_CONTAINS,
  INPUT_CHECKBOX_MULTI,
  MODAL_PLEASE_CONFIRM_CT,
  NAV_BACK_TO_LIST,
  NAV_EDIT,
  NAV_HOME,
  RBTN_DELETE,
  RBTN_DUPLICATE,
} from '@config/selectors';

test("Custom Report - Create a custom outcome report with filters and columns and delete it - TC67639", async ({ page, context }) => {
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

  await test.step(`Click "Reports"`, async () => {
    await page.locator("//A[normalize-space() = \"Reports\"]").nth(0).click();
  });

  await test.step(`Click "Custom Reports"`, async () => {
    await page.locator("//a[normalize-space()=\"Custom Reports\"]").nth(0).click();
  });

  await test.step(`Hover "Custom Reports"`, async () => {
    await page.locator("//H2[contains(text(),\"Custom Reports\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TT-FOLDER-STRUCTURE").nth(0).hover();
  });

  await test.step(`Hover "You have not yet created any ne"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have not yet created any ne\")]").nth(0).hover();
  });

  await test.step(`Click "Create New Report"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Create New Report\"]").nth(0).click();
  });

  await test.step(`Hover "Employer & Contact Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Employer & Contact Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Student Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Student Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Experiential Learning Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Experiential Learning Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Outcome Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Outcome Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Job Posting Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Job Posting Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Event Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Event Reports\"]").nth(0).hover();
  });

  await test.step(`Hover "Appointment Reports"`, async () => {
    await page.locator("//li[normalize-space()=\"Appointment Reports\"]").nth(0).hover();
  });

  await test.step(`Click "Outcomes"`, async () => {
    await page.locator("//A[normalize-space() = \"Outcomes\"][@href=\"#/customReports/create/2/\"]").nth(0).click();
  });

  await test.step(`Click "Offer Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Offer Status\"]").nth(0).click();
  });

  await test.step(`Hover "Accepted"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Accepted\"]").nth(0).hover();
  });

  await test.step(`Hover "Received"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Received\"]").nth(0).hover();
  });

  await test.step(`Hover "Rejected"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Rejected\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Offer Status"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Offer Status\"]").nth(0).click();
  });

  await test.step(`Click "Outcome Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Outcome Type\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Outcome Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Outcome Type\"]").nth(0).click();
  });

  await test.step(`Click "Job Phase"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Phase\"]").nth(0).click();
  });

  await test.step(`Hover "Work Experience"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Work Experience\"]").nth(0).hover();
  });

  await test.step(`Hover "Post Graduation"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Post Graduation\"]").nth(0).hover();
  });

  await test.step(`Hover "Internship"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Internship\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(2).click();
  });

  await test.step(`Click "Job Phase"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Job Phase\"]").nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Hover "Student Education - General"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Student Education - General\")]").nth(0).hover();
  });

  await test.step(`Fill "Graduation term"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search filters']").nth(0).fill("Graduation term");
  });

  await test.step(`Click "Graduation Term"`, async () => {
    await page.locator("//BUTTON[contains(normalize-space(),\"Graduation Term\")]").nth(0).click();
  });

  await test.step(`Fill "Spring 2030"`, async () => {
    await page.locator("//INPUT[@type='text'][contains(@placeholder,'Search Graduation Term')]").nth(0).fill("Spring 2030");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Graduation Term"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Graduation Term\")]").nth(0).click();
  });

  await test.step(`Double-click "Employer"`, async () => {
    await page.locator("//div[normalize-space()=\"Employer\"]").nth(0).dblclick();
  });

  await test.step(`Double-click "Job Title"`, async () => {
    await page.locator("//div[normalize-space()=\"Job Title\"]").nth(0).dblclick();
  });

  await test.step(`Double-click "Offer Accepted Date"`, async () => {
    await page.locator("//div[normalize-space()=\"Offer Accepted Date\"]").nth(0).dblclick();
  });

  await test.step(`Double-click "Detailed Function"`, async () => {
    await page.locator("//div[normalize-space()=\"Detailed Function\"]").nth(0).dblclick();
  });

  await test.step(`Double-click "Detailed Industry"`, async () => {
    await page.locator("//div[normalize-space()=\"Detailed Industry\"]").nth(0).dblclick();
  });

  await test.step(`Double-click "Base Salary"`, async () => {
    await page.locator("//div[normalize-space()=\"Base Salary\"]").nth(0).dblclick();
  });

  await test.step(`Click "Base Salary"`, async () => {
    await page.locator("//div[contains(normalize-space(),\"Base Salary\")]//div[@class=\"view-option\"]").nth(0).click();
  });

  await test.step(`Hover "Column Settings"`, async () => {
    await page.locator("//H3[contains(text(),\"Column Settings\")]").nth(0).hover();
  });

  await test.step(`Hover "Base Salary"`, async () => {
    await page.locator("//H4[contains(text(),\"Base Salary\")]").nth(0).hover();
  });

  await test.step(`Click "Column Settings"`, async () => {
    await page.locator("//H3[contains(text(),\"Column Settings\")]").nth(0).click();
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Ok"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Ok\")]").nth(0).click();
  });

  await test.step(`Verify "Base Salary (per year)"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Base Salary (per year)\"]").nth(0)).toHaveText("Base Salary (per year) ");
  });

  await test.step(`Double-click "Job Source"`, async () => {
    await page.locator("//div[normalize-space()=\"Job Source\"]").nth(0).dblclick();
  });

  await test.step(`Click "Generate Report"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Generate Report\")]").nth(0).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Click "Save Report"`, async () => {
    await page.locator("//A[contains(text(),\"Save Report\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill "Muuk Report"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='reportName'][@placeholder='Name of Report']").nth(0).fill("Muuk Report");
  });

  await test.step(`Fill "Automated test case"`, async () => {
    await page.locator("//TEXTAREA[@placeholder='Add description here.']").nth(0).fill("Automated test case");
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Save Report"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Save Report\")]").nth(0).click();
  });

  await test.step(`Click "Custom Reports"`, async () => {
    await page.locator("//a[normalize-space()=\"Custom Reports\"]").nth(0).click();
  });

  await test.step(`Hover "Muuk Report"`, async () => {
    await page.reload();
    await page.locator("//A[contains(text(),\"Muuk Report\")]").nth(0).hover();
  });

  await test.step(`Hover "Automated test case"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Automated test case\")]").nth(0).hover();
  });

  await test.step(`Click "Muuk Report"`, async () => {
    await page.locator("//A[contains(text(),\"Muuk Report\")]").nth(0).click();
  });

  await test.step(`Hover "Custom Report: Muuk Report"`, async () => {
    await page.locator("//H2[normalize-space() = \"Custom Report: Muuk Report\"]").nth(0).hover();
  });

  await test.step(`Click "Back to List"`, async () => {
    await page.locator(NAV_BACK_TO_LIST).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Move"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Move\"]").nth(0).hover();
  });

  await test.step(`Hover "Duplicate"`, async () => {
    await page.locator(RBTN_DUPLICATE).nth(0).hover();
  });

  await test.step(`Hover "Export"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Export\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete report …"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete report Muuk Report?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "You have not yet created any ne"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have not yet created any ne\")]").nth(0).hover();
  });

});
