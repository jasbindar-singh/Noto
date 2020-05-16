import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import bxTrash from '@iconify/icons-bx/bx-trash';
import bxShareAlt from '@iconify/icons-bx/bx-share-alt';
import bxMenu from '@iconify/icons-bx/bx-menu';
import bxX from '@iconify/icons-bx/bx-x';
import { NavContext } from '../Main/Main';
import ModalInfo from '../Modal/ModalInfo';
import ModalDelete from '../Modal/ModalDelete';

function EditorHeader() {

    console.log("Header logged!")

    const { isOpen, open, close } = useContext(NavContext);

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
        if(isOpen)
            close()
        else
            open()
    }

    return (
        <>
            <div className="px-4 lg:px-12 bg-cteal-dark lg:py-2 text-white flex items-center justify-between flex-shirnk" style={{height: "50px", minWidth: "350px"}}>
                <div className="tracking-widest flex justify-between items-center">
                    <Icon className="mr-5" icon={isOpen ? bxX : bxMenu} style={{color: '#fff', fontSize: '22px'}} onClick={handleClick}/>
                    <p className="text-sm lg:text-lg">
                        JavaScript Day - 1
                    </p>
                </div>
                <ul className="flex justify-between text-base items-center">
                    <li className="px-4 cursor-pointer"><Icon icon={bxShareAlt} style={{color: '#fff', fontSize: '22px'}} onClick={toggleInfo}/></li>
                    <li className="px-4 cursor-pointer"><Icon icon={bxTrash} style={{color: '#fff', fontSize: '22px'}} onClick={toggleDelete}/></li>
                </ul>
            </div>
            <ModalInfo isModalOpen={isInfoModalOpen} toggle={toggleInfo}/>
            <ModalDelete isModalOpen={isDeleteModalOpen} toggle={toggleDelete}/>
        </>
    )
}

export default EditorHeader
