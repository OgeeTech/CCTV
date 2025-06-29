'use client';
import React from 'react';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right CCTV Camera for Your Home",
      excerpt: "Learn about different types of security cameras and how to select the perfect one for your specific needs and budget.",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
      author: "Amiable Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Buying Guide"
    },
    {
      id: 2,
      title: "CCTV Maintenance Tips: Keep Your System Running Smoothly",
      excerpt: "Essential maintenance practices to ensure your security system operates at peak performance year-round.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
      author: "Tech Support",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "IP vs Analog Cameras: Which is Better for Your Business?",
      excerpt: "Compare the pros and cons of IP and analog security cameras to make an informed decision for your business.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      author: "Security Expert",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      id: 4,
      title: "Remote Monitoring: Access Your Cameras from Anywhere",
      excerpt: "Step-by-step guide to setting up remote access for your security cameras using mobile apps and web browsers.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      author: "Installation Team",
      date: "December 28, 2024",
      readTime: "8 min read",
      category: "Setup Guide"
    },
    {
      id: 5,
      title: "Night Vision Technology: See Clearly in the Dark",
      excerpt: "Understanding infrared and low-light camera technologies for effective 24/7 security monitoring.",
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
      author: "Technical Writer",
      date: "December 20, 2024",
      readTime: "4 min read",
      category: "Technology"
    },
    {
      id: 6,
      title: "Security System Integration: Cameras, Alarms, and Access Control",
      excerpt: "Learn how to integrate different security components for a comprehensive protection system.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      author: "System Designer",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Integration"
    }
  ];

  const categories = [
    "All Posts",
    "Buying Guide",
    "Maintenance", 
    "Technology",
    "Setup Guide",
    "Integration"
  ];

  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Security Tips & Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay informed with the latest security tips, technology updates, and best practices 
            for maintaining your CCTV system.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-950 to-rose-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 text-white">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-blue-200 text-sm mb-6">
                  <FaUser className="mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <FaCalendar className="mr-2" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <FaClock className="mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-white text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center">
                  Read Full Article
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              <div className="relative h-64 lg:h-96">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3 line-clamp-2 group-hover:text-rose-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaUser className="mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <FaClock className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center transition-colors duration-300">
                    Read More
                    <FaArrowRight className="ml-2 text-sm" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Stay Updated with Security Tips
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest security tips, product updates, 
              and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;