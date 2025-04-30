# 📘 Cypress Testing – SauceDemo App
This project demonstrates automated testing of the SauceDemo application using Cypress.
It covers login functionality, product navigation, adding an item to cart, and completing checkout using:
- ✅ Custom Commands  
- ✅ Page Object Model (POM)  
- ✅ (E2E) Cart Flow  
- ✅ Visual delays for test step visibility  
- ✅ Authentication with test credentials

# 🧠 Features Covered
## 🔐 Login Functionality
- Wrong login attempt → error message validated
- Successful login redirects to /inventory.html

## 🛍️ Product Navigation & Checkout
- Navigate to product detail page
- Add item to cart
- Visit cart, proceed to checkout
- Fill form, finish order
- Assert order confirmation message

## ⚙️ Reusable Custom Commands
- cy.login(username, password)
- cy.logout()
- cy.addToCart(productName)

## 🧱 Page Object Model (POM)
All selectors and reusable actions (like clickFirstProduct() and getProductTitle()) are handled via POM for maintainability.

# 🚀 How to Run
1. Clone this repo
2. Install dependencies:
```
   npm install
```
3. Open Cypress Test Runner:
```
   npx cypress open
```
4. Choose a spec file (login.cy.js or product.cy.js) to run

# ❗ Note on (fetch) POST 401 errors
During test execution, you may see red 401s in the Cypress runner (e.g. events.backtrace.io) — these are not test failures, just unauthenticated analytics requests. You can safely ignore them.

# ✅ Test Credentials
Standard saucedemo's built-in demo account:
```
   Username: standard_user
   Password: secret_sauce
```
