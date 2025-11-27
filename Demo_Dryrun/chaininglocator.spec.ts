import {test, expect, type Page, type Browser, type BrowserContext} from '@playwright/test'
import { channel } from 'diagnostics_channel'
import { resolve } from 'path';
import {webkit, chromium, firefox} from 'playwright'

test ('chaininglocators', async()=>{

    const browser: Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://orangehrm.com/en/30-day-free-trial');
    await page.getByRole('button', {name:'Close banner'}).click();

    // This is one method to use by chaining selectors
    // await page.locator('form#Form_getForm >> #Form_getForm_Email_Holder').fill('Testing');
    // await page.locator('form#Form_getForm >> #Form_getForm_Contact_Holder').fill('123456789');

    // The below method is used by chaining locators
    const fullpage = page.locator('form#Form_getForm');
    const telephone = page.getByRole('textbox', {name:'Phone Number*'}); 

    await fullpage.locator(telephone).fill('125678');

    // await new Promise(resolve => setTimeout(resolve, 5000));
    await page.waitForTimeout(10000);
})