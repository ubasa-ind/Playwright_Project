import { test, expect } from '@playwright/test'
import { request } from 'http';

// test('Authentication with API key', async ({ request }) => {

//     const putrequest = await request.put('https://restful-booker.herokuapp.com/booking/1', {
//         headers: {
//             Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='
//         },
//         data: {
//             "firstname": "Bond",
//             "lastname": "Black",
//             "totalprice": 1234,
//             "depositpaid": true,
//             "bookingdates": {
//                 "checkin": "2018-01-01",
//                 "checkout": "2019-01-01"
//             },
//             "additionalneeds": "Breakfast"
//         }
//     })

//     // const jsonresp = await putrequest.json();
//     // console.log(jsonresp);
//     expect(putrequest.status()).toEqual(200);
// })

let tokenvalue: string;
test.beforeAll('Basic Auth', async ({ request }) => {

    const tokenresp = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })

    tokenvalue = (await tokenresp.json()).token;
})

test("Authentication of put call using basic auth", async ({ request }) => {

    const response = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Cookie: "token=" + tokenvalue
        },
        data: {
            "firstname": "Bond",
            "lastname": "Black",
            "totalprice": 1234,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(response.status()).toBe(200);
})


test ("Authentication of dele call using basic auth", async({request})=>{
    const DeleReqe = await request.delete('https://restful-booker.herokuapp.com/booking/1',{
        headers:{
            Cookie: "token=" + tokenvalue
        }
    });
    expect(DeleReqe.status()).toBe(201);
}) 