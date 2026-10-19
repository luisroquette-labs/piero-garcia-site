// Conteúdo do site — Piero Garcia Consultoria.
// Verdade-âncora: tudo aqui vem do LinkedIn/site do Piero. Nada inventado.
// Lacuna vira default forte e honesto, nunca número sem lastro.

export const person = {
  brand: "Piero Garcia",
  name: "Piero Garcia",
  role: "Consultor em melhoria de processos e transformação digital",
  thesis:
    "Profissionalizo a operação de médias empresas para crescerem com controle — método primeiro, tecnologia depois.",
  location: "Criciúma, Santa Catarina",
  whatsapp: "5548999115698",
  whatsappLabel: "(48) 99911-5698",
  email: "contato@pierogarcia.com.br",
  linkedin: "https://www.linkedin.com/in/piero-garcia-66648434/",
  mapsUrl: "https://maps.google.com/?q=Crici%C3%BAma,+Santa+Catarina",
  mapsEmbed: "https://www.google.com/maps?q=Crici%C3%BAma,+Santa+Catarina,+Brasil&output=embed",
  dirUrl: "https://www.google.com/maps/dir/?api=1&destination=Crici%C3%BAma,+Santa+Catarina",
  diagnosticApp: "https://diagnostico-processo.lovable.app/",
  year: 2026,
};

export const whatsappHref = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(
  "Olá Piero! Vim pelo site e quero fazer um diagnóstico da minha operação."
)}`;

export const mentoriaHref = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(
  "Olá Piero! Tenho interesse na mentoria em grupo para donos e gestores."
)}`;

export const hero = {
  eyebrow: "Consultoria em processos · ISO 9001",
  titleLead: "Sua operação,",
  titleAccent: "estruturada para crescer.",
  lead: "Consultoria em gestão de processos para empresas de 10 a 1000 funcionários que precisam crescer sem perder o controle. Começamos por um diagnóstico que mostra exatamente onde a sua operação está travando.",
  ctaPrimary: "Fazer diagnóstico gratuito",
  ctaSecondary: "Ver o método",
};

// Números reais, todos do próprio site/LinkedIn do Piero.
export const stats = [
  { n: 25, suffix: "+", label: "Anos de experiência" },
  { n: 50, suffix: "+", label: "Projetos realizados" },
  { n: 35, suffix: "%", label: "Menos retrabalho" },
  { n: 28, suffix: "%", label: "Mais produtividade" },
];

// Seção Problema — os cenários reais do site atual dele.
export const problema = {
  eyebrow: "O sintoma",
  title: "Se você vive isso, a operação já escapou do controle.",
  items: [
    "Tudo passa por você ou precisa da sua aprovação.",
    "A equipe trabalha, mas os erros continuam.",
    "Cada novo cliente aumenta o caos.",
    "Os processos não são claros — ou simplesmente não existem.",
    "O retrabalho virou rotina.",
  ],
  conclusion: "Não é falta de esforço. É falta de estrutura.",
  insight: "Sem estrutura, toda empresa cresce… até travar.",
};

export const diferenciais = {
  eyebrow: "Por que comigo",
  title: "Método de quem já fez — não teoria de slide.",
  lead: "Desde 2002 com qualidade e melhoria contínua; desde 2010 com consultoria em processos, estratégia e ISO 9001. O que eu entrego é operação funcionando, não relatório para a gaveta.",
  items: [
    {
      k: "01",
      title: "Método, não teoria",
      body: "Diagnóstico prático dos gargalos reais, não um diagnóstico genérico. Você sai com prioridades claras e próximos passos — não com um PDF de 80 páginas.",
    },
    {
      k: "02",
      title: "Auditor líder ISO 9001",
      body: "Já conduzi dezenas de empresas à certificação e à recertificação ISO 9001, além de certificações de produto no INMetro. Sei exatamente o que a norma cobra na prática.",
    },
    {
      k: "03",
      title: "Implementação com a sua equipe",
      body: "Estruturo o processo e rodo junto com o time até funcionar. Consistência e padronização não vêm de um manual novo — vêm de gente executando do mesmo jeito.",
    },
    {
      k: "04",
      title: "Tecnologia depois do processo",
      body: "Digitalização, automação e IA entram quando o processo já está claro — para eliminar o repetitivo. Automatizar o caos só acelera o caos.",
    },
  ],
};

// Método em 3 etapas (ProcessFan / futuro MethodFlow).
export const processo = {
  eyebrow: "O método",
  title: "Como eu organizo a sua operação.",
  lead: "Não é teoria. É operação funcionando, em três movimentos.",
  steps: [
    {
      n: "1",
      title: "Diagnóstico",
      body: "Identifico onde a operação está travando. Análise prática dos gargalos reais — não suposição.",
    },
    {
      n: "2",
      title: "Estruturação",
      body: "Definimos como o trabalho deve acontecer. Processos claros, padronizados e executáveis (BPM/BPMN).",
    },
    {
      n: "3",
      title: "Implementação",
      body: "Rodamos com a sua equipe até funcionar. Garantia de execução, consistência e indicadores para acompanhar.",
    },
  ],
};

