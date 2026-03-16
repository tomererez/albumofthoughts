import React, { useCallback } from 'react';
import Navigation from '../components/landing/Navigation';
import HeroSection from '../components/landing/HeroSection';
import PurchaseSection from '../components/landing/PurchaseSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  const scrollToPurchase = useCallback(() => {
    const element = document.querySelector('#purchase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F8F6F1]" style={{ fontFamily: "'Heebo', sans-serif" }}>
      <Navigation onScrollToPurchase={scrollToPurchase} />
      <HeroSection onScrollToPurchase={scrollToPurchase} />
      <PurchaseSection />
      <Footer />
    </div>
  );
}