#!/usr/bin/env python3
"""
Scans all .spec.ts files under tests/ and replaces literal XPath selector strings
inside page.locator("...") calls with imports from '@config/selectors'.

Usage:
    python3 scripts/inject-selectors.py
"""

import os
import re
import sys
from pathlib import Path

# ---------------------------------------------------------------------------
# Selector map: raw XPath value → constant name
# The keys are the *actual* XPath strings (no surrounding quotes, no escaping).
# ---------------------------------------------------------------------------
SELECTORS = {
    # Navigation
    '//A[normalize-space() = "Home"]': 'NAV_HOME',
    '//A[normalize-space() = "Students & Alumni"]': 'NAV_STUDENTS_ALUMNI',
    '//A[normalize-space() = "Employers"]': 'NAV_EMPLOYERS',
    '//A[normalize-space() = "Events"]': 'NAV_EVENTS',
    '//A[normalize-space() = "Job Listings & Interviews"]': 'NAV_JOB_LISTINGS',
    '//A[normalize-space() = "Appointments"]': 'NAV_APPOINTMENTS',
    '//A[normalize-space() = "Mentorship"]': 'NAV_MENTORSHIP',
    '//A[normalize-space() = "Site Settings"]': 'NAV_SITE_SETTINGS',
    '//A[normalize-space() = "Manage Users"]': 'NAV_MANAGE_USERS',
    '//A[normalize-space() = "Profile"]': 'NAV_PROFILE',
    '//A[normalize-space() = "Edit"]': 'NAV_EDIT',
    '//A[normalize-space() = "Data Uploads"]': 'NAV_DATA_UPLOADS',
    '//A[normalize-space() = "Picklists"]': 'NAV_PICKLISTS',
    '//A[normalize-space() = "General"]': 'NAV_GENERAL',
    '//A[normalize-space() = "Post a Job"]': 'NAV_POST_A_JOB',
    '//A[normalize-space() = "Advanced Search"]': 'NAV_ADVANCED_SEARCH',
    '//A[normalize-space() = "Back to List"]': 'NAV_BACK_TO_LIST',
    '//A[normalize-space() = "Cancel"]': 'NAV_CANCEL',
    '//A[normalize-space() = "Delete"]': 'NAV_DELETE',
    '//A[normalize-space() = "OCI and Job Listings"]': 'NAV_OCI_JOB_LISTINGS',
    '//A[normalize-space() = "Email Activity"]': 'NAV_EMAIL_ACTIVITY',

    # Site Management nav
    '//*[normalize-space() = "Site Management"]//button[contains(@data-toggle,"collapse")]': 'NAV_SITE_MGMT_COLLAPSE',
    '//a[normalize-space()="Site Management"]/following-sibling::button': 'NAV_SITE_MGMT_SIBLING_BTN',
    "//A[@id='navbar-settings-btn'][normalize-space() = \"Site Management\"]": 'NAV_SITE_MGMT_NAVBAR_BTN',

    # User / Session
    '//SPAN[@class="nav-user-account-name"]': 'USER_ACCOUNT_NAME',
    '//A[@role="button"][@class="logout"]': 'LOGOUT_LINK',
    "//A[@role='menuitem'][normalize-space() = \"Login as user...\"]": 'LOGIN_AS_USER',
    "//A[@role='button'][normalize-space() = \"Login As\"]": 'LOGIN_AS_BTN',
    '//A[@role=\'button\'][normalize-space() = \'Bypass "On Next Login" (Admin Only)\']': 'BYPASS_ON_NEXT_LOGIN',
    "//BUTTON[@type='button'][normalize-space() = \"Admin Log In\"]": 'ADMIN_LOG_IN_BTN',

    # Tabs
    "//A[@role='tab'][normalize-space() = \"Profile\"]": 'TAB_PROFILE',
    "//A[@role='tab'][normalize-space() = \"Home\"]": 'TAB_HOME',
    "//A[@role='tab'][normalize-space() = \"Schedule\"]": 'TAB_SCHEDULE',

    # Common Buttons
    '//BUTTON[normalize-space() = "OK"]': 'BTN_OK',
    '//BUTTON[normalize-space() = "Cancel"]': 'BTN_CANCEL',
    '//BUTTON[normalize-space() = "Save"]': 'BTN_SAVE',
    '//BUTTON[normalize-space() = "Save Draft"]': 'BTN_SAVE_DRAFT',
    '//BUTTON[normalize-space() = "Delete"]': 'BTN_DELETE',
    '//BUTTON[normalize-space() = "Delete Entry"]': 'BTN_DELETE_ENTRY',
    '//BUTTON[normalize-space() = "Upload"]': 'BTN_UPLOAD',
    '//BUTTON[normalize-space() = "Merge"]': 'BTN_MERGE',
    '//BUTTON[normalize-space() = "Add"]': 'BTN_ADD',
    '//BUTTON[normalize-space() = "Edit"]': 'BTN_EDIT',
    '//BUTTON[normalize-space() = "12twenty ID"]': 'BTN_12TWENTY_ID',
    '//BUTTON[normalize-space() = "Get Results"]': 'BTN_GET_RESULTS',
    '//BUTTON[normalize-space() = "Add New Student"]': 'BTN_ADD_NEW_STUDENT',
    "//BUTTON[@type='submit'][normalize-space() = \"Save Changes\"]": 'BTN_SAVE_CHANGES_SUBMIT',
    "//BUTTON[@type='button'][normalize-space() = \"Actions\"]": 'BTN_ACTIONS',
    "//BUTTON[@type='button'][normalize-space() = \"Action\"]": 'BTN_ACTION',
    '//BUTTON[contains(text(),"OK")]': 'BTN_OK_CONTAINS',
    '//BUTTON[contains(text(),"Ok")]': 'BTN_OK_LOWERCASE',
    "//BUTTON[@type='button'][normalize-space() = \"Cancel\"]": 'BTN_CANCEL_TYPE',
    '//BUTTON[contains(text(),"Cancel")]': 'BTN_CANCEL_CONTAINS',
    "//BUTTON[@type='button'][contains(text(),\"Cancel\")]": 'BTN_CANCEL_TYPE_CONTAINS',
    "//BUTTON[@type='button'][normalize-space() = \"Save\"]": 'BTN_SAVE_TYPE',
    '//BUTTON[contains(text(),"Save")]': 'BTN_SAVE_CONTAINS',
    '//BUTTON[contains(text(),"Next")]': 'BTN_NEXT_CONTAINS',
    '//BUTTON[contains(text(),"Add")]': 'BTN_ADD_CONTAINS',
    "//BUTTON[@type='button'][normalize-space() = \"More Filters\"]": 'BTN_MORE_FILTERS',
    "//BUTTON[@type='button'][normalize-space() = \"Reset Filters\"]": 'BTN_RESET_FILTERS',
    '//BUTTON[@aria-label="Search"]': 'BTN_SEARCH',
    '//button[@aria-label="Search"]': 'BTN_SEARCH_LOWER',
    '//BUTTON[@aria-label="Options"]': 'BTN_OPTIONS_UPPER',
    '//button[@aria-label="Options"]': 'BTN_OPTIONS_LOWER',

    # Role-button links
    "//A[@role='button'][normalize-space() = \"OK\"]": 'RBTN_OK',
    "//A[@role='button'][@id='modalDialogConfirm'][normalize-space() = \"OK\"]": 'RBTN_OK_MODAL',
    "//A[@role='button'][@id='modalDialogConfirm'][contains(text(),\"OK\")]": 'RBTN_OK_MODAL_CONT',
    "//A[@id='modalDialogConfirm'][contains(text(),\"OK\")]": 'RBTN_OK_ID_CONTAINS',
    "//A[@role='button'][normalize-space() = \"Cancel\"]": 'RBTN_CANCEL',
    "//A[@role='button'][contains(text(),\"Cancel\")]": 'RBTN_CANCEL_CONTAINS',
    "//A[@role='button'][normalize-space() = \"Save\"]": 'RBTN_SAVE',
    "//A[@role='button'][normalize-space() = \"Save Changes\"]": 'RBTN_SAVE_CHANGES',
    "//A[@role='button'][normalize-space() = \"Delete\"]": 'RBTN_DELETE',
    "//A[@role='button'][normalize-space() = \"Delete Selected\"]": 'RBTN_DELETE_SELECTED',
    "//A[@role='button'][normalize-space() = \"Delete Application\"]": 'RBTN_DELETE_APP',
    "//A[@role='button'][normalize-space() = \"Edit\"]": 'RBTN_EDIT',
    "//A[@role='button'][normalize-space() = \"Submit\"]": 'RBTN_SUBMIT',
    "//A[@role='button'][normalize-space() = \"Continue\"]": 'RBTN_CONTINUE',
    "//A[@role='button'][contains(text(),\"Continue\")]": 'RBTN_CONTINUE_CONT',
    "//A[@role='button'][normalize-space() = \"Back\"]": 'RBTN_BACK',
    "//A[@role='button'][normalize-space() = \"Add Note\"]": 'RBTN_ADD_NOTE',
    "//A[@role='button'][normalize-space() = \"Add New\"]": 'RBTN_ADD_NEW',
    "//A[@role='button'][normalize-space() = \"View Audit Log\"]": 'RBTN_VIEW_AUDIT',
    "//A[@role='button'][normalize-space() = \"Copy Student URL\"]": 'RBTN_COPY_STUDENT_URL',
    "//A[@role='button'][normalize-space() = \"Copy Employer URL\"]": 'RBTN_COPY_EMPLOYER_URL',
    "//A[@role='button'][normalize-space() = \"Duplicate\"]": 'RBTN_DUPLICATE',
    "//A[@role='button'][normalize-space() = \"Week\"]": 'RBTN_WEEK',
    "//A[@role='button'][normalize-space() = \"Day\"]": 'RBTN_DAY',
    "//A[@role='button'][normalize-space() = \"List\"]": 'RBTN_LIST',

    # Menuitem links
    "//A[@role='menuitem'][normalize-space() = \"Delete\"]": 'MENU_DELETE',
    "//A[@role='menuitem'][normalize-space() = \"Edit\"]": 'MENU_EDIT',

    # Modals / Confirm dialogs
    '//H3[normalize-space() = "Please Confirm"]': 'MODAL_PLEASE_CONFIRM',
    '//H3[contains(text(),"Please Confirm")]': 'MODAL_PLEASE_CONFIRM_CT',
    '//H3[normalize-space() = "Success!"]': 'MODAL_SUCCESS',
    '//H3[contains(text(),"Success!")]': 'MODAL_SUCCESS_CT',
    '//H3[normalize-space() = "Success"]': 'MODAL_SUCCESS_PLAIN',
    '//H3[contains(text(),"Success")]': 'MODAL_SUCCESS_PLAIN_CT',
    '//H3[normalize-space() = "Confirm Delete"]': 'MODAL_CONFIRM_DELETE',
    '//H3[contains(text(),"Confirm Delete")]': 'MODAL_CONFIRM_DELETE_CT',
    '//H3[normalize-space() = "Oops!"]': 'MODAL_OOPS',
    '//H3[contains(text(),"Oops!")]': 'MODAL_OOPS_CT',
    '//H3[contains(text(),"Delete Note")]': 'MODAL_DELETE_NOTE_CT',
    '//H3[normalize-space() = "Login as e2e Test Student"]': 'MODAL_LOGIN_AS_STUDENT',
    '//H3[normalize-space() = "Student Account Information"]': 'MODAL_STUDENT_ACCOUNT',
    '//H3[normalize-space() = "Add New Resume"]': 'MODAL_ADD_RESUME',
    '//H3[contains(text(),"Announcements")]': 'MODAL_ANNOUNCEMENTS_CT',
    '//DIV[contains(text(),"Are you sure you want to permanently del")]': 'CONFIRM_PERM_DELETE',
    '//DIV[normalize-space() = "This will delete the application of the student(s) and remove them from the process."]': 'CONFIRM_DELETE_APP',

    # Form inputs
    "//INPUT[@type='text'][@placeholder='Search by Name, Email Address or ID']": 'INPUT_SEARCH_USERS',
    "//INPUT[@type='text'][@placeholder='Search by Name']": 'INPUT_SEARCH_NAME',
    "//INPUT[@type='text'][@placeholder='Search']": 'INPUT_SEARCH',
    "//INPUT[@id='search-filter-input'][@type='text'][@placeholder='Search filters']": 'INPUT_SEARCH_FILTERS',
    "//INPUT[@name='dateText'][@placeholder='MM/DD/YYYY'][@type='text']": 'INPUT_DATE',
    "//INPUT[@name='startDateText'][@placeholder='MM/DD/YYYY'][@type='text'][@title='Start Date']": 'INPUT_START_DATE',
    "//INPUT[@name='startTimeText'][@placeholder='H:MMpm'][@type='text'][@title='Start Time']": 'INPUT_START_TIME',
    "//INPUT[@name='endTimeText'][@placeholder='H:MMpm'][@type='text'][@title='End Time']": 'INPUT_END_TIME',
    "//INPUT[@name='timeText'][@placeholder='H:MMpm'][@type='text']": 'INPUT_TIME',
    "//INPUT[@type='checkbox'][@name='multiselect']": 'INPUT_CHECKBOX_MULTI',
    "//INPUT[@type='radio'][@name='multiselect']": 'INPUT_RADIO_MULTI',
    "//INPUT[@type='checkbox']": 'INPUT_CHECKBOX',
    "//INPUT[@type='text'][@name='UniqueId'][@placeholder='Student Id']": 'INPUT_UNIQUE_ID',
    "//INPUT[@type='text'][@name='FirstName'][@placeholder='First (Preferred) Name']": 'INPUT_FIRST_NAME',
    "//INPUT[@type='text'][@name='LastName'][@placeholder='Last Name']": 'INPUT_LAST_NAME',
    "//INPUT[@type='text'][@name='subject']": 'INPUT_SUBJECT',
    "//INPUT[@type='text'][@name='documentName'][@id='applicationDocumentName']": 'INPUT_DOC_NAME',
    "//INPUT[@type='text'][@name=''][@placeholder='Select a contact']": 'INPUT_SELECT_CONTACT',
    "//INPUT[@name='FirstName']": 'INPUT_FIRSTNAME_CONTACT',
    "//INPUT[@name='Lastname']": 'INPUT_LASTNAME_CONTACT',
    "//INPUT[@name='EmailAddress']": 'INPUT_EMAIL_CONTACT',
    "//INPUT[@type='number'][@name='SalaryMin'][@placeholder='Min']": 'INPUT_SALARY_MIN',
    "//INPUT[@type='number'][@name='SalaryMax'][@placeholder='Max']": 'INPUT_SALARY_MAX',
    "//INPUT[@id='JobTitle'][@name='JobTitle'][@placeholder='Job Title'][@type='text']": 'INPUT_JOB_TITLE',
    "//INPUT[@id='CompanyName'][@name='CompanyName'][@placeholder='Employer'][@type='text']": 'INPUT_COMPANY_NAME',
    '//INPUT[@type=\'email\'][@placeholder=\'Email Address\'][@name=\'Username\'][@id=\'Username\']': 'INPUT_EMAIL_LOGIN',
    '//INPUT[@type=\'password\'][@placeholder=\'Password\'][@name=\'Password\'][@id=\'Password\']': 'INPUT_PASSWORD_LOGIN',
    "//INPUT[@type='text'][@placeholder='Employer Name']": 'INPUT_EMPLOYER_NAME',
    "//INPUT[@type='text'][@placeholder='Employer, Event Name, or Keyword']": 'INPUT_EMPLOYER_KEYWORD',

    # Dropdowns (SELECT)
    "//SELECT[@name='IsEnrolled']": 'SELECT_IS_ENROLLED',
    "//SELECT[@name='RoleId']": 'SELECT_ROLE_ID',
    "//SELECT[@name='ProgramId']": 'SELECT_PROGRAM_ID',
    "//SELECT[@name='DegreeLevelId']": 'SELECT_DEGREE_LEVEL_ID',
    "//SELECT[@name='College1Name']": 'SELECT_COLLEGE_NAME',
    "//SELECT[@name='Major1Name']": 'SELECT_MAJOR_NAME',
    "//SELECT[@name='date_']": 'SELECT_DATE',
    "//SELECT[@name='PayFormatId']": 'SELECT_PAY_FORMAT',
    "//SELECT[@name='CurrencyId']": 'SELECT_CURRENCY',
    "//SELECT[@id='LocationTypeId'][@name='LocationTypeId']": 'SELECT_LOCATION_TYPE',
    "//SELECT[@name='Job.JobIndustryId'][@id='Job.JobIndustryId']": 'SELECT_JOB_INDUSTRY',
    "//SELECT[@id='prefix'][@name='prefix']": 'SELECT_PREFIX',

    # Multiselect Buttons
    "//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Select a Value --\"]": 'MULTI_SELECT_VALUE',
    '//BUTTON[@type="button"][@title="-- Select a Value --"][normalize-space() = "-- Select a Value --"]': 'MULTI_SELECT_VALUE2',
    "//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Type of Job --\"]": 'MULTI_TYPE_OF_JOB',
    "//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Job Function --\"]": 'MULTI_JOB_FUNCTION',
    "//BUTTON[@type='button'][@title='None selected'][normalize-space() = \"-- Industry --\"]": 'MULTI_INDUSTRY',

    # Labels
    '//LABEL[normalize-space() = "Yes"]': 'LABEL_YES',
    '//LABEL[normalize-space() = "No"]': 'LABEL_NO',
    '//LABEL[normalize-space() = "Off"]': 'LABEL_OFF',
    '//LABEL[normalize-space() = "Select all"]': 'LABEL_SELECT_ALL',
    '//LABEL[normalize-space() = "Degree Level*"]': 'LABEL_DEGREE_LEVEL',
    '//LABEL[normalize-space() = "College/School*"]': 'LABEL_COLLEGE_SCHOOL',
    '//LABEL[normalize-space() = "Time Zone*"]': 'LABEL_TIME_ZONE',
    '//LABEL[normalize-space() = "Program*"]': 'LABEL_PROGRAM',
    '//LABEL[normalize-space() = "Graduation Term*"]': 'LABEL_GRADUATION_TERM',
    '//LABEL[contains(normalize-space(),"User Role*")]': 'LABEL_USER_ROLE',
    '//LABEL[contains(normalize-space(),"Student Id")]': 'LABEL_STUDENT_ID',
    '//LABEL[contains(normalize-space(),"Active*")]': 'LABEL_ACTIVE',
    '//LABEL[normalize-space() = "Student Group*"]': 'LABEL_STUDENT_GROUP',
    '//LABEL[contains(normalize-space(),"Student Group*")]': 'LABEL_STUDENT_GROUP_CT',
    '//LABEL[normalize-space() = "Employer*"]': 'LABEL_EMPLOYER',
    '//LABEL[normalize-space() = "Student*"]': 'LABEL_STUDENT',
    '//LABEL[normalize-space() = "Job Title*"]': 'LABEL_JOB_TITLE',
    '//LABEL[normalize-space() = "Job Function*"]': 'LABEL_JOB_FUNCTION',
    '//LABEL[normalize-space() = "Industry*"]': 'LABEL_INDUSTRY',
    '//LABEL[normalize-space() = "Location Type*"]': 'LABEL_LOCATION_TYPE',
    '//LABEL[normalize-space() = "Bulk Update 1"]': 'LABEL_BULK_UPDATE_1',
    '//LABEL[normalize-space() = "Spring 2030"]': 'LABEL_SPRING_2030',
    '//LABEL[normalize-space() = "Upload New"]': 'LABEL_UPLOAD_NEW',
    '//LABEL[normalize-space() = "Relative Range"]': 'LABEL_RELATIVE_RANGE',
    '//LABEL[normalize-space() = "Major/Academic Program"]': 'LABEL_MAJOR_PROGRAM',
    '//LABEL[normalize-space() = "Degree Level"]': 'LABEL_DEGREE_LEVEL_PLAIN',
    '//LABEL[normalize-space() = "Work Authorization"]': 'LABEL_WORK_AUTH',
    '//LABEL[normalize-space() = "I will review applicants as they come in, and may close the job posting early"]': 'LABEL_REVIEW_APPLICANTS',
    '//LABEL[normalize-space() = "I understand that deleting a student user will delete the user and all data associated with their account. This action can not be undone."]': 'LABEL_DELETE_STUDENT',
    '//LABEL[normalize-space() = "Group 1"]': 'LABEL_GROUP_1',
    '//LABEL[normalize-space() = "Chennai, Kolkata, Mumbai, New Delhi (UTC+05:30)"]': 'LABEL_TIMEZONE_CITY',
    '//LABEL[@id="IsEnrolled-label"]': 'LABEL_IS_ENROLLED',
    '//LABEL[@id="RoleId-label"]': 'LABEL_ROLE_ID',
    '//LABEL[@id="StudentGroupIds-label"]': 'LABEL_STUDENT_GROUP_ID',

    # Known people / entities
    '//A[normalize-space() = "e2e Test Student"]': 'LINK_E2E_TEST_STUDENT',
    '//A[contains(text(),"e2e Test Student")]': 'LINK_E2E_TEST_STUDENT_CT',
    '//A[normalize-space() = "Test Student #0001"]': 'LINK_TEST_STUDENT_0001',
    '//SPAN[normalize-space() = "e2e Test Student"]': 'SPAN_E2E_TEST_STUDENT',
    '//H1[normalize-space() = "e2e Test Student"]': 'H1_E2E_TEST_STUDENT',
    '//A[normalize-space() = "Cydney Moore"]': 'LINK_CYDNEY_MOORE',
    '//A[contains(text(),"Walmart")]': 'LINK_WALMART_CT',
    '//SPAN[contains(text(),"Walmart")]': 'SPAN_WALMART_CT',

    # Rich-text editor
    '//div[@id="cke_Description"]': 'CKE_DESCRIPTION',
    '//div[@id="cke_1_contents"]': 'CKE_CONTENTS',

    # Date picker
    '//td[@class="today day"]/following::td': 'DATEPICKER_NEXT_DAY',
    '//td[contains(@class,"today")]/following::td': 'DATEPICKER_NEXT_DAY2',

    # Page headers
    '//H1[normalize-space() = "Students & Alumni"]': 'H1_STUDENTS_ALUMNI',
    '//H1[normalize-space() = "Manage Students & Alumni"]': 'H1_MANAGE_STUDENTS',
    '//H1[normalize-space() = "Job Listings & Interviews"]': 'H1_JOB_LISTINGS',
    '//H1[normalize-space() = "Host an Event"]': 'H1_HOST_AN_EVENT',
    '//H2[normalize-space() = "Eligibility"]': 'H2_ELIGIBILITY',
    '//H2[contains(text(),"Eligibility")]': 'H2_ELIGIBILITY_CT',
    '//H2[contains(text(),"Job Dates")]': 'H2_JOB_DATES_CT',
    '//H2[contains(text(),"Career Center Administrator")]': 'H2_CAREER_CENTER_CT',
    '//H2[contains(text(),"Basics")]': 'H2_BASICS_CT',
    '//H2[contains(text(),"Attachments")]': 'H2_ATTACHMENTS_CT',

    # Misc
    '//SPAN[normalize-space() = "×"]': 'SPAN_CLOSE_X',
    '//DIV[contains(text(),"Results: ")]': 'DIV_RESULTS_CT',
    '//DIV[normalize-space() = "United States (USA)"]': 'DIV_USA',
    '//DIV[contains(text(),"User has been deactivated and successful")]': 'DIV_USER_DEACTIVATED_CT',
    '//DIV[contains(text(),"No users found")]': 'DIV_NO_USERS_FOUND_CT',
    '//DIV[contains(text(),"The criteria below determines who can vi")]': 'DIV_CRITERIA_CT',
    '//SPAN[contains(text(),"Test_Resume_01.pdf")]': 'SPAN_RESUME_FILE_CT',
    '//B[normalize-space() = "log out"]': 'B_LOG_OUT',
    '//a[normalize-space()="e2e Test Student"]/ancestor::tr//button[@aria-label="Options"]': 'OPTIONS_ROW_STUDENT',
}

