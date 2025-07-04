# ACE Tech. Consult Ltd - CCTV Business Website

A modern, responsive business website for a professional CCTV installation and security services company serving all 36 states in Nigeria. Built with Next.js and featuring a complete e-commerce solution for security equipment.

## 🚀 Live Demo

[Visit Live Website](https://your-netlify-url.netlify.app)

## 📋 Table of Contents

- [Technologies Used](#technologies-used)
- [Frameworks & Libraries](#frameworks--libraries)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Design Concepts](#design-concepts)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🛠 Technologies Used

### Frontend Technologies
- **Next.js 15.1.3** - React framework for production with App Router
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript for better development experience
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid UI development

### Styling & Animation
- **CSS3** - Modern styling with custom properties and animations
- **AOS (Animate On Scroll)** - Scroll-triggered animations library
- **Custom CSS Animations** - 3D flip cards, hover effects, and micro-interactions
- **Responsive Design** - Mobile-first approach with breakpoint system

### UI Components & Libraries
- **React Multi Carousel** - Touch-friendly carousel component
- **React Icons** - Popular icon library with Font Awesome, Material Design icons
- **Next/Image** - Optimized image component with lazy loading
- **Next/Font** - Optimized font loading with Google Fonts (Poppins)

### State Management
- **React Context API** - Global state management for shopping cart
- **React Hooks** - useState, useEffect, useContext, useReducer
- **Local Storage** - Persistent cart data storage

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Node.js** - JavaScript runtime environment

## 🔧 Frameworks & Libraries

### Core Framework
```json
{
  "next": "15.1.3",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

### UI & Animation Libraries
```json
{
  "aos": "^3.0.0-beta.6",
  "react-icons": "^5.4.0",
  "react-multi-carousel": "^2.8.5",
  "swiper": "^11.2.1"
}
```

### Development Dependencies
```json
{
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "eslint": "^9",
  "eslint-config-next": "15.1.3"
}
```

## ✨ Key Features

### Business Features
- **Nationwide Service Coverage** - All 36 Nigerian states + FCT
- **Professional Portfolio** - Showcase of completed CCTV installations
- **Service Catalog** - Comprehensive security solutions
- **Customer Testimonials** - Real client feedback with ratings
- **Contact System** - Multi-channel communication (Phone, WhatsApp, Email)
- **FAQ Section** - Common questions and detailed answers
- **Blog System** - Security tips and industry insights

### E-commerce Features
- **Product Catalog** - Security cameras, DVR/NVR systems, accessories
- **Shopping Cart** - Add/remove items, quantity management
- **Checkout System** - Complete order processing with form validation
- **Inventory Management** - Stock status tracking
- **Price Display** - Nigerian Naira formatting with sale prices
- **Product Categories** - Filtered browsing experience
- **Product Modals** - Detailed product information

### Technical Features
- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Client-Side Rendering (CSR)** - Interactive components
- **Responsive Design** - Mobile, tablet, and desktop optimization
- **SEO Optimization** - Meta tags, structured data, semantic HTML
- **Performance Optimization** - Image optimization, code splitting
- **Accessibility** - WCAG guidelines compliance
- **Progressive Web App (PWA)** ready

### Interactive Components
- **3D Flip Cards** - Camera type showcases with hover effects
- **Image Carousels** - Multi-responsive sliding galleries
- **Modal Systems** - Product details, checkout, and image lightboxes
- **Animated Counters** - Statistics and achievement displays
- **Smooth Scrolling** - Navigation and scroll-to-top functionality
- **Live Chat Widget** - Customer support integration

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles and animations
│   ├── about/page.tsx           # About page
│   ├── blog/page.tsx            # Blog page
│   ├── contact/page.tsx         # Contact page
│   ├── faq/page.tsx             # FAQ page
│   ├── portfolio/page.tsx       # Portfolio page
│   ├── services/page.tsx        # Services page
│   ├── shop/page.tsx            # E-commerce shop
│   └── testimonials/page.tsx    # Testimonials page
│
├── Components/                   # Reusable components
│   ├── Helper/                  # Utility components
│   │   ├── LiveChat.tsx         # WhatsApp integration
│   │   ├── ScrollToTop.tsx      # Scroll to top button
│   │   ├── SectionHeading.tsx   # Reusable section headers
│   │   └── StickyButtons.tsx    # Fixed contact buttons
│   │
│   ├── Home/                    # Homepage sections
│   │   ├── About/About.tsx      # Company information
│   │   ├── Blog/Blog.tsx        # Blog articles
│   │   ├── Contact/Contact.tsx  # Contact form and info
│   │   ├── FAQ/FAQ.tsx          # Accordion FAQ
│   │   ├── Footer/Footer.tsx    # Site footer
│   │   ├── Hero/Hero.tsx        # Hero section with video
│   │   ├── Home.tsx             # Main homepage component
│   │   ├── Navbar/              # Navigation components
│   │   ├── Portfolio/Portfolio.tsx # Project gallery
│   │   ├── Services/Services.tsx # Service offerings
│   │   ├── Shop/Shop.tsx        # E-commerce interface
│   │   ├── Testimonials/Testimonials.tsx # Customer reviews
│   │   └── TypesOfCam/          # Camera type showcase
│   │
│   └── Shop/                    # E-commerce components
│       ├── CartSidebar.tsx      # Shopping cart sidebar
│       └── CheckoutModal.tsx    # Checkout process
│
├── contexts/                    # React Context providers
│   └── CartContext.tsx          # Shopping cart state management
│
├── constant/                    # Application constants
│   └── constant.ts              # Navigation and configuration
│
├── data/                        # Static data
│   └── data.ts                  # Product and content data
│
├── public/                      # Static assets
│   └── images/                  # Image assets
│
└── Configuration Files
    ├── next.config.ts           # Next.js configuration
    ├── tailwind.config.ts       # Tailwind CSS configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── package.json             # Dependencies and scripts
    └── eslint.config.mjs        # ESLint configuration
```

## 🎨 Design Concepts

### Design Philosophy
- **Apple-level Aesthetics** - Clean, sophisticated, and premium feel
- **User-Centric Design** - Intuitive navigation and clear call-to-actions
- **Professional Branding** - Trust-building elements for B2B clients
- **Mobile-First Approach** - Responsive design for all devices

### Color Scheme
- **Primary Blue** (`blue-950`) - Trust, professionalism, security
- **Accent Rose** (`rose-600`) - Action, urgency, call-to-action
- **Neutral Grays** - Content readability and balance
- **Success Green** - Positive actions and confirmations

### Typography
- **Font Family** - Poppins (Google Fonts)
- **Weight Range** - 100-900 for design flexibility
- **Hierarchy** - Clear heading structure (H1-H6)
- **Readability** - Optimized line spacing and contrast

### Animation Strategy
- **Micro-interactions** - Hover effects, button states
- **Scroll Animations** - AOS library for reveal effects
- **3D Transforms** - Flip cards for engaging content
- **Performance** - Hardware-accelerated CSS animations

### Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/OgeeTech/CCTV.git
cd CCTV
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 💻 Development

### Available Scripts

```bash
# Development server with increased memory
npm run dev

# Production build with optimization
npm run build

# Start production server
npm run start

# Code linting
npm run lint
```

### Development Guidelines

1. **Component Structure**
   - Use TypeScript for all components
   - Implement proper prop typing
   - Follow React best practices

2. **Styling Approach**
   - Utility-first with Tailwind CSS
   - Custom CSS for complex animations
   - Responsive design patterns

3. **State Management**
   - React Context for global state
   - Local state for component-specific data
   - Persistent storage for cart data

4. **Performance Optimization**
   - Image optimization with Next/Image
   - Code splitting with dynamic imports
   - Lazy loading for non-critical components

## 🌐 Deployment

### Netlify Deployment

1. **Build Configuration**
```bash
Build command: npm run build
Publish directory: .next
```

2. **Environment Variables**
- Set up any required environment variables in Netlify dashboard

3. **Domain Configuration**
- Configure custom domain if needed
- Set up SSL certificate (automatic with Netlify)

### Performance Optimizations
- **Image Optimization** - WebP format, responsive images
- **Code Splitting** - Automatic with Next.js
- **Caching Strategy** - Static assets and API responses
- **CDN Integration** - Global content delivery

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint configuration
- Maintain responsive design principles
- Write meaningful commit messages

## 📞 Contact & Support

- **Website**: [ACE Tech. Consult Ltd](https://your-domain.com)
- **Phone**: +234 806 061 0584
- **Email**: juliusabiroh@gmail.com
- **WhatsApp**: [Contact Us](https://wa.me/qr/GL5V3VBV5SZLG1)

## 📄 License

This project is proprietary software developed for ACE Tech. Consult Ltd.

## 🙏 Acknowledgments

- **Design Inspiration** - Modern security industry websites
- **Icons** - React Icons library
- **Images** - Pexels stock photography
- **Fonts** - Google Fonts (Poppins)
- **Developer** - [OGTech](https://github.com/OgeeTech)

---

**Built with ❤️ for professional security solutions across Nigeria**