import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from '@/Components/Home/Navbar/ResponsiveNav'
import ScrollToTop from '@/Components/Helper/ScrollToTop'
import LiveChat from '@/Components/Helper/LiveChat'
import StickyButtons from '@/Components/Helper/StickyButtons'

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "ACE Tech. Consult Ltd - Professional Security Camera Installation in Abuja",
  description: "Professional CCTV installation, maintenance, and security solutions in Abuja. Expert technicians, quality equipment, 24/7 support. Secure your property today!",
  keywords: "CCTV installation Abuja, security cameras Nigeria, surveillance systems, IP cameras, DVR installation, security solutions",
  authors: [{ name: "ACE Tech. Consult Ltd" }],
  openGraph: {
    title: "ACE Tech. Consult Ltd - Professional Security Solutions",
    description: "Expert CCTV installation and security services in Abuja",
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
        <ResponsiveNav/>
        {children}
        <ScrollToTop/>
        <LiveChat/>
        <StickyButtons/>
      </body>
    </html>
  );
}