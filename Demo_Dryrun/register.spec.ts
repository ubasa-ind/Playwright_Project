import{test, expect, type Browser, type Page} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test ('register_test', async() => {
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    const firstname = await page.locator('//input[@name="firstname"]');
    const lastname = await page.locator('//input[@name="lastname"]');
    const email = await page.locator('//input[@name="email"]');
    const telephone = await page.locator('//input[@name="telephone"]');
    const password = await page.locator('//input[@name="password"]');
    const confpassword = await page.locator('//input[@name="confirm"]');
    const checkbox = await page.getByRole('checkbox').click();
    const submit = await page.locator('//input[@type="submit"]');


    await firstname.fill('impact');
    await lastname.fill('running');
    await email.fill('impactsrunndfing@test.com');
    await telephone.fill('123456789');
    await password.fill('AcerLaptop');
    await confpassword.fill('AcerLaptop');
    await submit.click();

    await page.waitForTimeout(5000);

    const pagetitle = await page.title();
    console.log(pagetitle , 'is the title of the page');

    
    await page.screenshot({path: 'screenshot.png'});
    expect(pagetitle).toEqual('Your Account Has Been Created!');
    
    await page.waitForTimeout(10000);
    //verfity with the expect 

})