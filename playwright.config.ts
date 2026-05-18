import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }], ['list'],
    ['@muuktest/amikoo-reporter']
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'retain-on-failure',
  },
  outputDir: 'test-results/',
  projects: [
    {
      name: 'test1',
      testDir: './tests/test1',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'test2',
      testDir: './tests/test2',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
