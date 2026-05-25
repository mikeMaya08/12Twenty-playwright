// TC: TC67702
// 12TE Candidate Search - Search and filter for candidates

import { test, expect } from '@playwright/test';
import { loadAuthCookies, loginAsEmployer } from '@fixtures/test';
import { URLS } from '@config/environments';
import {
  BTN_MORE_FILTERS,
  BTN_RESET_FILTERS,
  BTN_SEARCH,
  DIV_RESULTS_CT,
  INPUT_CHECKBOX_MULTI,
  USER_ACCOUNT_NAME,
} from '@config/selectors';

test("12TE Candidate Search - Search and filter for candidates - TC67702", async ({ page, context }) => {
  let selector = `0`;
  let textContent = `0`;

  await test.step(`Setup`, async () => {
    await page.goto(URLS.employer, {timeout: 90000});
    await page.waitForTimeout(4000);
    await loadAuthCookies(context, page);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill email`, async () => {
    await loginAsEmployer(page);
    await page.waitForTimeout(2000);
  });

  await test.step(`Fill password`, async () => {
    await page.waitForTimeout(2000);
  });


  await test.step(`Hover element`, async () => {
    await page.locator(USER_ACCOUNT_NAME).nth(0).hover();
  });

  await test.step(`Click "Candidate Search"`, async () => {
    await page.locator("//A[normalize-space() = \"Candidate Search\"]").nth(0).click();
  });

  await test.step(`Hover "Candidate Search"`, async () => {
    await page.locator("//H1[contains(text(),\"Candidate Search\")]").nth(0).hover();
  });

  await test.step(`Click "All"`, async () => {
    await page.locator("//A[contains(text(),\"All\")]").nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Fill "Berkeley Haas School of Business"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Resume Keyword Search']").nth(0).fill("Berkeley Haas School of Business");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "Berkeley Haas School of Business"`, async () => {
    await page.locator("//dd[normalize-space()=\"Berkeley Haas School of Business\"]").nth(0).hover();
  });

  await test.step(`Fill "Full Time MBA"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Resume Keyword Search']").nth(0).fill("Full Time MBA");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Hover "Full-Time MBA"`, async () => {
    await page.locator("//dd[contains(text(),\"Full-Time MBA\")]").nth(0).hover();
  });

  await test.step(`Fill "Resume Keyword Search"`, async () => {
    await page.locator("//INPUT[@type='text'][@placeholder='Resume Keyword Search']").nth(0).fill("");
  });

  await test.step(`Click element`, async () => {
    await page.locator(BTN_SEARCH).nth(0).click();
  });

  await test.step(`Click "School"`, async () => {
    await page.reload();
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "Harvard"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_OP_CandidateSchool'][@placeholder='School']").nth(0).fill("Harvard");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
    await page.waitForTimeout(6000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"University\"]//following-sibling::dd[1]";
  });

  await test.step(`Set value "Harvard"`, async () => {
    textContent = "Harvard";
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "UCLA"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_OP_CandidateSchool'][@placeholder='School']").nth(0).fill("UCLA");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
    await page.waitForTimeout(4000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"University\"]//following-sibling::dd[1]";
  });

  await test.step(`Set value "UCLA"`, async () => {
    textContent = "UCLA";
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
  });

  await test.step(`Fill "Berkeley"`, async () => {
    await page.locator("//INPUT[@type='text'][@name='txt_OP_CandidateSchool'][@placeholder='School']").nth(0).fill("Berkeley");
  });

  await test.step(`Click "School"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"School\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"University\"]//following-sibling::dd[1]";
  });

  await test.step(`Set value "Berkeley"`, async () => {
    textContent = "Berkeley";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Graduation Class"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").nth(0).click();
  });

  await test.step(`Click "2030 - 2031"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2030 - 2031\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Class"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"Degree\"]//following-sibling::dd[1]";
  });

  await test.step(`Set value "203"`, async () => {
    textContent = "203";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "Graduation Class"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").nth(0).click();
  });

  await test.step(`Click "2022 - 2023"`, async () => {
    await page.locator("//LABEL[normalize-space() = \"2022 - 2023\"]").nth(0).click();
  });

  await test.step(`Click "Graduation Class"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Graduation Class\"]").nth(0).click();
    await page.waitForTimeout(3000);
  });

  await test.step(`Set selector`, async () => {
    selector = "//dt[normalize-space()=\"Degree\"]//following-sibling::dd[1]";
  });

  await test.step(`Set value "202"`, async () => {
    textContent = "202";
  });

  await test.step(`Click "Reset Filters"`, async () => {
    await page.locator(BTN_RESET_FILTERS).nth(0).click();
    await page.waitForLoadState('load');
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Type "Underrepresented Groups"`, async () => {
    await page.keyboard.type("Underrepresented Groups");
    await page.locator("//BUTTON[normalize-space() = \"Underrepresented Groups\"]").nth(0).click();
  });

  await test.step(`Fill "International"`, async () => {
    await page.locator("//input[contains(@placeholder,\"filter options\")]").nth(0).fill("International");
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(3).click();
  });

  await test.step(`Click "Underrepresented Groups"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Underrepresented Groups\"]").nth(0).click();
  });

  await test.step(`Hover "Results:"`, async () => {
    await page.locator(DIV_RESULTS_CT).nth(0).hover();
  });

  await test.step(`Click "Underrepresented Groups"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Underrepresented Groups\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(3).click();
  });

  await test.step(`Click "Underrepresented Groups"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Underrepresented Groups\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Underrepresented Groups International (non-US) (empty)\"]";
  });

  await test.step(`Click "Candidate Availability"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Candidate Availability"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").nth(0).click();
  });

  await test.step(`Verify "Results:"`, async () => {
    await expect(page.locator(DIV_RESULTS_CT).nth(0)).toContainText("Results: ");
  });

  await test.step(`Click "Candidate Availability"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Candidate Availability"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Candidate Availability\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Candidate Availability Students - Internships (empty)\"]";
  });

  await test.step(`Click "More Filters"`, async () => {
    await page.locator(BTN_MORE_FILTERS).nth(0).click();
  });

  await test.step(`Type "Program Type"`, async () => {
    await page.keyboard.type("Program Type");
    await page.locator("//BUTTON[normalize-space() = \"Program Type\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(1).hover();
  });

  await test.step(`Hover "Results:"`, async () => {
    await page.locator(DIV_RESULTS_CT).nth(0).hover();
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(1).click();
  });

  await test.step(`Click "Program Type"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Program Type\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Program Type Full Time MBA (empty)\"]";
  });

  await test.step(`Click "Industry Experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(4).click();
  });

  await test.step(`Click "Industry Experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").nth(0).click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
  });

  await test.step(`Hover "Results:"`, async () => {
    await page.locator(DIV_RESULTS_CT).nth(0).hover();
  });

  await test.step(`Click "Industry Experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator(INPUT_CHECKBOX_MULTI).nth(4).click();
  });

  await test.step(`Click "Industry Experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Industry Experience\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//DIV[normalize-space() = \"Industry Experience Entertainment/Media (empty)\"]";
  });

  await test.step(`Click "Years of work experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Years of work experience\"]").nth(0).click();
  });

  await test.step(`Fill "2"`, async () => {
    await page.locator("//INPUT[@name='lowerNumber_AN_candidate__years_work_experience'][@placeholder='From'][@type='number']").nth(0).fill("2");
  });

  await test.step(`Fill "4"`, async () => {
    await page.locator("//INPUT[@name='upperNumber_AN_candidate__years_work_experience'][@placeholder='To'][@type='number']").nth(0).fill("4");
  });

  await test.step(`Click "Years of work experience (empty)"`, async () => {
    await page.locator("//DIV[normalize-space() = \"Years of work experience (empty)\"]").nth(1).click();
  });

  await test.step(`Hover "Results:"`, async () => {
    await page.locator(DIV_RESULTS_CT).nth(0).hover();
  });

  await test.step(`Hover element`, async () => {
    await page.locator("//DD").nth(2).hover();
  });

  await test.step(`Click "Years of work experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Years of work experience\"]").nth(0).click();
  });

  await test.step(`Click element`, async () => {
    await page.locator("//I").nth(43).click();
  });

  await test.step(`Click "Years of work experience"`, async () => {
    await page.locator("//SPAN[normalize-space() = \"Years of work experience\"]").nth(0).click();
  });

  await test.step(`Set selector`, async () => {
    selector = "//SPAN[contains(text(),\"Muuktest Event\")]";
  });

});
