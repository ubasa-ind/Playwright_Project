import { type Page, expect } from '@playwright/test';
import { BasePage } from './basepage.spec';

export class AddtoCartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async ClickCartIcon() {
        console.log('Click on the Cart Icon');
        return this.page.locator('#shopping_cart_container').click();
    }

    async Checkout() {
        return this.page.locator('#checkout').click();
    }

    async InfoUpdating() {
        await this.page.locator('#first-name').fill('test');
        await this.page.locator('#last-name').fill('test_123');
        await this.page.locator('#postal-code').fill('5736872');
    }

    async ContinueonInfoPage() {
        await this.page.locator('#continue').click();
    }

    async CancelonInfoPage() {
        await this.page.locator('#cancel').click();
    }

    async Finish() {
        await this.page.locator('#finish').click();
    }

    async CompleteHeader() {
        await expect(this.page.locator('[data-test="complete-header"]')).toHaveText("Thank you for your order!");
    }

    async BackHome() {
        await this.page.locator('#back-to-products').click();
    }
}