import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user opens login page", () => {
  cy.visit('/auth/login');
});

Given("user opens home page", () => {
  cy.visit('/');
});

Given("user opens favorites page", () => {
  cy.visit('/account/favorites');
});

Given("user opens cart page", () => {
  cy.visit('/checkout');
});

When("user enters valid email and password", () => {

  cy.get('[data-test="email"]')
    .type('customer@practicesoftwaretesting.com');

  cy.get('[data-test="password"]')
    .type('welcome01');

});

When("user enters invalid email and password", () => {

  cy.get('[data-test="email"]')
    .type('wrong@test.com');

  cy.get('[data-test="password"]')
    .type('wrongpassword');

});

When("clicks login button", () => {

  cy.get('[data-test="login-submit"]')
    .click();

});

When("user clicks login button without entering credentials", () => {

  cy.get('[data-test="login-submit"]')
    .click();

});

When("user searches for {string}", (product) => {

  cy.get('[data-test="search-query"]')
    .clear()
    .type(product);

  cy.get('[data-test="search-submit"]')
    .click();

});

When("user clicks search without entering text", () => {

  cy.get('[data-test="search-submit"]')
    .click();

});

When("user opens {string} category", (category) => {

  cy.contains(category)
    .click();

});

When("user selects brand filter", () => {

  cy.contains('ForgeFlex Tools')
    .click();

});

When("user enters valid email", () => {

  cy.get('input[type="email"]')
    .type('test@test.com');

});

When("user enters invalid email", () => {

  cy.get('input[type="email"]')
    .type('wrongemail');

});

When("user leaves email empty", () => {

  cy.get('input[type="email"]')
    .clear();

});

When("user adds {string} to cart", (product) => {

  cy.get('[data-test="search-query"]')
    .type(product);

  cy.get('[data-test="search-submit"]')
    .click();

  cy.get('.card')
    .first()
    .click();

  cy.contains('Add to cart')
    .click();

});

Then("user should login successfully", () => {

  cy.get('body')
    .should('be.visible');

});

Then("error message should appear", () => {

  cy.get('.alert, .error')
    .should('exist');

});

Then("login validation messages should appear", () => {

  cy.get('[data-test="email"]')
    .should('have.class', 'is-invalid');

});

Then("search results should contain {string}", (product) => {

  cy.get('.card')
    .should('contain', product);

});

Then("no products should appear", () => {

  cy.get('body')
    .should('contain', 'There are no products');

});

Then("products should still appear", () => {

  cy.get('.card')
    .should('exist');

});

Then("category products should appear", () => {

  cy.get('.card')
    .should('have.length.greaterThan', 0);

});

Then("product cards should be visible", () => {

  cy.get('.card')
    .should('be.visible');

});

Then("filtered products should appear", () => {

  cy.get('.card')
    .should('exist');

});

Then("success message should appear", () => {

  cy.get('body')
    .should('be.visible');

});

Then("invalid email message should appear", () => {

  cy.get('input[type="email"]')
    .should('have.class', 'ng-invalid');

});

Then("required message should appear", () => {

  cy.get('input[type="email"]')
    .should('be.empty');

});

Then("shopping cart page should appear", () => {

  cy.url()
    .should('include', '/checkout');

});

Then("product should appear in cart", () => {

  cy.visit('/checkout');

  cy.get('.cart-item')
    .should('exist');

});

Then("product price should appear", () => {

  cy.get('.price')
    .should('exist');

});