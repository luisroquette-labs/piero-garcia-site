"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  n,
  prefix = "",
  suffix = "",
  label,
}: {
  n: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const decimals = Number.isInteger(n) ? 0 : 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(n);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const dur = 1500;
        let start = 0;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min(1, (ts - start) / dur);
          const eased = 1 - Math.pow(1 - p, 4);
          setValue(eased * n);
          // motion blur + roll que some ao assentar (estilo odômetro)
          const num = numRef.current;
          if (num) {
            const k = 1 - eased;
            num.style.filter = `blur(${(k * 7).toFixed(2)}px)`;
            num.style.transform = `translateY(${(k * -8).toFixed(2)}px)`;
            num.style.opacity = `${(0.4 + eased * 0.6).toFixed(2)}`;
          }
          if (p < 1) requestAnimationFrame(step);
          else if (num) { num.style.filter = "none"; num.style.transform = "none"; num.style.opacity = "1"; }
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);

  return (
    <div className="stat" ref={ref}>
      <span className="stat-n">
        <span className="stat-roll" ref={numRef}>
          {prefix}
          {value.toFixed(decimals)}
          <span className="u">{suffix}</span>
        </span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
