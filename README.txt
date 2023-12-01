# Cypress API and UI Tests

This repository contains automated tests for both API and UI using Cypress.

## API Test

### Prerequisites
- Node.js installed
- npm packages installed (`npm install`)

# Run the API test
npm run api-test

# Run the UI test
npm run ui-test

This UI test navigates to https://www.saucedemo.com/, logs in, verifies that items are sorted by Name (A -> Z), changes the sorting to Name (Z -> A), and verifies that the items are sorted correctly.

-Test Runner and Reporting

API Test uses Mocha as a test runner.
UI Test uses Cypress as a test runner and generates reports.

-Author
[Brandon Mansfield]
