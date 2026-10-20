# Piero Garcia — Site (pacote de entrega)

Site institucional de **Piero Garcia** — consultoria em processos, ISO 9001 e gestão.
Estático (Next.js, `output: export`), sem backend, publicado no GitHub Pages.

**No ar:** https://luisroquette-labs.github.io/piero-garcia-site/

---

## ⚠️ AVISO PARA AGENTES DE CÓDIGO (Cursor, Claude Code, Lovable, Codex, Copilot…)

> **IMPLEMENTAR O EXATO CÓDIGO AQUI CONTIDO.**
> **NÃO TENTE REPLICAR O VISUAL. APENAS REPLIQUE O CÓDIGO** e, em seguida,
> **CONECTE O QUE PRECISAR AS PONTAS SOLTAS** — como rotas, caminhos,
> redirecionamentos e botões.

O design, a tipografia, as animações e os componentes já estão prontos **neste
código**. Não recrie telas "parecidas" a partir de screenshots: copie os arquivos
como estão. Seu trabalho é **portar o código 1:1** para o destino e **ligar as
pontas soltas** (próxima seção).

---

## Pontas soltas que você DEVE conectar

1. **`basePath` / `assetPrefix`** — Em produção o site roda sob `/piero-garcia-site`.
   É lido de `NEXT_PUBLIC_BASE_PATH` em `next.config.mjs` e exposto em `app/base.ts`
   (`export const BASE`). Se o destino for **raiz de domínio** (ex.: `pierogarcia.com.br`),
   deixe `NEXT_PUBLIC_BASE_PATH` **vazio**. Se for subpasta, ajuste para a subpasta.
   - Links internos usam `<Link>` do `next/link` (prefixa o basePath sozinho). **Nunca**
     `<a href="/rota">` cru para rota interna — não recebe o basePath e dá 404 fora da raiz.
   - Assets em `public/` são referenciados com `` `${BASE}/arquivo.ext` `` — nunca
     `/arquivo.ext` cru.
2. **Rotas** (App Router, todas estáticas):
   `/` · `/sobre` · `/mentoria` · `/blog` · `/blog/[slug]`.
   Âncoras na home: `#filme`, `#metodo`, `#areas` etc. (scroll suave via Lenis, tratado em
   `components/SmoothScroll.tsx` — **não** troque por scroll nativo, o Lenis intercepta o hash).
3. **WhatsApp (CTA principal)** — Número `5548999115698`, montado em
   `app/content.ts` (`whatsappHref`, `mentoriaHref`). Todos os CTAs apontam para
   `wa.me` com texto pré-preenchido. Troque o número lá se mudar.
4. **E-mail / LinkedIn / Maps** — em `app/content.ts` (`person.email`,
   `person.linkedin`, `person.mapsUrl`, `person.dirUrl`).
5. **Vídeo do filme** — `components/FilmeSection.tsx` + os arquivos em `public/`
   (`filme-piero-16x9.mp4`, `filme-piero-9x16.mp4`, `filme-poster*.jpg`). Para trocar o
   filme, substitua os `.mp4`/posters mantendo os nomes. Autoplay mudo em loop, toca só
   quando entra na tela (IntersectionObserver), botão "Ativar som" para a narração.
6. **Deploy** — `.github/workflows/pages.yml` publica no GitHub Pages a cada push na
   `main` (Actions faz o build; **não** buildar localmente em máquina limitada). O build
   tem **cache do `.next` + retry 3×** porque o `next/font` às vezes estoura o download de
   fontes no runner (ver Armadilhas). Em Vercel/Netlify: conectar o repo, Next.js é
   detectado sozinho, e **remover/zerar** o `NEXT_PUBLIC_BASE_PATH` se for domínio raiz.

---

## O que tem de especial (e como funciona)

- **Uma seção = uma tela + snap magnético** (só nas páginas de painéis, ex.: a home).
  Cada `<section>` tem `min-height: 100svh` e é centralizada; a rolagem assenta no topo
  de cada seção via o addon **`lenis/snap`** (mandatory no desktop, proximity no mobile).
  O escopo é via CSS `body:has(.anchor-hero) .section { … }` — páginas de **conteúdo
  corrido** (bio/sobre, artigo) **não** entram na regra e scrollam normal. No mobile as
  seções alinham ao topo (`justify-content: flex-start`) para não cortar conteúdo alto.
- **Filme full-bleed** (`FilmeSection`): vídeo de ~25s de motion design (feito pra
  funcionar mudo — o texto carrega a mensagem), de borda a borda, sem moldura.
- **Hero estilo Anchor** (`AnchorHero`): vídeo de fundo full-screen em loop mudo + headline.
- **Rodapé "halftone wordmark"** (`SiteFooter`): o nome em pontilhado, canvas puro.

## Stack

- Next.js (App Router) · `output: "export"` (100% estático, sem servidor)
- Lenis (smooth-scroll) + `lenis/snap` (snap por seção) · Canvas puro no rodapé
- Tipografia: Manrope (display/corpo) · IBM Plex Mono (dados)
- Sem dependência de backend, banco ou API em runtime

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000  (basePath vazio em dev)
```

## Gerar build estático

```bash
NEXT_PUBLIC_BASE_PATH=/piero-garcia-site npm run build   # gera ./out
```

`out/` é o site inteiro em arquivos estáticos. Para domínio raiz, rode sem o env.

## Onde está cada coisa

| O quê | Arquivo |
|---|---|
| Todos os textos (hero, método, resultados, áreas, mentoria, FAQ, contato, nav) | `app/content.ts` |
| Posts do blog + capas | `app/posts.ts` · capas em `public/blog-*.webp` |
| Depoimentos (hoje **placeholder** "em breve") | `app/content.ts` → `testimonials` |
| Estilos globais + tokens de design + regra uma-seção-uma-tela | `app/globals.css` |
| Smooth-scroll + snap por seção + âncoras | `components/SmoothScroll.tsx` |
| Seção do filme (player full-bleed) | `components/FilmeSection.tsx` |
| Componentes (hero, timeline, cards, rodapé…) | `components/` |
| Imagens, vídeo do hero e o filme | `public/` |
| Helper de basePath | `app/base.ts` |

## Armadilhas conhecidas (do site-10x)

1. **Âncoras morrem com Lenis.** `<Link href="#x">` não rola sozinho — o Lenis intercepta.
   O handler em `SmoothScroll.tsx` resolve via `lenis.scrollTo`. Não remova.
2. **`<a href="/rota">` cru quebra fora da raiz** (sem basePath → 404). Use `<Link>` para
   rota interna; `<a>` só para externo (wa.me, mailto, LinkedIn, Maps).
3. **`next/font` dá timeout no build do Actions** (~intermitente): o workflow tem cache do
   `.next` + retry 3× por isso. Se um deploy "sumir", confira o `conclusion` real dos runs.

## Regras ao editar (verdade sempre)

- **Nunca** inventar depoimento, número ou case. Só o que for real e verificável.
  Os depoimentos estão como placeholder — substituir pelos reais quando houver.
- Imagem nova vai em `public/` (webp de preferência) e é referenciada com `` `${BASE}/arquivo.webp` ``.
- Não buildar `next build` em máquina com pouca RAM — deixe o Actions/Vercel buildar.

## Arquivos de apoio

- `MIGRATION-PROMPT.md` — prompt pronto para colar no seu agente de código ao migrar.
- `LEIA-ME.txt` — explicação para o Piero (não-técnica).
