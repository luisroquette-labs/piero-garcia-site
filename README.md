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
   - Links internos usam `<Link>` do `next/link` (prefixa o basePath sozinho).
   - Assets em `public/` são referenciados com `` `${BASE}/arquivo.ext` `` — nunca
     `/arquivo.ext` cru, senão quebra fora da raiz.
2. **Rotas** (App Router, todas estáticas):
   `/` · `/sobre` · `/mentoria` · `/blog` · `/blog/[slug]`.
   Âncoras na home: `#metodo` e `#areas` (scroll suave via Lenis, tratado em
   `components/SmoothScroll.tsx` — não troque por scroll nativo, o Lenis intercepta).
3. **WhatsApp (CTA principal)** — Número `5548999115698`, montado em
   `app/content.ts` (`whatsappHref`, `mentoriaHref`). Todos os CTAs apontam para
   `wa.me` com texto pré-preenchido. Troque o número lá se mudar.
4. **E-mail / LinkedIn / Maps** — em `app/content.ts` (`person.email`,
   `person.linkedin`, `person.mapsUrl`, `person.dirUrl`).
5. **Deploy** — `.github/workflows/pages.yml` publica no GitHub Pages a cada push
   na `main` (Actions faz o build; **não** buildar localmente em máquina limitada).
   Em Vercel/Netlify: conectar o repo, framework Next.js detectado sozinho, e
   **remover/zerar** o `NEXT_PUBLIC_BASE_PATH` se for domínio raiz.

---

## Stack

- Next.js (App Router) · `output: "export"` (100% estático, sem servidor)
- Lenis (smooth-scroll) · Canvas puro para o wordmark do rodapé
- Tipografia: Manrope (display) · Inter (corpo) · IBM Plex Mono (dados)
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
| Posts do blog (3) + capas | `app/posts.ts` · capas em `public/blog-*.webp` |
| Depoimentos (hoje **placeholder** "em breve") | `app/content.ts` → `testimonials` |
| Estilos globais + tokens de design | `app/globals.css` |
| Componentes (hero, timeline, cards, rodapé…) | `components/` |
| Imagens e vídeo do hero | `public/` |
| Helper de basePath | `app/base.ts` |

## Regras ao editar (verdade sempre)

- **Nunca** inventar depoimento, número ou case. Só o que for real e verificável.
  Os depoimentos estão como placeholder — substituir pelos reais quando houver.
- Imagem nova vai em `public/` (webp de preferência) e é referenciada com
  `` `${BASE}/arquivo.webp` ``.
- Não buildar `next build` em máquina com pouca RAM — deixe o Actions/Vercel buildar.

## Arquivos de apoio

- `MIGRATION-PROMPT.md` — prompt pronto para colar no seu agente de código ao migrar.
- `LEIA-ME.txt` — explicação para o Piero (não-técnica).
