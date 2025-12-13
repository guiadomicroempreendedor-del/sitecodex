import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-12 px-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_10%,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Skeleton / Loading State for Text */}
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4 px-3 py-1 border border-lite-neon/30 bg-lite-neon/10 text-lite-neon text-xs font-display font-bold uppercase tracking-widest [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
            Para MEI e Autônomos
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
            Transforme Visitantes em <span className="text-lite-neon">Clientes Reais</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-lite-metal mb-10 max-w-2xl mx-auto leading-relaxed">
            Seu negócio precisa de mais do que um cartão de visitas. Tenha um site ou catálogo digital profissional que vende por você 24h por dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button fullWidth className="text-lg animate-pulse-slow shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Quero Vender Mais
              </Button>
            </a>
            
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button variant="outline" fullWidth className="text-lg">
                Ver Projetos
              </Button>
            </a>
          </div>
          
          <p className="mt-6 text-xs font-sans text-lite-metal/60">
            * Orçamento sem compromisso. Resposta rápida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;