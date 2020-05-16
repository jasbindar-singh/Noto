import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';
import Loader from '../Loader/Loader';

function ModalDelete({isModalOpen, toggle}) {

    const [isLoading, setIsLoading] = useState(false);

    let modalVisibility = isModalOpen ? "flex" : "hidden"

    async function handleDelete(){
        setIsLoading(true)
        
        await setTimeout(() => {
            console.log("Ran!")
            setIsLoading(false)
            toggle()
        },2000)
    }

    return (
        <div className={`absolute w-screen h-screen ${modalVisibility} justify-center items-center text-white`} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', top: "0", left: "0"}}>
            <div className="modal bg-cgray-dark flex flex-col mx-4">
                <div className="px-6 py-2 bg-cpurple-light flex justify-between">
                    <div>Delete Note</div>
                    <Icon icon={bxX} style={{color: '#fff', fontSize: '24px'}} onClick={toggle}/>
                </div>
                <textarea
                    className="mx-4 my-4 flex-grow bg-cgray-light px-4 py-2"
                    style={{outline: "none", resize: "none"}}
                    value={"Are you sure you want to delete this note?"}
                    readOnly
                ></textarea>
                <div className="flex">
                    <button className="bg-cpurple-light py-2 mx-4 mb-4 flex-grow" onClick={handleDelete}>
                        {
                            isLoading ? <Loader size={25} className="inline mr-2"/> : null
                        }
                        Delete
                    </button>
                    <button className="bg-cpurple-light py-2 mr-4 mb-4 flex-grow" onClick={toggle}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
