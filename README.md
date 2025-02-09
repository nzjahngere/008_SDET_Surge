# 008-SDET-Surge

## Introduction 📋:

This test plan focuses on automating the core functionalities of the Automation Test Store e-commerce website using Cypress and Page Object Model (POM). The objective is to validate key user interactions and ensure a seamless shopping experience.

### Project Type 📂:

Manual | Automation Testing Project

### Website Tested 🕵️‍♂️🔍🌐:

[https://automationteststore.com/
](https://automationteststore.com/)

### Features Tested 🎯:
- **User Login:** Authentication scenarios for valid and invalid credentials.
- **Forgot Password:** Password recovery functionality and email validation.
- **Product Search & Filtering:** Ensure users can search for products using keywords and validate filters and sorting options for accurate results.
- **Cart Operations:** Verify adding, updating, and removing products from the cart and validate price calculations.
- **Checkout Process:** Ensure seamless order placement, including payment and shipping validation.
- **Navigation:** Test navigation between different pages and validate responsiveness across different screen sizes.
- **Wishlist, Contact Us Form, Footer Section, etc:** Wishlist feature and contact us form submission and response validation, footer section links verification.

### Technologies Used 🚀:
- **Manual Testing:** Exploratory tests for user scenarios.
- **Automated Testing:** 
  - **Cypress** for cross-browser testing.
  - **POM (Page Object Model)** for behavior-driven development (BDD).
- **Environments:**
  - **Operating Systems:** Windows 10.
  - **Browsers:** Chrome, Firefox, Edge.
  - **Devices:** Desktop, laptops, tablets, and mobiles.
 
### Design Decisions & Assumptions 💡:

- Page Object Model (POM) is used to enhance maintainability.
- Focus is on functional testing, excluding security and performance testing.
- Tests cover critical user journeys across multiple browsers.
- Network failures are assumed to be minimal.
- Testing is prioritized on Chrome, Edge, and Firefox.

## Installation & Getting Started 🛠️

Follow these steps to set up and execute the test suite:

### Clone the repository
```bash
git clone https://github.com/your-repo/Automation-Test-Store-Testing.git
cd Automation-Test-Store-Testing

# Install dependencies
npm install

# Run Cypress tests
npx cypress open   # For interactive mode
npx cypress run    # For headless execution
```

###Usage
Run specific test cases using Cypress CLI:
```bash
# Run all tests
npx cypress run

# Run authentication tests
npx cypress run --spec cypress/integration/authentication.spec.js
```
### Credentials
```bash
Username: testuser
Password: Test@1234
```

## Deliverables 📑🚀

- **Test Plan Document**: Detailed documentation of what, how and when to do.
- **Test Scenarios Document**: Detailed scenarios outlining the test approach.
- **Test Cases Document**: Comprehensive test cases for functional and non-functional aspects.
- **Test Execution Report**: Reports summarizing test results and defect logs.
- **Bug Reports**: Documented defects discovered during testing.
- **Summary Report**: A final report summarizing test execution results, statuses and defect trends.

---
