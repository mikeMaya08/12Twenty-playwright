// TC: TC_A79039
// 12TU Candidate Search - Employers can view applicants, download resumes, filter

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_GET_RESULTS,
  BTN_OK,
  BTN_OPTIONS_LOWER,
  BTN_SAVE,
  BTN_SAVE_TYPE,
  BTN_SEARCH,
  B_LOG_OUT,
  INPUT_DOC_NAME,
  INPUT_EMAIL_LOGIN,
  INPUT_PASSWORD_LOGIN,
  INPUT_SEARCH_USERS,
  LINK_CYDNEY_MOORE,
  LINK_E2E_TEST_STUDENT,
  LOGIN_AS_BTN,
  LOGOUT_LINK,
  MODAL_ADD_RESUME,
  MODAL_SUCCESS,
  NAV_EMPLOYERS,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_STUDENTS_ALUMNI,
  RBTN_ADD_NEW,
  RBTN_CANCEL,
  RBTN_EDIT,
  RBTN_SUBMIT,
  SPAN_E2E_TEST_STUDENT,
  TAB_HOME,
  TAB_PROFILE,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TU Candidate Search - Employers can view applicants, download resumes, filter - TC_A79039", async ({ page, context }) => {
  let fileName = `0`;
  let date = `8/24/2025`;
  let selector = `0`;
  let textContent = `0`;

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

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Cydney");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "(//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]//following-sibling::dd)[1]//span[normalize-space()=\"Yes\"]";
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]//following-sibling::dd//span").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"e2e Test Resume\"]";
  });

  await test.step(`Click "e2e Test Resume"`, async () => {
    await page.locator("(//a[normalize-space()=\"e2e Test Resume\"])[2]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
    await page.waitForTimeout(5000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "Resumes"`, async () => {
    await page.locator("//H3[normalize-space() = \"Resumes\"]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Hover "Add New Resume"`, async () => {
    await page.locator(MODAL_ADD_RESUME).nth(0).hover();
  });

  await test.step(`Fill "e2e Test Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("e2e Test Resume");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator(RBTN_SUBMIT).nth(0).click();
  });

  await test.step(`Hover "e2e Test Resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"e2e Test Resume\"]").nth(0).hover();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[normalize-space(translate(., '\\u00A0', ' ')) = \"Account Settings\"]").nth(0).click();
  });

  await test.step(`Hover "Connections"`, async () => {
    await page.locator("//H3[normalize-space() = \"Connections\"]").nth(0).hover();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]//following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Connections"`, async () => {
    await page.locator("//h3[normalize-space()=\"Connections\"]/following-sibling::a[@class=\"edit-link\"]").nth(0).click();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "Your changes have successfully been sav…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Your changes have successfully been saved.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]//following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click "log out"`, async () => {
    await page.locator(B_LOG_OUT).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(1).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e Test ");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "(//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]//following-sibling::dd)[1]//span[normalize-space()=\"Yes\"]";
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(35).hover();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Application Materials\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][normalize-space() = \"QA Resume\"]";
  });

  await test.step(`Hover "QA Resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"QA Resume\"]").nth(1).hover();
  });

  await test.step(`Click "QA Resume"`, async () => {
    await page.locator("(//a[normalize-space()=\"QA Resume\"])[2]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Resumes"`, async () => {
    await page.locator("//H3[normalize-space() = \"Resumes\"]").nth(0).hover();
  });

  await test.step(`Click "Add New"`, async () => {
    await page.locator(RBTN_ADD_NEW).nth(0).click();
  });

  await test.step(`Hover "Add New Resume"`, async () => {
    await page.locator(MODAL_ADD_RESUME).nth(0).hover();
  });

  await test.step(`Fill "QA Resume"`, async () => {
    await page.locator(INPUT_DOC_NAME).nth(0).fill("QA Resume");
  });

  await test.step(`Set filename "Test_Resume_01.pdf"`, async () => {
    fileName = "Test_Resume_01.pdf";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Submit"`, async () => {
    await page.locator(RBTN_SUBMIT).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H3[normalize-space() = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Account Settings"`, async () => {
    await page.locator("//h3[normalize-space() = \"Edit Account Settings\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(35).hover();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[contains(text(),\"Allow Employers to contact me with job opportunities\")]//following-sibling::dd//span").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(1).click();
  });

  await test.step(`Click "Email"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email\"]").nth(0).click();
  });

  await test.step(`Hover "Email"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email\"]").nth(1).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='Email']").nth(0).fill("e2e.employeruser.subscription.admin@walmart.com");
  });

  await test.step(`Click "Email"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "e2e.employeruser.subscription.admin@wal…"`, async () => {
    await page.locator("//td[contains(normalize-space(),\"e2e.employeruser.subscription.admin@walmart.com\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@role=\"button\"][contains(@href,\"/users/employers/\")]").nth(0).click();
  });

  await test.step(`Hover "Other Permissions Edit"`, async () => {
    await page.locator("//H4[normalize-space() = \"Other Permissions Edit\"]").nth(0).hover();
  });

  await test.step(`Set selector`, async () => {
    selector = "(//dt[normalize-space()=\"Candidate Search\"]/following-sibling::dd)[1][normalize-space()=\"Yes\"]";
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Candidate Search\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
  });

  await test.step(`Hover "Edit Access Permissions"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Access Permissions\"]").nth(0).hover();
  });

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Search\"]").nth(0).hover();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Search\"]/following::label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Candidate Search\"]/following-sibling::dd").nth(0)).toHaveText("No");
    await page.waitForTimeout(2000);
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.employeruser.subscription.admin@walmart.com");
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Employer Log In"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer Log In\")]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "Candidates"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidates\"]").nth(0).click();
  });

  await test.step(`Click "Request for Candidate Search Access"`, async () => {
    await page.locator("//H2[normalize-space() = \"Request for Candidate Search Access\"]").nth(0).click();
  });

  await test.step(`Click "Request Access"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Request Access\"]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS).nth(0).hover();
  });

  await test.step(`Hover "Your request has been submitted."`, async () => {
    await page.locator("//DIV[normalize-space() = \"Your request has been submitted.\"]").nth(1).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Notifications 99+"`, async () => {
    await page.locator("//A[@id='navbar-notifications-btn'][@role='button'][normalize-space() = \"Notifications 99+\"]").nth(0).click();
  });

  await test.step(`Click "Employer Partner Requests"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Employer Partner Requests\"]").nth(0).click();
  });

  await test.step(`Hover "Verified by 12twenty"`, async () => {
    await page.locator("//SPAN[@title=''][normalize-space() = \"Verified by 12twenty\"]").nth(0).hover();
  });

  await test.step(`Hover "Verified by 12twenty"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Verified by 12twenty\"]/following::button[@title=\"Reject\"]").nth(0).hover();
  });

  await test.step(`Click "Verified by 12twenty"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Verified by 12twenty\"]/following::button[@title=\"Approve\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//SPAN[normalize-space() = \"\\'Candidate Search\\' successfully approved.\"]").nth(0).hover();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(4000);
  });

  await test.step(`Load auth session`, async () => {
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_EMAIL_LOGIN).nth(0).fill("e2e.employeruser.subscription.admin@walmart.com");
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.locator(INPUT_PASSWORD_LOGIN).nth(0).fill("eQ%DEx%j6Cl9");
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Employer Log In"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Employer Log In\")]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Candidates"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidates\"]").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]").nth(0).hover();
  });

  await test.step(`Hover "Cydney.Moore@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney.Moore@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e.student.fullaccess@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Hover "Keyword Search:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Keyword Search:\"]").nth(0).hover();
  });

  await test.step(`Fill "start date"`, async () => {
    await page.locator("//INPUT[@id='resumeText'][@name='resumeText'][@placeholder='Search Keywords in Resume'][@type='text']").nth(0).fill("start date");
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
  });

  await test.step(`Fill "rumer"`, async () => {
    await page.locator("//INPUT[@id='resumeText'][@name='resumeText'][@placeholder='Search Keywords in Resume'][@type='text']").nth(0).fill("rumer");
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "No results found."`, async () => {
    await page.locator("//DIV[normalize-space() = \"No results found.\"]").nth(0).click();
  });

  await test.step(`Fill "Search Keywords in Resume"`, async () => {
    await page.locator("//INPUT[@id='resumeText'][@name='resumeText'][@placeholder='Search Keywords in Resume'][@type='text']").nth(0).fill("");
  });

  await test.step(`Hover "Graduation Year:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Year:\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//label[@for=\"GraduationYearId\"]/following::button").nth(0).click();
  });

  await test.step(`Click "2030"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2030\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Year:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Year:\"]").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForTimeout(10000);
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Verify "2030"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"e2e Test Student\"]/following::span").nth(0)).toContainText("2030");
  });

  await test.step(`Hover "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e.student.fullaccess@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//label[@for=\"GraduationYearId\"]/following::button").nth(0).click();
  });

  await test.step(`Click "2030"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2030\"]").nth(0).click();
  });

  await test.step(`Click "2028"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2028\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Year:"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Graduation Year:\"]").nth(0).click();
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.locator(BTN_GET_RESULTS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]").nth(0).hover();
  });

  await test.step(`Hover "Cydney.Moore@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney.Moore@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Verify "2028"`, async () => {
    await expect(page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]/following::span").nth(0)).toContainText("2028");
  });

  await test.step(`Click "Clear Filters"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Clear Filters\"]").nth(0).click();
  });

  await test.step(`Click "Action"`, async () => {
    await page.locator("//BUTTON[@type='button'][@id='downloadDropdownMenu'][normalize-space() = \"Action\"]").nth(0).click();
  });

  await test.step(`Click "Download Selected Resume(s) to PDF (2)"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Download Selected Resume(s) to PDF (2)\"]").nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(5000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(5000);
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]/ancestor::tr//a[normalize-space()=\"View Resume\"]").nth(0).click();
    await page.waitForTimeout(10000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]/ancestor::tr//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//A[@role=\\'button\\'][@title=\\'Download Resume\\'][normalize-space() = \"Download Resume\"]";
  });

  await test.step(`Set value "Cydney Moore"`, async () => {
    textContent = "Cydney Moore";
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.reload();
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("e2e Test ");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator(LINK_E2E_TEST_STUDENT).nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(35).hover();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H3[normalize-space() = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Account Settings"`, async () => {
    await page.locator("//h3[normalize-space() = \"Edit Account Settings\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
    await page.waitForTimeout(2000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.reload();
    await page.locator(BTN_GET_RESULTS).nth(0).click();
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]").nth(0).hover();
  });

  await test.step(`Hover "Cydney.Moore@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney.Moore@campuswide.com\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H3[normalize-space() = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Account Settings"`, async () => {
    await page.locator("//h3[normalize-space() = \"Edit Account Settings\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"Yes\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
    await page.waitForTimeout(2000);
    await page.waitForTimeout(1000);
  });

  await test.step(`Click "Get Results"`, async () => {
    await page.reload();
    await page.locator(BTN_GET_RESULTS).nth(0).click();
  });

  await test.step(`Hover "Cydney Moore"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney Moore\"]").nth(0).hover();
  });

  await test.step(`Hover "Cydney.Moore@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Cydney.Moore@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Hover "e2e Test Student"`, async () => {
    await page.locator(SPAN_E2E_TEST_STUDENT).nth(0).hover();
  });

  await test.step(`Hover "e2e.student.fullaccess@campuswide.com"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e.student.fullaccess@campuswide.com\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(LOGOUT_LINK).nth(0).click();
  });

  await test.step(`Hover "Employer Log In"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Employer Log In\"]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DT").nth(35).hover();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Hover "Account Settings"`, async () => {
    await page.locator("//H3[normalize-space() = \"Account Settings\"]").nth(0).hover();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Account Settings"`, async () => {
    await page.locator("//h3[normalize-space() = \"Edit Account Settings\"]").nth(0).hover();
  });

  await test.step(`Hover "Allow Employers to contact me with job …"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "QA Resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"QA Resume\"]").nth(1).hover();
  });

  await test.step(`Click "QA Resume"`, async () => {
    await page.locator("(//a[normalize-space()=\"QA Resume\"])[2]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Click "Students & Alumni"`, async () => {
    await page.locator(NAV_STUDENTS_ALUMNI).nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator(INPUT_SEARCH_USERS).nth(0).fill("Cydney");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "Cydney Moore"`, async () => {
    await page.locator(LINK_CYDNEY_MOORE).nth(0).click();
  });

  await test.step(`Click "Profile"`, async () => {
    await page.locator(TAB_PROFILE).nth(0).click();
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Account Settings"`, async () => {
    await page.locator("//h3[normalize-space()=\"Account Settings\"]/following-sibling::div//button[@aria-label=\"Edit\"]").nth(0).click();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator("//LABEL[contains(normalize-space(),\"Allow Employers to contact me with job opportunities\")]/following::LABEL[normalize-space() = \"No\"]").nth(0).click();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Allow Employers to contact me with job opportunities\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

  await test.step(`Click "Application Materials"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Application Materials\"]").nth(0).click();
  });

  await test.step(`Hover "e2e Test Resume"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"e2e Test Resume\"]").nth(1).hover();
  });

  await test.step(`Click "e2e Test Resume"`, async () => {
    await page.locator("(//a[normalize-space()=\"e2e Test Resume\"])[2]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//A[@role='button'][@title='Delete Resume'][normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Hover "Delete Resume"`, async () => {
    await page.locator("//H3[normalize-space() = \"Delete Resume\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to permanently de…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to permanently delete this resume?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Delete Resume"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Delete Resume\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON").nth(8).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(1).click();
  });

  await test.step(`Click "Email"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email\"]").nth(0).click();
  });

  await test.step(`Hover "Email"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email\"]").nth(1).hover();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_'][@placeholder='Email']").nth(0).fill("e2e.employeruser.subscription.admin@walmart.com");
  });

  await test.step(`Click "Email"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Email\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "e2e.employeruser.subscription.admin@wal…"`, async () => {
    await page.locator("//td[contains(normalize-space(),\"e2e.employeruser.subscription.admin@walmart.com\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//a[@role=\"button\"][contains(@href,\"/users/employers/\")]").nth(0).click();
  });

  await test.step(`Hover "Other Permissions Edit"`, async () => {
    await page.locator("//H4[normalize-space() = \"Other Permissions Edit\"]").nth(0).hover();
  });

  await test.step(`Verify "Yes"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Candidate Search\"]/following-sibling::dd").nth(0)).toHaveText("Yes");
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
  });

  await test.step(`Hover "Edit Access Permissions"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Access Permissions\"]").nth(0).hover();
  });

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Search\"]").nth(0).hover();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Candidate Search\"]/following::label[normalize-space()=\"No\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Verify "No"`, async () => {
    await expect(page.locator("//dt[normalize-space()=\"Candidate Search\"]/following-sibling::dd").nth(0)).toHaveText("No");
  });

});
