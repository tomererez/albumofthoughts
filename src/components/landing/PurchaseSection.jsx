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
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
          linear-gradient(135deg, #0E463D 0%, #1a5850 50%, #0E463D 100%)
        `
      }}
    >

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#CBBE8E]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#F6E7B7] font-serif text-center">
            לרכישה
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#CBBE8E]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Summary Card */}
          <div className="relative p-[2px] rounded-lg" style={{
            background: 'linear-gradient(145deg, #D4AF37 0%, #F6E7B7 40%, #D4AF37 60%, #B8941F 100%)',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.2), 0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <div className="bg-white rounded-[6px] p-8 h-full relative overflow-hidden" dir="rtl">
              {/* Corner ornaments */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/40" />
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/40" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/40" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/40" />

              <div className="flex gap-6 mb-8">
                <div className="relative p-[2px] flex-shrink-0 rounded-md" style={{
                  background: 'linear-gradient(145deg, #D4AF37, #F6E7B7, #D4AF37)'
                }}>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fba280db54f11d44ad6a6/02e037597_IMG_7329.png"
                    alt="אלבום מחשבות"
                    className="w-24 h-32 object-cover rounded-[4px]"
                  />
                </div>
                <div className="text-right flex-1">
                  <h3 className="text-2xl font-bold text-[#0E463D] mb-2 font-serif">
                    אלבום מחשבות
                  </h3>
                  <p className="text-[#666] mb-1">כריכה קשה • עיצוב פרימיום</p>
                  <p className="text-3xl font-bold text-[#0E463D] mt-4">
                    ₪{price}
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <div className="border-t border-[#D4AF37]/25 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-[#555]">
                  <Truck className="w-5 h-5 text-[#0E463D]" />
                  <span>משלוחים לכל הארץ</span>
                </div>
                <div className="flex items-center gap-3 text-[#555]">
                  <ShieldCheck className="w-5 h-5 text-[#0E463D]" />
                  <span>תשלום מאובטח</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-[#D4AF37]/25 mt-6 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#555] text-lg">סה"כ לתשלום (כולל משלוח)</span>
                  <span className="text-3xl font-bold text-[#0E463D]">
                    ₪{totalPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PayPal Payment */}
          <div className="relative p-[2px] rounded-lg" style={{
            background: 'linear-gradient(145deg, #D4AF37 0%, #F6E7B7 40%, #D4AF37 60%, #B8941F 100%)',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.2), 0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <div className="bg-white rounded-[6px] p-8 h-full relative overflow-hidden" dir="rtl">
              {/* Corner ornaments */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/40" />
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/40" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/40" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/40" />

              <h3 className="text-2xl font-bold text-[#0E463D] mb-2 font-serif text-center">
                תשלום מאובטח
              </h3>
              <p className="text-center text-[#666] text-sm mb-6">
                בחרו כמות ולחצו על <span className="font-bold text-[#0E463D]">קנה עכשיו</span> לתשלום דרך PayPal
              </p>

              <div
                ref={paypalRef}
                className="w-full min-h-[250px] mx-auto max-w-sm"
              />

              <div className="border-t border-[#D4AF37]/25 pt-5 mt-4 space-y-3">
                <p className="text-center text-[#555] text-sm flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0E463D]" />
                  <span>התשלום מאובטח ומוצפן דרך <span className="font-bold text-[#0E463D]">PayPal</span></span>
                </p>
                <p className="text-center text-[#555] text-sm flex items-center justify-center gap-2">
                  <Truck className="w-4 h-4 text-[#0E463D]" />
                  <span>משלוח תוך <span className="font-bold text-[#0E463D]">5-7 ימי עסקים</span></span>
                </p>
                <p className="text-center text-[#888] text-xs mt-2">
                  מדיניות החזרה: 14 ימים מיום קבלת המוצר
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