# ---------------------------------------------------------------------------
# Helper: given source text, return (new_text, list_of_constant_names_used)
# ---------------------------------------------------------------------------

# We only want to replace selectors inside page.locator("...") calls.
# The regex matches:  page.locator("   ...content...   ")
# including the closing ) of the locator() call itself.
# The content may contain escaped double-quotes (\") so we use a non-greedy
# match that handles those.
LOCATOR_PATTERN = re.compile(
    r'(page\.locator\(")([^"\\]*(?:\\.[^"\\]*)*?)("\))',
    re.DOTALL,
)


def unescape_ts_string(s: str) -> str:
    """Convert a TypeScript double-quoted string body back to a raw XPath.

    Inside a TS `"..."` string:
      - \" → "
      - \\ → \
      - \' → '  (TS allows this even though unnecessary)
    """
    # Simple sequential replacements (order matters: \\ first)
    result = []
    i = 0
    while i < len(s):
        if s[i] == '\\' and i + 1 < len(s):
            nxt = s[i + 1]
            if nxt == '"':
                result.append('"')
                i += 2
                continue
            elif nxt == '\\':
                result.append('\\')
                i += 2
                continue
            elif nxt == "'":
                result.append("'")
                i += 2
                continue
            elif nxt == 'n':
                result.append('\n')
                i += 2
                continue
            elif nxt == 't':
                result.append('\t')
                i += 2
                continue
        result.append(s[i])
        i += 1
    return ''.join(result)


