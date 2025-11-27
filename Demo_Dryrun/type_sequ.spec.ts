import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox } from '@playwright/test'

test ('type_sequence', async() => {

    const browser: Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto('https://www.flipkart.com/');
    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially('motorola', {delay:200});
    
    await page.waitForTimeout(3000);
})