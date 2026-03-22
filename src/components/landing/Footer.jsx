import React, { useState } from 'react';
import { Mail, Phone } from "lucide-react";
import TermsDialog from './TermsDialog';
import ReturnsDialog from './ReturnsDialog';

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [returnsOpen, setReturnsOpen] = useState(false);

  return (
    <footer 
      className="py-12 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #0E463D 0%, #082e28 100%)`
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#F6E7B7] font-serif mb-2">
            אלבום מחשבות
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <a 
            href="mailto:albumofthoughts1@gmail.com"
            className="flex items-center gap-2 text-[#D1DDE1] hover:text-[#F6E7B7] transition-colors"
          >
            <span>albumofthoughts1@gmail.com</span>
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/972549599602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D1DDE1] hover:text-[#F6E7B7] transition-colors"
          >
            <span>054-959-9602</span>
            <Phone className="w-4 h-4" />
          </a>
        </div>
        
        <div className="border-t border-[#CBBE8E]/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#D1DDE1]/50 text-sm">
            <p>
              © {new Date().getFullYear()} אלבום מחשבות. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setTermsOpen(true)}
                className="hover:text-[#D1DDE1] transition-colors"
              >
                תקנון
              </button>
              <button 
                onClick={() => setReturnsOpen(true)}
                className="hover:text-[#D1DDE1] transition-colors"
              >
                מדיניות החזרות
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
      <ReturnsDialog open={returnsOpen} onOpenChange={setReturnsOpen} />
    </footer>
  );
}