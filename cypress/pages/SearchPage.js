class SearchPage {

  visit() {

    cy.visit('/');

  }

  searchProduct(product) {

    cy.get('[data-test="search-query"]')
      .should('be.visible')
      .clear()
      .type(product);

    cy.get('[data-test="search-submit"]')
      .click();

  }

  verifyResults(product) {

    cy.get('.card')
      .should('exist');

    cy.get('body')
      .should('contain', product);

    cy.url()
      .should('not.be.empty');

  }

  verifyNoResults() {

    cy.get('body')
      .should('contain', 'There are no products found');

    cy.get('body')
      .should('be.visible');

    cy.url()
      .should('include', '/');

  }

}

export default SearchPage;