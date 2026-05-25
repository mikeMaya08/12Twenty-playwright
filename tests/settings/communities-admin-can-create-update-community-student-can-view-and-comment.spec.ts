// TC: TC_A77432
// Communities - Admin can create, update community, student can view and comment

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsAdmin } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_CANCEL_TYPE,
  BTN_EDIT,
  BTN_OPTIONS_LOWER,
  BTN_RESET_FILTERS,
  BTN_SAVE_TYPE,
  CKE_DESCRIPTION,
  INPUT_SEARCH_NAME,
  LOGIN_AS_BTN,
  MENU_DELETE,
  MENU_EDIT,
  NAV_HOME,
  RBTN_CANCEL,
  RBTN_EDIT,
  RBTN_OK,
  RBTN_SAVE,
  SPAN_CLOSE_X,
  TAB_HOME,
} from '@config/selectors';

test("Communities - Admin can create, update community, student can view and comment - TC_A77432", async ({ page, context }) => {
  let fileName = `0`;

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

  await test.step(`Click "Communities"`, async () => {
    await page.locator("//A[normalize-space() = \"Communities\"]").nth(0).click();
  });

  await test.step(`Hover "Search by Name"`, async () => {
    await page.locator(INPUT_SEARCH_NAME).nth(0).hover();
  });

  await test.step(`Hover "Add New Community"`, async () => {
    await page.locator("//BUTTON[normalize-space() = \"Add New Community\"]").nth(0).hover();
  });

  await test.step(`Fill "Muuktest Community"`, async () => {
    await page.locator(INPUT_SEARCH_NAME).nth(0).fill("Muuktest Community");
  });

  await test.step(`Click element`, async () => {
    await page.locator("//BUTTON[@type='button']").nth(2).click();
  });

  await test.step(`Hover "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).hover();
  });

  await test.step(`Hover "Type - Public"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type - Public\"]").nth(0).hover();
  });

  await test.step(`Hover "2"`, async () => {
    await page.locator("//i[@class=\"fa fa-users\"]//following::SPAN[normalize-space() = \"2\"]").nth(0).hover();
  });

  await test.step(`Click "Muuktest Community"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Community\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Members (2)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Members (2)\"]").nth(0).click();
  });

  await test.step(`Hover "Members (2)"`, async () => {
    await page.locator("//H3[normalize-space() = \"Members (2)\"]").nth(0).hover();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
    await page.waitForTimeout(2000);
  });

  await test.step(`Type "- Edit name"`, async () => {
    await page.keyboard.type(" - Edit name");
    await page.locator("//DIV[@class=\"header\"]").nth(0).click();
  });

  await test.step(`Hover "Muuktest Community - Edit name"`, async () => {
    await page.locator("//H1[normalize-space() = \"Muuktest Community - Edit name\"]").nth(0).hover();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(RBTN_EDIT).nth(0).click();
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
    await page.locator("//DIV[@class=\"header\"]").nth(0).click();
  });

  await test.step(`Hover "Description"`, async () => {
    await page.locator("//H3[normalize-space() = \"Description\"]").nth(0).hover();
  });

  await test.step(`Hover "This is a test for e2e Tests"`, async () => {
    await page.locator("//div[normalize-space() = \"This is a test for e2e Tests\"]").nth(0).hover();
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Description"`, async () => {
    await page.locator("//H3[normalize-space() = \"Description\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Community Description"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Community Description\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "- Edit"`, async () => {
    await page.keyboard.type(" - Edit");
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "This is a test for e2e Tests - Edit"`, async () => {
    await page.locator("//P[normalize-space() = \"This is a test for e2e Tests - Edit\"]").nth(0).hover();
  });

  await test.step(`Hover "Description updated successfully!"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Description updated successfully!\"]").nth(0).hover();
  });

  await test.step(`Click "Description"`, async () => {
    await page.locator("//H3[normalize-space() = \"Description\"]//following::BUTTON[normalize-space() = \"Edit\"]").nth(0).click();
  });

  await test.step(`Hover "Edit Community Description"`, async () => {
    await page.locator("//H3[normalize-space() = \"Edit Community Description\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(CKE_DESCRIPTION).nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
  });

  await test.step(`Press Backspace`, async () => {
    await page.keyboard.press("Backspace");
    await page.locator(RBTN_SAVE).nth(0).click();
  });

  await test.step(`Hover "Description updated successfully!"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Description updated successfully!\"]").nth(0).hover();
  });

  await test.step(`Hover "This is a test for e2e Tests"`, async () => {
    await page.locator("//div[normalize-space() = \"This is a test for e2e Tests\"]").nth(0).hover();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(BTN_EDIT).nth(2).click();
  });

  await test.step(`Click "Add Leader(s)"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Add Leader(s)\"]").nth(0).click();
  });

  await test.step(`Click "Student"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-bbutn-autocomplete'][@name=''][@placeholder='Student']").nth(0).click();
  });

  await test.step(`Click "Student"`, async () => {
    await page.locator("//INPUT[@type='text'][@id='input-bbutn-autocomplete'][@name=''][@placeholder='Student']").nth(0).click();
  });

  await test.step(`Type "Alexa Kan"`, async () => {
    await page.keyboard.type("Alexa Kan");
    await page.waitForTimeout(2000);
  });

  await test.step(`Press ArrowDown`, async () => {
    await page.keyboard.press("ArrowDown");
  });

  await test.step(`Press Enter`, async () => {
    await page.keyboard.press("Enter");
    await page.locator("//A[@role='button'][normalize-space() = \"Add Leader(s)\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Hover "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]").nth(0).hover();
  });

  await test.step(`Hover "Community leaders updated."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Community leaders updated.\"]").nth(0).hover();
  });

  await test.step(`Click "Edit"`, async () => {
    await page.locator(BTN_EDIT).nth(2).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I[@class=\"glyphicon glyphicon-remove\"]").nth(0).click();
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(BTN_CANCEL_TYPE).nth(0).hover();
  });

  await test.step(`Click "Save"`, async () => {
    await page.locator(BTN_SAVE_TYPE).nth(0).click();
  });

  await test.step(`Hover "Community leaders updated."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Community leaders updated.\"]").nth(0).hover();
  });

  await test.step(`Click "Members (3)"`, async () => {
    await page.reload();
    await page.locator("//A[@role='tab'][normalize-space() = \"Members (3)\"]").nth(0).click();
  });

  await test.step(`Hover "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]").nth(0).hover();
  });

  await test.step(`Click "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]/following::button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]//following::A[@role='menuitem'][normalize-space() = \"Send Email\"]").nth(0).hover();
  });

  await test.step(`Click "Alexa Kane"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Alexa Kane\"]//following::A[@role='menuitem'][normalize-space() = \"Remove Member\"]").nth(0).click();
  });

  await test.step(`Hover "Member removed successfully."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Member removed successfully.\"]").nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[@class=\"profile-image-cmp\"]//img").nth(0).hover();
  });

  await test.step(`Click "Change Image"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Change Image\"]").nth(0).click();
  });

  await test.step(`Hover "Select an Image"`, async () => {
    await page.locator("//H3[normalize-space() = \"Select an Image\"]").nth(0).hover();
  });

  await test.step(`Hover "Drag an image here"`, async () => {
    await page.locator("//H4[normalize-space() = \"Drag an image here\"]").nth(0).hover();
  });

  await test.step(`Hover "Image Requirements"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Image Requirements\"]").nth(0).hover();
  });

  await test.step(`Set filename "logomuuk.jpg"`, async () => {
    fileName = "logomuuk.jpg";
  });

  await test.step(`Hover "Cancel"`, async () => {
    await page.locator(RBTN_CANCEL).nth(0).hover();
  });

  await test.step(`Click "OK"`, async () => {
    await page.locator(RBTN_OK).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[@class=\"profile-image-cmp\"]//img").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Enable new post notifications"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Enable new post notifications\"]").nth(0).click();
  });

  await test.step(`Hover "Notification option updated."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Notification option updated.\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Disable new post notifications"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Disable new post notifications\"]").nth(0).click();
  });

  await test.step(`Hover "Notification option updated."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Notification option updated.\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Enable notifications for discussions I …"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Enable notifications for discussions I join\"]").nth(0).click();
  });

  await test.step(`Hover "Notification option updated."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Notification option updated.\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Disable notifications for discussions I…"`, async () => {
    await page.locator("//A[@role='button'][normalize-space() = \"Disable notifications for discussions I join\"]").nth(0).click();
  });

  await test.step(`Hover "Notification option updated."`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Notification option updated.\"]").nth(0).hover();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click "Hi e2e! What’s on your mind?"`, async () => {
    await page.locator("//BUTTON[@type='button'][normalize-space() = \"Hi e2e! What’s on your mind?\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@id=\"cke_text\"]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "This is a test post!"`, async () => {
    await page.keyboard.type("This is a test post! ");
    await page.locator("//BUTTON[normalize-space() = \"Post\"]").nth(0).click();
  });

  await test.step(`Click "Like"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Like\"]").nth(0).click();
  });

  await test.step(`Hover "1"`, async () => {
    await page.reload();
    await page.locator("//SPAN[normalize-space() = \"1\"]").nth(0).hover();
  });

  await test.step(`Hover "Unlike"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Unlike\"]").nth(0).hover();
  });

  await test.step(`Hover "0 comments"`, async () => {
    await page.locator("//DIV[normalize-space() = \"0 comments\"]").nth(0).hover();
  });

  await test.step(`Click "Comment"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Comment\"]").nth(0).click();
  });

  await test.step(`Click "Discussion Feed"`, async () => {
    await page.locator("//span[normalize-space()=\"Discussion Feed\"]//ancestor::div[@class=\"modal-content\"]//div[contains(@id,\"new-comment-content\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Test comment"`, async () => {
    await page.keyboard.type("Test comment");
    await page.locator("//span[normalize-space()=\"Discussion Feed\"]//ancestor::div[@class=\"modal-content\"]//BUTTON[normalize-space() = \"Comment\"]").nth(0).click();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(1).click();
  });

  await test.step(`Click "Members (2)"`, async () => {
    await page.locator("//A[@role='tab'][normalize-space() = \"Members (2)\"]").nth(0).click();
  });

  await test.step(`Click "Alexis Kramer"`, async () => {
    await page.locator("//TBODY//SPAN[normalize-space() = \"Alexis Kramer\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_OPTIONS_LOWER).nth(0).click();
  });

  await test.step(`Click "Login As"`, async () => {
    await page.locator(LOGIN_AS_BTN).nth(0).click();
  });

  await test.step(`Click "Communities"`, async () => {
    await page.locator("//A[normalize-space() = \"Communities\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest Community"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Community\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Hover "2"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"2\"]").nth(1).hover();
  });

  await test.step(`Hover "Type: Public"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Type: Public\"]").nth(1).hover();
  });

  await test.step(`Hover "JOINED"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"JOINED\"]").nth(1).hover();
  });

  await test.step(`Click "Like"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Like\"]").nth(0).click();
  });

  await test.step(`Hover "Unlike"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Unlike\"]").nth(0).hover();
  });

  await test.step(`Hover "2"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"2\"]").nth(2).hover();
  });

  await test.step(`Click "Comment"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Comment\"]").nth(0).click();
  });

  await test.step(`Click "Discussion Feed"`, async () => {
    await page.locator("//span[normalize-space()=\"Discussion Feed\"]//ancestor::div[@class=\"modal-content\"]//div[contains(@id,\"new-comment-content\")]").nth(0).click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Type "Hi, great post!"`, async () => {
    await page.keyboard.type("Hi, great post!");
    await page.locator("//span[normalize-space()=\"Discussion Feed\"]//ancestor::div[@class=\"modal-content\"]//BUTTON[normalize-space() = \"Comment\"]").nth(0).click();
  });

  await test.step(`Hover "Comment saved successfully"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Comment saved successfully\"]").nth(0).hover();
  });

  await test.step(`Hover "Test comment"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Test comment\"]").nth(0).hover();
  });

  await test.step(`Click "Like"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Like\"]").nth(0).click();
  });

  await test.step(`Click "×"`, async () => {
    await page.locator(SPAN_CLOSE_X).nth(1).click();
  });

  await test.step(`Click "2 comments"`, async () => {
    await page.reload();
    await page.locator("//DIV[normalize-space() = \"2 comments\"]").nth(0).click();
  });

  await test.step(`Close page`, async () => {
    await page.close();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
  });

  await test.step(`Click "Communities"`, async () => {
    await page.reload();
    await page.locator("//A[normalize-space() = \"Communities\"]").nth(0).click();
  });

  await test.step(`Click "Muuktest Community"`, async () => {
    await page.locator("//A[normalize-space() = \"Muuktest Community\"]").nth(0).click();
  });

  await test.step(`Click "Home"`, async () => {
    await page.locator(TAB_HOME).nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//div[@class=\"tt-card\"]").nth(0).hover();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//div[@class=\"tt-card\"]//button[@aria-label=\"Options\"]").nth(0).click();
  });

  await test.step(`Hover "Edit"`, async () => {
    await page.locator(MENU_EDIT).nth(0).hover();
  });

  await test.step(`Hover "Turn off notifications for this post"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Turn off notifications for this post\"]").nth(0).hover();
  });

  await test.step(`Click "Delete"`, async () => {
    await page.locator(MENU_DELETE).nth(0).click();
  });

});
