const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

Given('I am on the product page', async function () {
  await ProductPage.navigate(page);
});

When('I add a product to the cart', async function () {
  await ProductPage.addProductToCart(page);
});

Then('the product should appear in the cart', async function () {
  await ProductPage.goToCart(page);
  // Assuming you have methods to verify the cart content
});

Given('I have products in my cart', async function () {
  await ProductPage.addProductToCart(page);
});

When('I proceed to checkout', async function () {
  await CartPage.proceedToCheckout(page);
});

Then('I should see the confirmation page', async function () {
  const confirmationMessage = await CheckoutPage.getConfirmationMessage(page);
  expect(confirmationMessage).to.include('THANK YOU FOR YOUR ORDER');
});

