import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Briefcase, MessageSquare, Terminal } from 'lucide-react';
import profilePic from '../assets/images/dikenda_profile_1781179280267.jpeg';

export default function Hero() {
  const [isImageActive, setIsImageActive] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background radial overlay for focal point */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spider-dark/80 to-spider-dark z-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Texts Info (Col-span 7) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-spider-pink/20 to-spider-cyan/10 border border-spider-pink/35 px-3.5 py-1.5 rounded-full w-fit group"
          >
            <Sparkles className="w-4 h-4 text-spider-pink animate-spin" style={{ animationDuration: '4s' }} />
            <span className="font-mono text-xs font-bold tracking-widest text-[#fff] group-hover:text-spider-cyan transition-colors uppercase">
              UNIVERSO MULTIDIMENSIONAL DO CÓDIGO
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none text-white uppercase relative"
            >
              DIKENDA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spider-cyan via-spider-pink to-spider-purple glitch-text">
                ANDRÉ DANIEL
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-300 font-sans font-normal max-w-xl leading-relaxed"
            >
              Construindo experiências digitais premium que ultrapassam as dimensões tradicionais da programação. Desenvolvedor Full Stack especializado em sistemas robustos e interfaces cinematográficas.
            </motion.p>
          </div>

          {/* Interactive Live Data Indicator (Comic Style) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-spider-card/85 p-4 border border-spider-cyan/30 rounded-lg max-w-lg shadow-[5px_5px_0px_0px_#00f0ff] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-1 bg-spider-cyan text-spider-dark font-mono text-[9px] font-black uppercase tracking-wider">
              TELEMETRIA LOCAL
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-1.5 pt-1">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-spider-pink animate-ping" />
                <span><strong className="text-white">STATUS:</strong> PRONTO PARA IMPLANTAR</span>
              </div>
              <div><strong className="text-white">COORDINATES:</strong> Lat: -8.8383° S | Lng: 13.2344° E (Earth-1610)</div>
              <div><strong className="text-white">STACK ATIVADA:</strong> TS / NextJS / NestJS / PostgreSQL / Laravel</div>
            </div>
          </motion.div>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#services"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded font-mono font-bold text-xs uppercase bg-white text-spider-dark hover:bg-spider-cyan hover:scale-[1.02] transform transition-all duration-200 shadow-[4px_4px_0px_0px_#ff007f]"
            >
              <Briefcase className="w-4.5 h-4.5" />
              <span>Ver Serviços</span>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded font-mono font-bold text-xs uppercase bg-transparent text-white border border-white/20 hover:border-spider-pink hover:bg-spider-pink/5 hover:scale-[1.02] transform transition-all duration-200"
            >
              <MessageSquare className="w-4.5 h-4.5 text-spider-pink" />
              <span>Contactar Agente</span>
            </a>
          </motion.div>
        </div>

        {/* Cinematic Portrait Photo Wrapper (Col-span 5) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[3/4]"
          >
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-spider-pink to-spider-cyan rounded-2xl opacity-30 blur-xl animate-pulse" />
            
            {/* Offset border effect in true Spider-Verse aesthetic */}
            <div className="absolute inset-0 bg-spider-cyan rounded-xl transform translate-x-2 translate-y-2 opacity-60 z-1 border border-spider-cyan pointer-events-none" />
            <div className="absolute inset-0 bg-spider-pink rounded-xl transform -translate-x-2 -translate-y-2 opacity-60 z-1 border border-spider-pink pointer-events-none" />
            
            {/* Halftones under-block */}
            <div className="absolute -inset-6 bg-halftone opacity-40 mix-blend-color-dodge z-0 pointer-events-none" />

            {/* Main Picture Frame */}
            <div 
              onClick={() => setIsImageActive(!isImageActive)}
              onMouseEnter={() => setIsImageActive(true)}
              onMouseLeave={() => setIsImageActive(false)}
              className="absolute inset-0 rounded-xl overflow-hidden bg-spider-card border-2 border-white/95 z-2 shadow-2xl cursor-crosshair transition-all duration-300"
            >
              <img
                src={profilePic}
                alt="Dikenda André Daniel"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-500 scale-100 ${
                  isImageActive ? 'grayscale-0 scale-105 filter contrast-[1.05]' : 'grayscale'
                }`}
              />

              {/* Comic sticker label overlay */}
              <div className={`absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 font-mono font-black text-[10px] uppercase tracking-widest rotate-[-3deg] shadow-lg border border-black transition-transform duration-300 ${
                isImageActive ? 'scale-110' : ''
              }`}>
                SUBJECT: DIKENDA #1610
              </div>

              {/* Holographic matrix line overlay */}
              <div className={`absolute inset-0 bg-comic-lines pointer-events-none transition-opacity duration-300 ${
                isImageActive ? 'opacity-25' : 'opacity-10'
              }`} />
              
              {/* Overlay comic speech frame indicator */}
              <div className={`absolute bottom-3 right-3 bg-spider-dark/95 border px-2.5 py-1 text-[10px] font-mono font-bold leading-none transition-all duration-300 ${
                isImageActive ? 'border-spider-cyan text-spider-cyan scale-105 shadow-[0_0_10px_rgba(0,240,255,0.3)]' : 'border-spider-purple text-spider-cyan'
              }`}>
                GRID_ONLINE: SECURE
              </div>
            </div>

            {/* Extra graphic markers */}
            <div className="absolute -bottom-8 -left-8 font-mono text-xs text-spider-pink opacity-50 select-none hidden sm:block">
              [Dimension_Interlink_Lock]
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 z-10 opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">DESLIZAR ACIMA</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-1 rounded-full border border-slate-500 text-spider-cyan cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
