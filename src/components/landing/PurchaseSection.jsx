import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Truck, Minus, Plus } from "lucide-react";

export default function PurchaseSection() {
  const [quantity, setQuantity] = useState(1);
  const paypalRef = useRef(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  const price = 100;
  const shippingPrice = 30;
  const totalPrice = (price * quantity) + shippingPrice;

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  useEffect(() => {
    if (paypalRef.current && window.paypal && !paypalLoaded) {
      window.paypal.HostedButtons({
        hostedButtonId: "TJKFJ47GBMPHW",
      }).render(paypalRef.current);
      setPaypalLoaded(true);
    }
  }, [paypalLoaded]);

  return (
    <section
      id="purchase"
      className="py-20 md:py-28 relative overflow-hidden bg-white"
    >

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#CBBE8E]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E463D] font-serif text-center">
            לרכישה
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#CBBE8E]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Summary Card */}
          <div className="bg-[#0E463D] border border-[#CBBE8E]/30 p-8" dir="rtl">
            <div className="flex gap-6 mb-8">
              <div className="relative p-1 bg-gradient-to-br from-[#CBBE8E] to-[#F6E7B7] flex-shrink-0">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fba280db54f11d44ad6a6/02e037597_IMG_7329.png"
                  alt="אלבום מחשבות"
                  className="w-24 h-32 object-cover"
                />
              </div>
              <div className="text-right flex-1">
                <h3 className="text-2xl font-bold text-[#F6E7B7] mb-2 font-serif">
                  אלבום מחשבות
                </h3>
                <p className="text-[#D1DDE1] mb-1">כריכה קשה • עיצוב פרימיום</p>
                <p className="text-3xl font-bold text-[#F6E7B7] mt-4">
                  ₪{price}
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="border-t border-[#CBBE8E]/30 pt-6 space-y-3">
              <div className="flex items-center gap-3 text-[#D1DDE1]">
                <Truck className="w-5 h-5 text-[#F6E7B7]" />
                <span>משלוחים לכל הארץ</span>
              </div>
              <div className="flex items-center gap-3 text-[#D1DDE1]">
                <ShieldCheck className="w-5 h-5 text-[#F6E7B7]" />
                <span>תשלום מאובטח</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-[#CBBE8E]/30 mt-6 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-[#D1DDE1] text-lg">סה"כ לתשלום (כולל משלוח)</span>
                <span className="text-3xl font-bold text-[#F6E7B7]">
                  ₪{totalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* PayPal Payment */}
          <div className="bg-[#0E463D] border border-[#CBBE8E]/30 p-8" dir="rtl">
            <h3 className="text-2xl font-bold text-[#F6E7B7] mb-2 font-serif text-center">
              תשלום מאובטח
            </h3>
            <p className="text-center text-[#D1DDE1] text-sm mb-6">
              בחרו כמות ולחצו על <span className="font-bold text-white">Buy Now</span> לתשלום דרך PayPal
            </p>

            <div
              ref={paypalRef}
              className="w-full min-h-[250px] mx-auto max-w-sm"
            />

            <div className="border-t border-[#CBBE8E]/30 pt-5 mt-4 space-y-3">
              <p className="text-center text-[#D1DDE1] text-sm flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F6E7B7]" />
                <span>התשלום מאובטח ומוצפן דרך <span className="font-bold text-white">PayPal</span></span>
              </p>
              <p className="text-center text-[#D1DDE1] text-sm flex items-center justify-center gap-2">
                <Truck className="w-4 h-4 text-[#F6E7B7]" />
                <span>משלוח תוך <span className="font-bold text-white">5-7 ימי עסקים</span></span>
              </p>
              <p className="text-center text-[#D1DDE1]/70 text-xs mt-2">
                מדיניות החזרה: 14 ימים מיום קבלת המוצר
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
