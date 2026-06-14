import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Layers, FileCode, Binary, Orbit, Server, Route, 
  Network, Blocks, Feather, Database, HardDrive, FolderGit, 
  GitBranch, Github, Container, Palette, Terminal, Zap
} from 'lucide-react';
import { techItems } from '../data.ts';

// Map icon strings to Lucide components safely
const IconMapper: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Layers, FileCode, Binary, Orbit, Server, Route, 
  Network, Blocks, Feather, Database, HardDrive, FolderGit, 
  GitBranch, Github, Container, Palette, Terminal
};

export default function TechWall() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filteredTech = techItems.filter(item => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de Dados' },
    { id: 'tools', label: 'Ferramentas' },
  ];

  return (
    <section id="tech" className="relative py-24 bg-spider-dark/95 border-b border-white/5 overflow-hidden">
      {/* Abstract Grid Backdrop with slanted paneling */}
      <div className="absolute inset-0 bg-halftone-cyan opacity-5 pointer-events-none" />
      
      {/* Decorative vertical coordinates stripe */}
      <div className="absolute top-[20%] right-10 h-1/2 w-[1px] bg-gradient-to-b from-spider-cyan/60 via-transparent to-spider-pink/60 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-12 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ececec]/60 font-bold flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-spider-cyan animate-pulse" />
            <span>PAREDE_TECNOLOGICA_1610</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-2">
            PILHAS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-spider-cyan to-spider-pink">TECNOLOGIA</span>
          </h2>
          <div className="w-16 h-1 bg-spider-cyan mt-3 transform -skew-x-12" />
        </div>

        {/* Category Filter Pills (Comic book dashboard style) */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id as any)}
              className={`px-4 py-2 rounded font-mono text-xs font-bold uppercase transition-all duration-200 border transform -skew-x-12 ${
                filterCategory === cat.id
                  ? 'bg-spider-pink text-white border-spider-pink shadow-[3px_3px_0px_rgba(0,240,255,1)] translate-y-[-2px]'
                  : 'bg-spider-card hover:bg-[#181824] text-[#ccc] border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Wall of Tech Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredTech.map((item, idx) => {
            const IconComp = IconMapper[item.icon] || Code2;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 8) * 0.05 }}
                onClick={() => setHoveredIdx(prev => prev === idx ? null : idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="bg-spider-card rounded-lg p-5 border border-white/5 relative group cursor-pointer transition-all duration-300 transform-gpu hover:-translate-y-2 hover:border-spider-pink/50 hover:shadow-[0_4px_30px_rgba(255,0,127,0.15)] flex flex-col justify-between"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Glitch particle background effect (shows on hover) */}
                <div 
                  className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none rounded-lg"
                />

                <div className="space-y-4 relative z-10 pointer-events-none">
                  <div className="flex items-center justify-between">
                    {/* Glowing Tech Icon Container */}
                    <div className={`p-2.5 rounded bg-spider-dark border border-white/10 text-white transition-all duration-300 ${isHovered ? 'scale-110 shadow-[0_0_15px_rgba(0,240,255,0.3)] border-spider-cyan text-spider-cyan' : ''}`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-[9px] uppercase text-gray-400 group-hover:text-spider-cyan leading-none font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-base text-white group-hover:text-white uppercase tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Domínio Mastery Indicator Panel (Comic design scale bar) */}
                <div className="mt-5 space-y-1.5 relative z-10 pointer-events-none">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-gray-500">DOMÍNIO:</span>
                    <span className="text-white font-black">{item.mastery}%</span>
                  </div>

                  {/* Segmented comic styled progress bar */}
                  <div className="h-2.5 w-full bg-spider-dark rounded overflow-hidden border border-white/5 flex p-[1.5px] gap-[1px]">
                    {Array.from({ length: 10 }).map((_, segmentIdx) => {
                      const isActive = (item.mastery / 10) > segmentIdx;
                      return (
                        <div
                          key={segmentIdx}
                          className={`h-full flex-1 transition-all duration-500 rounded-[1px] ${
                            isActive 
                              ? `bg-gradient-to-tr ${item.color} ${isHovered ? 'opacity-100 scale-y-110' : 'opacity-85'}` 
                              : 'bg-white/5'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Visual subtle slash marker at the top right of each card */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-spider-pink transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
