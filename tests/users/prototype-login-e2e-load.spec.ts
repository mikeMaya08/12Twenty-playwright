// TC: TC71734
// prototype login-e2e-load

import { test, expect } from '@playwright/test';
import { loadAuthCookies } from '@fixtures/test';
import { ADMIN_LOG_IN_BTN } from '@config/selectors';

test("prototype login-e2e-load - TC71734", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-business.admin.qa-12twenty.com/login', {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='email'][@placeholder='Email Address'][@name='UserName']").nth(0).fill("admin-1@e2e-tests-business.com");
  });

  await test.step(`Fill password`, async () => {
    await page.locator("//INPUT[@type='password'][@placeholder='Password'][@name='Password']").nth(0).fill("eQ%DEx%j6Cl9");
  });

  await test.step(`Click "Admin Log In"`, async () => {
    await page.locator(ADMIN_LOG_IN_BTN).nth(0).click();
  });

});
