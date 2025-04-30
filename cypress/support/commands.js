// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').type(username, { delay: 100 });
  cy.get('[data-test="password"]').type(password, { delay: 100 });
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.wait(500); // wait for menu animation
  cy.get("#logout_sidebar_link").click();
});

Cypress.Commands.add("addToCart", (productName) => {
  cy.contains(".inventory_item", productName).find("button").click();
});
