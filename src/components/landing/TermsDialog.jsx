import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsDialog({ open, onOpenChange }) {
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
            תקנון
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
            <h3 className="text-xl font-bold text-[#0E463D]">תקנון אתר – רכישת ספר מודפס אונליין</h3>
            <p className="text-sm text-gray-500">עודכן לאחרונה: 22.01.2026</p>
            
            <p>
              ברוכים הבאים לאתר ("האתר") לרכישת ספר מודפס אונליין, המופעל על ידי:
              עמית צדוק שירותי צניחה, ח.פ. 311163612 ("העסק"/"המפעיל").
              כתובת שירות לקוחות: ז'בוטינסקי 39, דירה 1, טירת הכרמל 3901110.
            </p>
            
            <p>
              הגלישה באתר, השימוש בו וביצוע רכישה מהווים הסכמה מלאה לתנאי תקנון זה. אם אינך מסכים – אל תבצע רכישה.
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">1) הגדרות</h3>
              <p>"המוצר" / "הספר" – ספר מודפס המוצע למכירה באתר, כמפורט בעמוד המוצר.</p>
              <p>"לקוח" – כל אדם המבצע רכישה באתר.</p>
              <p>"יום עסקים" – ימים א׳–ה׳, לא כולל ערבי חג, חגים ושבתות.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">2) כשירות לביצוע רכישה</h3>
              <p>רכישה באתר מותרת לכל אדם בן 18 ומעלה, או קטין בעל אישור הורה/אפוטרופוס.</p>
              <p>המפעיל רשאי לסרב/לבטל הזמנה במקרים של חשד להונאה, שימוש לא מורשה באמצעי תשלום, טעות במחיר/במלאי, או מסירת פרטים שגויים.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">3) ביצוע הזמנה ותשלום</h3>
              <p>רכישה מותנית בהזנת פרטים נכונים, מלאים ומדויקים, לרבות כתובת משלוח ופרטי קשר.</p>
              <p>התשלום באתר מתבצע באמצעות MAX (או ספק סליקה מטעמה) ובכפוף לאישור חברת האשראי/אמצעי התשלום.</p>
              <p>הודעת אישור הזמנה תישלח ללקוח באמצעי הקשר שהוזנו.</p>
              <p>השלמת ההזמנה תיחשב סופית רק לאחר קבלת אישור תשלום בפועל.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">4) מחירים</h3>
              <p>המחירים באתר מוצגים בשקלים חדשים (₪).</p>
              <p>המחיר הקובע הוא המחיר בעת השלמת ההזמנה.</p>
              <p>המפעיל רשאי לעדכן מחירים בכל עת, ללא הודעה מוקדמת.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">5) אספקה ומשלוחים (ישראל בלבד)</h3>
              <p>אספקת הספר תתבצע בישראל בלבד, באמצעות משלוח לכתובת שנמסרה בהזמנה או בדרך אחרת כפי שמוצגת באתר.</p>
              <p>זמן טיפול בהזמנה (הכנה/אריזה): 1–2 ימי עסקים.</p>
              <p>זמן משלוח משוער: 3–7 ימי עסקים (משתנה לפי אזור וספק משלוחים).</p>
              <p>זמני האספקה הם הערכה בלבד ואינם מהווים התחייבות לזמן אספקה מדויק.</p>
              <p>כתובת שגויה/חסרה/לא מדויקת היא באחריות הלקוח. במקרה של החזרת משלוח עקב כתובת שגויה או אי־איסוף, משלוח חוזר יחויב בהתאם לעלות בפועל.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">6) ביטול עסקה, החזרות והחזרים – ספר מודפס</h3>
              <p>ביטול עסקה יתאפשר בהתאם לחוק הגנת הצרכן והתקנות.</p>
              <p>ניתן לבטל רכישה בתוך 14 ימים מיום קבלת הספר בפועל (או בהתאם לדין הרלוונטי).</p>
              <p>ביטול העסקה מותנה בהחזרת הספר כשהוא חדש, ללא שימוש, ללא פגם, ובמצב שמאפשר מכירה מחדש.</p>
              <p>דמי ביטול עשויים להיגבות בהתאם לדין (עד 5% או 100 ₪, הנמוך מביניהם), ככל שהדין מאפשר זאת.</p>
              <p>עלות החזרת המוצר למפעיל תחול על הלקוח, אלא אם המוצר פגום/סופק שגוי/אי התאמה.</p>
              <p>החזר כספי (אם זכאי) יבוצע לאמצעי התשלום שבו בוצעה העסקה, בתוך זמן סביר לאחר קבלת הספר בחזרה ובדיקתו.</p>
              <p>עלויות משלוח ששולמו (אם שולמו) – יוחזרו/לא יוחזרו לפי הדין ובכפוף למדיניות המוצגת באתר.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">7) מוצר פגום / אי התאמה / טעות בהזמנה</h3>
              <p>אם הספר הגיע פגום, ניזוק במשלוח, או שונה מההזמנה – יש לפנות לשירות הלקוחות בתוך 72 שעות מקבלת המשלוח בצירוף תיאור התקלה ותמונות ברורות.</p>
              <p>המפעיל יציע פתרון בהתאם למקרה ולדין: החלפה, שילוח מחדש, או זיכוי/החזר.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">8) אחריות והגבלת אחריות</h3>
              <p>המפעיל יעשה מאמץ סביר לספק מוצר תקין ושירות תקין.</p>
              <p>המפעיל לא יהיה אחראי לנזקים עקיפים/תוצאתיים (כגון אובדן רווח, הפסדים עקיפים), במידה המותרת לפי דין.</p>
              <p>בכל מקרה, אחריות המפעיל מוגבלת לסכום ששולם בפועל עבור ההזמנה הרלוונטית.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">9) קניין רוחני</h3>
              <p>כל זכויות היוצרים והקניין הרוחני באתר, לרבות תכנים, תמונות, עיצובים, טקסטים וסימנים מסחריים – שייכים למפעיל ו/או לבעלי הזכויות הרלוונטיים.</p>
              <p>אין להעתיק, לשכפל, להפיץ או להשתמש בתכני האתר ללא אישור מראש ובכתב.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">10) פרטיות ואבטחת מידע (תמצית)</h3>
              <p>המידע הנמסר בעת רכישה (שם, טלפון, כתובת, אימייל) ישמש לצורך תפעול ההזמנה, משלוח, שירות לקוחות ועדכוני סטטוס.</p>
              <p>הסליקה מתבצעת באמצעות MAX ו/או ספקי סליקה מטעמה, בהתאם למדיניות שלהם.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">11) שינויים בתקנון</h3>
              <p>המפעיל רשאי לעדכן תקנון זה בכל עת. הנוסח המחייב הוא זה המפורסם באתר במועד השימוש/הרכישה.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">12) דין וסמכות שיפוט</h3>
              <p>הדין החל הוא דין מדינת ישראל. סמכות השיפוט הבלעדית לכל מחלוקת תהיה בבתי המשפט המוסמכים במחוז חיפה.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0E463D]">13) שירות לקוחות ויצירת קשר</h3>
              <p>כתובת: ז'בוטינסקי 39, דירה 1, טירת הכרמל 3901110</p>
              <p>אימייל: albumofthoughts1@gmail.com</p>
              <p>טלפון/וואטסאפ: 054-959-9602</p>
            </div>
          </div>
        </ScrollArea>
        
        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#CBBE8E] to-transparent" />
      </DialogContent>
    </Dialog>
  );
}