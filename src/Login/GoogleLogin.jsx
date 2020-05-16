import React from 'react';
import { Icon } from '@iconify/react';
import bxlGoogle from '@iconify/icons-bx/bxl-google';

function GoogleLogin() {
    console.log("GOL logged!")
    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer" style={{backgroundColor: "#dd4b39"}}>
            <div className="mr-4"><Icon icon={bxlGoogle} style={{color: '#fff', fontSize: '25px'}} /></div>
            <p>Google</p>
        </div>
    )
}

export default GoogleLogin
