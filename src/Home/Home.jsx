import React from 'react'
import Logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="w-full flex-grow flex justify-center items-center flex-col bg-cgray-dark">
            <img src={Logo} alt="Noto Logo" className="image"/>
            <h1 className="text-white text-2xl my-12 lg:my-16 tracking-widest">Start<br/>Noting<br/>Down.</h1>
            <Link className="w-40 lg:w-48 py-2 bg-cpurple-light text-white tracking-widest flex justify-center items-center" to="/login">Get Started</Link>
        </div>
    )
}

export default Home
