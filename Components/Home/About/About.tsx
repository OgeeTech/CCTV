import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaCertificate, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const certifications = [
    "CCTV Installation Certified",
    "Network Security Specialist",
    "IP Camera Configuration Expert",
    "Access Control Systems Certified"
  ];

  const serviceAreas = [
    "Bwari, Abuja",
    "Gwarinpa, Abuja", 
    "Kubwa, Abuja",
    "Kuje, Abuja",
    "Gwagwalada, Abuja",
    "Abaji, Abuja"
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            About Amiable CCTV
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            With over 8 years of experience in security systems installation and maintenance, 
            we are your trusted partner for comprehensive surveillance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">
              Your Security, Our Priority
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We specialize in providing cutting-edge CCTV installation, maintenance, and security 
              system solutions for homes, offices, and industrial facilities across Abuja and 
              surrounding areas. Our team of certified technicians ensures your property is 
              protected with the latest surveillance technology.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-blue-950 mb-4">Our Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCertificate className="text-rose-600 text-sm" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-blue-950 mb-4">Service Coverage Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-rose-600 text-sm" />
                    <span className="text-gray-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <h5 className="text-2xl font-bold text-rose-600">500+</h5>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <h5 className="text-2xl font-bold text-rose-600">8+</h5>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h5 className="text-2xl font-bold text-rose-600">24/7</h5>
                <p className="text-gray-600 text-sm">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
                alt="Professional CCTV Technician"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <div>
                  <h6 className="font-bold text-blue-950">Licensed & Insured</h6>
                  <p className="text-gray-600 text-sm">Fully certified technicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;