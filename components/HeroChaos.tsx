"use client";

import { useEffect, useState } from "react";

// Variante B+ — caos → ordem com complexidade: os tiles se organizam E se conectam
// numa rede de processo (conectores + pulso + nós-sinal com glifos). Pseudo-random
// determinístico (sem Math.random) p/ não quebrar hidratação.
const COLS = 6;
const ROWS = 4;
const colX = [40, 120, 200, 280, 360, 440];
const rowY = [40, 120, 200, 280];

// rota do "fluxo estruturado" que emerge dos tiles (c,r)
const ROUTE: [number, number][] = [
  [0, 0], [1, 1], [2, 1], [3, 2], [4, 2], [5, 3],
];
const routeKey = new Set(ROUTE.map(([c, r]) => `${c},${r}`));
const routePath =
  "M" + ROUTE.map(([c, r]) => `${colX[c]},${rowY[r]}`).join(" L");
// nós com glifo de barras
const glyphNodes = new Set(["1,1", "4,2"]);

function rnd(i: number, s: number) {
  const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function HeroChaos() {
  const [ordered, setOrdered] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setOrdered(true); return; }
    const t = setTimeout(() => setOrdered(true), 400);
    return () => clearTimeout(t);
  }, []);

  const cells: { c: number; r: number; i: number }[] = [];
  let i = 0;
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) cells.push({ c, r, i: i++ });

  return (
    <div className="hero-viz">
      <div className="hc-head"><span className="hc-dot" /> {ordered ? "Operação estruturada" : "Operação sem estrutura"}</div>
      <svg viewBox="0 0 480 320" className={`cx-svg${ordered ? " on" : ""}`} role="img" aria-label="Caos operacional que se organiza numa rede de processo estruturada">
        <defs>
          <linearGradient id="cxg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5fe0cc" />
            <stop offset="1" stopColor="#2a8c7e" />
          </linearGradient>
        </defs>

        {/* conectores da rede (aparecem quando organiza) */}
        <path d={routePath} className="cx-link" />

        {/* tiles */}
        {cells.map(({ c, r, i }) => {
          const key = `${c},${r}`;
          const on = routeKey.has(key);
          const cx = colX[c], cy = rowY[r];
          const tx = `${(rnd(i, 1) - 0.5) * 230}px`;
          const ty = `${(rnd(i, 2) - 0.5) * 150}px`;
          const rot = `${(rnd(i, 3) - 0.5) * 90}deg`;
          const delay = `${(c * 30 + r * 45)}ms`;
          return (
            <g
              key={key}
              className={`ctile${on ? " on" : ""}`}
              style={{ ["--tx" as string]: tx, ["--ty" as string]: ty, ["--rot" as string]: rot, transitionDelay: delay }}
            >
              <rect x={cx - 30} y={cy - 30} width="60" height="60" rx="11" />
              {glyphNodes.has(key) && (
                <g transform={`translate(${cx - 11},${cy - 8})`} className="ctile-glyph">
                  <rect x="0" y="9" width="4.5" height="7" rx="1.5" />
                  <rect x="8.5" y="5" width="4.5" height="11" rx="1.5" />
                  <rect x="17" y="0" width="4.5" height="16" rx="1.5" />
                </g>
              )}
            </g>
          );
        })}

        {/* pulso correndo pela rede */}
        <circle r="5" className="cx-pulse">
          <animateMotion dur="4.5s" repeatCount="indefinite" path={routePath} />
        </circle>
      </svg>
      <p className="hero-viz-foot">Sem estrutura, toda empresa cresce… até travar. O método reorganiza em um sistema que se conecta.</p>
    </div>
  );
}
