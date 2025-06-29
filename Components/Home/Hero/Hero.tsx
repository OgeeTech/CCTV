import React from 'react';
import { FaPlay, FaShieldAlt, FaClock, FaPhone } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover'
            >
                <source src="/images/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40'></div>

            {/* Content */}
            <div className='relative z-10 flex items-center justify-center h-full'>
                <div className='text-center text-white max-w-4xl mx-auto px-6'>
                    {/* Badge */}
                    <div className='inline-flex items-center bg-rose-600/20 backdrop-blur-sm border border-rose-500/30 rounded-full px-6 py-2 mb-8'>
                        <FaShieldAlt className='mr-2 text-rose-400' />
                        <span className='text-sm font-medium'>Professional Security Solutions</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
                        Secure Your
                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600'>
                            World Today
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed'>
                        Professional CCTV installation and security solutions in Abuja. 
                        Protect what matters most with cutting-edge surveillance technology.
                    </p>

                    {/* Features */}
                    <div className='flex flex-wrap justify-center gap-6 mb-10'>
                        <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                            <FaClock className='text-rose-400 mr-2' />
                            <span className='text-sm'>24/7 Support</span>
                        </div>
                        <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                            <FaShieldAlt className='text-rose-400 mr-2' />
                            <span className='text-sm'>8+ Years Experience</span>
                        </div>
                        <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                            <FaPlay className='text-rose-400 mr-2' />
                            <span className='text-sm'>500+ Projects</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <button className='group bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                            <span className='flex items-center'>
                                Get Free Quote
                                <svg className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </span>
                        </button>
                        
                        <a 
                            href="tel:+2348031234567"
                            className='group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/40'
                        >
                            <span className='flex items-center'>
                                <FaPhone className='mr-2 group-hover:animate-pulse' />
                                Call Now
                            </span>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4'>
                            <div className='text-2xl font-bold text-rose-400 mb-1'>500+</div>
                            <div className='text-sm text-gray-300'>Happy Clients</div>
                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4'>
                            <div className='text-2xl font-bold text-rose-400 mb-1'>8+</div>
                            <div className='text-sm text-gray-300'>Years Experience</div>
                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4'>
                            <div className='text-2xl font-bold text-rose-400 mb-1'>24/7</div>
                            <div className='text-sm text-gray-300'>Support</div>
                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4'>
                            <div className='text-2xl font-bold text-rose-400 mb-1'>100%</div>
                            <div className='text-sm text-gray-300'>Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce'>
                <div className='flex flex-col items-center'>
                    <span className='text-sm mb-2'>Scroll Down</span>
                    <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
                        <div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;