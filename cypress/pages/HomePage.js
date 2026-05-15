class HomePage {

  visit() {

    cy.visit('/');

  }

  verifyHomeLoaded() {

    cy.url()
      .should('include', 'practicesoftwaretesting');

    cy.title()
      .should('not.be.empty');

    cy.get('body')
      .should('be.visible');

  }

  verifyNavbar() {

    cy.get('nav')
      .should('be.visible');

    cy.get('[data-test="nav-home"]')
      .should('exist');

    cy.get('[data-test="nav-sign-in"]')
      .should('exist');

  }

  verifySearchBar() {

    cy.get('[data-test="search-query"]')
      .should('be.visible');

    cy.get('[data-test="search-submit"]')
      .should('exist');

    cy.get('body')
      .should('be.visible');

  }

}

export default HomePage;