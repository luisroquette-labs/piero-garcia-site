"use client";

import { useEffect, useState } from "react";
import { testimonials } from "../app/content";

// Prova social em deck empilhado que cicla (estilo stagger-testimonials).
// Conteúdo PLACEHOLDER — Piero sobe os depoimentos reais depois.
export default function StaggerTestimonials() {
  const items = testimonials.items;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="section" id="prova">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: "center", margin: "0 auto 44px" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>{testimonials.eyebrow}</span>
          <h2>{testimonials.title}</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>{testimonials.note}</p>
        </div>
        <div className="stg">
          {items.map((it, i) => {
            const off = (i - active + items.length) % items.length;
            return (
              <article
                className="stg-card"
                key={i}
                style={{ ["--off" as string]: String(off), zIndex: items.length - off }}
              >
                <p className="stg-q">“{it.quote}”</p>
                <div className="stg-who">
                  <b>{it.name}</b>
                  <span>{it.role}</span>
                </div>
              </article>
            );
          })}
          <div className="stg-dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`stg-dot${i === active ? " on" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
