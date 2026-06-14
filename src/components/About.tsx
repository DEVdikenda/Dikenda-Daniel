import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Milestone, Star, Compass } from 'lucide-react';

export default function About() {
  const metrics = [
    { value: '6+', label: 'Anos de Jornada', color: 'text-spider-cyan' },
    { value: '7+', label: 'Serviços Oferecidos', color: 'text-spider-pink' },
    { value: '1,2k+', label: 'Commits Recentes', color: 'text-spider-purple' },
    { value: '10+', label: 'Sistemas Globais', color: 'text-spider-red' },
  ];

  const cards = [
    {
      title: 'Minha História',
      icon: <BookOpen className="w-5 h-5 text-spider-cyan" />,
      text: 'Comecei a desbravar o desenvolvimento de software fascinado pela capacidade de transformar matrizes vazias em portais interativos reais. Ao longo dos anos, especializei-me no ecossistema Web como programador Full Stack, integrando engenharia sólida de backend com interfaces ricas de usuário.',
      border: 'hover:border-spider-cyan/60'
    },
    {
      title: 'Minha Filosofia',
      icon: <Star className="w-5 h-5 text-spider-pink" />,
      text: 'Acredito que codificar não é apenas ordenar comandos ao processador; é tecer pontes entre ideias e o usuário final. Cada linha deve ser autotesteável, modular, limpa e desenhada sob os mais robustos padrões arquiteturais internacionais.',
      border: 'hover:border-spider-pink/60'
    },
    {
      title: 'Missão',
      icon: <Target className="w-5 h-5 text-spider-purple" />,
      text: 'Tethering (ancorar) ideias digitais visionárias à infraestrutura segura e veloz, tornando as jornadas de utilizadores simples, satisfatórias e impecáveis, independentemente do tamanho ou dimensão das aplicações.',
      border: 'hover:border-spider-purple/60'
    },
    {
      title: 'Visão & Objetivos',
      icon: <Compass className="w-5 h-5 text-spider-red" />,
      text: 'Evoluir continuamente como referência tecnológica de alto impacto, expandindo sistemas computacionais distribuídos e inspirando novos programadores a construir canais web performantes e limpos de código.',
      border: 'hover:border-spider-red/60'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-spider-dark/90 overflow-hidden">
      {/* Decorative comic strip dividers on bottom/top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-spider-pink/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-spider-cyan/40 to-transparent" />

      {/* Decorative halftone panel */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-halftone opacity-5 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-spider-pink font-bold flex items-center space-x-1.5">
            <span className="inline-block w-2 h-2 bg-spider-pink animate-ping rounded-full" />
            <span>ARANHA-DIFERENCIAL // 1610</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-2">
            SOBRE <span className="text-spider-cyan">MIM</span>
          </h2>
          <div className="w-20 h-1 bg-spider-cyan mt-3 transform -skew-x-12" />
        </div>

        {/* Narrative Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Main Story Text (Col-span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              PROTAGONISTA COMPUTACIONAL & COMPARTILHADOR DE UNIVERSOS WEB.
            </h3>
            
            <p className="text-gray-300 font-sans text-base leading-relaxed">
              Olá! Eu sou o <strong className="text-spider-cyan">Dikenda André Daniel</strong>. No vasto multiverso da Web, atuo como Engenheiro Full Stack conectando múltiplos canais tecnológicos para compor sistemas de alto impacto visual e de engenharia durável.
            </p>

            <p className="text-gray-300 font-sans text-base leading-relaxed">
              Trabalho criando soluções modulares que facilitam a vida de equipas de negócios e dão escala para produtos inovadores. Com proficiência refinada no ecossistema completo (da concepção e design, passando por pipelines backend resilientes, até à gestão segura de bancos de dados relacionais), trago qualidade premium em cada release.
            </p>

            {/* Quick stats grid (Comic style grids) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {metrics.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-spider-card p-4 border border-white/5 rounded-lg text-center transform hover:-translate-y-1 transition-transform relative overflow-hidden bg-comic-lines/5"
                >
                  <div className={`font-sans font-black text-3xl md:text-4xl ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#aaa] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive comic sidebar highlight (Col-span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-spider-card via-spider-card to-[#12121c] p-6 rounded-xl border-l-[6px] border border-y-white/5 border-r-white/5 border-spider-pink shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-halftone opacity-5 pointer-events-none" />
            
            <div className="font-mono text-cyan-400 text-xs mb-3 flex items-center space-x-1">
              <Milestone className="w-3.5 h-3.5 animate-bounce" />
              <span>COGNITIVE_MAP_LOG</span>
            </div>
            
            <h4 className="font-sans font-black text-lg text-white uppercase tracking-wide mb-3">
              FILOSOFIA DO MEU NÚCLEO
            </h4>
            
            <blockquote className="text-gray-400 italic font-sans text-sm border-l-2 border-white/10 pl-3 py-1 space-y-2">
              <p>
                "Não importa quantos erros cometeu no código ontem. O que importa é que a stack de hoje está compilando em perfeito estado com a máxima qualidade possível e com a integridade lógica resguardada para o futuro."
              </p>
              <cite className="block text-xs text-white font-mono not-italic uppercase mt-2">
                — Dikenda A. Daniel (Dev Protocol)
              </cite>
            </blockquote>

            <div className="mt-6 p-4 rounded bg-spider-dark/80 border border-spider-pink/15 text-xs text-slate-300 space-y-2">
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-gray-500">BASE_DOMICILE:</span>
                <span className="font-sans font-medium text-white">Angola / Remoto</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-gray-500">EXPERTISE:</span>
                <span className="font-sans font-medium text-white">Full Stack Node & PHP</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-gray-500">FAVORITE_Hobby:</span>
                <span className="font-sans font-medium text-slate-400">Design Gráfico / Sci-Fi Books</span>
              </div>
            </div>
          </div>

        </div>

        {/* Story, Philosophy, Mission, Vision Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`bg-spider-card/90 p-5 rounded-lg border border-white/5 transition-all duration-300 ${card.border} hover:shadow-[0_0_15px_rgba(255,255,255,0.02)] translate-y-0 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="p-2 w-fit rounded bg-white/5 border border-white/10">
                  {card.icon}
                </div>
                <h4 className="font-sans font-bold text-lg text-white uppercase tracking-tight">
                  {card.title}
                </h4>
                <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
