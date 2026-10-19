import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

// Estilo Anchor: Manrope (headline bold) + Inter (corpo). Mantém a var --font-serif
// como "display" para diff mínimo nos componentes que já a usam.
const display = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

// Corpo neutro e legível.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Voz de "medição" — KPIs, labels, números (mundo ISO/indicadores).
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-src",
  display: "swap",
});

const SITE_URL = "https://luisroquette-labs.github.io/piero-garcia-site/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Piero Garcia | Consultoria em Processos, ISO 9001 e Gestão",
  description:
    "25 anos transformando operações em resultado. Diagnóstico gratuito de gargalos para empresas de 10 a 1000 funcionários. ISO 9001, BPM e transformação digital. Criciúma/SC e atendimento nacional.",
  openGraph: {
    title: "Piero Garcia | Consultoria em Processos e Gestão",
    description:
      "25 anos transformando operações em resultado. Diagnóstico gratuito de gargalos operacionais. ISO 9001, BPM, indicadores e transformação digital.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "piero-banner.png", width: 1400, height: 350, alt: "Piero Garcia — Otimização de processos" }],
  },
  twitter: { card: "summary_large_image", images: ["piero-banner.png"] },
};

// JSON-LD — só fatos reais (GEO + busca local).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Piero Garcia Consultoria",
      description:
        "Consultoria em melhoria de processos (BPM/BPMN), sistemas de gestão da qualidade (ISO 9001), planejamento estratégico (BSC), indicadores (KPIs/OKRs) e transformação digital.",
      areaServed: ["Brasil", "Santa Catarina", "Criciúma"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Criciúma",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      telephone: "+5548999115698",
      url: SITE_URL,
      founder: { "@type": "Person", name: "Piero Garcia" },
    },
    {
      "@type": "Person",
      name: "Piero Garcia",
      jobTitle: "Consultor em melhoria de processos · Auditor líder ISO 9001",
      worksFor: { "@type": "Organization", name: "Piero Garcia Consultoria" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Criciúma",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      sameAs: ["https://www.linkedin.com/in/piero-garcia-66648434/"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
