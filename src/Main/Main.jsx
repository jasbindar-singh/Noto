import React, {createContext, useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Editor from '../Editor/Editor'

export const NavContext = createContext();

function Main() {

    console.log("Main logged!")

    const [isOpen, setIsOpen] = useState(false);

    function open(){
        setIsOpen(true)
    }

    function close(){
        setIsOpen(false)
    }

    return (
        <NavContext.Provider value={{isOpen, open, close}}>
            <div className="flex overflow-hidden">
                <Sidebar/>
                <Editor/>
            </div>
        </NavContext.Provider>
    )
}

export default Main
