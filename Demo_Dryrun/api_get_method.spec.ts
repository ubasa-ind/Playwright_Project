import {test} from '@playwright/test'

// there are number of different methods to use the GET METHOD

test ('api testing', async({request})=>{

    const response_call = await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(await response_call.json());

})