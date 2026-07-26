export const STACK = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MySQL', 'Docker'];

export const CV_LINK = 'https://drive.google.com/file/d/1amQ2ouDutDdE0J6qeBFKk9v1wBe1Aoha/view?usp=drive_link';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/brugimenez/';
export const GITHUB_LINK = 'https://github.com/brunagimenez';
export const EMAIL = 'brunagimenez97@gmail.com';
export const PHONE = { display: '+55 11 92184-1612', href: 'tel:+5511921841612' };

export const T = {
  pt: {
    skip: 'Pular para o conteúdo',
    nav: {
      about: 'Sobre', journey: 'Trajetória', skills: 'Skills', projects: 'Projetos', blog: 'Blog', contact: 'Contato', menu: 'Menu', close: 'Fechar',
    },
    theme: { toDark: 'Ativar tema escuro', toLight: 'Ativar tema claro' },
    hero: {
      eyebrow: 'Ex-Designer → Full Stack Developer',
      title: 'Bruna Gimenez',
      subtitle: 'Desenvolvedora Full Stack',
      pitch: 'Construo interfaces e APIs com a mesma atenção: código limpo por trás, experiência cuidadosa na frente. Depois de anos pensando em UX como designer, hoje transformo esse olhar em produtos web completos — do banco de dados ao pixel.',
      ctaPrimary: 'Ver projetos',
      ctaSecondary: 'Currículo',
      ctaContact: 'Contato',
      photoBadge: 'Ex-Designer → Dev',
    },
    about: {
      heading: 'Sobre mim',
      p1: 'Minha trajetória em tecnologia começou no Design. Antes de escrever a primeira linha de código, eu já resolvia problemas de comunicação visual e conversava diretamente com clientes para traduzir necessidades em soluções — uma habilidade que aplico em cada decisão técnica que tomo hoje.',
      p2: 'Em 2023 entrei na Trybe, um bootcamp intensivo de mais de 130 horas semanais, onde me formei Full Stack: JavaScript e TypeScript no front e no back, React, Node.js, bancos relacionais, testes automatizados e Docker. Desde então venho construindo projetos reais, sempre com o mesmo cuidado que aprendi no Design — pensar primeiro em quem vai usar.',
    },
    journey: { heading: 'Trajetória', subheading: 'Do Design ao código, em uma linha do tempo.' },
    skills: { heading: 'Skills', subheading: 'Ferramentas e práticas que uso no dia a dia.' },
    projects: {
      heading: 'Projetos', subheading: 'Uma seleção do que venho construindo, do front ao back.', demo: 'Ver projeto', code: 'Código',
    },
    blog: {
      heading: 'Blog', subheading: 'Aprendizados da transição Design → Desenvolvimento e bastidores dos projetos.', draft: 'Rascunho', readLabel: 'leitura', followNote: 'Nada publicado por aqui ainda, mas você pode acompanhar minhas atualizações no',
    },
    contact: {
      heading: 'Vamos conversar?', pitch: 'Aberta a oportunidades como Desenvolvedora Full Stack.', location: 'São Paulo, SP', emailCta: 'Enviar email',
    },
    footer: { rights: 'Todos os direitos reservados.' },
    facts: [
      { n: '130h+', l: 'de formação intensiva Full Stack' },
      { n: '7', l: 'projetos entregues do front ao back' },
      { n: '2', l: 'carreiras: Design e Desenvolvimento' },
    ],
  },
  en: {
    skip: 'Skip to content',
    nav: {
      about: 'About', journey: 'Journey', skills: 'Skills', projects: 'Projects', blog: 'Blog', contact: 'Contact', menu: 'Menu', close: 'Close',
    },
    theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
    hero: {
      eyebrow: 'Ex-Designer → Full Stack Developer',
      title: 'Bruna Gimenez',
      subtitle: 'Full Stack Developer',
      pitch: 'I build interfaces and APIs with the same care: clean code underneath, a thoughtful experience on top. After years thinking in UX as a designer, I now channel that eye into complete web products — from the database to the pixel.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Resume',
      ctaContact: 'Contact',
      photoBadge: 'Ex-Designer → Dev',
    },
    about: {
      heading: 'About me',
      p1: "My path into tech started in Design. Before writing my first line of code, I was already solving visual-communication problems and talking directly with clients to translate needs into solutions — a skill I now apply to every technical decision I make.",
      p2: "In 2023 I joined Trybe, an intensive 130+ hour/week bootcamp, where I trained as a Full Stack developer: JavaScript and TypeScript on front and back, React, Node.js, relational databases, automated testing and Docker. Since then I've been building real projects with the same care I learned in Design — think about the user first.",
    },
    journey: { heading: 'Journey', subheading: 'From Design to code, on a timeline.' },
    skills: { heading: 'Skills', subheading: 'Tools and practices I use day to day.' },
    projects: {
      heading: 'Projects', subheading: "A selection of what I've been building, front to back.", demo: 'View project', code: 'Code',
    },
    blog: {
      heading: 'Blog', subheading: 'Notes on my Design → Development transition and behind-the-scenes of my projects.', draft: 'Draft', readLabel: 'read', followNote: "Nothing published here yet, but you can follow my updates on",
    },
    contact: {
      heading: "Let's talk", pitch: 'Open to Full Stack Developer opportunities.', location: 'São Paulo, Brazil', emailCta: 'Send an email',
    },
    footer: { rights: 'All rights reserved.' },
    facts: [
      { n: '130h+', l: 'of intensive Full Stack training' },
      { n: '7', l: 'projects shipped front to back' },
      { n: '2', l: 'careers: Design and Development' },
    ],
  },
};

