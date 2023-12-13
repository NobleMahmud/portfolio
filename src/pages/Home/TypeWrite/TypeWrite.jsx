import { Typewriter } from 'react-simple-typewriter'

const TypeWrite = () => {
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className='lg:min-w-[600px] md:w-auto w-auto'>
            <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold' }}>
                            {' '}
                            <span className="text-purple-800 font-bold text-base md:text-xl lg:text-4xl">
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={["Hi! I'm Nobel", 'A front-end web developer', 'And I love making websites!']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>

        </div>
    );
};

export default TypeWrite;