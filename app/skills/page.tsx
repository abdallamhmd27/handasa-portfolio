"use client";

import { useState } from "react";
import "./skills.css";

type Lang = "en" | "ar";

const hubCopy = {
  en: {
    nav: [["/", "Home"], ["/#proof-wall", "Projects"], ["/skills", "Skills"], ["/#about", "About"]],
    contact: "Let’s talk", eyebrow: "THE SKILL LIBRARY", titleA: "Choose the skill.", titleB: "See the proof.",
    intro: "Not a list of things I say I can do. Each skill opens into the thinking, the work, and the evidence behind it.",
    explore: "OPEN SKILL", available: "EVIDENCE READY",
    skills: [
      ["01", "Storytelling", "Writing stories that hold attention and move people toward the next second.", "/skills/storytelling", "5M+"],
      ["02", "Copywriting", "Sales angles, hooks, and performance copy built around a real decision.", "", "COPY"],
      ["03", "AI Visual Production", "Producing model and campaign visuals with AI-led creative workflows.", "/skills/ai-visual-production", "AI"],
      ["04", "Content Strategy & Action Plans", "Turning business goals into clear content systems, workflows, and executable plans.", "", "PLAN"],
    ],
    footer: "Abdallah Al-Mohandes — Cairo, Egypt",
  },
  ar: {
    nav: [["/", "الرئيسية"], ["/#proof-wall", "المشاريع"], ["/skills", "المهارات"], ["/#about", "عنّي"]],
    contact: "تواصل معي", eyebrow: "مكتبة المهارات", titleA: "اختار المهارة.", titleB: "وشوف الدليل.",
    intro: "مش قائمة بحاجات بقول إني بعرف أعملها. كل مهارة بتفتح على طريقة التفكير، الشغل، والدليل الحقيقي وراها.",
    explore: "افتح المهارة", available: "الدليل جاهز",
    skills: [
      ["01", "السرد القصصي", "كتابة حكايات تمسك الانتباه وتخلي المشاهد يكمل للثانية اللي بعدها.", "/skills/storytelling", "+5M"],
      ["02", "الـCopywriting", "زوايا بيع وHooks وكتابة أداء مبنية على قرار حقيقي من العميل.", "", "COPY"],
      ["03", "إنتاج الصور بالـAI", "إنتاج صور موديلز وكامبينز من خلال عمليات إبداعية تعتمد على الذكاء الاصطناعي.", "/skills/ai-visual-production", "AI"],
      ["04", "استراتيجيات وخطط تنفيذ المحتوى", "تحويل أهداف البيزنس لأنظمة محتوى وWorkflows وخطط قابلة للتنفيذ.", "", "PLAN"],
    ],
    footer: "عبدالله المهندس — القاهرة، مصر",
  },
};

export default function SkillsHub() {
  const [lang, setLang] = useState<Lang>("en");
  const rtl = lang === "ar";
  const t = hubCopy[lang];
  const whatsapp = `https://wa.me/201013454954?text=${encodeURIComponent(rtl ? "أهلًا عبدالله، شوفت صفحة المهارات وعايز أتكلم معاك بخصوص مشروع." : "Hi Abdallah, I saw your skills page and would like to discuss a project with you.")}`;
  return <main className={rtl ? "skillsHub rtl" : "skillsHub"} dir={rtl ? "rtl" : "ltr"}>
    <nav className="skillsNav hubNav">
      <span className="navSpacer" aria-hidden="true" />
      <div className="skillsNavLinks">{t.nav.map(([href, label]) => <a className={href === "/skills" ? "active" : ""} href={href} key={href}>{label}</a>)}</div>
      <div className="skillsActions"><button onClick={() => setLang(rtl ? "en" : "ar")}>{rtl ? "EN" : "ع"}</button><a href={whatsapp} target="_blank" rel="noreferrer">{t.contact}<span>↗</span></a></div>
    </nav>
    <header className="hubHero">
      <p>{t.eyebrow}</p>
      <h1><span>{t.titleA}</span><strong>{t.titleB}</strong></h1>
      <div className="hubIntro"><span>01 — 04</span><p>{t.intro}</p></div>
    </header>
    <section className="hubGrid">{t.skills.map(([number, title, description, href, mark], index) => {
      const content = <><div className="hubCardTop"><small>{number}</small><b>{index === 0 ? t.available : ""}</b></div><strong className="hubCardMark">{mark}</strong><div className="hubCardCopy"><h2>{title}</h2><p>{description}</p>{href && <span>{t.explore} ↗</span>}</div></>;
      return href ? <a className={`hubCard card-${index + 1}`} href={href} key={number}>{content}</a> : <article className={`hubCard card-${index + 1}`} key={number}>{content}</article>;
    })}</section>
    <footer className="skillsFooter"><a href="/" className="skillsMark">HANDASA<span>®</span></a><p>{t.footer}</p><a href="/">{rtl ? "العودة للرئيسية" : "BACK HOME"} ↗</a></footer>
  </main>;
}
