import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxX from '@iconify/icons-bx/bx-x';

function Navbar() {

    console.log("Navbar logged!")

    const [isOpen, setIsOpen] = useState(false);

    function open(){
        setIsOpen(true)
    }

    function close(){
        setIsOpen(false)
    }

    function handleClick(){
        if(isOpen)
            close()
        else
            open()
    }

    return (
        <div className="px-8 lg:px-20 bg-cpurple-light text-white overflow-hidden nav" style={isOpen ? {height: "auto"} : {height: "53px"}}>
            <div className="flex justify-between items-center w-auto hide">
                <div className="px-2 py-1 text-3xl cursor-pointer" style={{letterSpacing: "10px"}}>NOTO</div>
                <Icon icon={isOpen ? bxX : bxMenu} style={{color: '#fff', fontSize: '30px'}} onClick={handleClick}/>
            </div>
            <div className="px-2 py-1 text-3xl cursor-pointer show" style={{letterSpacing: "10px"}}>NOTO</div>
            <ul className="flex justify-around">
                <li className="px-4 py-2 cursor-pointer">Notes</li>
                <li className="px-4 py-2 cursor-pointer">About</li>
                <li className="px-4 py-2 cursor-pointer">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
