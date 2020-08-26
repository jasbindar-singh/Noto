import React from 'react'

function About() {
    return (
        <div className="w-full flex-grow flex justify-center items-center">
            <div className="text-white bg-cgray-light px-16 py-8 login">
                <h1 className="text-4xl mb-2">About</h1>
                <div className="h-1 bg-white mb-2"></div>
                <p className="px-2 py-2">
                    Noto is an online noteskeeper app.
                    You can save all your notes here online.
                    Write your notes anywhere and don't ever 
                    care to lose them cause Noto will be autosaving 
                    them in the background realtime when you would be noting them down.
                </p>
                <p className="px-2 py-2">
                    *Noto is build using ReactJs, Firebase and TailwindCSS.*
                </p>
                <div className="px-2 py-2">
                   <p>Do you have any suggestion or feedback? Feel free to reach out to me.</p>
                    <p className="my-4">
                        Jasbindar Singh<br/>
                        Frontend Developer
                    </p>
                   <ul className="mx-8 list-disc text-blue-400">
                        <li><a target="_blank" rel="noreferrer noopener" href="https://github.com/jasbindar-singh">Github</a></li>
                        <li><a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/singhjs/">LinkedIn</a></li>
                        <li><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/jasbindar98">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
