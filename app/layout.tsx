import type { Metadata } from "next";
import "./globals.css";
import "./showcase.css";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://creator-portfolio-ar.handasa180.chatgpt.site"),
  title: "Abdallah Al-Mohandes — Creative & Content Strategist",
  description: "Creative and content strategy portfolio by Abdallah Al-Mohandes.",
  openGraph: { title: "Abdallah Al-Mohandes — Creative & Content Strategist", description: "Strategy behind content that moves.", images: [{ url: "/og.png", width: 1728, height: 909 }] },
  twitter: { card: "summary_large_image", title: "Abdallah Al-Mohandes — Creative & Content Strategist", description: "Strategy behind content that moves.", images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
