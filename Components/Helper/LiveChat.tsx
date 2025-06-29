'use client';
import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaComments, FaPhone, FaEnvelope } from 'react-icons/fa';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const whatsappLink = "https://wa.me/qr/GL5V3VBV5SZLG1";
  const phoneNumber = "+2348060610584";
  const emailAddress = "juliusabiroh@gmail.com";

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  const requestCallBack = () => {
    const message = "Hello! I would like to request a call back for CCTV services. Please contact me at your earliest convenience.";
    const whatsappUrl = `https://wa.me/2348060610584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getFreeQuote = () => {
    const message = "Hello! I'm interested in getting a free quote for CCTV installation. Could you please provide me with pricing information?";
    const whatsappUrl = `https://wa.me/2348060610584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scheduleInstallation = () => {
    const message = "Hello! I would like to schedule a CCTV installation. Please let me know your available dates and times.";
    const whatsappUrl = `https://wa.me/2348060610584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = () => {
    const subject = "CCTV Services Inquiry";
    const body = "Hello,\n\nI'm interested in your CCTV services. Please provide me with more information.\n\nThank you.";
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors duration-300">
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
                ACE Tech Team • Online now
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
                  <button 
                    onClick={requestCallBack}
                    className="w-full text-left text-sm text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded transition-colors duration-300 flex items-center"
                  >
                    <FaPhone className="mr-2 text-xs" />
                    📞 Request a Call Back
                  </button>
                  <button 
                    onClick={getFreeQuote}
                    className="w-full text-left text-sm text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded transition-colors duration-300 flex items-center"
                  >
                    <FaEnvelope className="mr-2 text-xs" />
                    💰 Get a Free Quote
                  </button>
                  <button 
                    onClick={scheduleInstallation}
                    className="w-full text-left text-sm text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded transition-colors duration-300 flex items-center"
                  >
                    <FaComments className="mr-2 text-xs" />
                    🔧 Schedule Installation
                  </button>
                </div>
              </div>

              {/* Additional Contact Options */}
              <div className="border-t pt-3 mt-3">
                <p className="text-xs text-gray-500 mb-2 text-center">Or contact us directly:</p>
                <div className="flex space-x-2">
                  <button
                    onClick={callNow}
                    className="flex-1 bg-blue-950 hover:bg-blue-900 text-white py-2 px-3 rounded text-xs transition-colors duration-300 flex items-center justify-center"
                  >
                    <FaPhone className="mr-1" />
                    Call
                  </button>
                  <button
                    onClick={sendEmail}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded text-xs transition-colors duration-300 flex items-center justify-center"
                  >
                    <FaEnvelope className="mr-1" />
                    Email
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
        title="Live Chat Support"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaComments className="text-xl" />}
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-[999]"
        title="WhatsApp Us"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
};

export default LiveChat;