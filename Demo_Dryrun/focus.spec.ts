import {test, expect, type Page, type Browser, type BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test ('focuselement', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://orangehrm.com/en/30-day-free-trial');
    const fullname = await page.locator('#Form_getForm_Name');
    await fullname.focus();
    await fullname.pressSequentially('Manikonda Model',{delay:200});
    await page.waitForTimeout(4000);
})