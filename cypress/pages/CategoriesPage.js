class CategoriesPage {

  visitHome() {

    cy.visit('/');

  }

  openCategoriesMenu() {

    cy.get('[data-test="nav-categories"]')
      .should('be.visible')
      .click();

  }

  selectCategory(categoryName) {

    cy.contains(categoryName)
      .should('be.visible')
      .click();

  }

  verifyCategoryPage() {

    cy.url().should('include', '/category');

    cy.get('.card')
      .should('exist');

    cy.get('body')
      .should('be.visible');

  }

  verifyProductsExist() {

    cy.get('.card')
      .its('length')
      .should('be.greaterThan', 0);

  }

  verifyFirstProductDetails() {

    cy.get('.card')
      .first()
      .within(() => {

        cy.get('img')
          .should('be.visible');

        cy.get('.card-title, h5')
          .should('exist');

        cy.get('.card-footer, .price')
          .should('exist');

      });

  }

  applyBrandFilter(brandName) {

    cy.contains(brandName)
      .scrollIntoView()
      .should('be.visible')
      .click();

  }

  verifyFilterResults() {

    cy.get('.card')
      .should('exist');

    cy.url()
      .should('include', '/category');

    cy.get('body')
      .should('be.visible');

  }

}

export default CategoriesPage;