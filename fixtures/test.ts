import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import * as fs from 'fs';

export async function loadAuthCookies(context: BrowserContext, page: Page): Promise<void> {
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
}

export async function loginAsAdmin(page: Page): Promise<void> {
  await page.getByPlaceholder('Email Address').fill('e2e.admin.schooladministrator@campuswide.com');
  await page.getByPlaceholder('Password').fill('eQ%DEx%j6Cl9');
  await page.getByRole('button', { name: 'Admin Log In' }).click();
  await page.waitForLoadState('networkidle');
  // Handle /on-login questionnaire redirect (e.g. On Login Attributes feature active in QA)
  if (page.url().includes('/on-login')) {
    const returnUrl = new URL(page.url()).searchParams.get('returnUrl') || '/dashboard';
    await page.goto(new URL(returnUrl, page.url()).href);
    await page.waitForLoadState('networkidle');
  }
  // Dismiss timezone/onboarding popup if it appears
  const saveAndContinue = page.getByRole('button', { name: 'Save & Continue' });
  if (await saveAndContinue.isVisible({ timeout: 5000 }).catch(() => false)) {
    await page.getByLabel('No').click();
    await saveAndContinue.click();
    await page.waitForLoadState('networkidle');
  }
  // Wait for nav to be ready before returning
  await page.locator('nav a').first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
}

export async function loginAsStudent(page: Page): Promise<void> {
  await page.getByPlaceholder('Email Address').fill('e2e.student.fullaccess@campuswide.com');
  await page.getByPlaceholder('Password').fill('BoH5dORH7xg%');
  await page.getByRole('button', { name: 'Student/Alumni Log In' }).click();
  await page.waitForLoadState('networkidle');
  // Handle /on-login questionnaire redirect
  if (page.url().includes('/on-login')) {
    const returnUrl = new URL(page.url()).searchParams.get('returnUrl') || '/dashboard';
    await page.goto(new URL(returnUrl, page.url()).href);
    await page.waitForLoadState('networkidle');
  }
  // Dismiss timezone/onboarding popup if it appears
  const saveAndContinue = page.getByRole('button', { name: 'Save & Continue' });
  if (await saveAndContinue.isVisible({ timeout: 5000 }).catch(() => false)) {
    await page.getByLabel('No').click();
    await saveAndContinue.click();
    await page.waitForLoadState('networkidle');
  }
  // Wait for nav to be ready before returning
  await page.locator('nav a').first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
}

export async function loginAsEmployer(page: Page): Promise<void> {
  await page.getByPlaceholder('Email Address').fill('e2e.employeruser.subscription.admin@walmart.com');
  await page.getByPlaceholder('Password').fill('eQ%DEx%j6Cl9');
  await page.locator('button.btn.btn-school.submit-login-form>span').click();
  await page.waitForLoadState('networkidle');
  // Dismiss timezone/onboarding popup if it appears
  const saveAndContinue = page.getByRole('button', { name: 'Save & Continue' });
  if (await saveAndContinue.isVisible({ timeout: 5000 }).catch(() => false)) {
    await page.getByLabel('No').click();
    await saveAndContinue.click();
    await page.waitForLoadState('networkidle');
  }
  // Wait for employer nav to be ready (nav-user-account-name appears once dashboard is loaded)
  await page.locator('.nav-user-account-name').waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
}

export const test = base;
export { expect };
