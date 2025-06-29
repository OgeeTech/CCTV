'use client';
import Home from '@/Components/Home/Home'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <Home/>
    </div>
  )
}

export default Homepage