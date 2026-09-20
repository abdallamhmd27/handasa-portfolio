"use client";
import Link from "next/link";
import { usePortfolioMotion } from "../components/usePortfolioMotion";
import SkillsNav from "../components/SkillsNav";
import { usePortfolioLanguage } from "../components/usePortfolioLanguage";


import "./skills.css";



const hubCopy = {
  en: {
    nav: [["/", "Home"], ["/#proof-wall", "Projects"], ["/skills", "Skills"], ["/#about", "About"]],
    contact: "Let’s talk", eyebrow: "THE SKILL LIBRARY", titleA: "Choose the skill.", titleB: "See the proof.",
    explore: "OPEN SKILL", available: "EVIDENCE READY",
    skills: [
      ["01", "Videography", "Framing, lighting, and filming video content.", "/skills/videography", "FILM"],
      ["02", "Storytelling", "Writing stories that hold attention and move people toward the next second.", "/skills/storytelling", "5M+"],
      ["03", "Copywriting", "Sales angles, hooks, and performance copy built around a real decision.", "/skills/copywriting", "COPY"],
      ["04", "AI Visual Production", "Producing model and campaign visuals with AI-led creative workflows.", "/skills/ai-visual-production", "AI"],
      ["05", "Content Strategy & Action Plans", "Turning business goals into clear content systems, workflows, and executable plans.", "/skills/content-strategy", "PLAN"],
    ],
    footer: "Abdallah Al-Mohandes — Cairo, Egypt",
  },
  ar: {
    nav: [["/", "الرئيسية"], ["/#proof-wall", "المشاريع"], ["/skills", "المهارات"], ["/#about", "عنّي"]],
    contact: "تواصل معي", eyebrow: "مكتبة المهارات", titleA: "اختار المهارة.", titleB: "وشوف الدليل.",
    explore: "افتح المهارة", available: "الدليل جاهز",
    skills: [
      ["01", "التصوير", "اختيار الكادر، الإضاءة، وتصوير محتوى الفيديو.", "/skills/videography", "FILM"],
      ["02", "السرد القصصي", "كتابة حكايات تمسك الانتباه وتخلي المشاهد يكمل للثانية اللي بعدها.", "/skills/storytelling", "+5M"],
      ["03", "الـCopywriting", "زوايا بيع وHooks وكتابة أداء مبنية على قرار حقيقي من العميل.", "/skills/copywriting", "COPY"],
      ["04", "إنتاج الصور بالـAI", "إنتاج صور موديلز وكامبينز من خلال عمليات إبداعية تعتمد على الذكاء الاصطناعي.", "/skills/ai-visual-production", "AI"],
      ["05", "استراتيجيات وخطط تنفيذ المحتوى", "تحويل أهداف البيزنس لأنظمة محتوى وWorkflows وخطط قابلة للتنفيذ.", "/skills/content-strategy", "PLAN"],
    ],
    footer: "عبدالله المهندس — القاهرة، مصر",
  },
};

const skillImages: Record<string,string>={FILM:"/abdallah-hero.jpg","5M+":"/storytelling/emanly-viral-2-4m.png","+5M":"/storytelling/emanly-viral-2-4m.png",COPY:"/proof/DaI43gHx4Hw.jpg",AI:"/ai-visual/visual-01.jpg",PLAN:"/content-plans/stech-headers.png"};
export default function SkillsHub() {
  usePortfolioMotion();
  const [lang, setLang] = usePortfolioLanguage();
  const rtl = lang === "ar";
  const t = hubCopy[lang];
  const whatsapp = `https://wa.me/201013454954?text=${encodeURIComponent(rtl ? "أهلًا عبدالله، شوفت صفحة المهارات وعايز أتكلم معاك بخصوص مشروع." : "Hi Abdallah, I saw your skills page and would like to discuss a project with you.")}`;
  return <main className={rtl ? "skillsHub rtl" : "skillsHub"} dir={rtl ? "rtl" : "ltr"}>
    <SkillsNav rtl={rtl} setLang={setLang} nav={t.nav} contact={t.contact} whatsapp={whatsapp} />
    <header className="hubHero">
      <p>{t.eyebrow}</p>
      <h1><span>{t.titleA}</span><strong>{t.titleB}</strong></h1>
      <div className="hubIntro"><span>01 — {String(t.skills.length).padStart(2, "0")}</span></div>
    </header>
    <section className="hubGrid">{t.skills.map(([number, title, description, href, mark], index) => {
      const content = <><img className={`hubThumbnail thumb-${mark === "PLAN" ? "plan" : "work"}`} src={skillImages[mark]} alt="" loading={index===0?"eager":"lazy"}/><div className="hubCardTop"><small>{number}</small><b>{index === 0 ? t.available : ""}</b></div><div className="hubCardCopy"><h2>{title}</h2><p>{description}</p>{href && <span>{t.explore} ↗</span>}</div></>;
      return href ? <a className={`hubCard imageSkill card-${index + 1}${mark === "FILM" ? " filmingSkill" : ""}`} href={href} key={number}>{content}</a> : <article className={`hubCard imageSkill card-${index + 1}${mark === "FILM" ? " filmingSkill" : ""}`} key={number}>{content}</article>;
    })}</section>
    <footer className="skillsFooter"><Link href="/" className="skillsMark">HANDASA<span>®</span></Link><p>{t.footer}</p><Link href="/">{rtl ? "العودة للرئيسية" : "BACK HOME"} ↗</Link></footer>
  </main>;
}
