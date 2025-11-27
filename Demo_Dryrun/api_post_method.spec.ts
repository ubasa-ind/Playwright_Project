import {test, expect, type Browser, type Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test ('api post method', async({request}) => {

    const postrespo = await request.post("https://restful-booker.herokuapp.com/booking",{
        data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    })
    const jsonresp = await postrespo.json();
    console.log(jsonresp);
    expect(postrespo.status()).toBe(200); //assertions are good for validaton and use wherever required
    expect(postrespo.statusText()).toBe("OK");
//     expect(jsonresp.booking).toMatchObject({
//     firstname: 'Jim',
//     lastname: 'Brown',
//     totalprice: 111,
//     depositpaid: true,
//     bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
//     additionalneeds: 'Breakfast'
//   });
    expect(jsonresp.booking.additionalneeds).toEqual("Breakfast");
})


test ('post_ui_validation', async({request})=>{
    const ui_vali = await request.post("https://api.demoblaze.com/addtocart",{
        data: {"id":"8d1969fc-ca70-3e79-1b50-92172c27d081","cookie":"user=398a2471-f832-2860-9e68-cb3262da3a91","prod_id":3,"flag":false}
    })

    expect(ui_vali.status()).toBe(200);
    expect(ui_vali.statusText()).toBe("OK");

})


test ('ui_practice', async({request, page})=>{
    // const browser: Browser = await chromium.launch({headless:false, channel: 'chrome'});
    // const page: Page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');
    const login = await page.locator('#login2').click();
    const uername = await page.locator('#loginusername').fill('wishinfinite');
    const password = await page.locator('#loginpassword').fill('wishinfinite');
    const loginbtn = await page.locator('button[onclick="logIn()"]').click();
    const phone = await page.locator('a.hrefch[href="prod.html?idp_=3"]').click();
    const ui_vali = await request.post("https://api.demoblaze.com/addtocart",{
        data: {"id":"8d1969fc-ca70-3e79-1b50-92172c27d081","cookie":"user=398a2471-f832-2860-9e68-cb3262da3a91","prod_id":3,"flag":false}
    })

    const cart = await page.getByText('Cart').click();
    await page.reload();
    await page.waitForTimeout(10000);
    expect(ui_vali.status()).toBe(200);
    expect(ui_vali.statusText()).toBe("OK");

})