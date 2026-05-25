// TC: TC_A78611
// Site Settings - Add/Update Site Instance Contact, module naming

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OK,
  MODAL_SUCCESS,
  MODAL_SUCCESS_PLAIN,
  NAV_GENERAL,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  NAV_SITE_MGMT_SIBLING_BTN,
  NAV_SITE_SETTINGS,
  RBTN_CANCEL,
  RBTN_EDIT,
  RBTN_OK_MODAL,
} from '@config/selectors';

test("Site Settings - Add/Update Site Instance Contact, module naming - TC_A78611", async ({ page, context }) => {
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
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
  });

  await test.step(`Hover "Edit Contact Information"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Contact Information\"]").nth(0).hover();
  });

  await test.step(`Hover "Contact Us Email Recipient:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Contact Us Email Recipient:\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='contactUsEmailAddress'][@name='contactUsEmailAddress']").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "e2e Test Admin"`, async () => {
    await page.keyboard.type("e2e Test Admin");
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//LABEL[normalize-space() = \"Contact Us Phone Number:\"]").nth(0).hover();
  });

  await test.step(`Fill "4587963122"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='contactUsPhoneNumber']").nth(0).fill("4587963122");
  });

  await test.step(`Hover "Career Center Name:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Career Center Name:\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Career Center"`, async () => {
    await page.locator("//input[@id=\"careerCenterName\"]").nth(0).fill("Muuktest Career Center");
  });

  await test.step(`Hover "External URL Display Name:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"External URL Display Name:\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest URL"`, async () => {
    await page.locator("//input[@id=\"careerCenterExternalUrlDisplayName\"]").nth(0).fill("Muuktest URL");
  });

  await test.step(`Hover "External URL:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"External URL:\"]").nth(0).hover();
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//input[@id=\"careerCenterExternalUrl\"]").nth(0).fill("https://www.linkedin.com/company/12twenty-inc?trk=public_profile_experience-item_profile-section-card_image-click");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//DIV[@class=\"modal-footer\"]//A[@role=\"button\"][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
  });

  await test.step(`Hover "e2e.admin.schooladministrator@campuswid…"`, async () => {
    await page.locator("//div[contains(text(),\"e2e.admin.schooladministrator@campuswide.com\")]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest Career Center"`, async () => {
    await page.locator("//DD[contains(text(),\"Muuktest Career Center\")]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest URL"`, async () => {
    await page.locator("//DD[contains(text(),\"Muuktest URL\")]").nth(0).hover();
  });

  await test.step(`Hover "https://www.linkedin.com/company/12twen…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"https://www.linkedin.com/company/12twenty-inc?trk=public_profile_experience-item_profile-section-card_image-click\"]").nth(0).hover();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(2).click();
  });

  await test.step(`Hover "Custom Student Employment Module Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Custom Student Employment Module Name\"]").nth(0).hover();
  });

  await test.step(`Fill "Interviews2"`, async () => {
    await page.locator("//INPUT[@name='config-key-2507'][@id='config-key-2507'][@type='text']").nth(0).fill("Interviews2");
  });

  await test.step(`Fill "Student Employment2"`, async () => {
    await page.locator("//INPUT[@name='config-key-2508'][@id='config-key-2508'][@type='text']").nth(0).fill("Student Employment2");
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save Changes\"]").nth(7).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "The configuration values have been succ…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"The configuration values have been successfully saved.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Student Employment2"`, async () => {
    await page.reload();
    await page.locator("//A[normalize-space() = \"Student Employment2\"]").nth(0).hover();
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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

  await test.step(`Hover "Student Employment2"`, async () => {
    await page.locator("//A[normalize-space() = \"Student Employment2\"]").nth(0).hover();
  });

  await test.step(`Click "Help & Support"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Help & Support\"]").nth(0).click();
  });

  await test.step(`Hover "Help & Support"`, async () => {
    await page.locator("//H4[@id='help-and-support-modal-header'][normalize-space() = \"Help & Support\"]").nth(0).hover();
  });

  await test.step(`Hover "E2E Tests Campuswide"`, async () => {
    await page.locator("//H3[normalize-space() = \"E2E Tests Campuswide\"]").nth(0).hover();
  });

  await test.step(`Hover "4587963122"`, async () => {
    await page.locator("//A[normalize-space() = \"4587963122\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e.admin.schooladministrator@campuswid…"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e.admin.schooladministrator@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest URL"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest URL\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest URL"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest URL\"]").nth(0).click();
  });

  await test.step(`Hover "to see who you already know at 12twenty"`, async () => {
    await page.locator("//H2[@id='base-contextual-sign-in-modal-modal-header'][contains(normalize-space(),\"to see who you already know at 12twenty\")]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "General"`, async () => {
    await page.locator(NAV_GENERAL).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//SELECT[@id='contactUsEmailAddress'][@name='contactUsEmailAddress']").nth(0).pressSequentially("value=\"e2etestadmin@test.com\"");
  });

  await test.step(`Press ArrowUp`, async () => {
    await page.keyboard.press("ArrowUp");
    await page.locator("//INPUT[@type='text'][@id='contactUsPhoneNumber']").nth(0).fill("");
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//input[@id=\"careerCenterName\"]").nth(0).fill("");
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//input[@id=\"careerCenterExternalUrlDisplayName\"]").nth(0).fill("");
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//input[@id=\"careerCenterExternalUrl\"]").nth(0).fill("");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator("//DIV[@class=\"modal-footer\"]//A[@role=\"button\"][normalize-space() = \"Save\"]").nth(0).click();
  });

  await test.step(`Hover "Success"`, async () => {
    await page.locator(MODAL_SUCCESS_PLAIN).nth(0).hover();
  });

  await test.step(`Hover "Your changes have been saved successful…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Your changes have been saved successfully.\"]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK_MODAL).nth(0).click();
    await page.reload();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(2).click();
  });

  await test.step(`Fill "Interviews"`, async () => {
    await page.locator("//INPUT[@name='config-key-2507'][@id='config-key-2507'][@type='text']").nth(0).fill("Interviews");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@name='config-key-2508'][@id='config-key-2508'][@type='text']").nth(0).click();
  });

  await test.step(`Fill field`, async () => {
    await page.locator("//INPUT[@name='config-key-2508'][@id='config-key-2508'][@type='text']").nth(0).fill("");
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Save Changes\"]").nth(7).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "The configuration values have been succ…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"The configuration values have been successfully saved.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Student Employment"`, async () => {
    await page.reload();
    await page.locator("//A[normalize-space() = \"Student Employment\"]").nth(0).hover();
  });

});
