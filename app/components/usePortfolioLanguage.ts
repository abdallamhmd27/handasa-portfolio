"use client";
import { useEffect, useSyncExternalStore } from "react";
export type Lang = "en" | "ar";
const key = "handasa-portfolio-language";
let current: Lang = "en";
function snapshot(): Lang {
  try { const saved = localStorage.getItem(key); if (saved === "ar" || saved === "en") current = saved; }
  catch { /* Storage can be unavailable in private browsing. */ }
  return current;
}
function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener("portfolio-language", notify);
  return () => { window.removeEventListener("storage", notify); window.removeEventListener("portfolio-language", notify); };
}
function setLanguage(next: Lang) {
  current = next;
  try { localStorage.setItem(key, next); } catch { /* Keep the current tab usable without storage. */ }
  window.dispatchEvent(new Event("portfolio-language"));
}
export function usePortfolioLanguage() {
  const lang = useSyncExternalStore(subscribe, snapshot, () => "en" as Lang);
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; }, [lang]);
  return [lang, setLanguage] as const;
}
