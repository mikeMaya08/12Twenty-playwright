// Shared XPath selectors used across multiple test files.
// Centralising them here means a single edit fixes all tests if the app's HTML changes.

// ─── Navigation ────────────────────────────────────────────────────────────────
export const NAV_HOME            = '//A[normalize-space() = "Home"]';
export const NAV_STUDENTS_ALUMNI = '//A[normalize-space() = "Students & Alumni"]';
export const NAV_EMPLOYERS       = '//A[normalize-space() = "Employers"]';
export const NAV_EVENTS          = '//A[normalize-space() = "Events"]';
export const NAV_JOB_LISTINGS    = '//A[normalize-space() = "Job Listings & Interviews"]';
export const NAV_APPOINTMENTS    = '//A[normalize-space() = "Appointments"]';
export const NAV_MENTORSHIP      = '//A[normalize-space() = "Mentorship"]';
export const NAV_SITE_SETTINGS   = '//A[normalize-space() = "Site Settings"]';
export const NAV_MANAGE_USERS    = '//A[normalize-space() = "Manage Users"]';
export const NAV_PROFILE         = '//A[normalize-space() = "Profile"]';
export const NAV_EDIT            = '//A[normalize-space() = "Edit"]';
export const NAV_DATA_UPLOADS    = '//A[normalize-space() = "Data Uploads"]';
export const NAV_PICKLISTS       = '//A[normalize-space() = "Picklists"]';
export const NAV_GENERAL         = '//A[normalize-space() = "General"]';
export const NAV_POST_A_JOB      = '//A[normalize-space() = "Post a Job"]';
export const NAV_ADVANCED_SEARCH = '//A[normalize-space() = "Advanced Search"]';
export const NAV_BACK_TO_LIST    = '//A[normalize-space() = "Back to List"]';
export const NAV_CANCEL          = '//A[normalize-space() = "Cancel"]';
export const NAV_DELETE          = '//A[normalize-space() = "Delete"]';
export const NAV_OCI_JOB_LISTINGS = '//A[normalize-space() = "OCI and Job Listings"]';
export const NAV_EMAIL_ACTIVITY  = '//A[normalize-space() = "Email Activity"]';

// ─── Site Management nav (two equivalent patterns used in the wild) ─────────────
export const NAV_SITE_MGMT_COLLAPSE     = '//*[normalize-space() = "Site Management"]//button[contains(@data-toggle,"collapse")]';
export const NAV_SITE_MGMT_SIBLING_BTN  = '//a[normalize-space()="Site Management"]/following-sibling::button';
export const NAV_SITE_MGMT_NAVBAR_BTN   = '//A[@id=\'navbar-settings-btn\'][normalize-space() = "Site Management"]';

// ─── User / Session ─────────────────────────────────────────────────────────────
export const USER_ACCOUNT_NAME   = '//SPAN[@class="nav-user-account-name"]';
export const LOGOUT_LINK         = '//A[@role="button"][@class="logout"]';
export const LOGIN_AS_USER       = '//A[@role=\'menuitem\'][normalize-space() = "Login as user..."]';
export const LOGIN_AS_BTN        = '//A[@role=\'button\'][normalize-space() = "Login As"]';
export const BYPASS_ON_NEXT_LOGIN = '//A[@role=\'button\'][normalize-space() = \'Bypass "On Next Login" (Admin Only)\']';
export const ADMIN_LOG_IN_BTN    = '//BUTTON[@type=\'button\'][normalize-space() = "Admin Log In"]';

// ─── Tabs ───────────────────────────────────────────────────────────────────────
export const TAB_PROFILE         = '//A[@role=\'tab\'][normalize-space() = "Profile"]';
export const TAB_HOME            = '//A[@role=\'tab\'][normalize-space() = "Home"]';
export const TAB_SCHEDULE        = '//A[@role=\'tab\'][normalize-space() = "Schedule"]';

// ─── Common Buttons ─────────────────────────────────────────────────────────────
export const BTN_OK                  = '//BUTTON[normalize-space() = "OK"]';
export const BTN_CANCEL              = '//BUTTON[normalize-space() = "Cancel"]';
export const BTN_SAVE                = '//BUTTON[normalize-space() = "Save"]';
export const BTN_SAVE_DRAFT          = '//BUTTON[normalize-space() = "Save Draft"]';
export const BTN_DELETE              = '//BUTTON[normalize-space() = "Delete"]';
export const BTN_DELETE_ENTRY        = '//BUTTON[normalize-space() = "Delete Entry"]';
export const BTN_UPLOAD              = '//BUTTON[normalize-space() = "Upload"]';
export const BTN_MERGE               = '//BUTTON[normalize-space() = "Merge"]';
export const BTN_ADD                 = '//BUTTON[normalize-space() = "Add"]';
export const BTN_EDIT                = '//BUTTON[normalize-space() = "Edit"]';
export const BTN_12TWENTY_ID         = '//BUTTON[normalize-space() = "12twenty ID"]';
export const BTN_GET_RESULTS         = '//BUTTON[normalize-space() = "Get Results"]';
export const BTN_ADD_NEW_STUDENT     = '//BUTTON[normalize-space() = "Add New Student"]';
export const BTN_SAVE_CHANGES_SUBMIT = '//BUTTON[@type=\'submit\'][normalize-space() = "Save Changes"]';
export const BTN_ACTIONS             = '//BUTTON[@type=\'button\'][normalize-space() = "Actions"]';
export const BTN_ACTION              = '//BUTTON[@type=\'button\'][normalize-space() = "Action"]';
export const BTN_OK_CONTAINS         = '//BUTTON[contains(text(),"OK")]';
export const BTN_OK_LOWERCASE        = '//BUTTON[contains(text(),"Ok")]';
export const BTN_CANCEL_TYPE         = '//BUTTON[@type=\'button\'][normalize-space() = "Cancel"]';
export const BTN_CANCEL_CONTAINS     = '//BUTTON[contains(text(),"Cancel")]';
export const BTN_CANCEL_TYPE_CONTAINS = '//BUTTON[@type=\'button\'][contains(text(),"Cancel")]';
export const BTN_SAVE_TYPE           = '//BUTTON[@type=\'button\'][normalize-space() = "Save"]';
export const BTN_SAVE_CONTAINS       = '//BUTTON[contains(text(),"Save")]';
export const BTN_NEXT_CONTAINS       = '//BUTTON[contains(text(),"Next")]';
export const BTN_ADD_CONTAINS        = '//BUTTON[contains(text(),"Add")]';
export const BTN_MORE_FILTERS        = '//BUTTON[@type=\'button\'][normalize-space() = "More Filters"]';
export const BTN_RESET_FILTERS       = '//BUTTON[@type=\'button\'][normalize-space() = "Reset Filters"]';
export const BTN_SEARCH              = '//BUTTON[@aria-label="Search"]';
export const BTN_SEARCH_LOWER        = '//button[@aria-label="Search"]';
export const BTN_OPTIONS_UPPER       = '//BUTTON[@aria-label="Options"]';
export const BTN_OPTIONS_LOWER       = '//button[@aria-label="Options"]';

// ─── Role-button links ───────────────────────────────────────────────────────────
export const RBTN_OK              = '//A[@role=\'button\'][normalize-space() = "OK"]';
export const RBTN_OK_MODAL        = '//A[@role=\'button\'][@id=\'modalDialogConfirm\'][normalize-space() = "OK"]';
export const RBTN_OK_MODAL_CONT   = '//A[@role=\'button\'][@id=\'modalDialogConfirm\'][contains(text(),"OK")]';
export const RBTN_OK_ID_CONTAINS  = '//A[@id=\'modalDialogConfirm\'][contains(text(),"OK")]';
export const RBTN_CANCEL          = '//A[@role=\'button\'][normalize-space() = "Cancel"]';
export const RBTN_CANCEL_CONTAINS = '//A[@role=\'button\'][contains(text(),"Cancel")]';
export const RBTN_SAVE            = '//A[@role=\'button\'][normalize-space() = "Save"]';
export const RBTN_SAVE_CHANGES    = '//A[@role=\'button\'][normalize-space() = "Save Changes"]';
export const RBTN_DELETE          = '//A[@role=\'button\'][normalize-space() = "Delete"]';
export const RBTN_DELETE_SELECTED = '//A[@role=\'button\'][normalize-space() = "Delete Selected"]';
export const RBTN_DELETE_APP      = '//A[@role=\'button\'][normalize-space() = "Delete Application"]';
export const RBTN_EDIT            = '//A[@role=\'button\'][normalize-space() = "Edit"]';
export const RBTN_SUBMIT          = '//A[@role=\'button\'][normalize-space() = "Submit"]';
export const RBTN_CONTINUE        = '//A[@role=\'button\'][normalize-space() = "Continue"]';
export const RBTN_CONTINUE_CONT   = '//A[@role=\'button\'][contains(text(),"Continue")]';
export const RBTN_BACK            = '//A[@role=\'button\'][normalize-space() = "Back"]';
export const RBTN_ADD_NOTE        = '//A[@role=\'button\'][normalize-space() = "Add Note"]';
export const RBTN_ADD_NEW         = '//A[@role=\'button\'][normalize-space() = "Add New"]';
export const RBTN_VIEW_AUDIT      = '//A[@role=\'button\'][normalize-space() = "View Audit Log"]';
export const RBTN_COPY_STUDENT_URL = '//A[@role=\'button\'][normalize-space() = "Copy Student URL"]';
export const RBTN_COPY_EMPLOYER_URL = '//A[@role=\'button\'][normalize-space() = "Copy Employer URL"]';
export const RBTN_DUPLICATE       = '//A[@role=\'button\'][normalize-space() = "Duplicate"]';
export const RBTN_WEEK            = '//A[@role=\'button\'][normalize-space() = "Week"]';
export const RBTN_DAY             = '//A[@role=\'button\'][normalize-space() = "Day"]';
export const RBTN_LIST            = '//A[@role=\'button\'][normalize-space() = "List"]';

// ─── Menuitem links ──────────────────────────────────────────────────────────────
export const MENU_DELETE          = '//A[@role=\'menuitem\'][normalize-space() = "Delete"]';
export const MENU_EDIT            = '//A[@role=\'menuitem\'][normalize-space() = "Edit"]';

// ─── Modals / Confirm dialogs ────────────────────────────────────────────────────
export const MODAL_PLEASE_CONFIRM     = '//H3[normalize-space() = "Please Confirm"]';
export const MODAL_PLEASE_CONFIRM_CT  = '//H3[contains(text(),"Please Confirm")]';
export const MODAL_SUCCESS            = '//H3[normalize-space() = "Success!"]';
export const MODAL_SUCCESS_CT         = '//H3[contains(text(),"Success!")]';
export const MODAL_SUCCESS_PLAIN      = '//H3[normalize-space() = "Success"]';
export const MODAL_SUCCESS_PLAIN_CT   = '//H3[contains(text(),"Success")]';
export const MODAL_CONFIRM_DELETE     = '//H3[normalize-space() = "Confirm Delete"]';
export const MODAL_CONFIRM_DELETE_CT  = '//H3[contains(text(),"Confirm Delete")]';
export const MODAL_OOPS               = '//H3[normalize-space() = "Oops!"]';
export const MODAL_OOPS_CT            = '//H3[contains(text(),"Oops!")]';
export const MODAL_DELETE_NOTE_CT     = '//H3[contains(text(),"Delete Note")]';
export const MODAL_LOGIN_AS_STUDENT   = '//H3[normalize-space() = "Login as e2e Test Student"]';
export const MODAL_STUDENT_ACCOUNT    = '//H3[normalize-space() = "Student Account Information"]';
export const MODAL_ADD_RESUME         = '//H3[normalize-space() = "Add New Resume"]';
export const MODAL_ANNOUNCEMENTS_CT   = '//H3[contains(text(),"Announcements")]';
export const CONFIRM_PERM_DELETE      = '//DIV[contains(text(),"Are you sure you want to permanently del")]';
export const CONFIRM_DELETE_APP       = '//DIV[normalize-space() = "This will delete the application of the student(s) and remove them from the process."]';

// ─── Form inputs ─────────────────────────────────────────────────────────────────
export const INPUT_SEARCH_USERS      = '//INPUT[@type=\'text\'][@placeholder=\'Search by Name, Email Address or ID\']';
export const INPUT_SEARCH_NAME       = '//INPUT[@type=\'text\'][@placeholder=\'Search by Name\']';
export const INPUT_SEARCH            = '//INPUT[@type=\'text\'][@placeholder=\'Search\']';
export const INPUT_SEARCH_FILTERS    = '//INPUT[@id=\'search-filter-input\'][@type=\'text\'][@placeholder=\'Search filters\']';
export const INPUT_DATE              = '//INPUT[@name=\'dateText\'][@placeholder=\'MM/DD/YYYY\'][@type=\'text\']';
export const INPUT_START_DATE        = '//INPUT[@name=\'startDateText\'][@placeholder=\'MM/DD/YYYY\'][@type=\'text\'][@title=\'Start Date\']';
export const INPUT_START_TIME        = '//INPUT[@name=\'startTimeText\'][@placeholder=\'H:MMpm\'][@type=\'text\'][@title=\'Start Time\']';
export const INPUT_END_TIME          = '//INPUT[@name=\'endTimeText\'][@placeholder=\'H:MMpm\'][@type=\'text\'][@title=\'End Time\']';
export const INPUT_TIME              = '//INPUT[@name=\'timeText\'][@placeholder=\'H:MMpm\'][@type=\'text\']';
export const INPUT_CHECKBOX_MULTI    = '//INPUT[@type=\'checkbox\'][@name=\'multiselect\']';
export const INPUT_RADIO_MULTI       = '//INPUT[@type=\'radio\'][@name=\'multiselect\']';
export const INPUT_CHECKBOX          = '//INPUT[@type=\'checkbox\']';
export const INPUT_UNIQUE_ID         = '//INPUT[@type=\'text\'][@name=\'UniqueId\'][@placeholder=\'Student Id\']';
export const INPUT_FIRST_NAME        = '//INPUT[@type=\'text\'][@name=\'FirstName\'][@placeholder=\'First (Preferred) Name\']';
export const INPUT_LAST_NAME         = '//INPUT[@type=\'text\'][@name=\'LastName\'][@placeholder=\'Last Name\']';
export const INPUT_SUBJECT           = '//INPUT[@type=\'text\'][@name=\'subject\']';
export const INPUT_DOC_NAME          = '//INPUT[@type=\'text\'][@name=\'documentName\'][@id=\'applicationDocumentName\']';
export const INPUT_SELECT_CONTACT    = '//INPUT[@type=\'text\'][@name=\'\'][@placeholder=\'Select a contact\']';
export const INPUT_FIRSTNAME_CONTACT = '//INPUT[@name=\'FirstName\']';
export const INPUT_LASTNAME_CONTACT  = '//INPUT[@name=\'Lastname\']';
export const INPUT_EMAIL_CONTACT     = '//INPUT[@name=\'EmailAddress\']';
export const INPUT_SALARY_MIN        = '//INPUT[@type=\'number\'][@name=\'SalaryMin\'][@placeholder=\'Min\']';
export const INPUT_SALARY_MAX        = '//INPUT[@type=\'number\'][@name=\'SalaryMax\'][@placeholder=\'Max\']';
export const INPUT_JOB_TITLE         = '//INPUT[@id=\'JobTitle\'][@name=\'JobTitle\'][@placeholder=\'Job Title\'][@type=\'text\']';
export const INPUT_COMPANY_NAME      = '//INPUT[@id=\'CompanyName\'][@name=\'CompanyName\'][@placeholder=\'Employer\'][@type=\'text\']';
export const INPUT_EMAIL_LOGIN       = '//INPUT[@type=\'email\'][@placeholder=\'Email Address\'][@name=\'Username\'][@id=\'Username\']';
export const INPUT_PASSWORD_LOGIN    = '//INPUT[@type=\'password\'][@placeholder=\'Password\'][@name=\'Password\'][@id=\'Password\']';
export const INPUT_EMPLOYER_NAME     = '//INPUT[@type=\'text\'][@placeholder=\'Employer Name\']';
export const INPUT_EMPLOYER_KEYWORD  = '//INPUT[@type=\'text\'][@placeholder=\'Employer, Event Name, or Keyword\']';

// ─── Dropdowns (SELECT) ──────────────────────────────────────────────────────────
export const SELECT_IS_ENROLLED      = '//SELECT[@name=\'IsEnrolled\']';
export const SELECT_ROLE_ID          = '//SELECT[@name=\'RoleId\']';
export const SELECT_PROGRAM_ID       = '//SELECT[@name=\'ProgramId\']';
export const SELECT_DEGREE_LEVEL_ID  = '//SELECT[@name=\'DegreeLevelId\']';
export const SELECT_COLLEGE_NAME     = '//SELECT[@name=\'College1Name\']';
export const SELECT_MAJOR_NAME       = '//SELECT[@name=\'Major1Name\']';
export const SELECT_DATE             = '//SELECT[@name=\'date_\']';
export const SELECT_PAY_FORMAT       = '//SELECT[@name=\'PayFormatId\']';
export const SELECT_CURRENCY         = '//SELECT[@name=\'CurrencyId\']';
export const SELECT_LOCATION_TYPE    = '//SELECT[@id=\'LocationTypeId\'][@name=\'LocationTypeId\']';
export const SELECT_JOB_INDUSTRY     = '//SELECT[@name=\'Job.JobIndustryId\'][@id=\'Job.JobIndustryId\']';
export const SELECT_PREFIX           = '//SELECT[@id=\'prefix\'][@name=\'prefix\']';

