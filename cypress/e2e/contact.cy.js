import ContactPage from '../pages/ContactPage';

describe("Contact Module", () => {

  const contactPage = new ContactPage();

  beforeEach(() => {

    contactPage.visit();

  });

  // ✅ TC7
  it("Send contact form successfully", () => {

    contactPage.fillForm();

    contactPage.submitForm();

    cy.get('.alert')
      .should('exist');

    cy.get('body')
      .should('contain', 'Message');

    cy.url()
      .should('include', 'contact');

  });

  // ✅ TC8
  it("Submit empty form", () => {

    contactPage.submitForm();

    cy.get('input')
      .should('exist');

    cy.get('body')
      .should('be.visible');

    cy.url()
      .should('include', 'contact');

  });

  // ✅ TC9
  it("Verify contact page elements", () => {

    cy.get('[data-test="first-name"]')
      .should('be.visible');

    cy.get('[data-test="email"]')
      .should('be.visible');

    cy.get('[data-test="contact-submit"]')
      .should('exist');

  });

});