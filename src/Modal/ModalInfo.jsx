import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';

function ModalInfo({isModalOpen, toggle}) {

    const inputRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState("Copy")

    function copyInfo(e){
        let input = inputRef.current;
        input.select();
        document.execCommand("copy");
        e.target.focus()
        setCopySuccess("Copied!")
    }

    let modalVisibility = isModalOpen ? "flex" : "hidden"

    return (
        <div className={`absolute w-screen h-screen ${modalVisibility} justify-center items-center text-white`} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', top: "0", left: "0"}}>
            <div className="modal bg-cgray-dark flex flex-col mx-4">
                <div className="px-6 py-2 bg-cpurple-light flex justify-between">
                    <div>Share Info</div>
                    <Icon icon={bxX} style={{color: '#fff', fontSize: '24px'}} onClick={toggle}/>
                </div>
                <textarea
                    ref={inputRef}
                    className="mx-4 my-4 flex-grow bg-cgray-light px-4 py-2"
                    style={{outline: "none", resize: "none"}}
                    value={"This is the link"}
                    readOnly
                ></textarea>
                <button className="bg-cpurple-light py-2 mx-4 mb-4" onClick={copyInfo}>{copySuccess}</button>
            </div>
        </div>
    )
}

export default ModalInfo
