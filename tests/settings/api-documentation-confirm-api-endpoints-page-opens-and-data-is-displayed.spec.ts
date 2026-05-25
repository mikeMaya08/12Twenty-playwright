// TC: TC_A81778
// API Documentation - Confirm API endpoints page opens and data is displayed

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import { NAV_HOME } from '@config/selectors';

test("API Documentation - Confirm API endpoints page opens and data is displayed - TC_A81778", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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

  await test.step(`Navigate: /help`, async () => {
    await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/help/');
  });

  await test.step(`Hover "12twenty API V2 Documentation"`, async () => {
    await page.locator("//H1[normalize-space() = \"12twenty API V2 Documentation\"]").nth(0).hover();
  });

  await test.step(`Click "12twenty API V2 Documentation"`, async () => {
    await page.locator("//H1[normalize-space() = \"12twenty API V2 Documentation\"]").nth(0).click();
  });

  await test.step(`Click "ApplicationDocuments"`, async () => {
    await page.locator("//H2[@id='v-0-14'][normalize-space() = \"ApplicationDocuments\"]").nth(0).click();
  });

  await test.step(`Click "Create an application document"`, async () => {
    await page.locator("//H3[@id='v-0-16'][normalize-space() = \"Create an application document\"]").nth(0).click();
  });

  await test.step(`Click "Delete an application document"`, async () => {
    await page.locator("//H3[@id='v-0-36'][normalize-space() = \"Delete an application document\"]").nth(0).click();
  });

  await test.step(`Click "Download an application document"`, async () => {
    await page.locator("//H3[@id='v-0-49'][normalize-space() = \"Download an application document\"]").nth(0).click();
  });

  await test.step(`Click "Get an application document"`, async () => {
    await page.locator("//H3[@id='v-0-58'][normalize-space() = \"Get an application document\"]").nth(0).click();
  });

  await test.step(`Click "Query application documents​#Copy link"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Query application documents​#Copy link\"]").nth(0).click();
  });

  await test.step(`Click "Update an application document"`, async () => {
    await page.locator("//H3[@id='v-0-86'][normalize-space() = \"Update an application document\"]").nth(0).click();
  });

  await test.step(`Click "AppointmentBlocks (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-31'][normalize-space() = \"AppointmentBlocks (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Appointments (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-33'][normalize-space() = \"Appointments (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Attributes (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-98'][normalize-space() = \"Attributes (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Cities (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-100'][normalize-space() = \"Cities (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Companies (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-102'][normalize-space() = \"Companies (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "CompanyTasks (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-104'][normalize-space() = \"CompanyTasks (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "ContactMeetings (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-106'][normalize-space() = \"ContactMeetings (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Contacts (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-108'][normalize-space() = \"Contacts (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "ContactTasks (Collapsed)"`, async () => {
    await page.locator("//H2[@id='v-0-110'][normalize-space() = \"ContactTasks (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "EventCompanyRegistrations (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"EventCompanyRegistrations (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Events (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Events (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "EventStudentRegistrations (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"EventStudentRegistrations (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Experiences (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Experiences (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Files (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Files (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "JobPostingApplications (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"JobPostingApplications (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "JobPostings (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"JobPostings (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Jobs (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Jobs (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "LookupOptions (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"LookupOptions (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Lookups (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Lookups (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Notes (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Notes (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Ocis (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Ocis (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "OciSchedule (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"OciSchedule (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Orders (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Orders (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "ReportDistributionFile (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"ReportDistributionFile (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Students (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Students (Collapsed)\"]").nth(0).click();
  });

  await test.step(`Click "Tasks (Collapsed)"`, async () => {
    await page.locator("//H2[normalize-space() = \"Tasks (Collapsed)\"]").nth(0).click();
  });

});
