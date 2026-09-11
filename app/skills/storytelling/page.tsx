"use client";

import { useState } from "react";
import "../skills.css";

type Lang = "en" | "ar";

const stories = [
  { metric: "2.4M", image: "/storytelling/emanly-viral-2-4m.png", platform: "TIKTOK", href: "https://www.tiktok.com/@emanly_handmade/video/7541127528451198216", en: "Product-led story", ar: "قصة تقود للمنتج" },
  { metric: "2M", image: "/mariem/reel-2m-new.jpg", platform: "FACEBOOK", href: "https://www.facebook.com/reel/852477507840942/", en: "Open-loop story", ar: "قصة بسؤال مفتوح" },
  { metric: "149K", image: "/mariem/reel-149k.jpg", platform: "FACEBOOK", href: "https://www.facebook.com/reel/4373980182748647", en: "Offer inside a story", ar: "عرض داخل حكاية" },
  { metric: "50K", image: "/rabha/reel-47k.jpg", platform: "FACEBOOK", href: "https://www.facebook.com/reel/2252826048836354/", en: "Problem-led story", ar: "قصة تبدأ من مشكلة" },
  { metric: "13K", image: "/rabha/reel-13k.jpg", platform: "FACEBOOK", href: "https://www.facebook.com/reel/1487970329748086", en: "Trust-building story", ar: "قصة تبني الثقة" },
  { metric: "TIKTOK", image: null, platform: "TIKTOK", href: "https://www.tiktok.com/@emanly_handmade/video/7543716584968178962", en: "Handmade product story", ar: "قصة منتج هاند ميد" },
];

const copy = {
  en: {
    nav: [["/", "Home"], ["/#proof-wall", "Projects"], ["/skills", "Skills"], ["/#about", "About"]],
    contact: "Let’s talk", eyebrow: "SKILL 01 / STORYTELLING", titleA: "Writing that", titleB: "makes people stay.",
    intro: "Stories across different products, audiences, and goals. The common factor was a structure built to earn the next second.",
    proof: "DOCUMENTED VIEWS", evidence: "THE EVIDENCE", evidenceTitle: "The result is visible before the brand name.",
    roleK: "WHAT IS MINE", role: "Across every example shown: the original concept, story angle, structure, script, and execution direction are my work. The shooting and editing were executed by the teams—I do not claim them.",
    sequence: ["Tension", "Open loop", "Human detail", "Payoff"], views: "VIEWS", current: "Figures are the latest visible counts or the figures documented in the case studies.",
    library: "SKILL LIBRARY", libraryTitle: "One skill at a time. Evidence, not a list.",
    future: [["02", "AI Visual Production"], ["03", "Performance Copy"], ["04", "Shooting & Framing"], ["05", "Content Systems & Plans"]],
    ctaK: "NEED CONTENT PEOPLE WILL FINISH?", cta: "Let’s build the story before we build the post.", start: "Start a conversation", footer: "Abdallah Al-Mohandes — Cairo, Egypt",
  },
  ar: {
    nav: [["/", "الرئيسية"], ["/#proof-wall", "المشاريع"], ["/skills", "المهارات"], ["/#about", "عنّي"]],
    contact: "تواصل معي", eyebrow: "المهارة 01 / السرد القصصي", titleA: "كتابة تخلي", titleB: "الناس تكمّل.",
    intro: "حكايات لمنتجات وجماهير وأهداف مختلفة. العامل المشترك: بناء قصصي يكسب الثانية اللي بعدها.",
    proof: "مشاهدة موثقة", evidence: "الدليل", evidenceTitle: "النتيجة باينة قبل حتى ما تعرف اسم البراند.",
    roleK: "إيه اللي أنا عملته؟", role: "في كل الأمثلة: الفكرة الأصلية، زاوية الحكاية، بناء القصة، كتابة السكريبت، وتوجيه التنفيذ من شغلي. التصوير والمونتاج نفذهم فريق العمل—وأنا لا أنسبهم لنفسي.",
    sequence: ["التوتر", "السؤال المفتوح", "التفصيلة الإنسانية", "النهاية"], views: "مشاهدة", current: "الأرقام هي آخر أرقام ظاهرة أو الأرقام الموثقة داخل دراسات الحالة.",
    library: "مكتبة المهارات", libraryTitle: "كل مهارة بدليلها، مش مجرد قائمة.",
    future: [["02", "إنتاج الصور بالـAI"], ["03", "كتابة إعلانات الأداء"], ["04", "التصوير والكادرات"], ["05", "خطط وأنظمة المحتوى"]],
    ctaK: "محتاج محتوى الناس تكمله للآخر؟", cta: "نبني الحكاية قبل ما نبني البوست.", start: "ابدأ محادثة", footer: "عبدالله المهندس — القاهرة، مصر",
  },
};

