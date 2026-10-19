"use client";

import { useEffect, useRef, useState } from "react";

// Variante B — 3D com profundidade: campo de tiles que voam do caos (Z + rotação 3D)
// e se assentam numa rede organizada em camadas; conectores + pulso por cima;
// parallax no cursor. Pseudo-random determinístico (sem Math.random → sem mismatch).
const COLS = 6, ROWS = 4;
const VW = 600, VH = 230;
const ROUTE: [number, number][] = [[0, 0], [1, 1], [2, 1], [3, 2], [4, 2], [5, 3]];
const routeKey = new Set(ROUTE.map(([c, r]) => `${c},${r}`));
const cx = (c: number) => ((c + 0.5) / COLS) * VW;
const cy = (r: number) => ((r + 0.5) / ROWS) * VH;
const routePath = "M" + ROUTE.map(([c, r]) => `${cx(c)},${cy(r)}`).join(" L");
const glyphNodes = new Set(["1,1", "4,2"]);

function rnd(i: number, s: number) {
  const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function HeroField3D() {
  const [ordered, setOrdered] = useState(false);
  const rotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setOrdered(true); return; }
    const t = setTimeout(() => setOrdered(true), 450);
    return () => clearTimeout(t);
  }, []);

  function onMove(e: React.MouseEvent) {
    const el = rotRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${nx * 18}deg`);
    el.style.setProperty("--rx", `${-ny * 14}deg`);
  }
  function onLeave() {
    const el = rotRef.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  }

  const cells: { c: number; r: number; i: number }[] = [];
  let i = 0;
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) cells.push({ c, r, i: i++ });

  return (
    <div className="hero-viz">
      <div className="hc-head"><span className="hc-dot" /> {ordered ? "Operação estruturada" : "Operação sem estrutura"}</div>
      <div className="field3d" onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="field3d-rot" ref={rotRef}>
          <div className="field3d-plane">
            {cells.map(({ c, r, i }) => {
              const key = `${c},${r}`;
              const on = routeKey.has(key);
              const dx = (rnd(i, 1) - 0.5) * 300;
              const dy = (rnd(i, 2) - 0.5) * 190;
              const dz = (rnd(i, 4) - 0.5) * 520;
              const rx = (rnd(i, 5) - 0.5) * 120;
              const ry = (rnd(i, 6) - 0.5) * 120;
              const rz = (rnd(i, 3) - 0.5) * 120;
              const layerZ = on ? 34 : -18;
              const chaos = `translate(-50%, -50%) translate3d(${dx}px, ${dy}px, ${dz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
              const settled = `translate(-50%, -50%) translate3d(0, 0, ${layerZ}px)`;
              return (
                <div
                  key={key}
                  className={`t3d${on ? " on" : ""}`}
                  style={{
                    left: `${((c + 0.5) / COLS) * 100}%`,
                    top: `${((r + 0.5) / ROWS) * 100}%`,
                    transform: ordered ? settled : chaos,
                    opacity: ordered ? (on ? 1 : 0.55) : 0.28,
                    transitionDelay: `${(c * 35 + r * 55)}ms`,
                  }}
                >
                  {glyphNodes.has(key) && (
                    <svg className="t3d-glyph" viewBox="0 0 24 16" aria-hidden="true">
                      <rect x="0" y="9" width="4.5" height="7" rx="1.5" />
                      <rect x="8.5" y="5" width="4.5" height="11" rx="1.5" />
                      <rect x="17" y="0" width="4.5" height="16" rx="1.5" />
                    </svg>
                  )}
                </div>
              );
            })}
            <svg className={`net3d${ordered ? " on" : ""}`} viewBox={`0 0 ${VW} ${VH}`} preserveAspectRatio="none" aria-hidden="true">
              <path d={routePath} className="net3d-link" />
              <circle r="6" className="net3d-pulse">
                <animateMotion dur="4.5s" repeatCount="indefinite" path={routePath} />
              </circle>
            </svg>
          </div>
        </div>
      </div>
      <p className="hero-viz-foot">Sem estrutura, toda empresa cresce… até travar. O método reorganiza em um sistema que se conecta.</p>
    </div>
  );
}
