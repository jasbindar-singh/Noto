import React, {useState, useContext} from 'react'
import { Icon } from '@iconify/react';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxX from '@iconify/icons-bx/bx-x';
import { auth } from '../configs/firebase';
import { AuthContext } from '../App';

function Navbar() {

    console.log("Navbar logged!")

    const [isOpen, setIsOpen] = useState(false);

    const {currentUser} = useContext(AuthContext);

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

    function handleLogout(){
        auth
        .signOut()
        .catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className="px-8 lg:px-20 bg-cpurple-light text-white overflow-hidden nav" style={isOpen ? {height: "auto"} : {height: "53px"}}>
            <div className="flex justify-between items-center w-auto hide">
                <a className="px-2 py-1 text-3xl cursor-pointer" href="/" style={{letterSpacing: "10px"}}>NOTO</a>
                <Icon icon={isOpen ? bxX : bxMenu} style={{color: '#fff', fontSize: '30px'}} onClick={handleClick}/>
            </div>
            <a className="px-2 py-1 text-3xl cursor-pointer show" href="/" style={{letterSpacing: "10px"}}>NOTO</a>
            <ul className="flex justify-around">
                {
                    !!currentUser ? (
                        <>
                            <li className="px-4 py-2 cursor-pointer"><a href="/notes">Hi, {
                                currentUser.isAnonymous ?  "Unknown" : currentUser.displayName.split(" ")[0]
                                
                            }</a></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><a href="/about">About</a></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center" onClick={handleLogout}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><a href="/">Home</a></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><a href="/login">Login</a></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><a href="/about">About</a></li>
                        </>
                    )
                }
            </ul>
        </div>
    )
}

export default Navbar
