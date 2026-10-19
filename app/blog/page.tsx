import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import BlogCard from "../../components/BlogCard";
import { posts } from "../posts";

export const metadata: Metadata = {
  title: "Blog — Piero Garcia",
  description: "Processos, qualidade e transformação digital explicados de forma direta, para quem toca a operação.",
};

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />
      <section className="section" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <Reveal className="section-head" >
            <span className="eyebrow cyan">Blog</span>
            <h2>Conteúdo que gera <span className="em">autoridade</span>.</h2>
            <p className="lead">Processos, qualidade e transformação digital explicados de forma direta, para quem toca a operação.</p>
          </Reveal>
          <div className="blog-grid">
            {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
          <p style={{ marginTop: 36 }}>
            <Link href="/" className="back-link">← Voltar ao início</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
