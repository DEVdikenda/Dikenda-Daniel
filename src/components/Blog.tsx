import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { blogItems } from '../data.ts';

// Detailed content for reading simulation
const blogContents: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  'post-1': {
    title: 'O Impacto da Arquitetura de Microsserviços na Web Escansível',
    category: 'Backend',
    date: '10 de Junho de 2026',
    readTime: '6 min de leitura',
    content: [
      'Atualmente, o desenvolvimento de aplicações web que suportam altos volumes de tráfego exige abordagens que superem as limitações estruturais dos tradicionais monólitos. É nesse espaço que se consolida a arquitetura de microsserviços.',
      'Diferente do monólito, onde todas as regras de negócio residem em uma única base de código e runtime acoplado, os microsserviços segregam a aplicação em pequenas unidades independentes em termos de desenvolvimento, implantação, banco de dados e escalabilidade.',
      'Sistemas corporativos estruturados com microsserviços usam barramentos de filas transacionais de mensageria rápida (como Kafka ou RabbitMQ) e gateways de alto nível (NestJS, Express ou Go) para direcionar as rotas de tráfego com latências insignificantes e com segurança criptográfica de dados.',
      'Com essa arquitetura de ponta, as instâncias de serviços podem falhar de forma isolada sem prejudicar a integridade global do ecossistema, garantindo uma disponibilidade que ultrapassa em muito os 99.9% esperados de grandes plataformas modernas.'
    ]
  },
  'post-2': {
    title: 'React 19 e as Novas Dimensões de Performance no Client-Side',
    category: 'Frontend',
    date: '28 de Maio de 2026',
    readTime: '5 min de leitura',
    content: [
      'O lançamento do React 19 traz uma série de melhorias que simplificam drasticamente o gerenciamento de estados assíncronos e a interação com elementos nativos do DOM.',
      'Uma das grandes novidades são as "Actions". Com o uso nativo de funções assíncronas em formulários e manipulações de eventos (por exemplo, a prop action em tags form), o React cuida automaticamente do ciclo de estados pendentes, tratamento resiliente de erros e otimizações otimistas de dados de tela.',
      'Além disso, a integração direta com Server Components desonera o tamanho final do bundle de script enviado ao navegador, melhorando as pontuações cruciais de Core Web Vitals (como LCP e CLS) e assegurando tempo de carregamento cinematográfico para utilizadores móveis.',
      'Também fomos presenteados com o hook use() para consumo direto de promises e contexts, e a otimização automática de referências ref como prop de componente padrão, reduzindo o código boilerplate desnecessário.'
    ]
  },
  'post-3': {
    title: 'Por Que Você Deve Migrar Suas Conexões de DB para SQL Relacional',
    category: 'Bases de Dados',
    date: '15 de Maio de 1826',
    readTime: '8 min de leitura',
    content: [
      'Nas últimas décadas, a febre de bases de dados NoSQL (como MongoDB) gerou uma tendência de design focado na flexibilidade de modelos não-estruturados de dados.',
      'No entanto, à medida que um software cresce e atende a workflows corporativos complexos, a ausência de relacionamentos consistentes e transações ACID rígidas pode se tornar uma armadilha para integridade lógica das regras fundamentais da empresa.',
      'Bancos relacionais modernos, com maior destaque para o PostgreSQL, trazem conformidade ACID exemplar, índices complexos parciais e suporte avançado de dados em formato JSON nativo para colunas híbridas rápidas.',
      'Isto significa que você pode desfrutar da flexibilidade de esquemas mutáveis em campos específicos, ao mesmo tempo em que mantém a integridade absoluta, consultas analíticas com junções (joins) altamente eficientes e restrições de chaves estrangeiras sólidas.'
    ]
  }
};

export default function Blog() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleOpenPost = (id: string) => {
    setSelectedPostId(id);
  };

  const handleClosePost = () => {
    setSelectedPostId(null);
  };

  const activePostDetails = selectedPostId ? blogContents[selectedPostId] : null;

  return (
    <section id="blog" className="relative py-24 bg-spider-dark bg-halftone-cyan opacity-100 border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-spider-cyan/40 to-transparent" />
      <div className="absolute top-[40%] right-10 w-[1.5px] h-32 bg-spider-pink" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ececec]/60 font-bold flex items-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5 text-spider-cyan" />
            <span>PORTAL_EDITORIAL_DIARY</span>
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
            BLOG DE <span className="text-spider-pink">ARTIGOS</span>
          </h2>
          <div className="w-16 h-1 bg-spider-pink mt-3 transform -skew-x-12" />
          <p className="text-gray-400 font-sans text-sm max-w-xl mt-4">
            Opiniões de engenharia de software, inovações conceituais de web design, dicas de carreira de TI e desenvolvimento de alta performance.
          </p>
        </div>

        {/* Blog Post Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogItems.map((item, idx) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-spider-card rounded-xl border border-white/5 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-spider-pink/40 hover:shadow-[0_8px_30px_rgba(255,0,127,0.1)] transition-all duration-300"
              onClick={() => handleOpenPost(item.id)}
            >
              <div className="space-y-4">
                {/* Post Cover image frame */}
                <div className="aspect-[16/10] w-full overflow-hidden relative select-none bg-spider-dark">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-spider-dark/95 border border-spider-pink/35 text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded text-spider-pink">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-comic-lines opacity-10 pointer-events-none" />
                </div>

                {/* Info and title description */}
                <div className="p-5.5 space-y-3">
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-spider-cyan" />
                      <span>{item.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-[#efff33]" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-lg text-white group-hover:text-spider-cyan transition-colors leading-snug uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button anchor */}
              <div className="p-5.5 pt-0">
                <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-spider-pink group-hover:text-spider-cyan transition-colors mt-2">
                  <span>Lêr Artigo Integral</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* High-Fidelity Article Modal simulator */}
      <AnimatePresence>
        {selectedPostId && activePostDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-spider-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleClosePost}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-spider-card border border-white/10 p-6 sm:p-10 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close pin */}
              <button
                onClick={handleClosePost}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-spider-pink hover:text-white transition-colors border border-white/10"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Badge info */}
              <div className="inline-flex items-center space-x-2 bg-spider-pink/15 border border-spider-pink/30 text-spider-pink px-2.5 py-1 rounded font-mono text-xs uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{activePostDetails.category}</span>
              </div>

              {/* Title display */}
              <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight mb-4">
                {activePostDetails.title}
              </h2>

              {/* Article metadata info */}
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400 border-b border-white/5 pb-6 mb-6">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-spider-cyan" />
                  <span>{activePostDetails.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-[#efff33]" />
                  <span>{activePostDetails.readTime}</span>
                </span>
                <span className="text-gray-500">Subject-A #1610</span>
              </div>

              {/* Simulated Article Body Content */}
              <div className="space-y-5 font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                {activePostDetails.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Comic dot design details */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-halftone opacity-5 pointer-events-none rounded-br-xl" />
              <div className="mt-12 pt-6 border-t border-white/5 flex justify-end">
                <button
                  onClick={handleClosePost}
                  className="px-6 py-2.5 rounded font-mono text-xs font-bold uppercase bg-spider-dark border border-white/10 text-[#ccc] hover:border-spider-pink hover:text-white transition-colors"
                >
                  Concluir Leitura
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