export const SKILL_GROUPS = [
  {
    title: { pt: 'Frontend', en: 'Frontend' },
    skills: {
      pt: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Context API & Hooks', 'HTML5', 'CSS3 / SASS'],
      en: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Context API & Hooks', 'HTML5', 'CSS3 / SASS'],
    },
  },
  {
    title: { pt: 'Backend', en: 'Backend' },
    skills: {
      pt: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Python', 'Django', 'REST APIs'],
      en: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Python', 'Django', 'REST APIs'],
    },
  },
  {
    title: { pt: 'Qualidade & Ferramentas', en: 'Quality & Tooling' },
    skills: {
      pt: ['TDD', 'React Testing Library', 'Jest', 'ESLint / Stylelint', 'Git & GitHub', 'Docker'],
      en: ['TDD', 'React Testing Library', 'Jest', 'ESLint / Stylelint', 'Git & GitHub', 'Docker'],
    },
  },
  {
    title: { pt: 'Bagagem de Design', en: 'Design background' },
    skills: {
      pt: ['UX/UI Fundamentals', 'Figma', 'Design Systems', 'Comunicação com cliente'],
      en: ['UX/UI Fundamentals', 'Figma', 'Design Systems', 'Client communication'],
    },
  },
];

export const TIMELINE = [
  {
    year: { pt: 'Antes de 2023', en: 'Before 2023' },
    title: { pt: 'Design', en: 'Design' },
    desc: {
      pt: 'Anos atuando com comunicação visual e relacionamento direto com clientes — a base da minha empatia com quem usa o que eu construo.',
      en: 'Years working in visual communication and direct client relationships — the foundation of my empathy for whoever uses what I build.',
    },
  },
  {
    year: { pt: '2023', en: '2023' },
    title: { pt: 'Formação Full Stack — Trybe', en: 'Full Stack training — Trybe' },
    desc: {
      pt: 'Bootcamp intensivo de 130h+ semanais: lógica de programação, JavaScript, TypeScript, React, Node.js/Express, bancos relacionais (MySQL/Sequelize), testes automatizados e Docker.',
      en: 'Intensive 130+ hour/week bootcamp: programming logic, JavaScript, TypeScript, React, Node.js/Express, relational databases (MySQL/Sequelize), automated testing and Docker.',
    },
  },
  {
    year: { pt: '2023–2024', en: '2023–2024' },
    title: { pt: 'Projetos front-to-back', en: 'Front-to-back projects' },
    desc: {
      pt: 'Construção de aplicações completas — de players de música a e-commerces e sistemas esportivos dockerizados — aplicando TDD, Redux e arquitetura de API REST.',
      en: 'Building complete applications — from music players to e-commerce and containerized sports systems — applying TDD, Redux and REST API architecture.',
    },
  },
  {
    year: { pt: 'Em paralelo', en: 'In parallel' },
    title: { pt: 'Freelance & automação', en: 'Freelance & automation' },
    desc: {
      pt: 'Desenvolvimento de soluções sob demanda para pequenos negócios: back-end em Node/Express com MySQL na AWS, ambientes dockerizados e integrações via API do WhatsApp.',
      en: 'On-demand solutions for small businesses: Node/Express back-ends with MySQL on AWS, containerized environments and WhatsApp API integrations.',
    },
  },
  {
    id: 'google-startups',
    year: { pt: 'Março de 2024', en: 'March 2024' },
    title: { pt: 'Google for Startups × Trybe', en: 'Google for Startups × Trybe' },
    desc: {
      pt: 'Participei de um evento em parceria entre o Google for Startups e a Trybe. Ao lado de três colegas, criamos em equipe o Atentos, um app de segurança que alerta sobre áreas de risco com transparência sobre os motivos — e vencemos o desafio.',
      en: 'I took part in an event held in partnership between Google for Startups and Trybe. Together with three teammates, we built Atentos, a safety app that alerts users about risk areas with transparency about why — and won the challenge.',
    },
  },
  {
    year: { pt: '2024', en: '2024' },
    title: { pt: 'Dev Jr na Fitinsur', en: 'Dev Jr at Fitinsur' },
    desc: {
      pt: 'A visibilidade do desafio me rendeu um convite para entrevista na Fitinsur como Desenvolvedora Jr. Passei no processo e sigo na empresa até hoje.',
      en: "The visibility from the challenge led to an interview invitation at Fitinsur as a Junior Developer. I got the job and I'm still there today.",
    },
  },
  {
    year: { pt: '2025', en: '2025' },
    title: { pt: 'Premiação por iniciativa', en: 'Award for initiative' },
    desc: {
      pt: 'Recebi um reconhecimento da Fitinsur por tomar a iniciativa de resolver um desafio da empresa — incluindo uma viagem de prêmio. Um retrato de uma cultura que valoriza proatividade e soluções criativas.',
      en: 'I was recognized by Fitinsur for taking the initiative to solve a company challenge — including a trip as part of the prize. A reflection of a culture that values proactivity and creative solutions.',
    },
  },
  {
    year: { pt: 'Hoje', en: 'Today' },
    title: { pt: 'Em constante evolução', en: 'Always growing' },
    desc: {
      pt: 'Sigo como Desenvolvedora na Fitinsur, aplicando a mesma combinação de olhar de design e solidez técnica que trago desde o início — sempre aberta a novos desafios.',
      en: "I'm still growing as a Developer at Fitinsur, applying the same mix of design sensibility and technical solidity I've brought from the start — always open to new challenges.",
    },
  },
];

