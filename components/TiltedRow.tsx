"use client";

import { useEffect, useRef } from "react";

// Fileira curva e streaming (estilo ruixen/tilted-grid-hero): cards fluem na horizontal,
// inclinam em direção ao viewer nas bordas e somem no fade lateral. Pausa no hover p/ ler.
type Card = { num: string; title?: string; text: string };

export default function TiltedRow({ items }: { items: Card[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reps = [...items, ...items, ...items];

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(track.children) as HTMLElement[];

    let offset = 0;
    let oneSet = track.scrollWidth / 3;
    let paused = false;
    let raf = 0;
    const speed = 0.35;

    const curve = () => {
      const wr = wrap.getBoundingClientRect();
      const cx = wr.left + wr.width / 2;
      for (const card of cards) {
        const r = card.getBoundingClientRect();
        const ccx = r.left + r.width / 2;
        const t = Math.max(-1, Math.min(1, (ccx - cx) / (wr.width / 2)));
        const ry = -t * 34;
        const tz = -Math.abs(t) * 90;
        card.style.transform = `perspective(1100px) rotateY(${ry}deg) translateZ(${tz}px)`;
      }
    };

    const frame = () => {
      if (!paused) {
        offset -= speed;
        if (-offset >= oneSet) offset += oneSet;
        track.style.transform = `translateX(${offset}px)`;
      }
      curve();
      raf = requestAnimationFrame(frame);
    };

    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    const onResize = () => { oneSet = track.scrollWidth / 3; };

    if (reduce) {
      curve();
    } else {
      raf = requestAnimationFrame(frame);
      wrap.addEventListener("pointerenter", onEnter);
      wrap.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", onResize);
    }

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="tilt-row" ref={wrapRef}>
      <div className="tilt-track" ref={trackRef}>
        {reps.map((it, i) => (
          <div className="tilt-card" key={i}>
            <div className="tilt-n">{it.num}</div>
            {it.title && <h3 className="tilt-title">{it.title}</h3>}
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
