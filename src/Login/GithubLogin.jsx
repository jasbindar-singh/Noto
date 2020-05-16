import React from 'react';
import { Icon } from '@iconify/react';
import bxlGithub from '@iconify/icons-bx/bxl-github';

function GithubLogin() {
    console.log("GHL logged!")
    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer" style={{backgroundColor: "#211F1F"}}>
            <div className="mr-4"><Icon icon={bxlGithub} style={{color: '#fff', fontSize: '25px'}} /></div>
            <p>Github</p>
        </div>
    )
}

export default GithubLogin
