// TC: TC64022
// Attributes - Site Settings - Add New Attribute to Student Profile - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTIONS,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_SAVE_CONTAINS,
  H1_E2E_TEST_STUDENT,
  H2_BASICS_CT,
  INPUT_RADIO_MULTI,
  MODAL_SUCCESS_CT,
  NAV_HOME,
  NAV_PROFILE,
  NAV_SITE_MGMT_NAVBAR_BTN,
  NAV_STUDENTS_ALUMNI,
  RBTN_BACK,
  RBTN_CANCEL_CONTAINS,
  RBTN_DELETE,
  RBTN_VIEW_AUDIT,
} from '@config/selectors';

test("Attributes - Site Settings - Add New Attribute to Student Profile - Admin - TC64022", async ({ page, context }) => {
  let selector = `0`;

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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "GENERAL CONFIGURATION"`, async () => {
    await page.locator("//H4[contains(text(),\"GENERAL CONFIGURATION\")]").nth(0).hover();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(2).click();
  });

  await test.step(`Hover "Admin"`, async () => {
    await page.locator("//H4[contains(text(),\"Admin\")]").nth(0).hover();
  });

  await test.step(`Click "Admin"`, async () => {
    await page.locator("//h4[contains(text(),\"Admin\")]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Attribute"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add New Attribute\"]").nth(1).hover();
  });

  await test.step(`Hover "Edit Section"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Edit Section\"]").nth(1).hover();
  });

  await test.step(`Hover "Delete Section"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Delete Section\"]").nth(1).hover();
  });

  await test.step(`Click "Add New Attribute"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add New Attribute\"]").nth(1).click();
  });

  await test.step(`Hover "Add New Attribute"`, async () => {
    await page.locator("//H1[normalize-space() = \"Add New Attribute\"]").nth(0).hover();
  });

  await test.step(`Hover "Basics"`, async () => {
    await page.locator(H2_BASICS_CT).nth(0).hover();
  });

  await test.step(`Hover "Enabled"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Enabled\"]").nth(0).hover();
  });

  await test.step(`Hover "On"`, async () => {
    await page.locator("//LABEL[contains(text(),\"On\")]").nth(1).hover();
  });

  await test.step(`Hover "Group"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Group\"]").nth(0).hover();
  });

  await test.step(`Hover "Admin"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Admin\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Attribute"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-vy9hso-text'][@name='shortDisplayName'][@placeholder='Short Display Name']").nth(0).fill("Muuktest Attribute");
  });

  await test.step(`Hover "Long Display Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Long Display Name*\"]").nth(0).hover();
  });

  await test.step(`Hover "Help Text"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Help Text\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Attribute Test"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-rfw53i-text'][@name='longDisplayName'][@placeholder='Long Display Name']").nth(0).fill("Muuktest Attribute Test");
  });

  await test.step(`Hover "Field Type*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Field Type*\"]").nth(0).hover();
  });

  await test.step(`Fill "Testing attributes"`, async () => {
    await page.locator("//TEXTAREA[@id='input-no405s-textarea'][@name='helpText'][@placeholder='Help Text']").nth(0).fill("Testing attributes");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"-- Select a Value --\"]").nth(0).click();
  });

  await test.step(`Click "Text (Single Line)"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Text (Single Line)\"]").nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator(INPUT_RADIO_MULTI).nth(1).check();
  });

  await test.step(`Hover "Permissions and Visibility"`, async () => {
    await page.locator("//H2[contains(text(),\"Permissions and Visibility\")]").nth(0).hover();
  });

  await test.step(`Hover "Student"`, async () => {
    await page.locator("//H3[contains(text(),\"Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Visible"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Visible\"]").nth(0).hover();
  });

  await test.step(`Click "Off"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Off\")]").nth(2).click();
  });

  await test.step(`Hover "Required"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Required\"]").nth(0).hover();
  });

  await test.step(`Hover "Editable"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Editable\"]").nth(0).hover();
  });

  await test.step(`Hover "Shared"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Shared\"]").nth(0).hover();
  });

  await test.step(`Hover "Parent Attribute"`, async () => {
    await page.locator("//H2[normalize-space() = \"Parent Attribute\"]").nth(0).hover();
  });

  await test.step(`Hover "Assign a dependent parent attribute"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Assign a dependent parent attribute\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Attribute saved successfully."`, async () => {
    await page.locator("//DIV[contains(text(),\"Attribute saved successfully.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Muuktest Attribute"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Muuktest Attribute\")]").nth(0).hover();
  });

  await test.step(`Hover "Admin"`, async () => {
    await page.locator("//H4[contains(text(),\"Admin\")]//ancestor::section//SPAN[contains(text(),\"Custom\")]").nth(0).hover();
  });

  await test.step(`Click "Admin"`, async () => {
    await page.locator("//h4[contains(text(),\"Admin\")]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Admin Add New Attribute Edit Section De…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Admin Add New Attribute Edit Section Delete Section\"]").nth(0).click();
    await page.waitForLoadState('load');
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

  await test.step(`Click "Profile"`, async () => {
    await page.locator(NAV_PROFILE).nth(0).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(H1_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//SPAN[contains(text(),\"e2e.student.fullaccess@campuswide.com\")]").nth(0).hover();
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Home\")]").nth(0).hover();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Hover "Admin"`, async () => {
    await page.locator("//H3[contains(text(),\"Admin\")]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest Attribute"`, async () => {
    await page.locator("//dt[contains(text(),\"Muuktest Attribute\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//h3[normalize-space()=\"Admin\"]/following-sibling::div//button[@aria-label=\"Edit\"]";
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Muuktest Attribute"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Muuktest Attribute\")]").nth(0).click();
  });

  await test.step(`Hover "Editable"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Editable\"]").nth(0).hover();
  });

  await test.step(`Click "Off"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Off\")]").nth(4).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Attribute saved successfully."`, async () => {
    await page.locator("//DIV[contains(text(),\"Attribute saved successfully.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Admin"`, async () => {
    await page.reload();
    await page.locator("//h3[normalize-space()=\"Admin\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Admin"`, async () => {
    await page.locator("//H3[contains(text(),\"Edit Admin\")]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest Attribute Test"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Muuktest Attribute Test\")]").nth(0).hover();
  });

  await test.step(`Fill "Manzanita"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-u2xrl7-undefined'][@name='custom_attribute_10888805170243'][@placeholder='Muuktest Attribute Test']").nth(0).fill("Manzanita");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Verify "Manzanita"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Manzanita\")]").nth(0)).toHaveText("Manzanita");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Muuktest Attribute"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Muuktest Attribute\")]").nth(0).click();
  });

  await test.step(`Hover "Back"`, async () => {
    await page.locator(RBTN_BACK).nth(0).hover();
  });

  await test.step(`Click "Actions"`, async () => {
    await page.locator(BTN_ACTIONS).nth(0).click();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
  });

  await test.step(`Click "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).click();
  });

  await test.step(`Hover "Muuktest Attribute Audit Log"`, async () => {
    await page.locator("//H3[contains(text(),\"Muuktest Attribute Audit Log\")]").nth(0).hover();
  });

  await test.step(`Hover "Export"`, async () => {
    await page.locator("//A[normalize-space() = \"Export\"]").nth(0).hover();
  });

  await test.step(`Click "Expand All"`, async () => {
    await page.locator("//A[@role='button'][contains(text(),\"Expand All\")]").nth(0).click();
  });

  await test.step(`Verify "Attribute - Add Attribute"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Attribute - Add Attribute\"]").nth(0)).toHaveText("                            Attribute -                            Add Attribute                                                                                ");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//button[@class=\"close\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Admin"`, async () => {
    await page.locator("//h3[normalize-space()=\"Admin\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Admin"`, async () => {
    await page.locator("//H3[contains(text(),\"Edit Admin\")]").nth(0).hover();
  });

  await test.step(`Hover "Muuktest Attribute Test"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Muuktest Attribute Test\")]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Attribute Test"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-u2xrl7-undefined'][@name='custom_attribute_10888805170243'][@placeholder='Muuktest Attribute Test']").nth(0).fill("");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = " //SPAN[contains(text(),\"Manzanita\")]";
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Actions"`, async () => {
    await page.locator(BTN_ACTIONS).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete attribute"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete attribute\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this attribute?\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete attribute"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete attribute\")]").nth(0).click();
  });

  await test.step(`Hover "Attribute deleted successfully."`, async () => {
    await page.locator("//DIV[contains(text(),\"Attribute deleted successfully.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = " //A[@role=\\'button\\'][contains(text(),\"Muuktest Attribute\")]";
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    await page.reload();
    selector = "//dt[contains(text(),\"Muuktest Attribute\")]";
  });

});
