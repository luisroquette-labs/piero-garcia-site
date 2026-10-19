import { whatsappHref } from "../app/content";
import { BASE } from "../app/base";

// Hero estilo "Anchor" (scrolltide) — full-bleed vídeo + tipografia bold ancorada
// embaixo, captions laterais, pill branco. Estático, sem animação (filosofia Anchor).
export default function AnchorHero() {
  return (
    <section id="inicio" className="anchor-hero">
      <video className="ah-video" src={`${BASE}/hero.mp4`} autoPlay muted loop playsInline />
      <div className="ah-ov ah-ov-grad" />
      <div className="ah-ov ah-ov-tint" />

      {/* captions laterais — eco do headline */}
      <div className="ah-caps">
        <span>Todo mundo se move.</span>
        <span className="r">Só alguns chegam.</span>
      </div>

      {/* conteúdo ancorado embaixo */}
      <div className="ah-bottom">
        <div className="ah-bottom-inner">
          <h1 className="ah-h1">
            Todo mundo se move.
            <br />
            Poucos chegam.
          </h1>
          <div className="ah-side">
            <p>
              No ruído do dia a dia, estrutura é a real vantagem. Ajudo médias empresas
              a crescer com foco, método e controle — e a chegar onde querem.
            </p>
            <div className="ah-ctas">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="ah-pill">
                Fazer diagnóstico gratuito
              </a>
              <a href="#metodo" className="ah-link">
                Ver o método
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
