// TC: TC_A83747
// Experiential Learning - Experience Type Picklist Bulk Upload Success

import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test("Experiential Learning - Experience Type Picklist Bulk Upload Success", async ({ page, context }) => {
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
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "Experiential Learning" }).click();
  await page.getByRole('link', { name: "Picklists" }).click();
  await page.getByRole('link', { name: "Experience Type" }).click();
  await expect(page.getByRole('heading', { name: "Experience Type" })).toHaveText("Experience Type");
  selector = MK.onSetGV(`//div[@class="edit-lookup-option__name ng-scope as-sortable-item-handle"]/*[@title="Bulk Upload Experience Type"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.locator("BUTTON[type='button']").nth(12).click();
  await page.getByRole('heading', { name: "48 Steps" }).click();
  await expect(page.getByRole('heading', { name: "Delete?" })).toHaveText("Delete?");
  await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Bulk Upload Experience Type?\"]").nth(1)).toHaveText("Are you sure you want to delete Bulk Upload Experience Type?");
  await page.getByRole('button', { name: "OK" }).click();
  }
  await page.getByRole('button', { name: "Action" }).click();
  await page.getByRole('link', { name: "Bulk Upload Options" }).click();
  await expect(page.getByRole('heading', { name: "Experience Type Option Upload" })).toHaveText("Experience Type Option Upload");
  await expect(page.locator("//P[normalize-space() = \"To upload picklist options, please download the picklist template, add your new values, and upload the file below.\"]")).toHaveText("To upload picklist options, please download the picklist template, add your new values, and upload the file below.");
  await page.getByRole('link', { name: "Download picklist template" }).hover();
  await page.getByRole('link', { name: "browse" }).click();
  fileName = MK.onSetGV(`Experience_Type_template.csv`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('button', { name: "Upload" }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator("BUTTON[type='button']").nth(12).click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole('heading', { name: "Delete?" })).toHaveText("60000");
  await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Bulk Upload Experience Type?\"]").nth(1)).toHaveText("Are you sure you want to delete Bulk Upload Experience Type?");
  await page.getByRole('button', { name: "OK" }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator("BUTTON[type='button']").nth(12).click();
  await page.getByRole('heading', { name: "48 Steps" }).click();
  await expect(page.getByRole('heading', { name: "Delete?" })).toHaveText("Delete?");
  await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Bulk Upload Experience Type?\"]").nth(1)).toHaveText("Are you sure you want to delete Bulk Upload Experience Type?");
  await page.getByRole('button', { name: "OK" }).click();
});
