import SearchPage from '../pages/SearchPage';

describe("Search Module", () => {

  const searchPage = new SearchPage();

  let data;

  before(() => {

    cy.fixture('data').then((fixture) => {

      data = fixture;

    });

  });

  beforeEach(() => {

    searchPage.visit();

  });

  // ✅ TC1
  it("Search for valid product", () => {

    searchPage.searchProduct(data.search.validTerm);

    searchPage.verifyResults(data.search.validTerm);

  });

  // ✅ TC2
  it("Search using partial name", () => {

    searchPage.searchProduct(data.search.partialTerm);

    cy.get('.card')
      .should('exist');

    cy.get('body')
      .should('be.visible');

    cy.url()
      .should('not.be.empty');

  });

  // ✅ TC3
  it("Search invalid product", () => {

    searchPage.searchProduct(data.search.invalidTerm);

    searchPage.verifyNoResults();

  });

});