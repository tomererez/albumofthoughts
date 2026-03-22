import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Truck, Gift } from "lucide-react";
import GoldFrame from './GoldFrame';
import IntroDialog from './IntroDialog';

export default function HeroSection({ onScrollToPurchase }) {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <section 
      id="hero"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #0E463D 0%, #1a5850 50%, #0E463D 100%)
        `,
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
          linear-gradient(135deg, #0E463D 0%, #1a5850 50%, #0E463D 100%)
        `
      }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center gap-12">

          {/* Content Side */}
          <div className="text-center">
            <GoldFrame className="inline-block mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6E7B7] mb-4 font-serif">
                אלבום מחשבות
              </h1>
              <p className="text-xl md:text-2xl text-[#F6E7B7] font-light">
                עמית צדוק
              </p>
            </GoldFrame>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-10">
              <Button 
                onClick={onScrollToPurchase}
                className="bg-gradient-to-r from-[#CBBE8E] to-[#F6E7B7] hover:from-[#F6E7B7] hover:to-[#CBBE8E] text-[#0E463D] font-bold text-lg px-8 py-6 rounded-none shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                לרכישה
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIntroOpen(true)}
                className="border-2 border-[#CBBE8E] text-[#F6E7B7] hover:bg-[#CBBE8E]/10 font-bold text-lg px-8 py-6 rounded-none bg-transparent"
              >
                הקדמה
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-[#D1DDE1]/80 text-sm justify-center">
              <span className="flex items-center gap-2 flex-row-reverse">
                <span>עטוף ברצון טוב</span>
                <Gift className="w-4 h-4 text-[#F6E7B7]" />
              </span>
              <span className="flex items-center gap-2 flex-row-reverse">
                <span>משלוח מהיר</span>
                <Truck className="w-4 h-4 text-[#F6E7B7]" />
              </span>
              <span className="flex items-center gap-2 flex-row-reverse">
                <span>תשלום מאובטח בכרטיס אשראי</span>
                <ShieldCheck className="w-4 h-4 text-[#F6E7B7]" />
              </span>
            </div>
          </div>
          
          {/* Book Image Side */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Book shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/30 blur-2xl rounded-full" />
              
              {/* Book container with gold bezel frame */}
              <div className="relative">
                {/* Gold bezel frame around image */}
                <div className="absolute -inset-3 border-4 border-[#D4AF37]" style={{
                  boxShadow: 'inset 0 0 15px rgba(212, 175, 55, 0.4), 0 0 25px rgba(212, 175, 55, 0.3)',
                  background: 'linear-gradient(145deg, #D4AF37 0%, #F6E7B7 50%, #D4AF37 100%)',
                  padding: '3px'
                }}>
                  <div className="absolute inset-1 border-2 border-[#B8941F]" />
                </div>
                
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fba280db54f11d44ad6a6/1f70b3990_IMG_7328.png"
                  alt="אלבום מחשבות - ספר כריכה קשה"
                  className="w-64 md:w-80 h-auto shadow-2xl relative z-10"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#F6E7B7] opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-[#F6E7B7] opacity-50" />
            </div>
          </div>
        </div>
      </div>
      
      
      <IntroDialog open={introOpen} onOpenChange={setIntroOpen} />
    </section>
  );
}