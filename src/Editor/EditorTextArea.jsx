import React, {useContext, useEffect, useRef} from 'react'
import { DataContext } from '../Main/Main'
import { firestore } from '../configs/firebase'
import { AuthContext } from '../App'

function EditorTextArea({saveStatus}) {
    console.log("TextArea logged!")

    const {currentNote, updateNote} = useContext(DataContext)
    const {currentUser} = useContext(AuthContext)

    const contentRef = useRef(null);

    useEffect(() => {
        if(!!currentNote){
            contentRef.current.value = currentNote.content
            saveStatus("Loaded!")
        } else
            contentRef.current.value = ""
    },[currentNote, saveStatus])

    let debounce = saveToDbDebounce(saveToDB, 1000);

    function saveToDbDebounce(func, delay){
        let clear;
        return function(){
            let context = this;
            let args = arguments;
            clearTimeout(clear);
            clear = setTimeout(() => func.apply(context, args), delay);
        }
    }

    async function saveToDB(){
        
        if(currentUser.isAnonymous){
            let anonNote = {...currentNote, content: contentRef.current.value, lastEdited: new Date()};
            localStorage.setItem("anonNote", JSON.stringify(anonNote))
            saveStatus("Saved!")
        } else {
            updateNote(contentRef.current.value)
            await firestore
            .collection(`userData/${currentUser.uid}/notes`)
            .doc(currentNote.id)
            .update({...currentNote, content: contentRef.current.value, lastEdited: new Date()})
            .then(() => {
                saveStatus("Saved!")
            })
            .catch(err => alert(err.message))
        }
    }

    function handleChange(){
        saveStatus("Saving...")
        debounce();
    }

    return (
        <textarea className="flex-grow px-4 py-4 lg:px-12 lg:py-6 lg:text-2xl tracking-widest bg-cgray-light text-white placeholder-gray-400"
            name="editor"
            id="editor"
            style={{resize: "none", outline: "none", height: "calc(100vh - 130px)"}}
            placeholder={!!currentNote ? "Start noting down...." : "Select or add a note..."}
            spellCheck="false"
            disabled={!!currentNote ? false : true}
            onChange={handleChange}
            ref={contentRef}
        ></textarea>
    )
}

export default React.memo(EditorTextArea)