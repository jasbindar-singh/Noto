import React from 'react';
import { Icon } from '@iconify/react';
import bxLoaderAlt from '@iconify/icons-bx/bx-loader-alt';

function Loader({size, className}) {
    return (
        <Icon className={`loader ${className}`} icon={bxLoaderAlt} style={{color: '#fff', fontSize: `${size}px`}} />
    )
}

export default Loader
