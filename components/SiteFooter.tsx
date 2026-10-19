"use client";

import { useEffect, useRef } from "react";
import { nav, person, whatsappHref } from "../app/content";

// Rodapé "halftone wordmark" (estilo kedhareswer/21st): wordmark gigante em pontos,
// cortado na base; os pontos se afastam do cursor em mola e esquentam ao mover;
// clique dispara um anel de choque. Canvas puro, sem assets.
const WORD = "piero garcia";

export default function SiteFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cv = canvas;
    const cx = ctx;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Dot = { bx: number; by: number; r: number; ox: number; oy: number; vx: number; vy: number };
    let dots: Dot[] = [];
    let W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
    const GAP = 9;
    const INFLUENCE = 120;
    const pointer = { x: -9999, y: -9999, active: false };
    const rings: { x: number; y: number; t: number }[] = [];

    function build() {
      const rect = cv.parentElement!.getBoundingClientRect();
      W = Math.max(1, Math.floor(rect.width));
      H = Math.max(1, Math.floor(rect.height));
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + "px"; cv.style.height = H + "px";
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // offscreen: desenha o texto grande, cortado na base
      const off = document.createElement("canvas");
      off.width = W; off.height = H;
      const o = off.getContext("2d")!;
      o.fillStyle = "#fff";
      o.textBaseline = "alphabetic";
      // acha o maior font-size que caiba na largura
      let fs = H * 1.9;
      o.font = `800 ${fs}px 'Manrope', system-ui, sans-serif`;
      let w = o.measureText(WORD).width;
      const target = W * 0.98;
      fs = fs * (target / w);
      o.font = `800 ${fs}px 'Manrope', system-ui, sans-serif`;
      // baseline abaixo da borda inferior → corta as letras embaixo
      o.fillText(WORD, (W - o.measureText(WORD).width) / 2, H + fs * 0.08);

      const img = o.getImageData(0, 0, W, H).data;
      dots = [];
      for (let y = 0; y < H; y += GAP) {
        for (let x = 0; x < W; x += GAP) {
          // cobertura média do bloco GAP
          const a = img[(y * W + x) * 4 + 3];
          if (a > 40) {
            const r = (a / 255) * (GAP * 0.52);
            dots.push({ bx: x, by: y, r, ox: 0, oy: 0, vx: 0, vy: 0 });
          }
        }
      }
    }

    function frame() {
      cx.clearRect(0, 0, W, H);
      for (const d of dots) {
        if (!reduce) {
          // mola de volta à base
          let fx = -d.ox * 0.12;
          let fy = -d.oy * 0.12;
          // repulsão do cursor
          const dx = d.bx + d.ox - pointer.x;
          const dy = d.by + d.oy - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (pointer.active && dist < INFLUENCE && dist > 0.01) {
            const f = (1 - dist / INFLUENCE) * 5.5;
            fx += (dx / dist) * f;
            fy += (dy / dist) * f;
          }
          // anéis de choque
          for (const ring of rings) {
            const rdx = d.bx - ring.x, rdy = d.by - ring.y;
            const rd = Math.hypot(rdx, rdy);
            const edge = Math.abs(rd - ring.t);
            if (edge < 34 && rd > 0.01) {
              const f = (1 - edge / 34) * 7;
              fx += (rdx / rd) * f;
              fy += (rdy / rd) * f;
            }
          }
          d.vx = (d.vx + fx) * 0.78;
          d.vy = (d.vy + fy) * 0.78;
          d.ox += d.vx;
          d.oy += d.vy;
        }
        const speed = Math.min(1, Math.hypot(d.vx, d.vy) / 6);
        // base branca; esquenta levemente ao mover
        const g = Math.round(255 - speed * 40);
        const b = Math.round(255 - speed * 90);
        cx.fillStyle = `rgb(255,${g},${b})`;
        cx.beginPath();
        cx.arc(d.bx + d.ox, d.by + d.oy, d.r, 0, Math.PI * 2);
        cx.fill();
      }
      // avança anéis
      for (let i = rings.length - 1; i >= 0; i--) {
        rings[i].t += 14;
        if (rings[i].t > Math.hypot(W, H)) rings.splice(i, 1);
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    }

    function onMove(e: PointerEvent) {
      const rect = cv.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }
    function onLeave() { pointer.active = false; pointer.x = -9999; pointer.y = -9999; }
    function onClick(e: PointerEvent) {
      const rect = cv.getBoundingClientRect();
      rings.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t: 0 });
    }

    let raf = 0;
    const onResize = () => { build(); if (reduce) frame(); };
    build();
    frame();
    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerleave", onLeave);
    cv.addEventListener("pointerdown", onClick);
    window.addEventListener("resize", onResize);
    // reconstrói quando a fonte carregar (dots mais fiéis ao Manrope)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { build(); if (reduce) frame(); });

    return () => {
      cancelAnimationFrame(raf);
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("pointerleave", onLeave);
      cv.removeEventListener("pointerdown", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const areas = ["ISO 9001 & SGQ", "Mapeamento BPM", "Indicadores", "Transformação digital"];

  return (
    <footer className="hf">
      <div className="wrap hf-top">
        <div className="hf-studio">
          <div className="hf-brand">PIERO GARCIA</div>
          <div className="hf-meta">© {person.year} · CRICIÚMA / SC</div>
        </div>
        <div className="hf-cols">
          <div className="hf-col">
            <span className="hf-h">Site</span>
            {nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </div>
          <div className="hf-col">
            <span className="hf-h">Áreas</span>
            {areas.map((a) => <span key={a}>{a}</span>)}
          </div>
          <div className="hf-col">
            <span className="hf-h">Contato</span>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp {person.whatsappLabel}</a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <button className="hf-toptop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>
      <div className="hf-wordmark">
        <canvas ref={canvasRef} aria-hidden="true" />
      </div>
    </footer>
  );
}
