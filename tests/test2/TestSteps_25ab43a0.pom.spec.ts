// TC: TC_A83263
// Site Settings - Custom Branding Lifecycle - Create, Verify as Student, and Remove

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Site Settings - Custom Branding Lifecycle - Create, Verify as Student, and Remove", async ({ page, context }) => {
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
  await page.getByRole('link', { name: "Site Branding" }).click();
  await page.getByRole('heading', { name: "Site Branding" }).hover();
  selector = MK.onSetGV(`//H3[normalize-space() = "Custom Branding"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('heading', { name: "Custom Branding" }).hover();
  await page.locator("//h3[normalize-space()=\"Custom Branding\"]/following::BUTTON").click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  }
  await page.getByRole('button', { name: "New" }).click();
  await page.locator("//LABEL[normalize-space() = \"School Logo\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"School Logo\"]//ancestor::div[@class=\"form-group\"]//div[@class=\"profile-image-cmp\"]").click();
  await page.waitForLoadState('load');
  fileName = MK.onSetGV(`MuukTestImage.png`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByRole('heading', { name: "43 Steps" }).click();
  await page.getByRole('heading', { name: "Select an Image" }).hover();
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByRole('heading', { name: "30 Steps" }).click();
  fileName = MK.onSetGV(`wallpaper.jpeg`, null);
  var fileInput = await page.$("INPUT[type='file']");
  var filePath ="./test/"+fileName;
  if(fileInput){
  await fileInput.setInputFiles(filePath);
  }
  else{
  throw new Error('Element to upload file is not present.');
  }
  await page.getByRole('link', { name: "OK" }).click();
  await page.getByRole('link', { name: "Save" }).click();
  await page.getByRole('heading', { name: "Custom Branding" }).hover();
  selector = MK.onSetGV(`//H3[normalize-space() = "Custom Branding"]/following::dt[contains(normalize-space(),"Site Logo")]/following-sibling::dd//img`, null);
  var image = await page.waitForSelector(selector, { timeout: 10000 });
  var siteLogoSrc = await image.getAttribute('src');
  snippetLog('Site logo src:', siteLogoSrc);
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  selector = MK.onSetGV(`//BUTTON[@type=\'button\'][normalize-space() = "Reset Filters"]`, null);
  source = await page.locator(selector);
  if (await source.count() > 0){
  snippetLog("Performing steps. . .");
  await page.getByRole('button', { name: "Reset Filters" }).click();
  }
  await page.getByRole('link', { name: "Test Student #0003" }).click();
  await page.locator("BUTTON[type='button']").nth(2).click();
  await page.getByRole('link', { name: "Login As" }).click();
  await page.waitForTimeout(2000);
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.setViewportSize({ width: 1920, height: 1080 });
  selector = MK.onSetGV(`//img[@alt="E2E Tests Campuswide - Home"][contains(@src,"https://ttpfmstrpublicusncqa.blob.core.windows.net/files")]`, null);
  var image = await page.waitForSelector(selector, { timeout: 10000 });
  var firstSrc = await image.getAttribute('src');
  snippetLog('First src:', firstSrc);
  if (firstSrc !== siteLogoSrc) {
  throw new Error(`Src values are different:
  First: ${firstSrc}
  Second: ${secondSrc}`);
  }
  snippetLog('Src values are the same, firstSrc ' + firstSrc + " and siteLogoSrc: "+siteLogoSrc);
  await page.waitForTimeout(3000);
  indexPages = MK.onSetGV(`0`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.locator("//*[normalize-space() = \"Site Management\"]//button[contains(@data-toggle,\"collapse\")]").click();
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "Site Branding" }).click();
  await page.locator("//h3[normalize-space()=\"Custom Branding\"]/following::BUTTON").click();
  await page.getByRole('link', { name: "Edit" }).hover();
  await page.getByRole('link', { name: "Delete" }).click();
  indexPages = MK.onSetGV(`1`, null);
  await page.waitForTimeout(2000);
  snippetLog('CHANGING TO PAGE #' + indexPages);
  newPages = context.pages();
  pagesAfterPopUp = await newPages[parseInt(indexPages)];
  await page.reload();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  var image = await page.waitForSelector(selector, { timeout: 10000 });
  var secondSrc = await image.getAttribute('src');
  snippetLog('Second src:', secondSrc);
  if (firstSrc == secondSrc) {
  throw new Error(`Src values are the same:
  First: ${firstSrc}
  Second: ${secondSrc}`);
  }
  snippetLog('Src values are the different, firstSrc ' + firstSrc + " and secondSrc: "+secondSrc);
});
