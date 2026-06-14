import { Project, TechItem, BlogItem, ExperienceItem, ServiceItem } from './types.ts';

export const projects: Project[] = [
  {
    id: 'multiverse-sync',
    title: 'Multiverse Sync Engine',
    description: 'Sistema descentralizado de sincronização de dados multi-tenant em tempo real com pipelines de streaming de alta capacidade e tolerância a falhas.',
    category: 'Backend & Cloud',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    githubUrl: 'https://github.com/dikendadaniel/multiverse-sync',
    demoUrl: '#',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis']
  },
  {
    id: 'dimensions-dashboard',
    title: 'Visualizador de Dimensões Earth-1610',
    description: 'Painel analítico imersivo para monitoramento de infraestrutura computacional e distribuição de carga serverless com analytics de baixa latência.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop',
    githubUrl: 'https://github.com/dikendadaniel/earth-1610-dashboard',
    demoUrl: '#',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Express']
  },
  {
    id: 'spider-neural-api',
    title: 'Neural Web Portal API',
    description: 'API corporativa robusta com arquitetura DDD, tratamento inteligente de payloads, autorização RBAC e cache resiliente de três níveis.',
    category: 'Backend & APIs',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop',
    githubUrl: 'https://github.com/dikendadaniel/neural-web-portal',
    demoUrl: '#',
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Docker', 'Git']
  },
  {
    id: 'neon-city-ecommerce',
    title: 'Nebula Commerce Platform',
    description: 'E-commerce completo focado em performance extrema, checkout transacional seguro e painel administrativo dinâmico integrado.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop',
    githubUrl: 'https://github.com/dikendadaniel/nebula-commerce',
    demoUrl: '#',
    technologies: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'JavaScript']
  }
];

export const techItems: TechItem[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', mastery: 95, color: 'from-orange-500 to-red-500', icon: 'Code2' },
  { name: 'CSS3', category: 'frontend', mastery: 90, color: 'from-blue-400 to-cyan-500', icon: 'Layers' },
  { name: 'JavaScript', category: 'frontend', mastery: 95, color: 'from-yellow-400 to-amber-500', icon: 'FileCode' },
  { name: 'TypeScript', category: 'frontend', mastery: 92, color: 'from-blue-500 to-indigo-600', icon: 'Binary' },
  { name: 'React', category: 'frontend', mastery: 95, color: 'from-cyan-400 to-blue-500', icon: 'Orbit' },
  { name: 'Next.js', category: 'frontend', mastery: 88, color: 'from-gray-700 to-black', icon: 'Code2' },
  
  // Backend
  { name: 'Node.js', category: 'backend', mastery: 93, color: 'from-green-500 to-emerald-600', icon: 'Server' },
  { name: 'Express', category: 'backend', mastery: 95, color: 'from-gray-500 to-gray-700', icon: 'Route' },
  { name: 'NestJS', category: 'backend', mastery: 85, color: 'from-red-600 to-rose-700', icon: 'Network' },
  { name: 'PHP', category: 'backend', mastery: 85, color: 'from-indigo-400 to-indigo-600', icon: 'Blocks' },
  { name: 'Laravel', category: 'backend', mastery: 88, color: 'from-rose-500 to-red-600', icon: 'Feather' },

  // Base de Dados
  { name: 'MySQL', category: 'database', mastery: 90, color: 'from-blue-600 to-sky-500', icon: 'Database' },
  { name: 'PostgreSQL', category: 'database', mastery: 92, color: 'from-cyan-600 to-blue-700', icon: 'HardDrive' },
  { name: 'MongoDB', category: 'database', mastery: 85, color: 'from-emerald-500 to-green-600', icon: 'FolderGit' },

  // Ferramentas
  { name: 'Git', category: 'tools', mastery: 95, color: 'from-orange-600 to-red-600', icon: 'GitBranch' },
  { name: 'GitHub', category: 'tools', mastery: 95, color: 'from-purple-600 to-indigo-800', icon: 'Github' },
  { name: 'Docker', category: 'tools', mastery: 82, color: 'from-sky-400 to-blue-600', icon: 'Container' },
  { name: 'Figma', category: 'tools', mastery: 80, color: 'from-pink-500 to-rose-500', icon: 'Palette' },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Engenheiro de Software Full Stack Sénior',
    company: 'Synergy Quantum Labs',
    period: '2024 - Presente',
    description: [
      'Arquitetura e desenvolvimento de microsserviços escaláveis de alta transacionalidade usando NestJS e TypeScript.',
      'Otimização do banco de dados relacional PostgreSQL garantindo redução de 40% do tempo de resposta das consultas principais.',
      'Liderança técnica em Squad Ágil focado no redesign de aplicações corporativas utilizando Next.js com foco em Core Web Vitals elevados.',
      'Implementação de pipelines CI/CD com Docker automatizando deploys seguros em infraestruturas baseadas em cloud.'
    ],
    technologies: ['NestJS', 'Next.js', 'PostgreSQL', 'Docker', 'TypeScript']
  },
  {
    id: 'exp-2',
    role: 'Desenvolvedor Full Stack',
    company: 'Pixel Dimension Studio',
    period: '2022 - 2024',
    description: [
      'Construção de aplicações administrativas completas e plataformas de comércio com Laravel e React.',
      'Integração de meios de pagamentos internacionais complexos e criação de APIs REST robustas e documentadas.',
      'Gestão de bases MySQL de alta demanda estruturando esquemas otimizados com replicação de leitura.',
      'Customização de fluxos avançados de interface com animações fluidas baseadas no Framer Motion (Motion).'
    ],
    technologies: ['Laravel', 'React', 'MySQL', 'Node.js', 'CSS/CSS3']
  },
  {
    id: 'exp-3',
    role: 'Desenvolvedor Web Junior & Freelancer',
    company: 'Autónomo / Agência Digital',
    period: '2020 - 2022',
    description: [
      'Desenvolvimento de dezenas de landing pages modernas e sites corporativos otimizados para mecanismos de busca (SEO).',
      'Configuração e automação de rotinas no servidor Node.js com persistência MongoDB para e-learning local.',
      'Criação de mockups de alta fidelidade e layouts de interface usando o Figma visando à melhor usabilidade.',
      'Trabalho próximo ao cliente final traduzindo necessidades de negócios complexas em soluções de código limpo.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Figma']
  }
];

