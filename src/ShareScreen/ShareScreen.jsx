import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../configs/firebase';
import MainLoader from '../Loader/MainLoader';
import { Icon } from '@iconify/react';
import bxBookmarkPlus from '@iconify/icons-bx/bx-bookmark-plus';
import bxError from '@iconify/icons-bx/bx-error';
import ModalSave from '../Modal/ModalSave';

function ShareScreen() {

    let { userId, noteId } = useParams()

    const [note, setNote] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

    function toggleSave(){
        if(isSaveModalOpen)
            setIsSaveModalOpen(false)
        else
            setIsSaveModalOpen(true)
    }

    useEffect(() => {
        firestore
        .collection(`userData/${userId}/notes`)
        .doc(noteId)
        .get()
        .then(doc => {
            if(doc.exists)
                setNote(doc.data())
            else
                setError(true)
            setLoading(false)
        })
    }, [userId, noteId])

    return (
        <>
            {
                loading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <MainLoader size="25"/>
                    </div>
                ) : (
                    <>
                        <div className="px-4 lg:px-12 bg-cteal-dark lg:py-2 text-white flex items-center justify-between flex-shrink-0" style={{height: "50px"}}>
                            {
                                error ? (
                                    <div className="w-full tracking-widest flex items-center flex-row">
                                        <Icon icon={bxError} style={{color: '#fff', fontSize: '25px', marginRight: '10px'}}/>Note not found!
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-full tracking-widest flex justify-center lg:justify-between lg:items-center flex-col lg:flex-row">
                                            <span className="text-sm lg:text-lg">{note.title}</span>
                                            <span className="text-xs">By&nbsp;{note.author}</span>
                                        </div>
                                        <ul className={`flex justify-between text-base items-center`}>
                                            <li className="px-4 cursor-pointer"><Icon icon={bxBookmarkPlus} style={{color: '#fff', fontSize: '25px'}} onClick={toggleSave}/></li>
                                        </ul>
                                        <ModalSave isModalOpen={isSaveModalOpen} toggle={toggleSave} noteData={note}/>
                                    </>
                                )
                            }
                        </div>
                        <textarea className="flex-grow px-4 py-4 lg:px-12 lg:py-6 lg:text-2xl tracking-widest bg-cgray-light text-white placeholder-gray-400"
                            name="editor"
                            id="editor"
                            style={{resize: "none", outline: "none", height: "calc(100vh - 130px)"}}
                            spellCheck="false"
                            disabled={true}
                            value={
                                error ? "Either the note does not exists, or it has been deleted by the user." : note.content
                            }
                        >
                        </textarea>
                    </>
                )
            }
        </>
    )
}

export default ShareScreen
