// Variante A — fluxo de processo vivo (BPMN): nós conectados + pulso correndo.
// SVG puro (SMIL para o pulso, CSS para o glow dos nós). O que o Piero faz.
export default function HeroBPM() {
  const nodes = [
    { x: 24, y: 44, label: "Diagnóstico", delay: "0s" },
    { x: 176, y: 44, label: "Estrutura", delay: "1s" },
    { x: 176, y: 176, label: "Execução", delay: "2s" },
    { x: 328, y: 176, label: "Indicadores", delay: "3s" },
  ];
  const spine = "M88,68 H240 V200 H392";
  return (
    <div className="hero-viz">
      <div className="hc-head"><span className="hc-dot" /> Fluxo da operação</div>
      <svg viewBox="0 0 480 268" className="bpm-svg" role="img" aria-label="Fluxo de processo: diagnóstico, estrutura, execução, indicadores">
        {/* conectores */}
        <path d={spine} className="bpm-line" fill="none" />
        {/* pulso correndo pelo fluxo */}
        <circle r="5" className="bpm-pulse">
          <animateMotion dur="4s" repeatCount="indefinite" path={spine} />
        </circle>
        {/* nós */}
        {nodes.map((n) => (
          <g key={n.label} className="bpm-node" style={{ ["--d" as string]: n.delay }}>
            <rect x={n.x} y={n.y} width="128" height="48" rx="10" />
            <text x={n.x + 64} y={n.y + 29} textAnchor="middle">{n.label}</text>
          </g>
        ))}
      </svg>
      <p className="hero-viz-foot">Do gargalo ao indicador — o processo mapeado e rodando.</p>
    </div>
  );
}
