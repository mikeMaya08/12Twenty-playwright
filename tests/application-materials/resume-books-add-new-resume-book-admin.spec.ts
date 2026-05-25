// TC: TC61325
// Resume Books - Add New Resume Book - Admin

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin, loginAsStudent } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_CONTAINS,
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  CONFIRM_PERM_DELETE,
  DATEPICKER_NEXT_DAY,
  H2_BASICS_CT,
  H2_CAREER_CENTER_CT,
  H2_ELIGIBILITY_CT,
  INPUT_CHECKBOX_MULTI,
  INPUT_DATE,
  INPUT_TIME,
  LABEL_YES,
  MODAL_PLEASE_CONFIRM_CT,
  MULTI_SELECT_VALUE,
  NAV_EDIT,
  NAV_HOME,
  RBTN_COPY_EMPLOYER_URL,
  RBTN_COPY_STUDENT_URL,
  RBTN_DELETE,
  RBTN_VIEW_AUDIT,
  SPAN_RESUME_FILE_CT,
} from '@config/selectors';

test("Resume Books - Add New Resume Book - Admin - TC61325", async ({ page, context }) => {
  let fileName = `0`;
  let selector = `0`;
  let textContent = `0`;

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

  await test.step(`Click "Resume Books"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume Books\"]").nth(0).click();
  });

  await test.step(`Hover "Resume Books"`, async () => {
    await page.locator("//H1[contains(text(),\"Resume Books\")]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Ivan Everdeen\")]";
  });

  await test.step(`Click "Ivan Everdeen"`, async () => {
    await page.locator("//A[normalize-space() = \"Ivan Everdeen\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Resume Book"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Resume Book\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Resume Book"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Resume Book\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Resume Books"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume Books\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "New Resume Book"`, async () => {
    await page.locator("//A[normalize-space() = \"New Resume Book\"]").nth(0).click();
  });

  await test.step(`Hover "Create New Resume Book"`, async () => {
    await page.locator("//H1[contains(text(),\"Create New Resume Book\")]").nth(0).hover();
  });

  await test.step(`Hover "Basics"`, async () => {
    await page.locator(H2_BASICS_CT).nth(0).hover();
  });

  await test.step(`Hover "Academic Year*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Academic Year*\"]").nth(0).hover();
  });

  await test.step(`Fill "Ivan Everdeen"`, async () => {
    await page.locator("//INPUT[@id='Name'][@name='Name'][@placeholder='Name'][@type='text']").nth(0).fill("Ivan Everdeen");
  });

  await test.step(`Select "number:2019"`, async () => {
    await page.locator("//SELECT[@id='AcademicYearId'][@name='AcademicYearId']").nth(0).selectOption("number:2019");
  });

  await test.step(`Hover "Student Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Description*\"]").nth(0).hover();
  });

  await test.step(`Click "Student Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Student Description*\"]//following::div[@class=\"cke_inner cke_reset\"]").nth(0).click();
  });

  await test.step(`Set value "Testing student description"`, async () => {
    textContent = "Testing student description";
  });

  await test.step(`Click "Employer Description*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Description*\"]//following::div[@class=\"cke_inner cke_reset\"]").nth(0).click();
  });

  await test.step(`Set value "Testing employer description"`, async () => {
    textContent = "Testing employer description";
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//TD").nth(30).click();
  });

  await test.step(`Fill "12:00am"`, async () => {
    await page.locator(INPUT_TIME).nth(0).fill("12:00am");
  });

  await test.step(`Click "MM/DD/YYYY"`, async () => {
    await page.locator(INPUT_DATE).nth(1).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(DATEPICKER_NEXT_DAY).nth(0).click();
  });

  await test.step(`Fill "12:00pm"`, async () => {
    await page.locator(INPUT_TIME).nth(1).fill("12:00pm");
  });

  await test.step(`Click "Eligibility"`, async () => {
    await page.locator(H2_ELIGIBILITY_CT).nth(0).click();
  });

  await test.step(`Click "-- Select a Value --"`, async () => {
    await page.locator(MULTI_SELECT_VALUE).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Career Center Administrator"`, async () => {
    await page.locator(H2_CAREER_CENTER_CT).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Require approval when students apply to this resume book?*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='DoApplicationsRequireApproval'][@type='radio']").nth(0).check();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Allow students to initially submit resumes in Microsoft Word file format?*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='CanStudentsUploadAnyFileFormat'][@title=''][@type='radio']").nth(0).check();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Are students able to download and view approved resume applicants once it is published and archived?*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(2).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='CanStudentsView'][@type='radio']").nth(0).check();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Allow students to apply even when the resume book is published?*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(3).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='CanStudentsApplyWhenPublished'][@type='radio']").nth(0).check();
  });

  await test.step(`Click "Employer Se"`, async () => {
    await page.locator("//DIV[contains(text(),\"Employer Se\")]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Is this resume book visible to Employers?*\"]").nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(4).click();
  });

  await test.step(`Check checkbox`, async () => {
    await page.locator("//INPUT[@name='CanEmployersView'][@type='radio']").nth(0).check();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(1).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Hover "Ivan Everdeen"`, async () => {
    await page.locator("//H1[contains(text(),\"Ivan Everdeen\")]").nth(0).hover();
  });

  await test.step(`Hover "Unpublished"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Unpublished\")]").nth(0).hover();
  });

  await test.step(`Hover "Resume Book Details"`, async () => {
    await page.locator("//A[contains(text(),\"Resume Book Details\")]").nth(0).hover();
  });

  await test.step(`Hover "Resumes"`, async () => {
    await page.locator("//A[contains(text(),\"Resumes\")]").nth(0).hover();
  });

  await test.step(`Hover "Student Application Start Date"`, async () => {
    await page.locator("//DT[contains(text(),\"Student Application Start Date\")]").nth(0).hover();
  });

  await test.step(`Hover "2018-2019"`, async () => {
    await page.locator("//DD[contains(text(),\"2018-2019\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Hover "Publish"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Publish\"]").nth(0).hover();
  });

  await test.step(`Hover "Archive"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Archive\"]").nth(0).hover();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(NAV_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Deactivate"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Deactivate\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LI").nth(81).hover();
  });

  await test.step(`Hover "Copy Student URL"`, async () => {
    await page.locator(RBTN_COPY_STUDENT_URL).nth(0).hover();
  });

  await test.step(`Hover "Copy Employer URL"`, async () => {
    await page.locator(RBTN_COPY_EMPLOYER_URL).nth(0).hover();
  });

  await test.step(`Hover "View Audit Log"`, async () => {
    await page.locator(RBTN_VIEW_AUDIT).nth(0).hover();
  });

  await test.step(`Click "Publish"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Publish\"]").nth(0).click();
  });

  await test.step(`Hover "Please Confirm"`, async () => {
    await page.locator(MODAL_PLEASE_CONFIRM_CT).nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to publish this re"`, async () => {
    await page.locator("//DIV[contains(text(),\"Are you sure you want to publish this re\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Hover "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
  });

  await test.step(`Hover "Published"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Published\")]").nth(0).hover();
  });

  await test.step(`Hover "Ivan Everdeen"`, async () => {
    await page.locator("//H1[contains(text(),\"Ivan Everdeen\")]").nth(0).hover();
    await page.waitForTimeout(3000);
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

  await test.step(`Click "Resume Books"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume Books\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Ivan Everdeen"`, async () => {
    await page.locator("//A[contains(text(),\"Ivan Everdeen\")]").nth(0).click();
  });

  await test.step(`Click "Apply"`, async () => {
    await page.locator("//A[contains(text(),\"Apply\")]").nth(0).click();
  });

  await test.step(`Hover "Apply To This Resume Book"`, async () => {
    await page.locator("//H3[contains(text(),\"Apply To This Resume Book\")]").nth(0).hover();
  });

  await test.step(`Fill "e2eTestStudent_Resume"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='resumeName'][@placeholder='Name of file']").nth(0).fill("e2eTestStudent_Resume");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Test_Resume_01.pdf"`, async () => {
    await page.locator(SPAN_RESUME_FILE_CT).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Submit\")]").nth(0).click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Resumes"`, async () => {
    await page.reload();
    await page.locator("//A[contains(text(),\"Resumes\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Resume Books"`, async () => {
    await page.reload();
    await page.locator("//A[normalize-space() = \"Resume Books\"]").nth(0).click();
  });

  await test.step(`Click "Ivan Everdeen"`, async () => {
    await page.locator("//A[normalize-space() = \"Ivan Everdeen\"]").nth(0).click();
  });

  await test.step(`Click "Download Full Book"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Download Full Book\"]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Published"`, async () => {
    await page.reload();
    await expect(page.locator("//SPAN[contains(text(),\"Published\")]").nth(0)).toHaveText("Published");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(RBTN_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Resume Book"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Resume Book\")]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently del"`, async () => {
    await page.locator(CONFIRM_PERM_DELETE).nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Resume Book"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Resume Book\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Resume Books"`, async () => {
    await page.locator("//A[normalize-space() = \"Resume Books\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[contains(text(),\"Ivan Everdeen\")]";
  });

});
