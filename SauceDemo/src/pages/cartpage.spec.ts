import { type Page, expect } from '@playwright/test';
import { BasePage } from './basepage.spec';

export class CartPage extends BasePage {
  private readonly checkoutButton = this.page.locator('button:has-text("Proceed to Checkout")');
  private readonly cartItem = (name: string) => this.page.locator(`.cart-item:has-text("${name}")`);

  constructor(page: Page) {
    super(page);
  }

  async navigateToCart() {
    await this.navigateTo('/cart');
  }

  async verifyItemInCart(productName: string) {
    await expect(this.cartItem(productName)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
