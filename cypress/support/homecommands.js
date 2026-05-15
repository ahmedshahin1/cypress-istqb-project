Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
});

Cypress.Commands.add("verifyHomeLoaded", () => {
  cy.url().should('include', 'practicesoftwaretesting');
  cy.title().should('not.be.empty');
  cy.get('body').should('be.visible');
});

