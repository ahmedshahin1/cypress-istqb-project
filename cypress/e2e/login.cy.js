import LoginPage from '../pages/LoginPage';

describe("Login Module", () => {

  const loginPage = new LoginPage();

  let data;

  before(() => {

    cy.fixture('data').then((fixture) => {
      data = fixture;
    });

  });

  beforeEach(() => {

    loginPage.visit();

  });

  // ✅ Test 1
  it("Login with valid credentials", () => {

    loginPage.enterEmail(data.validUser.email);

    loginPage.enterPassword(data.validUser.password);

    loginPage.clickLogin();

    loginPage.verifyLoginSuccess();

  });

  // ✅ Test 2
  it("Login with invalid credentials", () => {

    loginPage.enterEmail(data.invalidUser.email);

    loginPage.enterPassword(data.invalidUser.password);

    loginPage.clickLogin();

    loginPage.verifyLoginFailed();

  });

  // ✅ Test 3
  it("Login with empty fields", () => {

    loginPage.clickLogin();

    loginPage.verifyEmptyValidation();

    cy.url().should('include', 'login');

    cy.get('body').should('be.visible');

  });

});