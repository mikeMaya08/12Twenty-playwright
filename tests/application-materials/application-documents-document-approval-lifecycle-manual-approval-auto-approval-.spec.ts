// TC: TC_A83213
// Application Documents - Document Approval Lifecycle - Manual Approval, Auto Approval, and Deletion

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  H1_STUDENTS_ALUMNI,
  INPUT_DOC_NAME,
  INPUT_SEARCH_USERS,
  LABEL_GROUP_1,
  MENU_DELETE,
  MODAL_ADD_RESUME,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  NAV_SITE_MGMT_NAVBAR_BTN,
  NAV_SITE_SETTINGS,
  NAV_STUDENTS_ALUMNI,
  RBTN_ADD_NEW,
  RBTN_SAVE,
  RBTN_SUBMIT,
} from '@config/selectors';

test("Application Documents - Document Approval Lifecycle - Manual Approval, Auto Approval, and Deletion - TC_A83213", async ({ page, context }) => {
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

  await test.step(`Hover "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@aria-label=\"Expand Site Management submenu\"]").nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Document Review"`, async () => {
    await page.locator("//A[normalize-space() = \"Document Review\"]").nth(1).click();
  });

  await test.step(`Verify "Document Review"`, async () => {
    await expect(page.locator("//H2[normalize-space() = \"Document Review\"]").nth(0)).toHaveText("Document Review");
  });

  await test.step(`Cleanup: delete existing approval requirements`, async () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const optBtn = page.locator("//BUTTON[@type='button']").nth(2);
      if (!await optBtn.isVisible({ timeout: 2000 }).catch(() => false)) break;
      await optBtn.click();
      await page.locator(MENU_DELETE).nth(0).click();
      await page.locator("//BUTTON[normalize-space() = \"Delete Approval Requirement\"]").nth(0).click();
      await page.waitForLoadState('networkidle');
    }
  });

  await test.step(`Click "New Approval Requirement"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"New Approval Requirement\"]").nth(0).click();
  });

  await test.step(`Verify "New Approval Requirement"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"New Approval Requirement\"]").nth(0)).toHaveText("New Approval Requirement");
  });

  await test.step(`Verify "Document Types*"`, async () => {
    await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Document Types*\"]").nth(0)).toContainText("Document Types*");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
    await page.waitForTimeout(1500);
  });

  await test.step(`Click "Resume"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Resume\"]").nth(0).click();
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await expect(page.locator("//LABEL[@id='undefined-label'][normalize-space() = \"Student Groups*\"]").nth(0)).toContainText("Student Groups*");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click "Group 1"`, async () => {
    await page.locator(LABEL_GROUP_1).nth(0).click();
  });

  await test.step(`Click "Group 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Group 2\"]").nth(0).click();
  });

  await test.step(`Press Tab`, async () => {
    await page.keyboard.press("Tab");
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Verify "Approval Requirement Edit Delete View A…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Approval Requirement Edit Delete View Audit Log Document Types: Resume Student Groups: Group 1, Group 2\"]").nth(0)).toHaveText("Approval Requirement Edit Delete View Audit Log Document Types: Resume Student Groups: Group 1, Group 2");
  });

  await test.step(`Verify "Approval Requirement"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Approval Requirement\"]").nth(0)).toHaveText("Approval Requirement");
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Verify "Students & Alumni"`, async () => {
    await expect(page.locator(H1_STUDENTS_ALUMNI).nth(0)).toHaveText("Students & Alumni");
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Stacey");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//tt-student-summary-card/div[@class=\"tt-card floating-card ng-scope\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@class=\"card-title ng-binding\"]").nth(0).click();
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Verify "Resumes"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Resumes\"]").nth(0)).toHaveText("Resumes");
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Verify "Add New Resume"`, async () => {
    await expect(page.locator(MODAL_ADD_RESUME).nth(0)).toHaveText("Add New Resume");
  });

  await test.step(`Verify "Resume Name *"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Resume Name *\"]").nth(0)).toHaveText("Resume Name *");
  });

  await test.step(`Fill "Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Resume");
  });

  await test.step(`Verify "Upload New Resume *"`, async () => {
    await expect(page.locator("//LABEL[normalize-space() = \"Upload New Resume *\"]").nth(0)).toContainText("Upload New Resume *");
  });

  await test.step(`Upload resume file`, async () => {
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.locator("//A[@role='button'][normalize-space() = \"browse\"]").nth(0).click()
    ]);
    await fileChooser.setFiles('/Users/miguelmaya/Downloads/12twentyFiles/Muuktest-transcript.pdf');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Submit for approval"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Submit for approval\"]").nth(0).click();
  });

  await test.step(`Verify "Pending"`, async () => {
    await expect(page.locator("//span[@class=\"badge pending\"]").nth(0)).toHaveText("Pending");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"card-actions\"]/tt-action-dropdown/div/button[@class=\"btn dropdown-toggle ng-binding btn-icon\"]").nth(0).click();
  });

  await test.step(`Click "Approve Resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Approve Resume\"]").nth(0).click();
  });

  await test.step(`Verify "Approved"`, async () => {
    await expect(page.locator("//SPAN[@class=\"badge approved\"]").nth(0)).toHaveText("Approved");
  });

  await test.step(`Click "Auto-Approve"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Auto-Approve\"]").nth(0).click();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Fill "Resume 2"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("Resume 2");
  });

  await test.step(`Upload resume file`, async () => {
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.locator("//A[@role='button'][normalize-space() = \"browse\"]").nth(0).click()
    ]);
    await fileChooser.setFiles('/Users/miguelmaya/Downloads/12twentyFiles/MuukTest-CoverLetter.pdf');
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator(RBTN_SUBMIT).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DIV[@class=\"card-info\"]").nth(1).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"card-actions\"]/tt-action-dropdown/div/button[@class=\"btn dropdown-toggle ng-binding btn-icon\"]").nth(1).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("(//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"])[last()]").nth(0).click();
  });

  await test.step(`Verify "Delete Resume"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0)).toHaveText("Delete Resume");
  });

  await test.step(`Verify "Are you sure you want to permanently de…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1)).toHaveText("Are you sure you want to permanently delete this resume?");
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"card-actions\"]/tt-action-dropdown/div/button[@class=\"btn dropdown-toggle ng-binding btn-icon\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("(//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"])[last()]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Verify "You currently have no resumes in the sy…"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"You currently have no resumes in the system.\"]").nth(0)).toHaveText("You currently have no resumes in the system.");
  });

  await test.step(`Click "Auto-Approve"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Auto-Approve\"]").nth(0).click();
  });

  await test.step(`Hover "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_NAVBAR_BTN).nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@aria-label=\"Expand Site Management submenu\"]").nth(0).click();
  });

  await test.step(`Click "Site Settings"`, async () => {
    await page.locator(NAV_SITE_SETTINGS).nth(0).click();
  });

  await test.step(`Click "Document Review"`, async () => {
    await page.locator("//A[normalize-space() = \"Document Review\"]").nth(1).click();
  });

  await test.step(`Verify "Document Review"`, async () => {
    await expect(page.locator("//H2[normalize-space() = \"Document Review\"]").nth(0)).toHaveText("Document Review");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

  await test.step(`Verify "Delete Approval Requirement"`, async () => {
    await expect(page.locator("//H3[normalize-space() = \"Delete Approval Requirement\"]").nth(0)).toHaveText("Delete Approval Requirement");
  });

  await test.step(`Verify "Are you sure you want to permanently de…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this approval requirement? This action cannot be undone.\"]").nth(1)).toHaveText("Are you sure you want to permanently delete this approval requirement? This action cannot be undone.");
  });

  await test.step(`Click "Delete Approval Requirement"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Approval Requirement\"]").nth(0).click();
  });

  await test.step(`Verify "Successfully deleted approval requireme…"`, async () => {
    await expect(page.locator("//DIV[@role='alert'][normalize-space() = \"Successfully deleted approval requirement.\"]").nth(0)).toHaveText("Successfully deleted approval requirement.");
  });

  await test.step(`Verify "There are no approval requirements conf…"`, async () => {
    await expect(page.locator("//DIV[normalize-space() = \"There are no approval requirements configured yet.\"]").nth(0)).toHaveText("There are no approval requirements configured yet.");
  });

});
