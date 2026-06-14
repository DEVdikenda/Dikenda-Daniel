import React, { useEffect, useState } from 'react';

export default function SpiderVerseBg() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-spider-dark">
      {/* Dynamic Dimensions Grid with parallax */}
      <div 
        className="absolute inset-0 dimension-grid opacity-25 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      />

      {/* Comic Halftones Layer with opposite parallax */}
      <div 
        className="absolute inset-0 bg-halftone opacity-10 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
      />

      {/* Ambient dimension portals glows */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-spider-purple/20 to-spider-pink/0 blur-[130px] -top-96 -left-48 animate-pulse pointer-events-none"
        style={{ 
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-spider-cyan/15 to-spider-pink/5 blur-[120px] bottom-1/4 -right-48 pointer-events-none"
        style={{ 
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
          animationDuration: '12s'
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-spider-red/10 blur-[90px] top-1/2 left-2/3 pointer-events-none animate-pulse"
        style={{ 
          animationDuration: '5s' 
        }}
      />

      {/* Aesthetic flying cosmic grid blocks / glitch cubes */}
      <div className="absolute top-[15%] left-[8%] w-12 h-12 border border-spider-pink/30 bg-spider-pink/5 rotate-[15deg] skew-x-3 hidden md:block opacity-40 hover:opacity-100 transition-opacity" />
      <div className="absolute top-[65%] left-[84%] w-16 h-16 border-2 border-spider-cyan/20 bg-spider-cyan/3 bg-comic-lines -rotate-[12deg] hidden md:block opacity-30" />
      <div className="absolute top-[40%] left-[88%] w-8 h-20 border border-spider-purple/30 bg-halftone-cyan opacity-25 hidden md:block" />
      <div className="absolute top-[80%] left-[12%] w-24 h-6 border border-spider-red/20 opacity-30 transform -skew-x-12 hidden md:block bg-spider-red/5" />
    </div>
  );
}
