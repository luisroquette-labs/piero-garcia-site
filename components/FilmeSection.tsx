"use client";

import { useEffect, useRef, useState } from "react";
import { BASE } from "../app/base";

// Seção de vídeo: o filme de 25s (ruído -> método -> resultado). 16:9 no desktop,
// 9:16 no mobile (um só <video>, troca por matchMedia -> sem áudio duplicado).
// preload="none": nada baixa até o play.
export default function FilmeSection() {
  const [mobile, setMobile] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const src = `${BASE}/${mobile ? "filme-piero-9x16.mp4" : "filme-piero-16x9.mp4"}`;
  const poster = `${BASE}/${mobile ? "filme-poster-9x16.jpg" : "filme-poster.jpg"}`;

  const play = () => {
    setPlaying(true);
    // dá um tick para o controls/autoplay pegar o src atual
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section className="section filme" id="filme">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">O filme</span>
          <h2>Em 25 segundos: <span className="em">do ruído ao método.</span></h2>
          <p className="lead">O que a estrutura muda na sua operação — em movimento.</p>
        </div>

        <div className={`filme-frame ${mobile ? "is-tall" : "is-wide"}`}>
          <video
            ref={videoRef}
            key={src}
            className="filme-video"
            src={src}
            poster={poster}
            controls={playing}
            playsInline
            preload="none"
          />
          {!playing && (
            <button type="button" className="filme-play" onClick={play} aria-label="Reproduzir o filme">
              <span className="filme-play-icon" aria-hidden="true" />
              <span className="filme-play-label">Assistir</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
