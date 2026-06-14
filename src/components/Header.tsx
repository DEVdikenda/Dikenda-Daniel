import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Sync active section on scroll
      const sections = ['inicio', 'about', 'skills', 'tech', 'experience', 'services', 'blog', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'about', label: 'Sobre Mim', href: '#about' },
    { id: 'skills', label: 'Competências', href: '#skills' },
    { id: 'tech', label: 'Tecnologias', href: '#tech' },
    { id: 'experience', label: 'Experiência', href: '#experience' },
    { id: 'services', label: 'Serviços', href: '#services' },
    { id: 'blog', label: 'Blog', href: '#blog' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(id);
    setMobileMenuOpen(false);

    // Let state changes render first, then trigger smooth scroll
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Smoothly update location hash without browser jump
        window.history.pushState(null, '', `#${id}`);
      }
    });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Designer Logo with Cyber-Glitch and Dev Symbol */}
        <a 
          href="#inicio" 
          onClick={(e) => handleLinkClick('inicio', e)}
          className="flex items-center space-x-3 group relative select-none"
        >
          {/* Developer Icon Container with Glitch Aura */}
          <div className="relative">
            {/* Cyan glitch shadow copy */}
            <div className="absolute inset-0 bg-spider-cyan rounded-md opacity-0 group-hover:opacity-60 transition-all duration-200 blur-xs -translate-x-0.5 -translate-y-0.5" />
            {/* Pink glitch shadow copy */}
            <div className="absolute inset-0 bg-spider-pink rounded-md opacity-0 group-hover:opacity-60 transition-all duration-200 blur-xs translate-x-0.5 translate-y-0.5" />
            
            <div className="relative w-10 h-10 rounded-md bg-gradient-to-br from-spider-pink via-spider-purple to-spider-cyan p-[1.5px] transition-all duration-300 group-hover:scale-105 group-hover:rotate-[6deg] shadow-[0_0_12px_rgba(255,0,127,0.25)]">
              <div className="w-full h-full bg-spider-dark flex items-center justify-center rounded-[4px] relative overflow-hidden">
                <Code2 className="w-5 h-5 text-spider-cyan group-hover:text-spider-pink transition-colors duration-200 relative z-10" />
                
                {/* Visual grid overlay / micro circuit-like scanning inside */}
                <div className="absolute inset-0 bg-[radial-gradient(#ff007f_0.5px,transparent_0.5px)] [background-size:4px_4px] opacity-20" />
              </div>
            </div>
          </div>

          {/* Glitch Typography Title */}
          <div className="flex flex-col">
            <motion.span 
              className="font-sans font-black tracking-tighter text-white leading-none text-lg relative z-10 uppercase block"
              whileHover={{
                textShadow: [
                  "1px -1px 0px rgba(255,0,127,0.8), -1px 1.5px 0px rgba(0,240,255,0.8)",
                  "-1.5px 1px 0px rgba(255,0,127,0.8), 1px -1px 0px rgba(0,240,255,0.8)",
                  "2px -0.5px 0px rgba(255,0,127,0.8), -2px 0.5px 0px rgba(0,240,255,0.8)",
                  "0px 0px 0px rgba(255,0,127,0)"
                ],
                x: [0, -1.2, 1.2, -0.8, 0],
                y: [0, 0.8, -0.8, 0.5, 0],
                transition: {
                  duration: 0.25,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
              whileTap={{
                scale: 0.95,
                textShadow: "2px -1.5px 0px rgba(255,0,127,0.8), -2px 1.5px 0px rgba(0,240,255,0.8)"
              }}
            >
              DIKENDA<span className="text-spider-cyan animate-pulse">_</span>
            </motion.span>
            
            <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-spider-cyan bg-spider-cyan/10 px-1.5 py-0.5 rounded border border-spider-cyan/20 leading-none mt-1 group-hover:text-white group-hover:bg-spider-pink/15 group-hover:border-spider-pink/30 transition-all duration-300 w-fit">
              CORE_DEV // PRO
            </span>
          </div>
        </a>

        {/* Desktop Navbar MenuItems */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleLinkClick(item.id, e)}
              className="relative px-3 py-1.5 text-xs font-mono font-medium tracking-wide transition-colors"
              style={{
                color: activeTab === item.id ? '#ffffff' : 'rgba(236, 236, 236, 0.7)',
              }}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.span
                  layoutId="activeGlow"
                  className="absolute inset-0 bg-white/5 rounded border border-spider-pink/40 shadow-[0_0_8px_rgba(255,0,127,0.2)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick('contact', e)}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded font-mono text-xs font-bold bg-gradient-to-r from-spider-cyan to-spider-purple text-white relative overflow-hidden group hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            <span>Ligar Linhas</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="absolute inset-y-0 left-0 w-1 bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000" />
          </a>
        </div>

        {/* Mobile Navigation Trigger Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-spider-pink"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a10]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item.id, e)}
                  className={`block px-4 py-2.5 rounded font-mono text-sm tracking-wide transition-all ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-spider-pink/15 to-spider-cyan/5 border-l-2 border-spider-pink text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick('contact', e)}
                  className="w-full inline-flex justify-center items-center space-x-2 px-4 py-3 rounded font-mono text-xs font-bold bg-gradient-to-r from-spider-pink to-spider-red text-white"
                >
                  <span>Entrar em Contacto</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
