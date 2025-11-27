
import {test, expect, type Browser, type Page} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test ('login_test', async() => {
    const browser:Browser = await chromium.launch({headless:false})
    const page:Page = await browser.newPage()
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    const emailId = await page.locator('#input-email')
    const password = await page.locator('#input-password')
    const submit = await page.locator('[value="Login"]')

    await emailId.fill('pwtest@opencart.com');
    await password.fill('playwright@123');
    await submit.click();
    
    const pagetitle = await page.title();
    console.log(pagetitle , 'is the title of the page');

    await page.screenshot({path: 'screenshot.png'});
    expect(pagetitle).toEqual('My Account');
    await browser.close()
});