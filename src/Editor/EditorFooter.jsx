import React from 'react'

function EditorFooter() {
    console.log("Footer logged!")
    return (
        <div className="flex items-center flex-row-reverse h-6 lg:px-20 px-6 text-cgray-lightest text-xs lg:text-sm bg-cgray-dark flex-shrink" style={{letterSpacing: "3px"}}>
            Saving...
        </div>
    )
}

export default EditorFooter
