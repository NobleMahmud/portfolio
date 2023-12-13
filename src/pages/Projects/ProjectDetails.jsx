import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import EachProjectSlide from './EachProjectSlide';

const ProjectDetails = () => {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/NobleMahmud/portfolio/main/public/projects.json')
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllProjects(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(allProjects);
    const name = useParams();
    const currentProject = allProjects.filter(p => p.projectName === name?.name)[0];
    console.log(currentProject);
    return (
        <div className='bg-transparent'>
            <Helmet>
                <title>Nobel Mahmud | Projects</title>
            </Helmet>
            
            {/* <!-- Container for demo purpose --> */}
            <div className="container py-20 mx-auto md:px-6">
                {/* <!-- Section: Design Block --> */}
                <section className="mb-32">
                    <EachProjectSlide images={currentProject?.images}></EachProjectSlide>
                    {/* <!-- Jumbotron --> */}
                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className="flex flex-col-reverse items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <div
                                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-8 text-3xl font-bold">{currentProject?.projectName}</h2>
                                    {/* <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                        soluta corporis voluptate ab error quam dolores doloremque,
                                        quae consectetur.
                                    </p> */}

                                    <div className="mx-auto mb-8 flex flex-col md:justify-around lg:justify-between">
                                        <p className="mx-auto mb-4 text-xs md:text-base flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                           Live: <a className='text-blue-600 hover:text-blue-600 hover:underline' href={currentProject?.liveLink}>{currentProject?.liveLink}</a>
                                        </p>

                                        <p className="mx-auto text-xs md:text-base mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            GitHub:<a className='text-blue-600 hover:text-blue-600 hover:underline' href={currentProject?.githubLink}>{currentProject?.githubLink}</a>
                                        </p>
                                    </div>

                                    <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                                        {currentProject?.details}
                                        
                                    </p>
                                </div>
                            </div>

                            {/* <div>
                                <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg"
                                    className="w-[500px] h-[500px] rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Jumbotron --> */}
                </section>
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default ProjectDetails;