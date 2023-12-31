import React from 'react';

const GlowingDivs = () => {
    return (
        <div>
            <div className="mx-auto flex justify-center items-center filter blur-2xl animate-pulse duration-500 transition w-full">
                <div className="mt-20 mr-10 flex relative">
                    <div className="p-44 rounded-full bg-gradient-to-r to-indigo-700 from-pink-900 absolute top-20 right-0">

                    </div>
                    <div className="p-44 rounded-full bg-gradient-to-r to-pink-700 from-indigo-900 absolute md:flex hidden">

                    </div>
                </div>

                <div className="flex flex-col absolute top-8 right-10 space-y-4">

                    <div className="p-5 rounded-full bg-gradient-to-r to-pink-700 via-red-500 from-indigo-900 absolute right-16 top-10">

                    </div>
                </div>
                <div className="flex flex-col absolute bottom-8 right-10 space-y-4">

                    <div className="p-10 rounded-full bg-gradient-to-r to-pink-700 from-indigo-900 absolute right-16 bottom-10">

                    </div>
                </div>

                <div className="flex flex-col space-y-4 filter animate-pulse duration-500">
                    <div className="p-10 bg-gradient-to-r to-indigo-700 from-blue-900 absolute top-20 left-20">

                    </div>
                    <div className="p-10 bg-gradient-to-r to-indigo-700 from-blue-900 absolute bottom-20 right-20">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlowingDivs;