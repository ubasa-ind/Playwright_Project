import {test, expect, type Page, type Browser} from '@playwright/test'
import { BasePage } from './basepage.spec';
import {webkit, chromium, firefox} from '@playwright/test'

// test ('login_test', async() => {
//     const browser:Browser = await chromium.launch({headless:false});
//     const page:Page = await browser.newPage();
//     const url = await page.goto('https://www.saucedemo.com/');
//     const username = await page.locator('#user-name').fill('standard_user');
//     const password = await page.locator('#password').fill('secret_sauce');
//     const lgn_button = await page.locator('#login-button').click();
// })

/******************************************************************************************************/

export class LoginPage extends BasePage {
  private readonly username = this.page.locator('#user-name');
  private readonly password = this.page.locator('#password');
  private readonly loginButton = this.page.locator('#login-button');
  private readonly errorMessage = this.page.locator('.error-message');

  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password: string) {
    // await this.navigateTo('/login');
    await this.username.fill('standard_user');
    await this.password.fill('secret_sauce');
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }

  async verifyLoginFailure(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Incorrect URL');
  }
}