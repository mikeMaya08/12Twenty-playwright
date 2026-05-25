// TC: TC65438
// Resource Library - Add and view all resource types, add and browse folders - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_ACTION,
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_SEARCH,
  CONFIRM_PERM_DELETE,
  INPUT_CHECKBOX_MULTI,
  LABEL_BULK_UPDATE_1,
  LABEL_GROUP_1,
  LABEL_SELECT_ALL,
  MULTI_SELECT_VALUE,
  NAV_HOME,
  RBTN_COPY_STUDENT_URL,
  RBTN_DELETE,
  RBTN_EDIT,
  SPAN_RESUME_FILE_CT,
} from '@config/selectors';

test("Resource Library - Add and view all resource types, add and browse folders - Admin - TC65438", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.campusWideAdmin, {timeout: 90000});
    await page.waitForTimeout(4000);
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

  await test.step(`Click "Resource Library"`, async () => {
    await page.locator("//A[normalize-space() = \"Resource Library\"]").nth(0).click();
  });

  await test.step(`Hover "Resource Library"`, async () => {
    await page.locator("//H1[contains(text(),\"Resource Library\")]").nth(0).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Hover "Add File"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add File\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Link"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Link\"]").nth(0).hover();
  });

  await test.step(`Hover "Add Folder"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Folder\"]").nth(0).hover();
  });

  await test.step(`Click "Add File"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add File\"]").nth(0).click();
  });

  await test.step(`Hover "Add File"`, async () => {
    await page.locator("//H3[contains(text(),\"Add File\")]").nth(0).hover();
  });

  await test.step(`Hover "Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Name *\")]").nth(0).hover();
  });

  await test.step(`Hover "File *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"File *\")]").nth(0).hover();
  });

  await test.step(`Fill "MuukFile1"`, async () => {
    await page.locator("//div[@class=\"form-controls\"]//input").nth(0).fill("MuukFile1");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator(SPAN_RESUME_FILE_CT).nth(0).hover();
  });

  await test.step(`Hover "(54 KB)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"(54 KB)\")]").nth(0).hover();
  });

  await test.step(`Hover "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "MuukFile1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile1\")]").nth(0).hover();
  });

  await test.step(`Hover "Group 1, Group 2, Current Students, Bul…"`, async () => {
    await page.locator("//TD[contains(text(),\"Group 1, Group 2, Current Students, Bulk Update 1, Bulk Update 2, Bulk Update 3\")]").nth(0).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Click "Add Link"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Link\"]").nth(0).click();
  });

  await test.step(`Hover "Add Link"`, async () => {
    await page.locator("//H3[contains(text(),\"Add Link\")]").nth(0).hover();
  });

  await test.step(`Hover "Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Name *\")]").nth(0).hover();
  });

  await test.step(`Fill "MuukLink1"`, async () => {
    await page.locator("//div[@class=\"form-controls\"]//input").nth(0).fill("MuukLink1");
  });

  await test.step(`Hover "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).hover();
  });

  await test.step(`Fill "https://e2e-tests-campuswide.qa-12twent…"`, async () => {
    await page.locator("//LABEL[contains(text(),\"URL *\")]/following::input").nth(0).fill("https://e2e-tests-campuswide.qa-12twenty.com");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Hover "Select all"`, async () => {
    await page.locator(LABEL_SELECT_ALL).nth(0).hover();
  });

  await test.step(`Hover "Bulk Update 1"`, async () => {
    await page.locator(LABEL_BULK_UPDATE_1).nth(0).hover();
  });

  await test.step(`Hover "Bulk Update 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Bulk Update 2\"]").nth(0).hover();
  });

  await test.step(`Hover "Bulk Update 3"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Bulk Update 3\"]").nth(0).hover();
  });

  await test.step(`Hover "Current Students"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Current Students\"]").nth(0).hover();
  });

  await test.step(`Hover "Group 1"`, async () => {
    await page.locator(LABEL_GROUP_1).nth(0).hover();
  });

  await test.step(`Hover "Group 2"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Group 2\"]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "MuukLink1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukLink1\")]").nth(0).hover();
  });

  await test.step(`Hover "All"`, async () => {
    await page.locator("//td[normalize-space()=\"All\"]").nth(0).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Click "Add Folder"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Folder\"]").nth(0).click();
  });

  await test.step(`Hover "Add Folder"`, async () => {
    await page.locator("//H3[contains(text(),\"Add Folder\")]").nth(0).hover();
  });

  await test.step(`Hover "Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Name *\")]").nth(0).hover();
  });

  await test.step(`Fill "MuukFolder1"`, async () => {
    await page.locator("//div[@class=\"form-controls\"]//input").nth(0).fill("MuukFolder1");
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(0).click();
  });

  await test.step(`Click "Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Name *\")]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "MuukFolder1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFolder1\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(3).hover();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator(BTN_ACTION).nth(0).click();
  });

  await test.step(`Click "Add File"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add File\"]").nth(0).click();
  });

  await test.step(`Hover "Add File"`, async () => {
    await page.locator("//H3[contains(text(),\"Add File\")]").nth(0).hover();
  });

  await test.step(`Hover "Name *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"Name *\")]").nth(0).hover();
  });

  await test.step(`Hover "File *"`, async () => {
    await page.locator("//LABEL[contains(text(),\"File *\")]").nth(0).hover();
  });

  await test.step(`Fill "MuukFile2"`, async () => {
    await page.locator("//div[@class=\"form-controls\"]//input").nth(0).fill("MuukFile2");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).hover();
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator(SPAN_RESUME_FILE_CT).nth(0).hover();
  });

  await test.step(`Hover "(54 KB)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"(54 KB)\")]").nth(0).hover();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(3).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(5).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Student Group"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Group\"]").nth(0).click();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Submit\")]").nth(0).click();
  });

  await test.step(`Hover "MuukFile2"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile2\")]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//TD").nth(18).hover();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(0).click();
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
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
  });

  await test.step(`Click "Resource Library"`, async () => {
    await page.locator("//A[normalize-space() = \"Resource Library\"]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "MuukFolder1"`, async () => {
    await page.reload();
    await page.locator("//A[contains(text(),\"MuukFolder1\")]").nth(0).hover();
  });

  await test.step(`Hover "MuukFile1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile1\")]").nth(0).hover();
  });

  await test.step(`Hover "MuukFile2"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile2\")]").nth(0).hover();
  });

  await test.step(`Hover "MuukLink1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukLink1\")]").nth(0).hover();
  });

  await test.step(`Fill "MuukFolder1"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Folder or Resource Name']").nth(0).fill("MuukFolder1");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "Home"`, async () => {
    await page.locator("//A[contains(text(),\"Home\")]").nth(0).hover();
  });

  await test.step(`Hover "> Search Results"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"> Search Results\"]").nth(0).hover();
  });

  await test.step(`Hover "MuukFolder1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFolder1\")]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Resource Library"`, async () => {
    await page.locator("//A[normalize-space() = \"Resource Library\"]").nth(0).click();
  });

  await test.step(`Click "MuukFolder1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFolder1\")]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Copy Student URL"`, async () => {
    await page.locator(RBTN_COPY_STUDENT_URL).nth(0).hover();
  });

  await test.step(`Hover "Copy Career Center User URL"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Copy Career Center User URL\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete folder"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete folder\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete folder"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete folder\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "MuukFile1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile1\")]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete file"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete file\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete file"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete file\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"MuukFile1\")]";
  });

  await test.step(`Hover "MuukFile2"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile2\")]").nth(0).hover();
  });

  await test.step(`Click "MuukFile2"`, async () => {
    await page.locator("//A[contains(text(),\"MuukFile2\")]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete file"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete file\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete file"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete file\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"MuukFile2\")]";
  });

  await test.step(`Hover "MuukLink1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukLink1\")]").nth(0).hover();
  });

  await test.step(`Click "MuukLink1"`, async () => {
    await page.locator("//A[contains(text(),\"MuukLink1\")]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete link"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete link\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete link"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete link\")]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"MuukLink1\")]";
  });

  await test.step(`Hover "No results."`, async () => {
    await page.locator("//DIV[contains(text(),\"No results.\")]").nth(0).hover();
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Resource Library"`, async () => {
    await page.locator("//A[normalize-space() = \"Resource Library\"]").nth(0).click();
  });

  await test.step(`Hover "No results."`, async () => {
    await page.reload();
    await page.locator("//DIV[contains(text(),\"No results.\")]").nth(0).hover();
  });

});
