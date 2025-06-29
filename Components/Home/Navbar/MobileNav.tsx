'use client';
import React from 'react'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'
import { useRouter, usePathname } from 'next/navigation'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (url: string) => {
        if (url.startsWith('#')) {
            // For anchor links, always navigate to home page first if not already there
            if (pathname !== '/') {
                // Navigate to home page with hash
                router.push(`/${url}`);
            } else {
                // We're on home page, scroll to section
                const element = document.querySelector(url);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // For page links, navigate to the page
            router.push(url);
        }
        closeNav(); // Close mobile nav after clicking
    };

    const isActiveLink = (url: string) => {
        if (url.startsWith('#')) {
            // For anchor links, active only when on home page
            return pathname === '/';
        } else {
            // For page links, active when on that specific page
            return pathname === url;
        }
    };

    return (
        <div className=''>
            {/* overlay */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`} onClick={closeNav}>

                {/* navlinks */}
                <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 
   delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
                    {navLinks.map((link) => {
                        const isActive = isActiveLink(link.url);
                        
                        return (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.url)}
                                className={`text-left w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] transition-colors duration-300 ${
                                    isActive 
                                        ? 'text-yellow-300 border-yellow-300' 
                                        : 'text-white hover:text-yellow-300 hover:border-yellow-300'
                                }`}
                            >
                                {link.label}
                            </button>
                        );
                    })}
                    {/* close button */}
                    <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:text-yellow-300 transition-colors duration-300' />
                </div>
            </div>
        </div>
    )
}

export default MobileNav