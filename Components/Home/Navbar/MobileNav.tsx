import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    const handleNavClick = (url: string) => {
        if (url.startsWith('#')) {
            // For anchor links, scroll to the section
            const element = document.querySelector(url);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        closeNav(); // Close mobile nav after clicking
    };

    return (
        <div className=' '>
            {/* overlay */}
            <div className={`fixed ${navOpen} inset-0 transfom transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`} onClick={closeNav}>

                {/* navlinks */}
                <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 
   delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
                    {navLinks.map((link) => {
                        return (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.url)}
                                className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-yellow-300 transition-colors duration-300'
                            >
                                {link.label}
                            </button>
                        );
                    })}
                    {/* close button */}
                    <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
                </div>
            </div>
        </div>
    )
}

export default MobileNav