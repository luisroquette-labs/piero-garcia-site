"use client";

import { useEffect, useRef, useState } from "react";
import { BASE } from "../app/base";

// Seção de filme full-bleed: o vídeo roda sozinho, mudo e em loop, de borda a borda
// (feito para funcionar mudo — o texto carrega a mensagem). 16:9 no desktop, 9:16 no
// mobile. Só toca quando entra na tela (IntersectionObserver). Botão de som opcional.
export default function FilmeSection() {
  const [mobile, setMobile] = useState(false);
  const [sound, setSound] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Toca só quando visível; pausa fora da tela.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [mobile]);

  const src = `${BASE}/${mobile ? "filme-piero-9x16.mp4" : "filme-piero-16x9.mp4"}`;
  const poster = `${BASE}/${mobile ? "filme-poster-9x16.jpg" : "filme-poster.jpg"}`;

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !sound;
    v.muted = !next;
    if (next) v.currentTime = 0; // ouvir do começo
    v.play().catch(() => {});
    setSound(next);
  };

  return (
    <section className={`filme-full ${mobile ? "is-tall" : "is-wide"}`} id="filme" aria-label="Filme Piero Garcia">
      <video
        ref={videoRef}
        key={src}
        className="filme-video"
        src={src}
        poster={poster}
        muted={!sound}
        loop
        autoPlay
        playsInline
        preload="metadata"
      />
      <button type="button" className="filme-sound" onClick={toggleSound} aria-pressed={sound}>
        {sound ? "Som ligado" : "Ativar som"}
      </button>
    </section>
  );
}
