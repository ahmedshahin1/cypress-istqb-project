Cypress.Commands.add('navigateToContact', () => {
  cy.get('[data-test="nav-contact"]').click();
});

Cypress.Commands.add('fillContactForm', (contact) => {
  cy.get('[data-test="first-name"]').clear().type(contact.firstName);
  cy.get('[data-test="last-name"]').clear().type(contact.lastName);
  cy.get('[data-test="email"]').clear().type(contact.email);
  cy.get('[data-test="subject"]').select(contact.subject);
  cy.get('[data-test="message"]').clear().type(contact.message);
});

Cypress.Commands.add('submitContactForm', () => {
  cy.get('[data-test="contact-submit"]').click();
});

Cypress.Commands.add('verifyContactSuccess', () => {
  cy.get('[data-test="contact-success"], .alert-success')
    .should('be.visible')
    .and('not.be.empty');
});