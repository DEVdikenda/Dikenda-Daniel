import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Star, Milestone, ChevronRight } from 'lucide-react';
import { experienceItems } from '../data.ts';

export default function Experience() {
  const [activeSubTab, setActiveSubTab] = useState('exp-1');

  const activeExp = experienceItems.find(item => item.id === activeSubTab) || experienceItems[0];

  return (
    <section id="experience" className="relative py-24 bg-spider-dark/90 overflow-hidden border-b border-white/5">
      {/* Visual Slanting Stripe Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-comic-lines opacity-5 pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-1.5 h-1.5 rounded-full bg-spider-cyan animate-ping" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-spider-pink font-bold flex items-center space-x-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>LINHA_DE_TEMPO_PROFISSIONAL</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-2">
            EXPERIÊNCIA <span className="text-spider-cyan">DIMENSIONAL</span>
          </h2>
          <div className="w-24 h-1 bg-spider-cyan mt-3 transform -skew-x-12" />
        </div>

        {/* Professional timeline interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Timeline Selector Buttons (Col-span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-[9px] text-[#888] uppercase tracking-wider mb-4 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-spider-pink rounded-full" />
              <span>REGISTOS_DE_WORKPORT</span>
            </div>
            
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-3 lg:pb-0 scrollbar-none">
              {experienceItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSubTab(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-lg font-sans border transition-all duration-300 flex flex-col justify-start relative shrink-0 min-w-[200px] lg:min-w-0 ${
                    activeSubTab === item.id
                      ? 'bg-spider-card border-spider-pink border-l-4 text-white shadow-[0_4px_15px_rgba(255,0,127,0.1)]'
                      : 'bg-spider-card/55 border-white/5 hover:border-white/15 text-[#aaa]'
                  }`}
                >
                  <div className="font-bold text-sm uppercase tracking-tight text-white line-clamp-1">
                    {item.role}
                  </div>
                  <div className="font-mono text-[10px] text-spider-cyan mt-1 flex items-center justify-between w-full">
                    <span>{item.company}</span>
                    <span className="text-gray-500 font-normal">{item.period}</span>
                  </div>
                  
                  {activeSubTab === item.id && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-3 text-spider-pink animate-pulse hidden lg:block">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details Content Box (Col-span 8) */}
          <div className="lg:col-span-8 bg-spider-card rounded-xl p-6 sm:p-8 border border-white/5 relative shadow-xl overflow-hidden min-h-[350px]">
            {/* Ambient comic dots background */}
            <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                {/* Header card info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                      {activeExp.role}
                    </h3>
                    <div className="font-mono text-xs text-spider-cyan font-bold mt-1">
                      {activeExp.company}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-[11px] font-mono bg-white/5 px-3 py-1.5 rounded border border-white/10 text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-spider-pink" />
                    <span>{activeExp.period}</span>
                  </div>
                </div>

                {/* Bullets List description */}
                <div className="space-y-3.5">
                  <div className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider flex items-center space-x-1">
                    <Star className="w-3 h-3 text-[#efff33]" />
                    <span>CONTRIBUIÇÕES_E_REALIZAÇÕES</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {activeExp.description.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2.5 text-gray-300 text-sm leading-relaxed">
                        <span className="p-1 rounded bg-[#ff007f]/10 text-spider-pink shrink-0 mt-0.5">
                          <Milestone className="w-3 h-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills utilized at this experience stage */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider">
                    TECNOLOGIAS_CHAVE
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-spider-dark px-2.5 py-1 rounded text-[10px] font-mono border border-white/5 text-[#ccc] hover:border-spider-cyan hover:text-[#fff] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
