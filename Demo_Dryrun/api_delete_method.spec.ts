import {test, expect} from '@playwright/test'
import { request } from 'http'

test ('Delete call for API', async({request}) => {
    const delecall = await request.delete('https://restful-booker.herokuapp.com/booking/1', {
        headers:{
            "Content-Type":"application/json",
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=" 
        }
    })
    expect (delecall.status()).toBe(201);
    const deltext = await delecall.text();

    console.log(deltext);
    expect (deltext).toBe('Created');

    const getdel = await request.get('https://restful-booker.herokuapp.com/booking/1');
    expect (getdel.status()).toBe(404);

    const getdeltext = await getdel.text();
    console.log(getdeltext);
    expect (getdeltext).toBe('Not Found');
})