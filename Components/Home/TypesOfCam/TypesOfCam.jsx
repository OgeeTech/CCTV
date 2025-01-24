import React from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import TypesOfCamSlider from './TypesOfCamSlider';
const TypesOfCam = () => {
  return (
    <div>
      <div className="pt-20 pb-20">
        {/* section heading */}

        <SectionHeading heading="Our Expertise in CCTV Installations" />
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
