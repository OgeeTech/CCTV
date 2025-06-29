import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
    'System Upgrades',
    'Access Control'
  ];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="w-[90%] xl:w-[80%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                <AiOutlineVideoCamera className='w-6 h-6 text-white' />
              </div>
              <h3 className="text-xl font-bold">ACE Tech. Consult Ltd</h3>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Your trusted partner for professional CCTV installation and security solutions across Abuja and surrounding states.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-blue-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-rose-500" />
                <a href="tel:+2348060610584" className="text-blue-200 hover:text-white transition-colors duration-300">
                  +234 806 061 0584
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-rose-500" />
                <a href="mailto:juliusabiroh@gmail.com" className="text-blue-200 hover:text-white transition-colors duration-300">
                  juliusabiroh@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-rose-500" />
                <a href="https://wa.me/qr/GL5V3VBV5SZLG1" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-rose-500 mt-1" />
                <span className="text-blue-200">
                  Abuja & Surrounding States
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="w-[90%] xl:w-[80%] mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 ACE Tech. Consult Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <span className="text-blue-200">|</span>
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