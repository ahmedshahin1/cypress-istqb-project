class ContactPage {

  visit() {

    cy.visit('/contact');

  }

  fillForm() {

    cy.get('[data-test="first-name"]')
      .type('Ahmed');

    cy.get('[data-test="last-name"]')
      .type('Test');

    cy.get('[data-test="email"]')
      .type('ahmed@test.com');

    cy.get('[data-test="subject"]')
      .select('Customer service');

    cy.get('[data-test="message"]')
      .type('Testing contact form');

  }

  submitForm() {

    cy.get('[data-test="contact-submit"]')
      .click();

  }

}

export default ContactPage;