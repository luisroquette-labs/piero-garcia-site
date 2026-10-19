import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import { mentoria, mentoriaHref } from "../content";

export const metadata: Metadata = {
  title: "Mentoria em grupo — Piero Garcia",
  description: mentoria.lead,
};

export default function MentoriaPage() {
  return (
    <>
      <SiteHeader />
      <section className="section" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow cyan">{mentoria.eyebrow}</span>
            <h2>{mentoria.title}</h2>
            <p className="lead">{mentoria.lead}</p>
          </Reveal>

          <Reveal>
            <div className="stats-row" style={{ marginTop: 10 }}>
              {mentoria.format.map((f) => (
                <div className="stat" key={f.t}>
                  <div className="stat-n" style={{ fontSize: "1.5rem" }}>{f.v}</div>
                  <div className="stat-label">{f.t}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="about" style={{ marginTop: 56 }}>
            <div>
              <span className="eyebrow">Para quem é</span>
              <h2 style={{ fontSize: "clamp(1.6rem,3.6vw,2.4rem)", marginTop: 14 }}>{mentoria.forWho}</h2>
            </div>
            <ul>
              {mentoria.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </Reveal>

          <Reveal className="contact-band" style={{ marginTop: 56 }}>
            <h2>Pronto para estruturar a sua empresa com método?</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              Me chama no WhatsApp com a palavra “mentoria” e eu te explico a próxima turma e como funciona na prática.
            </p>
            <div className="contact-actions" style={{ marginTop: 28 }}>
              <a href={mentoriaHref} target="_blank" rel="noopener noreferrer" className="btn btn-cyan">{mentoria.cta} →</a>
              <Link href="/" className="btn btn-ghost">Voltar ao início</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
