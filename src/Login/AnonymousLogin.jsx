import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import bxUser from '@iconify/icons-bx/bx-user';
import Loader from '../Loader/Loader';
import { auth } from '../configs/firebase';


function AnonymousLogin() {

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(){
        setIsLoading(true)

        await auth.signInAnonymously()
        .then(() => {
            setIsLoading(false)
        })
        .catch(function(err) {
            alert(err.message)
            setIsLoading(false)
        });
    }

    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer bg-cteal-dark" onClick={handleLogin}>
            <div className="mr-4">
                {
                    isLoading ? <Loader size="25"/> : <Icon icon={bxUser} style={{color: '#fff', fontSize: '25px'}} />
                }
            </div>
            <p>Use as Guest</p>
        </div> 
    )
}

export default AnonymousLogin
