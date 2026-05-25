// TC: TC_A82097
// Side Nav - Verify modules are highlighted and expanded correctly

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  NAV_DATA_UPLOADS,
  NAV_EMAIL_ACTIVITY,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_MENTORSHIP,
  NAV_SITE_SETTINGS,
  NAV_STUDENTS_ALUMNI,
} from '@config/selectors';

test("Side Nav - Verify modules are highlighted and expanded correctly - TC_A82097", async ({ page, context }) => {
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

  await test.step(`Click "Home"`, async () => {
    await page.locator("//A[normalize-space() = \"Home\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator("//A[normalize-space() = \"Students & Alumni\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator("//A[normalize-space() = \"Students & Alumni\"]/ancestor::li").nth(1).click();
    await page.reload();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).hover();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorship\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorship\"]/ancestor::li").nth(1).click();
  });

  await test.step(`Click "Communities"`, async () => {
    await page.reload();
    await page.locator("//A[normalize-space() = \"Communities\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Employers\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Tasks"`, async () => {
    await page.locator("//A[normalize-space() = \"Tasks\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Activity Stream"`, async () => {
    await page.locator("//A[normalize-space() = \"Activity Stream\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Reports"`, async () => {
    await page.locator("//a[normalize-space()=\"Reports\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
  });

  await test.step(`Click "Reporting Dashboards"`, async () => {
    await page.locator("//A[normalize-space() = \"Reporting Dashboards\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Custom Reports"`, async () => {
    await page.locator("//A[normalize-space() = \"Custom Reports\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "12twenty Reports"`, async () => {
    await page.locator("//A[normalize-space() = \"12twenty Reports\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Standard Reports"`, async () => {
    await page.locator("//A[normalize-space() = \"Standard Reports\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Research Tools"`, async () => {
    await page.locator("//a[normalize-space()=\"Research Tools\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
  });

  await test.step(`Click "Outcomes Index"`, async () => {
    await page.locator("//A[normalize-space() = \"Outcomes Index\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Interview Database"`, async () => {
    await page.locator("//A[normalize-space() = \"Interview Database\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Career Trends"`, async () => {
    await page.locator("//A[normalize-space() = \"Career Trends\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Class Overview"`, async () => {
    await page.locator("//A[normalize-space() = \"Class Overview\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Graduate School"`, async () => {
    await page.locator("//A[normalize-space() = \"Graduate School\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator("//a[normalize-space()=\"Job Listings & Interviews\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Listings & Interviews\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "OCI Management"`, async () => {
    await page.locator("//A[normalize-space() = \"OCI Management\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//A[normalize-space() = \"Command Center\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(2).click();
  });

  await test.step(`Click "Student Employment"`, async () => {
    await page.locator("//A[normalize-space() = \"Student Employment\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator("//a[normalize-space()=\"Appointments\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
  });

  await test.step(`Click "Appointments"`, async () => {
    await page.locator("//A[normalize-space() = \"Appointments\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(3).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//a[normalize-space()=\"Events\"]/following::button[contains(@aria-label,\"Expand\")]").nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator("//A[normalize-space() = \"Events\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(0).click();
  });

  await test.step(`Click "Analytics"`, async () => {
    await page.locator("//A[normalize-space() = \"Analytics\"]/ancestor::li[contains(@class,\"side-nav-sub-menu-item\")]").nth(4).click();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Resume Books"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume Books\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Experiential Learning"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiential Learning\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Outcomes"`, async () => {
    await page.locator("//A[normalize-space() = \"Outcomes\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Resource Library"`, async () => {
    await page.locator("//A[normalize-space() = \"Resource Library\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Document Review"`, async () => {
    await page.locator("//A[normalize-space() = \"Document Review\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click "Help & Support"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Help & Support\"]").nth(0).click();
  });

  await test.step(`Click "Close"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Close\"]").nth(0).click();
  });

  await test.step(`Click "Orders"`, async () => {
    await page.locator("//A[normalize-space() = \"Orders\"]/ancestor::li").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Data Uploads"`, async () => {
    await page.locator(NAV_DATA_UPLOADS).nth(0).click();
  });

  await test.step(`Click "Email Templates"`, async () => {
    await page.locator("//A[normalize-space() = \"Email Templates\"]").nth(0).click();
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator(NAV_EMAIL_ACTIVITY).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Manage Rooms"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage Rooms\"]").nth(0).click();
  });

  await test.step(`Click "Manage Libraries"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage Libraries\"]").nth(0).click();
  });

});
