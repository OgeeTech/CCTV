'use client';
import React, { useEffect, useState } from 'react'
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Link from 'next/link'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div className={`${navBg ? 'bg-blue-950 shadow-md' : 'bg-transparent'} transition-all duration-300 h-[12vh] z-[1000] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center">
                        <AiOutlineVideoCamera className='w-6 h-6 text-white' />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Amiable CCTV</h1>
                </Link>

                {/* Nav links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id}>
                                <p className='relative text-white text-base font-medium hover:text-rose-400 transition-colors duration-300 cursor-pointer'>
                                    {link.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <Link href="/contact">
                        <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300">
                            Get Quote
                        </button>
                    </Link>
                    {/* burger menu */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav