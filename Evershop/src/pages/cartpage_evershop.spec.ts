import { type Page, expect } from '@playwright/test';
import { BasePage_ES } from './basepage_evershop.spec';

export class GotoCartPage extends BasePage_ES{
    constructor(page: Page) {
        super(page);
    }

    async CartIcon() {
        console.log('Click Cart Icon');
        await this.page.locator('a[href="/cart"]').click();
        console.log('Clicked Cart Icon');
    }
}