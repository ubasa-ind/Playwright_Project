import { test, expect, type Browser, type Page } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
import { LoginPage } from '../SauceDemo/src/pages/login.spec';
// import { ProductListingPage } from '../SauceDemo/src/pages/ProductListingPage.spec';
import { ProductListingPage_2 } from '../SauceDemo/src/pages/ProductListingPage.spec';
// import { CartPage } from '../SauceDemo/src/pages/cartpage.spec';
import { AddtoCartPage } from '../SauceDemo/src/pages/addtocart.spec';


test.describe('Shopping Workflow', () => {
  test('user can search for a product and add to cart', async () => {
    const browser: Browser = await chromium.launch({ headless: true, channel: 'chrome' });
    const page: Page = await browser.newPage();
    
    // Navigate to SauceDemo and log in
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    console.log('Starting test...');

    await page.waitForTimeout(3000);
    
    const listingPage = new ProductListingPage_2(page);
    const addToCart = new AddtoCartPage(page);

    console.log('Selecting product...');
    await listingPage.addMultipleProducts([
      "Sauce Labs Backpack",
      "Sauce Labs Fleece Jacket"
    ]);
    console.log('Product selected');
    
    console.log('Navigating to cart...');
    await addToCart.ClickCartIcon();
    console.log('In cart page');
    await page.waitForTimeout(2000);
  

    console.log('Click on Checkout');
    await addToCart.Checkout();
    console.log('Checkout Clicked');
    await page.waitForTimeout(2000);

    console.log('Information Page');
    await addToCart.InfoUpdating();
    console.log('Information Updated');
    await page.waitForTimeout(2000);

    console.log('Click on Continue on Info Page');
    await addToCart.ContinueonInfoPage();
    console.log('Continue on Info Page Clicked');
    await page.waitForTimeout(2000);

    console.log('Click on Finish');
    await addToCart.Finish();
    console.log('Finish Clicked');
    await page.waitForTimeout(2000);

    console.log('Header Validation Check');
    await addToCart.CompleteHeader();
    console.log('Text is Validated correctly');
    await page.waitForTimeout(2000);

    console.log('Navigate Back to ProductsList Page');
    await addToCart.BackHome();
    console.log('ProductsList Navigation Succesful');
    await page.waitForTimeout(2000);

    console.log('Test completed successfully');

   // Wait 5 seconds to see the result
    await page.waitForTimeout(5000);
    
    await browser.close();
  });
});