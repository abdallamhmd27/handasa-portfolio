"use client";

import { useEffect, useState } from "react";
import "../skills.css";

type Lang = "en" | "ar";

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
  const [lang, setLang] = useState<Lang>("en");
  const [selected, setSelected] = useState<string | null>(null);
  const rtl = lang === "ar";
  const t = copy[lang];
  const whatsapp = `https://wa.me/201013454954?text=${encodeURIComponent(rtl ? "أهلًا عبدالله، شوفت شغلك في إنتاج الصور بالـAI وعايز أتكلم معاك بخصوص مشروع." : "Hi Abdallah, I saw your AI visual production work and would like to discuss a project.")}`;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return <main className={rtl ? "skillsPage aiVisualPage rtl" : "skillsPage aiVisualPage"} dir={rtl ? "rtl" : "ltr"}>
    <nav className="skillsNav">
      <a href="/" className="skillsMark">HANDASA<span>®</span></a>
      <div className="skillsNavLinks">{t.nav.map(([href, label]) => <a className={href === "/skills" ? "active" : ""} href={href} key={href}>{label}</a>)}</div>
      <div className="skillsActions"><button onClick={() => setLang(rtl ? "en" : "ar")}>{rtl ? "EN" : "ع"}</button><a href={whatsapp} target="_blank" rel="noreferrer">{t.contact}<span>↗</span></a></div>
    </nav>

    <section className="aiVisualGrid" aria-label={rtl ? "معرض إنتاج الصور بالذكاء الاصطناعي" : "AI visual production gallery"}>
      {visuals.map(({ id, src }, index) => <button className={`aiVisualTile tile-${id}`} type="button" onClick={() => setSelected(src)} key={src} aria-label={`${t.open} ${id}`}>
        <img src={src} alt={rtl ? `مثال إنتاج بصري بالذكاء الاصطناعي ${id}` : `AI visual production sample ${id}`} loading={index < 6 ? "eager" : "lazy"} />
      </button>)}
    </section>

    {selected && <div className="aiVisualLightbox" role="dialog" aria-modal="true" aria-label={rtl ? "عرض الصورة" : "Image preview"} onClick={() => setSelected(null)}>
      <button className="aiVisualClose" type="button" onClick={() => setSelected(null)} aria-label={t.close}>×</button>
      <img src={selected} alt={rtl ? "عرض كامل للصورة" : "Full-size visual"} onClick={(event) => event.stopPropagation()} />
    </div>}
  </main>;
}
