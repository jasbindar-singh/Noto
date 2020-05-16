import React from 'react';
import { Icon } from '@iconify/react';
import bxUser from '@iconify/icons-bx/bx-user';


function AnonymousLogin() {
    console.log("AL logged!")
    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer bg-cteal-dark">
            <div className="mr-4"><Icon icon={bxUser} style={{color: '#fff', fontSize: '25px'}} /></div>
            <p>Use as Guest</p>
        </div> 
    )
}

export default AnonymousLogin
