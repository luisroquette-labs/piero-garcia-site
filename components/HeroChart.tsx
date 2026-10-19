"use client";

import { useEffect, useRef, useState } from "react";

// Assinatura do hero: barras ascendentes (motivo da logo) + os 3 KPIs reais.
// As barras são o motivo de marca (não dado literal); os números são a verdade-âncora.
const BARS = [34, 46, 58, 72, 92]; // alturas % — "operação que sobe com método"

const KPIS = [
  { sign: "−", n: 35, suffix: "%", label: "retrabalho" },
  { sign: "+", n: 28, suffix: "%", label: "produtividade" },
  { sign: "−", n: 22, suffix: "%", label: "tempo operacional" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    let raf = 0; const dur = 900; let t0 = 0;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <>{v}{suffix}</>;
}

export default function HeroChart() {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div className="hero-chart" ref={ref} aria-hidden="false">
      <div className="hc-head">
        <span className="hc-dot" />
        Operação estruturada
      </div>
      <div className="hc-bars">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="hc-bar"
            style={{ height: seen ? `${h}%` : "6%", transitionDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
      <div className="hc-kpis">
        {KPIS.map((k) => (
          <div className="hc-kpi" key={k.label}>
            <b>{k.sign}{seen ? <CountUp target={k.n} suffix={k.suffix} /> : `0${k.suffix}`}</b>
            <span>{k.label}</span>
          </div>
        ))}
      </div>
      <p className="hc-foot">Resultados de projetos reais com empresas em crescimento.</p>
    </div>
  );
}
