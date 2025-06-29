'use client';
import Home from '@/Components/Home/Home'
import React, { useEffect } from 'react'

const Homepage = () => {
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Increased delay to ensure page is fully loaded
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <Home/>
    </div>
  )
}

export default Homepage