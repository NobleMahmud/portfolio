import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ name, detail, image }) => {
    return (
        // <div className='mx-auto'>
        //     <div
        //         className="overflow-hidden w-80 min-h-[200px] aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
        //     >
        //         <div
        //             className="rounded-xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
        //         >
        //             <div>
        //                 <div
        //                     className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
        //                 >
        //                     <div className="font-bold">{name}</div>

        //                     <div className="opacity-90 text-sm">
        //                         {detail}
        //                     </div>
        //                     <div>
        //                        <Link to={`projects/${name}`}> <button href="#_" className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
        //                             Learn More
        //                         </button></Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <img
        //             alt=""
        //             className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
        //             src={image}
        //         />
        //     </div>
        // </div>
        <div className='mx-auto'>
    <div
        className="overflow-hidden w-80 min-h-[200px] aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
    >
        <div
            className="rounded-xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-80 text-white flex items-end"
        >
            <div>
                <div
                    className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                >
                    <div className="font-bold">{name}</div>

                    <div className="opacity-90 text-sm">
                        {detail}
                    </div>
                    <div>
                        <Link to={`projects/${name}`}>
                            <button href="#_" className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <img
            alt=""
            className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src={image}
        />
    </div>
</div>

    );
};

export default ProjectCard;