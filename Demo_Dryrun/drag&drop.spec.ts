import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox } from '@playwright/test'

test ('drag_drop', async() => {
  
    const browser: Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    //single commands
    // await page.locator("#draggable").dragTo(page.locator("#droppable"));
    

    //multiple commands
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();


    await new Promise(resolve => setTimeout(resolve, 5000));
})