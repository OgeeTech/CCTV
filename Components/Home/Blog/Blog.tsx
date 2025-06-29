'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaSearch, FaFilter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [emailSubscription, setEmailSubscription] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right CCTV Camera for Your Home",
      excerpt: "Learn about different types of security cameras and how to select the perfect one for your specific needs and budget.",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
      author: "ACE Tech Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Buying Guide",
      slug: "choose-right-cctv-camera-home"
    },
    {
      id: 2,
      title: "CCTV Maintenance Tips: Keep Your System Running Smoothly",
      excerpt: "Essential maintenance practices to ensure your security system operates at peak performance year-round.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
      author: "Tech Support",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Maintenance",
      slug: "cctv-maintenance-tips"
    },
    {
      id: 3,
      title: "IP vs Analog Cameras: Which is Better for Your Business?",
      excerpt: "Compare the pros and cons of IP and analog security cameras to make an informed decision for your business.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      author: "Security Expert",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Technology",
      slug: "ip-vs-analog-cameras-business"
    },
    {
      id: 4,
      title: "Remote Monitoring: Access Your Cameras from Anywhere",
      excerpt: "Step-by-step guide to setting up remote access for your security cameras using mobile apps and web browsers.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      author: "Installation Team",
      date: "December 28, 2024",
      readTime: "8 min read",
      category: "Setup Guide",
      slug: "remote-monitoring-access-cameras"
    },
    {
      id: 5,
      title: "Night Vision Technology: See Clearly in the Dark",
      excerpt: "Understanding infrared and low-light camera technologies for effective 24/7 security monitoring.",
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
      author: "Technical Writer",
      date: "December 20, 2024",
      readTime: "4 min read",
      category: "Technology",
      slug: "night-vision-technology"
    },
    {
      id: 6,
      title: "Security System Integration: Cameras, Alarms, and Access Control",
      excerpt: "Learn how to integrate different security components for a comprehensive protection system.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      author: "System Designer",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Integration",
      slug: "security-system-integration"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'buying-guide', label: 'Buying Guide', count: blogPosts.filter(p => p.category === 'Buying Guide').length },
    { id: 'maintenance', label: 'Maintenance', count: blogPosts.filter(p => p.category === 'Maintenance').length },
    { id: 'technology', label: 'Technology', count: blogPosts.filter(p => p.category === 'Technology').length },
    { id: 'setup-guide', label: 'Setup Guide', count: blogPosts.filter(p => p.category === 'Setup Guide').length },
    { id: 'integration', label: 'Integration', count: blogPosts.filter(p => p.category === 'Integration').length }
  ];

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || 
      post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Handle category filter
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle reading a blog post
  const handleReadPost = (post: any) => {
    // In a real application, this would navigate to the full blog post
    // For now, we'll show an alert and could navigate to a contact form
    alert(`Opening "${post.title}". In a full implementation, this would show the complete article.`);
    
    // Optional: Navigate to contact page for more information
    // router.push('/contact');
  };

  // Handle newsletter subscription
  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSubscription.trim()) return;

    setIsSubscribing(true);
    
    // Simulate subscription process
    setTimeout(() => {
      setSubscriptionMessage('Thank you for subscribing! You\'ll receive our latest security tips and updates.');
      setEmailSubscription('');
      setIsSubscribing(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubscriptionMessage('');
      }, 5000);
    }, 2000);
  };

  // Handle featured article read
  const handleFeaturedRead = () => {
    handleReadPost(blogPosts[0]);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Security Tips & Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay informed with the latest security tips, technology updates, and best practices 
            for maintaining your CCTV system across Nigeria.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center text-gray-600 mr-4 mb-2">
              <FaFilter className="mr-2" />
              <span className="font-medium text-sm">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-rose-100'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
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
                <button 
                  onClick={handleFeaturedRead}
                  className="bg-white text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center"
                >
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
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleReadPost(post)}
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
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadPost(post);
                      }}
                      className="text-rose-600 hover:text-rose-700 font-medium flex items-center transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 text-sm" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No Results Found */
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FaSearch className="text-6xl mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filter criteria
            </p>
            <button
              onClick={clearSearch}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

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
            
            {subscriptionMessage ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-md mx-auto">
                {subscriptionMessage}
              </div>
            ) : (
              <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={emailSubscription}
                  onChange={(e) => setEmailSubscription(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubscribing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Actions */}
        <div className="mt-12 text-center">
          <div className="bg-blue-950 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Professional CCTV Installation?</h3>
            <p className="mb-6 text-blue-200">
              Ready to implement the security tips you've learned? Contact our experts for 
              professional CCTV installation across all 36 states in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => router.push('/services')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-950 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;