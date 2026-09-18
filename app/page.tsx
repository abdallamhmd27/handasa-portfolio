"use client";
import { useEffect, useState } from "react";

type Lang = "en" | "ar";

const ui = {
  en: {
    nav: [["#proof-wall","Projects"],["/skills","Skills"],["#approach","Approach"],["#about","About"]], available:"Open to the right opportunity", role:"Creative & Content Strategist", leadA:"Strategy behind", leadB:"content that moves.", intro:"I turn scattered content into a clear strategy, sharper ideas, and work that earns attention, then moves people to act.", work:"Explore the work", contact:"Let’s talk", proof:"Proof, matched to the problem", metrics:["Organic reach","Zero ad spend","One video"], approachK:"The approach", approachTitle:"Creative, but never random.", approachIntro:"Every piece of content gets a job before it gets a format.", steps:[["01","Find the real problem","I begin with the goal, audience, funnel stage, and the one action content needs to drive."],["02","Build the route","I turn insights into pillars, hooks, scripts, visual direction, and a clear production path."],["03","Test what works","I align the team, ship, read performance, and iterate until the result speaks."]], aboutK:"Profile", aboutTitle:"The strategist who can execute.", aboutP:"I work between strategy and the people bringing it to life — connecting content, copy, design, video, media buying, and the client around one clear direction.", abilities:["Content Strategy","Creative Ideation","Creative Direction","Performance Copy","Organic Testing","Cross-team Execution"], ctaK:"Have a content problem?", ctaTitle:"Let’s make the next move clear.", email:"Start a conversation", footer:"Abdallah Al-Mohandes — Cairo, Egypt"
  },
  ar: {
    nav: [["#proof-wall","المشاريع"],["/skills","المهارات"],["#approach","طريقتي"],["#about","عني"]], available:"متاح للفرصة المناسبة", role:"استراتيجي إبداع ومحتوى", leadA:"استراتيجية وراء", leadB:"محتوى يصنع تأثيرًا.", intro:"أحوّل المحتوى المتفرق إلى استراتيجية واضحة، وأفكار أقوى، وتنفيذ يجذب الانتباه ثم يدفع الناس لاتخاذ خطوة.", work:"شاهد الأعمال", contact:"تواصل معي", proof:"الدليل المناسب لكل مشكلة", metrics:["وصول طبيعي","بدون إعلانات","فيديو واحد"], approachK:"طريقة الشغل", approachTitle:"إبداع، لكن مش عشوائي.", approachIntro:"كل قطعة محتوى لازم يكون لها دور قبل ما يكون لها شكل.", steps:[["01","نحدد المشكلة الحقيقية","أبدأ بالهدف والجمهور ومرحلة الـfunnel والخطوة الواحدة المطلوبة من المحتوى."],["02","نبني الطريق","أحوّل الفهم إلى محاور وhooks وسكريبتات واتجاه بصري ومسار تنفيذ واضح."],["03","نختبر اللي بيشتغل","أوحّد الفريق، ننشر، نقرأ الأداء ونطوّر لحد ما النتيجة تتكلم."]], aboutK:"عنّي", aboutTitle:"استراتيجي يعرف ينفّذ.", aboutP:"أعمل في المساحة بين الاستراتيجية والأشخاص الذين يحولونها إلى واقع — أوحّد المحتوى والكتابة والتصميم والفيديو والميديا باينج والعميل حول اتجاه واحد واضح.", abilities:["استراتيجية المحتوى","ابتكار الأفكار","التوجيه الإبداعي","كتابة إعلانات الأداء","الاختبار الطبيعي","تنسيق الفرق"], ctaK:"عندك مشكلة في المحتوى؟", ctaTitle:"خلّينا نخلي الخطوة الجاية واضحة.", email:"ابدأ محادثة", footer:"عبدالله المهندس — القاهرة، مصر"
  }
};

const rabhaReels = [
  {id:"2252826048836354", views:"47K", image:"/rabha/reel-47k.jpg"},
  {id:"921005460270732", views:"18K", image:"/rabha/reel-18k.jpg"},
  {id:"1487970329748086", views:"13K", image:"/rabha/reel-13k.jpg"},
  {id:"1342410861035210", views:"6.4K", image:"/rabha/reel-64k.jpg"},
  {id:"1517874099958400", views:"6K", image:"/rabha/reel-6k.jpg"},
  {id:"1306608900933541", views:"3.1K", image:"/rabha/reel-31k.jpg"},
];

const mariemReels = [
  {id:"852477507840942", views:"2M", image:"/mariem/reel-2m-new.jpg", en:"Organic storytelling", ar:"سرد قصصي أورجانيك"},
  {id:"1150334803884934", views:"155K", image:"/mariem/reel-155k.jpg", en:"Paid sales creative", ar:"محتوى بيعي للإعلانات"},
  {id:"4373980182748647", views:"149K", image:"/mariem/reel-149k.jpg", en:"Offer-led ad", ar:"عرض بيعي للإعلانات"},
  {id:"2127511864456822", views:"78K", image:"/mariem/reel-78k.jpg", en:"Ad script", ar:"سكريبت إعلاني"},
  {id:"1584204506002319", views:"60K", image:"/mariem/reel-60k.jpg", en:"Comfort angle", ar:"زاوية الراحة"},
  {id:"809876478729148", views:"42K", image:"/mariem/reel-42k.jpg", en:"Learning test", ar:"تجربة للتعلّم"},
];

const tallahStages = [
  {id:"DPyUun-DKad", image:"/proof/DPyUun-DKad-frame.jpg", en:"The first reel", ar:"أول ريل", enNote:"A first attempt built with basic gear and a lot of learning.", arNote:"أول محاولة بإمكانيات بسيطة ورغبة كبيرة في التعلّم."},
  {id:"DO3vFeaDEXN", image:"/proof/DO3vFeaDEXN-frame.jpg", en:"Cleaner craft", ar:"تطور التنفيذ", enNote:"Better lighting, framing, and a more confident on-camera rhythm.", arNote:"إضاءة أنضف، كادرات أهدى، وإيقاع أوثق أمام الكاميرا."},
  {id:"DQPaTIwjCbE", image:"/proof/DQPaTIwjCbE.jpg", en:"A new direction", ar:"بداية اتجاه جديد", enNote:"A visual reset designed to show the clinic with more clarity and trust.", arNote:"إعادة بناء الصورة البصرية لإظهار العيادة بنظافة وثقة أكبر."},
  {id:"DQzVVV9jDVF", image:"/proof/DQzVVV9jDVF.jpg", en:"Clinical identity", ar:"هوية طبية أوضح", enNote:"Scrubs, a repeatable introduction, and a consistent expert persona.", arNote:"الـScrubs، لازمة تعريف ثابتة، وشخصية طبية أكثر وضوحًا."},
  {id:"DRCc2gYgNAu", image:"/proof/DRCc2gYgNAu.jpg", en:"The system settles", ar:"الشكل استقر", enNote:"The learning became a repeatable content language for the doctor.", arNote:"التجارب تحولت إلى لغة محتوى قابلة للتكرار لشخصية الدكتور."},
];

const proofSources = [
  { brand:"CyberScale", base:"https://www.instagram.com/cyberscale.agency/reel/", ids:["DayTxWtRnO6","DaunnBio4-I","DapbolmIP9I","DaU-099RD1V","DaI43gHx4Hw","DZzhMoHx-MU","DZmgnKsxn9W","DZfH27lxtCC","DZQIxU6RzFN"] },
  { brand:"Rabha", base:"https://www.instagram.com/rabha.factory/reel/", ids:["DcYwvHdAeWV","DcRP_TniXxq","DcOdejXCbqO","DcLYA2FlOPu","DcI7R__j45v","Dbs4jj4kbm3","DbiorfrgGCT"] },
  { brand:"Tallah Dental", base:"https://www.instagram.com/tallah.dentalclinic/reel/", ids:["DRCc2gYgNAu","DQ4q-qqjG9y","DQzVVV9jDVF","DQPaTIwjCbE"] },
  { brand:"First Axes", base:"https://www.instagram.com/first.axes/reel/", ids:["DYhLV5XIr8k","DYCb2TMIZDx","DXUR4SwjCsw","DXMdNdbCEAL","DXJ4y-ZgdNB","DXJdGELEm_4","DWd8eKVCBxZ","DWEuUEECCk-","DVYoid5ACfE"] },
  { brand:"EBT", base:"https://www.instagram.com/ebt.sa/reel/", ids:["CwNDF78s9f2","Cz83tbyIQ5Q","DYE-8ZxIPW9","DX_8RdnI7wi","DU0cmt5iIDu","DUbssJeCDNR","DUYSumACPu7","DUVDSCbCM7K","DUE_E3diIKz"] },
  { brand:"Khyoot", base:"https://www.instagram.com/khyoot.official/reel/", ids:["Dcbd8sQqKy4","DcRP_7wlJcw","DcOdenDIxQX","Dbi5Q_yErxc","DbQntsPAKlM","DbLeoIKmxIj","DbI_GAWjlS5","DbGSVXQgt6q"] },
  { brand:"Selected work", base:"https://www.instagram.com/reel/", ids:["DVmMc0vDO6H","DVq7_oajNWS","DWCYoBBDDz_","DWy7T-QMi0x","DWe0R-CsrPH","DWR6Mb7sDgU","DXKYMTxttJL","DXuT935DI-y","DXrk3UVMSE1"] },
];

