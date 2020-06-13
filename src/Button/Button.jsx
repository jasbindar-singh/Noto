import React, {useState} from 'react';
import ModalAdd from '../Modal/ModalAdd';
import { Icon } from '@iconify/react';
import bxPlus from '@iconify/icons-bx/bx-plus';

function Button() {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    function toggleAdd(){
        if(isAddModalOpen)
            setIsAddModalOpen(false)
        else
            setIsAddModalOpen(true)
    }

    return (
        <>
            <button onClick={toggleAdd} className="w-full py-2 bg-cpurple-dark text-white tracking-widest flex justify-center items-center" style={{height: "50px", outline: "none"}}>
                <Icon icon={bxPlus} style={{color: '#fff', fontSize: '26px', display: 'inline'}} />New Note
            </button>
            <ModalAdd isOpen={isAddModalOpen} toggle={toggleAdd}/>
        </>
    )
}

export default React.memo(Button)
