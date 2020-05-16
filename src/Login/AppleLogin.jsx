import React from 'react';
import { Icon } from '@iconify/react';
import bxlApple from '@iconify/icons-bx/bxl-apple';

function AppleLogin() {
    console.log("ApL logged!")
    return (
        <div className="w-full px-8 py-2 rounded text-black flex my-8 cursor-pointer" style={{backgroundColor: "#ffffff"}}>
            <div className="mr-4"><Icon icon={bxlApple} style={{color: '#000', fontSize: '25px'}} /></div>
            <p>Apple ID</p>
        </div>
    )
}

export default AppleLogin
