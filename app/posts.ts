export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "ul"; v: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readMin: number;
  cover: string; // arquivo em /public (webp)
  body: Block[];
};

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const posts: Post[] = [
  {
    slug: "empresa-perdeu-controle-operacao",
    title: "Como saber se a sua empresa já perdeu o controle da operação",
    category: "Gestão",
    excerpt:
      "Quando tudo passa pelo dono e o retrabalho vira rotina, o problema raramente é a equipe. É falta de estrutura — e dá para enxergar cedo.",
    date: "2026-10-18",
    readMin: 5,
    cover: "blog-controle.webp",
    body: [
      { t: "p", v: "Toda empresa que cresce passa por um ponto em que a operação começa a escapar das mãos de quem a toca. O faturamento sobe, a equipe aumenta, os clientes chegam — e, no meio disso, o controle vai embora sem avisar. O sinal mais comum não é falta de trabalho: é a sensação de que, sem você por perto, nada anda do jeito certo." },
      { t: "h2", v: "Os cinco sinais de que a operação travou" },
      { t: "ul", v: [
        "Tudo passa por você ou precisa da sua aprovação para andar.",
        "A equipe trabalha duro, mas os mesmos erros se repetem.",
        "Cada novo cliente, em vez de alívio, aumenta o caos.",
        "Os processos não são claros — ou simplesmente não existem no papel.",
        "O retrabalho deixou de ser exceção e virou parte da rotina.",
      ] },
      { t: "p", v: "Se mais de dois desses pontos soam familiares, a empresa não está com um problema de esforço. Está com um problema de estrutura." },
      { t: "h2", v: "Por que a culpa quase nunca é da equipe" },
      { t: "p", v: "É tentador olhar para os erros e concluir que o time precisa 'se dedicar mais'. Mas quando cada pessoa executa a mesma tarefa de um jeito diferente, o resultado inconsistente é consequência natural — não falta de empenho. O que falta é um acordo claro sobre como o trabalho deve acontecer. Sem isso, a operação depende da memória e da boa vontade de cada um, e toda decisão volta para o dono." },
      { t: "h2", v: "O primeiro passo é enxergar, não consertar" },
      { t: "p", v: "Antes de mudar qualquer processo, é preciso mapear onde a operação realmente trava. Um diagnóstico honesto mostra os gargalos reais e define o que priorizar — para recuperar controle sem parar a empresa. Estruturar cedo é o que separa quem cresce com previsibilidade de quem cresce até travar." },
    ],
  },
  {
    slug: "iso-9001-na-pratica-alem-do-certificado",
    title: "ISO 9001 na prática: além do certificado na parede",
    category: "Qualidade",
    excerpt:
      "A ISO 9001 não é um troféu — é um sistema de gestão. Quando ela vira só papel para auditoria, a empresa paga o custo e não colhe o resultado.",
    date: "2026-10-12",
    readMin: 6,
    cover: "blog-iso.webp",
    body: [
      { t: "p", v: "Muita empresa busca a ISO 9001 por um motivo externo: um cliente exige, um edital pede, o concorrente tem. A certificação chega, o certificado vai para a parede — e, meses depois, o sistema de gestão da qualidade existe só no dia da auditoria. O custo foi pago, mas o retorno não apareceu." },
      { t: "h2", v: "O que a norma realmente cobra" },
      { t: "p", v: "No fundo, a ISO 9001 pede algo simples de enunciar e difícil de manter: que a empresa saiba como faz o que faz, faça do jeito combinado e melhore a partir do que mede. Não é burocracia pela burocracia — é padronização a serviço de consistência. O problema aparece quando os procedimentos são escritos para a auditoria em vez de para quem executa." },
      { t: "h3", v: "Sinais de uma ISO que virou papel" },
      { t: "ul", v: [
        "Os procedimentos descrevem um processo que ninguém segue na prática.",
        "Os indicadores existem, mas ninguém toma decisão a partir deles.",
        "As não conformidades são tratadas na véspera da auditoria.",
        "A melhoria contínua virou uma reunião anual obrigatória.",
      ] },
      { t: "h2", v: "Como fazer a norma trabalhar a favor" },
      { t: "p", v: "Uma ISO 9001 viva começa pelo processo real, não pelo documento. Primeiro se mapeia como o trabalho acontece de verdade; depois se padroniza o que faz sentido; por último se escreve o procedimento — que passa a ser um retrato fiel da operação, não uma ficção. Com indicadores ligados a decisões de rotina, a norma deixa de ser custo e vira ferramenta de gestão." },
      { t: "p", v: "Conduzir dezenas de empresas à certificação e à recertificação ensina uma coisa: o certificado é a consequência, nunca o objetivo. O objetivo é uma operação que funciona com previsibilidade — e a norma, bem usada, é só o esqueleto que sustenta isso." },
    ],
  },
  {
    slug: "ia-em-processos-automatizar-depois-de-organizar",
    title: "IA em processos: por que automatizar só depois de organizar",
    category: "Transformação digital",
    excerpt:
      "Automatizar um processo confuso não resolve a confusão — acelera ela. A tecnologia multiplica o que já existe; por isso o processo claro vem primeiro.",
    date: "2026-10-05",
    readMin: 5,
    cover: "blog-ia.webp",
    body: [
      { t: "p", v: "A pressão para 'colocar IA' na empresa é real e, muitas vezes, saudável. Mas existe uma ordem que não dá para inverter: tecnologia entra depois que o processo está claro. Automatizar uma rotina bagunçada não elimina a bagunça — só faz ela acontecer mais rápido e em escala maior." },
      { t: "h2", v: "A tecnologia multiplica, não organiza" },
      { t: "p", v: "Um sistema, uma automação ou um modelo de IA fazem exatamente o que a lógica mandar — inclusive repetir um erro de forma impecável milhares de vezes. Quando o processo por trás é inconsistente, a ferramenta apenas amplia essa inconsistência. É por isso que tantos projetos de digitalização decepcionam: investiu-se na camada de cima sem arrumar a fundação." },
      { t: "h2", v: "A sequência que funciona" },
      { t: "ul", v: [
        "Mapear o processo real e eliminar o que é retrabalho ou desperdício.",
        "Padronizar o fluxo para que ele aconteça do mesmo jeito, por qualquer pessoa.",
        "Só então automatizar o que é repetitivo e previsível.",
        "Usar IA para análise de dados e apoio à decisão sobre uma base já confiável.",
      ] },
      { t: "p", v: "Com essa ordem, a tecnologia entrega o que promete: menos tarefa manual, mais previsibilidade e tempo livre para o que exige julgamento humano. Micro SaaS sob medida, dashboards gerenciais e assistentes para normas e processos passam a potencializar uma operação que já funciona — em vez de maquiar uma que não funciona." },
      { t: "p", v: "Organizar primeiro não é resistência à tecnologia. É o que garante que o investimento em tecnologia dê retorno." },
    ],
  },
];
