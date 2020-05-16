import React from 'react'
import EditorHeader from './EditorHeader'
import EditorTextArea from './EditorTextArea'
import EditorFooter from './EditorFooter'

function Editor() {
    console.log("Editor logged!")
    return (
        <div className="flex-grow flex flex-col">
            <EditorHeader/>
            <EditorTextArea/>
            <EditorFooter/>
        </div>
    )
}

export default Editor
