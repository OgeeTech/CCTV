import React from 'react';

const Hero = () => {
    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>

            {/* video */}
            <video
                src='/images/hero.mp4'
                autoPlay
                loop
                muted
                preload='metadata'
                className='object-cover w-full h-full'
                title='Background Surveillance Video'
            ></video>

            {/* text content */}
            <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <div>
                        <h1 className='text-white font-bold uppercase text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px]'>
                            Secure Your World
                        </h1>
                        <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px] mb-4'>
                            Protect your home and business with cutting-edge surveillance solutions
                        </p>
                        {/* Call-to-Action Button */}
                        <button
                            className='bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-xl mt-4 transition-all duration-300 shadow-lg hover:shadow-xl'
                            onClick={() => alert('Contact Us for Your CCTV Installation Needs!')}
                        >
                            Get a Free Consultation
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;