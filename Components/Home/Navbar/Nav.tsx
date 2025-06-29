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

    const scrollToSection = (url: string) => {
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${navBg ? 'bg-blue-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'} transition-all duration-300 h-[12vh] z-[1000] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                        <AiOutlineVideoCamera className='w-7 h-7 text-white' />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl text-white font-bold">Amiable</h1>
                        <p className="text-xs text-rose-300 font-medium">CCTV Solutions</p>
                    </div>
                </div>

                {/* Nav links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        return (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.url)}
                                className='relative text-white text-base font-medium hover:text-rose-300 transition-colors duration-300 group'
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        );
                    })}
                </div>

                {/* CTA Button & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <a 
                        href="tel:+2348031234567"
                        className="hidden md:block bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Call Now
                    </a>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={openNav}
                        className='lg:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300'
                    >
                        <HiBars3BottomRight className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav