# ISTQB Test Case Template

> Purpose: A standard, ISTQB-aligned test case template to ensure traceability, repeatability, and clarity during test design and execution.

## Header
- Test Case ID: 
- Test Case Title:
- Requirement / User Story ID (Traceability):
- Related Test Suite / Test Plan:
- Test Type: (e.g., Functional, Non-functional, Regression, Smoke, Sanity)
- Test Design Technique: (e.g., Equivalence Partitioning, Boundary Value, Decision Table)
- Priority: (e.g., P0/Critical, P1/High, P2/Medium, P3/Low)
- Severity (when executed and failed): (e.g., Blocker, Critical, Major, Minor)
- Author (Test Designer):
- Date Created:
- Last Updated:
- Reviewers:

## Scope & Purpose
- Objective: (Short statement of what this test case verifies)
- Preconditions / Setup:
  - Environment (OS, browser, network conditions, DB snapshot, etc.)
  - System state / Data required
  - Any configuration steps

## Test Data
- Reference to test data set or inline data required for execution (include values or link to data repository)
- Test data creation steps (if applicable)

## Test Steps
(Number each step clearly so the test is repeatable)

1. Step description (e.g., "Open the application and log in as <role>")
2. ...
N. Final step (the action that verifies the expected behavior)

> Tip: Keep steps atomic (one action per step) and include exact inputs and navigation paths.

## Expected Result(s)
- For each step or for the final verification, state the exact expected result(s) (visible output, DB change, message text, status code, etc.)

## Postconditions / Cleanup
- Steps to return the system to baseline (delete test data, reset configurations, logout, etc.)

## Execution Information
- Test Environment: (e.g., staging, build #, environment URL)
- Test Tools (if any): (e.g., Selenium, Postman, JMeter)
- Execution Type: (Manual / Automated)
- Steps to Run Automated Script (if applicable)

## Execution Record (to be filled during execution)
- Execution Date:
- Executed By:
- Actual Result:
- Status: (Pass / Fail / Blocked / Not Executed)
- If Failed: Defect ID(s) / Link(s):
- Comments / Observations (including intermittent behavior, logs, screenshots)

## Traceability & Attachments
- Requirement(s) covered:
- Linked Test Cases / Depends on:
- Attachments: (screenshots, logs, request/response dumps, replay scripts — include links or file names)

## Change History
- [Date] — [Author] — [Change summary] — [Version]

---

### Example (minimal)
- Test Case ID: TC-001
- Title: Login with valid credentials
- Requirement ID: REQ-100
- Test Type: Functional
- Priority: P0
- Preconditions: User 'testuser' exists with password 'P@ssw0rd', app running at https://staging.example.com
- Test Steps:
  1. Navigate to https://staging.example.com/login
  2. Enter username: testuser
  3. Enter password: P@ssw0rd
  4. Click "Sign in"
- Expected Result:
  - User is redirected to the dashboard at /dashboard
  - Welcome message "Welcome, testuser" is displayed
- Postconditions: User logged in (logout required)
- Execution Record:
  - Actual Result: (to be filled)
  - Status: (to be filled)
  - Defect ID: (if any)

---

Notes:
- Keep one authoritative source of truth for test data (avoid embedding sensitive credentials directly).
- Prefer linking to requirement IDs for automated traceability in test management tools (e.g., Jira, TestRail).
- For complex scenarios, consider splitting into precondition reusable steps or separate prerequisite test cases.
