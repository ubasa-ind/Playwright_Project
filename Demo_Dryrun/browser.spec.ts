//pwtest@opencart.com
//playwright@123

//impactrunning@test.com
//AcerLaptop


import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test ('Browser', async() => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    
    //browsercontext1
    const browsercontext1:BrowserContext = await browser.newContext();
    const page1:Page = await browsercontext1.newPage();
    
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    const emailId = await page1.locator('#input-email')
    const password = await page1.locator('#input-password')
    const submit = await page1.locator('[value="Login"]')

    await emailId.fill('pwtest@opencart.com');
    await password.fill('playwright@123');
    await submit.click();

    //browsercontext2
    const browsercontext_2:BrowserContext = await browser.newContext();
    const page2:Page = await browsercontext_2.newPage();

    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    const emailId1 = await page2.locator('#input-email')
    const password1 = await page2.locator('#input-password')
    const submit1 = await page2.locator('[value="Login"]')

    await emailId1.fill('impactrunning@test.com');
    await password1.fill('AcerLaptop');
    await submit1.click();

    await page.waitForTimeout(5000);

    await browsercontext1.close();
    await browsercontext_2.close();
    await browser.close();

});