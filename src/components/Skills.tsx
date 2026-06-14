import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Hammer, Terminal, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Multiverse Frontend',
      subtitle: 'Controlo Dimensional de Interface',
      icon: <Layout className="w-5 h-5 text-spider-cyan" />,
      color: 'border-l-spider-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]',
      glowColor: 'bg-spider-cyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
      description: 'Concepção de interfaces de utilizador ricas em motion design, acessibilidade estrita, layouts fluidos e estado local robusto.',
      accent: 'text-spider-cyan'
    },
    {
      id: 'backend',
      title: 'Core Backend Engine',
      subtitle: 'Sistemas Autotesteáveis & Fluxos',
      icon: <Server className="w-5 h-5 text-spider-pink" />,
      color: 'border-l-spider-pink hover:shadow-[0_0_20px_rgba(255,0,127,0.15)]',
      glowColor: 'bg-spider-pink',
      skills: ['Node.js', 'Express', 'NestJS', 'PHP', 'Laravel'],
      description: 'Arquiteturas seguras e transacionais, microsserviços integrados, gateways corporativos e roteamento otimizado.',
      accent: 'text-spider-pink'
    },
    {
      id: 'database',
      title: 'Bases Relacionais & NoSQL',
      subtitle: 'Persistência & Integridade',
      icon: <Database className="w-5 h-5 text-spider-purple" />,
      color: 'border-l-spider-purple hover:shadow-[0_0_20px_rgba(157,0,255,0.15)]',
      glowColor: 'bg-spider-purple',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
      description: 'Modelagem estruturada de dados, otimização de consultas complexas, indexação inteligente e cache de baixa latência.',
      accent: 'text-spider-purple'
    },
    {
      id: 'tools',
      title: 'Ferramentas de Órbita',
      subtitle: 'Ambiente de Dev & Implantação',
      icon: <Hammer className="w-5 h-5 text-spider-red" />,
      color: 'border-l-spider-red hover:shadow-[0_0_20px_rgba(255,51,51,0.15)]',
      glowColor: 'bg-spider-red',
      skills: ['Git', 'GitHub', 'Docker', 'Figma'],
      description: 'Controlo de versões, virtualização leve de ambientes isolados e conversão de wireframes para código pixel-perfect.',
      accent: 'text-spider-red'
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-spider-dark overflow-hidden dimension-grid">
      {/* Absolute layout indicators reminiscent of old blueprint/comic books */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-gray-600 select-none">
        GRID_LOC_ID: 1610-A // SEC_SKILLS
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-gray-650 select-none">
        PORTAL_FLOW: ONLINE_LOCK // NO_OVERFLOW
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-spider-cyan font-bold flex items-center space-x-1">
            <Terminal className="w-3.5 h-3.5" />
            <span>PORTAL_CORE_COMPETENCES</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
            COMPETÊNCIAS <span className="text-spider-pink">PILARES</span>
          </h2>
          <div className="w-24 h-1 bg-spider-pink mt-3 transform -skew-x-12" />
          <p className="text-gray-400 font-sans text-sm max-w-xl mt-4">
            Cards dimensionais operando como portais tecnológicos. Cada quadrante representa uma área de maestria e foco do desenvolvedor.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-spider-card/90 p-6 sm:p-8 rounded-xl border border-white/5 border-l-4 ${cat.color} transition-all duration-300 relative group overflow-hidden`}
            >
              {/* Comic dot halftone in background of hover card */}
              <div className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 leading-none">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight mt-1 flex items-center space-x-2">
                    <span className="p-1 px-1.5 rounded bg-white/5">{cat.icon}</span>
                    <span>{cat.title}</span>
                  </h3>
                </div>
                
                {/* Dimensional Status indicator */}
                <div className="inline-flex items-center space-x-1 bg-white/5 px-2.5 py-1 rounded text-[10px] font-mono font-medium text-slate-300 border border-white/10 w-fit self-start">
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.glowColor} animate-pulse`} />
                  <span>DIMEN_ACTIVE</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Technologies Portal Tokens */}
              <div className="space-y-3">
                <div className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider flex items-center space-x-1.5">
                  <span className="w-1 h-3 bg-spider-pink" />
                  <span>TECNOLOGIAS_SINCRONIZADAS</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded bg-spider-dark border border-white/5 text-xs text-white font-mono hover:border-spider-pink hover:text-spider-pink transition-colors flex items-center space-x-1.5 cursor-default group/token"
                    >
                      <CheckCircle2 className={`w-3 h-3 ${cat.accent} opacity-40 group-hover/token:opacity-100 transition-opacity`} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical dimension lines pattern */}
              <div className="absolute right-0 bottom-0 w-24 h-1 bg-comic-lines opacity-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
