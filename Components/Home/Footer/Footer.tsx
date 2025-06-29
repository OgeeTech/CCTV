import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineVideoCamera } from 'react-icons/ai';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'CCTV Installation',
    'System Maintenance',
    'Remote Monitoring',
    'System Upgrades'
  ];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="w-[90%] xl:w-[80%] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <AiOutlineVideoCamera className='w-5 h-5 text-white' />
              </div>
              <h3 className="text-lg font-bold">ACE Tech. Consult Ltd</h3>
            </div>
            <p className="text-blue-200 mb-4 leading-relaxed text-sm">
              Professional CCTV installation and security solutions across all 36 states in Nigeria and FCT.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <FaPhone className="text-rose-500 text-xs" />
                <a href="tel:+2348060610584" className="text-blue-200 hover:text-white transition-colors duration-300">
                  +234 806 061 0584
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FaEnvelope className="text-rose-500 text-xs" />
                <a href="mailto:juliusabiroh@gmail.com" className="text-blue-200 hover:text-white transition-colors duration-300">
                  juliusabiroh@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FaMapMarkerAlt className="text-rose-500 text-xs" />
                <span className="text-blue-200">Bwari, Abuja, Nigeria</span>
              </div>
            </div>

            {/* Nationwide Coverage Badge */}
            <div className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              🇳🇬 Nationwide Service - All 36 States + FCT
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-blue-200 text-sm">
                  {service}
                </li>
              ))}
            </ul>
            
            {/* WhatsApp Button */}
            <div className="mt-4">
              <a
                href="https://wa.me/qr/GL5V3VBV5SZLG1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-300"
              >
                <FaWhatsapp className="mr-1" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="w-[90%] xl:w-[80%] mx-auto py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-blue-200 mb-2 md:mb-0">
              © 2025 ACE Tech. Consult Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">
                Developed by{' '}
                <a 
                  href="https://github.com/OgeeTech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300 transition-colors duration-300 font-medium"
                >
                  OGTech
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;