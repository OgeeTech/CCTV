'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='fixed bottom-4 animate-pulse right-4'>
            {isVisible && <button onClick={scrollToTop} className='bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
                <FaArrowUp />
            </button>}
        </div>
    );
};

export default ScrollToTop;
