// TC: TC_A83602
// Employer Tags - Admin can add values and students can assign, delete, filter for values

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_MERGE,
  BTN_MORE_FILTERS,
  BTN_OK,
  BTN_RESET_FILTERS,
  BTN_SAVE,
  BTN_SAVE_TYPE,
  BTN_UPLOAD,
  INPUT_SEARCH_FILTERS,
  INPUT_SEARCH_USERS,
  LOGIN_AS_USER,
  LOGOUT_LINK,
  MODAL_LOGIN_AS_STUDENT,
  MULTI_SELECT_VALUE,
  NAV_EMPLOYERS,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_PICKLISTS,
  NAV_SITE_MGMT_COLLAPSE,
  NAV_SITE_SETTINGS,
  OPTIONS_ROW_STUDENT,
  RBTN_DELETE,
  RBTN_EDIT,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("Employer Tags - Admin can add values and students can assign, delete, filter for values - TC_A83602", async ({ page, context }) => {
  test.setTimeout(600000); // 10 minutes — long test with cleanup of stale tags
  let fileName = `0`;
  let selector = `0`;

  // Helper: dismiss all AngularJS modal overlays using Angular's own $uibModalStack API
  // plus brute-force CSS removal for persistent Bootstrap overlays like #blank-modal
  const dismissAllModals = async () => {
    await page.evaluate(() => {
      // 1. Use Angular's $uibModalStack to properly close all $uibModal instances
      try {
        const ng = (window as any).angular;
        const injector = ng && ng.element(document.body).injector();
        if (injector) {
          const stack = injector.get('$uibModalStack');
          if (stack) {
            stack.dismissAll('playwright-close');
          }
          // Force a digest cycle so Angular processes the close
          const $rootScope = injector.get('$rootScope');
          if ($rootScope && !$rootScope.$$phase) {
            $rootScope.$digest();
          }
        }
      } catch (_) { /* ignore if Angular not available */ }

      // 2. Force-close #blank-modal and #loadingModal (Bootstrap modals outside $uibModal)
      const forceHide = (el: Element) => {
        el.classList.remove('in', 'show');
        (el as HTMLElement).style.cssText = 'display:none!important;visibility:hidden!important;pointer-events:none!important;';
      };
      ['blank-modal', 'loadingModal'].forEach(id => {
        const el = document.getElementById(id);
        if (el) forceHide(el);
      });

      // 3. Hide any remaining open modal elements
      document.querySelectorAll('.modal.in, .modal.fade.in, .modal.show').forEach(el => forceHide(el));

      // 4. Remove all modal backdrops
      document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());

      // 5. Restore body
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    });
    await page.waitForTimeout(600);
  };

  // Helper: navigate to Student Employer Tags if redirected away
  const ensureOnStudentEmployerTagsPage = async () => {
    const tagsLink = page.locator("//A[@role='button'][normalize-space() = \"Student Employer Tags\"]");
    if (await tagsLink.isVisible({ timeout: 2000 }).catch(() => false)) {
      await tagsLink.click();
      await page.waitForLoadState('networkidle');
    }
  };

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
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Employer Relations"`, async () => {
    await page.locator("//A[normalize-space() = \"Employer Relations\"]").nth(0).click();
  });

  await test.step(`Enable "Student Employer Tagging"`, async () => {
    // Find the "On" label that immediately follows the "Enable Student Employer Tagging" label
    // and click it to ensure the feature is ON (radio buttons are safe to re-click if already selected)
    const onLabel = page.locator(
      "//LABEL[normalize-space() = \"Enable Student Employer Tagging\"]/following::LABEL[normalize-space() = \"On\"][1]"
    );
    await onLabel.hover();
    await onLabel.click();
    // Allow the setting change to persist (AngularJS may auto-save via ng-change)
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Picklists"`, async () => {
    await page.locator(NAV_PICKLISTS).nth(0).click();
  });

  await test.step(`Click "Student Employer Tags"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Student Employer Tags\"]").nth(0).click();
  });

  await test.step(`Cleanup: delete existing Test Tags`, async () => {
    let found = true;
    while (found) {
      // Dismiss any leftover modals before checking for tags
      await dismissAllModals();
      const optBtn = page.locator("//span[contains(@title,\"Test Tag\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").first();
      // Use 8s timeout to allow slow-loading pages to populate
      found = await optBtn.isVisible({ timeout: 8000 }).catch(() => false);
      if (found) {
        await optBtn.click();
        await page.locator(RBTN_DELETE).nth(0).click();
        await page.locator(BTN_OK).nth(0).click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1500);
        await dismissAllModals();
        await ensureOnStudentEmployerTagsPage();
      }
    }
    // Final verification: reload the page to confirm the list is truly empty
    await page.reload();
    await page.waitForLoadState('networkidle');
    await ensureOnStudentEmployerTagsPage();
    // Double-check after reload — sometimes tags appear after a slight delay
    await page.waitForTimeout(2000);
    const remaining = page.locator("//span[contains(@title,\"Test Tag\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").first();
    if (await remaining.isVisible({ timeout: 3000 }).catch(() => false)) {
      // More tags appeared after reload — delete them too
      found = true;
      while (found) {
        await dismissAllModals();
        const btn = page.locator("//span[contains(@title,\"Test Tag\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").first();
        found = await btn.isVisible({ timeout: 5000 }).catch(() => false);
        if (found) {
          await btn.click();
          await page.locator(RBTN_DELETE).nth(0).click();
          await page.locator(BTN_OK).nth(0).click();
          await page.waitForLoadState('networkidle');
          await page.waitForTimeout(1500);
          await dismissAllModals();
          await ensureOnStudentEmployerTagsPage();
        }
      }
    }
  });

  await test.step(`Hover "Student Employer Tags"`, async () => {
    await page.locator("//H3[normalize-space() = \"Student Employer Tags\"]").nth(0).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Add New Option"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add New Option\"]").nth(0).click();
  });

  await test.step(`Hover "Student Employer Tags Option"`, async () => {
    await page.locator("//H3[normalize-space() = \"Student Employer Tags Option\"]").nth(0).hover();
  });

  await test.step(`Hover "Option Name*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Option Name*\"]").nth(0).hover();
  });

  await test.step(`Fill "Test Tag 1 - Manually Added"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Option Name']").nth(0).fill("Test Tag 1 - Manually Added");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
    await dismissAllModals();
    await ensureOnStudentEmployerTagsPage();
  });

  await test.step(`Hover "Test Tag 1 - Manually Added"`, async () => {
    await page.locator("//SPAN[@title='Test Tag 1 - Manually Added'][normalize-space() = \"Test Tag 1 - Manually Added\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@title,\"Test Tag 1\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
  });

  await test.step(`Fill "Test Tag 1"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Option Name']").nth(0).fill("Test Tag 1");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
    await dismissAllModals();
    await ensureOnStudentEmployerTagsPage();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Bulk Upload Options"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Bulk Upload Options\"]").nth(0).click();
  });

  await test.step(`Click "To upload picklist options, please down…"`, async () => {
    await page.locator("//P[normalize-space() = \"To upload picklist options, please download the picklist template, add your new values, and upload the file below.\"]").nth(0).click();
  });

  await test.step(`Hover "Drop file to attach, or browse"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Drop file to attach, or browse\"]").nth(0).hover();
  });

  await test.step(`Hover "Allowed file types: csv"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Allowed file types: csv\"]").nth(0).hover();
  });

  await test.step(`Set filename "e2e_StudentEmployerTags_template.csv"`, async () => {
    fileName = "e2e_StudentEmployerTags_template.csv";
  });

  await test.step(`Upload "${fileName}"`, async () => {
    await page.setInputFiles('input[type="file"]', `/Users/miguelmaya/Downloads/12twentyFiles/${fileName}`);
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "e2e_StudentEmployerTags_template.csv"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e_StudentEmployerTags_template.csv\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Upload"`, async () => {
    await page.locator(BTN_UPLOAD).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000); // Give server time to finish processing all CSV rows
    await dismissAllModals();
    // Navigate back via the Back button to get a fresh server-side data load
    const backBtn = page.locator("//BUTTON[normalize-space() = \"Back\"]").nth(0);
    if (await backBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await backBtn.click();
      await page.waitForLoadState('networkidle');
    }
    // Navigate to Student Employer Tags (from Picklists overview)
    await ensureOnStudentEmployerTagsPage();
    // Reload the detail page to guarantee the freshest data from the server
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    // After reload the page may be on Picklists overview; navigate back to detail if needed
    await ensureOnStudentEmployerTagsPage();
  });

  await test.step(`Hover "Test Tag 1"`, async () => {
    await page.locator("//SPAN[@title='Test Tag 1'][normalize-space() = \"Test Tag 1\"]").nth(0).hover();
  });

  await test.step(`Hover "Test Tag 2"`, async () => {
    await page.locator("//SPAN[@title='Test Tag 2'][normalize-space() = \"Test Tag 2\"]").nth(0).hover();
  });

  await test.step(`Hover "Test Tag 3"`, async () => {
    await page.locator("//SPAN[@title='Test Tag 3'][normalize-space() = \"Test Tag 3\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@title,\"Test Tag 3\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Merge"`, async () => {
    await page.locator("//span[contains(@title,\"Test Tag 3\")]/ancestor::div[@as-sortable-item]//A[@role='button'][normalize-space() = \"Merge\"]").nth(0).click();
  });

  await test.step(`Hover "Warning: Merging one option into anothe…"`, async () => {
    await page.locator("//DIV[@role='alert'][normalize-space() = \"Warning: Merging one option into another will update historical data as well. This action cannot be undone.\"]").nth(0).hover();
  });

  await test.step(`Hover "Option Name:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Option Name:\"]").nth(0).hover();
  });

  await test.step(`Hover "Test Tag 3"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Test Tag 3\"]").nth(0).hover();
  });

  await test.step(`Hover "Merge Into:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Merge Into:\"]").nth(0).hover();
  });

  await test.step(`Click "-- Please Select an Option --"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title=''][normalize-space() = \"-- Please Select an Option --\"]").nth(0).click();
  });

  await test.step(`Fill "Test Tag 2"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Search options...']").nth(0).fill("Test Tag 2");
  });

  await test.step(`Click "Test Tag 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Test Tag 2\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Merge"`, async () => {
    await page.locator(BTN_MERGE).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    await dismissAllModals();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(4).click();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"e2e Test Student\"]").nth(0).hover();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(OPTIONS_ROW_STUDENT).nth(0).click();
  });

  await test.step(`Click "Login as user..."`, async () => {
    await page.locator(LOGIN_AS_USER).nth(0).click();
  });

  await test.step(`Hover "Login as e2e Test Student"`, async () => {
    await page.locator(MODAL_LOGIN_AS_STUDENT).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    // "Login as user..." in 12Twenty opens the student session in a NEW TAB.
    // We capture that tab, navigate the original page to the same URL (cookies are shared
    // within the same BrowserContext), then close the extra tab so all subsequent steps
    // can continue using the existing `page` variable.
    const studentPagePromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await page.locator(BTN_OK).nth(0).click();
    const studentPage = await studentPagePromise;
    if (studentPage) {
      await studentPage.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      const studentUrl = studentPage.url();
      await studentPage.close();
      // Navigate the original page into the student session (shared context cookies)
      await page.goto(studentUrl, { timeout: 90000 });
    }
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  });

  await test.step(`Dismiss student welcome modal if present`, async () => {
    // After "Login as user...", a "Hi e2e!" timezone/profile modal may appear.
    // "Bypass 'On Next Login' (Admin Only)" skips it during impersonation.
    const bypass = page.locator("//A[contains(normalize-space(), 'Bypass')]");
    if (await bypass.isVisible({ timeout: 5000 }).catch(() => false)) {
      await bypass.click();
      await page.waitForLoadState('networkidle');
    } else {
      const saveAndContinue = page.locator("//BUTTON[contains(normalize-space(), 'Save & Continue')]");
      if (await saveAndContinue.isVisible({ timeout: 2000 }).catch(() => false)) {
        // Select "No" for the timezone update to avoid changing student settings
        const noRadio = page.locator("//INPUT[@type='radio'][@value='false']");
        if (await noRadio.isVisible({ timeout: 1000 }).catch(() => false)) {
          await noRadio.click();
        }
        await saveAndContinue.click();
        await page.waitForLoadState('networkidle');
      }
    }
    await dismissAllModals();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    // Force a full page reload so DataTables Select extension re-initializes with latest settings
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    // The timezone modal sometimes appears after reload — dismiss it
    const bypass2 = page.locator("//A[contains(normalize-space(), 'Bypass')]");
    if (await bypass2.isVisible({ timeout: 3000 }).catch(() => false)) {
      await bypass2.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
    }
  });

  await test.step(`Set selector`, async () => {
    selector = "//BUTTON[@type=\\'button\\'][normalize-space() = \"Reset Filters\"]";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    // "Reset Filters" only appears when non-default filters are active.
    // If it's not visible (default state), skip — the employer list is already showing all results.
    const resetBtn = page.locator(BTN_RESET_FILTERS);
    const isVisible = await resetBtn.isVisible({ timeout: 5000 }).catch(() => false);
    if (isVisible) {
      await resetBtn.nth(0).click();
      await page.waitForLoadState('networkidle');
    }
  });

  await test.step(`Click element`, async () => {
    // Student employer list has per-row Options (⋮) buttons instead of bulk checkboxes.
    // Click the Options button and wait for the dropdown menu to be visible before proceeding.
    await page.locator("//tr//td//button[@aria-label='Options']").nth(0).click();
    await page.locator("//A[@role='menuitem'][contains(normalize-space(), 'Add Tag')]").nth(0).waitFor({ state: 'visible', timeout: 10000 });
  });

  await test.step(`Click "Add Tag"`, async () => {
    await page.locator("//A[@role='menuitem'][contains(normalize-space(), \"Add Tag\")]").nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Test Tag 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//tr//td//a").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tr//td//a").nth(0).click();
  });

  await test.step(`Hover "TEST TAG 1"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"TEST TAG 1\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "tag"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("tag");
  });

  await test.step(`Click "Student Employer Tags"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Student Employer Tags\"]").nth(0).click();
  });

  await test.step(`Hover "Student Employer Tags"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Student Employer Tags\"]").nth(1).hover();
  });

  await test.step(`Click "Test Tag 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
  });

  await test.step(`Click "Student Employer Tags"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Student Employer Tags\"]").nth(0).click();
  });

  await test.step(`Verify "Results: 1"`, async () => {
    await expect(page.locator("//div[@class=\"results-header-right\"]//DIV[contains(normalize-space(),\"Results:\")]").nth(0)).toHaveText("Results: 1");
  });

  await test.step(`Verify element visible`, async () => {
    await expect(page.locator("//tr//td//a").nth(0)).toBeVisible();
  });

  await test.step(`Click element`, async () => {
    // Use per-row Options button to remove tag. Wait for dropdown to be visible before proceeding.
    await page.locator("//tr//td//button[@aria-label='Options']").nth(0).click();
    await page.locator("//A[@role='menuitem'][contains(normalize-space(), 'Remove Tag')]").nth(0).waitFor({ state: 'visible', timeout: 10000 });
  });

  await test.step(`Click "Remove Tag"`, async () => {
    await page.locator("//A[@role='menuitem'][contains(normalize-space(), \"Remove Tag\")]").nth(0).click();
  });

  await test.step(`Hover "Remove Company Tag (1)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Remove Company Tag (1)\"]").nth(0).hover();
  });

  await test.step(`Hover "Company Tags"`, async () => {
    await page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Company Tags\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Test Tag 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover "Tag removed from 1 employer(s)."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Tag removed from 1 employer(s).\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Reset Filters"`, async () => {
    // Conditional — Reset Filters only appears when non-default filters are active
    const resetBtn = page.locator(BTN_RESET_FILTERS);
    if (await resetBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await resetBtn.nth(0).click();
      await page.waitForLoadState('networkidle');
    }
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tr//td//a").nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  await test.step(`Add Test Tag 1 and Test Tag 2 to first 5 employers`, async () => {
    // Add both tags to the first 5 employers one by one via the per-row Options button
    for (let i = 0; i < 5; i++) {
      await page.locator("//tr//td//button[@aria-label='Options']").nth(i).click();
      // Wait for the dropdown to open before clicking Add Tag
      await page.locator("//A[@role='menuitem'][contains(normalize-space(), 'Add Tag')]").nth(0).waitFor({ state: 'visible', timeout: 10000 });
      await page.locator("//A[@role='menuitem'][contains(normalize-space(), 'Add Tag')]").nth(0).click();
      await page.waitForTimeout(500);
      // Open the value dropdown
      await page.locator(MULTI_SELECT_VALUE).nth(0).click();
      // Select Test Tag 1
      await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
      // Select Test Tag 2
      await page.locator("//LABEL[normalize-space() = \"Test Tag 2\"]").nth(0).click();
      // Save
      await page.locator(BTN_SAVE_TYPE).nth(0).click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    }
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "tag"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("tag");
  });

  await test.step(`Click "Student Employer Tags"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Student Employer Tags\"]").nth(0).click();
  });

  await test.step(`Hover "Student Employer Tags"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Student Employer Tags\"]").nth(1).hover();
  });

  await test.step(`Click "Test Tag 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
  });

  await test.step(`Click "Test Tag 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Test Tag 2\"]").nth(0).click();
  });

  await test.step(`Click "Student Employer Tags"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Student Employer Tags\"]").nth(0).click();
  });

  await test.step(`Verify "Results: 5"`, async () => {
    await expect(page.locator("//div[@class=\"results-header-right\"]//DIV[contains(normalize-space(),\"Results:\")]").nth(0)).toHaveText("Results: 5");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//tr//td//a").nth(0).click();
  });

  await test.step(`Hover "TEST TAG 1"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"TEST TAG 1\"]").nth(0).hover();
  });

  await test.step(`Hover "TEST TAG 2"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"TEST TAG 2\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  await test.step(`Re-apply filter before removal loop`, async () => {
    // Navigating to an employer detail and back resets the DataTables filter state.
    // Reset any stale filter first, then re-apply Test Tag 1 + Test Tag 2 so the
    // remove loop's nth(0) correctly targets shrinking filtered results.
    const resetBtn = page.locator(BTN_RESET_FILTERS);
    if (await resetBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await resetBtn.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    }
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("tag");
    await page.locator("//BUTTON[normalize-space() = \"Student Employer Tags\"]").nth(0).click();
    await page.locator("//SPAN[normalize-space() = \"Student Employer Tags\"]").nth(1).hover();
    await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
    await page.locator("//LABEL[normalize-space() = \"Test Tag 2\"]").nth(0).click();
    await page.locator("//SPAN[normalize-space() = \"Student Employer Tags\"]").nth(0).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  await test.step(`Remove Test Tag 1 and Test Tag 2 from first 5 employers`, async () => {
    // Student view has no bulk-select checkboxes — remove tags one by one via per-row Options button.
    // The filtered list (Test Tag 1 + Test Tag 2) shows 5 results; always click nth(0) as the list
    // shrinks after each removal.
    for (let i = 0; i < 5; i++) {
      await page.locator("//tr//td//button[@aria-label='Options']").nth(0).click();
      // Wait for the dropdown to open before clicking Remove Tag
      await page.locator("//A[@role='menuitem'][contains(normalize-space(), 'Remove Tag')]").nth(0).waitFor({ state: 'visible', timeout: 10000 });
      await page.locator("//A[@role='menuitem'][contains(normalize-space(), 'Remove Tag')]").nth(0).click();
      await page.waitForTimeout(500);
      await page.locator(MULTI_SELECT_VALUE).nth(0).click();
      await page.locator("//LABEL[normalize-space() = \"Test Tag 1\"]").nth(0).click();
      await page.locator("//LABEL[normalize-space() = \"Test Tag 2\"]").nth(0).click();
      await page.locator(BTN_SAVE_TYPE).nth(0).click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    }
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  await test.step(`Log out student and restore admin session`, async () => {
    // Original recording had a separate student tab that was "closed" to return to the admin tab.
    // Since we use a single page (admin impersonation on same tab), we log out the student and
    // then navigate back to the admin URL and reload the admin session via saved cookies.
    const userMenu = page.locator(USER_ACCOUNT_NAME);
    if (await userMenu.isVisible({ timeout: 5000 }).catch(() => false)) {
      await userMenu.nth(0).click();
      await page.waitForTimeout(500);
    }
    const logoutLink = page.locator(LOGOUT_LINK);
    if (await logoutLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await logoutLink.nth(0).click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
    }
    // Re-establish admin session
    await page.goto(URLS.campusWideAdmin, { timeout: 90000 });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await loginAsAdmin(page);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Home" to expand nav`, async () => {
    // After admin re-login the sidebar may be collapsed — hover Home to reveal the nav items.
    await page.locator(NAV_HOME).nth(0).hover();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_COLLAPSE).nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Employer Relations"`, async () => {
    await page.locator("//A[normalize-space() = \"Employer Relations\"]").nth(0).click();
  });

  await test.step(`Click "Picklists"`, async () => {
    await page.locator(NAV_PICKLISTS).nth(0).click();
  });

  await test.step(`Click "Student Employer Tags"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Student Employer Tags\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@title,\"Test Tag\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete?"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete?\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete Test Ta…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Test Tag 1?\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//span[contains(@title,\"Test Tag\")]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete?"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete?\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to delete Test Ta…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to delete Test Tag 2?\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

});