export default function StorytellingPage() {
  const [lang, setLang] = useState<Lang>("en");
  const rtl = lang === "ar";
  const t = copy[lang];
  const whatsapp = `https://wa.me/201013454954?text=${encodeURIComponent(rtl ? "أهلًا عبدالله، شوفت صفحة المهارات وعايز أتكلم معاك بخصوص مشروع." : "Hi Abdallah, I saw your skills page and would like to discuss a project with you.")}`;

  return <main className={rtl ? "skillsPage rtl" : "skillsPage"} dir={rtl ? "rtl" : "ltr"}>
    <nav className="skillsNav">
      <span className="navSpacer" aria-hidden="true" />
      <div className="skillsNavLinks">{t.nav.map(([href, label]) => <a className={href === "/skills" ? "active" : ""} href={href} key={href}>{label}</a>)}</div>
      <div className="skillsActions"><button onClick={() => setLang(rtl ? "en" : "ar")}>{rtl ? "EN" : "ع"}</button><a href={whatsapp} target="_blank" rel="noreferrer">{t.contact}<span>↗</span></a></div>
    </nav>

    <header className="skillsHero">
      <div className="skillsHeroTop"><p>{t.eyebrow}</p><span>01 — 05</span></div>
      <h1><span>{t.titleA}</span><strong>{t.titleB}</strong></h1>
      <div className="skillsHeroBottom"><p>{t.intro}</p><div><b>5M+</b><span>{t.proof}</span></div></div>
      <div className="storyRibbon" aria-hidden="true"><span>HOOK</span><i>→</i><span>STORY</span><i>→</i><span>ATTENTION</span><i>→</i><span>ACTION</span></div>
    </header>

    <section className="storyMethod">
      <div className="storyMethodTitle"><small>{t.roleK}</small><p>{t.role}</p></div>
      <div className="storySequence">{t.sequence.map((item, index) => <article key={item}><b>0{index + 1}</b><span>{item}</span></article>)}</div>
    </section>

    <section className="storyEvidence">
      <div className="evidenceHead"><small>{t.evidence}</small><h2>{t.evidenceTitle}</h2></div>
      <div className="storyGrid">{stories.map((story, index) => <a className={`storyProof story-${index + 1} ${story.image ? "hasImage" : "typeCard"}`} href={story.href} target="_blank" rel="noreferrer" key={story.href}>
        {story.image && <img src={story.image} alt="" />}
        <div className="storyShade" />
        <div className="storyCardTop"><span>0{index + 1}</span><small>{story.platform}</small></div>
        <div className="storyCardResult"><b>{story.metric}</b><span>{t.views}</span></div>
        <div className="storyCardBottom"><p>{rtl ? story.ar : story.en}</p><i>↗</i></div>
      </a>)}</div>
      <p className="figuresNote">{t.current}</p>
    </section>

    <section className="skillLibrary">
      <div><small>{t.library}</small><h2>{t.libraryTitle}</h2></div>
      <div className="futureSkills">{t.future.map(([number, label]) => <article key={number}><b>{number}</b><span>{label}</span></article>)}</div>
    </section>

    <section className="skillsCta"><small>{t.ctaK}</small><h2>{t.cta}</h2><a href={whatsapp} target="_blank" rel="noreferrer">{t.start}<span>↗</span></a></section>
    <footer className="skillsFooter"><a href="/" className="skillsMark">HANDASA<span>®</span></a><p>{t.footer}</p><a href="/">{rtl ? "العودة للرئيسية" : "BACK HOME"} ↗</a></footer>
  </main>;
}