// ─── Multiselect Buttons (None selected dropdowns) ───────────────────────────────
export const MULTI_SELECT_VALUE      = '//BUTTON[@type=\'button\'][@title=\'None selected\'][normalize-space() = "-- Select a Value --"]';
export const MULTI_SELECT_VALUE2     = '//BUTTON[@type="button"][@title="-- Select a Value --"][normalize-space() = "-- Select a Value --"]';
export const MULTI_TYPE_OF_JOB       = '//BUTTON[@type=\'button\'][@title=\'None selected\'][normalize-space() = "-- Type of Job --"]';
export const MULTI_JOB_FUNCTION      = '//BUTTON[@type=\'button\'][@title=\'None selected\'][normalize-space() = "-- Job Function --"]';
export const MULTI_INDUSTRY          = '//BUTTON[@type=\'button\'][@title=\'None selected\'][normalize-space() = "-- Industry --"]';

// ─── Labels (form) ───────────────────────────────────────────────────────────────
export const LABEL_YES               = '//LABEL[normalize-space() = "Yes"]';
export const LABEL_NO                = '//LABEL[normalize-space() = "No"]';
export const LABEL_OFF               = '//LABEL[normalize-space() = "Off"]';
export const LABEL_SELECT_ALL        = '//LABEL[normalize-space() = "Select all"]';
export const LABEL_DEGREE_LEVEL      = '//LABEL[normalize-space() = "Degree Level*"]';
export const LABEL_COLLEGE_SCHOOL    = '//LABEL[normalize-space() = "College/School*"]';
export const LABEL_TIME_ZONE         = '//LABEL[normalize-space() = "Time Zone*"]';
export const LABEL_PROGRAM           = '//LABEL[normalize-space() = "Program*"]';
export const LABEL_GRADUATION_TERM   = '//LABEL[normalize-space() = "Graduation Term*"]';
export const LABEL_USER_ROLE         = '//LABEL[contains(normalize-space(),"User Role*")]';
export const LABEL_STUDENT_ID        = '//LABEL[contains(normalize-space(),"Student Id")]';
export const LABEL_ACTIVE            = '//LABEL[contains(normalize-space(),"Active*")]';
export const LABEL_STUDENT_GROUP     = '//LABEL[normalize-space() = "Student Group*"]';
export const LABEL_STUDENT_GROUP_CT  = '//LABEL[contains(normalize-space(),"Student Group*")]';
export const LABEL_EMPLOYER          = '//LABEL[normalize-space() = "Employer*"]';
export const LABEL_STUDENT           = '//LABEL[normalize-space() = "Student*"]';
export const LABEL_JOB_TITLE         = '//LABEL[normalize-space() = "Job Title*"]';
export const LABEL_JOB_FUNCTION      = '//LABEL[normalize-space() = "Job Function*"]';
export const LABEL_INDUSTRY          = '//LABEL[normalize-space() = "Industry*"]';
export const LABEL_LOCATION_TYPE     = '//LABEL[normalize-space() = "Location Type*"]';
export const LABEL_BULK_UPDATE_1     = '//LABEL[normalize-space() = "Bulk Update 1"]';
export const LABEL_SPRING_2030       = '//LABEL[normalize-space() = "Spring 2030"]';
export const LABEL_UPLOAD_NEW        = '//LABEL[normalize-space() = "Upload New"]';
export const LABEL_RELATIVE_RANGE    = '//LABEL[normalize-space() = "Relative Range"]';
export const LABEL_MAJOR_PROGRAM     = '//LABEL[normalize-space() = "Major/Academic Program"]';
export const LABEL_DEGREE_LEVEL_PLAIN = '//LABEL[normalize-space() = "Degree Level"]';
export const LABEL_WORK_AUTH         = '//LABEL[normalize-space() = "Work Authorization"]';
export const LABEL_REVIEW_APPLICANTS = '//LABEL[normalize-space() = "I will review applicants as they come in, and may close the job posting early"]';
export const LABEL_DELETE_STUDENT    = '//LABEL[normalize-space() = "I understand that deleting a student user will delete the user and all data associated with their account. This action can not be undone."]';
export const LABEL_GROUP_1           = '//LABEL[normalize-space() = "Group 1"]';
export const LABEL_TIMEZONE_CITY     = '//LABEL[normalize-space() = "Chennai, Kolkata, Mumbai, New Delhi (UTC+05:30)"]';
export const LABEL_IS_ENROLLED       = '//LABEL[@id="IsEnrolled-label"]';
export const LABEL_ROLE_ID           = '//LABEL[@id="RoleId-label"]';
export const LABEL_STUDENT_GROUP_ID  = '//LABEL[@id="StudentGroupIds-label"]';

