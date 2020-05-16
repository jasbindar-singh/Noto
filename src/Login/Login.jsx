import React from 'react'
import AppleLogin from './AppleLogin'
import GithubLogin from './GithubLogin'
import GoogleLogin from './GoogleLogin'
import FacebookLogin from './FacebookLogin'
import TwitterLogin from './TwitterLogin'
import AnonymousLogin from './AnonymousLogin'

function Login() {
    console.log("Login logged!")
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-cgray-light px-16 py-8 login">
                <p className="text-white text-4xl mb-2">Login</p>
                <div className="h-1 bg-white"></div>
                <div className="my-12 font-medium">                                                                                                          
                    <AppleLogin/>
                    <GithubLogin/>
                    <GoogleLogin/>
                    <FacebookLogin/>
                    <TwitterLogin/>
                    <AnonymousLogin/>                            
                </div>
            </div>
        </div>
    )
}

export default Login