export const services: ServiceItem[] = [
  {
    id: 'srv-web',
    title: 'Desenvolvimento Web Premium',
    description: 'Interfaces web exuberantes, extremamente fluidas, focadas em usabilidade e performance exemplar, utilizando as melhores ferramentas como React e Next.js.',
    iconName: 'LayoutTemplate'
  },
  {
    id: 'srv-fullstack',
    title: 'Aplicações Full Stack',
    description: 'Sistemas completos estruturados ponta a ponta (end-to-end), integrando frontends reativos a backends robustos, escaláveis e de alta performance.',
    iconName: 'Network'
  },
  {
    id: 'srv-enterprise',
    title: 'Sistemas Empresariais',
    description: 'Soluções personalizadas corporativas para automações de fluxos internos, controle de stock, finanças e otimização produtiva estável.',
    iconName: 'Briefcase'
  },
  {
    id: 'srv-landing',
    title: 'Landing Pages Interativas',
    description: 'Páginas comerciais construídas estrategicamente para atrair, impressionar de imediato e converter visitantes em clientes, ricas em motion design.',
    iconName: 'Sparkles'
  },
  {
    id: 'srv-dashboards',
    title: 'Dashboards Analíticos',
    description: 'Visualizadores de dados corporativos sofisticados em tempo real com tabelas avançadas e inteligência analítica de negócios.',
    iconName: 'BarChart3'
  },
  {
    id: 'srv-apis',
    title: 'APIs Resilientes',
    description: 'Design e concepção de APIs RESTful e GraphQL robustas, altamente seguras, otimizadas para cache rápido e prontas para alto volume de requests.',
    iconName: 'Terminal'
  },
  {
    id: 'srv-consulting',
    title: 'Consultoria Tecnológica',
    description: 'Análise de arquiteturas de software vigentes, auditoria de segurança, otimização de performance e direcionamento estratégico de tecnologias.',
    iconName: 'HelpCircle'
  }
];

export const blogItems: BlogItem[] = [
  {
    id: 'post-1',
    title: 'O Impacto da Arquitetura de Microsserviços na Web Escansível',
    excerpt: 'Como a distribuição inteligente de cargas por domínios de microsserviços ajuda gigantes de tecnologia a sustentar milhões de acessos concomitantes sem pestanejar.',
    date: '10 de Junho de 2026',
    readTime: '6 min de leitura',
    category: 'Backend',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'post-2',
    title: 'React 19 e as Novas Dimensões de Performance no Client-Side',
    excerpt: 'Uma imersão profunda nas novidades do React 19: de Actions nativas e Server Components nativos a novos ganchos utilitários para otimizar suas interfaces.',
    date: '28 de Maio de 2026',
    readTime: '5 min de leitura',
    category: 'Frontend',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'post-3',
    title: 'Por Que Você Deve Migrar Suas Conexões de DB para SQL Relacional',
    excerpt: 'Explorando cenários onde a integridade referencial, consultas complexas e consistência estrita superam a flexibilidade de bases NoSQL tradicionais.',
    date: '15 de Maio de 2026',
    readTime: '8 min de leitura',
    category: 'Bases de Dados',
    coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop'
  }
];
