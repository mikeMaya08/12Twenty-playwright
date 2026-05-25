// TC: TC59304
// Command Center - Interview session Student and Employer - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_OPTIONS_LOWER,
  BTN_SEARCH,
  BYPASS_ON_NEXT_LOGIN,
  LABEL_RELATIVE_RANGE,
  LOGIN_AS_BTN,
  NAV_EMAIL_ACTIVITY,
  NAV_HOME,
  NAV_JOB_LISTINGS,
  SELECT_DATE,
  TAB_SCHEDULE,
} from '@config/selectors';

test("Command Center - Interview session Student and Employer - Admin - TC59304", async ({ page, context }) => {
  let selector = `0`;
  let jobPostingName = `0`;
  let interviewerurl = `0`;
  let indexWindow = `0`;

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

  await test.step(`Hover "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).hover();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Listings & Interviews\"]//following::BUTTON").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//a[contains(text(),\"Command Center\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Interview Command Center"`, async () => {
    await page.locator("//H1[contains(text(),\"Interview Command Center\")]").nth(0).hover();
  });

  await test.step(`Click "Interview Date"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Interview Date\"]").nth(0).click();
  });

  await test.step(`Click "Relative Range"`, async () => {
    await page.locator(LABEL_RELATIVE_RANGE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(SELECT_DATE).nth(0).click();
  });

  await test.step(`Type "today"`, async () => {
    await page.keyboard.type("today");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//SPAN[normalize-space() = \"Interview Date\"]").nth(0).click();
  });

  await test.step(`Click "Interview Command Center"`, async () => {
    await page.locator("//H1[contains(text(),\"Interview Command Center\")]").nth(0).click();
  });

  await test.step(`Click "Waiting"`, async () => {
    await page.locator("//A[contains(text(),\"Waiting\")]").nth(0).click();
    await page.waitForTimeout(5000);
  });

  await test.step(`Set jobPostingName`, async () => {
    jobPostingName = await page.locator('(//span[contains(@class,"primary-item-text ng-binding ng-scope")])[last()]//following::span[@class="primary-item-text ng-binding"]').innerText();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("(//span[contains(@class,\"primary-item-text ng-binding ng-scope\")])[last()]").nth(0).click();
  });

  await test.step(`Hover "Test Student #"`, async () => {
    await page.locator("//H1[contains(normalize-space(),\"Test Student #\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(3000);
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \\'Bypass \"On Next Login\" (Admin Only)\\']";
  });

  await test.step(`Click element`, async () => {
    await page.locator(BYPASS_ON_NEXT_LOGIN).nth(0).click();
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "${jobPostingName}"`, async () => {
    await page.locator(`//*[normalize-space()="${jobPostingName}"]`).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "12twenty Meeting"`, async () => {
    await page.locator("//SPAN[contains(text(),\"12twenty Meeting\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Join Meeting"`, async () => {
    await page.reload();
    await page.locator("//div[contains(@class,\"virtual-meeting\") and not(contains(@class,\"has-ended\"))]//A[@role='button'][normalize-space() = \"Join Meeting\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Join"`, async () => {
    await page.locator("//span[contains(text(),\"Join\") or contains(text(),\"Request to join\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Join Meeting"`, async () => {
    await page.reload();
    await page.locator("//div[contains(@class,\"virtual-meeting\") and not(contains(@class,\"has-ended\"))]//A[@role='button'][normalize-space() = \"Join Meeting\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Join"`, async () => {
    await page.locator("//span[contains(text(),\"Join\") or contains(text(),\"Request to join\")]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator(NAV_JOB_LISTINGS).nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//a[contains(text(),\"Command Center\")]").nth(0).click();
  });

  await test.step(`Click "Waiting"`, async () => {
    await page.locator("//A[contains(text(),\"Waiting\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Job Posting"`, async () => {
    await page.locator("(//span[contains(@class,\"primary-item-text ng-binding ng-scope\")])[last()]/following::span[contains(text(),\"Job Posting\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Schedule"`, async () => {
    await page.locator(TAB_SCHEDULE).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Schedule Actions"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Schedule Actions\"]").nth(0).click();
  });

  await test.step(`Click "Send Interviewer Links"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Send Interviewer Links\"]").nth(0).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator("//A[@id=\"navbar-settings-btn\"][normalize-space() = \"Site Management\"]/following::button[contains(@class,\"sub-menu-icon\")]").nth(0).click();
  });

  await test.step(`Click "Email Activity"`, async () => {
    await page.locator(NAV_EMAIL_ACTIVITY).nth(0).click();
  });

  await test.step(`Click "Interview Link"`, async () => {
    await page.locator("//A[contains(text(),\"Interview Link\")]").nth(0).click();
  });

  await test.step(`Click "this link"`, async () => {
    await page.locator("//A[contains(text(),\"this link\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set interviewerurl`, async () => {
    interviewerurl = page.url();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
  });

  await test.step(`Set indexWindow`, async () => {
    indexWindow = "0";
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Applicant Joined"`, async () => {
    await page.locator("//span[normalize-space()=\"Applicant Joined\"]//ancestor::div[@ng-repeat=\"meeting in $ctrl.meetings\"]//a[@ng-if=\"meeting.CanJoin\"]").nth(0).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Join"`, async () => {
    await page.locator("//span[contains(text(),\"Join\") or contains(text(),\"Request to join\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set indexWindow`, async () => {
    indexWindow = "1";
    await page.waitForTimeout(2000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Job Listings & Interviews"`, async () => {
    await page.locator("//A[normalize-space() = \"Job Listings & Interviews\"]//following::BUTTON").nth(0).click();
  });

  await test.step(`Click "Command Center"`, async () => {
    await page.locator("//a[contains(text(),\"Command Center\")]").nth(0).click();
  });

  await test.step(`Click "Waiting"`, async () => {
    await page.locator("//A[contains(text(),\"Waiting\")]").nth(0).click();
  });

  await test.step(`Click "In Progress"`, async () => {
    await page.locator("//A[contains(text(),\"In Progress\")]").nth(0).click();
  });

  await test.step(`Set indexWindow`, async () => {
    indexWindow = "0";
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

});
