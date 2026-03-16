import React from 'react';

export default function AuthorSection() {
  return (
    <section 
      id="author"
      className="py-20 md:py-28"
      style={{
        backgroundColor: '#F8F6F1'
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#CBBE8E]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E463D] font-serif text-center">
            על היוצר
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#CBBE8E]" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Author Photo */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 -m-2 border border-[#CBBE8E]" />
            <div className="relative p-1 bg-gradient-to-br from-[#CBBE8E] to-[#F6E7B7]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="עמית יצחק - היוצר"
                className="w-48 h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="text-right flex-1">
            <h3 className="text-2xl font-bold text-[#0E463D] mb-4 font-serif">
              עמית יצחק
            </h3>
            <p className="text-[#0E463D] opacity-90 leading-relaxed text-lg">
              כותב, מעצב ויוצר תוכן. מאמין שכתיבה היא אחת הדרכים הכי טובות להכיר את עצמנו. 
              "אלבום מחשבות" נולד מתוך רצון ליצור מרחב יפה ומזמין שיעזור לאנשים לעצור, 
              לחשוב ולהקשיב לעצמם. גר בתל אביב, אוהב ספרים ישנים וקפה טוב.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}