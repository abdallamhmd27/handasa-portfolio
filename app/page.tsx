"use client";
import { useState } from "react";
const projects = [
  { n: "01", tag: "حملة إعلانية", title: "إطلاق منتج — حكاية في 30 ثانية", stat: "+2.4M مشاهدة", tone: "lime" },
  { n: "02", tag: "محتوى سوشيال", title: "سلسلة محتوى قرّبت البراند من جمهوره", stat: "+180% تفاعل", tone: "orange" },
  { n: "03", tag: "تغطية حدث", title: "من قلب الحدث إلى شاشة جمهورك", stat: "48 ساعة إنتاج", tone: "violet" },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <nav className="nav"><a className="logo" href="#top">اسمك<span>.</span></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? "إغلاق" : "القائمة"}</button><div className={menuOpen ? "links open" : "links"} onClick={() => setMenuOpen(false)}><a href="#work">أعمالي</a><a href="#about">عني</a><a href="#services">الخدمات</a><a className="navCta" href="#contact">خلّينا نشتغل سوا ↗</a></div></nav>
    <section className="hero" id="top"><p className="eyebrow"><span /> صانع محتوى ومخرج إبداعي</p><h1>بِحكي قصص<br/>تِخلي الناس <em>توقّف.</em></h1><div className="heroBottom"><p>بصنع محتوى أصيل، سريع، ومبني على فكرة—يساعد البراندات توصل للناس وتفضل في بالهم.</p><a className="circleLink" href="#work" aria-label="شاهد الأعمال">↓</a></div><div className="ticker"><span>فكرة</span> ✦ <span>تصوير</span> ✦ <span>مونتاج</span> ✦ <span>استراتيجية</span> ✦ <span>حكاية</span></div></section>
    <section className="work section" id="work"><div className="sectionHead"><p>مختارات من أعمالي</p><h2>شُغل بيتكلم<br/><i>عن نفسه.</i></h2></div><div className="projectGrid">{projects.map(p => <article className={`project ${p.tone}`} key={p.n}><div className="projectVisual"><b>{p.n}</b><span className="play">▶</span><small>{p.stat}</small></div><p>{p.tag}</p><h3>{p.title}</h3><a href="#contact">تفاصيل المشروع ↗</a></article>)}</div></section>
    <section className="about section" id="about"><div><p className="eyebrow dark"><span /> مين أنا؟</p><h2>مش مجرد<br/>كونتنت.</h2></div><div className="aboutCopy"><p>أنا <strong>اسمك هنا</strong>، صانع محتوى بحوّل الأفكار لقصص بصرية تشد الانتباه وتعمل أثر حقيقي.</p><p>من أول الاستراتيجية والسكريبت، لحد التصوير والمونتاج—بشتغل على كل تفصيلة عشان المحتوى يوصل بالشكل الصح.</p><div className="numbers"><div><b>50+</b><span>مشروع</span></div><div><b>12M+</b><span>مشاهدة</span></div><div><b>20+</b><span>براند</span></div></div></div></section>
    <section className="services section" id="services"><p className="eyebrow"><span /> أقدر أساعدك في إيه؟</p><h2>من الفكرة<br/>لحد <em>النشر.</em></h2><div className="serviceList">{[['01','استراتيجية المحتوى','خطة واضحة مبنية على جمهورك وأهدافك.'],['02','إنتاج الفيديو','فكرة، سكريبت، تصوير ومونتاج بشكل كامل.'],['03','محتوى السوشيال','ريلز وفيديوهات قصيرة تخطف الانتباه.'],['04','تعاونات البراندات','محتوى طبيعي يوصل رسالتك من غير ما يحس إنه إعلان.']].map(s => <div className="service" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div></section>
    <section className="contact" id="contact"><p>عندك فكرة؟</p><h2>يلا نعمل<br/><em>حاجة جامدة.</em></h2><a href="mailto:hello@yourname.com">hello@yourname.com ↗</a></section>
    <footer><a className="logo" href="#top">اسمك<span>.</span></a><p>© 2026 — كل الحقوق محفوظة</p><div><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">YouTube</a></div></footer>
  </main>;
}
