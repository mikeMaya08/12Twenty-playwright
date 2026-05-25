// TC: TC_A83041
// Linkedin Test

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import {
  BTN_DELETE_ENTRY,
  BTN_EDIT,
  BTN_SAVE_TYPE,
  B_LOG_OUT,
  INPUT_DATE,
  LOGIN_AS_BTN,
  NAV_EDIT,
  NAV_PROFILE,
  NAV_STUDENTS_ALUMNI,
  TAB_HOME,
  TAB_PROFILE,
} from '@config/selectors';

test("Linkedin Test - TC_A83041", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-law.admin.qa-12twenty.com/dashboard', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await loginAsAdmin(page);
  });



  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e Test Admin\"]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "LinkedIn URL Test User 1"`, async () => {
    await page.locator("//A[normalize-space() = \"LinkedIn URL Test User 1\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DD").nth(28).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(78).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
  });

  await test.step(`Click "Please enter your LinkedIn profile URL.…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Please enter your LinkedIn profile URL. Recommended\"]").nth(0).click();
  });

  await test.step(`Click "LinkedIn URL"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-h7zoib-undefined'][@name='LinkedInProfileUrl'][@placeholder='LinkedIn URL']").nth(0).click();
  });

  await test.step(`Click "LinkedIn URL"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-h7zoib-undefined'][@name='LinkedInProfileUrl'][@placeholder='LinkedIn URL']").nth(0).click();
  });

  await test.step(`Fill "https://www.linkedin.com/in/jane-doe-63…"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-h7zoib-undefined'][@name='LinkedInProfileUrl'][@placeholder='LinkedIn URL']").nth(0).fill("https://www.linkedin.com/in/jane-doe-639957145");
  });

  await test.step(`Click "LinkedIn URL* *Required"`, async () => {
    await page.locator("//DIV[normalize-space() = \"LinkedIn URL* *Required\"]").nth(3).click();
  });

  await test.step(`Click "Save & Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save & Continue\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='radio'][@name='108']").nth(0).click();
  });

  await test.step(`Click "Save & Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save & Continue\"]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Continue\"]").nth(0).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Continue\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//IMG").nth(2).click();
  });

  await test.step(`Click "Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Continue\"]").nth(0).click();
  });

  await test.step(`Click "Select Category"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Select Category\"]").nth(0).click();
  });

  await test.step(`Click "Post JD"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Post JD\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(1).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@id='input-vxzue9-checkbox'][@name='currently_working']").nth(0).click();
  });

  await test.step(`Click "*"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"*\"]").nth(3).click();
  });

  await test.step(`Click "End Date*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"End Date*\"]").nth(0).click();
  });

  await test.step(`Hover "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).hover();
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@id='input-vxzue9-checkbox'][@name='currently_working']").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Click "Save & Continue"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save & Continue\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN[@id='social-networks']").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DD").nth(23).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "HR Manager ACME 01/01/2014 Offer Accept…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"HR Manager ACME 01/01/2014 Offer Accepted At Graduation SHARED\"]").nth(3).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SPAN").nth(24).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Job'][normalize-space() = \"Delete\"]").nth(0).click();
  });

  await test.step(`Click "Delete Entry"`, async () => {
    await page.locator(BTN_DELETE_ENTRY).nth(0).click();
  });

  await test.step(`Click "Post JD No information reported Add Exp…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Post JD No information reported Add Experience or Status\"]").nth(1).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(BTN_EDIT).nth(0).click();
  });

  await test.step(`Click "LinkedIn URL *Required"`, async () => {
    await page.locator("//DIV[normalize-space() = \"LinkedIn URL *Required\"]").nth(2).click();
  });

  await test.step(`Click "LinkedIn URL"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-rad7gr-undefined'][@name='LinkedInProfileUrl'][@placeholder='LinkedIn URL']").nth(0).click();
  });

  await test.step(`Fill "null"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-rad7gr-undefined'][@name='LinkedInProfileUrl'][@placeholder='LinkedIn URL']").nth(0).fill("null");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//DD").nth(16).click();
  });

});
