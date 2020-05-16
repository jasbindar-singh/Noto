import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';
import Loader from '../Loader/Loader';

function ModalAdd({isOpen, toggle}) {

    let modalVisibility = isOpen ? "flex" : "hidden"

    const [isLoading, setIsLoading] = useState(false);

    async function handleAdd(){
        setIsLoading(true)
        
        await setTimeout(() => {
            console.log("Ran!")
            setIsLoading(false)
            toggle()
        },2000)
    }

    return (
        <div className={`absolute w-screen h-screen ${modalVisibility} justify-center items-center text-white`} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', left: "0", top: "0"}}>
            <div className="modal bg-cgray-dark flex flex-col mx-4">
                <div className="px-6 py-2 bg-cpurple-light flex justify-between">
                    <div>Add Note</div>
                    <Icon icon={bxX} style={{color: '#fff', fontSize: '24px'}} onClick={toggle}/>
                </div>
                <textarea
                    className="mx-4 mt-4 flex-grow bg-cgray-light px-4 py-2"
                    style={{outline: "none", resize: "none"}}
                    placeholder="Enter your note heading..."
                ></textarea>
                <p className="mx-4 my-2 text-red-600">This is a error message.</p>
                <div className="flex">
                    <button className="bg-cpurple-light py-2 mx-4 mb-4 flex-grow" onClick={handleAdd}>
                        {
                            isLoading ? <Loader size={25} className="inline mr-2"/> : null
                        }
                        Add
                    </button>
                    <button className="bg-cpurple-light py-2 mr-4 mb-4 flex-grow" onClick={toggle}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd
