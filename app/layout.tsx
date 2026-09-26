import type { Metadata } from "next";
import "./globals.css";
import "./showcase.css";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://creator-portfolio-ar.handasa180.chatgpt.site"),
  icons: { icon: [{ url: "/favicon.svg?v=handasa1", type: "image/svg+xml" }, { url: "/favicon-32.png?v=handasa1", type: "image/png", sizes: "32x32" }], apple: [{ url: "/apple-touch-icon.png?v=handasa1", sizes: "180x180", type: "image/png" }] },
  title: "عبدالله المهندس | HANDASA — Creative & Content Strategist",
  description: "اكتشف أعمال عبدالله المهندس في التصوير، كتابة الإعلانات، السرد القصصي واستراتيجية المحتوى — مشاريع حقيقية وقصص نجاح.",
  openGraph: {
    type: "website",
    url: "https://handasa-portfolio.vercel.app/",
    siteName: "HANDASA | عبدالله المهندس",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    title: "عبدالله المهندس | Creative & Content Strategist",
    description: "تصوير، كتابة إعلانات، سرد قصصي واستراتيجية محتوى. شوف الأعمال والمشاريع وقصص النجاح في البورتفوليو.",
    images: [{ url: "https://handasa-portfolio.vercel.app/handasa-share.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Abdallah Al-Mohandes — Creative & Content Strategist | HANDASA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عبدالله المهندس | Creative & Content Strategist",
    description: "تصوير، كتابة إعلانات، سرد قصصي واستراتيجية محتوى. اكتشف الأعمال وقصص النجاح.",
    images: [{ url: "https://handasa-portfolio.vercel.app/handasa-share.jpg", alt: "Abdallah Al-Mohandes — Creative & Content Strategist | HANDASA" }],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
