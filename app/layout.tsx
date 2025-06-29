import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from '@/Components/Home/Navbar/ResponsiveNav'
import ScrollToTop from '@/Components/Helper/ScrollToTop'
import LiveChat from '@/Components/Helper/LiveChat'
import StickyButtons from '@/Components/Helper/StickyButtons'
import Footer from '@/Components/Home/Footer/Footer'
import { CartProvider } from '@/contexts/CartContext'

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "ACE Tech. Consult Ltd - Professional Security Camera Installation Nationwide Nigeria",
  description: "Professional CCTV installation, maintenance, and security solutions across all 36 states in Nigeria. Expert technicians, quality equipment, 24/7 support. Secure your property today!",
  keywords: "CCTV installation Nigeria, security cameras Lagos, surveillance systems Kano, IP cameras Abuja, DVR installation Port Harcourt, security solutions nationwide Nigeria, all states Nigeria CCTV",
  authors: [{ name: "ACE Tech. Consult Ltd" }],
  openGraph: {
    title: "ACE Tech. Consult Ltd - Professional Security Solutions Nationwide Nigeria",
    description: "Expert CCTV installation and security services across all 36 states in Nigeria and FCT",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <CartProvider>
          <ResponsiveNav/>
          {children}
          <Footer/>
          <ScrollToTop/>
          <LiveChat/>
          <StickyButtons/>
        </CartProvider>
      </body>
    </html>
  );
}