import React from 'react';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Gwarinpa, Abuja",
      rating: 5,
      review: "Excellent service! The team installed our home CCTV system professionally and explained everything clearly. The remote monitoring feature gives us peace of mind when we're away.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      project: "Residential CCTV Installation"
    },
    {
      id: 2,
      name: "Mrs. Sarah Okafor",
      location: "Kubwa, Abuja",
      rating: 5,
      review: "I'm thoroughly impressed with their professionalism and attention to detail. They upgraded our old analog system to IP cameras, and the difference in quality is amazing!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      project: "System Upgrade"
    },
    {
      id: 3,
      name: "Michael Emeka",
      location: "Bwari, Abuja",
      rating: 5,
      review: "Outstanding work! They installed CCTV cameras for our office building and provided excellent after-sales support. Highly recommend their services to anyone.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      project: "Commercial Installation"
    },
    {
      id: 4,
      name: "Dr. Fatima Aliyu",
      location: "Kuje, Abuja",
      rating: 5,
      review: "Professional, reliable, and affordable. The team was punctual and completed the installation within the promised timeframe. The system works perfectly!",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      project: "Medical Facility Security"
    },
    {
      id: 5,
      name: "Chief Emmanuel Okoro",
      location: "Gwagwalada, Abuja",
      rating: 5,
      review: "Exceptional service from start to finish! They provided a comprehensive security solution for our warehouse. The 24/7 monitoring capability is exactly what we needed.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      project: "Industrial Surveillance"
    },
    {
      id: 6,
      name: "Grace Nnamdi",
      location: "Abaji, Abuja",
      rating: 5,
      review: "Amazing experience! The technicians were knowledgeable and patient in explaining how to use the system. The mobile app makes monitoring so convenient.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      project: "Smart Home Integration"
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
      />
    ));
  };

  return (
    <div className="py-20 bg-blue-950">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={true}
          dotListClass="custom-dot-list-style"
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white rounded-xl p-6 shadow-xl h-full relative">
                <FaQuoteLeft className="text-rose-600 text-2xl mb-4" />
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <p className="text-rose-600 text-xs font-medium">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
            <p className="text-blue-200">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">8+</h3>
            <p className="text-blue-200">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
            <p className="text-blue-200">Support Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
            <p className="text-blue-200">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;