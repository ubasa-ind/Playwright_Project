import {test, expect, type Browser, type Page} from '@playwright/test'
import { resolve } from 'path';
import {webkit, chromium, firefox} from 'playwright'

test ('mousehoveer', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page: Page = await browser.newPage();

    // await page.goto('https://www.spicejet.com/');
    // await page.getByText('Add-ons').first().hover();
    // await page.getByText('Extra Seat').first().click();

    await page.goto('https://www.goindigo.in/');

    await page.locator('//*[@id="logo-id"]/div[2]/nav/div[1]').click();
    await page.getByText('Group Bookings').first().click();
 


    await new Promise(resolve => setTimeout(resolve,5000))
})