import {test, expect, type Browser, type Page, type BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'
import fs from 'fs'
import path from 'path';
import { time } from 'console';

test ('fileupload', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();

    // const testPath = 'C:/Users/ubasa/OneDrive - Infor/Desktop/Hello World.txt';
    // console.log('Exists?', fs.existsSync(testPath));
    // console.log('Resolved path:', path.resolve(testPath))

    //single file upload
    await page.goto ('https://cgi-lib.berkeley.edu/ex/fup.html');
    await page.waitForTimeout(5000);
    await page.locator('input[name="upfile"]').setInputFiles('C:/Users/ubasa/OneDrive - Infor/Desktop/Hello World.txt');
    await page.waitForTimeout(5000);

    //upload file from buffer memory
    await page.locator('input[name="upfile"]').setInputFiles({
        name:'Hello Uday.txt',
        mimeType:'text/plain',
        buffer: Buffer.from('Hello Uday Tom & Jerry')
    })

//multiple file upload
    // await page.goto ('https://davidwalsh.name/demo/multiple-file-upload.php');
    // await page.waitForTimeout(5000);
    // await page.locator('input[name="filesToUpload"]').setInputFiles([
    //     path.join('C:/Users/ubasa/OneDrive - Infor/Desktop/Hello World.txt'),
    //     path.join('C:/Users/ubasa/OneDrive - Infor/Desktop/Testing Automation.txt')
    // ])
    // await page.waitForTimeout(4000);

//Deselect or Unselect a file 
    // await page.locator('input[name="filesToUpload"]').setInputFiles([]);


    await new Promise(resolve => setTimeout(resolve, 5000));
});