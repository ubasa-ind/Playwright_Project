import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import { channel } from 'diagnostics_channel'
import {webkit, chromium, firefox} from 'playwright'

test('rolelocator', async() => {

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('heading', {name:'Register Account'}).isVisible();
    await page.getByRole('link', {name: 'Wish List'});
    await page.getByRole('checkbox').click();
    await page.getByRole('button', {name: 'Continue'}).click();

    await new Promise(resolve => setTimeout(resolve, 5000));

})
