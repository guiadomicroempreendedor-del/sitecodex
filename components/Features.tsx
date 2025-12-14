import React from 'react';
import { ICONS } from '../constants';

const Features: React.FC = () => {
  const features = [
    {
      icon: ICONS.Search,
      title: 'Invisível no Google?',
      desc: 'Seu cliente procura seu serviço, mas encontra seu concorrente. Mudamos isso com SEO básico otimizado.'
    },
    {
      icon: ICONS.Mobile,
      title: 'Design Mobile-First',
      desc: '90% dos seus clientes acessam pelo celular. Criamos sites leves que carregam instantaneamente em qualquer rede.'
    },
    {
      icon: ICONS.Rocket,
      title: 'Foco em Conversão',
      desc: 'Botões de WhatsApp estratégicos e layout pensado para transformar cliques em pedidos no seu "zap".'
    }
  ];

  return (
    <section className="py-20 bg-lite-dark relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative p-8 bg-lite-surface hover:bg-lite-surface/80 transition-colors duration-300"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
              }}
            >
              {/* Decorative Corner Line */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lite-neon/20 group-hover:border-lite-neon transition-colors duration-300" />
              
              <div className="text-lite-neon mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="font-sans text-lite-metal leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Value Prop Summary */}
        <div className="mt-16 text-center bg-gradient-to-r from-lite-surface to-lite-dark p-8 border-l-4 border-lite-neon">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
            Pare de perder dinheiro.
          </h2>
          <p className="font-sans text-lite-metal max-w-2xl mx-auto">
            A LITECODEX entrega a solução técnica para você focar apenas no seu negócio. 
            Sem mensalidades abusivas, sem código lento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;