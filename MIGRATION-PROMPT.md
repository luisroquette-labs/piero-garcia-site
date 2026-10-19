# Prompt de migração — Piero Garcia

Cole este arquivo para o seu agente de código (Cursor, Claude Code, Lovable/ADL) se
quiser evoluir ou migrar configurações do site atual para este novo.

## Stack
- Next.js (App Router) com `output: "export"` (site 100% estático).
- Deploy: GitHub Pages via Actions (`.github/workflows/pages.yml`), build no Actions.
- `basePath` = `/piero-garcia-site` em produção (via env `NEXT_PUBLIC_BASE_PATH`); vazio em dev.
- Sem backend. Formulários/CTAs abrem o WhatsApp (`wa.me/5548999115698`).

## Onde está cada coisa
- Conteúdo textual: `app/content.ts`
- Posts do blog: `app/posts.ts` (capas em `public/blog-*.webp`)
- Depoimentos (placeholder): `app/content.ts` → `testimonials`
- Estilos globais: `app/globals.css`
- Componentes: `components/`
- Imagens/assets: `public/`

## Mapa de rotas: site antigo (Lovable) → este site
- `/servicos`, `/cases`, `/solucoes-tecnologicas`, `/eventos`, `/contato` do site atual
  → cobertos aqui pela **home** (seções: áreas, método, resultados, transformação
  digital) + **/sobre** + **/mentoria** + rodapé.
- `/blog` + `/blog/[slug]` → mantidos (3 posts; adicione em `app/posts.ts`).
- `/auth` ("Meu Painel", portal de cliente no Lovable) → **não** foi portado: é um
  app à parte. Se quiser manter o portal, continue usando o Lovable para ele e
  aponte um link daqui para lá.

## Regras ao editar
- Nunca inventar depoimento, número ou case — só o que for real e verificável.
- Toda imagem nova em `public/` (webp de preferência) e referenciada com o helper
  de base path: `` `${BASE}/arquivo.webp` `` (import `BASE` de `app/base.ts`).
- Não rodar `next build` localmente se o ambiente for limitado; deixe o Actions buildar.
