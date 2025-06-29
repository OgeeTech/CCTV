'use client';
import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const whatsappNumber = "+2348031234567";
  const whatsappMessage = "Hello! I'm interested in your CCTV services. Can you help me?";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-2xl z-[1001] border">
          <div className="bg-rose-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <FaComments className="mr-2" />
              <span className="font-medium">Live Support</span>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-lg mb-2">
                <p className="text-sm text-gray-700">
                  👋 Hello! How can we help you with your security needs today?
                </p>
              </div>
              <div className="text-xs text-gray-500">
                Amiable CCTV Team • Online now
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <FaWhatsapp className="mr-2" />
                Continue on WhatsApp
              </button>
              
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Quick Actions:</p>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded">
                    📞 Request a Call Back
                  </button>
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded">
                    💰 Get a Free Quote
                  </button>
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded">
                    🔧 Schedule Installation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-rose-600 hover:bg-rose-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-[1000] animate-pulse hover:animate-none"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaComments className="text-xl" />}
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-[999]"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
};

export default LiveChat;