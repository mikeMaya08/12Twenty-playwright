// @ts-nocheck
import { test as base } from '@playwright/test';

export const test = base.extend({
  context: async ({ context }, use, testInfo) => {
    (context as any).index = testInfo.parallelIndex;
    await use(context);
  },

  page: async ({ page }, use) => {
    await page.addLocatorHandler(
      page.locator('.centered-prompt.on-login-actions button.btn-school'),
      async () => {
        await page.locator('input[type="radio"][value="false"], label:has-text("No") input').first().click({ force: true });
        await page.locator('.centered-prompt.on-login-actions button.btn-school').click();
        await page.waitForTimeout(500);
      }
    );
    await use(page);
  },
});
