'use client';
import React from 'react';
import Image from 'next/image';
import { FaVideo, FaTools, FaUpload, FaDesktop } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaVideo className="text-3xl text-rose-600" />,
      title: "CCTV Installation",
      description: "Professional installation of security cameras for homes, offices, and industrial facilities.",
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg"
    },
    {
      id: 2,
      icon: <FaTools className="text-3xl text-rose-600" />,
      title: "Maintenance & Support",
      description: "Regular maintenance services and quick troubleshooting to ensure peak performance.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
    },
    {
      id: 3,
      icon: <FaUpload className="text-3xl text-rose-600" />,
      title: "System Upgrades",
      description: "Upgrade your existing analog systems to modern IP cameras with enhanced features.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      id: 4,
      icon: <FaDesktop className="text-3xl text-rose-600" />,
      title: "Remote Monitoring",
      description: "Configure remote access to monitor your property from anywhere in the world.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                
                <Link href="/services">
                  <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;