const proofItems = Array.from(
  {length:Math.max(...proofSources.map(source => source.ids.length))},
  (_,itemIndex) => proofSources.map(source => {
    const id = source.ids[itemIndex];
    return id ? {
      image:`/proof/${id}.jpg`,
      href:`${source.base}${id}/`,
      alt:`${source.brand} reel`,
    } : null;
  }),
).flat().filter((item): item is NonNullable<typeof item> => item !== null);

const proofRows = [0,1,2].map(rowIndex => proofItems.filter((_,itemIndex) => itemIndex % 3 === rowIndex));

const firstAxesCreatives = [
  {id:"1gHRe496fRUX7cmOC4OKdZnA9i2-lpg6N", poster:"/proof/DYhLV5XIr8k.jpg", en:"B2B lead-generation angle", ar:"زاوية توليد عملاء B2B"},
  {id:"1cfDTaoXbC0F2a8lCSG6T1Qznt57cVK-I", poster:"/proof/DYCb2TMIZDx.jpg", en:"Service-led dark ad", ar:"إعلان خدمات موجه"},
  {id:"1_ZszQpiGGe0dE3FwmxhUADUeeFCuY3SY", poster:"/proof/DXUR4SwjCsw.jpg", en:"Architectural sales creative", ar:"كريتيف بيعي معماري"},
  {id:"1jF-NJMH5mLwApn22gt_tetxoVNLTDc9W", poster:"/proof/DXMdNdbCEAL.jpg", en:"Consultation conversion angle", ar:"زاوية تحويل للاستشارة"},
];

