"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { initAudio } from "./sound";

// Smooth-scroll com inércia (estilo das landing pages premium / Hotmart Launchpad).
export default function SmoothScroll() {
  useEffect(() => {
    initAudio();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.5, // ~metade da distância por wheel -> rolagem ~2x mais lenta
      touchMultiplier: 0.9,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Âncoras (#metodo, /#areas…): Lenis intercepta o scroll nativo, então
    // tratamos o clique manualmente com lenis.scrollTo (offset do header fixo).
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const hashIdx = href.indexOf("#");
      if (hashIdx < 0) return;
      const path = href.slice(0, hashIdx);
      if (path && path !== location.pathname && path !== "/") return; // outra página: deixa navegar
      const id = href.slice(hashIdx);
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
