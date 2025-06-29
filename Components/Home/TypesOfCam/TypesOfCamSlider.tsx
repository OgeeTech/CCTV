'use client';
import React from 'react'
import { destinationData } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const TypesOfCamSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
     <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        arrows={true}
     >
        {destinationData.map((data) => {
          return (
            <div key={data.id} className="m-3">
              <div className="flip-card group cursor-pointer">
                <div className="flip-card-inner relative w-full h-[400px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  
                  {/* Front of card */}
                  <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-full">
                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 rounded-xl"></div>

                      {/* image */}
                      <Image
                        src={data.image}
                        alt={data.country}
                        fill
                        className="object-cover rounded-xl"
                      />

                      {/* Front content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                        <h3 className='text-2xl font-bold mb-2'>{data.country}</h3>
                        <p className='text-sm text-blue-200 mb-3'>{data.travelers}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Professional Grade
                          </span>
                          <span className="text-xs text-gray-300">Hover for details</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-blue-950 to-blue-800 p-6 flex flex-col justify-center text-white shadow-lg">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4 text-yellow-300">{data.country}</h3>
                      
                      <div className="space-y-3 mb-6">
                        {data.features.map((feature, index) => (
                          <div key={index} className="flex items-center justify-start space-x-2">
                            <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                            <span className="text-sm text-blue-100">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <p className="text-xs text-blue-200 mb-2">Best For:</p>
                        <p className="text-sm font-medium">{data.bestFor}</p>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-green-500 text-white px-2 py-1 rounded">
                          {data.warranty}
                        </span>
                        <span className="text-blue-200">
                          From ₦{data.priceRange}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
     </Carousel>

     <style jsx>{`
       .flip-card {
         perspective: 1000px;
       }
       
       .flip-card-inner {
         transform-style: preserve-3d;
       }
       
       .flip-card-front,
       .flip-card-back {
         backface-visibility: hidden;
       }
       
       .flip-card-back {
         transform: rotateY(180deg);
       }
       
       .rotate-y-180 {
         transform: rotateY(180deg);
       }
       
       .backface-hidden {
         backface-visibility: hidden;
       }
       
       .transform-style-preserve-3d {
         transform-style: preserve-3d;
       }
     `}</style>
    </div>
  )
}

export default TypesOfCamSlider