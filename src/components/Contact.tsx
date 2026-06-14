import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, Mail, Phone, Github, Linkedin, MapPin, CheckCircle, Terminal, 
  HelpCircle, Wifi, Database, Radio 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileStep, setCompileStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    'INICIANDO PROTOCOLO DE TRANSMISSÃO...',
    'ANALISANDO INTEGRIDADE DA ASSINATURA...',
    'SINTONIZANDO REDE DO PORTAL EARTH-1610...',
    'COMPILANDO LOG DE PAYLOAD...',
    'MENSAGEM DISPARADA COM SUCESSO! PORTAL FECHADO.'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsCompiling(true);
    setCompileStep(0);

    // Save current state inputs to persist after async compile completes
    const payload = { ...formData };

    // Simulate futuristic compiler loading
    const executeCompile = (step: number) => {
      if (step < steps.length) {
        setCompileStep(step);
        setTimeout(() => executeCompile(step + 1), 700);
      } else {
        setIsCompiling(false);
        setSuccess(true);
        
        // Construct standard safe mailto URL
        const emailTo = 'dilsonandrew0@gmail.com';
        const mailSubject = payload.subject || 'Coordenadas de Sincronização';
        const mailBody = `Olá Dilson,\n\nRecebeu uma nova mensagem do portal de contacto:\n\n` +
          `Nome/Matriz: ${payload.name}\n` +
          `Email Digital: ${payload.email}\n` +
          `Assunto: ${mailSubject}\n\n` +
          `Mensagem:\n${payload.message}\n\n` +
          `---\nLigação de segurança estabelecida no Portal Earth-1610`;

        const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
        
        // Cleanly launch default mail app
        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.click();
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    };
    executeCompile(0);
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/244941477806', icon: <Phone className="w-5 h-5 text-emerald-400" />, label: '+244 941 477 806', hoverGlow: 'hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]' },
    { name: 'Email', href: 'mailto:dilsonandrew0@gmail.com', icon: <Mail className="w-5 h-5 text-spider-cyan" />, label: 'dilsonandrew0@gmail.com', hoverGlow: 'hover:border-spider-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]' },
    { name: 'GitHub', href: 'https://github.com', icon: <Github className="w-5 h-5 text-spider-pink" />, label: 'github.com/dikendadaniel', hoverGlow: 'hover:border-spider-pink/50 hover:shadow-[0_0_15px_rgba(255,0,127,0.15)]' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin className="w-5 h-5 text-spider-purple" />, label: 'linkedin.com/in/dikenda-daniel', hoverGlow: 'hover:border-spider-purple/50 hover:shadow-[0_0_15px_rgba(157,0,255,0.15)]' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-spider-dark/90 overflow-hidden dimension-grid">
      {/* Absolute indicators */}
      <div className="absolute top-[30%] left-5 text-[9px] font-mono text-gray-600 rotate-90 select-none">
        TRANSMISSION_FREQUENCY_LOCKED_1610_HZ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ececec]/60 font-bold flex items-center space-x-1">
            <Radio className="w-3.5 h-3.5 text-spider-red animate-pulse" />
            <span>ESTABELECER_DIMENSION_LINK</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
            ENTRAR EM <span className="text-spider-cyan">CONTACTO</span>
          </h2>
          <div className="w-24 h-1 bg-spider-cyan mt-3 transform -skew-x-12" />
          <p className="text-gray-400 font-sans text-sm max-w-xl mt-4">
            Envie uma mensagem codificada através do compilador ou acesse os portais sociais diretos. Conexão imediata garantida.
          </p>
        </div>

        {/* Info & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Social connection cards (Col-span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight flex items-center space-x-2">
              <span className="p-1 px-1.5 rounded bg-white/5 border border-white/10">
                <Wifi className="w-4.5 h-4.5 text-spider-pink" />
              </span>
              <span>PORTAIS DISPONÍVEIS</span>
            </h3>

            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              Trabalho de perto com clientes internacionais e agências de inovação. Sinta-se livre para iniciar contacto seguro através dos canais abaixo.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 bg-spider-card p-4 rounded-lg border border-white/5 transition-all duration-300 ${link.hoverGlow} transform hover:-translate-y-1`}
                >
                  <div className="p-2.5 rounded bg-spider-dark border border-white/10">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#fafafa] uppercase text-xs leading-none">
                      {link.name}
                    </h4>
                    <span className="font-mono text-xs text-gray-400 mt-1 block">
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Simulated Live Satellite Feed Board */}
            <div className="p-4 rounded-lg bg-[#0a0a10] border border-spider-cyan/15 text-xs text-slate-400 space-y-2 font-mono">
              <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/5 text-gray-500">
                <span>ESTAÇÃO_REGISTO_ONLINE_LOCAL</span>
                <span className="flex items-center space-x-1"><Wifi className="w-3 h-3 text-spider-pink" /> SYNCED</span>
              </div>
              <div className="flex justify-between">
                <span>TIME_STAMP_GMT:</span>
                <span className="text-white">{currentTime || 'CONECTANDO REÓLGIO...'}</span>
              </div>
              <div className="flex justify-between">
                <span>SERVER_ORBIT:</span>
                <span className="text-spider-cyan">Express-V4 / Node @ Cloud Env</span>
              </div>
              <div className="flex justify-between">
                <span>SEG_FREQUENCE:</span>
                <span className="text-[#efff33]">LOCKED (Earth-1610)</span>
              </div>
            </div>
          </div>

          {/* Futuristic Transceiver Form Compiler (Col-span 7) */}
          <div className="lg:col-span-7 bg-spider-card rounded-xl p-6 sm:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-halftone opacity-[0.03] pointer-events-none" />
            
            <div className="font-mono text-[10px] text-gray-500 mb-6 flex items-center justify-between border-b border-white/5 pb-3">
              <span className="flex items-center space-x-1"><Terminal className="w-3.5 h-3.5 text-spider-pink" /> <span>SECURE_COMPILER_V1.0</span></span>
              <span>DIMENSION_LINK_READY</span>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Seu Nome / Matriz:</label>
                    <input
                      required
                      type="text"
                      name="name"
                      disabled={isCompiling}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Miles Morales"
                      className="w-full bg-spider-dark/95 border border-white/5 focus:border-spider-cyan focus:outline-none rounded px-4 py-3 text-sm text-white font-mono placeholder:text-gray-600 font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Seu Email Digital:</label>
                    <input
                      required
                      type="email"
                      name="email"
                      disabled={isCompiling}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex: miles@earth1610.com"
                      className="w-full bg-spider-dark/95 border border-white/5 focus:border-spider-cyan focus:outline-none rounded px-4 py-3 text-sm text-white font-mono placeholder:text-gray-600 font-medium"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-gray-400 uppercase">Linha de Assunto:</label>
                  <input
                    type="text"
                    name="subject"
                    disabled={isCompiling}
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ex: Novo Portal de Sincronização de Dados"
                    className="w-full bg-spider-dark/95 border border-white/5 focus:border-spider-cyan focus:outline-none rounded px-4 py-3 text-sm text-white font-mono placeholder:text-gray-600 font-medium"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-gray-400 uppercase">Sua Mensagem Codificada:</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    disabled={isCompiling}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Transmita suas coordenadas de negócios..."
                    className="w-full bg-spider-dark/95 border border-white/5 focus:border-spider-cyan focus:outline-none rounded px-4 py-3 text-sm text-white font-mono placeholder:text-gray-600 font-medium resize-none"
                  />
                </div>

                {/* Compiler active loading logs */}
                <AnimatePresence>
                  {isCompiling && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-black/90 rounded border border-spider-cyan/20 p-4.5 font-mono text-[11px] space-y-1 pt-3"
                    >
                      <div className="text-gray-500 uppercase flex items-center space-x-1.5 sm:space-x-2">
                        <span className="w-1.5 h-1.5 bg-spider-cyan rounded-full animate-ping" />
                        <span>AGUARDE: TRANSMISSÃO EM COMPILAÇÃO...</span>
                      </div>
                      
                      <div className="space-y-1 pt-1 border-t border-white/5">
                        {steps.map((step, idx) => (
                          <div 
                            key={idx}
                            className={`${compileStep >= idx ? 'text-spider-cyan' : 'text-gray-600'} transition-colors duration-300 flex items-start space-x-1.5`}
                          >
                            <span>[{compileStep > idx ? 'COMPILE_OK' : (compileStep === idx ? 'COMPILING' : 'STBY')}]</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit trigger buttons */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isCompiling}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded font-mono font-bold text-xs uppercase bg-white text-spider-dark hover:bg-spider-cyan hover:scale-[1.01] transform transition-all duration-200 shadow-[4px_4px_0px_0px_#ff007f] disabled:opacity-40"
                  >
                    <span>Enviar Coordenadas</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-spider-cyan/10 border border-spider-cyan flex items-center justify-center text-spider-cyan animate-bounce">
                  <CheckCircle className="w-7 h-7" />
                </div>
                
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                  TRANSMISSÃO DISPARADA DIRETAMENTE!
                </h3>
                
                <p className="font-mono text-xs text-slate-400 max-w-sm">
                  O sinal e as coordenadas foram compilados e preparados diretamente para o endereço <span className="text-spider-cyan">dilsonandrew0@gmail.com</span> no seu cliente de email padrão.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2.5 rounded font-mono text-xs font-bold uppercase bg-spider-dark border border-white/10 text-white hover:border-spider-pink transition-colors"
                >
                  Confirmar & Resetar Canal
                </button>
              </motion.div>
            )}

            {/* Matrix styled bottom layout markers */}
            <div className="absolute right-3 bottom-2 font-mono text-[9px] text-gray-550 select-none">
              COORD_LOCK: SECURE_LINK
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
