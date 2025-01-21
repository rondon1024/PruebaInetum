const { chromium } = require('playwright');


class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = 'input[id="user-name"]';
    this.passwordField = 'input[id="password"]';
    this.loginButton = 'input[id="login-button"]';
    this.errorMessage = '.error-message-container';
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async isErrorDisplayed() {
    return await this.page.isVisible(this.errorMessage);
  }

  async isOnProductPage() {
    return this.page.url().includes('inventory.html');
  }
}

module.exports = LoginPage;
