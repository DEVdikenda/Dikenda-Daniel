/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header.tsx';
import SpiderVerseBg from './components/SpiderVerseBg.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import TechWall from './components/TechWall.tsx';
import Experience from './components/Experience.tsx';
import Services from './components/Services.tsx';
import Blog from './components/Blog.tsx';
import Contact from './components/Contact.tsx';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-spider-dark text-[#ececec] overflow-x-hidden selection:bg-spider-pink selection:text-white">
      {/* Cinematic animated ambient background */}
      <SpiderVerseBg />

      {/* Main Glass Header Navigation */}
      <Header />

      {/* Structured Sections Scroll Flow */}
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT ME SECTION */}
        <About />

        {/* COMPILATION OF CORE SKILLS */}
        <Skills />

        {/* PREM TECH WALL */}
        <TechWall />

        {/* TIMELINE OF WORK EXPERIENCE */}
        <Experience />

        {/* SERVICES OFFERED */}
        <Services />

        {/* BLOG EDITORIAL ARTICLES */}
        <Blog />

        {/* CONTACT TERMINAL COMPILER */}
        <Contact />
      </main>

      {/* DESIGNER FOOTER */}
      <footer className="relative z-10 bg-[#060608]/95 border-t border-white/5 py-12 overflow-hidden select-none">
        <div className="absolute inset-0 bg-halftone opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-sans font-black tracking-tight text-white leading-none text-base">
              DIKENDA<span className="text-spider-pink">.</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-spider-cyan/80 leading-none mt-1">
              Earth-1610 Protagonist
            </span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1.5 md:space-y-0 text-center text-xs text-slate-400 font-mono">
            <div className="flex items-center space-x-1 justify-center">
              <span>Construído com</span>
              <Heart className="w-3.5 h-3.5 text-spider-pink fill-spider-pink animate-pulse" />
              <span>& React / Tailwind V4</span>
            </div>
            <div className="text-[10px] text-gray-500 mt-1">
              © 2026 Dikenda André Daniel. Todos os direitos reservados.
            </div>
          </div>

          <div className="text-right font-mono text-[9px] text-[#888] hidden md:block">
            <span>Lat: -8.8383° S | Lng: 13.2344° E</span>
            <div className="text-spider-cyan mt-1 font-bold">GRID_SECURE: PASS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
