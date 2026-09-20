"use client";
import { useEffect, useRef } from "react";
export default function ImageLightbox({ src, rtl, close }: { src: string; rtl: boolean; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    element.querySelector<HTMLButtonElement>(".aiVisualClose")?.focus();
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="aiVisualLightbox" onCancel={close} aria-label={rtl ? "عرض الصورة" : "Image preview"}>
    <button className="lightboxBackdrop" onClick={close} aria-label={rtl ? "إغلاق الصورة" : "Close image"} tabIndex={-1}/>
    <button className="aiVisualClose" type="button" onClick={close} aria-label={rtl ? "إغلاق الصورة" : "Close image"}>×</button>
    <img src={src} alt={rtl ? "عرض كامل للصورة" : "Full-size visual"}/>
  </dialog>;
}
