import React from 'react'

function EditorTextArea() {
    console.log("TextArea logged!")
    return (
        <textarea className="flex-grow px-4 py-4 lg:px-12 lg:py-6 lg:text-2xl tracking-widest bg-cgray-light text-white placeholder-gray-400"
            name="editor"
            id="editor"
            style={{resize: "none", outline: "none", height: "calc(100vh - 130px)"}}
            placeholder="Start noting down...."
            spellCheck="false"
        ></textarea>
    )
}

export default EditorTextArea