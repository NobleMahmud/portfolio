import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import GlowingDivs from '../GlowingDivs/GlowingDivs';


const Skills = () => {
    return (
        <div className='bg-center' id='skills'>
            {/* <p align="center">
            <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=html,css,tailwind,c,js,figma,firebase,react,vscode,github,nodejs,express,mongodb&perline=6" />
            </a>
            </p> */}
            <div className="flex flex-col-reverse backdrop-blur-xl gap-10 justify-center items-center h-screen">
                <div className="grid grid-cols-2 gap-20 relative w-96">
                    <div className="group each rounded-2xl bg-gray-200 shadow-md hover:shadow-inner">
                        <div className="box p-4">
                            <div className="content text-center">
                                <p align="center">
                                    <a href="https://skillicons.dev">
                                        <img src="https://skillicons.dev/icons?i=html,css,tailwind,js&perline=2" />
                                    </a>
                                </p>
                                <i className="fab fa-html5 mt-4"></i>
                            </div>
                        </div>
                    </div>

                    <div className="group each rounded-2xl bg-gray-200 shadow-md hover:shadow-inner">
                        <div className="box p-4">
                            <div className="content text-center">
                            <p align="center">
                                    <a href="https://skillicons.dev">
                                        <img src="https://skillicons.dev/icons?i=figma,firebase,react,mongodb&perline=2" />
                                    </a>
                                </p>
                                <i className="fab fa-html5 mt-4"></i>
                            </div>
                        </div>
                    </div>

                    {/* <div className="center rounded-full h-40 w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 shadow-md hover:shadow-inner">
                        <div className="box flex p-20 rounded-full h-40 w-40 justify-center items-center">
                            <h2 className="text-2xl font-bold">SKILLS</h2>
                        </div>
                    </div> */}
                    

                    <div className="group each rounded-2xl bg-gray-200 shadow-md hover:shadow-inner">
                        <div className="box p-4">
                            <div className="content text-center">
                            <p align="center">
                                    <a href="https://skillicons.dev">
                                        <img src="https://skillicons.dev/icons?i=vscode,github,nodejs,express&perline=2" />
                                    </a>
                                </p>
                                <i className="fab fa-html5 mt-4"></i>
                            </div>
                        </div>
                    </div>

                    <div className="group each rounded-2xl bg-gray-200 shadow-md hover:shadow-inner">
                        <div className="box p-4">
                            <div className="content text-center">
                            <p align="center">
                                    <a href="https://skillicons.dev">
                                        <img src="https://skillicons.dev/icons?i=c,matlab&perline=2" />
                                    </a>
                                </p>
                                <i className="fab fa-html5 mt-4"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold' }}>
                        {' '}
                        <span className="text-purple-800 font-bold text-2xl md:text-4xl lg:text-6xl">
                            <Typewriter
                                words={["Technologies That I"]}
                                loop={1}
                                cursor
                                cursorStyle=' Know'
                                typeSpeed={70}
                                // deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Skills;