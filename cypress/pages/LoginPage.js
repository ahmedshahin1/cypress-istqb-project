class LoginPage {

  visit() {
    cy.visit('/auth/login');
  }

  enterEmail(email) {
    cy.get('[data-test="email"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(email);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]')
      .should('be.visible')
      .clear()
      .type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-submit"]')
      .should('be.visible')
      .click();
  }

  verifyLoginSuccess() {

    // successful login changes url
    cy.url().should('not.include', '/auth/login');

    cy.get('body').should('be.visible');

    cy.get('body').should('not.be.empty');
  }

  verifyLoginFailed() {

    cy.get('.alert, .error')
      .should('exist');

    cy.url().should('include', 'login');
  }

  verifyEmptyValidation() {

    cy.get('[data-test="email"]')
      .should('have.class', 'is-invalid');

    cy.get('[data-test="password"]')
      .should('have.class', 'is-invalid');
  }

}

export default LoginPage;