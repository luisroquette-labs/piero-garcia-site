# Site do Victor Aragão

Site pessoal estático (Next.js, exportação estática). Roda em qualquer hospedagem.

## Rodar localmente

```bash
npm install
npm run dev      # abre em http://localhost:3000
```

## Gerar o site para publicar

```bash
npm run build    # gera a pasta ./out com o site pronto
```

A pasta `out/` é o site inteiro em arquivos estáticos. É só subir ela.

## Onde hospedar (grátis)

- **Vercel** ou **Netlify**: conecte o repositório e pronto (detectam Next.js sozinhos).
- **GitHub Pages / Cloudflare Pages**: suba o conteúdo de `out/`.

## Trocar a foto

1. Coloque uma foto quadrada em boa resolução em `public/victor.jpg`.
2. Em `app/page.tsx`, descomente a linha `<img src="/victor.jpg" ... />` dentro de `.plate` e apague/esconda o `<span className="monogram">`.

## Editar textos

Todo o conteúdo fica em `app/content.ts` — nome, bio, serviços, publicações e links. É só editar o texto.

---

O **hero** tem um fundo vivo (canvas): uma rede de colônias/biofilme que reage ao cursor (`components/Biofilm.tsx`). Respeita `prefers-reduced-motion` (fica estático) e é leve (sem dependências). Algoritmo adaptado de "Constellation Field" (MengTo/threeui, MIT), recolorido para a identidade.

A seção de **serviços** (consultório / palestras / consultoria) foi escrita a partir do perfil como um ponto de partida forte. Ajuste os textos e os canais de contato em `app/content.ts` para refletir exatamente o que o Victor oferece. As credenciais e publicações são reais (fontes no `profile.json`).
