'use client';
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const StickyButtons = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[999] hidden lg:flex flex-col space-y-4">
      {/* Call Button */}
      <a
        href="tel:+2348031234567"
        className="bg-blue-950 hover:bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
        title="Call Now"
      >
        <FaPhone className="text-lg group-hover:animate-pulse" />
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@amiablecctv.com"
        className="bg-rose-600 hover:bg-rose-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
        title="Send Email"
      >
        <FaEnvelope className="text-lg group-hover:animate-pulse" />
      </a>
    </div>
  );
};

export default StickyButtons;