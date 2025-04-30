import LoginPage from "../pages/loginPage";

describe("Login Test", () => {
  it("Should show error on wrong credentials", () => {
    LoginPage.visit();
    cy.wait(1000);

    LoginPage.fillUsername("wrong_user");
    cy.wait(1000);

    LoginPage.fillPassword("wrong_pass");
    cy.wait(1000);

    LoginPage.submit();
    cy.wait(1000);

    LoginPage.getError().should(
      "contain",
      "Username and password do not match"
    );
    cy.wait(1000);
  });

  it("Should login successfully", () => {
    cy.login("standard_user", "secret_sauce");
    cy.wait(1000);

    cy.url().should("include", "/inventory.html");
    cy.wait(1000);
  });

  it("Should login and then logout successfully", () => {
    cy.login("standard_user", "secret_sauce");
    cy.wait(1000);

    cy.url().should("include", "/inventory.html");
    cy.wait(1000);

    cy.logout();
    cy.wait(1000);

    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.wait(1000);
  });
});
