import HomePage from '../pages/HomePage';

describe("Home Module", () => {

  const homePage = new HomePage();

  beforeEach(() => {

    homePage.visit();

  });

  // TC4
  it("Verify homepage loads", () => {

    homePage.verifyHomeLoaded();

  });

  // TC5
  it("Verify navbar exists", () => {

    homePage.verifyNavbar();

  });

  // ✅ TC6
  it("Verify search bar exists", () => {

    homePage.verifySearchBar();

  });

});