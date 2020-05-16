import React from 'react'

function NoteList() {
    console.log("NoteList logged!")
    return (
        <div className="overflow-auto bg-cgray-dark text-cgray-lightest tracking-widest" style={{height: "calc(100vh - 105px)"}}>
            <ol className="w-full" style={{listStyle: "decimal"}}>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
                <li className="bg-cgray-dark px-8 py-4 border-cgray-lightest" style={{borderBottom: "1px solid #cdcdcd"}}>Hello</li>
            </ol>
        </div>
    )
}

export default NoteList
