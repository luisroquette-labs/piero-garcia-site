"use client";

import { useEffect, useRef, useState } from "react";

// Timeline horizontal (estilo hyperiux): eixo + marcos alternados acima/abaixo,
// com haste, número e copy; o eixo "desenha" e os marcos acendem ao entrar na tela.
export default function Timeline({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`tl${inView ? " in" : ""}`} ref={ref}>
      <div className="tl-line"><span className="tl-line-fill" /></div>
      <div className="tl-items" style={{ ["--n" as string]: items.length }}>
        {items.map((it, i) => (
          <div className={`tl-item ${i % 2 === 0 ? "up" : "down"}`} key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
            <span className="tl-dot" style={{ transitionDelay: `${0.3 + i * 0.12}s` }} />
            <span className="tl-stem" />
            <div className="tl-card">
              <span className="tl-num">{String(i + 1).padStart(2, "0")}</span>
              <p>{it}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
