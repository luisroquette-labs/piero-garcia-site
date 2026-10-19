import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import HeroBPM from "../../components/HeroBPM";
import HeroChaos from "../../components/HeroChaos";
import HeroIso from "../../components/HeroIso";
import { hero, whatsappHref } from "../content";

export const metadata: Metadata = { title: "Hero Lab — Piero Garcia", robots: { index: false } };

function Copy({ tag }: { tag: string }) {
  return (
    <div className="hero-copy">
      <span className="variant-tag">{tag}</span>
      <br />
      <span className="eyebrow">{hero.eyebrow}</span>
      <h1 className="display">
        {hero.titleLead} <span className="accent">{hero.titleAccent}</span>
      </h1>
      <p className="lead">{hero.lead}</p>
      <div className="hero-creds">
        <span><b>25+</b> anos de experiência</span>
        <span><b>50+</b> projetos</span>
        <span><b>Auditor líder</b> ISO 9001</span>
      </div>
      <div className="hero-ctas">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{hero.ctaPrimary} →</a>
        <Link href="#" className="btn btn-ghost">{hero.ctaSecondary}</Link>
      </div>
    </div>
  );
}

export default function HeroLab() {
  return (
    <>
      <SiteHeader />
      <section className="hero"><div className="wrap hero-grid"><Copy tag="Variante A · Fluxo BPM" /><HeroBPM /></div></section>
      <section className="hero"><div className="wrap hero-grid"><Copy tag="Variante B · Caos → Ordem" /><HeroChaos /></div></section>
      <section className="hero"><div className="wrap hero-grid"><Copy tag="Variante C · Isométrico" /><HeroIso /></div></section>
    </>
  );
}
