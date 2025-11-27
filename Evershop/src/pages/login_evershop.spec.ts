import { type Page, expect } from '@playwright/test';
import { BasePage_ES } from "./basepage_evershop.spec";

export class LoginButton extends BasePage_ES{
    constructor (page: Page){
        super(page);
    }

    async LoginIcon(){
        console.log('Click Login Icon');
        await this.page.locator('a[href="/account/login"]').click()
        console.log('Clicked Login Icon');
    }

    async Email_Input(){
        console.log('Update the Info in Email');
        await this.page.getByPlaceholder('Email').fill('XXXXXXXXXXXXXXXXX');
        console.log('Updated the Info in Email');
    }

    async Pasword_Input(){
        console.log('Update the Info in Password');
        await this.page.getByPlaceholder('Password').fill('XXXXXXXXXXXXXXXXX');
        console.log('Updated the Info in Password');
    }   

    async Signin(){
        console.log('Click on Singin');
        await this.page.locator('//button[@type="submit"]').click();
        console.log('Clicked on Singin');
    } 
}