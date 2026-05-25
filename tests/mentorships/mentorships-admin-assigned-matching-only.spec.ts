// TC: TC_A83655
// Mentorships - Admin Assigned Matching Only

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  LABEL_OFF,
  LINK_TEST_STUDENT_0001,
  LOGIN_AS_BTN,
  NAV_HOME,
  NAV_MENTORSHIP,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_SITE_SETTINGS,
  NAV_STUDENTS_ALUMNI,
  RBTN_CANCEL,
  RBTN_SAVE_CHANGES,
  TAB_PROFILE,
} from '@config/selectors';

test("Mentorships - Admin Assigned Matching Only - TC_A83655", async ({ page, context }) => {
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

  await test.step(`Verify "Mentorship"`, async () => {
    await expect(page.locator("//H4[normalize-space() = \"Mentorship\"]").nth(0)).toHaveText("Mentorship");
  });

  await test.step(`Verify "Admin-Assigned Matching Only"`, async () => {
    await expect(page.locator("//A[@role='button'][normalize-space() = \"Admin-Assigned Matching Only\"]").nth(0)).toContainText("Admin-Assigned Matching Only");
  });

  await test.step(`Hover "Edit Inactivate"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Edit Inactivate\"]").nth(6).hover();
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//a[normalize-space()=\"Admin-Assigned Matching Only\"]/following::tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//A[normalize-space() = \"Admin-Assigned Matching Only\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Verify "Edit Mentorship Program"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Edit Mentorship Program\"]").nth(0)).toHaveText("Edit Mentorship Program");
  });

  await test.step(`Verify "Admin-Assigned Matching Only"`, async () => {
    await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Admin-Assigned Matching Only\"]").nth(0)).toHaveText("Admin-Assigned Matching Only");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[@role='tooltip'][@title='']").nth(7).hover();
  });

  await test.step(`Verify "Mentors"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Mentors\"]").nth(0)).toHaveText("Mentors");
  });

  await test.step(`Verify "Student Group"`, async () => {
    await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Student Group\"]").nth(0)).toHaveText("Student Group");
  });

  await test.step(`Verify "Current Students"`, async () => {
    await expect(page.locator("//BUTTON[@type='button'][@title='Current Students'][normalize-space() = \"Current Students\"]").nth(0)).toHaveText("Current Students");
  });

  await test.step(`Verify "Mentees"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Mentees\"]").nth(0)).toHaveText("Mentees");
  });

  await test.step(`Verify "Student Group"`, async () => {
    await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Student Group\"]").nth(0)).toHaveText("Student Group");
  });

  await test.step(`Verify "Current Students"`, async () => {
    await expect(page.locator("//BUTTON[@type='button'][@title='Current Students'][normalize-space() = \"Current Students\"]").nth(0)).toHaveText("Current Students");
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Student Group (empty)"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Student Group (empty)\"]").nth(0).click();
  });

  await test.step(`Click "Current Students"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Current Students\"]").nth(0).click();
  });

  await test.step(`Press Escape`, async () => {
    await page.keyboard.press("Escape");
    await page.locator(LINK_TEST_STUDENT_0001).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Verify "Student Group"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Student Group\"]").nth(0)).toHaveText("Student Group");
  });

  await test.step(`Verify "Current Students"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Current Students\"]").nth(1)).toHaveText("Current Students");
  });

  await test.step(`Verify "User Role"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"User Role\"]").nth(0)).toHaveText("User Role");
  });

  await test.step(`Verify "Full Access"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Full Access\"]").nth(0)).toHaveText("Full Access");
  });

  await test.step(`Verify "Mentorships"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0)).toHaveText("Mentorships");
  });

  await test.step(`Verify "Allow users to request me as a mentor"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]").nth(0)).toHaveText("Allow users to request me as a mentor");
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following::dd[normalize-space()=\"Yes\"]").nth(0)).toHaveText("Yes");
  });

  await test.step(`Verify "Mentorship Programs"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]").nth(0)).toHaveText("Mentorship Programs");
  });

  await test.step(`Verify "Admin-Assigned Matching Only"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following::dd[normalize-space()=\"Admin-Assigned Matching Only\"]").nth(0)).toHaveText("Admin-Assigned Matching Only");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(1).click();
  });

  await test.step(`Click "Test Student #0002"`, async () => {
    await page.locator("//A[normalize-space() = \"Test Student #0002\"]").nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Verify "Student Group"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Student Group\"]").nth(0)).toHaveText("Student Group");
  });

  await test.step(`Verify "Full Access - Mentee"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Full Access - Mentee\"]").nth(0)).toHaveText("Full Access - Mentee");
  });

  await test.step(`Verify "User Role"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"User Role\"]").nth(0)).toHaveText("User Role");
  });

  await test.step(`Verify "Current Students"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Current Students\"]").nth(1)).toHaveText("Current Students");
  });

  await test.step(`Verify "Mentorships"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Mentorships\"]").nth(0)).toHaveText("Mentorships");
  });

  await test.step(`Verify "Allow users to request me as a mentor"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]").nth(0)).toHaveText("Allow users to request me as a mentor");
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow users to request me as a mentor\"]/following::dd[normalize-space()=\"Yes\"]").nth(0)).toHaveText("Yes");
  });

  await test.step(`Verify "Mentorship Programs"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]").nth(0)).toHaveText("Mentorship Programs");
  });

  await test.step(`Verify "Admin-Assigned Matching Only"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Mentorship Programs\"]/following::dd[normalize-space()=\"Admin-Assigned Matching Only\"]").nth(0)).toHaveText("Admin-Assigned Matching Only");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@primary-email-label=\"'Email'\"]/following-sibling::tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(1).click();
  });

  await test.step(`Verify "The ability to browse and request mento…"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"The ability to browse and request mentors has been disabled.\"]").nth(0)).toHaveText("The ability to browse and request mentors has been disabled.");
  });

  await test.step(`Click "Browse"`, async () => {
    await page.locator("//A[normalize-space() = \"Browse\"]").nth(0).click();
  });

  await test.step(`Verify "The ability to browse and request mento…"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"The ability to browse and request mentors has been disabled.\"]").nth(0)).toHaveText("The ability to browse and request mentors has been disabled.");
  });

  await test.step(`Click "Manage"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage\"]").nth(0).click();
  });

  await test.step(`Verify "Manage Mentorship"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Manage Mentorship\"]").nth(0)).toHaveText("Manage Mentorship");
  });

  await test.step(`Close page`, async () => {
    await page.close();
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

  await test.step(`Verify "Admin-Assigned Matching Only"`, async () => {
    await expect(page.locator("//A[@role='button'][normalize-space() = \"Admin-Assigned Matching Only\"]").nth(0)).toHaveText("Admin-Assigned Matching Only");
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//a[normalize-space()=\"Admin-Assigned Matching Only\"]/following::tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//A[normalize-space() = \"Admin-Assigned Matching Only\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Admin-Assigned Matching Only\"]").nth(0).hover();
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//label[normalize-space()=\"Admin-Assigned Matching Only\"]/following::toggle/div[@class=\"toggle btn btn-xs btn-success\"][@aria-checked=\"true\"]").nth(0).click();
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
  });

  await test.step(`Verify "Mentorship Program saved successfully"`, async () => {
    await expect(page.locator("//DIV[@role='alert'][normalize-space() = \"Mentorship Program saved successfully\"]").nth(0)).toHaveText("Mentorship Program saved successfully");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Click "Test Student #0002"`, async () => {
    await page.locator("//A[normalize-space() = \"Test Student #0002\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator("//*[normalize-space() = \"Mentorship\"]//button[contains(@data-toggle,\"collapse\")]").nth(0).click();
  });

  await test.step(`Click "Mentorship"`, async () => {
    await page.locator(NAV_MENTORSHIP).nth(1).click();
  });

  await test.step(`Verify "Mentorship"`, async () => {
    await expect(page.locator("//H1[normalize-space() = \"Mentorship\"]").nth(0)).toHaveText("Mentorship");
  });

  await test.step(`Verify "Recommended for you, based on your Coll…"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Recommended for you, based on your College.\"]").nth(0)).toHaveText("Recommended for you, based on your College.");
  });

  await test.step(`Hover "Test Student #0001 Spring 2026"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Test Student #0001 Spring 2026\"]").nth(2).hover();
  });

  await test.step(`Click "Browse"`, async () => {
    await page.locator("//A[normalize-space() = \"Browse\"]").nth(0).click();
  });

  await test.step(`Click "Manage"`, async () => {
    await page.locator("//A[normalize-space() = \"Manage\"]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
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

  await test.step(`Verify "Admin-Assigned Matching Only"`, async () => {
    await expect(page.locator("//A[@role='button'][normalize-space() = \"Admin-Assigned Matching Only\"]").nth(0)).toHaveText("Admin-Assigned Matching Only");
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//a[normalize-space()=\"Admin-Assigned Matching Only\"]/following::tt-action-dropdown").nth(0).click();
  });

  await test.step(`Click "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//A[normalize-space() = \"Admin-Assigned Matching Only\"]//following::A[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Admin-Assigned Matching Only"`, async () => {
    await page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Admin-Assigned Matching Only\"]").nth(0).hover();
  });

  await test.step(`Click "Off"`, async () => {
    await page.locator(LABEL_OFF).nth(0).click();
  });

  await test.step(`Click "Save Changes"`, async () => {
    await page.locator(RBTN_SAVE_CHANGES).nth(0).click();
  });

  await test.step(`Verify "Mentorship Program saved successfully"`, async () => {
    await expect(page.locator("//DIV[@role='alert'][normalize-space() = \"Mentorship Program saved successfully\"]").nth(0)).toHaveText("Mentorship Program saved successfully");
  });

});