// ─── Known people / entities ─────────────────────────────────────────────────────
export const LINK_E2E_TEST_STUDENT        = '//A[normalize-space() = "e2e Test Student"]';
export const LINK_E2E_TEST_STUDENT_CT     = '//A[contains(text(),"e2e Test Student")]';
export const LINK_TEST_STUDENT_0001       = '//A[normalize-space() = "Test Student #0001"]';
export const SPAN_E2E_TEST_STUDENT        = '//SPAN[normalize-space() = "e2e Test Student"]';
export const H1_E2E_TEST_STUDENT          = '//H1[normalize-space() = "e2e Test Student"]';
export const LINK_CYDNEY_MOORE            = '//A[normalize-space() = "Cydney Moore"]';
export const LINK_WALMART_CT              = '//A[contains(text(),"Walmart")]';
export const SPAN_WALMART_CT              = '//SPAN[contains(text(),"Walmart")]';

// ─── Rich-text editor ────────────────────────────────────────────────────────────
export const CKE_DESCRIPTION = '//div[@id="cke_Description"]';
export const CKE_CONTENTS    = '//div[@id="cke_1_contents"]';

// ─── Date picker ────────────────────────────────────────────────────────────────
export const DATEPICKER_NEXT_DAY  = '//td[@class="today day"]/following::td';
export const DATEPICKER_NEXT_DAY2 = '//td[contains(@class,"today")]/following::td';

// ─── Page headers ────────────────────────────────────────────────────────────────
export const H1_STUDENTS_ALUMNI       = '//H1[normalize-space() = "Students & Alumni"]';
export const H1_MANAGE_STUDENTS       = '//H1[normalize-space() = "Manage Students & Alumni"]';
export const H1_JOB_LISTINGS          = '//H1[normalize-space() = "Job Listings & Interviews"]';
export const H1_HOST_AN_EVENT         = '//H1[normalize-space() = "Host an Event"]';
export const H2_ELIGIBILITY           = '//H2[normalize-space() = "Eligibility"]';
export const H2_ELIGIBILITY_CT        = '//H2[contains(text(),"Eligibility")]';
export const H2_JOB_DATES_CT          = '//H2[contains(text(),"Job Dates")]';
export const H2_CAREER_CENTER_CT      = '//H2[contains(text(),"Career Center Administrator")]';
export const H2_BASICS_CT             = '//H2[contains(text(),"Basics")]';
export const H2_ATTACHMENTS_CT        = '//H2[contains(text(),"Attachments")]';

// ─── Misc ────────────────────────────────────────────────────────────────────────
export const SPAN_CLOSE_X              = '//SPAN[normalize-space() = "×"]';
export const DIV_RESULTS_CT            = '//DIV[contains(text(),"Results: ")]';
export const DIV_USA                   = '//DIV[normalize-space() = "United States (USA)"]';
export const DIV_USER_DEACTIVATED_CT   = '//DIV[contains(text(),"User has been deactivated and successful")]';
export const DIV_NO_USERS_FOUND_CT     = '//DIV[contains(text(),"No users found")]';
export const DIV_CRITERIA_CT           = '//DIV[contains(text(),"The criteria below determines who can vi")]';
export const SPAN_RESUME_FILE_CT       = '//SPAN[contains(text(),"Test_Resume_01.pdf")]';
export const B_LOG_OUT                 = '//B[normalize-space() = "log out"]';
export const LOG_OUT_LINK              = '//A[@role="button"][@class="logout"]';
export const OPTIONS_ROW_STUDENT       = '//a[normalize-space()="e2e Test Student"]/ancestor::tr//button[@aria-label="Options"]';
