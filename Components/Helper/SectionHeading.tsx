import React from 'react'
type Props = {
    heading: string;
    description?: string;
};
const SectionHeading = ({ heading, description }: Props) => {
  return (
    <div>
          <div className='w-[80%] mx-auto'>
              <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
              {description && (
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>{description}</p>
              )}
          </div>
    </div>
  )
}

export default SectionHeading