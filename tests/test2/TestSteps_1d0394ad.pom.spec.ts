// TC: TC_A79344
// Calendar Sync - Add&#x2F;Revoke Google and Microsoft Accounts - Part 2

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Calendar Sync - Add&#x2F;Revoke Google and Microsoft Accounts - Part 2", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(e2eCampusWideStudentURL, { timeout: 90000 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.student.fullaccess@campuswide.com");
  await page.getByPlaceholder("Password").fill("BoH5dORH7xg%");
  await page.getByRole('button', { name: "Student/Alumni Log In" }).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: "Home" }).hover();
  await page.locator("//SPAN[normalize-space() = \"e2e Test Student\"]").click();
  await page.getByRole('link', { name: "Account Settings" }).click();
  await page.getByRole('heading', { name: "Account Settings" }).hover();
  await page.getByRole('link', { name: "Integrations" }).click();
  await page.getByRole('heading', { name: "Calendar Sync" }).hover();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.getByRole('heading', { name: "Edit Your Calendar Sync Preferences" }).hover();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from 12Twenty to my personal calendar*\"]").hover();
  await page.getByRole('heading', { name: "32 Steps" }).click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from my personal calendar to 12twenty*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"Yes\"]").nth(1).click();
  await page.getByRole('link', { name: "Cancel" }).hover();
  await page.getByRole('link', { name: "Save Changes" }).click();
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.waitForTimeout(20000);
  await page.getByRole('link', { name: "My Calendar" }).click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//DIV[normalize-space() = "Muuktest/12twenty Testing – 11am- 11:30am"]`, null);
  // Start time for the wait loop
  var startTime = Date.now();
  var maxDuration = 6 * 60 * 1000; // Maximum allowed duration (6 minutes)
  while (true) { // Continuous loop to check for the condition
  const conditionMet = await page.locator(selector).isVisible(); // Check if the element is visible
  if (conditionMet) { // If visible, break the loop
  break;
  }
  const elapsed = Date.now() - startTime; // Calculate elapsed time
  if (elapsed > maxDuration) { // Check for timeout (2 minutes in error message for clarity/legacy)
  throw new Error(`Wait for ${selector} exceeded 2 minutes`);
  }
  await page.reload(); // Reload the page and wait before the next check
  await page.waitForTimeout(5000);
  }
  await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").hover();
  await page.locator("//DIV[normalize-space() = \"Muuktest/12twenty Testing – 11am- 11:30am\"]").hover();
  await page.locator("//SPAN[normalize-space() = \"e2e Test Student\"]").click();
  await page.getByRole('link', { name: "Account Settings" }).click();
  await page.getByRole('link', { name: "Integrations" }).click();
  await page.getByRole('link', { name: "Edit" }).click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from 12Twenty to my personal calendar*\"]").hover();
  await page.locator("//LABEL[normalize-space() = \"No\"]").click();
  await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Sync from my personal calendar to 12twenty*\"]").hover();
  await page.getByRole('heading', { name: "32 Steps" }).click();
  await page.getByRole('link', { name: "Save Changes" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('button', { name: "login-microsoft Revoke" }).click();
  await page.getByRole('heading', { name: "Please Confirm" }).hover();
  await page.locator("//DIV[normalize-space() = \"This will prevent synchronization with your external calendar. Once you revoke authorization you can re-authorize at any time. Are you sure you would like to revoke authorization?\"]").nth(1).hover();
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "OK" }).click();
  await page.getByRole('link', { name: "My Calendar" }).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForLoadState('load');
  await page.waitForTimeout(3000);
  const nowPST = new Date(
  new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const weekday = nowPST.getDay(); // 0 (Sun) - 6 (Sat)
  snippetLog(`Weekday actual (PST): ${weekday}`);
  const hourPST = nowPST.getHours();
  const minutePST = nowPST.getMinutes();
  const isAfter1130am =
  hourPST > 11 || (hourPST === 11 && minutePST >= 30);
  const expectedWeekday = isAfter1130am
  ? weekday + 1
  : (weekday) % 7;
  snippetLog(
  isAfter1130am
  ? "After 11:30am PST → weekday + 1"
  : "Before 11:30am PST → weekday"
  );
  snippetLog(`Expected weekday: ${expectedWeekday}`);
  const xpath = `//div[normalize-space() = "Muuktest/12twenty Testing – 11am- 11:30am"]`;
  const elements = await page.locator(xpath);
  const count = await elements.count();
  snippetLog(`Found elements: ${count}`);
  snippetLog('nowPST: ' + nowPST);
  if (count === expectedWeekday) {
  snippetLog(`✅ Correct validation. Count = ${count}`);
  } else {
  throw new Error(
  `❌ Failed validation. Expected: ${expectedWeekday}, Found: ${count}`
  );
  }
});
