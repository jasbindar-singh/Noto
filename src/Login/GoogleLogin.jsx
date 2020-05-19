import React, { useState} from 'react';
import { Icon } from '@iconify/react';
import bxlGoogle from '@iconify/icons-bx/bxl-google';
import firebase, { auth } from '../configs/firebase'
import Loader from '../Loader/Loader';

function GoogleLogin(props) {

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(){
        setIsLoading(true)

        let provider = new firebase.auth.GoogleAuthProvider();

        await auth.signInWithRedirect(provider).catch(err => alert(err.message));

        await auth.getRedirectResult().then(function(result) {
            // var user = result.user;
            setIsLoading(false)
          }).catch(function(error) {
            setIsLoading(false)
            alert(error.message)
          });
    }

    return (
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer" style={{backgroundColor: "#dd4b39"}} onClick={handleLogin}>
            <div className="mr-4">
                {
                    isLoading ? <Loader size="25"/> : <Icon icon={bxlGoogle} style={{color: '#fff', fontSize: '25px'}} />
                }
            </div>
            <p>Google</p>
        </div>
    )
}

export default GoogleLogin