export const PROJECTS = [
  {
    id: 'tfc',
    title: 'Trybe Futebol Clube',
    slot: true,
    tags: ['Node.js', 'TypeScript', 'Express', 'Sequelize', 'MySQL', 'Docker'],
    desc: {
      pt: 'Aplicação full-stack para gestão de partidas e classificações de futebol. Modelei o banco de dados com Sequelize, construí uma API REST em Node.js/TypeScript seguindo as regras de negócio do domínio esportivo e conteinerizei toda a stack — front, back e MySQL — com Docker Compose.',
      en: 'Full-stack app for managing football matches and standings. I modeled the database with Sequelize, built a REST API in Node.js/TypeScript around real sports business rules, and containerized the whole stack — frontend, backend, MySQL — with Docker Compose.',
    },
    repo: 'https://github.com/brunagimenez/trybe-futebol-clube',
    demo: null,
    badge: { pt: 'Case backend', en: 'Backend case' },
  },
  {
    id: 'trybetunes',
    title: 'TrybeTunes',
    slot: true,
    tags: ['React', 'React Router', 'JavaScript', 'API REST'],
    desc: {
      pt: 'Player de músicas que consome uma API externa para buscar artistas, álbuns e faixas. Implementei roteamento com React Router, controle de estado assíncrono pelos ciclos de vida do React e uma tela de edição de perfil com upload de imagem.',
      en: 'Music player that consumes an external API to search artists, albums and tracks. I implemented routing with React Router, asynchronous state handling through React lifecycle methods, and a profile editor with image upload.',
    },
    repo: 'https://github.com/brunagimenez/trybetunes',
    demo: 'https://trybetunes-gold.vercel.app/',
    badge: null,
  },
  {
    id: 'recipes',
    title: 'Recipes App',
    slot: true,
    tags: ['React', 'Redux', 'Context API', 'Hooks'],
    desc: {
      pt: 'App de receitas com busca, filtros por categoria e ingrediente, favoritos e acompanhamento passo a passo do preparo — todo o estado global gerenciado com Redux e Context API. Desenhado mobile-first para o uso real na cozinha.',
      en: 'Recipe app with search, category/ingredient filters, favorites and step-by-step cooking progress — all global state managed with Redux and Context API. Designed mobile-first for real kitchen use.',
    },
    repo: 'https://github.com/brunagimenez/recipes-app',
    demo: 'http://recipes-app-bruna.vercel.app',
    badge: null,
  },
  {
    id: 'shopping',
    title: 'Shopping Cart',
    image: 'shopping',
    tags: ['React', 'TDD', 'Jest', 'API REST'],
    desc: {
      pt: 'Carrinho de compras dinâmico que consome a API do Mercado Livre em tempo real. Desenvolvido com TDD do início ao fim: os testes de cada regra de negócio do carrinho vieram antes da implementação.',
      en: 'Dynamic shopping cart that consumes the Mercado Livre API in real time. Built with TDD from the ground up — tests for every cart business rule were written before the implementation.',
    },
    repo: 'https://github.com/brunagimenez/Shopping-Cart',
    demo: 'https://shopping-cart-bruna.vercel.app/',
    badge: null,
  },
  {
    id: 'trunfo',
    title: 'Trunfo Marvel',
    image: 'trunfo',
    tags: ['React', 'JavaScript', 'Forms'],
    desc: {
      pt: 'Jogo estilo Super Trunfo com cartas de heróis Marvel: criação de baralho, adição e remoção de cartas e visualização da coleção. Prática intensiva de formulários controlados e comunicação entre componentes via callbacks.',
      en: 'Super Trunfo-style card game with Marvel heroes: deck creation, adding/removing cards and browsing the collection. Focused practice with controlled forms and parent-child communication via callbacks.',
    },
    repo: 'https://github.com/brunagimenez/trunfo-marvel',
    demo: 'https://trunfo-marvel.vercel.app/',
    badge: null,
  },
  {
    id: 'solar',
    title: 'Solar System',
    slot: true,
    tags: ['React', 'Class Components', 'PropTypes'],
    desc: {
      pt: 'Simulação visual do sistema solar com cartões informativos sobre missões espaciais reais. Construído com componentes de classe em React, renderização dinâmica de listas a partir de arrays e validação de dados com PropTypes.',
      en: 'Visual simulation of the solar system with info cards about real space missions. Built with React class components, dynamic list rendering from arrays, and data validation with PropTypes.',
    },
    repo: 'https://github.com/brunagimenez/project-solar-system',
    demo: null,
    badge: null,
  },
  {
    id: 'spotnews',
    title: 'Spotnews',
    image: 'spotnews',
    tags: ['Python', 'Django', 'DRF', 'MySQL'],
    desc: {
      pt: 'Plataforma de notícias com cadastro de categorias, autoria e conteúdo, construída em Django seguindo a arquitetura MVT. Modelei o banco relacional em MySQL e expus os dados também via API REST com Django REST Framework.',
      en: 'News platform with category, authorship and content management, built in Django following the MVT architecture. I modeled the relational database in MySQL and also exposed the data through a REST API with Django REST Framework.',
    },
    repo: 'https://github.com/brunagimenez/spotnews',
    demo: null,
    badge: null,
  },
  {
    id: 'bbg',
    title: 'BBG Solutions',
    slot: true,
    tags: ['Node.js', 'React', 'MySQL', 'Docker'],
    desc: {
      pt: 'Plataforma full-stack sob demanda para gestão de tarefas de marketing, com agendamento e integração via WhatsApp. Back-end em Node.js e MySQL, front-end em React, ambiente conteinerizado com Docker.',
      en: 'On-demand full-stack platform for managing marketing tasks, with scheduling and WhatsApp integration. Node.js and MySQL on the back-end, React on the front-end, containerized with Docker.',
    },
    repo: 'https://github.com/brunagimenez/bbg',
    demo: null,
    badge: { pt: 'Freelance', en: 'Freelance' },
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Bot',
    slot: true,
    tags: ['Node.js', 'WhatsApp API', 'MySQL'],
    desc: {
      pt: 'Bot para WhatsApp integrado a um banco de dados MySQL, automatizando respostas e fluxos de atendimento para pequenos negócios.',
      en: 'WhatsApp bot integrated with a MySQL database, automating replies and service flows for small businesses.',
    },
    repo: 'https://github.com/brunagimenez/whatsappBot',
    demo: null,
    badge: { pt: 'Freelance', en: 'Freelance' },
  },
];

