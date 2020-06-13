import React, {useState, useContext} from 'react'
import { Icon } from '@iconify/react';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxX from '@iconify/icons-bx/bx-x';
import { auth } from '../configs/firebase';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';

function Navbar() {

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
        <div className="px-8 lg:px-20 bg-cpurple-light text-white overflow-hidden flex-shrink-0 nav" style={isOpen ? {height: "auto"} : {height: "53px"}}>
            <div className="flex justify-between items-center w-auto hide">
                <Link className="px-2 py-1 text-3xl cursor-pointer" to="/" style={{letterSpacing: "10px"}}>NOTO</Link>
                <Icon icon={isOpen ? bxX : bxMenu} style={{color: '#fff', fontSize: '30px'}} onClick={handleClick}/>
            </div>
            <Link className="px-2 py-1 text-3xl cursor-pointer show" to="/" style={{letterSpacing: "10px"}}>NOTO</Link>
            <ul className="flex justify-around">
                {
                    !!currentUser ? (
                        <>
                            <li className="px-4 py-2 cursor-pointer"><Link to="/notes">Hi, {
                                currentUser.isAnonymous ?  "Unknown" : currentUser.displayName.split(" ")[0]
                                
                            }</Link></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><Link to="/about">About</Link></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center" onClick={handleLogout}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><Link to="/">Home</Link></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><Link to="/login">Login</Link></li>
                            <li className="px-4 py-2 cursor-pointer flex items-center"><Link to="/about">About</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
    )
}

export default Navbar
