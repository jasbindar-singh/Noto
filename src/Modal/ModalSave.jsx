import React, { useState, useContext } from 'react'
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';
import Loader from '../Loader/Loader';
import { AuthContext } from '../App';
import { firestore } from '../configs/firebase';
import { withRouter } from 'react-router-dom';

function ModalSave({ isModalOpen, toggle, noteData, history }) {

    const [isLoading, setIsLoading] = useState(false);
    const { currentUser } = useContext(AuthContext)

    let modalVisibility = isModalOpen ? "flex" : "hidden"

    async function handleSave(){

            setIsLoading(true)
        
            let noteRef = await firestore.collection(`userData/${currentUser.uid}/notes`).doc()

            let note = {
                ...noteData,
                id: noteRef.id,
                created: new Date(),
                author: currentUser.displayName,
                lastEdited: new Date(),
            }

            await noteRef
            .set(note)
            .then(() => {
                setIsLoading(false)
                toggle()
                history.push("/notes")
            })
            .catch(err => err.message)
    }

    return (
        <div className={`absolute w-screen h-screen ${modalVisibility} justify-center items-center text-white`} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', top: "0", left: "0"}}>
            <div className="modal bg-cgray-dark flex flex-col mx-4">
                <div className="px-6 py-2 bg-cpurple-light flex justify-between">
                    <div>Save Note</div>
                    <Icon icon={bxX} style={{color: '#fff', fontSize: '24px'}} onClick={toggle}/>
                </div>
                <textarea
                    className="mx-4 my-4 flex-grow bg-cgray-light px-4 py-2"
                    style={{outline: "none", resize: "none"}}
                    value={"Do you want to save this note to your collection?"}
                    readOnly
                ></textarea>
                <div className="flex">
                    <button className="bg-cpurple-light py-2 mx-4 mb-4 flex-grow" onClick={toggle}>Cancel</button>
                    <button className="bg-cpurple-light py-2 mr-4 mb-4 flex-grow" onClick={handleSave}>
                        {
                            isLoading ? <Loader size={22} className="inline mr-2"/> : null
                        }
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ModalSave)
