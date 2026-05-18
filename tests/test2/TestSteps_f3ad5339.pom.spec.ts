// TC: TC_A82325
// Lookups&#x2F;Picklists - Filters, Merging, reordering work as expected

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test("Lookups&#x2F;Picklists - Filters, Merging, reordering work as expected", async ({ page, context }) => {
  let e2eCampusWideAdminURL = `https://e2e-tests-campuswide.admin.qa-12twenty.com/Login`;
  let messageAnnouncement = `test`;
  let date = `8/24/2025`;
  let e2eCampusWideStudentURL = `https://e2e-tests-campuswide.qa-12twenty.com/Login`;
  let employerQA = `https://employer.qa-12twenty.com/`;
  let adminUserLoadTesting = `1`;
  let repeatEachParameter = `1`;
  let executionNum = `100`;
  let e2eLawQAStudentURL = `https://e2e-tests-law.qa-12twenty.com/`;

  // Handle new tabs
  context.on('page', async (newPage) => { page = newPage; });

  await page.goto(e2eCampusWideAdminURL, { timeout: 90000 });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(4000);
  const authData = JSON.parse(fs.readFileSync('authCookie12Twenty.json', 'utf-8'));
  await context.addCookies(authData.cookies || []);
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByPlaceholder("Email Address").fill("e2e.admin.schooladministrator@campuswide.com");
  await page.getByPlaceholder("Password").fill("eQ%DEx%j6Cl9");
  await page.getByRole('button', { name: "Admin Log In" }).click();
  await page.getByRole('link', { name: "Home" }).hover();
  await page.locator("div.side-nav-with-link-and-submenu-container>button.btn.btn-icon.sub-menu-icon").nth(7).click();
  await page.getByRole('link', { name: "Site Settings" }).click();
  await page.getByRole('link', { name: "Students & Alumni" }).click();
  await page.getByRole('link', { name: "Picklists" }).click();
  await page.getByRole('link', { name: "Consolidated Industry" }).click();
  await page.locator("//SPAN[normalize-space() = \"Option\"]").click();
  await page.getByPlaceholder("Option").fill("government");
  await page.locator("//SPAN[@title='Government'][normalize-space() = \"Government\"]").hover();
  await page.locator("//SPAN[@title='Government & Public Sector'][normalize-space() = \"Government & Public Sector\"]").hover();
  await page.locator("//SPAN[@title='Government'][normalize-space() = \"Government\"]").hover();
  await page.getByRole('button', { name: "Reset Filters" }).click();
  await page.locator("//SPAN[normalize-space() = \"Action\"]").click();
  await page.getByRole('link', { name: "Reorder Descending" }).click();
  await page.locator("//DIV[normalize-space() = \"Option\"]").click();
  await page.waitForLoadState('load');
  selector = MK.onSetGV(`//div[@id="sortable-container"][contains(@class,"edit-lookup")]//div[@as-sortable-item-handle]//span`, null);
  var elements = page.locator(selector);
  var count = await elements.count();
  var values = [];
  for (let i = 0; i < count; i++) {
  textContent = await elements.nth(i).innerText();
  values.push(textContent.trim());
  }
  // Expected order Z → A
  var sortedValues = [...values].sort((a, b) => b.localeCompare(a));
  if (JSON.stringify(values) === JSON.stringify(sortedValues)) {
  snippetLog('Elements are ordered from Z to A');
  } else {
  snippetLog('Current values:', values);
  snippetLog('Expected values:', sortedValues);
  throw new Error('Elements are not ordered from Z to A');
  }
  await page.getByRole('link', { name: "Back" }).click();
  await page.getByRole('link', { name: "Consolidated Industry" }).click();
  var elements = page.locator(selector);
  var count = await elements.count();
  var values = [];
  for (let i = 0; i < count; i++) {
  textContent = await elements.nth(i).innerText();
  values.push(textContent.trim());
  }
  // Expected order Z → A
  var sortedValues = [...values].sort((a, b) => b.localeCompare(a));
  if (JSON.stringify(values) === JSON.stringify(sortedValues)) {
  snippetLog('Elements are ordered from Z to A');
  } else {
  snippetLog('Current values:', values);
  snippetLog('Expected values:', sortedValues);
  throw new Error('Elements are not ordered from Z to A');
  }
  await page.locator("//SPAN[normalize-space() = \"Action\"]").click();
  await page.getByRole('link', { name: "Reorder Ascending" }).click();
  await page.locator("//DIV[normalize-space() = \"Option\"]").click();
  await page.waitForLoadState('load');
  var elements = page.locator(selector);
  var count = await elements.count();
  var values = [];
  for (let i = 0; i < count; i++) {
  const text = await elements.nth(i).innerText();
  values.push(text.trim());
  }
  // Expected order A → Z
  var sortedValues = [...values].sort((a, b) => a.localeCompare(b));
  if (JSON.stringify(values) === JSON.stringify(sortedValues)) {
  snippetLog('Elements are ordered from A to Z');
  } else {
  snippetLog('Current values:', values);
  snippetLog('Expected values:', sortedValues);
  throw new Error('Elements are not ordered from A to Z');
  }
  await page.locator("//SPAN[normalize-space() = \"Action\"]").click();
  await page.getByRole('link', { name: "Add New Option" }).click();
  await page.getByRole('heading', { name: "Consolidated Industry Option" }).hover();
  await page.locator("//LABEL[normalize-space() = \"Option Name*\"]").hover();
  await page.getByPlaceholder("Option Name").fill("Test by Muuk");
  await page.locator("//LABEL[normalize-space() = \"Core Industry*\"]").hover();
  await page.locator("SELECT[name='core_industry']").click();
  await page.keyboard.press("accounting");
  await page.locator("//LABEL[normalize-space() = \"Standard Reporting Industry*\"]").hover();
  await page.locator("SELECT[name='mbacsea_industry']").click();
  await page.keyboard.press("accounting services");
  await page.getByRole('button', { name: "Cancel" }).hover();
  await page.getByRole('button', { name: "Save" }).click();
  selector = MK.onSetGV(`//SPAN[normalize-space() = "Test by Muuk"]/ancestor::div[@as-sortable-item]//i[@class="fas fa-bars fa-fw"]`, null);
  offsetY = MK.onSetGV(`+30`, null);
  source = page.locator(selector);
  offsetY = Number(offsetY);
  box = await source.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
  box.x + box.width / 2,
  box.y + box.height / 2 + offsetY,
  { steps: 10 }
  );
  await page.mouse.up();
  await expect(page.locator("TH[title='Description']")).toHaveText("Test by Muuk");
  offsetY = MK.onSetGV(`-30`, null);
  source = page.locator(selector);
  offsetY = Number(offsetY);
  box = await source.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
  box.x + box.width / 2,
  box.y + box.height / 2 + offsetY,
  { steps: 10 }
  );
  await page.mouse.up();
  await expect(page.locator("tr>th.ant-table-cell.drag-visible.column-center")).toHaveText("Test by Muuk");
  await page.locator("//SPAN[normalize-space() = \"Test by Muuk\"]/ancestor::div[@as-sortable-item]//button[@aria-label=\"Options\"]").click();
  await page.getByRole('link', { name: "Merge" }).click();
  await page.getByRole('heading', { name: "Merge Attribute Option" }).hover();
  await page.locator("//DIV[@role='alert'][normalize-space() = \"Warning: Merging one option into another will update historical data as well. This action cannot be undone.\"]").hover();
  await page.getByRole('button', { name: "-- Please Select an Option --" }).click();
  await page.getByPlaceholder("Search options...").fill("Accounting");
  await page.locator("//LABEL[normalize-space() = \"Accounting\"]").click();
  await expect(page.locator("//label[normalize-space()=\"Merge Into:\"]//following::dt[normalize-space()=\"Core Option Name\"]/following-sibling::dd//span")).toHaveText("Accounting");
  await expect(page.locator("//label[normalize-space()=\"Merge Into:\"]//following::dt[normalize-space()=\"Mba Csea Option Name\"]/following-sibling::dd//span")).toHaveText("Financial Services");
  await page.getByRole('button', { name: "Merge" }).click();
  await page.waitForLoadState('load');
});