export const BLOG_POSTS = [
  {
    id: 'transicao',
    tag: { pt: 'Carreira', en: 'Career' },
    read: '6 min',
    title: { pt: 'Do Design para o código: o que eu não esperava', en: "From Design to code: what I didn't expect" },
    excerpt: {
      pt: 'Achei que ia trocar o Figma pelo VS Code e pronto. Na prática, o que mais se transferiu do Design para a programação não foi estética — foi a forma de ouvir um problema antes de sair resolvendo.',
      en: "I thought I'd just swap Figma for VS Code. In practice, what carried over most from Design wasn't aesthetics — it was how I listen to a problem before jumping to solve it.",
    },
  },
  {
    id: 'tdd',
    tag: { pt: 'Testes', en: 'Testing' },
    read: '5 min',
    title: { pt: 'TDD no Shopping Cart: testar antes de codar mudou meu raciocínio', en: 'TDD in Shopping Cart: writing tests first changed how I think' },
    excerpt: {
      pt: 'Escrever o teste antes da implementação parece lento no começo. Neste post conto como isso me obrigou a entender cada regra de negócio do carrinho antes de escrever uma linha de código real.',
      en: 'Writing the test before the implementation feels slow at first. Here I go over how it forced me to understand every cart business rule before writing a single line of real code.',
    },
  },
  {
    id: 'docker-tfc',
    tag: { pt: 'Infraestrutura', en: 'Infrastructure' },
    read: '7 min',
    title: { pt: 'Dockerizando o Trybe Futebol Clube: front, back e banco em um comando', en: 'Dockerizing Trybe Futebol Clube: frontend, backend and database in one command' },
    excerpt: {
      pt: 'Como estruturei o docker-compose para subir três serviços — MySQL, API em Node/TypeScript e front-end — de forma consistente para qualquer pessoa que clonasse o repositório.',
      en: 'How I structured docker-compose to bring up three services — MySQL, a Node/TypeScript API and the frontend — consistently for anyone who cloned the repository.',
    },
  },
];
