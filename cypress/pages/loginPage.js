class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    fillUsername(username) {
      cy.get('[data-test="username"]').type(username);
    }
  
    fillPassword(password) {
      cy.get('[data-test="password"]').type(password);
    }
  
    submit() {
      cy.get('[data-test="login-button"]').click();
    }
  
    getError() {
      return cy.get('[data-test="error"]');
    }
  }
  
  export default new LoginPage();
  