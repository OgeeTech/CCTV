'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
      title: "Residential CCTV Installation",
      category: "residential",
      description: "Complete home security system with 8 HD cameras and remote monitoring setup."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      title: "Office Security Upgrade",
      category: "commercial",
      description: "Upgraded analog system to IP cameras with access control integration."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
      title: "Industrial Surveillance",
      category: "industrial",
      description: "Large-scale industrial facility monitoring with 24/7 remote access."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      title: "Retail Store Security",
      category: "commercial",
      description: "Multi-camera setup with POS integration and theft prevention features."
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/7005538/pexels-photo-7005538.jpeg",
      title: "Apartment Complex",
      category: "residential",
      description: "Comprehensive security solution for 50-unit apartment complex."
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      title: "Warehouse Security",
      category: "industrial",
      description: "High-definition surveillance system with motion detection and alerts."
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
      title: "School Campus Security",
      category: "commercial",
      description: "Educational facility security with access control and emergency systems."
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      title: "Villa Security System",
      category: "residential",
      description: "Luxury villa with perimeter security and smart home integration."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Take a look at some of our recent CCTV installation projects across different sectors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-rose-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(index)}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-rose-400 transition-colors"
              >
                <FaTimes />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-rose-400 transition-colors"
              >
                <FaChevronLeft />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-rose-400 transition-colors"
              >
                <FaChevronRight />
              </button>

              <div className="relative h-[70vh]">
                <Image
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-bold mb-2">{filteredItems[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;