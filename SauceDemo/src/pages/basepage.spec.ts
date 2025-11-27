import { type Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(`https://www.saucedemo.com${url}`);
  }

  async verifyPageTitle(title: string) {
    await expect(this.page).toHaveTitle('Swag Labs');
  }
}