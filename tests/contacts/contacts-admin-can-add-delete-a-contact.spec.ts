// TC: TC58320
// Contacts - Admin can add/delete a Contact

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE_CONTAINS,
  BTN_OK_CONTAINS,
  BTN_OPTIONS_LOWER,
  BTN_SAVE_CONTAINS,
  BTN_SEARCH,
  INPUT_EMAIL_CONTACT,
  INPUT_FIRSTNAME_CONTACT,
  INPUT_LASTNAME_CONTACT,
  LABEL_YES,
  MODAL_SUCCESS_CT,
  NAV_DELETE,
  NAV_HOME,
  SELECT_PREFIX,
} from '@config/selectors';

test("Contacts - Admin can add/delete a Contact - TC58320", async ({ page, context }) => {
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
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
  });

  await test.step(`Hover "Contact"`, async () => {
    await page.locator("//H1[contains(text(),\"Contact\")]").nth(0).hover();
  });

  await test.step(`Click "Add Contact"`, async () => {
    await page.locator("//A[@id='addContact'][normalize-space() = \"Add Contact\"]").nth(0).click();
  });

  await test.step(`Hover "Add New Contact"`, async () => {
    await page.locator("//H1[contains(text(),\"Add New Contact\")]").nth(0).hover();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(0).click();
  });

  await test.step(`Click "Yes"`, async () => {
    await page.locator(LABEL_YES).nth(1).click();
  });

  await test.step(`Fill "Cisco Systems"`, async () => {
    await page.locator("//INPUT[@name='Company']").nth(0).fill("Cisco Systems");
  });

  await test.step(`Click "Cisco Systems"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Cisco Systems\"]").nth(2).click();
  });

  await test.step(`Select "number:2"`, async () => {
    await page.locator(SELECT_PREFIX).nth(0).selectOption("number:2");
  });

  await test.step(`Fill "Sucharitha"`, async () => {
    await page.locator(INPUT_FIRSTNAME_CONTACT).nth(0).fill("Sucharitha");
  });

  await test.step(`Fill "Gouru"`, async () => {
    await page.locator(INPUT_LASTNAME_CONTACT).nth(0).fill("Gouru");
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

  await test.step(`Fill "suchi@muukteam.testinator.com"`, async () => {
    await page.locator(INPUT_EMAIL_CONTACT).nth(0).fill("suchi@muukteam.testinator.com");
  });

  await test.step(`Fill "suchi123@gmail.com"`, async () => {
    await page.locator("//label[normalize-space()=\"Alternate Email\"]//following::input").nth(0).fill("suchi123@gmail.com");
  });

  await test.step(`Fill "https://www.linkedin.com/in/sucharitha-…"`, async () => {
    await page.locator("//INPUT[@placeholder='www.linkedin.com/in/your-public-profile-id']").nth(0).fill("https://www.linkedin.com/in/sucharitha-gouru");
  });

  await test.step(`Fill "1234567890"`, async () => {
    await page.locator("//INPUT[@name='OfficePhone']").nth(0).fill("1234567890");
  });

  await test.step(`Fill "9381393435"`, async () => {
    await page.locator("//INPUT[@name='CellPhone']").nth(0).fill("9381393435");
  });

  await test.step(`Select "number:106"`, async () => {
    await page.locator("//SELECT[@id='country'][@name='country']").nth(0).selectOption("number:106");
  });

  await test.step(`Fill "Hyderabad - India"`, async () => {
    await page.locator("//INPUT[@id='city'][@name='city']").nth(0).fill("Hyderabad - India");
  });

  await test.step(`Click "Hyderabad - India"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Hyderabad - India\"]").nth(0).click();
  });

  await test.step(`Fill "Sharadha Nagar"`, async () => {
    await page.locator("//INPUT[@name='Address']").nth(0).fill("Sharadha Nagar");
  });

  await test.step(`Fill "500013"`, async () => {
    await page.locator("//INPUT[@name='Zip']").nth(0).fill("500013");
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_CONTAINS).nth(1).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Contacts"`, async () => {
    await page.locator("//A[normalize-space() = \"Contacts\"]").nth(0).click();
  });

  await test.step(`Fill email`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Contact Name or Email Address']").nth(0).fill("Sucharitha");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "Miss. Sucharitha Gouru"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Miss. Sucharitha Gouru\")]").nth(0).hover();
  });

  await test.step(`Hover "Cisco Systems"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Cisco Systems\")]").nth(0).hover();
  });

  await test.step(`Hover "Manager"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Manager\")]").nth(0).hover();
  });

  await test.step(`Click "Miss. Sucharitha Gouru"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Miss. Sucharitha Gouru\")]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Hover "Primary Con"`, async () => {
    await page.locator("//SPAN[contains(text(),\"Primary Con\")]").nth(0).hover();
  });

  await test.step(`Hover "suchi@muukteam.testinator.com"`, async () => {
    await page.locator("//A[contains(text(),\"suchi@muukteam.testinator.com\")]").nth(0).hover();
  });

  await test.step(`Hover "9381393435 (Cell)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"9381393435 (Cell)\")]").nth(0).hover();
  });

  await test.step(`Hover "1234567890 (Office Phone)"`, async () => {
    await page.locator("//SPAN[contains(text(),\"1234567890 (Office Phone)\")]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(NAV_DELETE).nth(0).click();
  });

  await test.step(`Hover "Delete Contact"`, async () => {
    await page.locator("//H3[contains(text(),\"Delete Contact\")]").nth(0).hover();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE_CONTAINS).nth(0).hover();
  });

  await test.step(`Click "Delete Contact"`, async () => {
    await page.locator("//BUTTON[contains(text(),\"Delete Contact\")]").nth(0).click();
  });

  await test.step(`Hover "Success!"`, async () => {
    await page.locator(MODAL_SUCCESS_CT).nth(0).hover();
  });

  await test.step(`Hover "You have successfully deleted the contac"`, async () => {
    await page.locator("//DIV[contains(text(),\"You have successfully deleted the contac\")]").nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(BTN_OK_CONTAINS).nth(0).click();
    await page.waitForTimeout(20000);
  });

});
