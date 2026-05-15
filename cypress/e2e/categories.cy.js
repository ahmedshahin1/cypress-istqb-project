import CategoriesPage from '../pages/CategoriesPage';

describe("Categories Module", () => {

  const categoriesPage = new CategoriesPage();

  let data;

  before(() => {

    cy.fixture('data').then((fixture) => {

      data = fixture;

    });

  });

  beforeEach(() => {

    categoriesPage.visitHome();

  });

  // ✅ Test 13
  it("Open Hand Tools category", () => {

    categoriesPage.openCategoriesMenu();

    categoriesPage.selectCategory(data.filter.category);

    categoriesPage.verifyCategoryPage();

  });

  // ✅ Test 14
  it("Verify products inside category", () => {

    categoriesPage.openCategoriesMenu();

    categoriesPage.selectCategory(data.filter.category);

    categoriesPage.verifyProductsExist();

    categoriesPage.verifyFirstProductDetails();

  });

  // ✅ Test 15
  it("Filter products by brand", () => {

    categoriesPage.openCategoriesMenu();

    categoriesPage.selectCategory(data.filter.category);

    categoriesPage.applyBrandFilter(data.filter.brand);

    categoriesPage.verifyFilterResults();

  });

});