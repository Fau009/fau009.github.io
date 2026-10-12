/*
  Lista de projetos da Central.
  Para incluir um projeto novo, copie um bloco abaixo e preencha:
    nome, descricao, categoria (uma das CATEGORIAS), criadoEm (AAAA-MM-DD),
    privado (true ou false), site (link do site no ar, ou null), repo (link do repositório, ou null),
    icone (desenho em SVG, área de 48x48, traço na cor do texto).

  Regras de links (o site aplica mesmo que algum link seja preenchido por engano):
  - público (privado: false): mostra o site e o repositório que estiverem preenchidos.
    Para não divulgar o site de um projeto público, use site: null.
  - privado (privado: true): nunca mostra o repositório; mostra o site quando houver.
  - sigiloso (sigiloso: true): não mostra nenhum link, nem site nem repositório.
    Para projetos mais sensíveis (ex.: que lidam com APIs e integrações).
*/
window.CATEGORIAS = [
  { id: "utilidade",      nome: "Utilidade" },
  { id: "ferramenta",     nome: "Ferramenta" },
  { id: "entretenimento", nome: "Entretenimento" },
  { id: "informacao",     nome: "Informação" },
  { id: "esporte",        nome: "Esporte" },
  { id: "social",         nome: "Social" },
  { id: "gestao",         nome: "Gestão" },
];

