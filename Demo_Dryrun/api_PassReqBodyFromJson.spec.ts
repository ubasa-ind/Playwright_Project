import {test, expect} from '@playwright/test'
import { request } from 'http';
// import json_file from "../test-results/apidata_1.json"

test ('API Testing - Pass Request body from JSON for Post Call', async({request}) => {
    const postcall = await request.post('https://restful-booker.herokuapp.com/booking', {
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

    const postjson = await postcall.json()
    expect (postjson.booking).toMatchObject({
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
});

    expect(postjson.booking.additionalneeds).toEqual("Breakfast");
})


test ('API Testing - Pass Request body from JSON for PUT Call', async({request})=> {
    const putcall = await request.put('https://restful-booker.herokuapp.com/booking/1', {
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "DeadPool",
            "lastname" : "Black",
            "totalprice" : 1234,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
            "additionalneeds" : "Breakfast"
}
    })

    const putjson = await putcall.json()
    expect(putjson.firstname).toEqual("DeadPool")

})