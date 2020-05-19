import React, {useState, useContext} from 'react';
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';
import Loader from '../Loader/Loader';
import { firestore } from "../configs/firebase";
import { AuthContext } from '../App';
import { DataContext } from '../Main/Main';

function ModalDelete({isModalOpen, toggle}) {


    const {currentUser} = useContext(AuthContext);
    const {currentNote, deleteNote} = useContext(DataContext);

    const [isLoading, setIsLoading] = useState(false);

    let modalVisibility = isModalOpen ? "flex" : "hidden"

    async function handleDelete(){
        setIsLoading(true)
        
        await firestore
        .collection(`userData/${currentUser.uid}/notes`)
        .doc(currentNote.id)
        .delete()
        .then(() => {
            setIsLoading(false)
            toggle()
            deleteNote(currentNote.id)
        })
        .catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className={`absolute w-screen h-screen ${modalVisibility} justify-center items-center text-white`} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', top: "0", left: "0"}}>
            <div className="modal bg-cgray-dark flex flex-col mx-4">
                <div className="px-6 py-2 bg-cpurple-light flex justify-between">
                    <div>Delete Note</div>
                    <Icon icon={bxX} style={{color: '#fff', fontSize: '24px'}} onClick={toggle}/>
                </div>
                <textarea
                    className="mx-4 my-4 flex-grow bg-cgray-light px-4 py-2"
                    style={{outline: "none", resize: "none"}}
                    value={"Are you sure you want to delete this note?"}
                    readOnly
                ></textarea>
                <div className="flex">
                    <button className="bg-cpurple-light py-2 mx-4 mb-4 flex-grow" onClick={toggle}>Cancel</button>
                    <button className="bg-cpurple-light py-2 mr-4 mb-4 flex-grow" onClick={handleDelete}>
                        {
                            isLoading ? <Loader size={22} className="inline mr-2"/> : null
                        }
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
