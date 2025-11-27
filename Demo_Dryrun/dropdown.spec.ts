import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test ('select based dropdown', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://www.automationtesting.co.uk/dropdown.html#');

    const carlist = 'select[id="cars"]';
    // await page.selectOption(carlist, {value:'ford'});
    // await page.selectOption(carlist, {label:'Honda'});
    // await page.selectOption(carlist, {index: 7});

    //To print or find all the elements or values from the dropdown
    // $ to select single(1) element & $$ is used to select multiple elements 
    // select#cars > option
    // '> option' is given by playwright for find the elements within 
    const alloptions = await page.$$(carlist + '> option');
    console.log(alloptions.length); //this is used to find no.of element within the dropdown

    //to print all the elements from the dropdown
    for (const el of alloptions){
        const text = await el.textContent();
        console.log(text);
            if (text === 'Honda'){ //by this method also we can select a element from the list
            await page.selectOption(carlist, {label:'Honda'});
            break;
        }
    }

    await new Promise(resolve => setTimeout(resolve, 5000));

})