import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test ('locator test', async() => {
    
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1. Locator using ID
    const firstname = page.locator('id=input-firstname');
    const lastname = page.locator('id=input-lastname');

    await firstname.fill('test');
    await lastname.fill('testing');
        
    //2. Locator using class name (for class name we are supposed to use '.' before the element like below)
    const logo = page.locator('.img-responsive');
    const logoExist = await logo.isEnabled();
    console.log(logoExist);

    //3. Locator using text
    const header = page.locator('text=Your Personal Details');
    const headertext = await header.isEnabled();
    console.log(headertext);

    //4. Locator using CSS path (it is not mandatory to use 'css=')
    const email = page.locator('css=input[id="input-email"]');
    const telephone = page.locator('input[name="telephone"]');
    const privacy = page.locator('input[type="checkbox"]');

    await email.fill('tiger@eshe.com');
    await telephone.fill('1234567890');
    await privacy.check();

    //5. Locator using xpath (it is not mandatory to use 'xpath=')
    const password = page.locator('xpath=//input[@id="input-password"]')
    const confPassword = page.locator('xpath=//input[@id="input-confirm"]')

    await password.fill('password');
    await confPassword.fill('password');

    await new Promise(resolve => setTimeout(resolve, 5000));
})