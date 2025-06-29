'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How long does CCTV installation take?",
      answer: "Installation time varies depending on the number of cameras and complexity of the setup. A typical home installation with 4-8 cameras takes 4-6 hours, while larger commercial installations may take 1-2 days."
    },
    {
      id: 2,
      question: "What types of cameras do you install?",
      answer: "We install various types including IP cameras, analog cameras, wireless cameras, dome cameras, bullet cameras, and PTZ cameras. We'll recommend the best type based on your specific security needs and budget."
    },
    {
      id: 3,
      question: "Can I view my cameras remotely?",
      answer: "Yes! We set up remote viewing capabilities so you can monitor your property from anywhere using your smartphone, tablet, or computer. You'll receive login credentials and training on how to use the mobile app."
    },
    {
      id: 4,
      question: "Do you provide warranty on installations?",
      answer: "Yes, we provide a comprehensive warranty covering both equipment and installation work. Equipment typically comes with 1-2 years manufacturer warranty, and our installation work is guaranteed for 1 year."
    },
    {
      id: 5,
      question: "How much does CCTV installation cost?",
      answer: "Costs vary based on the number of cameras, type of equipment, and installation complexity. We offer free consultations and quotes. Basic home systems start from ₦150,000, while commercial systems vary widely based on requirements."
    },
    {
      id: 6,
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide regular maintenance services including system health checks, cleaning, software updates, and repairs. We offer both one-time service calls and annual maintenance contracts."
    },
    {
      id: 7,
      question: "Can you upgrade my existing analog system?",
      answer: "Absolutely! We specialize in upgrading analog systems to modern IP camera systems. In many cases, we can use your existing cabling, which reduces installation costs and time."
    },
    {
      id: 8,
      question: "What areas do you serve?",
      answer: "We primarily serve Abuja and surrounding areas including Bwari, Gwarinpa, Kubwa, Kuje, Gwagwalada, and Abaji. Contact us to confirm service availability in your specific location."
    },
    {
      id: 9,
      question: "Do you provide 24/7 support?",
      answer: "We offer 24/7 emergency support for critical issues. For non-emergency support, our regular hours are Monday-Saturday 8AM-6PM. Emergency support may incur additional charges."
    },
    {
      id: 10,
      question: "How do I choose the right number of cameras?",
      answer: "The number of cameras depends on your property size, layout, and security goals. During our free consultation, we'll assess your property and recommend optimal camera placement and quantities for maximum coverage."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get answers to common questions about our CCTV installation and security services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-blue-950 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <FaMinus className="text-rose-600" />
                    ) : (
                      <FaPlus className="text-rose-600" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-950 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+2348060610584"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/qr/GL5V3VBV5SZLG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;