import React from 'react'
import Loader from '../Loader/Loader'

function EditorFooter({saveMessage}) {
    return (
        <div className="flex items-center flex-row-reverse h-6 lg:px-20 px-6 text-cgray-lightest text-xs lg:text-sm bg-cgray-dark flex-shrink" style={{letterSpacing: "3px"}}>
            {
                saveMessage === "Saving..." ? (
                    <>
                        {saveMessage}
                        <Loader size="15" className="mx-2"/>
                    </>
                ) : (
                    saveMessage
                )
            }
        </div>
    )
}

export default EditorFooter
