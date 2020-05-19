import React from 'react'
import PNF from '../assets/images/pagenotfound2.jpg'

function PageNotFound() {
    return (
        <div className="w-full flex-grow flex justify-center items-center flex-col">
            <img src={PNF} alt="Noto Logo" className="image"/>
            <h1 className="text-white text-2xl my-12 lg:my-16 tracking-widest">Page<br/>Not<br/>Found.</h1>
            <a className="w-40 lg:w-48 py-2 bg-cpurple-light text-white tracking-widest flex justify-center items-center" href="/">Back To Home</a>
        </div>
    )
}

export default PageNotFound