// Transformação digital — a oferta de tecnologia dele (depois do processo).
export const automacao = {
  eyebrow: "Transformação digital",
  title: "Tecnologia entra depois que o processo está claro.",
  lead: "Com a operação organizada, uno método e tecnologia para eliminar tarefas repetitivas e dar escala, previsibilidade e controle — sem depender de ninguém em específico.",
  pillars: [
    {
      tag: "Micro SaaS",
      title: "Sistemas sob medida",
      body: "Micro SaaS customizados que automatizam rotinas operacionais específicas da sua empresa, no lugar de planilhas soltas.",
      chips: ["Rotinas automatizadas", "Sob medida", "Integração"],
    },
    {
      tag: "IA generativa",
      title: "IA aplicada à decisão",
      body: "IA para análise de dados, otimização de processos e suporte à tomada de decisão — a partir do que a sua operação já gera.",
      chips: ["Análise de dados", "Suporte à decisão", "Otimização"],
    },
    {
      tag: "No-code",
      title: "Dashboards e assistentes",
      body: "Plataformas no-code/low-code para entregar sistemas internos e dashboards gerenciais rápido, além de assistentes para normas ISO e processos.",
      chips: ["Dashboards", "Assistentes ISO", "Entrega rápida"],
    },
  ],
};

// Áreas de atuação — carrossel (ScrollGallery). Capacidades reais, não cases com nome.
export const portfolio = {
  eyebrow: "Áreas de atuação",
  title: "Onde eu atuo na sua operação.",
  lead: "Da base da qualidade à transformação digital — sempre começando pelo processo.",
  items: [
    {
      slug: "diagnostico",
      img: "area-diagnostico.webp",
      name: "Diagnóstico de gargalos",
      kind: "Ponto de partida",
      tags: ["Prático", "Prioridades"],
      blurb: "Uma conversa direta que mostra onde a operação trava e o que organizar primeiro para recuperar controle.",
      live: "",
      metric: "Plano com prioridades",
      accent: "orange",
      caption: "Por onde você começa",
    },
    {
      slug: "iso-9001",
      img: "area-iso.webp",
      name: "ISO 9001 & SGQ",
      kind: "Qualidade",
      tags: ["Certificação", "Auditoria"],
      blurb: "Implantação e manutenção de Sistema de Gestão da Qualidade, preparação para certificação e recertificação.",
      live: "",
      metric: "Auditor líder ISO 9001",
      accent: "cyan",
      caption: "Certificação ISO 9001",
    },
    {
      slug: "bpm",
      img: "area-bpm.webp",
      name: "Mapeamento de processos",
      kind: "BPM / BPMN",
      tags: ["Padronização", "Fluxo"],
      blurb: "Mapeamento e padronização de processos com BPMN para reduzir retrabalho e desperdício operacional.",
      live: "",
      metric: "Até 30% menos retrabalho",
      accent: "orange",
      caption: "Processos claros e padronizados",
    },
    {
      slug: "planejamento",
      img: "area-bsc.webp",
      name: "Planejamento estratégico",
      kind: "BSC",
      tags: ["Estratégia", "Planos de ação"],
      blurb: "Planejamento estratégico com planos de ação integrados (BSC) — da visão à rotina de gestão.",
      live: "",
      metric: "Estratégia que vira rotina",
      accent: "cyan",
      caption: "Da visão à execução",
    },
    {
      slug: "indicadores",
      img: "area-indicadores.webp",
      name: "Indicadores",
      kind: "KPIs & OKRs",
      tags: ["Medição", "Gestão"],
      blurb: "Definição de indicadores de desempenho para enxergar a operação por dados e decidir com previsibilidade.",
      live: "",
      metric: "O que se mede, melhora",
      accent: "orange",
      caption: "Gestão por indicadores",
    },
    {
      slug: "5s",
      img: "area-5s.webp",
      name: "5S & cultura",
      kind: "Melhoria contínua",
      tags: ["5S", "Equipes"],
      blurb: "Programas de 5S, formação de auditores internos e cultura de melhoria contínua com a sua equipe.",
      live: "",
      metric: "Cultura que sustenta",
      accent: "cyan",
      caption: "Melhoria contínua",
    },
  ],
  mini: [
    { n: 25, suffix: "+", label: "Anos" },
    { n: 50, suffix: "+", label: "Projetos" },
    { n: 22, suffix: "%", label: "Menos tempo operacional" },
  ],
};

export const manifesto = {
  lead: "Empresas não travam por falta de esforço.",
  accent: "Travam por falta de estrutura.",
};

