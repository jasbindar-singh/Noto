import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import bxTrash from '@iconify/icons-bx/bx-trash';
// import bxShareAlt from '@iconify/icons-bx/bx-share-alt';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxX from '@iconify/icons-bx/bx-x';
import { DataContext } from '../Main/Main';
import ModalInfo from '../Modal/ModalInfo';
import ModalDelete from '../Modal/ModalDelete';
import { AuthContext } from '../App';

function EditorHeader() {

    console.log("Header logged!")

    const { isOpen, toggle, currentNote } = useContext(DataContext);
    const { currentUser } = useContext(AuthContext);

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function toggleInfo(){
        if(isInfoModalOpen)
            setIsInfoModalOpen(false)
        else
            setIsInfoModalOpen(true)
    }

    function toggleDelete(){
        if(isDeleteModalOpen)
            setIsDeleteModalOpen(false)
        else
            setIsDeleteModalOpen(true)
    }

    function handleClick(){
        toggle()
    }

    const toggleOption = !!currentNote ? "" : "hidden";
    const isAnonymous = !!currentUser ? currentUser.isAnonymous : false;

    return (
        <>
            <div className="px-4 lg:px-12 bg-cteal-dark lg:py-2 text-white flex items-center justify-between flex-shirnk" style={{height: "50px", minWidth: "350px"}}>
                <div className="tracking-widest flex justify-between items-center">
                    <Icon className="mr-5" icon={isOpen ? bxX : bxMenu} style={{color: '#fff', fontSize: '22px'}} onClick={handleClick}/>
                    <p className="text-sm lg:text-lg">
                        {
                            !!currentNote ? currentNote.title : "Select a Note"
                        }
                    </p>
                </div>
                <ul className={`flex justify-between text-base items-center ${toggleOption}`}>
                    {
                        !isAnonymous ? (
                            <>
                                {/* <li className="px-4 cursor-pointer"><Icon icon={bxShareAlt} style={{color: '#fff', fontSize: '22px'}} onClick={toggleInfo}/></li> */}
                                <li className="px-4 cursor-pointer"><Icon icon={bxTrash} style={{color: '#fff', fontSize: '22px'}} onClick={toggleDelete}/></li>       
                            </>
                        ) : null
                    }
                </ul>
            </div>
            <ModalInfo isModalOpen={isInfoModalOpen} toggle={toggleInfo}/>
            <ModalDelete isModalOpen={isDeleteModalOpen} toggle={toggleDelete}/>
        </>
    )
}

export default EditorHeader
