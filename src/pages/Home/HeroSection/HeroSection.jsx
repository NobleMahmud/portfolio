import TypeWrite from '../TypeWrite/TypeWrite';

const HeroSection = () => {
    return (

        <div className="bg-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-16">
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
                    <a href="My resume.pdf" download="resume.pdf"
                        className=" backdrop-blur-3xl bg-purple-400 hover:drop-shadow-2xl hover:hue-rotate-30 duration-1000 glass text-white hover:bg-purple-400 hover:shadow-2xl hover:text-white rounded shadow py-3 px-4 border border-purple-300 hover:border-transparent">
                        Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;