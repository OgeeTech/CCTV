'use client';
import React from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import TypesOfCamSlider from './TypesOfCamSlider';

const TypesOfCam = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="pt-20 pb-20">
        {/* section heading */}
        <SectionHeading 
          heading="Our Expertise in CCTV Installations" 
          description="Discover our comprehensive range of professional security camera solutions designed to meet every surveillance need. From residential homes to large industrial complexes, we provide cutting-edge technology with expert installation services."
        />
        
        {/* section content */}
        <div className="mt-14 w-[80%] mx-auto">
          {/* slider */}
          <TypesOfCamSlider />
        </div>
      </div>
    </div>
  );
}

export default TypesOfCam