import {test, expect, type Browser, type Page} from '@playwright/test'

test('put_method', async({request})=>{
    const putrespo = await request.put("https://restful-booker.herokuapp.com/booking/1",{
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Black",
            "lastname" : "Panther",
            "totalprice" : 99272,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Bread Butter"
        }

    })

    const jsonres = await putrespo.json();
    console.log(jsonres);

    expect(putrespo.status()).toBe(200);
    expect(putrespo.statusText()).toBe("OK");
    expect(putrespo.ok()).toBe(true);
    expect(putrespo.ok()).toBeTruthy();
    expect(jsonres.firstname).toBe("Black");
    expect(jsonres).toMatchObject({
        firstname: 'Black',
        lastname: 'Panther',
        totalprice: 99272,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Bread Butter'
})

// the below GET call command is to check the updated details 
    const resGet = await request.get("https://restful-booker.herokuapp.com/booking/1");
    console.log(await resGet.json());
    expect(await resGet.json()).toMatchObject({
  firstname: 'Black',
  lastname: 'Panther',
  totalprice: 99272,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
  additionalneeds: 'Bread Butter'
})

})