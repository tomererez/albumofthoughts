import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation({ onScrollToPurchase }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0E463D]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            className="text-xl md:text-2xl font-bold text-[#F6E7B7] font-serif"
          >
            אלבום מחשבות
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-[#D1DDE1] hover:text-[#F6E7B7] transition-colors text-sm relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CBBE8E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button 
              onClick={onScrollToPurchase}
              className="bg-gradient-to-r from-[#CBBE8E] to-[#F6E7B7] hover:from-[#F6E7B7] hover:to-[#CBBE8E] text-[#485749] font-bold rounded-none px-6"
            >
              רכישה
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F6E7B7] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0E463D]/98 backdrop-blur-md border-t border-[#CBBE8E]/20 pb-6">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-[#D1DDE1] hover:text-[#F6E7B7] transition-colors text-lg text-right px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => { onScrollToPurchase(); setIsMobileMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-[#CBBE8E] to-[#F6E7B7] hover:from-[#F6E7B7] hover:to-[#CBBE8E] text-[#485749] font-bold rounded-none py-6"
                >
                  לרכישה
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom gold line when scrolled */}
      <div className={`h-[1px] bg-gradient-to-r from-transparent via-[#CBBE8E] to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </nav>
  );
}