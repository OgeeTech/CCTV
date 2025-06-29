import React from 'react'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    const scrollToSection = (url: string) => {
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeNav();
    };

    return (
        <div className='lg:hidden'>
            {/* Overlay */}
            <div 
                className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black/70 w-full h-screen`} 
                onClick={closeNav}
            >
                {/* Navigation Panel */}
                <div className={`${navOpen} fixed left-0 top-0 h-full transform transition-all duration-500 delay-300 w-[85%] sm:w-[70%] bg-gradient-to-b from-blue-950 to-blue-900 z-[1050] shadow-2xl`}>
                    
                    {/* Header */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-xl">Amiable</h2>
                                    <p className="text-rose-300 text-xs">CCTV Solutions</p>
                                </div>
                            </div>
                            <button 
                                onClick={closeNav}
                                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <CgClose className='w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="px-6 py-8 space-y-2">
                        {navLinks.map((link) => {
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.url)}
                                    className='w-full text-left text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center group'
                                >
                                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Contact Actions */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                        <div className="space-y-3">
                            <a
                                href="tel:+2348031234567"
                                className="flex items-center justify-center w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-4 rounded-lg transition-colors duration-300"
                            >
                                <FaPhone className="mr-2" />
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/2348031234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-300"
                            >
                                <FaWhatsapp className="mr-2" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav