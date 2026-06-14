import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutTemplate, Network, Briefcase, Sparkles, BarChart3, HelpCircle, 
  Terminal, ArrowUpRight 
} from 'lucide-react';
import { services } from '../data.ts';

const ServiceIconMapper: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutTemplate, Network, Briefcase, Sparkles, BarChart3, Terminal, HelpCircle
};

export default function Services() {
  const serviceGlows = [
    'hover:border-spider-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]',
    'hover:border-spider-pink hover:shadow-[0_0_20px_rgba(255,0,127,0.15)]',
    'hover:border-spider-purple hover:shadow-[0_0_20px_rgba(157,0,255,0.15)]',
    'hover:border-[#efff33] hover:shadow-[0_0_20px_rgba(239,255,51,0.15)]',
    'hover:border-spider-red hover:shadow-[0_0_20px_rgba(255,51,51,0.15)]',
    'hover:border-[#00ffcc] hover:shadow-[0_0_20px_rgba(0,255,204,0.15)]',
    'hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]'
  ];

  return (
    <section id="services" className="relative py-24 bg-spider-dark/95 border-b border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-halftone opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[30%] left-10 w-[1px] h-64 bg-gradient-to-b from-spider-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ececec]/60 font-bold flex items-center space-x-1.5">
            <Terminal className="w-3.5 h-3.5 text-spider-pink" />
            <span>SOLUCOES_E_SERVICOS_ATIVADOS</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-2">
            SERVIÇOS <span className="text-spider-cyan">DISPONÍVEIS</span>
          </h2>
          <div className="w-16 h-1 bg-spider-cyan mt-3 transform -skew-x-12" />
          <p className="text-gray-400 font-sans text-sm max-w-xl mt-4">
            Engenharia computacional completa e design estratégico para dar vida à sua ideia sob as mais modernas metodologias internacionais.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComp = ServiceIconMapper[service.iconName] || HelpCircle;
            const glowClass = serviceGlows[idx % serviceGlows.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                className={`bg-spider-card rounded-xl p-6.5 border border-white/5 relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 ${glowClass} flex flex-col justify-between`}
              >
                {/* Background comic dot pattern */}
                <div className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-xl" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Icon frame */}
                    <div className="p-3 rounded bg-spider-dark border border-white/10 text-spider-cyan group-hover:text-white group-hover:bg-spider-pink transition-all duration-300">
                      <IconComp className="w-5.5 h-5.5" />
                    </div>

                    <span className="font-mono text-[9px] text-gray-500 font-bold">
                      0{idx + 1} // ACTIVE
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight group-hover:text-spider-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom link indicator */}
                <div className="mt-6 flex items-center space-x-1 font-mono text-[10px] text-slate-500 group-hover:text-spider-pink transition-colors">
                  <span>SABER MAIS</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Graphical grid lines on lower-right side of card on hover */}
                <div className="absolute right-0 bottom-0 w-12 h-0.5 bg-comic-lines opacity-10 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
