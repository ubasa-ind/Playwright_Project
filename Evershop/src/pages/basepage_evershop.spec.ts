import { type Page, expect } from '@playwright/test';

export class BasePage_ES {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(`https://demo.evershop.io/${url}`);
  }

  async verifyPageTitle(title: string) {
    await expect(this.page.getByRole("heading", { name: "Your Heading Here" })).toBeVisible();
  }

}