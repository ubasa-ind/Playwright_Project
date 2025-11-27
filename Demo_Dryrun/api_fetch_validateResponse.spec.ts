import {test, expect} from '@playwright/test'
import { get } from 'http'

test ('Fetch & response validate', async({request}) => {

    const getresponse = await request.get('https://restful-booker.herokuapp.com/booking/1')
    const headervalue = getresponse.headers();
    console.log(headervalue);

    expect(headervalue.server).toEqual('Heroku');
    expect(headervalue['x-powered-by']).toBe("Express");

    console.log("************************************");

    const headersvalue = getresponse.headersArray();
    console.log(headersvalue);
    expect(headersvalue.length).toBe(10);
    headersvalue.forEach((header) => {
        console.log(header.name + "::" + header.value);
    });

})