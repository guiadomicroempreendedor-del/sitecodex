import React from 'react';
import Button from './ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

const Pricing: React.FC = () => {

  const getWhatsAppLink = (planName: string) => {
      const message = `Olá, tenho interesse no ${planName}. Gostaria de começar agora.`;
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="investment" className="py-20 bg-[#080b12] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-lite-neon/5 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Investimento</h2>
            <p className="font-sans text-lite-metal max-w-2xl mx-auto leading-relaxed mb-4">
                Agências e freelancers costumam cobrar entre <strong>R$500 e R$700</strong> por um site como este.
            </p>
            <p className="font-sans text-white max-w-2xl mx-auto leading-relaxed">
                Nosso valor está reduzido por tempo limitado porque conhecemos, na prática, o desafio de empreender no Brasil.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD STARTER */}
            <div className="flex flex-col bg-lite-surface p-8 border border-lite-metal/20 hover:border-lite-neon/30 transition-colors duration-300 relative group">
                <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-lite-neon uppercase mb-4">Plano Starter</h3>
                    <div className="flex items-end gap-2 mb-1">
                        <span className="text-lite-metal line-through font-sans">De R$350</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-white text-4xl font-bold font-display">Por R$70</span>
                    </div>
                </div>
                
                <div className="space-y-3 mb-8 flex-grow font-sans text-sm text-slate-300">
                    <p className="flex items-center gap-2"><span className="text-lite-neon">✓</span> Pagamento único</p>
                    <p className="flex items-center gap-2"><span className="text-lite-neon">✓</span> Sem mensalidade</p>
                </div>

                <a href={getWhatsAppLink('Plano Starter')} target="_blank" rel="noopener noreferrer">
                    <Button fullWidth className="group-hover:bg-lite-neonHover">
                        Quero começar agora
                    </Button>
                </a>
            </div>

            {/* CARD PLUS */}
            <div className="flex flex-col bg-lite-surface p-8 border border-lite-neon/40 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative">
                <div className="absolute top-0 right-0 bg-lite-neon text-lite-dark text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Mais Popular
                </div>
                
                <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">Plano Start Plus</h3>
                    <div className="flex items-end gap-2 mb-1">
                        <span className="text-lite-metal line-through font-sans">De R$500</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-white text-4xl font-bold font-display">Por R$150</span>
                    </div>
                </div>
                
                <div className="space-y-3 mb-8 flex-grow font-sans text-sm text-slate-300">
                     <p className="flex items-center gap-2"><span className="text-lite-neon">✓</span> Pagamento único</p>
                     <p className="flex items-center gap-2"><span className="text-lite-neon">✓</span> Sem mensalidade</p>
                </div>

                <a href={getWhatsAppLink('Plano Start Plus')} target="_blank" rel="noopener noreferrer">
                    <Button fullWidth variant="primary">
                        Quero começar agora
                    </Button>
                </a>
            </div>

        </div>

        <div className="mt-12 text-center">
            <p className="font-sans text-lite-neon text-sm uppercase tracking-widest font-bold">
                Oferta válida até 15/04/2026.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;