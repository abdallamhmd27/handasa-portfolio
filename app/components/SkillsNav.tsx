"use client";
import Link from "next/link";
import type { Lang } from "./usePortfolioLanguage";
export default function SkillsNav({ rtl, setLang, nav, contact, whatsapp }: {
  rtl: boolean; setLang: (lang: Lang) => void; nav: string[][]; contact: string; whatsapp: string;
}) {
  return <nav className="skillsNav" aria-label={rtl ? "التنقل الرئيسي" : "Primary navigation"}>
    <Link href="/" className="skillsMark" aria-label={rtl ? "الرئيسية" : "Home"}>HANDASA<span>®</span></Link>
    <div className="skillsNavLinks">{nav.map(([href, label]) => <Link href={href} key={href} className={href === "/skills" ? "active" : ""} aria-current={href === "/skills" ? "page" : undefined}>{label}</Link>)}</div>
    <div className="skillsActions"><button type="button" aria-label={rtl ? "Switch to English" : "التبديل للعربية"} onClick={() => setLang(rtl ? "en" : "ar")}>{rtl ? "EN" : "ع"}</button><a href={whatsapp} target="_blank" rel="noreferrer">{contact}<span aria-hidden="true">↗</span></a></div>
  </nav>;
}
