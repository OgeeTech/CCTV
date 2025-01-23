import React from 'react'
import Hero from './Hero/Hero'
import TypeOfCam from './TypesOfCam/TypesOfCam'
import AOS from 'aos'
import 'aos/dist/aos.css';

// import Destination from './Destination/Destination'

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
        <div className='overflow-hidden '>
           <Hero/>
            <TypeOfCam/>
        </div>
    )
}

export default Home