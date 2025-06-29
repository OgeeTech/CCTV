'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaSearch, FaFilter, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [emailSubscription, setEmailSubscription] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right CCTV Camera for Your Home",
      excerpt: "Learn about different types of security cameras and how to select the perfect one for your specific needs and budget.",
      fullContent: `
        <h3>Understanding Your Security Needs</h3>
        <p>Choosing the right CCTV camera for your home is crucial for effective security. With numerous options available in the Nigerian market, it's important to understand what works best for your specific situation.</p>
        
        <h4>Types of CCTV Cameras</h4>
        <p><strong>1. Dome Cameras:</strong> Perfect for indoor use, these cameras offer 360-degree coverage and are vandal-resistant. Ideal for living rooms, offices, and retail spaces.</p>
        
        <p><strong>2. Bullet Cameras:</strong> Best for outdoor monitoring with long-range viewing capabilities. Great for perimeter security and entrance monitoring.</p>
        
        <p><strong>3. PTZ Cameras:</strong> Pan, tilt, and zoom functionality makes these perfect for large areas that need active monitoring.</p>
        
        <h4>Key Factors to Consider</h4>
        <p><strong>Resolution:</strong> Choose between 1080p (Full HD) and 4K based on your budget and detail requirements. For most homes, 1080p provides excellent clarity.</p>
        
        <p><strong>Night Vision:</strong> Essential for 24/7 security. Look for cameras with infrared LEDs that can see clearly in complete darkness.</p>
        
        <p><strong>Weather Resistance:</strong> For outdoor cameras, ensure they have IP66 or higher rating to withstand Nigeria's rainy season.</p>
        
        <p><strong>Storage Options:</strong> Consider local storage (DVR/NVR) vs cloud storage based on your internet connectivity and privacy preferences.</p>
        
        <h4>Budget Considerations</h4>
        <p>Quality CCTV systems in Nigeria range from ₦150,000 for basic setups to ₦500,000+ for premium systems. Remember, this is an investment in your family's safety.</p>
        
        <h4>Professional Installation</h4>
        <p>While DIY installation is possible, professional installation ensures optimal camera placement, proper wiring, and system configuration. Our team provides nationwide installation services across all 36 states.</p>
        
        <p><em>Contact ACE Tech for a free consultation and personalized camera recommendations for your home.</em></p>
      `,
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
      fullContent: `
        <h3>Why Regular Maintenance Matters</h3>
        <p>Your CCTV system is your first line of defense against security threats. Regular maintenance ensures it functions optimally when you need it most, especially during Nigeria's challenging weather conditions.</p>
        
        <h4>Monthly Maintenance Tasks</h4>
        <p><strong>Camera Cleaning:</strong> Dust and rain can accumulate on camera lenses. Clean with a soft, dry cloth monthly. For outdoor cameras, check after heavy rains.</p>
        
        <p><strong>Check Recording Quality:</strong> Review recorded footage to ensure all cameras are capturing clear images. Look for any degradation in video quality.</p>
        
        <p><strong>Test Remote Access:</strong> Verify that you can access your cameras remotely via mobile app or web browser.</p>
        
        <h4>Quarterly Maintenance</h4>
        <p><strong>Cable Inspection:</strong> Check all cables for damage, especially outdoor installations. Nigeria's weather can cause cable degradation over time.</p>
        
        <p><strong>Storage Management:</strong> Review and organize recorded footage. Delete unnecessary files to free up storage space.</p>
        
        <p><strong>Software Updates:</strong> Update camera firmware and mobile apps to ensure security and performance improvements.</p>
        
        <h4>Annual Professional Service</h4>
        <p><strong>Complete System Check:</strong> Have a professional technician inspect your entire system, including power supplies, connections, and camera positioning.</p>
        
        <p><strong>Performance Optimization:</strong> Professional calibration ensures optimal camera angles and recording settings.</p>
        
        <h4>Common Issues and Solutions</h4>
        <p><strong>Blurry Images:</strong> Usually caused by dirty lenses or incorrect focus. Clean lenses and adjust focus as needed.</p>
        
        <p><strong>Night Vision Problems:</strong> Check infrared LEDs and clean camera housing. Replace cameras if LEDs are failing.</p>
        
        <p><strong>Connection Issues:</strong> Verify network settings and cable connections. Restart system if necessary.</p>
        
        <h4>Power Backup Considerations</h4>
        <p>Given Nigeria's power challenges, ensure your UPS system is maintained and batteries are replaced every 2-3 years.</p>
        
        <p><em>Schedule regular maintenance with ACE Tech to keep your system running perfectly across all 36 states.</em></p>
      `,
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
      fullContent: `
        <h3>Understanding the Technology</h3>
        <p>The choice between IP and analog cameras is crucial for your business security investment. Each technology has distinct advantages depending on your specific needs and budget.</p>
        
        <h4>Analog Camera Systems</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Lower initial cost - perfect for budget-conscious businesses</li>
          <li>Simple installation using existing coaxial cables</li>
          <li>Reliable performance with minimal network requirements</li>
          <li>Easy to understand and operate</li>
        </ul>
        
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Limited resolution (typically 720p maximum)</li>
          <li>Requires separate cables for power and video</li>
          <li>Limited remote access capabilities</li>
          <li>Fewer advanced features</li>
        </ul>
        
        <h4>IP Camera Systems</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>High resolution options (1080p to 4K)</li>
          <li>Single cable for power and data (PoE)</li>
          <li>Advanced features like motion detection and analytics</li>
          <li>Excellent remote access and mobile integration</li>
          <li>Scalable and future-proof technology</li>
        </ul>
        
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Higher initial investment</li>
          <li>Requires stable network infrastructure</li>
          <li>More complex setup and configuration</li>
          <li>Dependent on network reliability</li>
        </ul>
        
        <h4>Cost Analysis for Nigerian Businesses</h4>
        <p><strong>Analog Systems:</strong> Starting from ₦120,000 for a 4-camera setup</p>
        <p><strong>IP Systems:</strong> Starting from ₦200,000 for a 4-camera setup</p>
        
        <h4>Which Should You Choose?</h4>
        <p><strong>Choose Analog If:</strong></p>
        <ul>
          <li>You have a limited budget</li>
          <li>You need basic monitoring without advanced features</li>
          <li>Your business has existing coaxial cable infrastructure</li>
          <li>You prefer simple, reliable technology</li>
        </ul>
        
        <p><strong>Choose IP If:</strong></p>
        <ul>
          <li>You want high-definition video quality</li>
          <li>Remote monitoring is important for your business</li>
          <li>You need advanced features like motion alerts</li>
          <li>You're planning for future expansion</li>
        </ul>
        
        <h4>Hybrid Solutions</h4>
        <p>Many businesses start with analog and gradually upgrade to IP cameras. This approach allows budget-friendly implementation while planning for future enhancements.</p>
        
        <h4>Professional Recommendation</h4>
        <p>For most modern businesses in Nigeria, IP cameras offer better long-term value despite higher initial costs. The superior image quality and remote access capabilities justify the investment.</p>
        
        <p><em>Contact ACE Tech for a customized assessment of your business needs across all Nigerian states.</em></p>
      `,
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
      fullContent: `
        <h3>The Power of Remote Monitoring</h3>
        <p>Remote monitoring transforms your CCTV system from a passive recording device into an active security tool. Whether you're traveling for business or monitoring multiple locations across Nigeria, remote access keeps you connected to your property 24/7.</p>
        
        <h4>Setting Up Remote Access</h4>
        <p><strong>Step 1: Network Configuration</strong></p>
        <p>Ensure your DVR/NVR is connected to a stable internet connection. For businesses in areas with unreliable internet, consider backup connections or mobile data solutions.</p>
        
        <p><strong>Step 2: Port Forwarding</strong></p>
        <p>Configure your router to allow external access to your CCTV system. This involves setting up port forwarding for the specific ports used by your system.</p>
        
        <p><strong>Step 3: Dynamic DNS Setup</strong></p>
        <p>Since most Nigerian ISPs provide dynamic IP addresses, set up DDNS to maintain consistent access to your system.</p>
        
        <h4>Mobile App Configuration</h4>
        <p><strong>Popular Apps for Different Brands:</strong></p>
        <ul>
          <li>Hikvision: Hik-Connect</li>
          <li>Dahua: DMSS</li>
          <li>Uniview: EZView</li>
          <li>Generic: CMS Mobile</li>
        </ul>
        
        <p><strong>App Setup Process:</strong></p>
        <ol>
          <li>Download the appropriate app from Google Play or App Store</li>
          <li>Create an account with the manufacturer</li>
          <li>Add your device using QR code or manual configuration</li>
          <li>Test live viewing and playback functions</li>
        </ol>
        
        <h4>Web Browser Access</h4>
        <p>Most modern systems support web browser access without additional plugins. Simply enter your system's external IP address and port number in any web browser.</p>
        
        <h4>Security Best Practices</h4>
        <p><strong>Strong Passwords:</strong> Use complex passwords with a mix of letters, numbers, and symbols. Change default passwords immediately.</p>
        
        <p><strong>Regular Updates:</strong> Keep firmware updated to patch security vulnerabilities.</p>
        
        <p><strong>VPN Access:</strong> For enhanced security, consider accessing your system through a VPN connection.</p>
        
        <h4>Troubleshooting Common Issues</h4>
        <p><strong>Cannot Connect Remotely:</strong></p>
        <ul>
          <li>Check internet connection on both ends</li>
          <li>Verify port forwarding settings</li>
          <li>Confirm DDNS is working properly</li>
          <li>Check firewall settings</li>
        </ul>
        
        <p><strong>Slow Loading:</strong></p>
        <ul>
          <li>Reduce video quality for remote viewing</li>
          <li>Check internet bandwidth</li>
          <li>Optimize camera settings for remote access</li>
        </ul>
        
        <h4>Data Usage Considerations</h4>
        <p>Remote monitoring can consume significant data. In Nigeria, where data costs can be high, optimize settings to balance quality with data usage.</p>
        
        <h4>Multi-Location Monitoring</h4>
        <p>For businesses with multiple locations across different states, centralized monitoring allows oversight of all properties from a single interface.</p>
        
        <p><em>Need help setting up remote monitoring? ACE Tech provides configuration services nationwide.</em></p>
      `,
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
      fullContent: `
        <h3>The Importance of Night Vision</h3>
        <p>Most security incidents occur under cover of darkness. In Nigeria, where power outages are common, having reliable night vision capabilities is essential for comprehensive security coverage.</p>
        
        <h4>Types of Night Vision Technology</h4>
        <p><strong>Infrared (IR) LEDs:</strong></p>
        <p>The most common night vision technology uses infrared LEDs to illuminate the area. These LEDs are invisible to the human eye but provide clear black and white images for the camera.</p>
        
        <p><strong>Starlight Technology:</strong></p>
        <p>Advanced sensors that can capture color images in extremely low light conditions. More expensive but provides superior image quality.</p>
        
        <p><strong>Thermal Imaging:</strong></p>
        <p>Detects heat signatures rather than visible light. Excellent for perimeter security but typically more expensive.</p>
        
        <h4>IR LED Specifications</h4>
        <p><strong>IR Range:</strong> Measured in meters, this indicates how far the camera can see in complete darkness.</p>
        <ul>
          <li>Basic cameras: 10-20 meters</li>
          <li>Standard cameras: 20-30 meters</li>
          <li>Professional cameras: 50+ meters</li>
        </ul>
        
        <p><strong>IR Cut Filter:</strong> Automatically switches between day and night modes for optimal image quality in all lighting conditions.</p>
        
        <h4>Optimizing Night Vision Performance</h4>
        <p><strong>Proper Positioning:</strong></p>
        <ul>
          <li>Avoid pointing cameras directly at light sources</li>
          <li>Position cameras to minimize IR reflection</li>
          <li>Consider the IR range when planning camera placement</li>
        </ul>
        
        <p><strong>Environmental Factors:</strong></p>
        <ul>
          <li>Rain and fog can reduce IR effectiveness</li>
          <li>Dust on the camera lens significantly impacts night vision</li>
          <li>Spider webs can trigger false motion alerts</li>
        </ul>
        
        <h4>Common Night Vision Problems</h4>
        <p><strong>Overexposure:</strong> Objects too close to the camera appear washed out. Solution: Adjust IR intensity or reposition camera.</p>
        
        <p><strong>IR Reflection:</strong> Shiny surfaces can cause glare. Solution: Angle cameras to avoid reflective surfaces.</p>
        
        <p><strong>Insufficient Range:</strong> Dark areas beyond IR range. Solution: Add additional IR illuminators or upgrade to higher-power cameras.</p>
        
        <h4>Maintenance for Night Vision</h4>
        <p><strong>Regular Cleaning:</strong> Clean camera lenses monthly, especially during dusty harmattan season in Northern Nigeria.</p>
        
        <p><strong>IR LED Lifespan:</strong> IR LEDs typically last 50,000+ hours but may dim over time. Replace cameras when night vision quality degrades significantly.</p>
        
        <h4>Power Considerations</h4>
        <p>Night vision cameras consume more power when IR LEDs are active. Ensure adequate power supply, especially important during Nigeria's frequent power outages.</p>
        
        <h4>Choosing the Right Night Vision Camera</h4>
        <p>Consider your specific needs:</p>
        <ul>
          <li>Residential: 20-30m IR range usually sufficient</li>
          <li>Commercial: 30-50m range for larger areas</li>
          <li>Industrial: 50m+ range for perimeter security</li>
        </ul>
        
        <p><em>ACE Tech can help you select and install the perfect night vision solution for your property across Nigeria.</em></p>
      `,
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
      fullContent: `
        <h3>Building a Comprehensive Security Ecosystem</h3>
        <p>Modern security goes beyond just CCTV cameras. Integrating multiple security components creates a robust defense system that provides complete protection for your property across Nigeria.</p>
        
        <h4>Core Components of Integrated Security</h4>
        <p><strong>CCTV Surveillance:</strong></p>
        <p>The foundation of visual monitoring and evidence collection. Modern IP cameras can trigger other security components based on motion detection or specific events.</p>
        
        <p><strong>Intrusion Alarms:</strong></p>
        <p>Door/window sensors, motion detectors, and glass break sensors provide immediate alerts when unauthorized access is attempted.</p>
        
        <p><strong>Access Control:</strong></p>
        <p>Card readers, biometric scanners, and smart locks control who can enter specific areas and when.</p>
        
        <p><strong>Intercom Systems:</strong></p>
        <p>Video intercoms allow communication with visitors before granting access.</p>
        
        <h4>Integration Benefits</h4>
        <p><strong>Centralized Control:</strong> Manage all security components from a single interface, whether on-site or remotely.</p>
        
        <p><strong>Automated Responses:</strong> When an alarm triggers, cameras can automatically focus on the area and begin recording at higher resolution.</p>
        
        <p><strong>Reduced False Alarms:</strong> Video verification helps distinguish between genuine threats and false alarms.</p>
        
        <p><strong>Comprehensive Reporting:</strong> Integrated systems provide detailed logs of all security events.</p>
        
        <h4>Integration Technologies</h4>
        <p><strong>IP-Based Integration:</strong></p>
        <p>Modern systems use network protocols to communicate between components. This allows for flexible installation and easy expansion.</p>
        
        <p><strong>Wireless Integration:</strong></p>
        <p>Wireless sensors and devices reduce installation complexity, especially important in Nigeria where running cables can be challenging.</p>
        
        <p><strong>Cloud Integration:</strong></p>
        <p>Cloud-based platforms allow remote management and monitoring from anywhere in the world.</p>
        
        <h4>Practical Integration Examples</h4>
        <p><strong>Residential Integration:</strong></p>
        <ul>
          <li>Motion sensor triggers camera recording and sends mobile alert</li>
          <li>Door sensor activates entrance camera and turns on lights</li>
          <li>Panic button triggers all cameras to record and sends emergency alert</li>
        </ul>
        
        <p><strong>Commercial Integration:</strong></p>
        <ul>
          <li>Access card reader logs entry and activates relevant cameras</li>
          <li>After-hours motion detection triggers alarms and security lighting</li>
          <li>Fire alarm integration automatically unlocks emergency exits</li>
        </ul>
        
        <h4>Planning Your Integration</h4>
        <p><strong>Assessment Phase:</strong></p>
        <ul>
          <li>Identify all entry points and vulnerable areas</li>
          <li>Determine user access requirements</li>
          <li>Consider future expansion needs</li>
        </ul>
        
        <p><strong>Design Phase:</strong></p>
        <ul>
          <li>Create a comprehensive security plan</li>
          <li>Select compatible components from reliable manufacturers</li>
          <li>Plan network infrastructure requirements</li>
        </ul>
        
        <h4>Common Integration Challenges</h4>
        <p><strong>Compatibility Issues:</strong> Ensure all components can communicate effectively. Choose systems that support open standards.</p>
        
        <p><strong>Network Bandwidth:</strong> Multiple IP devices can strain network resources. Plan adequate bandwidth for all components.</p>
        
        <p><strong>Power Requirements:</strong> Integrated systems may require significant power. Consider UPS backup for critical components.</p>
        
        <h4>Maintenance of Integrated Systems</h4>
        <p>Regular testing of all components ensures the system works when needed. Schedule monthly tests of alarms, cameras, and access controls.</p>
        
        <h4>Cost Considerations</h4>
        <p>While integrated systems require higher initial investment, they provide better security and often lower long-term costs through reduced false alarms and improved efficiency.</p>
        
        <p><em>ACE Tech specializes in designing and installing integrated security solutions across all 36 Nigerian states.</em></p>
      `,
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

  // Handle expanding/collapsing articles
  const toggleArticle = (postId: number) => {
    setExpandedArticle(expandedArticle === postId ? null : postId);
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

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Article Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="lg:col-span-2 p-6">
                    <h3 className="text-2xl font-bold text-blue-950 mb-3 hover:text-rose-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <FaUser className="mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <FaCalendar className="mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <FaClock className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Expanded Content */}
                    {expandedArticle === post.id && (
                      <div className="mb-6">
                        <div 
                          className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.fullContent }}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => toggleArticle(post.id)}
                        className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center"
                      >
                        {expandedArticle === post.id ? (
                          <>
                            <FaChevronUp className="mr-2" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <FaChevronDown className="mr-2" />
                            Read Full Article
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => router.push('/contact')}
                        className="text-blue-950 hover:text-rose-600 font-medium flex items-center transition-colors duration-300"
                      >
                        Get Expert Help
                        <FaArrowRight className="ml-2 text-sm" />
                      </button>
                    </div>
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

      <style jsx>{`
        .prose h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e3a8a;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        .prose h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e3a8a;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .prose ul, .prose ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          font-weight: 600;
          color: #1e3a8a;
        }
        .prose em {
          font-style: italic;
          color: #dc2626;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Blog;