import React from 'react';

export default function GoldFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Main ornamental border */}
      <div className="absolute inset-0 border-2 border-[#D4AF37]" style={{
        boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
      }} />
      
      {/* Top ornamental flourish */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Center fleur-de-lis */}
          <path d="M60 5 L63 12 L60 15 L57 12 Z" fill="#D4AF37" stroke="#B8941F" strokeWidth="0.5"/>
          <circle cx="60" cy="9" r="2" fill="#D4AF37"/>
          
          {/* Left scroll */}
          <path d="M40 15 Q50 12 55 15" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
          <path d="M40 15 Q45 13 48 15" stroke="#B8941F" strokeWidth="0.8" fill="none"/>
          <circle cx="40" cy="15" r="1.5" fill="#D4AF37"/>
          
          {/* Right scroll */}
          <path d="M80 15 Q70 12 65 15" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
          <path d="M80 15 Q75 13 72 15" stroke="#B8941F" strokeWidth="0.8" fill="none"/>
          <circle cx="80" cy="15" r="1.5" fill="#D4AF37"/>
          
          {/* Decorative lines */}
          <line x1="30" y1="18" x2="38" y2="15" stroke="#D4AF37" strokeWidth="1"/>
          <line x1="90" y1="18" x2="82" y2="15" stroke="#D4AF37" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Bottom ornamental flourish */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center rotate-180">
        <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 5 L63 12 L60 15 L57 12 Z" fill="#D4AF37" stroke="#B8941F" strokeWidth="0.5"/>
          <circle cx="60" cy="9" r="2" fill="#D4AF37"/>
          <path d="M40 15 Q50 12 55 15" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
          <path d="M40 15 Q45 13 48 15" stroke="#B8941F" strokeWidth="0.8" fill="none"/>
          <circle cx="40" cy="15" r="1.5" fill="#D4AF37"/>
          <path d="M80 15 Q70 12 65 15" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
          <path d="M80 15 Q75 13 72 15" stroke="#B8941F" strokeWidth="0.8" fill="none"/>
          <circle cx="80" cy="15" r="1.5" fill="#D4AF37"/>
          <line x1="30" y1="18" x2="38" y2="15" stroke="#D4AF37" strokeWidth="1"/>
          <line x1="90" y1="18" x2="82" y2="15" stroke="#D4AF37" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5 5 L5 15 M5 5 L15 5" stroke="#D4AF37" strokeWidth="2"/>
          <path d="M5 10 Q10 8 10 5" stroke="#D4AF37" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute top-2 right-2 rotate-90">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5 5 L5 15 M5 5 L15 5" stroke="#D4AF37" strokeWidth="2"/>
          <path d="M5 10 Q10 8 10 5" stroke="#D4AF37" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-2 left-2 -rotate-90">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5 5 L5 15 M5 5 L15 5" stroke="#D4AF37" strokeWidth="2"/>
          <path d="M5 10 Q10 8 10 5" stroke="#D4AF37" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-2 right-2 rotate-180">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5 5 L5 15 M5 5 L15 5" stroke="#D4AF37" strokeWidth="2"/>
          <path d="M5 10 Q10 8 10 5" stroke="#D4AF37" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      
      <div className="p-8 md:p-12">
        {children}
      </div>
    </div>
  );
}