import {test, expect, type Browser, type Page} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

test ('mouseclick', async()=>{

        const browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
        const page: Page = await browser.newPage();
        // await page.goto('https://demo.guru99.com/test/simple_context_menu');
        
        // //double click 
        // await page.getByText('Double-Click Me To See Alert').dblclick();

        // //right click 
        // await page.getByText('right click me').click({button:'right'});


        await page.goto('https://the-internet.herokuapp.com/shifting_content');

        //shift click
        await page.getByText('Example 1: Menu Element').click({modifiers:["Shift"]});
        await page.waitForTimeout(2000);

        // mouse hover
        await page.goto('https://www.spicejet.com/');
        await page.getByText('Add-ons').first().hover();
        await page.getByText('Extra Seat').first().click();
        
        await new Promise(resolve => setTimeout(resolve, 5000));

})