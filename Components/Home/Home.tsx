'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import TypeOfCam from './TypesOfCam/TypesOfCam'
import About from './About/About'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import Shop from './Shop/Shop'
import Blog from './Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom'
            })
        }
        initAOS()
    }, []);
    
    return (
        <div className='overflow-hidden'>
           <Hero/>
           <TypeOfCam/>
           <About/>
           <Services/>
           <Portfolio/>
           <Testimonials/>
           <Shop/>
           <Blog/>
           <FAQ/>
           <Contact/>
        </div>
    )
}

export default Home