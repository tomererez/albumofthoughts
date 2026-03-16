import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ReturnsDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] p-0 overflow-hidden border-2 border-[#CBBE8E] bg-white">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#CBBE8E] to-transparent" />
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center relative">
          {/* Decorative corner elements */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#CBBE8E]/50" />
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#CBBE8E]/50" />
          
          <h2 className="text-4xl font-bold text-[#0E463D] font-serif">
            מדיניות החזרות
          </h2>
          
          {/* Decorative line under title */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#CBBE8E]" />
            <div className="w-2 h-2 rotate-45 border border-[#CBBE8E]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#CBBE8E]" />
          </div>
        </div>
        
        <ScrollArea className="h-[55vh] px-8">
          <div dir="rtl" className="text-right space-y-5 text-gray-800 leading-relaxed text-[15px] pb-8">
            <h3 className="text-xl font-bold text-[#0E463D]">מדיניות החזרות וביטול עסקה</h3>
            <p className="text-sm text-gray-500">עודכן לאחרונה: 22.01.2026</p>
            
            <p>
              מדיניות זו חלה על רכישת ספר מודפס באתר, בישראל בלבד, ומתווספת להוראות הדין הרלוונטי.
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">1) ביטול עסקה והחזרת ספר</h3>
              <p>ניתן לבטל רכישה ולהחזיר את הספר בתוך 14 ימים ממועד קבלת הספר בפועל (או בהתאם לדין).</p>
              <p>ההחזרה תאושר בתנאי שהספר מוחזר כשהוא:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>חדש, ללא שימוש</li>
                <li>ללא נזק/כתמים/קיפולים/קרעים</li>
                <li>במצב שמאפשר מכירה מחדש</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">2) איך מבצעים החזרה בפועל</h3>
              <p>כדי לבצע החזרה/ביטול:</p>
              <p className="font-semibold">פנו לשירות הלקוחות עם:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>שם מלא</li>
                <li>מספר הזמנה</li>
                <li>סיבת ההחזרה (לא חובה, אבל עוזר)</li>
              </ul>
              <p className="mt-3">לאחר אישור הבקשה, יש לשלוח את הספר חזרה לכתובת:</p>
              <div className="bg-[#0E463D]/5 border border-[#CBBE8E]/30 p-3 my-2">
                <p className="font-semibold text-[#0E463D]">עמית צדוק שירותי צניחה</p>
                <p>ז'בוטינסקי 39, דירה 1, טירת הכרמל 3901110</p>
              </div>
              <p>מומלץ לשלוח עם מספר מעקב. האחריות להגעת המוצר בחזרה היא על הלקוח.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">3) עלויות החזרה ודמי ביטול</h3>
              <p>עלות משלוח ההחזרה חלה על הלקוח, למעט מקרים של מוצר פגום/שגוי/אי התאמה.</p>
              <p>במקרה של ביטול עסקה שאינו עקב פגם/טעות – ייתכן וייגבו דמי ביטול בהתאם לדין (עד 5% או 100 ₪, הנמוך מביניהם).</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">4) החזר כספי</h3>
              <p>לאחר קבלת הספר בחזרה ובדיקה שהוא עומד בתנאים, יבוצע החזר כספי לאמצעי התשלום המקורי בתוך זמן סביר.</p>
              <p>דמי משלוח ששולמו (אם שולמו) יוחזרו/לא יוחזרו בהתאם לדין ולנסיבות הביטול.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">5) מוצר פגום / מוצר שגוי / נזק במשלוח</h3>
              <p>אם הספר הגיע:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>פגום</li>
                <li>ניזוק במשלוח</li>
                <li>שונה מההזמנה</li>
              </ul>
              <p className="mt-2">יש לפנות לשירות הלקוחות בתוך 72 שעות מקבלת המשלוח בצירוף:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>מספר הזמנה</li>
                <li>תמונות ברורות של הנזק/הטעות</li>
              </ul>
              <p className="mt-2">במקרים אלו, אנו נציע פתרון בהתאם למקרה ולדין: החלפה / שילוח מחדש / זיכוי / החזר.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">6) מקרים שבהם לא ניתן לבצע החזרה</h3>
              <p>לא ניתן לקבל החזרה/זיכוי אם:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>הספר הוחזר במצב שאינו חדש</li>
                <li>יש סימני שימוש/נזק שנגרמו לאחר קבלת המוצר</li>
                <li>הספר הוחזר ללא יכולת זיהוי הזמנה/רוכש (ללא פרטי הזמנה)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">7) יצירת קשר</h3>
              <p>אימייל: albumofthoughts1@gmail.com</p>
              <p>טלפון/וואטסאפ: 054-959-9602</p>
              <p>כתובת: ז'בוטינסקי 39, דירה 1, טירת הכרמל 3901110</p>
            </div>
          </div>
        </ScrollArea>
        
        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#CBBE8E] to-transparent" />
      </DialogContent>
    </Dialog>
  );
}