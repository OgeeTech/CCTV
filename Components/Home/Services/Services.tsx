'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaVideo, FaTools, FaUpload, FaDesktop, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <FaVideo className="text-3xl text-rose-600" />,
      title: "CCTV Installation",
      description: "Professional installation of security cameras for homes, offices, and industrial facilities.",
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
      detailedInfo: {
        overview: "Complete CCTV installation service with professional setup and configuration across all 36 states in Nigeria.",
        features: [
          "Site survey and security assessment",
          "Professional camera positioning",
          "High-quality cable management",
          "System configuration and testing",
          "User training and documentation",
          "1-year installation warranty"
        ],
        benefits: [
          "24/7 property monitoring",
          "Crime deterrent effect",
          "Evidence collection capability",
          "Remote viewing access",
          "Insurance premium reduction"
        ],
        pricing: "Starting from ₦150,000",
        duration: "1-3 days depending on complexity"
      }
    },
    {
      id: 2,
      icon: <FaTools className="text-3xl text-rose-600" />,
      title: "Maintenance & Support",
      description: "Regular maintenance services and quick troubleshooting to ensure peak performance.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
      detailedInfo: {
        overview: "Comprehensive maintenance and support services to keep your CCTV system running optimally year-round.",
        features: [
          "Regular system health checks",
          "Camera cleaning and calibration",
          "Software updates and patches",
          "Hardware replacement when needed",
          "24/7 emergency support",
          "Preventive maintenance schedules"
        ],
        benefits: [
          "Extended system lifespan",
          "Optimal video quality maintained",
          "Reduced downtime",
          "Priority technical support",
          "Cost-effective repairs"
        ],
        pricing: "From ₦25,000/visit",
        duration: "2-4 hours per service"
      }
    },
    {
      id: 3,
      icon: <FaUpload className="text-3xl text-rose-600" />,
      title: "System Upgrades",
      description: "Upgrade your existing analog systems to modern IP cameras with enhanced features.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      detailedInfo: {
        overview: "Transform your outdated analog CCTV system into a modern IP-based solution with enhanced capabilities.",
        features: [
          "Analog to IP conversion",
          "Higher resolution cameras",
          "Advanced motion detection",
          "Cloud storage integration",
          "Mobile app connectivity",
          "Existing cable utilization"
        ],
        benefits: [
          "Improved image quality",
          "Remote access capabilities",
          "Smart notifications",
          "Future-proof technology",
          "Enhanced security features"
        ],
        pricing: "From ₦80,000 per camera",
        duration: "1-2 days for complete upgrade"
      }
    },
    {
      id: 4,
      icon: <FaDesktop className="text-3xl text-rose-600" />,
      title: "Remote Monitoring",
      description: "Configure remote access to monitor your property from anywhere in the world.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      detailedInfo: {
        overview: "Professional setup of remote monitoring capabilities allowing you to view your cameras from anywhere using mobile devices or computers.",
        features: [
          "Mobile app configuration",
          "Web browser access setup",
          "Cloud storage integration",
          "Real-time notifications",
          "Multi-device synchronization",
          "Secure encrypted connections"
        ],
        benefits: [
          "Monitor from anywhere globally",
          "Instant security alerts",
          "Multiple user access",
          "Recorded footage access",
          "Peace of mind while traveling"
        ],
        pricing: "From ₦50,000 setup fee",
        duration: "4-6 hours configuration"
      }
    }
  ];

  const handleCardFlip = (serviceId: number) => {
    setFlippedCard(flippedCard === serviceId ? null : serviceId);
  };

  const handleBackToFront = () => {
    setFlippedCard(null);
  };

  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs across all 36 states in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="relative h-[500px] perspective-1000"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === service.id ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                  
                  <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                    <div>
                      <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                    </div>
                    
                    <button 
                      onClick={() => handleCardFlip(service.id)}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-950 to-blue-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 h-full flex flex-col text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-yellow-300">{service.title}</h3>
                      <button
                        onClick={handleBackToFront}
                        className="text-white hover:text-yellow-300 transition-colors duration-300"
                      >
                        <FaArrowLeft />
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4">
                      <div>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {service.detailedInfo.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-yellow-300 mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.detailedInfo.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs">
                              <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-100">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-yellow-300 mb-2 text-sm">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.detailedInfo.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs">
                              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-blue-100">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white/10 rounded-lg p-3 mt-4">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="text-blue-200">Starting Price:</span>
                          <span className="font-bold text-yellow-300">{service.detailedInfo.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-blue-200">Duration:</span>
                          <span className="text-blue-100">{service.detailedInfo.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <Link href="/contact">
                        <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
                          Get Quote
                        </button>
                      </Link>
                      <Link href="/services">
                        <button className="w-full border border-white/30 text-white hover:bg-white/10 py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                          Full Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Services;