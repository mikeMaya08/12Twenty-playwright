// TC: TC_A77031
// Data Uploads - Download template and create/delete new student user

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_OK,
  BTN_SEARCH,
  BTN_UPLOAD,
  H1_MANAGE_STUDENTS,
  INPUT_SEARCH_USERS,
  LABEL_DELETE_STUDENT,
  LOGIN_AS_USER,
  MENU_DELETE,
  MENU_EDIT,
  MODAL_CONFIRM_DELETE,
  NAV_DATA_UPLOADS,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_SITE_MGMT_NAVBAR_BTN,
  TAB_HOME,
} from '@config/selectors';

test("Data Uploads - Download template and create/delete new student user - TC_A77031", async ({ page, context }) => {
  let fileName = `0`;
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
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Hover "Manage Students & Alumni"`, async () => {
    await page.locator(H1_MANAGE_STUDENTS).nth(0).hover();
  });

  await test.step(`Hover "Search by Name, Email Address or ID"`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("datauploadteststudent@test.com");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Data Upload Test\"]";
  });

  await test.step(`Hover "Data Upload Test"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Data Upload Test\"]").nth(0).hover();
  });

  await test.step(`Hover "Spring 2029, Group 1"`, async () => {
    await page.locator("//SPAN[@title='Spring 2029, Group 1'][normalize-space() = \"Spring 2029, Group 1\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(1).hover();
  });

  await test.step(`Click "Data Upload Test"`, async () => {
    await page.locator("//a[normalize-space()=\"Data Upload Test\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).hover();
  });

  await test.step(`Hover "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).hover();
  });

  await test.step(`Hover "Send PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Manual PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Manual PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Reset Sign-In Cookies"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reset Sign-In Cookies\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

  await test.step(`Hover "Confirm Delete"`, async () => {
    await page.locator(MODAL_CONFIRM_DELETE).nth(0).hover();
  });

  await test.step(`Click "I understand that deleting a student us…"`, async () => {
    await page.locator(LABEL_DELETE_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).click();
  });

  await test.step(`Click "Data Uploads"`, async () => {
    await page.locator(NAV_DATA_UPLOADS).nth(0).click();
  });

  await test.step(`Click "Download CSV Template"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Download CSV Template\"]").nth(0).click();
  });

  await test.step(`Hover "Download Template"`, async () => {
    await page.locator("//H3[normalize-space() = \"Download Template\"]").nth(0).hover();
  });

  await test.step(`Click "Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type *\"]").nth(0).click();
  });

  await test.step(`Select "1001"`, async () => {
    await page.locator("//SELECT").nth(0).selectOption("1001");
  });

  await test.step(`Click "Upload Method *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload Method *\"]").nth(0).click();
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//SELECT").nth(2).pressSequentially("number:1");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "New Upload"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"New Upload\"]").nth(0).click();
  });

  await test.step(`Hover "New Data Upload"`, async () => {
    await page.locator("//H3[normalize-space() = \"New Data Upload\"]").nth(0).hover();
  });

  await test.step(`Hover "Select .csv *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Select .csv *\"]").nth(0).hover();
  });

  await test.step(`Hover "Drop file to attach, or browse"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Drop file to attach, or browse\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set filename "Muuktest_Data_Upload.csv"`, async () => {
    fileName = "Muuktest_Data_Upload.csv";
  });

  await test.step(`Hover "Type *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Type *\"]").nth(0).hover();
  });

  await test.step(`Select "1001"`, async () => {
    await page.locator("//SELECT").nth(0).selectOption("1001");
  });

  await test.step(`Hover "Upload Method *"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Upload Method *\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT").nth(2).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Upload"`, async () => {
    await page.locator(BTN_UPLOAD).nth(0).click();
  });

  await test.step(`Hover "Upload Results"`, async () => {
    await page.locator("//H3[normalize-space() = \"Upload Results\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TH").nth(3).hover();
  });

  await test.step(`Click "Test, Data Upload"`, async () => {
    await page.locator("//A[normalize-space() = \"Test, Data Upload\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Hover "Spring 2029, Group 1"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Spring 2029, Group 1\"]").nth(1).hover();
  });

  await test.step(`Hover "datauploadteststudent@test.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"datauploadteststudent@test.com\"]").nth(2).hover();
  });

  await test.step(`Hover "NOT SHARED"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"NOT SHARED\"]").nth(0).hover();
  });

  await test.step(`Hover "Centralized Univ"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Centralized Univ\"]").nth(0).hover();
  });

  await test.step(`Hover "Campus Wide University"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Campus Wide University\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Master\\'s\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//i[@class=\"far fa-copy copy-url-icon\"]").nth(0).click();
  });

  await test.step(`Hover "Email Copied!"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email Copied!\"]").nth(0).hover();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Hover "Manage Students & Alumni"`, async () => {
    await page.locator(H1_MANAGE_STUDENTS).nth(0).hover();
  });

  await test.step(`Hover "Search by Name, Email Address or ID"`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("datauploadteststudent@test.com");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"Data Upload Test\"]";
  });

  await test.step(`Hover "Data Upload Test"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Data Upload Test\"]").nth(0).hover();
  });

  await test.step(`Hover "Spring 2029, Group 1"`, async () => {
    await page.locator("//SPAN[@title='Spring 2029, Group 1'][normalize-space() = \"Spring 2029, Group 1\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(1).hover();
  });

  await test.step(`Click "Data Upload Test"`, async () => {
    await page.locator("//a[normalize-space()=\"Data Upload Test\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(1).hover();
  });

  await test.step(`Hover "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).hover();
  });

  await test.step(`Hover "Send PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Manual PW Reset"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Manual PW Reset\"]").nth(0).hover();
  });

  await test.step(`Hover "Reset Sign-In Cookies"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reset Sign-In Cookies\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

  await test.step(`Hover "Confirm Delete"`, async () => {
    await page.locator(MODAL_CONFIRM_DELETE).nth(0).hover();
  });

  await test.step(`Click "I understand that deleting a student us…"`, async () => {
    await page.locator(LABEL_DELETE_STUDENT).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "No users found"`, async () => {
    await page.reload();
    await page.locator("//DIV[normalize-space() = \"No users found\"]").nth(0).hover();
  });

});
