import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import bxlFacebookSquare from '@iconify/icons-bx/bxl-facebook-square';
import firebase, { auth } from '../configs/firebase'
import Loader from '../Loader/Loader';

function FacebookLogin() {

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(){
        setIsLoading(true)

        var provider = new firebase.auth.FacebookAuthProvider();

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
        <div className="w-full px-8 py-2 rounded text-white flex my-8 cursor-pointer" style={{backgroundColor: "#3b5998"}} onClick={handleLogin}>
            <div className="mr-4">
                {
                    isLoading ? <Loader size="25"/> : <Icon icon={bxlFacebookSquare} style={{color: '#fff', fontSize: '25px'}} />
                }
            </div>
            <p>Facebook</p>
        </div>
    )
}

export default FacebookLogin
