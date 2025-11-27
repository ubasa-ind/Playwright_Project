import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test';

test ('auth_spec', async() => {

    const browser:Browser = await firefox.launch({headless: false});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

// FIRST METHOD

    const username = 'admin';
    const password = 'admin';
    const authHeader = 'Basic ' + btoa(username+':'+password);

    // await page.setExtraHTTPHeaders({'Authorization': authHeader});

    // await page.goto('https://the-internet.herokuapp.com/basic_auth');

////////////////////////////////////////////////////////////////////////////////
// 2ND WAY TO WORK WHICH WE USE THE FUNCTION METHOD WHICH IS UPDATED BELOW 
    await page.setExtraHTTPHeaders({'Authorization': createAuthHeader(username, password)}); 
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

////////////////////////////////////////////////////////////////////////////////

// 3RD METHOD which is hardcoded one 
//  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
// using the above method we can directly login to the page without any authentication
// but the above method is not recommended as it is not secure

    await page.waitForTimeout(5000);
})

//3rd METHOD WHICH WE CAN USE 
function createAuthHeader(username: any, password: any){
    return 'Basic ' + btoa(username+':'+password);
}