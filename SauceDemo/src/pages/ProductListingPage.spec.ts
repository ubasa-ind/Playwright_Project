import {test, expect, type Page, type Browser} from '@playwright/test'
import { BasePage } from './basepage.spec';

// export class ProductListingPage extends BasePage {
//     constructor(page: Page) {
//         super(page);
//     }

    // get inventoryList() {
    //     return this.page.locator('[data-test="inventory-list"]');
    // }

    // productItem(name: string) {
    //     return this.page.locator('[data-test="inventory-list"]').locator(`[data-test="inventory-item"]:has-text("${name}")`).click();
    // }

    // async selectProductByName(name: string) {
    //     await this.productItem(name).click();
    // }

    // async addToCart(productName: string) {
    //     const addToCartButton = this.page.locator(`[data-test="inventory-item"]:has-text("${productName}") button:has-text("Add to cart")`);
    //     await addToCartButton.click();
    // }

//     SelectItem(name: string) {
//         return this.page.getByText('Sauce Labs Backpack').click();
//     }
// }


/******************************************************************************************************/

export class ProductListingPage_2 {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ---------------------------
  // Locators
  // ---------------------------
  productCard(productName: string) {
    return this.page.locator(".inventory_item").filter({
      has: this.page.locator(".inventory_item_name", { hasText: productName }),
    });
  }

  addToCartButton(productName: string) {
    return this.productCard(productName).locator("button[data-test*='add-to-cart']");
  }

  get cartBadge() {
    return this.page.locator(".shopping_cart_link");
  }

  // ---------------------------
  // Actions
  // ---------------------------

  /**
   * Adds a single product to the cart
   * by clicking the product from the listing page,
   * then clicking "Add to cart" on its detail page.
   */
  async addProductToCart(productName: string): Promise<void> {
    const product = this.productCard(productName);
    await expect(product).toHaveCount(1);
    
    await this.addToCartButton(productName).click();
    
    const cartCountElement = this.page.locator(".shopping_cart_badge");
    const cartCount = (await cartCountElement.isVisible()) ? await cartCountElement.textContent() : "0";
    console.log(`🛒 Added: ${productName} | Cart Count: ${cartCount}`);
  }

  /**
   * Adds multiple products by looping through the list.
   */
  async addMultipleProducts(productNames: string[]): Promise<void> {
    for (const productName of productNames) {
      await this.addProductToCart(productName);
    }
  }
}