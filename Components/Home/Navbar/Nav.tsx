'use client';
import React, { useEffect, useState } from 'react'
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    // Track active section on home page
    useEffect(() => {
        if (pathname === '/') {
            const handleScroll = () => {
                const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
                const scrollPosition = window.scrollY + 100;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const offsetTop = element.offsetTop;
                        const offsetHeight = element.offsetHeight;
                        
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial position
            
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [pathname]);

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
    };

    const isActiveLink = (url: string) => {
        if (url.startsWith('#')) {
            // For anchor links on home page, check if it matches current section
            if (pathname === '/') {
                const sectionId = url.substring(1); // Remove the #
                return activeSection === sectionId;
            }
            return false;
        } else {
            // For page links, active when on that specific page
            return pathname === url;
        }
    };

    return (
        <div className={` ${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
                        <AiOutlineVideoCamera className='w-6 h-6 text-white' />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">ACE Tech</h1>
                </Link>

                {/* Nav links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = isActiveLink(link.url);
                        
                        return (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.url)}
                                className={`relative text-base font-medium cursor-pointer transition-colors duration-300 ${
                                    isActive 
                                        ? 'text-rose-400' 
                                        : 'text-white hover:text-rose-400'
                                } after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:bg-rose-400 after:transition-all after:duration-300 ${
                                    isActive 
                                        ? 'after:w-full' 
                                        : 'after:w-0 hover:after:w-full'
                                }`}
                            >
                                {link.label}
                            </button>
                        );
                    })}
                </div>

                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => handleNavClick('#contact')}
                        className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg font-medium"
                    >
                        Hire Us
                    </button>
                    {/* burger menu */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav