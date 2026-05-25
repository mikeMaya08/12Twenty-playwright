// TC: TC62636
// Students - Student connects/emails student

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_SEARCH,
  H1_STUDENTS_ALUMNI,
  INPUT_SEARCH_NAME,
  INPUT_SUBJECT,
  LABEL_RELATIVE_RANGE,
  LOGOUT_LINK,
  MODAL_SUCCESS_CT,
  NAV_EMAIL_ACTIVITY,
  NAV_HOME,
  NAV_STUDENTS_ALUMNI,
  SELECT_DATE,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Students - Student connects/emails student - TC62636", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideStudent, {timeout: 90000});
    await page.waitForTimeout(4000);
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
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Hover "Students & Alumni"`, async () => {
    await page.locator(H1_STUDENTS_ALUMNI).nth(0).hover();
    await page.waitForTimeout(5000);
  });

  await test.step(`Fill "Test Student"`, async () => {
    await page.reload();
    await page.locator(INPUT_SEARCH_NAME).nth(0).fill("Test Student");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Test Student #0001"`, async () => {
    await page.locator("//A[normalize-space()=\"Test Student #0001\"][contains(@class,\"card-title\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator("//A[@role='tab'][contains(text(),\"Profile\")]").nth(0).click();
  });

  await test.step(`Hover "General"`, async () => {
    await page.locator("//H3[contains(text(),\"General\")]").nth(0).hover();
  });

  await test.step(`Click "Connect"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Connect\"]").nth(0).click();
  });

  await test.step(`Hover "Connect with Test Student"`, async () => {
    await page.locator("//H3[contains(text(),\"Connect with Test Student\")]").nth(0).hover();
  });

  await test.step(`Hover "Send message to Test Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Send message to Test Student\"]").nth(0).hover();
  });

  await test.step(`Hover "Close"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Close\")]").nth(0).hover();
  });

  await test.step(`Click "Send message to Test Student"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Send message to Test Student\"]").nth(0).click();
  });

  await test.step(`Hover "Subject:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Subject:\")]").nth(0).hover();
  });

  await test.step(`Hover "Message:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Message:\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Hover "Send"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Send\")]").nth(0).hover();
  });

  await test.step(`Hover "Subject:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Subject:\")]").nth(0).hover();
  });

  await test.step(`Fill "Job Fair"`, async () => {
    await page.locator(INPUT_SUBJECT).nth(0).fill("Job Fair");
  });

  await test.step(`Hover "Message:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Message:\")]").nth(0).hover();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_email-body-editor\"] | //div[contains(@id,\"contents\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Type "Connect with top employers, explore car…"`, async () => {
    await page.keyboard.type("Connect with top employers, explore career opportunities, network with professionals, and discover your next job at our vibrant fair.");
    await page.locator(INPUT_SUBJECT).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Send"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Send\")]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "Your email has been sent."`, async () => {
    await page.locator("//DIV[contains(text(),\"Your email has been sent.\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Navigate: /`, async () => {
    await page.goto('https://e2e-tests-campuswide.admin.qa-12twenty.com/');
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

  await test.step(`Click element`, async () => {
    await page.locator("//a[@id=\"navbar-settings-btn\"]/following::button[@aria-label=\"Expand Site Management submenu\"]").nth(0).click();
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator(NAV_EMAIL_ACTIVITY).nth(0).click();
  });

  await test.step(`Hover "Email Activity"`, async () => {
    await page.locator("//H1[normalize-space() = \"Email Activity\"]").nth(0).hover();
  });

  await test.step(`Click "Date"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Date\"]").nth(0).click();
  });

  await test.step(`Click "Relative Range"`, async () => {
    await page.locator(LABEL_RELATIVE_RANGE).nth(0).click();
  });

  await test.step(`Type in field`, async () => {
    await page.locator(SELECT_DATE).nth(0).pressSequentially("number:7");
  });

  await test.step(`Click "Date"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Date\"]").nth(0).click();
  });

  await test.step(`Click "e2e Test Student has messaged you via E…"`, async () => {
    await page.locator("//A[normalize-space() = \"e2e Test Student has messaged you via E2E Tests Campuswide E2E-CPW - Job Fair\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Student has messaged you via E…"`, async () => {
    await page.locator("//DD[contains(text(),\"e2e Test Student has messaged you via E2E Tests Campuswide E2E-CPW - Job Fair\")]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator("//DIV[normalize-space() = \"e2e Test Student\"]").nth(0).hover();
  });

  await test.step(`Hover "Connect with top employers, explore car…"`, async () => {
    await page.locator("//P[normalize-space() = \"Connect with top employers, explore career opportunities, network with professionals, and discover your next job at our vibrant fair.\"]").nth(0).hover();
  });

});
