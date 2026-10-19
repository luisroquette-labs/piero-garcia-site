// Variante C — isométrico: a operação como "máquina" estruturada.
// Barras ascendentes em 3D (motivo da marca) sobre uma base, engrenagem girando.
// 3 tons por face (topo claro / esquerda médio / direita escuro).

const HW = 46, HH = 23;

function cube(cx: number, baseY: number, h: number) {
  const cy = baseY - h; // centro do topo
  const top = `${cx},${cy - HH} ${cx + HW},${cy} ${cx},${cy + HH} ${cx - HW},${cy}`;
  const left = `${cx - HW},${cy} ${cx},${cy + HH} ${cx},${cy + HH + h} ${cx - HW},${cy + h}`;
  const right = `${cx},${cy + HH} ${cx + HW},${cy} ${cx + HW},${cy + h} ${cx},${cy + HH + h}`;
  return { top, left, right, topCenter: [cx, cy] as const };
}

export default function HeroIso() {
  const bars = [
    cube(120, 196, 44),
    cube(166, 219, 78),
    cube(212, 242, 112),
  ];
  // base plate (diamante fino)
  const bx = 190, by = 266, bhw = 168, bhh = 84;
  const plateTop = `${bx},${by - bhh} ${bx + bhw},${by} ${bx},${by + bhh} ${bx - bhw},${by}`;
  return (
    <div className="hero-viz">
      <div className="hc-head"><span className="hc-dot" /> A operação, estruturada</div>
      <svg viewBox="0 0 420 340" className="iso-svg" role="img" aria-label="Operação estruturada representada como máquina isométrica">
        {/* base */}
        <polygon points={plateTop} fill="#0c3330" stroke="rgba(130,220,205,0.18)" />
        <polygon points={`${bx - bhw},${by} ${bx},${by + bhh} ${bx},${by + bhh + 10} ${bx - bhw},${by + 10}`} fill="#071d1b" />
        <polygon points={`${bx},${by + bhh} ${bx + bhw},${by} ${bx + bhw},${by + 10} ${bx},${by + bhh + 10}`} fill="#04120f" />
        {/* barras ascendentes */}
        {bars.map((b, i) => (
          <g key={i} className="iso-bar" style={{ ["--d" as string]: `${i * 0.25}s` }}>
            <polygon points={b.right} fill="#124a48" />
            <polygon points={b.left} fill="#2a8c7e" />
            <polygon points={b.top} fill="#5fe0cc" />
          </g>
        ))}
        {/* token de processo flutuando sobre o topo da barra mais alta */}
        <g className="iso-token">
          <polygon points={`${bars[2].topCenter[0]},${bars[2].topCenter[1] - HH - 14} ${bars[2].topCenter[0] + 14},${bars[2].topCenter[1] - 7 - 14} ${bars[2].topCenter[0]},${bars[2].topCenter[1] - 14} ${bars[2].topCenter[0] - 14},${bars[2].topCenter[1] - 7 - 14}`} fill="#8fe9d9" />
        </g>
        {/* engrenagem girando */}
        <g className="iso-gear" style={{ transformOrigin: "330px 92px" }}>
          <circle cx="330" cy="92" r="26" fill="none" stroke="#5fe0cc" strokeWidth="7" strokeDasharray="6 7" />
          <circle cx="330" cy="92" r="12" fill="none" stroke="#2a8c7e" strokeWidth="4" />
          <circle cx="330" cy="92" r="3" fill="#8fe9d9" />
        </g>
      </svg>
      <p className="hero-viz-foot">Cada peça no lugar: processo, pessoas e indicadores operando juntos.</p>
    </div>
  );
}
