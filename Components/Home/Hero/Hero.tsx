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
                        <h1 className='text-white font-bold uppercase text-[35px] mb-6 md:mb-4 text-center md:text-[45px] lg:text-[55px]'>
                            Professional CCTV Solutions
                        </h1>
                        <p className='md:text-lg text-center text-xl text-white font-normal [word-spacing:5px] mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Secure your property with our expert CCTV installation, maintenance, and monitoring services. 
                            Trusted by 500+ customers across Abuja and surrounding states with 8+ years of experience.
                        </p>
                        
                        {/* Call-to-Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <button className='bg-rose-600 hover:bg-rose-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl'>
                                Get Free Consultation
                            </button>
                            <button className='border-2 border-white text-white hover:bg-white hover:text-blue-950 font-medium px-8 py-4 rounded-xl transition-all duration-300'>
                                View Our Work
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className='grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto'>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold text-rose-400'>500+</h3>
                                <p className='text-sm text-blue-200'>Projects</p>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold text-rose-400'>8+</h3>
                                <p className='text-sm text-blue-200'>Years</p>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold text-rose-400'>24/7</h3>
                                <p className='text-sm text-blue-200'>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;