const firstAxesDesigns = [
  {href:"https://www.instagram.com/p/DYtxU-BIg4v/", image:"/first-axes/design-jeddah-residential.jpg", en:"Jeddah residential facade campaign", ar:"حملة واجهة سكنية في جدة"},
  {href:"https://www.instagram.com/p/DYtxQKfCNa5/", image:"/first-axes/design-night-view.jpg", en:"Residential night-view design", ar:"تصميم الرؤية الليلية للواجهة"},
  {href:"https://www.instagram.com/p/DXwpkOwCLZ7/", image:"/first-axes/design-riyadh-identity.jpg", en:"Riyadh residential identity", ar:"هوية مشروع سكني في الرياض"},
  {href:"https://www.instagram.com/p/DXJ5PhsiKPq/", image:"/first-axes/design-al-narjis.jpg", en:"Al Narjis villa design", ar:"تصميم فيلا حي النرجس"},
  {href:"https://www.instagram.com/reel/DYhLV5XIr8k/", image:"/proof/DYhLV5XIr8k.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DYCb2TMIZDx/", image:"/proof/DYCb2TMIZDx.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DXUR4SwjCsw/", image:"/proof/DXUR4SwjCsw.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DXMdNdbCEAL/", image:"/proof/DXMdNdbCEAL.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DXJ4y-ZgdNB/", image:"/proof/DXJ4y-ZgdNB.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DXJdGELEm_4/", image:"/proof/DXJdGELEm_4.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DWd8eKVCBxZ/", image:"/proof/DWd8eKVCBxZ.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
  {href:"https://www.instagram.com/reel/DVYoid5ACfE/", image:"/proof/DVYoid5ACfE.jpg", en:"Architecture content sample", ar:"نموذج محتوى معماري"},
];

const ebtkaratReels = [
  {id:"DROMiIxiAfq", image:"/ebtkarat/DROMiIxiAfq.jpg"},
  {id:"DQck0dOiLpV", image:"/ebtkarat/DQck0dOiLpV.jpg"},
  {id:"DUYSumACPu7", image:"/ebtkarat/DUYSumACPu7.jpg"},
  {id:"DUVDSCbCM7K", image:"/ebtkarat/DUVDSCbCM7K.jpg"},
  {id:"DTpZO5GCIvx", image:"/ebtkarat/DTpZO5GCIvx.jpg"},
  {id:"DR_9trdiFMd", image:"/ebtkarat/DR_9trdiFMd.jpg"},
];

const ebtkaratDarkAds = [
  {image:"/ebtkarat/dark-ad-furnishing.png", label:"DARK AD 01"},
  {image:"/ebtkarat/dark-ad-materials.png", label:"DARK AD 02"},
  {image:"/ebtkarat/dark-ad-execution.png", label:"DARK AD 03"},
];
const ebtkaratDarkAdsUrl="https://drive.google.com/drive/folders/16vXu45qimcXV2mat3NCdcWUbn5go0Wwk";

const talaaReels = [
  {id:"DUqsnqXjM3s", label:"The starting point", ar:"نقطة البداية", image:"/proof/DUqsnqXjM3s.jpg"},
  {id:"DU8gZMvDCrP", label:"Ramadan system", ar:"سلسلة رمضان", image:"/proof/DU8gZMvDCrP.jpg"},
  {id:"DWR6Mb7sDgU", label:"The third direction begins", ar:"بداية الديركشن الثالث", image:"/proof/DWR6Mb7sDgU.jpg"},
  {id:"DZf22pwMcfX", label:"The new language works", ar:"اللغة الجديدة بدأت تشتغل", image:"/proof/DZf22pwMcfX.jpg"},
  {id:"Dcg61JzInAV", label:"A repeatable format", ar:"فورمات قابل للتكرار", image:"/proof/Dcg61JzInAV.jpg"},
];

export default function Home(){
  // Start from one predictable language during hydration, then restore a
  // deliberate visitor choice. This avoids Android rendering a mixed
  // right-to-left / left-to-right tree before React has attached events.
  const [lang,setLang]=useState<Lang>("en");
  const [isAndroid,setIsAndroid]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>{
    try{
      const saved=window.localStorage.getItem("handasa-portfolio-language");
      if(saved==="ar"||saved==="en") setLang(saved);
    }catch{}
    setIsAndroid(/Android/i.test(navigator.userAgent));
  },[]);
  const toggleLanguage=()=>{
    const next:Lang=lang==="ar"?"en":"ar";
    setLang(next);
    setMenuOpen(false);
    try{window.localStorage.setItem("handasa-portfolio-language",next);}catch{}
  };
  const t=ui[lang]; const rtl=lang==="ar";
  const whatsappUrl=`https://wa.me/201013454954?text=${encodeURIComponent(rtl?"أهلًا عبدالله، شوفت البورتفوليو وعايز أتكلم معاك بخصوص مشروع.":"Hi Abdallah, I saw your portfolio and would like to discuss a project with you.")}`;
  return <main className={`site${rtl?" rtl":""}${isAndroid?" android":""}`} dir={rtl?"rtl":"ltr"}>
    <nav className="newNav" aria-label={rtl?"التنقل الرئيسي":"Primary navigation"}>
      <button type="button" className="langSwitch headerLang" onClick={toggleLanguage} aria-label={rtl?"Switch to English":"التبديل للعربية"}>{rtl?"EN":"ع"}</button>
      <div className="navActions"><button className={menuOpen?"menuButton open":"menuButton"} onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="portfolio-menu" aria-label={rtl?"فتح قائمة الموقع":"Open site menu"}><i/><i/></button></div>
      <div className={menuOpen?"navMenu open":"navMenu"} id="portfolio-menu"><div>{t.nav.map(([href,label],i)=><a key={href} href={href} onClick={()=>setMenuOpen(false)}><small>0{i+1}</small><span>{label}</span><b>↗</b></a>)}</div><a className="menuWhatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={()=>setMenuOpen(false)}>{t.contact}<span>↗</span></a></div>
      {menuOpen ? <button className="menuScrim" aria-label={rtl?"إغلاق القائمة":"Close menu"} onClick={()=>setMenuOpen(false)}/> : null}
    </nav>
    <a className="floatingWhatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={rtl?"تواصل معي عبر واتساب":"Contact me on WhatsApp"}><span className="whatsappGlyph" aria-hidden="true">✆</span>{rtl?"واتساب":"WHATSAPP"}</a>
    <div className="heroFlipStage"><section className="newHero cinematicHero" id="top"><figure className="heroBackdrop"><img src="/abdallah-hero.jpg" alt={rtl?"عبدالله المهندس أثناء العمل خلف الكاميرا":"Abdallah Al-Mohandes working behind the camera"}/></figure><div className="heroShade"/><div className="heroStatus"><span className="statusDot" />{t.available}</div><div className="heroIdentity"><p>{t.role}</p><h1><span>{rtl?"عبدالله":"ABDALLAH"}</span><strong>{rtl?"المهندس":"AL-MOHANDES"}</strong></h1><div><p>{t.intro}</p></div></div><div className="heroScroll"><span>01</span><p>{rtl?"انزل لتشوف حجم الشغل":"SCROLL TO SEE THE WORK"}</p></div></section></div>
    <section className="proofWall" id="proof-wall"><div className="proofWallHead" dir={rtl?"rtl":"ltr"}><span aria-hidden="true"/><h2>{rtl?<>أكتر من <b>200</b> قطعة محتوى.<br/>مع <b>30+</b> براند وعميل.</>:<><b>200+</b> short-form pieces.<br/><b>30+</b> brands &amp; clients.</>}</h2><p>{rtl?"نجاحات، تجارب، ودروس شكّلت الخطوة اللي بعدها.":"Wins, misses, tests—and the thinking behind the next move."}</p></div><div className="motionRows" dir="ltr">{proofRows.map((row,rowIndex)=><div className={`motionViewport row-${rowIndex+1}`} key={rowIndex}><div className="motionTrack">{[0,1].map(copy=><div className="motionGroup" aria-hidden={copy===1} key={copy}>{row.map((item,i)=><a href={item.href} target="_blank" rel="noreferrer" className="proofTile" key={`${copy}-${i}`} aria-label={item.alt} tabIndex={copy===1?-1:undefined}><img src={item.image} alt={copy===0?item.alt:""} loading="lazy" decoding="async"/><span>↗</span></a>)}</div>)}</div></div>)}</div><a className="proofWallCta" href="#talaa-case">{rtl?"استكشف تفاصيل المشاريع":"EXPLORE THE CASE STUDIES"}<span>↓</span></a></section>
    <section className="talaaCase" id="talaa-case">
      <div className="sectionIndex light">03 / FEATURED CASE STUDY</div>
      <div className="talaaIntro"><div><p>{rtl?"تعالى أفهمك · برنامج محتوى طبي":"TA'ALA AFHEMAK · MEDICAL CONTENT PROGRAM"}</p><h2>{rtl?"مش كل تطور شكله نجاح. أحيانًا بيكون خطوة عشان تعرف تغيّر الطريق.":"Not every improvement is the answer. Sometimes it teaches you to change the route."}</h2></div><span>{rtl?"28 فيديو في رمضان · بدون إعلانات":"28 RAMADAN REELS · ZERO AD SPEND"}</span></div>
      <div className="talaaOpening"><p>{rtl?"استلمت حسابًا طبيًا كان محتواه عاديًا وصورته ضعيفة: إضاءة ميتة، أداء بيعي أمام الكاميرا، مونتاج وإنسرتات غير مندمجة، وغياب شبه كامل للهوية. لم تكن المهمة تحسين فيديو؛ كانت إعادة تأهيل برنامج كامل ليصبح قريبًا، شابًا، ومفهومًا.":"I inherited a medical account with ordinary content and a weak on-screen presence: flat light, sales-like delivery, disconnected inserts and editing, and almost no identity. The job was not to improve a reel. It was to rebuild a whole program into something young, close, and easy to understand."}</p><aside><small>{rtl?"دوري":"MY ROLE"}</small><b>{rtl?"اتجاه · كتابة · تصوير · إضاءة · مونتاج · تدريب · نشر":"DIRECTION · WRITING · SHOOTING · LIGHTING · EDITING · COACHING · PUBLISHING"}</b></aside></div>
      <div className="talaaJourney">
        <article><small>01 / {rtl?"التشخيص":"DIAGNOSIS"}</small><h3>{rtl?"عرفنا عيوب الحساب قبل ما نفكر في الحل.":"We named the problems before proposing a fix."}</h3><p>{rtl?"الإضاءة والتصوير لم يكونا على مستوى برنامج طبي، الأداء أمام الكاميرا كان تقليديًا، والـsetup والـbranding لا يبنيان ثقة أو تميّزًا.":"Lighting and shooting did not serve a medical program, on-camera delivery felt conventional, and neither the setup nor branding built trust or distinction."}</p></article>
        <article><small>02 / {rtl?"رمضان":"RAMADAN"}</small><h3>{rtl?"بدل فيديو يومي من الصفر، بنينا نظامًا.":"Instead of inventing a daily reel, we built a system."}</h3><p>{rtl?"في 15 يومًا قبل رمضان أنشأت Series من أسئلة الجمهور والشائعات الموسمية. الهدف لم يكن سكريبتات ثقيلة؛ كان فورمات سريعًا وجميلًا يمكن إنتاجه كل يوم. النتيجة: 28 فيديو، وصورة بصرية أهدأ وهوية زرقاء طبية أكثر اتساقًا.":"With 15 days before Ramadan, I built a series around audience questions and seasonal myths. The goal was not heavy scripting—it was a clean, repeatable daily format. The result: 28 videos, calmer visual craft, and a more consistent medical-blue identity."}</p></article>
        <article><small>03 / {rtl?"الدرس":"THE LEARNING"}</small><h3>{rtl?"الشكل اتحسن. الشخصية لم تكن هي.":"The craft improved. The persona was still wrong."}</h3><p>{rtl?"بعد رمضان حللنا ما حدث. تطورت الإضاءة والصوت والكاميرا والـsetup، لكن الـtone جعل دكتورًا عمره 22 عامًا يبدو كخبير تقليدي أكبر بكثير. لم نغطِّ التجربة؛ اعتبرناها الدليل الذي قاد لتغيير الديركشن للمرة الثالثة.":"After Ramadan, we reviewed what had changed. Light, sound, camera, and setup had improved, but the tone made a 22-year-old doctor feel like a much older conventional expert. We did not hide that experiment; it became evidence for a third direction."}</p></article>
        <article className="talaaDirection"><small>04 / {rtl?"الديركشن الثالث":"DIRECTION THREE"}</small><h3>{rtl?"دكتور شاب، مش محاضرة طبية.":"A young doctor, not a medical lecture."}</h3><p>{rtl?"استخدمنا الدحيح كمرجع لطاقة الكادر وزاوية التصوير: زاوية أعلى قليلًا تخلق قربًا بدل التلقين. ثم بنينا كتابة من ثلاث مراحل: أفكار جماعية، بحث وتحقق مع صيدلي، ثم كتابة طبية مشتركة قبل أن أعيد صياغة السرد والنكتة والإيقاع للشخصية أمام الكاميرا.":"We used El Daheeh as a reference for framing energy and camera angle: slightly above eye level, creating closeness instead of lecturing. Then we built a three-stage writing process: collective ideas, research and verification with a pharmacist, and joint medical writing before I reshaped narrative, humor, and rhythm for the on-camera persona."}</p></article>
      </div>
      <div className="talaaReels"><div className="talaaReelsHead"><p>{rtl?"التحول كما حدث":"THE CHANGE, AS IT HAPPENED"}</p><span>{rtl?"اضغط على أي مرحلة لمشاهدة الفيديو":"SELECT A STAGE TO WATCH THE REEL"}</span></div><div className="talaaReelGrid">{talaaReels.map((reel,i)=><a href={`https://www.instagram.com/reel/${reel.id}/`} target="_blank" rel="noreferrer" key={reel.id} className={reel.image?"talaaReel hasImage":"talaaReel"}>{reel.image?<img src={reel.image} alt={rtl?`فيديو ${reel.ar} من برنامج تعالى أفهمك`:`Ta'ala Afhemak: ${reel.label}`}/>:<div className="talaaReelType"><span>TA'ALA<br/>AFHEMAK</span></div>}<div><small>0{i+1}</small><b>{rtl?reel.ar:reel.label}</b><i>↗</i></div></a>)}</div></div>
      <div className="talaaOutcome"><div><small>{rtl?"النتيجة":"THE OUTCOME"}</small><blockquote>{rtl?"وصلنا للغة محتوى الفريق ما زال يستخدمها بعد خروجي من الحساب.":"We arrived at a content language the team still uses after I left the account."}</blockquote></div><p>{rtl?"بدأت فيديوهات تفرق وتنتشر من غير جنيه إعلانات، والأهم أن الديركشن لم يتوقف عندي: علّمت الفريق كيف يكتب، ويصوّر، ويؤدي أمام الكاميرا، فاستمر الحساب على نفس المنهج بعد انتهاء دوري.":"Videos began to land and travel with no ad spend. More importantly, the direction did not stop with me: I taught the team how to write, shoot, and perform on camera, so the account continued using the same system after my role ended."}</p></div>
      <a className="talaaLink" href="https://www.instagram.com/talaa_afhemac/" target="_blank" rel="noreferrer">{rtl?"شاهد برنامج تعالى أفهمك على إنستجرام":"VIEW TA'ALA AFHEMAK ON INSTAGRAM"}<span>↗</span></a>
    </section>
    <section className="rabhaCase" id="rabha-case">
      <div className="sectionIndex light">04 / FEATURED CASE STUDY</div>
      <div className="rabhaIntro"><div><p>{rtl?"رابحة · مصنع عبايات للتجار والموزعين":"RABHA · B2B ABAYA MANUFACTURER"}</p><h2>{rtl?"من صفر متابع إلى مليون جنيه مبيعات.":"From zero followers to EGP 1M in sales."}</h2></div><span>{rtl?"شهران · بدون إعلانات ممولة":"TWO MONTHS · ZERO PAID ADS"}</span></div>
      <div className="rabhaStats"><article><b>41</b><span>{rtl?"فيديو خلال شهرين":"VIDEOS IN TWO MONTHS"}</span></article><article><b>47K</b><span>{rtl?"مشاهدة لأقوى فيديو":"TOP VIDEO VIEWS"}</span></article><article><b>2.2K</b><span>{rtl?"متابع من نقطة بداية صفر":"FOLLOWERS FROM ZERO"}</span></article><article className="wineStat financialMetric"><i className="moneyMark">$</i><b>1M</b><span>{rtl?"جنيه مبيعات في الشهر الثاني":"EGP SALES IN MONTH TWO"}</span></article></div>
      <div className="caseStory">
        <article><small>01 / {rtl?"التحدي":"CHALLENGE"}</small><h3>{rtl?"عملاء أورجانيك، بدون ميزانية إعلانات.":"Organic leads, without an ad budget."}</h3><p>{rtl?"كان هدف صاحب المصنع الوصول إلى التجار والموزعين وتحويل المحتوى إلى استفسارات ومبيعات، بينما بدأت الصفحة من صفر متابع.":"The factory needed to reach traders and distributors and turn content into inquiries and sales, starting from an account with zero followers."}</p></article>
        <article><small>02 / {rtl?"الاستراتيجية":"STRATEGY"}</small><h3>{rtl?"Funnel يتطور مع استجابة السوق.":"A funnel shaped by market response."}</h3><p>{rtl?"حددت الجمهور ومشكلاته، وبنيت مسارًا بدأ بالوعي ثم الثقة ثم البيع. اختبرت فورمات مختلفة وطورتها حسب ما جذب العملاء، واقترحت عرض البدء بكميات صغيرة لتقليل مخاطرة التاجر.":"I defined the audience and its problems, then built a funnel from awareness to trust to sales. Formats evolved with response, alongside a small-quantity offer designed to reduce the trader’s risk."}</p></article>
        <article><small>03 / {rtl?"دوري":"MY ROLE"}</small><h3>{rtl?"استراتيجية، كتابة، اتجاه محتوى، وتصوير بسيط.":"Strategy, writing, content direction, and simple shooting."}</h3><p>{rtl?"بنيت استراتيجية المحتوى والأفكار والفورمات، كتبت السكريبتات، حددت طريقة التنفيذ، وضبطت الإضاءة والكادر وصورت المحتوى. نفذ المونتاج محرر فيديو، ونفذ الهوية مصمم براندينج.":"I built the content strategy, formats, ideas and scripts, set the execution direction, and handled the lighting, framing and shooting. Editing and brand design were delivered by specialist collaborators."}</p></article>
      </div>
      <div className="reelShowcase"><div className="reelShowcaseHead"><p>{rtl?"أفضل الفيديوهات أداءً":"TOP-PERFORMING VIDEOS"}</p><span>{rtl?"اضغط على أي صورة لمشاهدة الفيديو على فيسبوك":"SELECT A COVER TO WATCH ON FACEBOOK"}</span></div><div className="reelGrid">{rabhaReels.map((reel,i)=><a href={`https://www.facebook.com/reel/${reel.id}/`} target="_blank" rel="noreferrer" key={reel.id} className="reelCard"><img src={reel.image} alt={rtl?`غلاف فيديو رابحة بعدد ${reel.views} مشاهدة`:`Rabha reel cover with ${reel.views} views`}/><div><small>0{i+1}</small><b>{reel.views}</b><span>{rtl?"مشاهدة":"VIEWS"}</span><i>↗</i></div></a>)}</div></div>
      <div className="formatStrip"><p>{rtl?"الفورمات التي تم اختبارها":"FORMATS TESTED"}</p>{(rtl?["مشكلة وحل","داخل المصنع","مراحل التصنيع","عرض بيعي","تفاصيل المنتج","رسائل ثقة"]:["Problem / solution","Inside the factory","Making process","Sales offer","Product detail","Trust building"]).map(x=><span key={x}>{x}</span>)}</div>
      <a className="rabhaLink" href="https://www.facebook.com/people/Rabha/61588290807233/?sk=reels_tab" target="_blank" rel="noreferrer">{rtl?"شاهد الـ41 فيديو على فيسبوك":"VIEW ALL 41 VIDEOS ON FACEBOOK"}<span>↗</span></a>
    </section>
    <section className="mariemCase" id="mariem-case">
      <div className="sectionIndex">05 / FEATURED CASE STUDY</div>
      <div className="mariemIntro"><div><p>{rtl?"مريم حجاب · براند أزياء نسائية":"MARIEM HIJAB · WOMEN’S FASHION BRAND"}</p><h2>{rtl?"قصة واحدة حققت هدف الشهر في أسبوعين.":"One story hit the monthly goal in two weeks."}</h2></div><span>{rtl?"4 شهور · محتوى أورجانيك وإعلاني":"4 MONTHS · ORGANIC & PAID CONTENT"}</span></div>
      <div className="mariemGrowth"><div><small>{rtl?"نقطة البداية":"START"}</small><b>174K</b><span>{rtl?"متابع تقريبًا":"APPROX. FOLLOWERS"}</span></div><i>→</i><div className="growthResult"><small>{rtl?"هدف الشهر":"MONTHLY GOAL"}</small><b>200K</b><span>{rtl?"تم الوصول إليه في الأسبوع الثاني":"REACHED IN WEEK TWO"}</span></div><article><b>2M</b><span>{rtl?"مشاهدة أورجانيك · بدون إعلانات":"ORGANIC VIEWS · NO PAID SUPPORT"}</span></article></div>
      <div className="mariemStory">
        <article><small>01 / {rtl?"المهمة":"THE BRIEF"}</small><h3>{rtl?"تحويل الاستراتيجية إلى محتوى يتحرك.":"Turn strategy into content that moves."}</h3><p>{rtl?"استلمت استراتيجية الماركتنج والـJobs To Be Done من المانجر، ثم حللت مشكلات المحتوى، استخرجت الـUSP، وحولتها إلى خطة فورمات وسكريبتات قابلة للاختبار.":"I received the marketing strategy and Jobs To Be Done from the manager, then diagnosed content problems, surfaced the USP, and translated both into testable formats and scripts."}</p></article>
        <article className="storyCard"><small>02 / {rtl?"الفيديو الرئيسي":"THE BREAKOUT REEL"}</small><h3>{rtl?"هوك درامي + سؤال رقمي مفتوح.":"Drama hook + numerical open loop."}</h3><p>{rtl?"بدأ الفيديو بحركة وموقف تمثيلي بدل تقديم مباشر، ثم فتح سؤال: «170 قطعة في أوردر واحد… إيه الحكاية؟». القصة عرضت حجم البراند وثقة العملاء بدون أي بيع مباشر.":"The reel opened inside an acted moment instead of a presenter intro, then asked: ‘170 pieces in one order—what’s the story?’ It demonstrated scale and trust without a direct sales pitch."}</p></article>
        <article><small>03 / {rtl?"دوري والتعاون":"ROLE & COLLABORATION"}</small><h3>{rtl?"كتابة كل المحتوى وتوجيه التنفيذ.":"Writing every script and guiding execution."}</h3><p>{rtl?"كنت المسؤول الوحيد عن كتابة محتوى البراند خلال الأربعة شهور، وطورت الفورمات وزوايا الإعلانات، وصورت فيديوهات مختارة. نفذ فريق الشركة التصوير والمونتاج في باقي المحتوى وفق التوجيه والسكريبتات.":"I was the brand’s sole content writer during the four months, developed formats and ad angles, and shot selected videos. The company’s creative team filmed and edited the remaining work from my scripts and content direction."}</p></article>
      </div>
      <div className="salesRun financialPanel"><div className="salesRunHead"><i className="moneyMark">$</i><p>{rtl?"إجمالي مبيعات البراند أثناء فترة إدارة المحتوى":"TOTAL BRAND SALES DURING THE CONTENT TENURE"}</p><strong>{rtl?"مبيعات":"SALES"}</strong><b>≈ 1.57M EGP</b></div><div className="salesBars">{[{m:"M1",v:"70K",h:"12%"},{m:"M2",v:"400K",h:"67%"},{m:"M3",v:"600K",h:"100%"},{m:"M4",v:"500K",h:"83%"}].map(x=><article key={x.m}><div><span style={{height:x.h}} /></div><small>{x.m}</small><b>{x.v}</b></article>)}</div><p className="salesNote">{rtl?"هذه أرقام إجمالي مبيعات البراند وليست مبيعات منسوبة للمحتوى وحده. ساهم المحتوى ضمن منظومة شملت المنتج والميديا باير وفريق التنفيذ.":"These are total brand sales, not sales attributed to content alone. Content contributed within a wider system including product, media buying, and the production team."}</p></div>
      <div className="mariemReels"><div className="reelShowcaseHead"><p>{rtl?"من القصة إلى الإعلان":"FROM STORY TO PERFORMANCE CREATIVE"}</p><span>{rtl?"اضغط على أي صورة لمشاهدة الفيديو":"SELECT A COVER TO WATCH THE REEL"}</span></div><div className="reelGrid">{mariemReels.map((reel,i)=><a href={`https://www.facebook.com/reel/${reel.id}/`} target="_blank" rel="noreferrer" key={reel.id} className="reelCard mariemReel"><img src={reel.image} alt={rtl?`غلاف فيديو مريم حجاب ${reel.views}`:`Mariem Hijab reel cover ${reel.views}`}/><div><small>0{i+1}</small><b>{reel.views}</b><span>{rtl?reel.ar:reel.en}</span><i>↗</i></div></a>)}</div></div>
      <a className="mariemLink" href="https://www.facebook.com/profile.php?id=100078683716290&sk=reels_tab" target="_blank" rel="noreferrer">{rtl?"شاهد صفحة مريم حجاب":"VIEW MARIEM HIJAB ON FACEBOOK"}<span>↗</span></a>
    </section>
    <section className="morehCase" id="moreh-case">
      <div className="sectionIndex light">06 / FEATURED CASE STUDY</div>
      <div className="morehIntro"><div><p>{rtl?"مريح · ملابس طبية":"MOREH · MEDICAL WEAR"}</p><h2>{rtl?"من طلب عاجل إلى عائد 11× خلال 10 أيام.":"From an urgent brief to 11× return in 10 days."}</h2></div><span>{rtl?"شهر واحد · كريتيفز DARK ADS":"ONE MONTH · DARK ADS CREATIVES"}</span></div>
      <div className="morehStats"><article className="financialMetric"><i className="moneyMark">$</i><b>77K</b><span>{rtl?"جنيه مبيعات":"EGP SALES"}</span></article><article className="financialMetric"><i className="moneyMark">$</i><b>7K</b><span>{rtl?"جنيه إنفاق إعلاني":"EGP AD SPEND"}</span></article><article className="morehAccent financialMetric"><i className="moneyMark">$</i><b>≈11×</b><span>{rtl?"عائد على الإنفاق":"RETURN ON AD SPEND"}</span></article><article><b>10</b><span>{rtl?"أيام للنتيجة":"DAYS TO RESULT"}</span></article></div>
      <p className="morehSource">{rtl?"أرقام أول 10 أيام وفقًا لتقرير الميديا باير.":"First 10-day figures reported by the media buyer."}</p>
      <div className="morehStory">
        <article><small>01 / {rtl?"التحدي":"CHALLENGE"}</small><h3>{rtl?"الأونر كان محتاج مبيعات بسرعة.":"The owner needed revenue fast."}</h3><p>{rtl?"بدل انتظار بناء مسار أورجانيك طويل، كان المطلوب تجهيز كريتيفز بيع مباشرة وإطلاقها كـDark Ads في وقت قصير.":"Instead of waiting for a long organic runway, the brief was to create direct-response videos that could launch quickly as dark ads."}</p></article>
        <article className="morehStoryAccent"><small>02 / {rtl?"المسار الإبداعي":"CREATIVE ROUTE"}</small><h3>{rtl?"مشكلات يوم العمل تحولت إلى زوايا بيع.":"Long-shift problems became sales angles."}</h3><p>{rtl?"ركزت الكريتيفز على الراحة، حرية الحركة، ملاءمة الحجاب، الشيفت الطويل وتفاصيل المنتج؛ بفورمات قصيرة تقود المشاهد من المشكلة إلى المنتج مباشرة.":"The creatives focused on comfort, movement, modest fit, long shifts, and product details—moving quickly from a real workday problem to the product."}</p></article>
        <article><small>03 / {rtl?"دوري والتعاون":"ROLE & COLLABORATION"}</small><h3>{rtl?"فكرة، زاوية، كتابة وتصوير.":"Concept, angle, writing, and shooting."}</h3><p>{rtl?"جهزت أفكار الحملة وزوايا البيع والسكريبتات، ثم صورت الكريتيفز. نفّذ فريق المونتاج في الشركة مرحلة ما بعد الإنتاج، وأدار الميديا باير إطلاق الإعلانات وقياس النتائج.":"I developed the campaign concepts, sales angles, and scripts, then shot the creatives. The in-house editing team handled post-production, while the media buyer launched and measured the ads."}</p></article>
      </div>
      <div className="morehEvidence"><figure><img src="/moreh/results.png" alt={rtl?"لقطة من نتائج حملة مريح":"Moreh campaign results dashboard"}/></figure><div><small>{rtl?"لقطة أداء إضافية":"ADDITIONAL PERFORMANCE SNAPSHOT"}</small><h3 className="financialText"><i className="moneyMark">$</i>7.56× ROAS</h3><ul><li><b>27</b>{rtl?" عملية شراء":" purchases"}</li><li className="financialText"><b><i className="moneyMark">$</i>139.57 EGP</b>{rtl?" تكلفة الشراء":" cost per purchase"}</li><li><b>5.14%</b> CTR</li><li><b>24,469</b>{rtl?" وصول":" reach"}</li></ul><p>{rtl?"هذه اللقطة تعرض نطاقًا مختلفًا أو جزءًا من الحملة عن ملخص أول 10 أيام؛ لذلك تُعرض كدليل أداء منفصل.":"This dashboard covers a different range or subset from the first 10-day summary, so it is shown as separate supporting evidence."}</p></div></div>
      <div className="morehCreatives"><div className="reelShowcaseHead"><p>{rtl?"كريتيفز الحملة":"CAMPAIGN CREATIVES"}</p><span>{rtl?"عينات مختارة من الفيديوهات التي تم تنفيذها":"SELECTED EXECUTED VIDEO SAMPLES"}</span></div><div className="morehCreativeGrid" style={{gridTemplateColumns:"repeat(2,minmax(0,1fr))",maxWidth:820}}>
        <a href="https://www.instagram.com/p/DV3oF1xtDp5/?hl=en" target="_blank" rel="noreferrer"><img src="/moreh/creative-hijabi.jpg" alt={rtl?"كريتيف مريح للمحجبات":"Moreh modest-fit creative"}/><div><small>01</small><b>{rtl?"ملاءمة الحجاب":"MODEST-FIT PROBLEM / SOLUTION"}</b><i>↗</i></div></a>
        <a href="https://www.instagram.com/p/DVGa61jDeK4/?hl=en" target="_blank" rel="noreferrer"><img src="/moreh/creative-shift.jpg" alt={rtl?"كريتيف مريح للشيفت الطويل":"Moreh long-shift creative"}/><div><small>02</small><b>{rtl?"راحة الشيفت الطويل":"LONG-SHIFT BENEFIT ANGLE"}</b><i>↗</i></div></a>
        <a href="https://www.instagram.com/reel/Dbi3feWgQdD/" target="_blank" rel="noreferrer"><img src="/moreh/Dbi3feWgQdD.jpg" alt={rtl?"أحدث فيديو من مريح":"Newest Moreh reel"}/><div><small>03</small><b>{rtl?"أحدث فيديو على الصفحة":"NEWEST ON-PAGE REEL"}</b><i>↗</i></div></a>
        <a href="https://www.instagram.com/reel/DULXjKhjcxo/" target="_blank" rel="noreferrer"><img src="/moreh/DULXjKhjcxo.jpg" alt={rtl?"كريتيف إضافي من مريح":"Additional Moreh creative"}/><div><small>04</small><b>{rtl?"كريتيف إضافي من الحملة":"ADDITIONAL CAMPAIGN CREATIVE"}</b><i>↗</i></div></a>
      </div></div>
      <div className="approvedConcept"><small>{rtl?"اتجاه أورجانيك معتمد · لم يُنتج":"APPROVED ORGANIC DIRECTION · UNPRODUCED"}</small><div><h3>{rtl?"صوت قماش بيتقطع… ده حال دكاترة العلاج الطبيعي.":"Fabric tears. That’s a physiotherapist’s scrub problem."}</h3><p>{rtl?"سكريبت تمثيلي يبدأ بـAudio Pattern Interrupt، ثم يحول مشكلة حركة حقيقية إلى حل منتج واضح: بنطلون بقصة أوسع، حركة أريح، وضمان سنتين. تمت الموافقة على الفكرة والسكريبت، لكن لم تُنتج بسبب عدم توفر الميزانية.":"A scripted social concept opening with an audio pattern interrupt, then turning a real movement problem into a clear product solution: a wider cut, easier movement, and a two-year guarantee. The direction and script were approved but not produced because budget was unavailable."}</p></div></div>
      <a className="morehLink" href="https://www.instagram.com/morehmedwear/?hl=en" target="_blank" rel="noreferrer">{rtl?"شاهد مريح على إنستجرام":"VIEW MOREH ON INSTAGRAM"}<span>↗</span></a>
    </section>
    <section className="firstAxesCase" id="first-axes-case">
      <div className="sectionIndex">07 / FEATURED CASE STUDY</div>
      <div className="firstAxesIntro"><div><p>{rtl?"فيرست أكسيس · تصميم واستشارات هندسية · السعودية":"FIRST AXES · ARCHITECTURE & ENGINEERING · SAUDI ARABIA"}</p><h2>{rtl?"من صفر تسويق إلى 400 ألف ريال مبيعات خدمات مقفولة.":"From zero marketing to SAR 400K in closed service sales."}</h2></div><span>{rtl?"أقل من 3 شهور عمل فعلي":"LESS THAN 3 MONTHS OF ACTIVE WORK"}</span></div>
      <div className="firstAxesStats">
        <article><b>0</b><span>{rtl?"نقطة البداية: تسويق ومتابعون":"STARTING POINT: MARKETING & FOLLOWERS"}</span></article>
        <article><b>1.8K</b><span>{rtl?"نمو الحساب خلال فترة العمل":"ACCOUNT GROWTH DURING THE TENURE"}</span></article>
        <article><b>&lt;3</b><span>{rtl?"شهور من العمل الفعلي":"MONTHS OF ACTIVE WORK"}</span></article>
        <article className="axesMoney financialMetric"><i className="moneyMark">$</i><small>{rtl?"مبيعات":"SALES"}</small><b>400K</b><span>{rtl?"ريال سعودي · تعاقدات خدمات مقفولة":"SAR · CLOSED SERVICE CONTRACTS"}</span></article>
      </div>
      <p className="firstAxesSource">{rtl?"بحسب أرقام إدارة الشركة: أُغلقت تعاقدات بهذه القيمة من جزء من الـLeads الناتجة عن الحملات، وليست قيمة جميع الـLeads.":"According to company management, contracts of this value were closed from a portion of the campaign-generated leads—not from every lead received."}</p>
      <div className="firstAxesStory">
        <article><small>01 / {rtl?"نقطة البداية":"THE START"}</small><h3>{rtl?"شركة قوية، لكن حضورها التسويقي بدأ من الصفر.":"A strong company whose marketing presence started at zero."}</h3><p>{rtl?"بدأنا First Axes من داخل فريق ماركتنج متكامل تحت مظلة مروج هولدنج. لم يكن هناك حساب مبني أو جمهور سابق؛ المطلوب كان تقديم شركة هندسية متعددة الخدمات بشكل يليق بسوق سعودي B2B.":"First Axes was launched by an in-house marketing team within Morooj Holding. There was no established account or existing audience; the job was to introduce a multi-service engineering company credibly to a Saudi B2B market."}</p></article>
        <article className="axesStoryAccent"><small>02 / {rtl?"طريق المحتوى":"THE CONTENT ROUTE"}</small><h3>{rtl?"براندنج يبني الثقة، وكريتيفز تحوّل الاهتمام إلى Leads.":"Branding built trust. Performance creatives turned attention into leads."}</h3><p>{rtl?"كتبت محتوى يخاطب أصحاب الشركات والمطورين وأصحاب المشاريع والعقارات الكبيرة، ثم حولت الخدمات إلى أفكار وفيديوهات وزوايا بيع قابلة للإطلاق كـDark Ads بهدف الحصول على استشارات وفرص تعاقد.":"I wrote for business owners, developers, and decision-makers behind large properties and projects, then translated the services into concepts, videos, and sales angles built to run as dark ads and generate consultation opportunities."}</p></article>
        <article><small>03 / {rtl?"دوري":"MY ROLE"}</small><h3>{rtl?"كتابة، أفكار، زوايا بيع، وتوجيه التنفيذ.":"Writing, concepts, sales angles, and execution direction."}</h3><p>{rtl?"كتبت المحتوى والـAd copy، طورت الأفكار وزوايا البيع، ووجهت التصوير والمونتاج. كما صورت بعض الكريتيفز بنفسي. عملت داخل الاتجاه العام الذي بناه الـCreative Director والـArt Director مع الفريق.":"I wrote the content and ad copy, developed concepts and sales angles, and directed filming and editing. I also shot selected creatives myself, working within the wider direction built by the creative director, art director, and team."}</p></article>
      </div>
      <div className="firstAxesOffer"><div><small>{rtl?"السوق والعرض":"MARKET & OFFER"}</small><h3>{rtl?"خدمات هندسية متعددة، برسالة واحدة واضحة لصاحب القرار.":"Multiple engineering services, shaped into one clear message for the decision-maker."}</h3></div><div>{(rtl?["تصميم خارجي","تصميم داخلي","تصميم 2D","تصميم إنشائي","استشارات هندسية","تراخيص","تنفيذ انتقائي للمشاريع الكبيرة"]:["Exterior design","Interior design","2D design","Structural design","Engineering consultancy","Licensing","Selective execution for major projects"]).map(x=><span key={x}>{x}</span>)}</div></div>
      <div className="firstAxesCreatives"><div className="firstAxesSectionHead"><p>{rtl?"كريتيفز صنعت للـLeads":"PERFORMANCE CREATIVES BUILT FOR LEADS"}</p><span>{rtl?"كتابة + زاوية بيع + تصوير وتوجيه":"WRITING · SALES ANGLE · SHOOTING & DIRECTION"}</span></div><div className="axesVideoGrid">{firstAxesCreatives.map((creative,i)=><a className="axesVideoCard" href={`https://drive.google.com/file/d/${creative.id}/view`} target="_blank" rel="noreferrer" key={creative.id} aria-label={rtl?creative.ar:creative.en}><video muted playsInline preload="metadata" poster={creative.poster}><source src={`https://drive.usercontent.google.com/download?id=${creative.id}&export=download&confirm=t`} type="video/mp4"/></video><span className="videoOpen">↗</span><div><small>0{i+1}</small><b>{rtl?creative.ar:creative.en}</b><em>{rtl?"افتح الفيديو":"OPEN VIDEO"} ↗</em></div></a>)}</div><a className="axesInstagramReel" href="https://www.instagram.com/reel/DU3MdOqCPDs/" target="_blank" rel="noreferrer"><span>{rtl?"فيديو كتبته وصورته بنفسي، مع نسختين مشابهتين للـDark Ads.":"A reel I wrote and shot myself, with two related dark-ad versions."}</span><b>{rtl?"شاهد على إنستجرام":"WATCH ON INSTAGRAM"} ↗</b></a></div>
      <div className="firstAxesPageVideo"><div className="firstAxesSectionHead"><p>{rtl?"فيديو من الصفحة":"ON-PAGE VIDEO WORK"}</p><span>{rtl?"فكرة + كتابة + تصوير + زاوية بيع":"CONCEPT · WRITING · SHOOTING · SALES ANGLE"}</span></div><a href="https://www.instagram.com/reel/DU3MdOqCPDs/" target="_blank" rel="noreferrer"><img src="/proof/DYCb2TMIZDx.jpg" alt={rtl?"فيديو First Axes كتبته وصورته":"First Axes reel written and shot by Abdallah"}/><div><small>01</small><h3>{rtl?"أول فيديو مختار من الصفحة":"Selected on-page reel"}</h3><span>{rtl?"شاهد الفيديو كاملًا":"WATCH THE FULL REEL"} ↗</span></div></a></div>
      <div className="firstAxesPageEvidence"><div className="firstAxesSectionHead"><p>{rtl?"كل الأعمال من فترتي":"WORK FROM MY TENURE"}</p><span>{rtl?"دوري: الكتابة + الفكرة + الاتجاه":"MY ROLE: WRITING · CONCEPT · DIRECTION"}</span></div><div className="axesFeedGrid">{firstAxesDesigns.map((design,i)=><a href={design.href} target="_blank" rel="noreferrer" key={design.href} aria-label={rtl?design.ar:design.en}><img src={design.image} alt={rtl?design.ar:design.en} loading="lazy" decoding="async"/><span>0{i+1}</span><i>↗</i></a>)}</div><p>{rtl?<>دي مجموعة الأعمال المعروضة من الفترة التي كنت مسؤولًا فيها عن الكتابة والفكرة والاتجاه، وتشمل تصميمات ثابتة ومحتوى فيديو. التنفيذ البصري للفريق، وأي أعمال منشورة بعد <a href="https://www.instagram.com/p/DYtxU-BIg4v/" target="_blank" rel="noreferrer">هذا المنشور ↗</a> لا أنسبها لنفسي.</>:<>This is the complete set shown from the period in which I owned the writing, concept, and direction, including static designs and video work. Visual execution belonged to the team; I do not claim work published after <a href="https://www.instagram.com/p/DYtxU-BIg4v/" target="_blank" rel="noreferrer">this post ↗</a>.</>}</p></div>
      <div className="firstAxesCredits"><p>{rtl?"المتعاونون الأساسيون":"CORE COLLABORATORS"}</p><a href="https://www.instagram.com/menna_ebrahim266/" target="_blank" rel="noreferrer"><b>Menna Ebrahim</b><span>Creative Director · Marketing Strategist ↗</span></a><a href="https://www.instagram.com/yousefhmohd/" target="_blank" rel="noreferrer"><b>Yousef Mohamed</b><span>Art Director ↗</span></a></div>
      <div className="firstAxesAccuracy"><small>{rtl?"ملاحظة الدقة":"ACCURACY NOTE"}</small><p>{rtl?"رقم 400 ألف ريال من تقرير إدارة الشركة ولا تتوفر لديّ لقطة Dashboard. نمو الحساب إلى نحو 1.8K يُعرض كسياق لفترة العمل، وليس كنتيجة منسوبة للمحتوى الأورجانيك وحده. المونتاج والتصميم نفذهما أعضاء الفريق.":"The SAR 400K figure was reported by company management; I do not hold a dashboard screenshot. Growth to roughly 1.8K is shown as tenure context, not attributed solely to organic content. Editing and visual design were executed by team members."}</p></div>
      <a className="firstAxesLink" href="https://www.instagram.com/first.axes/" target="_blank" rel="noreferrer">{rtl?"شاهد First Axes على إنستجرام":"VIEW FIRST AXES ON INSTAGRAM"}<span>↗</span></a>
    </section>
    <section className="ebtkaratCase" id="ebtkarat-case">
      <div className="sectionIndex">08 / SELECTED CONTENT WRITING</div>
      <div className="ebtkaratIntro"><div><p>{rtl?"ابتكارات · استوديو تصميم داخلي · الرياض":"EBTKRAT · INTERIOR DESIGN STUDIO · RIYADH"}</p><h2>{rtl?"لما التصميم يكتمل، الكلمة تخليه يتعاش.":"When design is complete, language makes it lived."}</h2></div><span>{rtl?"4 شهور · Content Writing":"4 MONTHS · CONTENT WRITING"}</span></div>
      <div className="ebtkaratStatement"><p>{rtl?"ابتكارات كانت شركة مستقرة بهوية فاخرة وواضحة. دوري كان كتابة المحتوى: الـheadlines والكابتشن التي تضيف معنى للتصميم وتحافظ على هدوء وفخامة البراند.":"Ebtkarat was an established studio with a refined visual identity. My role was Content Writing: developing the headlines and captions that gave each design a point of view while protecting the brand’s quiet luxury."}</p><aside><small>{rtl?"المسمى":"POSITION"}</small><b>Content<br/>Writing</b></aside></div>
      <div className="ebtkaratHighlight"><small>{rtl?"مثال على زاوية الكتابة":"A WRITING ANGLE"}</small><blockquote>{rtl?"«تصميم كامل يُعاش.»":"“A complete design, meant to be lived.”"}</blockquote><p>{rtl?"مش وصف للمكان؛ جملة تنقل التصميم من صورة إلى تجربة يعيشها صاحبها.":"Not a description of a space—a line that turns design from an image into an experience its owner can live."}</p></div>
      <div className="ebtkaratCampaign"><div className="ebtkaratEvidenceHead"><p>{rtl?"حملة Dark Ads":"DARK ADS CAMPAIGN"}</p><span>{rtl?"3 من أصل 5 فيديوهات · Content Writing":"3 OF 5 VIDEOS · CONTENT WRITING"}</span></div><div className="ebtkaratCampaignGrid">{ebtkaratDarkAds.map((ad,i)=><a href={ebtkaratDarkAdsUrl} target="_blank" rel="noreferrer" key={ad.image}><img src={ad.image} alt={rtl?`فيديو دارك أد ابتكارات ${i+1}`:`Ebtkarat dark-ad video ${i+1}`} loading="lazy"/><div><small>{ad.label}</small><b>{rtl?"شاهد الفيديو":"OPEN VIDEO"} ↗</b></div></a>)}</div><p>{rtl?"كتبت محتوى الحملة بالكامل. المعروض هنا 3 فيديوهات من أصل 5؛ التنفيذ البصري والمونتاج لفريق ابتكارات.":"I wrote the campaign content in full. Shown here: 3 of the 5 videos; visual execution and editing belonged to the Ebtkarat team."}</p></div>
      <div className="ebtkaratEvidence"><div className="ebtkaratEvidenceHead"><p>{rtl?"نماذج من المحتوى المكتوب":"SELECTED WRITING IN CONTEXT"}</p><span>{rtl?"اضغط على أي غلاف لمشاهدة الريل":"SELECT A COVER TO VIEW THE REEL"}</span></div><div className="ebtkaratReelGrid">{ebtkaratReels.map((reel,i)=><a href={`https://www.instagram.com/reel/${reel.id}/`} target="_blank" rel="noreferrer" key={reel.id}>{reel.image?<img src={reel.image} alt={rtl?`نموذج محتوى ابتكارات ${i+1}`:`Ebtkarat content-writing sample ${i+1}`} loading="lazy" decoding="async"/>:<b>{rtl?"Content\nWriting":"CONTENT\nWRITING"}</b>}<span>0{i+1}</span><i>↗</i></a>)}</div></div>
      <p className="ebtkaratNote">{rtl?"هذه النماذج تُعرض لإثبات دوري في كتابة المحتوى فقط. التصميم والتنفيذ البصري تمّا بواسطة فريق ابتكارات.":"These samples are shown as evidence of my Content Writing role only. Visual design and execution belonged to the Ebtkarat team."}</p>
      <a className="ebtkaratLink" href="https://www.instagram.com/ebt.sa/" target="_blank" rel="noreferrer">{rtl?"شاهد ابتكارات على إنستجرام":"VIEW EBTKRAT ON INSTAGRAM"}<span>↗</span></a>
    </section>
    <section className="emanlyCase" id="emanly-case">
      <div className="sectionIndex">09 / ORGANIC STORYTELLING</div>
      <div className="emanlyIntro"><div><p>{rtl?"إيمانلي · براند هاند ميد · مصر":"EMANLY · HANDMADE BRAND · EGYPT"}</p><h2>{rtl?"من براند غير ظاهر إلى حكاية وصلت لملايين الناس.":"From an unseen handmade brand to a story seen by millions."}</h2></div><span>{rtl?"فريلانس · بدون أي ميزانية إعلانات":"FREELANCE · ZERO AD SPEND"}</span></div>
      <div className="emanlyMetrics">
        <article><b>2.4M</b><span>{rtl?"مشاهدة لأقوى فيديو":"VIEWS ON THE VIRAL VIDEO"}</span></article>
        <article className="financialMetric"><i className="moneyMark">$</i><b>11K</b><span>{rtl?"جنيه مبيعات من الفيديو الفيرال":"EGP SALES FROM THE VIRAL VIDEO"}</span></article>
        <article><b>0</b><span>{rtl?"جنيه إنفاق إعلاني":"EGP AD SPEND"}</span></article>
      </div>
      <div className="emanlyStory">
        <article><small>01 / {rtl?"التحدي":"THE CHALLENGE"}</small><h3>{rtl?"منتج يدوي جميل، لكن بدون مساحة ظهور حقيقية.":"A beautiful handmade product without real visibility."}</h3><p>{rtl?"إيمانلي كانت براند صغير يعمل هاند ميد، بدون ميزانية لإعلانات المحتوى. المطلوب لم يكن مجرد نشر فيديوهات، بل اكتشاف ما يجعل الناس تتوقف وتكمل الحكاية.":"Emanly was a small handmade brand with no budget for content ads. The task was not simply publishing reels—it was finding what would make people stop and finish the story."}</p></article>
        <article className="emanlyStoryAccent"><small>02 / {rtl?"الطريقة":"THE ROUTE"}</small><h3>{rtl?"بحث في المحتوى الفيرال، ثم تطبيق سرد قصصي يناسب المنتج.":"Viral-content research, then storytelling built around the product."}</h3><p>{rtl?"درست المحتوى الذي حقق انتشارًا على إنستجرام وتيك توك، ثم طبقت أسلوب الـStorytelling على المنتج اليدوي: فكرة تمسك الانتباه، وتسلسل يجعل المشاهد يريد رؤية النهاية.":"I researched the content that travelled on Instagram and TikTok, then applied a storytelling approach to handmade products: an opening that earns attention and a sequence that makes the viewer want the ending."}</p></article>
        <article><small>03 / {rtl?"النتيجة":"THE RESULT"}</small><h3>{rtl?"انتشار وصل للخليج وطلبات ملأت الطاقة الاستيعابية.":"Reach extended to the Gulf—and orders filled capacity."}</h3><p>{rtl?"الفيديو الفيرال وصل إلى 2.4 مليون مشاهدة وحقق وقتها طلبات بقيمة 11 ألف جنيه. ومع انتشار الفيديوهات، جاء طلب من الخليج ووصلت الطلبات لمرحلة أغلقت فيها البراند طاقتها الاستيعابية.":"The viral video reached 2.4M views and generated EGP 11K in orders at the time. As the videos spread, Gulf orders came in and demand reached the point where the brand’s capacity filled."}</p></article>
      </div>
      <div className="emanlyReels"><div className="emanlySectionHead"><p>{rtl?"الحكايات التي أثبتت الفكرة":"STORIES THAT PROVED THE IDEA"}</p><span>{rtl?"اضغط على أي بطاقة لمشاهدة الفيديو":"SELECT A CARD TO WATCH ON TIKTOK"}</span></div><div className="emanlyReelGrid">
        <a className="emanlyViral" href="https://www.tiktok.com/@emanly_handmade/video/7541127528451198216" target="_blank" rel="noreferrer"><img src="/storytelling/emanly-viral-2-4m.png" alt={rtl?"فيديو إيمانلي الفيرال الذي حقق 2.4 مليون مشاهدة":"Emanly viral TikTok video with 2.4M views"}/><div><small>01 / TIKTOK</small><b>2.4M</b><span>{rtl?"مشاهدة · اضغط لمشاهدة الفيديو":"VIEWS · WATCH THE VIDEO"} ↗</span></div></a>
        {["7543716584968178962","7542946066740694279","7542203782671666439"].map((id,i)=><a className="emanlyTextReel" href={`https://www.tiktok.com/@emanly_handmade/video/${id}`} target="_blank" rel="noreferrer" key={id}><small>0{i+2} / TIKTOK</small><b>{rtl?"قصة منتج\nهاند ميد":"HANDMADE\nPRODUCT STORY"}</b><span>{rtl?"شاهد الفيديو":"WATCH VIDEO"} ↗</span></a>)}
      </div></div>
      <div className="emanlyRole"><small>{rtl?"دوري":"MY ROLE"}</small><p>{rtl?"بحث المحتوى · الفكرة · الـStorytelling · كتابة المحتوى":"CONTENT RESEARCH · CONCEPT · STORYTELLING · CONTENT WRITING"}</p><a href="https://www.instagram.com/emanly.handmade/" target="_blank" rel="noreferrer">{rtl?"شاهد صفحة إيمانلي على إنستجرام":"VIEW EMANLY ON INSTAGRAM"}<span>↗</span></a></div>
    </section>
    <section className="tallahCase" id="tallah-case">
      <div className="sectionIndex">ORIGIN STORY / TALLAH DENTAL</div>
      <div className="tallahHero">
        <div><small>{rtl?"أكثر من 6 شهور · بدأت من الصفر":"6+ MONTHS · STARTED FROM ZERO"}</small><h2>{rtl?"مش أكبر أرقامي. لكنها أكبر بداية ليا.":"Not my biggest numbers. My biggest beginning."}</h2></div>
        <p>{rtl?"طلة مش مجرد مشروع اشتغلت عليه؛ دي المكان اللي بدأت فيه أفهم أنا عايز أكون مين في المحتوى.":"Tallah was more than a client project. It was where I began to understand who I wanted to become in content."}</p>
      </div>
      <div className="tallahNarrative">
        <article className="tallahOpening">
          <small>{rtl?"القصة":"THE STORY"}</small>
          <p>{rtl?"وقتها كنت لسه بتعلم يعني إيه محتوى، وإزاي فكرة تتحول لهوية، وإزاي شخص يظهر قدام الكاميرا بشكل يخلي الناس تثق فيه. بدأت أذاكر السوق والمنافسين ومشاكل العيادة، وأجرب في الـbranding والسكريبتات والتصوير.":"I was still learning what content really meant: how an idea becomes an identity, and how someone can show up on camera in a way that earns trust. I studied the market, the competitors, and the clinic’s problems—then started experimenting with branding, scripts, and shooting."}</p>
        </article>
        <article className="tallahHeart">
          <b>{rtl?"بأقل الإمكانيات، بدأت.":"With very little, I started."}</b>
          <p>{rtl?"اشتريت Softbox ومايك Boya M1 ونزلت أصور أول فيديو. الظروف ماكنتش مثالية، وأنا نفسي كنت لسه بتعلم، لكن دي كانت أول مرة أشوف فكرة كتبتها وهي بتتحول لحاجة حقيقية.":"I bought a softbox and a Boya M1 microphone and went to shoot the first reel. The conditions were far from perfect, and I was still learning—but it was the first time I watched an idea I had written become something real."}</p>
        </article>
        <article className="tallahLearning">
          <p>{rtl?"كل فيديو بعده كان درس: إضاءة أنضف، زاوية أحسن، كادر أهدى، وسكريبت أوضح. وفي مرحلة من الرحلة خليت الشكل سينمائي زيادة عن اللازم. ماكانش الاختيار الأنسب لبراند طبي، لكن الغلطة علمتني إن الجودة مش مجرد صورة حلوة؛ لازم الصورة تخدم ثقة البراند.":"Every reel after that became a lesson: cleaner light, a better angle, calmer framing, and clearer writing. At one point I pushed the look too far into cinematic territory. It was not the right choice for a medical brand, but it taught me that quality is not simply a beautiful image—the image has to serve the brand’s trust."}</p>
        </article>
      </div>
      <div className="tallahReset">
        <small>{rtl?"من التجربة إلى اتجاه طبي":"FROM EXPERIMENTATION TO A CLINICAL DIRECTION"}</small>
        <h3>{rtl?"لما فهمت الغلط، ما غطّيتش عليه. بنيت اتجاهًا أوضح.":"When I understood the mistake, I did not hide it. I built a clearer direction."}</h3>
        <p>{rtl?"بدأنا من صفحة جديدة من الصفر بعد إغلاق صفحة سابقة بسبب خطأ في نشر صورة طبية حساسة. أعدت بناء الكونسبت والتغذية البصرية، طورت اللوجو بأفكار مولدة بالـAI ثم تعاونت مع مصمم للوصول إلى النسخة النهائية، وبعدها طورت له معالجة 3D. وبمراجعة المنافسين، ثبتنا الـScrubs وطريقة تعريف الشخصية والتخصص والمشكلة، حتى أصبح للدكتور حضور طبي متكرر وواضح.":"We restarted from zero after an earlier page was removed following a mistake involving a sensitive clinical image. I rebuilt the concept and visual references, explored the logo through AI-assisted iterations, collaborated with a designer on the final mark, and developed its 3D treatment. After reviewing the competitive landscape, we established the scrubs, the doctor’s recurring introduction, his specialty, and the problem each video would address—creating a clearer and repeatable clinical presence."}</p>
      </div>
      <div className="tallahEvolutionHead"><p>{rtl?"التطور كما حدث فعلًا":"THE EVOLUTION, AS IT HAPPENED"}</p><span>{rtl?"اضغط على أي مرحلة لمشاهدة الفيديو":"SELECT A STAGE TO WATCH THE REEL"}</span></div>
      <div className="tallahEvolution">{tallahStages.map((stage,i)=><a href={`https://www.instagram.com/reel/${stage.id}/`} target="_blank" rel="noreferrer" key={stage.id} className="tallahStage"><figure><img src={stage.image} alt={rtl?`مرحلة ${stage.ar} من مشروع طلة`:`${stage.en} stage from Tallah Dental`}/><i>↗</i></figure><div><small>0{i+1}</small><h3>{rtl?stage.ar:stage.en}</h3><p>{rtl?stage.arNote:stage.enNote}</p></div></a>)}</div>
      <div className="tallahOutcome">
        <div><small>{rtl?"النتيجة التي لا تظهر في الداشبورد":"THE RESULT THAT DID NOT LIVE IN A DASHBOARD"}</small><blockquote>{rtl?"ناس دخلت العيادة وقالت: إحنا شفناكم من الفيديوهات.":"People walked into the clinic and said: We saw you in the videos."}</blockquote></div>
        <p>{rtl?"الأرقام لم تكن ضخمة، والأرشيف القديم لم يعد متاحًا. لكن بالنسبة لي، طلة هو المشروع اللي علّمني أبدأ، أجرب، أغلط، وأطوّر بعيني وإيدي. علشان كده مكانه في الرحلة أكبر من أرقامه.":"The numbers were not huge, and the earlier archive is no longer available. But Tallah taught me how to begin, test, make mistakes, and improve with my own eyes and hands. Its place in my journey is bigger than its metrics."}</p>
      </div>
      <div className="tallahRole"><p>{rtl?"دوري":"MY ROLE"}</p><div>{(rtl?["دراسة السوق والمحتوى","مفهوم الـRebranding","استكشاف اللوجو بالـAI ومعالجة 3D","كتابة كل السكريبتات","التصوير والكادرات والإضاءة","توجيه المونتاج"]:["Market & content study","Rebranding concept","AI logo exploration & 3D treatment","Every script","Shooting, framing & lighting","Editing direction"]).map(x=><span key={x}>{x}</span>)}</div><small>{rtl?"المونتاج نُفذ بواسطة متعاونين عبر مراحل المشروع وفق توجيهي. لا تُنسب إليّ مرحلة المونتاج.":"Editing was executed by collaborators across the project stages under my direction. I do not claim the edit itself."}</small></div>
      <a className="tallahLink" href="https://www.instagram.com/tallah.dentalclinic/" target="_blank" rel="noreferrer">{rtl?"شاهد طلة على إنستجرام":"VIEW TALLAH ON INSTAGRAM"}<span>↗</span></a>
    </section>
    <section className="caseStudyCta"><div><small>{rtl?"وصلت لنهاية دراسات الحالة؟":"SEEN THE CASE STUDIES?"}</small><h2>{rtl?"خلّينا نتكلم عن المشكلة اللي عندك.":"Now let’s talk about the problem you need to solve."}</h2></div><a href={whatsappUrl} target="_blank" rel="noreferrer">{t.contact}<span>↗</span></a></section>
    <section className="approachSection" id="approach"><div className="sectionIndex light">10 / PROCESS</div><div className="approachTop"><p>{t.approachK}</p><h2>{t.approachTitle}</h2><span>{t.approachIntro}</span></div><figure className="processPhoto"><img src="/abdallah-process.jpg" alt={rtl?"كواليس تجهيز موقع تصوير":"Behind the scenes of a production setup"}/><figcaption>BEHIND THE SCENES · DIRECTION IN PRACTICE</figcaption></figure><div className="steps">{t.steps.map(s=><article key={s[0]}><b>{s[0]}</b><div><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</div></section>
    <section className="aboutSection" id="about"><div className="sectionIndex">11 / PROFILE</div><div className="aboutGrid"><figure className="portraitType"><img src="/abdallah-about.jpg" alt={rtl?"صورة عبدالله المهندس":"Portrait of Abdallah Al-Mohandes"}/><span>ABDALLAH</span><i>AL-MOHANDES</i></figure><div className="aboutText"><small>{t.aboutK}</small><h2>{t.aboutTitle}</h2><p>{t.aboutP}</p><div className="abilities">{t.abilities.map((a,i)=><span key={a}><b>0{i+1}</b>{a}</span>)}</div></div></div></section>
    <section className="finalCta"><p>{t.ctaK}</p><h2>{t.ctaTitle}</h2><a href={whatsappUrl} target="_blank" rel="noreferrer">{t.email}<span>↗</span></a></section>
    <footer><a className="wordmark" href="#top">HANDASA<span>®</span></a><p>{t.footer}</p><div><a href="https://www.instagram.com/handasa.com_/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.linkedin.com/in/abdallah-al-mohandes-8b5698371/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
  </main>
}
