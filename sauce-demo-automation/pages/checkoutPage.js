class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.confirmationMessage = '.complete-header';
    }
  
    async completePurchase() {
      await this.page.click('button[data-test="finish"]');
    }
  
    async getConfirmationMessage() {
      return await this.page.innerText(this.confirmationMessage);
    }
  }
  
  module.exports = CheckoutPage;
   