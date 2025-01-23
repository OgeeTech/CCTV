import React from 'react'
import Hero from './Hero/Hero'
import TypeOfCam from './TypesOfCam/TypesOfCam'
// import Destination from './Destination/Destination'

const Home = () => {
    return (
        <div className='overflow-hidden '>
           <Hero/>
            <TypeOfCam/>
        </div>
    )
}

export default Home