def process_file(path: Path) -> tuple[str, int]:
    """Return (new_content, replacement_count).  If count == 0, content unchanged."""
    original = path.read_text(encoding='utf-8')
    used_constants: set[str] = set()
    replacement_count = 0

    def replacer(m: re.Match) -> str:
        nonlocal replacement_count
        # group(1) = 'page.locator("'
        # group(2) = escaped XPath content
        # group(3) = '")'  (closing quote + closing paren)
        body = m.group(2)

        raw_xpath = unescape_ts_string(body)

        if raw_xpath in SELECTORS:
            const_name = SELECTORS[raw_xpath]
            used_constants.add(const_name)
            replacement_count += 1
            # Full replacement: page.locator("...") → page.locator(CONST)
            return f'page.locator({const_name})'
        # No match – return original text unchanged
        return m.group(0)

    new_content = LOCATOR_PATTERN.sub(replacer, original)

    if replacement_count == 0:
        return original, 0

    # ── Build import line ───────────────────────────────────────────────────
    sorted_consts = sorted(used_constants)
    # Keep lines under ~100 chars; break into multiple lines if needed
    consts_str = ', '.join(sorted_consts)
    if len(consts_str) + len("import {  } from '@config/selectors';") <= 100:
        import_line = f"import {{ {consts_str} }} from '@config/selectors';"
    else:
        indented = ',\n  '.join(sorted_consts)
        import_line = f"import {{\n  {indented},\n}} from '@config/selectors';"

    # ── Check if import already exists ─────────────────────────────────────
    if "from '@config/selectors'" in new_content:
        # Already has the import – skip re-adding
        return new_content, replacement_count

    # ── Insert import after the last existing import block ─────────────────
    # Find last line that starts with "import "
    lines = new_content.splitlines(keepends=True)
    last_import_idx = -1
    for i, line in enumerate(lines):
        stripped = line.lstrip()
        if stripped.startswith('import '):
            last_import_idx = i

    if last_import_idx >= 0:
        lines.insert(last_import_idx + 1, import_line + '\n')
    else:
        # No imports found – prepend
        lines.insert(0, import_line + '\n')

    new_content = ''.join(lines)
    return new_content, replacement_count


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    tests_root = Path('/Users/miguelmaya/Documents/12Twenty/tests')
    spec_files = sorted(tests_root.rglob('*.spec.ts'))

    total_files_updated = 0
    total_replacements = 0

    for spec in spec_files:
        new_content, count = process_file(spec)
        if count > 0:
            spec.write_text(new_content, encoding='utf-8')
            total_files_updated += 1
            total_replacements += count
            print(f'  [{count:4d} replacements]  {spec.relative_to(tests_root)}')

    print()
    print('=' * 60)
    print(f'Files updated    : {total_files_updated}')
    print(f'Total replacements: {total_replacements}')


if __name__ == '__main__':
    main()
