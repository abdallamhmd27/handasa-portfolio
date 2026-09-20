"use client";
import { useEffect } from "react";
export function usePortfolioMotion() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (preference.matches) return;
      const cards = Array.from(document.querySelectorAll<HTMLElement>(".hubCard"));
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); }
      }), { threshold: .08 });
      cards.forEach(card => { card.classList.add("reveal-ready"); observer.observe(card); });
      const hero = document.querySelector<HTMLElement>(".cinematicHero");
      let frame = 0;
      // Use the same page-turn on engines without native scroll timelines.
      const update = () => {
        frame = 0;
        if (!hero) return;
        const stage = hero.parentElement!;
        const p = Math.min(1, Math.max(0, -stage.getBoundingClientRect().top / (stage.offsetHeight * .92)));
        hero.style.transform = `perspective(1800px) rotateX(${-72 * p}deg) scale(${1 - .06 * p}) translateY(${-5 * p}vh)`;
        hero.style.opacity = String(1 - .82 * p);
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      const fallback = hero && !CSS.supports("animation-timeline", "view()");
      if (fallback) { window.addEventListener("scroll", schedule, { passive: true }); window.addEventListener("resize", schedule); schedule(); }
      cleanup = () => {
        observer.disconnect(); cards.forEach(card => card.classList.remove("reveal-ready", "is-revealed"));
        cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule);
        if (hero) { hero.style.removeProperty("transform"); hero.style.removeProperty("opacity"); }
      };
    };
    setup(); preference.addEventListener("change", setup);
    return () => { cleanup(); preference.removeEventListener("change", setup); };
  }, []);
}
