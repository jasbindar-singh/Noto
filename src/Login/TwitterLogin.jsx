import React from 'react';
import { Icon } from '@iconify/react';
import bxlTwitter from '@iconify/icons-bx/bxl-twitter';

function TwitterLogin() {
    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer" style={{backgroundColor: "#00aced"}}>
            <div className="mr-4"><Icon icon={bxlTwitter} style={{color: '#fff', fontSize: '25px'}} /></div>
            <p>Twitter</p>
        </div> 
    )
}

export default TwitterLogin
