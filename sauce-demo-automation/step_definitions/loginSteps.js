const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
//const LoginPage = require('../pages/loginPage');
const { chromium } = require('playwright');

const assert = require('assert');
const LoginPage = require('../pages/loginPage');  // Asegúrate de que la ruta sea correcta
const loginPageInstance = new LoginPage(page);
let page;
let browser;

Given('Estoy en la página de inicio de sesión', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  
  await loginPageInstance.navigate();
});

When('I enter {string} and {string}', async function (username, password) {
  await loginPageInstance.login(username, password);
});

Then('Debería ser redirigido a la página de productos', async function () {
  const result = await loginPageInstance.isOnProductPage();
  expect(result).to.be.true;
});

Then('Debería ver un mensaje de error', async function () {
  const result = await loginPageInstance.isErrorDisplayed();
  expect(result).to.be.true;
});


