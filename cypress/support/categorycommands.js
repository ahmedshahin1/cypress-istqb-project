Cypress.Commands.add('openCategoryFromNav', (categoryName) => {
  cy.get('[data-test="nav-categories"]').click();
  cy.contains(categoryName).click();
});

Cypress.Commands.add('verifyCategoryPageLoaded', () => {
  cy.get('.card').should('have.length.greaterThan', 0);
  cy.url().should('include', '/category');
});

Cypress.Commands.add('applyBrandFilter', (brandName) => {
  cy.contains(brandName).click();
});