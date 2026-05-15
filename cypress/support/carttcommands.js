Cypress.Commands.add("openCart", () => {
  cy.get('[data-test="nav-cart"]').click();
  cy.url().should('include', '/checkout'); 
  cy.get('body').should('contain', 'Shopping cart');
});

Cypress.Commands.add("addProductToCart", (productName) => {
  cy.get('[data-test="search-query"]').clear().type(productName);
  cy.get('[data-test="search-submit"]').click();

  cy.get('.card').should('exist');

  cy.get('.card').contains(productName).click();

  cy.intercept('POST', '**/carts/**').as('addToCart');
  cy.contains('Add to cart').click();
  cy.wait('@addToCart').its('response.statusCode').should('eq', 200);
});