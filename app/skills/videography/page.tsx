"use client";
import SkillsNav from "../../components/SkillsNav";
import { usePortfolioLanguage } from "../../components/usePortfolioLanguage";

import "../skills.css";
import "./videography.css";
const groups = [
  {
    "en": "Tallah Dental",
    "ar": "طلة للأسنان",
    "items": [
      {
        "href": "https://www.instagram.com/reel/DPyUun-DKad/",
        "image": "/proof/DPyUun-DKad-frame.jpg"
      },
      {
        "href": "https://www.instagram.com/reel/DO3vFeaDEXN/",
        "image": "/proof/DO3vFeaDEXN-frame.jpg"
      },
      {
        "href": "https://www.instagram.com/reel/DQPaTIwjCbE/",
        "image": "/proof/DQPaTIwjCbE.jpg"
      },
      {
        "href": "https://www.instagram.com/reel/DQzVVV9jDVF/",
        "image": "/proof/DQzVVV9jDVF.jpg"
      },
      {
        "href": "https://www.instagram.com/reel/DRCc2gYgNAu/",
        "image": "/proof/DRCc2gYgNAu.jpg"
      }
    ]
  },
  {
    "en": "Rabha",
    "ar": "رابحة",
    "items": [
      {
        "href": "https://www.facebook.com/reel/2252826048836354/",
        "image": "/rabha/reel-47k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/921005460270732/",
        "image": "/rabha/reel-18k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/1487970329748086/",
        "image": "/rabha/reel-13k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/1342410861035210/",
        "image": "/rabha/reel-64k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/1517874099958400/",
        "image": "/rabha/reel-6k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/1306608900933541/",
        "image": "/rabha/reel-31k.jpg"
      }
    ]
  },
  {
    "en": "Mariem Hijab",
    "ar": "مريم حجاب",
    "items": [
      {
        "href": "https://www.facebook.com/reel/852477507840942/",
        "image": "/mariem/reel-2m-new.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/1150334803884934/",
        "image": "/mariem/reel-155k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/4373980182748647/",
        "image": "/mariem/reel-149k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/2127511864456822/",
        "image": "/mariem/reel-78k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/1584204506002319/",
        "image": "/mariem/reel-60k.jpg"
      },
      {
        "href": "https://www.facebook.com/reel/809876478729148/",
        "image": "/mariem/reel-42k.jpg"
      }
    ]
  },
  {
    "en": "Ta’ala Afhemak — New direction",
    "ar": "تعالى أفهمك — الديركشن الجديد",
    "items": [
      {
        "href": "https://www.instagram.com/reel/DWR6Mb7sDgU/",
        "image": "/proof/DWR6Mb7sDgU.jpg"
      },
      {
        "href": "https://www.instagram.com/reel/DZf22pwMcfX/",
        "image": "/proof/DZf22pwMcfX.jpg"
      },
      {
        "href": "https://www.instagram.com/reel/Dcg61JzInAV/",
        "image": "/proof/Dcg61JzInAV.jpg"
      }
    ]
  },
  {
    "en": "CyberScale",
    "ar": "سايبر اسكيل",
    "items": [
      {
        "href": "https://www.instagram.com/cyberscale.agency/reel/DayTxWtRnO6/",
        "image": "/proof/DayTxWtRnO6.jpg"
      },
      {
        "href": "https://www.instagram.com/cyberscale.agency/reel/DaunnBio4-I/",
        "image": "/proof/DaunnBio4-I.jpg"
      },
      {
        "href": "https://www.instagram.com/cyberscale.agency/reel/DapbolmIP9I/",
        "image": "/proof/DapbolmIP9I.jpg"
      },
      {
        "href": "https://www.instagram.com/cyberscale.agency/reel/DaU-099RD1V/",
        "image": "/proof/DaU-099RD1V.jpg"
      },
      {
        "href": "https://www.instagram.com/cyberscale.agency/reel/DaI43gHx4Hw/",
        "image": "/proof/DaI43gHx4Hw.jpg"
      }
    ]
  }
];
const copy={en:{nav:[["/","Home"],["/#proof-wall","Projects"],["/skills","Skills"],["/#about","About"]],contact:"Let’s talk",title:"Videography",role:"Filmed by me",open:"Watch video",back:"Skills"},ar:{nav:[["/","الرئيسية"],["/#proof-wall","المشاريع"],["/skills","المهارات"],["/#about","عنّي"]],contact:"تواصل معي",title:"التصوير",role:"من تصويري",open:"شاهد الفيديو",back:"المهارات"}};
export default function Videography(){
 const [lang, setLang] = usePortfolioLanguage();const rtl=lang==="ar";const t=copy[lang];const whatsapp="https://wa.me/201013454954";
 return <main className={rtl?"skillsPage filmingPage rtl":"skillsPage filmingPage"} dir={rtl?"rtl":"ltr"}>
    <SkillsNav rtl={rtl} setLang={setLang} nav={t.nav} contact={t.contact} whatsapp={whatsapp} />
 <header className="filmingHeader"><a href="/skills">{t.back}</a><h1>{t.title}</h1><p>{t.role}</p></header>
 {groups.map(group=><section className="filmingGroup" key={group.en}><h2>{rtl?group.ar:group.en}</h2><div className="filmingGrid">{group.items.map((item,index)=><a href={item.href} target="_blank" rel="noreferrer" key={item.href} aria-label={`${t.open}: ${rtl?group.ar:group.en} ${index+1}`}><div className="filmingCover"><img src={item.image} alt={`${rtl?group.ar:group.en} — ${index+1}`} loading="lazy"/><span aria-hidden="true">↗</span></div><p><span>{t.role}</span><small>{String(index+1).padStart(2,"0")}</small></p></a>)}</div>{group.en === "CyberScale" && <a className="filmingAccount" href="https://www.instagram.com/cyberscale.agency/reels/" target="_blank" rel="noreferrer">{rtl?"كل فيديوهات سايبر اسكيل":"All CyberScale videos"} ↗</a>}</section>)}
 </main>;
}
