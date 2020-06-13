import React, {createContext, useState, useContext, useEffect, useCallback} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Editor from '../Editor/Editor'
import { firestore } from '../configs/firebase';
import { AuthContext } from '../App';

export const DataContext = createContext();

function Main() {
    
    const {currentUser} = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState({
        notesData: [],
        notesMap: {}
    })

    useEffect(() => {
        if(!currentUser.isAnonymous){
            setLoading(true)

            firestore
            .collection(`userData/${currentUser.uid}/notes`)
            .orderBy("created", "desc")
            .get()
            .then(data => {
                let notesData = []
                let notesMap = {}
                data.forEach(doc => {
                    let pureData = doc.data()
                    notesData.push(pureData.id)
                    Object.assign(notesMap, {[pureData.id]: pureData})
                })
                setNotes({notesData, notesMap})
                setLoading(false)
            })
            .catch(err => alert(err.message))
        } else {
            if(localStorage.getItem("anonNote")){
                try{
                    let anonNote = JSON.parse(localStorage.getItem("anonNote"))
                    setCurrentNote(anonNote)
                }catch(err){
                    localStorage.removeItem("anonNote")
                    window.location.reload()
                }
            } else {
                let anonNote = {
                    id: "anonymous",
                    title: "Anonymous Note",
                    content: "",
                    author: "Anonymous",
                    created: new Date(),
                    lastEdited: new Date()
                }
                setCurrentNote(anonNote)
                localStorage.setItem("anonNote", JSON.stringify(anonNote))
            }
        }
    }, [currentUser])

    const setSelectedNote = useCallback(function(noteId){
        if(!!noteId){
            setCurrentNote(notes.notesMap[noteId])
        }
        else
            setCurrentNote(null)
    }, [notes.notesMap])

    const addNote = useCallback(function(note){
        setCurrentNote(note)

        setNotes({
            notesMap: {...notes.notesMap, [note.id]: note},
            notesData: [note.id, ...notes.notesData]
        })
    }, [notes])

    const deleteNote = useCallback(function(noteId){
        setCurrentNote(null)

        let noteMapCopy = {}
        Object.assign(noteMapCopy, notes.notesMap);
        delete noteMapCopy[noteId];
        let noteDataCopy = notes.notesData.filter(id => id!==noteId)
        
        setNotes({
            notesMap: {...noteMapCopy},
            notesData: [...noteDataCopy]
        })

    }, [notes])

    function updateNote(noteContent){
        setNotes({
            ...notes,
            notesMap: {
                ...notes.notesMap, 
                [currentNote.id]: {
                    ...currentNote, 
                    content: noteContent
                }
            }
        })
    }

    function toggle(){
        if(isOpen)
            setIsOpen(false)
        else
            setIsOpen(true)
    }

    return (
        <DataContext.Provider value={{isOpen, toggle, currentNote, notes, loading, setSelectedNote, addNote, deleteNote, updateNote}}>
            <div className="flex overflow-hidden">
                <Sidebar/>
                <Editor/>
            </div>
        </DataContext.Provider>
    )
}

export default Main
