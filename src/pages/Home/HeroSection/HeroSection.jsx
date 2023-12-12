import TypeWrite from '../TypeWrite/TypeWrite';

const HeroSection = () => {
    return (
        // <div className=" backdrop-blur-xl text-white py-20">
        //     <div className="container mx-auto flex flex-col-reverse md:flex-row items-center my-12 md:my-24">
        //     <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        //         <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        //         <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        //         <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
        //             <TypeWrite></TypeWrite>
        //             <a href="#"
        //                 className=" backdrop-blur-3xl mt-10 bg-purple-400 hover:drop-shadow-2xl hover:hue-rotate-30 duration-1000 glass text-white hover:bg-purple-400 hover:shadow-2xl hover:text-white rounded shadow py-2 px-4 border border-purple-300 hover:border-transparent">
        //                 Download Resume</a>
        //         </div>
        //         <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
        //             <div className="h-48 m-4 lg:m-0 md:m-auto flex justify-end flex-wrap content-center">
        //                 <div>
        //                     <img className="inline-block md:h-[300px] md:w-[450px] lg:h-[450px] lg:w-auto rounded-3xl lg:mt-24 mt-0 md:mt-0 p-8 md:p-0" src="https://i.ibb.co/VVkFr4v/IMG-20230224-WA0016.jpg" /></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="bg-gray-50 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-16">
            <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className=''>
                    <div className="m-8 relative space-y-4">
                        <TypeWrite></TypeWrite>
                    </div>

                </div>
                <div className='w-full mt-16 flex justify-center'>
                    <a href="#"
                        className=" backdrop-blur-3xl bg-purple-400 hover:drop-shadow-2xl hover:hue-rotate-30 duration-1000 glass text-white hover:bg-purple-400 hover:shadow-2xl hover:text-white rounded shadow py-3 px-4 border border-purple-300 hover:border-transparent">
                        Download Resume</a>
                </div>
            </div>
            {/* <img className="inline-block lg:ml-40 ml-0 md:ml-0 md:h-[300px] md:w-[450px] lg:h-[450px] lg:w-auto rounded-3xl lg:mt-24 mt-0 md:mt-0 p-8 md:p-0" src="https://i.ibb.co/VVkFr4v/IMG-20230224-WA0016.jpg" /> */}
        </div>
    );
};

export default HeroSection;