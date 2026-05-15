import CartPage from '../pages/CartPage';

describe("Cart Module", () => {

  const cartPage = new CartPage();

  beforeEach(() => {

    cartPage.visit();

  });

  // ✅ TC1
  it("Open cart page", () => {

    cartPage.openCart();

    cartPage.verifyCartPage();

  });

  // ✅ TC2
  it("Add product to cart", () => {

    cartPage.searchProduct('Pliers');

    cartPage.openFirstProduct();

    cartPage.addToCart();

    cartPage.openCart();

    cartPage.verifyProductExists();

    cartPage.verifyCartPage();

  });

  // ✅ TC3
  it("Verify product price inside cart", () => {

    cartPage.searchProduct('Pliers');

    cartPage.openFirstProduct();

    cartPage.addToCart();
git remote remove origin
    cartPage.openCart();

    cartPage.verifyPriceExists();

    cartPage.verifyCartPage();

  });

});