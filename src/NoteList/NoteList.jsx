import React, {useContext} from 'react'
import { DataContext } from '../Main/Main'
import Loader from '../Loader/Loader';

function NoteList() {

    const {notes, loading, setSelectedNote} = useContext(DataContext);

    return (
        <div className="overflow-auto bg-cgray-dark text-cgray-lightest tracking-widest" style={{height: "calc(100vh - 105px)"}}>
            {
                loading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <Loader size='25'/>
                    </div>
                ) : (
                    <ol className="w-full">
                        {
                            notes.notesData.length ? (
                                notes.notesData.map(noteID => {
                                return (
                                        <li 
                                            key={noteID} 
                                            className="bg-cgray-dark text-xs lg:text-base px-4 py-3 lg:px-8 lg:py-4 border-cgray-lightest cursor-pointer" 
                                            style={{borderBottom: "1px solid #cdcdcd"}}
                                            onClick={setSelectedNote.bind(this, noteID)}
                                        >
                                            {notes.notesMap[noteID].title}
                                        </li>
                                    )
                                })
                            ) : (
                                <li className="text-sm px-4 py-4 lg:px-8 lg:py-8 text-center">
                                    No notes to Show.
                                </li>
                            )
                        }
                    </ol>
                )
            }
        </div>
    )
}

export default React.memo(NoteList)
