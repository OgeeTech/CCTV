import React from 'react';

const Hero = () => {
    return (
        <div className='relative w-full h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'></div>

            {/* video */}
            <video
                src='/images/hero.mp4'
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
                className='absolute top-0 left-0 w-full h-full object-cover'
                onError={(e) => {
                    console.log('Video failed to load, using fallback background');
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%)';
                }}
            >
                Your browser does not support the video tag.
            </video>

            {/* Fallback background if video fails */}
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950 via-blue-800 to-rose-600'></div>

            {/* text content */}
            <div className='absolute z-20 w-full h-full flex items-center justify-center'>
                <div className='text-center text-white max-w-4xl px-6'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
                        Secure Your <span className='text-rose-400'>World</span>
                    </h1>
                    <p className='text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed'>
                        Professional CCTV installation and security solutions in Abuja. 
                        Protect what matters most with cutting-edge surveillance technology.
                    </p>
                    
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <button className='bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                            Get Free Consultation
                        </button>
                        <a 
                            href="tel:+2348031234567"
                            className='bg-transparent border-2 border-white hover:bg-white hover:text-blue-950 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300'
                        >
                            Call Now: +234 803 123 4567
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className='grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto'>
                        <div className='text-center'>
                            <h3 className='text-2xl md:text-3xl font-bold text-rose-400'>500+</h3>
                            <p className='text-sm md:text-base text-gray-300'>Projects Completed</p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl md:text-3xl font-bold text-rose-400'>8+</h3>
                            <p className='text-sm md:text-base text-gray-300'>Years Experience</p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl md:text-3xl font-bold text-rose-400'>24/7</h3>
                            <p className='text-sm md:text-base text-gray-300'>Support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
                <div className='animate-bounce'>
                    <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
                        <div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;