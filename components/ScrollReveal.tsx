"use client";

import { useEffect, useRef, useState } from "react";

// Texto que ilumina palavra a palavra conforme o scroll (estilo reading-text-reveal).
export default function ScrollReveal({ text, accent }: { text: string; accent: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setP(1); return; }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = (vh * 0.82 - r.top) / (r.height + vh * 0.3);
      setP(Math.max(0, Math.min(1, prog)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const lead = text.split(" ");
  const acc = accent.split(" ");
  const words = [...lead, ...acc];
  const accStart = lead.length;

  return (
    <p className="sr" ref={ref}>
      {words.map((w, i) => {
        const wp = Math.max(0, Math.min(1, p * words.length - i));
        return (
          <span
            key={i}
            className={i >= accStart ? "sr-acc" : ""}
            style={{ opacity: 0.16 + wp * 0.84 }}
          >
            {w}{" "}
          </span>
        );
      })}
    </p>
  );
}
