import React, {useState, useCallback} from 'react'
import EditorHeader from './EditorHeader'
import EditorTextArea from './EditorTextArea'
import EditorFooter from './EditorFooter'

function Editor() {

    const [saveMessage, setSaveMessage] = useState("")

    const saveStatus = useCallback(function(state){
        setSaveMessage(state)
    }, [])

    return (
        <div className="flex-grow flex flex-col">
            <EditorHeader/>
            <EditorTextArea saveStatus={saveStatus}/>
            <EditorFooter saveMessage={saveMessage}/>
        </div>
    )
}

export default React.memo(Editor)
