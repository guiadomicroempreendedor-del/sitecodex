import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToFeatures = () => {
    const section = document.getElementById('features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-12 px-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_10%,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Skeleton / Loading State for Text */}
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
            PRESENÇA ONLINE PARA <span className="text-lite-neon">QUEM PRECISA VENDER</span>
          </h1>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide">
            Site simples, rápido e profissional
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-lite-metal mb-10 max-w-3xl mx-auto leading-relaxed text-center">
            Criamos sites do tipo <strong>catálogo / cardápio</strong> para facilitar a apresentação do seu negócio, receber pedidos no WhatsApp e melhorar sua presença no Google.
            <br/><br/>
            <span className="text-white font-semibold">Sem mensalidade. Sem complicação.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="w-full sm:w-auto">
              <Button 
                fullWidth 
                className="text-lg animate-pulse-slow shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                onClick={scrollToFeatures}
              >
                Entenda Como Funciona
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;