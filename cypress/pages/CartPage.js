class CartPage {

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

  openFirstProduct() {

    cy.get('.card')
      .first()
      .click();

  }

  addToCart() {

    cy.contains('Add to cart')
      .should('be.visible')
      .click();

  }

  openCart() {

    cy.visit('/checkout');

  }

  verifyCartPage() {

    cy.url()
      .should('include', '/checkout');

    cy.get('body')
      .should('contain', 'Shopping cart');

    cy.get('body')
      .should('be.visible');

  }

  verifyProductExists() {

    cy.get('.product-title, .cart-item')
      .should('exist');

  }

  verifyPriceExists() {

    cy.get('.price')
      .should('exist');

  }

}

export default CartPage;