export const sobre = {
  eyebrow: "Quem é Piero",
  title: "Consultor em processos, qualidade e transformação digital.",
  mission:
    "Profissionalizo a operação de médias empresas para que cresçam com previsibilidade, consistência e menos dependência do dono.",
  body: "Há mais de 20 anos ajudo empresas de médio e grande porte a estruturar processos, implantar sistemas de gestão da qualidade e profissionalizar a gestão. Desde 2002 com ISO 9001, 5S e melhoria contínua; desde 2010 com consultoria em planejamento estratégico (BSC), mapeamento de processos (BPM/BPMN) e SGQ. Hoje uno método e tecnologia para eliminar o repetitivo.",
  bullets: [
    "Auditor líder ISO 9001 — dezenas de empresas certificadas e recertificadas.",
    "Mapeamento e padronização de processos com BPMN, reduzindo retrabalho.",
    "Planejamento estratégico (BSC), indicadores (KPIs/OKRs) e formação de auditores internos.",
  ],
  cta: "Fazer diagnóstico gratuito",
};

// Mentoria — oferta secundária (teaser + página /mentoria).
export const mentoria = {
  eyebrow: "Mentoria em grupo",
  title: "Para donos e gestores que querem estruturar a própria empresa.",
  lead: "Encontros quinzenais ao longo de 4 meses para estruturar processos, indicadores e rotina de gestão na sua própria operação — com método e aplicação prática.",
  forWho: "Donos e gestores de médias empresas que querem profissionalizar a gestão sem parar a operação.",
  format: [
    { t: "Formato", v: "Encontros quinzenais em grupo" },
    { t: "Duração", v: "4 meses" },
    { t: "Base", v: "Aplicação prática na sua empresa" },
  ],
  outcomes: [
    "Processos-chave estruturados e padronizados.",
    "Indicadores (KPIs/OKRs) para enxergar a operação por dados.",
    "Rotina de gestão que reduz a dependência do dono.",
  ],
  cta: "Quero a mentoria",
};

export const contact = {
  eyebrow: "Contato",
  title: "Vamos olhar a sua operação.",
  lead: "Fale direto comigo pelo WhatsApp e já saia da conversa com os próximos passos. O diagnóstico é gratuito e não gera compromisso.",
};

export const faq = {
  eyebrow: "Dúvidas",
  title: "Perguntas frequentes",
  items: [
    {
      q: "Quanto custa uma consultoria?",
      a: "O valor varia conforme o escopo e a duração do projeto. O diagnóstico gratuito define o que a empresa realmente precisa antes de qualquer proposta — e a conversa não gera nenhum compromisso.",
    },
    {
      q: "Quanto tempo leva um projeto?",
      a: "Depende do escopo e do ponto de partida da sua operação. No diagnóstico combinamos prioridades e um cronograma realista; prefiro entregar em etapas que funcionam a prometer um prazo que não se sustenta.",
    },
    {
      q: "Minha empresa é pequena. Faz sentido contratar consultoria?",
      a: "Faz. Estruturar processos cedo evita que o crescimento vire caos depois. O diagnóstico já indica o que priorizar no seu momento, sem estrutura grande demais para o seu tamanho.",
    },
    {
      q: "Como funciona a consultoria na prática?",
      a: "Em três movimentos: diagnóstico dos gargalos reais, estruturação de processos claros e implementação junto com a sua equipe até funcionar. Não é teoria — é operação rodando.",
    },
    {
      q: "Você atende fora de Santa Catarina?",
      a: "Sim. A base é Criciúma/SC, mas o atendimento é nacional, de forma híbrida (presencial quando necessário e remoto no restante).",
    },
    {
      q: "Qual a diferença entre BPM e consultoria tradicional?",
      a: "BPM (gestão de processos) olha para como o trabalho realmente acontece e padroniza o fluxo de ponta a ponta. Em vez de um diagnóstico genérico, você ganha processos mapeados, executáveis e medidos por indicadores.",
    },
  ],
};

// Prova social — PLACEHOLDER (mock). Piero substitui por depoimentos reais depois.
// Nada aqui é um depoimento fabricado apresentado como real.
export const testimonials = {
  eyebrow: "Prova social",
  title: "O que dizem quem já estruturou a operação.",
  note: "Depoimentos reais entram aqui em breve.",
  items: [
    { quote: "Espaço reservado para um depoimento real: um resultado concreto, curto e direto.", name: "Nome do cliente", role: "Cargo · Empresa" },
    { quote: "Outro depoimento real aparecerá aqui — situação antes, o que mudou, resultado.", name: "Nome do cliente", role: "Cargo · Empresa" },
    { quote: "Mais um relato real de dono ou gestor atendido, em uma ou duas frases.", name: "Nome do cliente", role: "Cargo · Empresa" },
  ],
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Mentoria", href: "/mentoria" },
  { label: "Áreas", href: "/#areas" },
  { label: "Blog", href: "/blog" },
];
