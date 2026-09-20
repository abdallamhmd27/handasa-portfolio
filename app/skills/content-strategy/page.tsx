"use client";
import { useState } from "react";
import "../skills.css";
import "./content-strategy.css";
const plans = [
  {
    "key": "eskan",
    "href": "https://docs.google.com/spreadsheets/d/1K4WUwcunN3KUqdpuC3Egn8jMx-2vc9SB6s3Z1Lgu0rw/edit?gid=0#gid=0",
    "image": "/content-plans/eskan-headers.png",
    "ar": "إسكان المنصورة",
    "en": "Eskan Al Mansoura",
    "arType": "أكشن بلان",
    "enType": "Action Plan",
    "arNote": "إعداد الـWorkflow وكتابة السكريبتات · تطوير عقاري",
    "enNote": "Workflow design & scriptwriting · Real estate development"
  },
  {
    "key": "cyberscale",
    "href": "https://docs.google.com/spreadsheets/d/16U45KnYcqa7vDuw3N22KbV92V7Wzw9532A2wm2J00yc/edit?gid=2009730592#gid=2009730592",
    "image": "/content-plans/cyberscale-headers.png",
    "ar": "سايبر اسكيل",
    "en": "CyberScale",
    "arType": "كونتنت بلان",
    "enType": "Content Plan",
    "arNote": "شركة تسويق سعودية",
    "enNote": "Saudi marketing company"
  },
  {
    "key": "khyoot",
    "href": "https://docs.google.com/spreadsheets/d/1HH9KbYLeVPzekFll5rWvcycxekxKB8rnstCO2e8g4PQ/edit?gid=0#gid=0",
    "image": "/content-plans/khyoot-headers.png",
    "ar": "خيوط",
    "en": "Khyoot",
    "arType": "كونتنت شيت شامل",
    "enType": "Complete Content Sheet",
    "arNote": "يشمل جميع البراندات التابعة للشركة",
    "enNote": "Includes all brands within the company"
  },
  {
    "key": "stech",
    "href": "https://docs.google.com/spreadsheets/d/17adflMz0tRUdmHYXJPDsVe0H2oA0QuWFqFy2qQ_EZOM/edit?gid=2145719173#gid=2145719173",
    "image": "/content-plans/stech-headers.png",
    "ar": "استك",
    "en": "STECH",
    "arType": "كونتنت بلان",
    "enType": "Content Plan",
    "arNote": "شركة سعودية",
    "enNote": "Saudi company"
  }
];
const copy = {
 en:{nav:[["/","Home"],["/#proof-wall","Projects"],["/skills","Skills"],["/#about","About"]],contact:"Let’s talk",title:"Content Strategy & Action Plans",back:"Skills",open:"Open sheet"},
 ar:{nav:[["/","الرئيسية"],["/#proof-wall","المشاريع"],["/skills","المهارات"],["/#about","عنّي"]],contact:"تواصل معي",title:"استراتيجيات وخطط تنفيذ المحتوى",back:"المهارات",open:"افتح الشيت"}
};
export default function ContentStrategy(){
 const [lang,setLang]=useState<"en"|"ar">("en");
 const rtl=lang==="ar"; const t=copy[lang]; const whatsapp="https://wa.me/201013454954";
 return <main className={rtl?"skillsPage plansPage rtl":"skillsPage plansPage"} dir={rtl?"rtl":"ltr"}>
    <nav className="skillsNav">
      <a href="/" className="skillsMark">HANDASA<span>®</span></a>
      <div className="skillsNavLinks">{t.nav.map(([href, label]) => <a className={href === "/skills" ? "active" : ""} href={href} key={href}>{label}</a>)}</div>
      <div className="skillsActions"><button onClick={() => setLang(rtl ? "en" : "ar")}>{rtl ? "EN" : "ع"}</button><a href={whatsapp} target="_blank" rel="noreferrer">{t.contact}<span>↗</span></a></div>
    </nav>
 <header className="plansHeader"><a href="/skills">{t.back}</a><h1>{t.title}</h1></header>
 <section className="plansGrid" aria-label={t.title}>
 {plans.map((plan,index)=><a className={`planCard plan-${plan.key}`} key={plan.key} href={plan.href} target="_blank" rel="noreferrer" aria-label={`${t.open}: ${rtl?plan.ar:plan.en}`}>
 <div className="planThumbnail"><small>0{index+1} / {rtl?plan.arType:plan.enType}</small><strong>{rtl?plan.ar:plan.en}</strong><div className="planHeaderPreview"><img src={plan.image} alt={rtl?`عناوين أعمدة شيت ${plan.ar}`:`Column headers from ${plan.en}'s sheet`} /></div><span className="planOpen">{t.open} ↗</span></div>
 <h2>{rtl?plan.arType:plan.enType} — {rtl?plan.ar:plan.en}</h2><p>{rtl?plan.arNote:plan.enNote}</p>
 </a>)}
 </section></main>;
}
