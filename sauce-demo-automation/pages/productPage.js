class ProductPage {
    constructor(page) {
      this.page = page;
      this.productButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
      this.cartButton = 'a.shopping_cart_link';
    }
  
    async addProductToCart() {
      await this.page.click(this.productButton);
    }
  
    async goToCart() {
      await this.page.click(this.cartButton);
    }
  }
  
  module.exports = ProductPage;
  