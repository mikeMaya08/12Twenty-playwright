// TC: TC67060
// 12TE Candidate Search - Employer user filters for candidate, favorites, unlocks, and sends email to candidates

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_MORE_FILTERS,
  BTN_OK,
  BTN_RESET_FILTERS,
  INPUT_DATE,
  INPUT_SUBJECT,
  NAV_HOME,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Candidate Search - Employer user filters for candidate, favorites, unlocks, and sends email to candidates - TC67060", async ({ page, context }) => {
  let selector = `0`;
  let textContent = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Unlocked Candidates"`, async () => {
    await page.locator("//A[normalize-space() = \"Unlocked Candidates\"]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "School (empty)"`, async () => {
    await page.reload();
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"School (empty)\"]").nth(0).click();
  });

  await test.step(`Hover "School"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"School\")][contains(@class,\"selected-filter\")]").nth(0).hover();
  });

  await test.step(`Fill "UCLA"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_OP_CandidateSchool'][@placeholder='School']").nth(0).fill("UCLA");
  });

  await test.step(`Click "School (empty)"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"School (empty)\"]").nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Unlocked Date"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search filters']").nth(0).fill("Unlocked Date");
  });

  await test.step(`Hover "Candidate - Recruiter Actions"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Candidate - Recruiter Actions\")]").nth(0).hover();
  });

  await test.step(`Click "Unlocked Date"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Unlocked Date\"]").nth(0).click();
  });

  await test.step(`Hover "Unlocked Date"`, async () => {
    await page.locator("//SPAN[contains(normalize-space(),\"Unlocked Date\")][contains(@class,\"selected-filter\")]").nth(0).hover();
  });

  await test.step(`Fill "01/01/2025"`, async () => {
    await page.locator(INPUT_DATE).nth(0).fill("01/01/2025");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(23).click();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//H1[contains(text(),\"Candidate Search\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Unlocked Date"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search filters']").nth(0).fill("Unlocked Date");
  });

  await test.step(`Click "Unlocked Date"`, async () => {
    await page.locator("//BUTTON[contains(normalize-space(),\"Unlocked Date\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT").nth(0).click();
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//H1[contains(text(),\"Candidate Search\")]").nth(0).click();
    await page.reload();
    await page.waitForTimeout(5000);
  });

  await test.step(`Click "Load more results..."`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Load more results...\"]").nth(0).click();
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Unlock"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Unlock\"]").nth(0).click();
  });

  await test.step(`Verify "Candidate Unlocked"`, async () => {
    await expect(page.locator("//SPAN[contains(text(),\"Candidate Unlocked\")]").nth(0)).toHaveText("Candidate Unlocked");
  });

  await test.step(`Click "Unlocked Candidates"`, async () => {
    await page.locator("//A[normalize-space() = \"Unlocked Candidates\"]").nth(0).click();
    await page.reload();
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]//span[contains(@class,\"primary-item\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]//i[contains(@class,\"fa-heart\")]").nth(0).click();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Favorites"`, async () => {
    await page.locator("//A[normalize-space() = \"Favorites\"]").nth(0).click();
  });

  await test.step(`Verify element visible`, async () => {
    await expect(page.locator("//div[contains(@class,\"tt-card\")]//span[contains(@class,\"primary-item\")]").nth(0)).toBeVisible();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]//i[contains(@class,\"fa-envelope\")]").nth(0).click();
  });

  await test.step(`Verify visible "Send email to"`, async () => {
    await expect(page.locator("//H3[contains(normalize-space(),\"Send email to\")]").nth(0)).toBeVisible();
  });

  await test.step(`Hover "Cc:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Cc:\")]").nth(0).hover();
  });

  await test.step(`Fill "test@gmail.com"`, async () => {
    await page.locator("//label[normalize-space()=\"Cc:\"]//following::input").nth(0).fill("test@gmail.com");
  });

  await test.step(`Hover "Subject:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Subject:\")]").nth(0).hover();
  });

  await test.step(`Fill "Make $5 per survey — quick tasks"`, async () => {
    await page.locator(INPUT_SUBJECT).nth(0).fill("Make $5 per survey — quick tasks");
  });

  await test.step(`Hover "Message:"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Message:\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_email-body-editor\"] | //div[contains(@id,\"contents\")]").nth(0).click();
  });

  await test.step(`Type "Hi! Earn easy money by completing short…"`, async () => {
    await page.keyboard.type("Hi! Earn easy money by completing short surveys and app testing tasks. No experience needed, get paid per task. Sign up with the link below and refer friends for bonus rewards.");
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Send"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Send\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[contains(@class,\"modal-body\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]//i[contains(@class,\"fa-envelope\")]").nth(0).click();
  });

  await test.step(`Fill "Invitation to apply — Software Engineer…"`, async () => {
    await page.locator(INPUT_SUBJECT).nth(0).fill("Invitation to apply — Software Engineer Intern");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_email-body-editor\"] | //div[contains(@id,\"contents\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Press End`, async () => {
    await page.keyboard.press("End");
  });

  await test.step(`Hold Shift`, async () => {
    await page.keyboard.down("Shift");
  });

  await test.step(`Press Home`, async () => {
    await page.keyboard.press("Home");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Type "Hi, I came across your profile and woul…"`, async () => {
    await page.keyboard.type("Hi, I came across your profile and would love to connect about our Software Engineer Internship at Acme Corp for Summer 2026. If you’re interested, you can apply through our careers site or reply directly to this message. Looking forward to hearing from you. — Recruiting Team, Acme Corp");
    await page.locator("//BUTTON[contains(text(),\"Send\")]").nth(0).click();
  });

  await test.step(`Verify "Email successfully sent to 1 candidates."`, async () => {
    await expect(page.locator("//div[contains(text(),\"Email successfully sent to 1 candidates.\")]").nth(0)).toHaveText("Email successfully sent to 1 candidates.");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[contains(@class,\"tt-card\")]//i[contains(@class,\"fa-heart\")]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"${textContent}\")]";
  });

});
