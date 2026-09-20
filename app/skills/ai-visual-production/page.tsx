"use client";
import ImageLightbox from "../../components/ImageLightbox";
import SkillsNav from "../../components/SkillsNav";
import { usePortfolioLanguage } from "../../components/usePortfolioLanguage";

import { useState } from "react";
import "../skills.css";



const visuals = Array.from({ length: 53 }, (_, index) => index + 1)
  .filter((id) => ![2, 3, 4, 5, 6, 52, 53].includes(id))
  .map((id) => ({ id, src: `/ai-visual/visual-${String(id).padStart(2, "0")}.jpg` }));

const copy = {
  en: {
    nav: [["/", "Home"], ["/#proof-wall", "Projects"], ["/skills", "Skills"], ["/#about", "About"]],
    contact: "Let’s talk",
    close: "Close image",
    open: "Open image",
  },
  ar: {
    nav: [["/", "الرئيسية"], ["/#proof-wall", "المشاريع"], ["/skills", "المهارات"], ["/#about", "عنّي"]],
    contact: "تواصل معي",
    close: "إغلاق الصورة",
    open: "افتح الصورة",
  },
};

export default function AiVisualProduction() {
  const [lang, setLang] = usePortfolioLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const rtl = lang === "ar";
  const t = copy[lang];
  const whatsapp = `https://wa.me/201013454954?text=${encodeURIComponent(rtl ? "أهلًا عبدالله، شوفت شغلك في إنتاج الصور بالـAI وعايز أتكلم معاك بخصوص مشروع." : "Hi Abdallah, I saw your AI visual production work and would like to discuss a project.")}`;



  return <main className={rtl ? "skillsPage aiVisualPage rtl" : "skillsPage aiVisualPage"} dir={rtl ? "rtl" : "ltr"}>
    <SkillsNav rtl={rtl} setLang={setLang} nav={t.nav} contact={t.contact} whatsapp={whatsapp} />

    <section className="aiVisualGrid" aria-label={rtl ? "معرض إنتاج الصور بالذكاء الاصطناعي" : "AI visual production gallery"}>
      {visuals.map(({ id, src }, index) => <button className={`aiVisualTile tile-${id}`} type="button" onClick={() => setSelected(src)} key={src} aria-label={`${t.open} ${id}`}>
        <img src={src} alt={rtl ? `مثال إنتاج بصري بالذكاء الاصطناعي ${id}` : `AI visual production sample ${id}`} loading={index < 6 ? "eager" : "lazy"} />
      </button>)}
    </section>

    {selected && <ImageLightbox src={selected} rtl={rtl} close={() => setSelected(null)} />}
  </main>;
}
