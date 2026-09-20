"use client";
import SkillsNav from "../../components/SkillsNav";
import { usePortfolioLanguage } from "../../components/usePortfolioLanguage";

import "../skills.css";
import "./copywriting.css";

const samples = [
  {
    "href": "https://www.instagram.com/cyberscale.agency/reel/DaI43gHx4Hw/",
    "image": "/proof/DaI43gHx4Hw.jpg",
    "brand": "CyberScale",
    "dark": true
  },
  {
    "href": "https://www.instagram.com/cyberscale.agency/reel/DaunnBio4-I/",
    "image": "/proof/DaunnBio4-I.jpg",
    "brand": "CyberScale",
    "dark": true
  },
  {
    "href": "https://www.instagram.com/cyberscale.agency/reel/DapbolmIP9I/",
    "image": "/proof/DapbolmIP9I.jpg",
    "brand": "CyberScale",
    "dark": true
  },
  {
    "href": "https://www.facebook.com/reel/1150334803884934/",
    "image": "/mariem/reel-155k.jpg",
    "brand": "Mariem Hijab",
    "dark": false
  },
  {
    "href": "https://www.facebook.com/reel/4373980182748647/",
    "image": "/mariem/reel-149k.jpg",
    "brand": "Mariem Hijab",
    "dark": false
  },
  {
    "href": "https://www.facebook.com/reel/809876478729148/",
    "image": "/mariem/reel-42k.jpg",
    "brand": "Mariem Hijab",
    "dark": false
  },
  {
    "href": "https://drive.google.com/drive/folders/16vXu45qimcXV2mat3NCdcWUbn5go0Wwk",
    "image": "/ebtkarat/dark-ad-furnishing.png",
    "brand": "Ebtkarat",
    "dark": true
  },
  {
    "href": "https://drive.google.com/drive/folders/16vXu45qimcXV2mat3NCdcWUbn5go0Wwk",
    "image": "/ebtkarat/dark-ad-materials.png",
    "brand": "Ebtkarat",
    "dark": true
  },
  {
    "href": "https://drive.google.com/drive/folders/16vXu45qimcXV2mat3NCdcWUbn5go0Wwk",
    "image": "/ebtkarat/dark-ad-execution.png",
    "brand": "Ebtkarat",
    "dark": true
  },
  {
    "href": "https://www.instagram.com/reel/DU3MdOqCPDs/",
    "image": "/proof/DYCb2TMIZDx.jpg",
    "brand": "First Axes",
    "dark": false
  },
  {
    "href": "https://drive.google.com/file/d/1gHRe496fRUX7cmOC4OKdZnA9i2-lpg6N/view",
    "image": "/proof/DYhLV5XIr8k.jpg",
    "brand": "First Axes",
    "dark": true
  },
  {
    "href": "https://drive.google.com/file/d/1cfDTaoXbC0F2a8lCSG6T1Qznt57cVK-I/view",
    "image": "/proof/DYCb2TMIZDx.jpg",
    "brand": "First Axes",
    "dark": true
  },
  {
    "href": "https://drive.google.com/file/d/1_ZszQpiGGe0dE3FwmxhUADUeeFCuY3SY/view",
    "image": "/proof/DXUR4SwjCsw.jpg",
    "brand": "First Axes",
    "dark": false
  }
];
const copy = {
  en: {nav: [["/", "Home"], ["/#proof-wall", "Projects"], ["/skills", "Skills"], ["/#about", "About"]], contact: "Let’s talk", title: "Copywriting", open: "Watch video"},
  ar: {nav: [["/", "الرئيسية"], ["/#proof-wall", "المشاريع"], ["/skills", "المهارات"], ["/#about", "عنّي"]], contact: "تواصل معي", title: "الـCopywriting", open: "شاهد الفيديو"},
};
export default function Copywriting() {
  const [lang, setLang] = usePortfolioLanguage();
  const rtl = lang === "ar";
  const t = copy[lang];
  const whatsapp = "https://wa.me/201013454954";
  return <main className={rtl ? "skillsPage copywritingPage rtl" : "skillsPage copywritingPage"} dir={rtl ? "rtl" : "ltr"}>
    <SkillsNav rtl={rtl} setLang={setLang} nav={t.nav} contact={t.contact} whatsapp={whatsapp} />
    <header className="copywritingHeader"><a href="/skills">{rtl ? "المهارات" : "Skills"}</a><h1>{t.title}</h1></header>
    <section className="copywritingGrid" aria-label={rtl ? "نماذج الكوبي رايتنج" : "Copywriting samples"}>
      {samples.map((sample, index) => <article className="copywritingSample" key={`${sample.href}-${sample.image}`}>
        <a href={sample.href} target="_blank" rel="noreferrer" aria-label={`${t.open} — ${sample.brand} ${index + 1}`}>
          <div className="copywritingCover"><img src={sample.image} alt={`${sample.brand} — ${index + 1}`} loading={index < 4 ? "eager" : "lazy"}/><span aria-hidden="true">↗</span></div>
          <div className="copywritingCaption"><span>{sample.brand}</span><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
        </a>
        {sample.dark && <p className="copywritingLabel" dir="ltr">Dark Ad</p>}
      </article>)}
    </section>
  </main>;
}
