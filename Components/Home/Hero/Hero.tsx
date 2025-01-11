// import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>

            {/* video */}
            <video src='images/Hero.mp4' autoPlay loop muted preload='metadata' className='object-cover w-full h-full' />

            {/* text content */}
            <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <div>
                        <h1 className='text-white font-bold uppercase text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem]'> Secure Your World</h1>
                        <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px] mb-4 '>Protect your home and business with cutting-edge surveillance solutions</p>
                    </div>
                    {/* Call-to-Action Button */}
                   <div className="mt-[40px]">
                        <Link
                            href='/services'
                            className='rounded px-14 md:px-28 mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 
             hover:ring-red-400 transition-all ease-out duration-300'
                        >
                            <span className='absolute right-0 w-0 h-32 -mt-12 transition-all duration-1000 transform translate-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                            <span className='relative font-bold mt-4'> Get Secured</span>
                        </Link>
                   </div>
                    
                    {/* search box */}
                    {/* <SearchBox /> */}
                    {/* <Link href='#' className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 
                 hover:ring-red-400 transition-all ease-out duration-300
                 '> */}
                        {/* <span className='absolute right-0 w-0 h-32 -mt-12 transition-all duration-1000 transform translate-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                        <span className='relative font-bold'> Search</span>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Hero