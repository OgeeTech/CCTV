import React, { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaEye, FaStar, FaFilter } from 'react-icons/fa';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'cameras', label: 'Cameras' },
    { id: 'dvr-nvr', label: 'DVR/NVR' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'monitors', label: 'Monitors' }
  ];

  const products = [
    {
      id: 1,
      name: "4MP IP Dome Camera",
      category: "cameras",
      price: 45000,
      originalPrice: 55000,
      rating: 4.8,
      reviews: 124,
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
      features: ["4MP Resolution", "Night Vision", "Weatherproof", "Motion Detection"],
      inStock: true
    },
    {
      id: 2,
      name: "8-Channel NVR System",
      category: "dvr-nvr",
      price: 120000,
      originalPrice: 140000,
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      features: ["8 Channels", "4TB Storage", "Remote Access", "Mobile App"],
      inStock: true
    },
    {
      id: 3,
      name: "Bullet Security Camera",
      category: "cameras",
      price: 35000,
      originalPrice: 42000,
      rating: 4.6,
      reviews: 156,
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
      features: ["2MP Resolution", "IR Night Vision", "Outdoor Use", "Easy Install"],
      inStock: true
    },
    {
      id: 4,
      name: "Security Monitor 24\"",
      category: "monitors",
      price: 85000,
      originalPrice: 95000,
      rating: 4.7,
      reviews: 67,
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      features: ["24 Inch Display", "Full HD", "Multiple Inputs", "Wall Mount"],
      inStock: false
    },
    {
      id: 5,
      name: "Power Supply Unit",
      category: "accessories",
      price: 15000,
      originalPrice: 18000,
      rating: 4.5,
      reviews: 203,
      image: "https://images.pexels.com/photos/7005538/pexels-photo-7005538.jpeg",
      features: ["12V DC", "5A Output", "Multiple Outputs", "LED Indicator"],
      inStock: true
    },
    {
      id: 6,
      name: "PTZ Security Camera",
      category: "cameras",
      price: 180000,
      originalPrice: 220000,
      rating: 4.9,
      reviews: 45,
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      features: ["Pan/Tilt/Zoom", "5MP Resolution", "Auto Tracking", "Zoom 20x"],
      inStock: true
    },
    {
      id: 7,
      name: "Coaxial Cable 100m",
      category: "accessories",
      price: 25000,
      originalPrice: 30000,
      rating: 4.4,
      reviews: 178,
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
      features: ["RG59 Cable", "100m Length", "High Quality", "Easy Installation"],
      inStock: true
    },
    {
      id: 8,
      name: "16-Channel DVR",
      category: "dvr-nvr",
      price: 95000,
      originalPrice: 110000,
      rating: 4.8,
      reviews: 92,
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      features: ["16 Channels", "2TB Storage", "H.264 Compression", "Remote View"],
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
      />
    ));
  };

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Security Equipment Shop
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Browse our selection of high-quality security cameras, DVR/NVR systems, and accessories. 
            All products come with warranty and professional installation support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <FaFilter className="mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => openProductModal(product)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaEye className="text-gray-700" />
                  </button>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-rose-600 text-white px-2 py-1 rounded text-xs font-medium">
                      SALE
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-950 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-rose-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1 h-1 bg-rose-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  disabled={!product.inStock}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center ${
                    product.inStock
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FaShoppingCart className="mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeProductModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
                >
                  ×
                </button>
                
                <div className="relative h-64">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    {selectedProduct.name}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {renderStars(selectedProduct.rating)}
                    </div>
                    <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-rose-600">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    {selectedProduct.originalPrice > selectedProduct.price && (
                      <span className="text-xl text-gray-500 line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-950 mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-rose-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      disabled={!selectedProduct.inStock}
                      className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                        selectedProduct.inStock
                          ? 'bg-rose-600 hover:bg-rose-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button className="flex-1 bg-blue-950 hover:bg-blue-900 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
                      Contact for Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-950 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Professional Installation?</h3>
            <p className="mb-6 text-blue-200">
              Purchase any equipment and get professional installation services. 
              Our certified technicians ensure optimal setup and configuration.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Get Installation Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;