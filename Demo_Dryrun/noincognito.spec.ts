import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test';
import type { resolve } from 'path';
import {webkit, chromium, firefox} from 'playwright';

test ('No Incognito test', async()=>{
    // const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});

    //launchPersistentContext this is used to open the browser in normal other than Incognito mode
    const browser: BrowserContext = await chromium.launchPersistentContext('', {headless:false, channel:'chrome'});
    // the below commands are used to avoid the extra tab which opens when we use 'launchPersistentContext'
    const pages = browser.pages();
    const page: Page = pages[0]!;

    // const page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await new Promise(resolve => setTimeout(resolve, 5000));

})