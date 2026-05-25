// TC: TC_A83008
// Mentorships - Admin Updates Module Name

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  NAV_HOME,
  NAV_MENTORSHIP,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_SITE_SETTINGS,
} from '@config/selectors';

test("Mentorships - Admin Updates Module Name - TC_A83008", async ({ page, context }) => {
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

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorships\"]").nth(0).click();
  });

  await test.step(`Fill "Mentorship Custom Name"`, async () => {
    await page.locator("//INPUT[@name='config-key-6501'][@id='config-key-6501'][@type='text']").nth(0).fill("Mentorship Custom Name");
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover "The configuration values have been succ…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The configuration values have been successfully saved.\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship Custom Name"`, async () => {
    await page.reload();
    await page.locator("//A[normalize-space() = \"Mentorship Custom Name\"]").nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Mentorships"`, async () => {
    await page.locator("//A[normalize-space() = \"Mentorships\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@name='config-key-6501'][@id='config-key-6501'][@type='text']").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@name='config-key-6501'][@id='config-key-6501'][@type='text']").nth(0).click();
  });

  await test.step(`Fill "Mentorship"`, async () => {
    await page.locator("//INPUT[@name='config-key-6501'][@id='config-key-6501'][@type='text']").nth(0).fill("Mentorship");
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save Changes\"]").nth(0).click();
  });

  await test.step(`Hover "The configuration values have been succ…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"The configuration values have been successfully saved.\"]").nth(0).hover();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.reload();
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

});
