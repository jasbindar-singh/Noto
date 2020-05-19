import React, {useState, useContext} from 'react';
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';
import Loader from '../Loader/Loader';
import { AuthContext } from '../App';
import { firestore } from '../configs/firebase';
import { DataContext } from '../Main/Main';

function ModalAdd({isOpen, toggle}) {

    let modalVisibility = isOpen ? "flex" : "hidden";

    const {currentUser} = useContext(AuthContext);
    const {addNote} = useContext(DataContext);

    const [isLoading, setIsLoading] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [error, setError] = useState({
        hasError: false,
        message: ""
    });

    function handleChange(e){
        setError({hasError: false, message: ""})
        setNoteTitle(e.target.value)
    }

    function hasError(){
        if(currentUser.isAnonymous){
            setError({
                hasError: true,
                message: "Guest can use only one note, please login to add more."
            })
            return true;
        }

        else if(noteTitle.length < 5 || noteTitle.length > 16){
            setError({
                hasError: true,
                message: "Title should be between 5 to 16 characters."
            })
            return true;
        }
        return false;
    }

    async function handleAdd(){

        if(!hasError()){
            setIsLoading(true)
        
            let noteRef = await firestore.collection(`userData/${currentUser.uid}/notes`).doc()

            let note = {
                id: noteRef.id,
                title: noteTitle,
                content: "",
                created: new Date(),
                author: currentUser.displayName,
                lastEdited: new Date()
            }

            await noteRef
            .set(note)
            .then(() => {
                setIsLoading(false)
                toggle()
                addNote(note)
            })
            .catch(err => err.message)
        }
    }

    const isAnonymous = !!currentUser ? currentUser.isAnonymous : false;

    return (
        <div className={`absolute w-screen h-screen ${modalVisibility} justify-center items-center text-white`} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', left: "0", top: "0"}}>
            <div className="modal bg-cgray-dark flex flex-col mx-4">
                <div className="px-6 py-2 bg-cpurple-light flex justify-between">
                    <div>Add Note</div>
                    <Icon icon={bxX} style={{color: '#fff', fontSize: '24px'}} onClick={toggle}/>
                </div>
                <textarea
                    className="mx-4 my-4 flex-grow bg-cgray-light px-4 py-2"
                    style={{outline: "none", resize: "none"}}
                    placeholder={isAnonymous ? "Login to add more notes." : "Enter your note title..."}
                    onChange={handleChange}
                    disabled={isAnonymous}
                ></textarea>
                {
                    error.hasError ? <p className="mx-4 text-sm tracking-wide text-red-600">{error.message}</p> : null
                }
                <div className="flex">
                    <button className="bg-cpurple-light py-2 mx-4 mb-4 flex-grow" onClick={toggle}>Cancel</button>
                    <button className="bg-cpurple-light py-2 mr-4 mb-4 flex-grow" onClick={handleAdd}>
                        {
                            isLoading ? <Loader size={22} className="inline mr-2"/> : null
                        }
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd
