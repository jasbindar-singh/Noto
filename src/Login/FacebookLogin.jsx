import React from 'react';
import { Icon } from '@iconify/react';
import bxlFacebookSquare from '@iconify/icons-bx/bxl-facebook-square';

function FacebookLogin() {
    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer" style={{backgroundColor: "#3b5998"}}>
            <div className="mr-4"><Icon icon={bxlFacebookSquare} style={{color: '#fff', fontSize: '25px'}} /></div>
            <p>Facebook</p>
        </div>
    )
}

export default FacebookLogin
