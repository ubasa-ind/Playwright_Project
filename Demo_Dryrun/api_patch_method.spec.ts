import {test, expect} from '@playwright/test'

test ('patch_test', async({request})=>{
    const patchmeth = await request.patch('https://restful-booker.herokuapp.com/booking/1', {
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Dead",
            "lastname" : "Pool"
        }
    })

    const jsonpatch = await patchmeth.json();
    console.log(jsonpatch);
})