window.PROJETOS = [
  {
    nome: "Rouba Pino",
    descricao: "Jogo de mesa para 2 a 4 jogadores no mesmo aparelho. Role o dado, roube pinos dos outros e resgate os seus. Quem ficar sem pinos sai.",
    categoria: "entretenimento",
    criadoEm: "2026-10-12",
    privado: false,
    site: "https://fau009.github.io/rouba-pino/",
    repo: "https://github.com/Fau009/rouba-pino",
    icone: '<rect x="5" y="17" width="14" height="19" rx="4"/><rect x="29" y="17" width="14" height="19" rx="4"/><path d="M12 12c4-6 18-6 24 0"/><path d="M31.5 11.5 36 12l.5-4.5"/>'
  },
  {
    nome: "Dado Online",
    descricao: "Dado 3D para rolar 1 ou 2 dados direto no navegador, com soma e histórico das últimas jogadas.",
    categoria: "utilidade",
    criadoEm: "2026-10-12",
    privado: false,
    site: "https://fau009.github.io/dado-online/",
    repo: "https://github.com/Fau009/dado-online",
    icone: '<rect x="8" y="8" width="32" height="32" rx="7"/><circle cx="17" cy="17" r="2.6" class="fill"/><circle cx="24" cy="24" r="2.6" class="fill"/><circle cx="31" cy="31" r="2.6" class="fill"/>'
  },
  {
    nome: "Clio",
    descricao: "Catálogo de livros e rede de leitura: biblioteca pessoal ou compartilhada, status de leitura, avaliações, favoritos e perfis com seguidores.",
    categoria: "social",
    criadoEm: "2026-10-06",
    privado: true,
    site: "https://clio.coliseunerd.com.br",
    repo: null,
    icone: '<path d="M24 14c-6-4-13-4-18-2v24c5-2 12-2 18 2 6-4 13-4 18-2V12c-5-2-12-2-18 2Z"/><path d="M24 14v24"/>'
  },
  {
    nome: "Radar Eleitoral 2026",
    descricao: "Site informativo e não partidário sobre as Eleições 2026: pesquisas por instituto, candidatos, quem ocupa cada cargo hoje e onde votar.",
    categoria: "informacao",
    criadoEm: "2026-10-01",
    privado: false,
    site: "https://fau009.github.io/radar-eleitoral-2026/",
    repo: "https://github.com/Fau009/radar-eleitoral-2026",
    icone: '<path d="M17 24V8h14v16"/><path d="m20.5 16 2.8 2.8 4.7-5.6"/><rect x="7" y="24" width="34" height="16" rx="3"/><path d="M14 24h20"/>'
  },
  {
    nome: "Simulador de Futebol",
    descricao: "Tabelas, jogos e artilharia de 20 campeonatos em 6 países, com simulador de placares e previsão por Elo e gols esperados.",
    categoria: "esporte",
    criadoEm: "2026-09-30",
    privado: false,
    site: "https://fau009.github.io/simulador-futebol/",
    repo: "https://github.com/Fau009/simulador-futebol",
    icone: '<circle cx="24" cy="24" r="16"/><path d="m24 18 5.7 4.1-2.2 6.8h-7l-2.2-6.8Z"/><path d="M24 18V8M29.7 22.1l9.5-3M27.5 28.9l5.9 8.1M20.5 28.9l-5.9 8.1M18.3 22.1l-9.5-3"/>'
  },
  {
    nome: "Rotas Brasil",
    descricao: "Simulador de itinerários de ônibus, metrô e trem com dados abertos: 6 estados, cerca de 80 cidades, mapa e paradas por linha.",
    categoria: "ferramenta",
    criadoEm: "2026-09-30",
    privado: false,
    site: "https://fau009.github.io/rotas-brasil/",
    repo: "https://github.com/Fau009/rotas-brasil",
    icone: '<circle cx="10" cy="36" r="3.5"/><path d="M14 36h14a6 6 0 0 0 0-12h-8a6 6 0 0 1 0-12h10"/><path d="M38 6.5a5.5 5.5 0 0 0-5.5 5.5c0 4 5.5 9 5.5 9s5.5-5 5.5-9A5.5 5.5 0 0 0 38 6.5Z"/>'
  },
  {
    nome: "Ping Pong Classic",
    descricao: "Ping pong retrô jogável no navegador, contra a CPU com dificuldade ajustável ou com 2 jogadores no mesmo teclado.",
    categoria: "entretenimento",
    criadoEm: "2026-09-30",
    privado: false,
    site: "https://fau009.github.io/ping-pong-classic/",
    repo: "https://github.com/Fau009/ping-pong-classic",
    icone: '<circle cx="19" cy="19" r="12"/><path d="m27.5 27.5 10 10" stroke-width="5"/><circle cx="38" cy="12" r="3.5" class="fill"/>'
  },
  {
    nome: "Árvore Genealógica",
    descricao: "Árvore genealógica interativa e colaborativa: monte a história da família num quadro infinito, conecte pessoas arrastando e veja as edições de todos em tempo real.",
    categoria: "social",
    criadoEm: "2026-08-12",
    privado: false,
    site: null,
    repo: "https://github.com/Fau009/arvore-genealogica",
    icone: '<circle cx="24" cy="10" r="5"/><circle cx="11" cy="37" r="5"/><circle cx="37" cy="37" r="5"/><path d="M24 15v7M11 22h26M11 22v10M37 22v10"/>'
  },
  {
    nome: "Fortuny One",
    descricao: "Plataforma de controle financeiro para a família, que começou como Finanças do Lar: contas, cartões e faturas, contas recorrentes, empréstimos e financiamentos em um só lugar.",
    categoria: "utilidade",
    criadoEm: "2026-05-07",
    privado: true,
    site: "https://fortunyone.com.br",
    repo: null,
    icone: '<rect x="6" y="14" width="36" height="25" rx="5"/><path d="M30 22h12v10H30a5 5 0 0 1 0-10Z"/><circle cx="31" cy="27" r="1.7" class="fill"/><path d="m12 14 16-7 4 7"/>'
  },
  {
    nome: "Cérebro",
    descricao: "Portal de gestão de APIs e integrações: reúne organizações, autenticações e rotas num só lugar, acompanha o uso de cada integração e permite montar automações entre elas.",
    categoria: "gestao",
    criadoEm: "2026-07-24",
    privado: true,
    sigiloso: true,
    site: null,
    repo: null,
    icone: '<circle cx="24" cy="24" r="5.5"/><circle cx="9" cy="10" r="3.5"/><circle cx="39" cy="10" r="3.5"/><circle cx="9" cy="38" r="3.5"/><circle cx="39" cy="38" r="3.5"/><path d="m11.6 12.6 8.2 7.4M36.4 12.6l-8.2 7.4M11.6 35.4l8.2-7.4M36.4 35.4l-8.2-7.4"/>'
  },
  {
    nome: "QualityHub",
    descricao: "Plataforma de gestão de qualidade e desenvolvimento de equipes: competências, trilhas de treinamento, provas, certificações, planejamento e organograma.",
    categoria: "gestao",
    criadoEm: "2026-06-09",
    privado: true,
    sigiloso: true,
    site: null,
    repo: null,
    icone: '<path d="M24 6 39 12v11c0 9.5-6.4 16.4-15 19-8.6-2.6-15-9.5-15-19V12Z"/><path d="m17 24 5 5 9-10"/>'
  },
];
