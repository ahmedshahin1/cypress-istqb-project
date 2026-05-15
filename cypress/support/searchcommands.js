Cypress.Commands.add("searchProduct", (product) => {
  cy.intercept('GET', '**/products/search*').as('searchRequest');

  cy.get('[data-test="search-query"]').clear().type(product);
  cy.get('[data-test="search-submit"]').click();

  cy.wait('@searchRequest').its('response.statusCode').should('eq', 200);
});

Cypress.Commands.add("verifySearchResults", (product) => {
  cy.get('.card').should('exist');
  cy.get('.card').should('contain', product);
});

