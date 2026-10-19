import { whatsappHref } from "../app/content";

// CTA de fechamento — estilo "last word": marquee gigante atrás + declaração sóbria.
export default function ClosingCta() {
  const marquee = "ESTRUTURA · PROCESSOS · ISO 9001 · RESULTADO · ";
  return (
    <section className="closing" id="comecar">
      <div className="closing-marquee" aria-hidden="true">
        <div className="cm-track">
          <span>{marquee.repeat(4)}</span>
          <span>{marquee.repeat(4)}</span>
        </div>
      </div>
      <div className="wrap closing-inner">
        <span className="eyebrow">Última palavra</span>
        <h2 className="display">Vamos estruturar a sua operação.</h2>
        <p className="lead">
          Sem promessa mágica: um diagnóstico direto, prioridades claras e um plano que a sua equipe consegue executar.
        </p>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary closing-btn">
          Começar o diagnóstico →
        </a>
        <p className="closing-note">10 a 1000 funcionários · Criciúma/SC e atendimento nacional · sem compromisso</p>
      </div>
    </section>
  );
}
