import {type Page, expect} from '@playwright/test'
import { BasePage_ES } from './basepage_evershop.spec'
import { LoginButton } from './login_evershop.spec';

export class CreateAccount extends BasePage_ES {
    constructor (page: Page){
        super (page);
    }

    async LoginIcon(){
        console.log('Click Login Icon');
        await this.page.locator('a[href="/account/login"]').click();
        console.log('Clicked Login Icon');
    }

    async CreateAccount(){
        console.log('Click On CreateAccount');
        await this.page.locator('a[href="/account/register"]').click();
        console.log('Clicked On CreateAccount');
    }

    async FullName(){
        console.log('Update FullName');
        await this.page.getByPlaceholder('Full Name').fill('Test Name');
        console.log('FullName Updated');
    }

    async Email(){
        console.log('Update Email');
        await this.page.getByPlaceholder('Email').fill('tiger_12323@mailing.com');
        console.log('Email Updated');
    }

    async Password(){
        console.log('Update Password');
        await this.page.getByPlaceholder('Password').fill('Testing@123');
        console.log('Password Updated');

    }

    async SingUp(){
        console.log('Update Password');
        await this.page.locator("//button[@type='submit']").click();
        console.log('Password Updated');

    }

}