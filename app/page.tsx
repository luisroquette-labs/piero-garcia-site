import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AnchorHero from "../components/AnchorHero";
import StatCounter from "../components/StatCounter";
import Reveal from "../components/Reveal";
import WavyRibbon from "../components/WavyRibbon";
import Accordion from "../components/Accordion";
import BlogCard from "../components/BlogCard";
import TiltedRow from "../components/TiltedRow";
import Timeline from "../components/Timeline";
import StaggerTestimonials from "../components/StaggerTestimonials";
import SpotlightCard from "../components/SpotlightCard";
import ScrollReveal from "../components/ScrollReveal";
import ClosingCta from "../components/ClosingCta";
import { posts } from "./posts";
import { BASE } from "./base";
import {
  stats, problema, diferenciais, processo, automacao,
  portfolio, manifesto, sobre, mentoria, contact, faq,
  whatsappHref, mentoriaHref, person,
} from "./content";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO — estilo Anchor (vídeo full-bleed) */}
      <AnchorHero />

      {/* PROBLEMA — fileira curva streaming */}
      <section className="section" id="problema">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{problema.eyebrow}</span>
            <h2>{problema.title}</h2>
          </Reveal>
          <Timeline items={problema.items} />
        </div>
        <div className="wrap">
          <Reveal>
            <p className="display" style={{ fontSize: "clamp(1.6rem,3.6vw,2.4rem)", marginTop: 40, maxWidth: "20ch" }}>
              {problema.conclusion}
            </p>
            <p className="muted" style={{ marginTop: 10 }}>{problema.insight}</p>
          </Reveal>
        </div>
      </section>

      {/* MÉTODO — fileira curva streaming */}
      <section className="section" id="metodo">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{processo.eyebrow}</span>
            <h2>{processo.title}</h2>
            <p className="lead">{processo.lead}</p>
          </Reveal>
        </div>
        <TiltedRow items={processo.steps.map((s) => ({ num: s.n, title: s.title, text: s.body }))} />
      </section>

      {/* RESULTADOS */}
      <section className="section" id="resultados" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow cyan">Resultados</span>
            <h2>O que acontece quando a operação é <span className="em">estruturada</span>.</h2>
            <p className="lead">Resultados baseados em projetos reais com empresas em crescimento.</p>
          </Reveal>
          <div className="stats-row">
            {stats.map((s) => (
              <StatCounter key={s.label} n={s.n} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE COMIGO */}
      <section className="section" id="diferenciais">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{diferenciais.eyebrow}</span>
            <h2>{diferenciais.title}</h2>
            <p className="lead">{diferenciais.lead}</p>
          </Reveal>
          <div className="bento">
            {diferenciais.items.map((it, i) => (
              <Reveal key={it.k} className={`b${i}`}>
                <SpotlightCard className="diff-card">
                  <div className="k">{it.k}</div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO — grade estática */}
      <section className="section" id="areas">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{portfolio.eyebrow}</span>
            <h2>{portfolio.title}</h2>
            <p className="lead">{portfolio.lead}</p>
          </Reveal>
          <div className="feat-rows">
            {portfolio.items.map((a, i) => (
              <Reveal key={a.slug} className={`feat-row${i % 2 ? " rev" : ""}`}>
                <div className="feat-text">
                  <span className="eyebrow">{a.kind}</span>
                  <h3>{a.name}</h3>
                  <p>{a.blurb}</p>
                  <ul className="feat-bul">
                    {a.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="feat-stat">{a.metric}</div>
                </div>
                <div className="feat-img">
                  <img src={`${BASE}/${a.img}`} alt="" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="deck-mini">
            {portfolio.mini.map((m) => (
              <StatCounter key={m.label} n={m.n} suffix={m.suffix} label={m.label} />
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO DIGITAL */}
      <section className="section" id="tecnologia">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow cyan">{automacao.eyebrow}</span>
            <h2>{automacao.title}</h2>
            <p className="lead">{automacao.lead}</p>
          </Reveal>
          <div className="pillars">
            {automacao.pillars.map((p) => (
              <SpotlightCard key={p.tag} className="pillar">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="chips">
                  {p.chips.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORIA (teaser) */}
      <section className="section" id="mentoria-teaser">
        <div className="wrap">
          <Reveal className="contact-band">
            <span className="eyebrow cyan">{mentoria.eyebrow}</span>
            <h2>{mentoria.title}</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>{mentoria.lead}</p>
            <div className="contact-actions" style={{ marginTop: 28 }}>
              <a href={mentoriaHref} target="_blank" rel="noopener noreferrer" className="btn btn-cyan">{mentoria.cta} →</a>
              <Link href="/mentoria" className="btn btn-ghost">Como funciona a mentoria</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILOSOFIA — reveal palavra a palavra no scroll */}
      <section className="section manifesto-static">
        <div className="wrap">
          <ScrollReveal text={manifesto.lead} accent={manifesto.accent} />
        </div>
      </section>

      {/* SOBRE (teaser) */}
      <section className="section" id="sobre-teaser">
        <div className="wrap">
          <div className="about">
            <Reveal className="about-photo">
              <img src={`${BASE}/piero-foto.webp`} alt="Piero Garcia, consultor em processos" width={400} height={400} />
              <div className="about-photo-cap">
                <b>Piero Garcia</b>
                <span>Auditor líder ISO 9001 · Criciúma/SC</span>
              </div>
            </Reveal>
            <Reveal>
              <span className="eyebrow">{sobre.eyebrow}</span>
              <h2>{sobre.title}</h2>
              <p className="mission">{sobre.mission}</p>
              <p>{sobre.body}</p>
              <ul>
                {sobre.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <Link href="/sobre" className="btn btn-ghost" style={{ marginTop: 8 }}>Conhecer a trajetória →</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLOG teaser */}
      <section className="section" id="blog">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow cyan">Blog</span>
            <h2>Conteúdo que gera <span className="em">autoridade</span>.</h2>
            <p className="lead">Processos, qualidade e transformação digital explicados de forma direta, para quem toca a operação.</p>
          </Reveal>
          <div className="blog-grid">
            {posts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/blog" className="btn btn-ghost">Ver todos os artigos →</Link>
          </div>
        </div>
      </section>

      {/* FITA ONDULANTE */}
      <WavyRibbon text="Perguntas frequentes" />

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2>{faq.title}</h2>
          </Reveal>
          <Accordion items={faq.items} />
        </div>
      </section>

      {/* PROVA SOCIAL (mockado) */}
      <StaggerTestimonials />

      {/* CTA DE FECHAMENTO */}
      <ClosingCta />

      {/* CONTATO */}
      <section className="section" id="contato">
        <div className="wrap">
          <Reveal className="contact-band">
            <div className="contact-2col">
              <div className="contact-info">
                <span className="eyebrow">{contact.eyebrow}</span>
                <h2>{contact.title}</h2>
                <p className="lead">{contact.lead}</p>
                <div className="contact-lines">
                  <div className="cl">
                    <span className="cl-ic">📍</span>
                    <div><span className="cl-t">Localização</span><span className="cl-v">{person.location}</span></div>
                  </div>
                  <div className="cl">
                    <span className="cl-ic">💬</span>
                    <div><span className="cl-t">WhatsApp</span><span className="cl-v">{person.whatsappLabel}</span></div>
                  </div>
                  <div className="cl">
                    <span className="cl-ic">✉️</span>
                    <div><span className="cl-t">E-mail</span><span className="cl-v">{person.email}</span></div>
                  </div>
                </div>
                <div className="contact-actions">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conversar com o Piero →</a>
                  <a href={person.dirUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Como chegar ↗</a>
                </div>
              </div>
              <div className="contact-map">
                <iframe
                  src={person.mapsEmbed}
                  title="Localização — Criciúma, Santa Catarina"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a href={person.mapsUrl} target="_blank" rel="noopener noreferrer" className="map-link">Ver no Google Maps ↗</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
