// TC: TC_A78156
// Employers - Judge Directory - Add/edit/reject Judge

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import {
  BTN_CANCEL,
  BTN_CANCEL_TYPE,
  BTN_MORE_FILTERS,
  BTN_OK,
  BTN_SAVE,
  INPUT_CHECKBOX_MULTI,
  INPUT_SEARCH_FILTERS,
  LABEL_NO,
  MENU_EDIT,
  MODAL_LOGIN_AS_STUDENT,
  NAV_EMPLOYERS,
  NAV_EVENTS,
  NAV_HOME,
  NAV_MANAGE_USERS,
  NAV_OCI_JOB_LISTINGS,
  NAV_SITE_MGMT_SIBLING_BTN,
} from '@config/selectors';

test("Employers - Judge Directory - Add/edit/reject Judge - TC_A78156", async ({ page, context }) => {
  await test.step(`Setup`, async () => {
    await page.goto('https://e2e-tests-law.admin.qa-12twenty.com/dashboard', {timeout: 90000});
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



  await test.step(`Hover "e2e Test Admin"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"e2e Test Admin\"]").nth(0).hover();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "Judges"`, async () => {
    await page.locator("//A[normalize-space() = \"Judges\"]").nth(0).click();
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Fill "Stat"`, async () => {
    await page.locator(INPUT_SEARCH_FILTERS).nth(0).fill("Stat");
  });

  await test.step(`Click "Approval Status"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Approval Status\"]").nth(0).click();
  });

  await test.step(`Click "Approved"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Approved\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(2).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator("//H1[normalize-space() = \"Employers\"]").nth(0).click();
  });

  await test.step(`Click "Add Employer"`, async () => {
    await page.locator("//A[@id='addCompany'][normalize-space() = \"Add Employer\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Employer"`, async () => {
    await page.locator("//H1[normalize-space() = \"Add New Employer\"]").nth(0).hover();
  });

  await test.step(`Hover "Employer Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employer Type\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Judge"`, async () => {
    await page.locator("//INPUT[@name='EmployerName']").nth(0).fill("Muuktest Judge");
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@id='TypeId'][@name='TypeId']").nth(0).selectOption("number:2");
  });

  await test.step(`Hover "Court"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Court\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//LABEL[normalize-space(translate(., '\\u00A0', ' ')) = \"Student Employment Employer\"]").nth(0).hover();
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@name='IsStudentEmploymentEmployer'][@type='radio']").nth(1).click();
  });

  await test.step(`Hover "Account Manager*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Account Manager*\"]").nth(0).hover();
  });

  await test.step(`Select "number:540016054866960"`, async () => {
    await page.locator("//SELECT[@id='AccountManagerId'][@name='AccountManagerId']").nth(0).selectOption("number:540016054866960");
  });

  await test.step(`Hover "Website"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Website\"]").nth(0).hover();
  });

  await test.step(`Hover "Outreach Priority*"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Outreach Priority*\"]").nth(0).hover();
  });

  await test.step(`Fill "test.com"`, async () => {
    await page.locator("//INPUT[@id='Website'][@name='Website'][@placeholder='Website'][@type='text']").nth(0).fill("test.com");
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='OutreachPriorityId'][@name='OutreachPriorityId']").nth(0).selectOption("number:1");
  });

  await test.step(`Hover "Employment Type"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Employment Type\"]").nth(0).hover();
  });

  await test.step(`Select "number:44"`, async () => {
    await page.locator("//SELECT[@id='NalpEmploymentType'][@name='NalpEmploymentType']").nth(0).selectOption("number:44");
  });

  await test.step(`Select "number:245"`, async () => {
    await page.locator("//SELECT[@id='JudgeTypeId'][@name='JudgeTypeId']").nth(0).selectOption("number:245");
  });

  await test.step(`Hover "Court Level"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Court Level\"]").nth(0).hover();
  });

  await test.step(`Select "number:4"`, async () => {
    await page.locator("//SELECT[@id='CourtLevelId'][@name='CourtLevelId']").nth(0).selectOption("number:4");
  });

  await test.step(`Hover "Court - Detail"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Court - Detail\"]").nth(0).hover();
  });

  await test.step(`Hover "Salutation"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Salutation\"]").nth(0).hover();
  });

  await test.step(`Fill "Details - Test"`, async () => {
    await page.locator("//INPUT[@id='CourtDetail'][@name='CourtDetail'][@placeholder='Court - Detail'][@type='text']").nth(0).fill("Details - Test");
  });

  await test.step(`Select "number:245"`, async () => {
    await page.locator("//SELECT[@id='SalutationId'][@name='SalutationId']").nth(0).selectOption("number:245");
  });

  await test.step(`Hover "Last Name"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Last Name\"]").nth(0).hover();
  });

  await test.step(`Fill "Tester"`, async () => {
    await page.locator("//INPUT[@id='JudgeLastName'][@name='JudgeLastName'][@placeholder='Last Name'][@type='text']").nth(0).fill("Tester");
  });

  await test.step(`Hover "Phone Number"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Phone Number\"]").nth(0).hover();
  });

  await test.step(`Fill "8589965522"`, async () => {
    await page.locator("//INPUT[@id='PhoneNumber'][@name='PhoneNumber'][@placeholder='Phone Number'][@type='text']").nth(0).fill("8589965522");
  });

  await test.step(`Hover "Fax Number"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Fax Number\"]").nth(0).hover();
  });

  await test.step(`Fill "8008554411"`, async () => {
    await page.locator("//INPUT[@id='FaxNumber'][@name='FaxNumber'][@placeholder='Fax Number'][@type='text']").nth(0).fill("8008554411");
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@id='EmailAddress'][@name='EmailAddress'][@placeholder='Email Address'][@type='text']").nth(0).fill("qajudge@test.com");
  });

  await test.step(`Hover "Street Address 1"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Street Address 1\"]").nth(0).hover();
  });

  await test.step(`Fill "123 Test Lane"`, async () => {
    await page.locator("//INPUT[@id='StreetAddress1'][@name='StreetAddress1'][@placeholder='Street Address 1'][@type='text']").nth(0).fill("123 Test Lane");
  });

  await test.step(`Hover "City"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"City\"]").nth(0).hover();
  });

  await test.step(`Fill "San Diego - CA"`, async () => {
    await page.locator("//INPUT[@id='CityName'][@name='CityName'][@placeholder='City'][@type='text']").nth(0).fill("San Diego - CA");
  });

  await test.step(`Click "San Diego - CA"`, async () => {
    await page.locator("//STRONG[normalize-space() = \"San Diego - CA\"]").nth(0).click();
  });

  await test.step(`Hover "State"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"State\"]").nth(0).hover();
  });

  await test.step(`Fill "California"`, async () => {
    await page.locator("//INPUT[@id='StateName'][@name='StateName'][@placeholder='State'][@type='text']").nth(0).fill("California");
  });

  await test.step(`Click "California"`, async () => {
    await page.locator("//DIV[normalize-space() = \"California\"]").nth(2).click();
  });

  await test.step(`Hover "Practice Areas"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Practice Areas\"]").nth(0).hover();
  });

  await test.step(`Hover "Zip Code"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Zip Code\"]").nth(0).hover();
  });

  await test.step(`Fill "92561"`, async () => {
    await page.locator("//INPUT[@id='ZipCode'][@name='ZipCode'][@placeholder='Zip Code'][@type='text']").nth(0).fill("92561");
  });

  await test.step(`Click "None-selected"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"None-selected\"]").nth(0).click();
  });

  await test.step(`Click "Government Regulation - Corporate law"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Government Regulation - Corporate law\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(22).click();
  });

  await test.step(`Click "Government Regulation - Corporate and S…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Government Regulation - Corporate and Securities\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(22).click();
  });

  await test.step(`Click "Industry-Focused Services - Pharmacy In…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Industry-Focused Services - Pharmacy Industry\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(22).click();
  });

  await test.step(`Click "Litigation - Appellate Practice"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Litigation - Appellate Practice\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(22).click();
  });

  await test.step(`Click "Practice Areas"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Practice Areas\"]").nth(0).click();
  });

  await test.step(`Hover "Overview"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Overview\"]").nth(0).hover();
  });

  await test.step(`Click "None-selected"`, async () => {
    await page.locator("//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"None-selected\"]").nth(0).click();
  });

  await test.step(`Click "Org Capacity: Minority owned/lead organ…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Org Capacity: Minority owned/lead organization\"]").nth(0).click();
  });

  await test.step(`Click "Planning & Accountability: Recurring cu…"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Planning & Accountability: Recurring culture & climate survey\"]").nth(0).click();
  });

  await test.step(`Click "Demographic Data Available?"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Demographic Data Available?\"]").nth(0).click();
  });

  await test.step(`Select "number:1"`, async () => {
    await page.locator("//SELECT[@id='PublicDemographicsTypeId'][@name='PublicDemographicsTypeId']").nth(0).selectOption("number:1");
  });

  await test.step(`Click "Demographic Data URL"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Demographic Data URL\"]").nth(0).click();
  });

  await test.step(`Fill "testdemographicinfo.com"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-girfdb-url'][@name=''][@placeholder='Demographic Data URL']").nth(0).fill("testdemographicinfo.com");
  });

  await test.step(`Hover "Linkedin Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Linkedin Profile\"]").nth(0).hover();
  });

  await test.step(`Fill "https://linkedin.com/company/12twenty-i…"`, async () => {
    await page.locator("//INPUT[@id='LinkedinProfileUrl'][@name='LinkedinProfileUrl'][@placeholder='Linkedin Profile'][@type='text']").nth(0).fill("https://linkedin.com/company/12twenty-inc-/");
  });

  await test.step(`Hover "Twitter Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Twitter Profile\"]").nth(0).hover();
  });

  await test.step(`Fill "https://twitter.com/12twentyinc"`, async () => {
    await page.locator("//INPUT[@id='TwitterProfileUrl'][@name='TwitterProfileUrl'][@placeholder='Twitter Profile'][@type='text']").nth(0).fill("https://twitter.com/12twentyinc");
  });

  await test.step(`Hover "Facebook Profile"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"Facebook Profile\"]").nth(0).hover();
  });

  await test.step(`Fill "https://www.facebook.com/12twenty"`, async () => {
    await page.locator("//INPUT[@id='FacebookProfileUrl'][@name='FacebookProfileUrl'][@placeholder='Facebook Profile'][@type='text']").nth(0).fill("https://www.facebook.com/12twenty");
  });

  await test.step(`Fill "https://www.instagram.com/12twentyinc"`, async () => {
    await page.locator("//INPUT[@id='InstagramProfileUrl'][@name='InstagramProfileUrl'][@placeholder='Instagram Profile'][@type='text']").nth(0).fill("https://www.instagram.com/12twentyinc");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(1).click();
  });

  await test.step(`Click "Judges"`, async () => {
    await page.locator("//A[normalize-space() = \"Judges\"]").nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator("//H1[normalize-space() = \"Employers\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Judge\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Judge\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button'][@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).click();
  });

  await test.step(`Hover "Edit Muuktest Judge"`, async () => {
    await page.locator("//H1[normalize-space() = \"Edit Muuktest Judge\"]").nth(0).hover();
  });

  await test.step(`Select "number:4"`, async () => {
    await page.locator("//SELECT[@id='OutreachPriorityId'][@name='OutreachPriorityId']").nth(0).selectOption("number:4");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//SELECT[@id='NalpEmploymentType'][@name='NalpEmploymentType']").nth(0).click();
  });

  await test.step(`Select "number:6"`, async () => {
    await page.locator("//SELECT[@id='NalpEmploymentType'][@name='NalpEmploymentType']").nth(0).selectOption("number:6");
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE).nth(0).click();
  });

  await test.step(`Click "Activities"`, async () => {
    await page.locator("//A[normalize-space() = \"Activities\"]").nth(0).click();
  });

  await test.step(`Click "Locations"`, async () => {
    await page.locator("//A[normalize-space() = \"Locations\"]").nth(0).click();
  });

  await test.step(`Click "Events"`, async () => {
    await page.locator(NAV_EVENTS).nth(2).click();
  });

  await test.step(`Click "OCI and Job Listings"`, async () => {
    await page.locator(NAV_OCI_JOB_LISTINGS).nth(2).click();
  });

  await test.step(`Click "Experiences"`, async () => {
    await page.locator("//A[normalize-space() = \"Experiences\"]").nth(0).click();
  });

  await test.step(`Click "Evaluations"`, async () => {
    await page.locator("//A[normalize-space() = \"Evaluations\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(NAV_HOME).nth(1).click();
  });

  await test.step(`Click "Site Management"`, async () => {
    await page.locator(NAV_SITE_MGMT_SIBLING_BTN).nth(0).click();
  });

  await test.step(`Click "Manage Users"`, async () => {
    await page.locator(NAV_MANAGE_USERS).nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//a[normalize-space()=\"e2e Test Student\"]/ancestor::tr//button").nth(0).click();
  });

  await test.step(`Click "e2e Test Student"`, async () => {
    await page.locator("//a[normalize-space()=\"e2e Test Student\"]/ancestor::tr//A[@role='menuitem'][normalize-space() = \"Login as user...\"]").nth(0).click();
  });

  await test.step(`Hover "Login as e2e Test Student"`, async () => {
    await page.locator(MODAL_LOGIN_AS_STUDENT).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    const studentPagePromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await page.locator(BTN_OK).nth(0).click();
    const studentPage = await studentPagePromise;
    if (studentPage) {
      await studentPage.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      const studentUrl = studentPage.url();
      await studentPage.close();
      await page.goto(studentUrl, { timeout: 90000 });
    }
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "Judges"`, async () => {
    await page.locator("//A[normalize-space() = \"Judges\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Judge\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//INPUT[@type='checkbox'][@aria-label=\"unfavorited\"]").nth(0).click();
  });

  await test.step(`Click "Target Employers"`, async () => {
    await page.locator("//A[normalize-space() = \"Target Employers\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Judge\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//A[@role='button'][@title='Remove this employer from my target list']").nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "Muuktest Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Judge\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(35).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "to see who you already know at 12twenty"`, async () => {
    await page.locator("//H2[contains(normalize-space(),\"to see who you already know at 12twenty\")]").nth(0).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(36).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(37).click();
  });

  await test.step(`Hover "See more from 12twenty | West Hollywood…"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"See more from 12twenty | West Hollywood CA\"]").nth(1).hover();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(38).click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Close page`, async () => {
    await page.close();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "Muuktest Judge"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Judge\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button'][@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Click "Reject"`, async () => {
    await page.locator("//A[@role='menuitem'][normalize-space() = \"Reject\"]").nth(0).click();
  });

  await test.step(`Hover "Reject Employer"`, async () => {
    await page.locator("//H3[normalize-space() = \"Reject Employer\"]").nth(0).hover();
  });

  await test.step(`Hover "Are you sure you want to reject this em…"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Are you sure you want to reject this employer?\"]").nth(1).hover();
  });

  await test.step(`Hover "Cancel Reject"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Cancel Reject\"]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Reject"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Reject\"]").nth(0).click();
  });

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Click "Judges"`, async () => {
    await page.locator("//A[normalize-space() = \"Judges\"]").nth(0).click();
  });

});
