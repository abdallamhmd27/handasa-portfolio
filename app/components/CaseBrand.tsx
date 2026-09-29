const brands = {
  talaa: { ar: "تعالى أفهمك", en: "Ta’ala Afhemak", href: "https://www.instagram.com/talaa_afhemac/" },
  mariem: { ar: "مريم حجاب", en: "Mariem Hijab", href: "https://www.facebook.com/profile.php?id=100078683716290" },
  ebtkarat: { ar: "ابتكارات", en: "Ebtkarat", href: "https://www.instagram.com/ebt.sa/" },
  moreh: { ar: "مريح", en: "Moreh", href: "https://www.instagram.com/morehmedwear/" },
  "first-axes": { ar: "فيرست أكسيس", en: "First Axes", href: "https://www.instagram.com/first.axes/" },
  rabha: { ar: "رابحة", en: "Rabha", href: "https://www.facebook.com/people/Rabha/61588290807233/" },
  emanly: { ar: "إيمانلي", en: "Emanly", href: "https://www.instagram.com/emanly.handmade/" },
  tallah: { ar: "طلة لطب الأسنان", en: "Tallah Dental", href: "https://www.instagram.com/tallah.dentalclinic/" },
};

export default function CaseBrand({ brand, rtl }: { brand: keyof typeof brands; rtl: boolean }) {
  const item = brands[brand];
  const name = rtl ? item.ar : item.en;
  return (
    <a className="caseBrand" href={item.href} target="_blank" rel="noopener noreferrer" dir={rtl ? "rtl" : "ltr"} aria-label={rtl ? `افتح صفحة ${name} — في تبويب جديد` : `Visit ${name} — opens in a new tab`}>
      <img className="caseBrandLogo" src={`/brands/${brand}.jpg`} alt="" width={80} height={80} loading="lazy" decoding="async" />
      <span className="caseBrandName">{name}</span>
      <span className="caseBrandVisit">{rtl ? "صفحة البراند" : "Visit brand"}<span aria-hidden="true">↗</span></span>
    </a>
  );
}
