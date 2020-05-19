import React from 'react'
import { Icon } from '@iconify/react';
import bxLoaderAlt from '@iconify/icons-bx/bx-loader-alt';

function MainLoader({size, className}) {
    return (
        <div className="flex items-center" style={{color: '#fff', fontSize:`${size}px`}}>
            N&nbsp;<Icon className={`loader ${className}`} icon={bxLoaderAlt} style={{display: "inline"}}/>&nbsp;
            T&nbsp;<Icon className={`loader ${className}`} icon={bxLoaderAlt} style={{display: "inline"}}/>
        </div>
    )
}

export default MainLoader
