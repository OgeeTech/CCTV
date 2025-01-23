// import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>

            {/* video */}
            <video className='w-full h-full object-cover' autoPlay loop muted>
                {/* <source src='/path/to/video.mp4' type='video/mp4' /> */}
                <source media="(min-width: 768px)" src="/public/images/Hero.mp4" />
                Your browser does not support the video tag.
            </video>

            {/* text content */}
            <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <div>
                        <h1 className='text-white font-bold uppercase text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px]'> Secure Your World</h1>
                        <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px] mb-4 '>Protect your home and business with cutting-edge surveillance solutions</p>
                    </div>
                    {/* Call-to-Action Button */}
                </div>
            </div>
        </div>
    )
}

export default Hero