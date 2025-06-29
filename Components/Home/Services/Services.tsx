import React from 'react';
import Image from 'next/image';
import { FaVideo, FaTools, FaUpload, FaDesktop, FaDoorOpen, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaVideo className="text-3xl text-rose-600" />,
      title: "CCTV Installation",
      description: "Professional installation of security cameras for homes, offices, and industrial facilities with optimal positioning and coverage.",
      features: ["Home Security Systems", "Office Surveillance", "Industrial Monitoring", "Wireless & Wired Options"],
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg"
    },
    {
      id: 2,
      icon: <FaTools className="text-3xl text-rose-600" />,
      title: "Maintenance & Troubleshooting",
      description: "Regular maintenance services and quick troubleshooting to ensure your security systems operate at peak performance.",
      features: ["Regular System Checkups", "Quick Repairs", "Performance Optimization", "Emergency Support"],
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
    },
    {
      id: 3,
      icon: <FaUpload className="text-3xl text-rose-600" />,
      title: "System Upgrades",
      description: "Upgrade your existing analog systems to modern IP cameras with enhanced features and better image quality.",
      features: ["Analog to IP Conversion", "HD Camera Upgrades", "Storage Expansion", "Feature Enhancement"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      id: 4,
      icon: <FaDesktop className="text-3xl text-rose-600" />,
      title: "Remote Monitoring Setup",
      description: "Configure remote access to your security systems, allowing you to monitor your property from anywhere in the world.",
      features: ["Mobile App Setup", "Cloud Storage", "Real-time Alerts", "Multi-device Access"],
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
    },
    {
      id: 5,
      icon: <FaDoorOpen className="text-3xl text-rose-600" />,
      title: "Intercom & Access Control",
      description: "Install and configure intercom systems and access control solutions for enhanced security and convenience.",
      features: ["Video Intercoms", "Keycard Systems", "Biometric Access", "Remote Door Control"],
      image: "https://images.pexels.com/photos/7005538/pexels-photo-7005538.jpeg"
    },
    {
      id: 6,
      icon: <FaShieldAlt className="text-3xl text-rose-600" />,
      title: "Alarm Systems Integration",
      description: "Integrate alarm systems with your CCTV setup for comprehensive security coverage and automated responses.",
      features: ["Motion Detection", "Intrusion Alerts", "Fire Alarms", "Emergency Response"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs with 
            professional installation and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-rose-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;