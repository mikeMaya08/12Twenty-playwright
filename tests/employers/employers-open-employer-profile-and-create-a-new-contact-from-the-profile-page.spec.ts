// TC: TC58472
// Employers - Open Employer profile and create a new contact from the profile page

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  INPUT_EMAIL_CONTACT,
  INPUT_EMPLOYER_NAME,
  INPUT_FIRSTNAME_CONTACT,
  INPUT_LASTNAME_CONTACT,
  LABEL_NO,
  LABEL_YES,
  NAV_EMPLOYERS,
  NAV_HOME,
  SELECT_PREFIX,
} from '@config/selectors';

test("Employers - Open Employer profile and create a new contact from the profile page - TC58472", async ({ page, context }) => {
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

  await test.step(`Click "Employers"`, async () => {
    await page.locator(NAV_EMPLOYERS).nth(0).click();
  });

  await test.step(`Fill "3M"`, async () => {
    await page.locator(INPUT_EMPLOYER_NAME).nth(0).fill("3M");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "3M"`, async () => {
    await page.locator("//A[contains(text(),\"3M\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "3M"`, async () => {
    await page.locator("//H1[normalize-space() = \"3M\"]").nth(0).hover();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Contacts\")]").nth(0).click();
  });

  await test.step(`Click "Add Contact"`, async () => {
    await page.locator("//A[normalize-space() = \"Add Contact\"]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator(SELECT_PREFIX).nth(0).selectOption("number:2");
  });

  await test.step(`Fill "Nishita"`, async () => {
    await page.locator(INPUT_FIRSTNAME_CONTACT).nth(0).fill("Nishita");
  });

  await test.step(`Fill "Sunkara"`, async () => {
    await page.locator(INPUT_LASTNAME_CONTACT).nth(0).fill("Sunkara");
  });

  await test.step(`Fill "Manager"`, async () => {
    await page.locator("//INPUT").nth(10).fill("Manager");
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator("//SELECT[@id='visibility'][@name='visibility']").nth(0).selectOption("number:2");
  });

  await test.step(`Type in field`, async () => {
    await page.locator("//SELECT[@id='outreachLead'][@name='outreachLead']").nth(0).pressSequentially("value=\"number:540016055100183\"");
  });

  await test.step(`Fill "nishi@muukteam.testinator.com"`, async () => {
    await page.locator(INPUT_EMAIL_CONTACT).nth(0).fill("nishi@muukteam.testinator.com");
  });

  await test.step(`Fill "nishi123@gmail.com"`, async () => {
    await page.locator("//label[normalize-space()=\"Alternate Email\"]//following::input").nth(0).fill("nishi123@gmail.com");
  });

  await test.step(`Click "No"`, async () => {
    await page.locator(LABEL_NO).nth(2).click();
  });

  await test.step(`Hover "www.linkedin.com/in/your-public-profile…"`, async () => {
    await page.locator("//INPUT[@placeholder='www.linkedin.com/in/your-public-profile-id']").nth(0).hover();
  });

  await test.step(`Fill "https://www.linkedin.com/in/nishitha"`, async () => {
    await page.locator("//INPUT[@placeholder='www.linkedin.com/in/your-public-profile-id']").nth(0).fill(" https://www.linkedin.com/in/nishitha");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//INPUT[@name='OfficePhone']").nth(0).hover();
  });

  await test.step(`Fill "123-456-7890"`, async () => {
    await page.locator("//INPUT[@name='OfficePhone']").nth(0).fill(" 123-456-7890");
  });

  await test.step(`Fill "9381393435"`, async () => {
    await page.locator("//INPUT[@name='CellPhone']").nth(0).fill("9381393435");
  });

  await test.step(`Select "number:106"`, async () => {
    await page.locator("//SELECT[@id='country'][@name='country']").nth(0).selectOption("number:106");
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//INPUT[@id='city'][@name='city']").nth(0).hover();
  });

  await test.step(`Fill "Hyderabad"`, async () => {
    await page.locator("//INPUT[@id='city'][@name='city']").nth(0).fill("Hyderabad");
  });

  await test.step(`Click "Hyderabad"`, async () => {
    await page.locator("//STRONG[contains(text(),\"Hyderabad\")]").nth(0).click();
  });

  await test.step(`Fill "Sharadha Nagar"`, async () => {
    await page.locator("//INPUT[@name='Address']").nth(0).fill("Sharadha Nagar");
  });

  await test.step(`Fill "500013"`, async () => {
    await page.locator("//INPUT[@name='Zip']").nth(0).fill("500013");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[contains(text(),\"Contacts\")]").nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Miss. Nishita Sunkara"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Miss. Nishita Sunkara\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Nishita Sunkara"`, async () => {
    await page.locator("//H1[contains(text(),\"Nishita Sunkara\")]").nth(0).hover();
  });

  await test.step(`Hover "3M"`, async () => {
    await page.locator("//A[contains(text(),\"3M\")]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Manager\"]").nth(0).hover();
  });

  await test.step(`Hover "nishi@muukteam.testinator.com"`, async () => {
    await page.locator("//A[contains(text(),\"nishi@muukteam.testinator.com\")]").nth(0).hover();
  });

});
