import React from 'react';
import { ICONS } from '../constants';
import Button from './ui/Button';

const Features: React.FC = () => {

  const scrollToInvestment = () => {
    const section = document.getElementById('investment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-20 bg-lite-dark relative">
      <div className="container mx-auto px-4 max-w-5xl space-y-24">
        
        {/* 1. PARA QUEM É */}
        <div className="border-l-4 border-lite-neon pl-6 md:pl-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Para quem é
          </h2>
          <p className="font-sans text-lg text-lite-metal leading-relaxed">
            Para <strong>MEI e profissionais autônomos</strong> que precisam estar online, mas não querem gastar com soluções caras ou difíceis de manter.
          </p>
        </div>

        {/* 2. PLANO STARTER (Detalhes) */}
        <div>
          <h3 className="font-display text-3xl font-bold text-white mb-2 uppercase">Plano Starter</h3>
          <p className="font-sans text-lite-metal mb-6">O básico bem feito para começar agora.</p>
          <p className="font-sans text-slate-300 mb-8 leading-relaxed">
            Você passa a ter um site próprio, organizado e fácil de usar, que ajuda o cliente a entender seu produto e entrar em contato rapidamente.
          </p>

          <div className="bg-lite-surface p-8 border border-lite-metal/20 mb-8 relative">
            <h4 className="font-display text-lg text-lite-neon font-bold uppercase mb-4 tracking-wider">O que está incluso:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-slate-300">
              <li className="flex items-center gap-2">• Landing page (página única)</li>
              <li className="flex items-center gap-2">• Até 30 itens</li>
              <li className="flex items-center gap-2">• Até 5 categorias</li>
              <li className="flex items-center gap-2">• Domínio grátis</li>
              <li className="flex items-center gap-2">• SEO básico</li>
              <li className="flex items-center gap-2">• Botão de WhatsApp</li>
              <li className="flex items-center gap-2">• Botões de redes sociais</li>
              <li className="flex items-center gap-2">• Site adaptado para celular</li>
              <li className="flex items-center gap-2">• Simulação de pedido</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-lite-metal/20 space-y-2">
                <p className="flex items-center gap-2 text-lite-neon font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Sem mensalidade
                </p>
                <p className="flex items-center gap-2 text-lite-neon font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Alterações após a entrega são cobradas à parte
                </p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <Button variant="outline" onClick={scrollToInvestment}>Quero meu site</Button>
          </div>
        </div>

        {/* 3. PLANO START PLUS (Detalhes) */}
        <div>
           <h3 className="font-display text-3xl font-bold text-white mb-2 uppercase">Plano Start Plus</h3>
           <p className="font-sans text-lite-metal mb-4">Mais visibilidade local no Google</p>
           <p className="font-sans text-slate-300 mb-6 leading-relaxed">
             Ideal para quem quer ser encontrado com mais facilidade por clientes da região.
           </p>
           <div className="bg-lite-surface/50 p-6 border-l-4 border-lite-metal">
                <p className="font-sans text-sm text-lite-metal mb-2 uppercase tracking-wide font-bold">Inclui tudo do Plano Starter +</p>
                <ul className="space-y-2 font-sans text-slate-300">
                    <li className="flex items-center gap-2">• Criação ou otimização do Google Meu Negócio</li>
                    <li className="flex items-center gap-2">• Configuração para buscas locais</li>
                    <li className="flex items-center gap-2">• Integração do site com o Google</li>
                </ul>
           </div>
           <div className="mt-6 text-center md:text-left">
             <Button variant="outline" onClick={scrollToInvestment}>Quero aparecer no Google</Button>
           </div>
        </div>

        <div className="w-full h-px bg-lite-metal/20 my-8"></div>

        {/* 4. POR QUE COBRAMOS MENOS */}
        <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
                Por que conseguimos cobrar menos?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-display text-lite-neon font-bold uppercase mb-2">Processo simples e padronizado.</h4>
                    <p className="font-sans text-lite-metal leading-relaxed">
                        Trabalhamos com código próprio, sem WordPress ou Wix.
                    </p>
                </div>
                <div>
                    <h4 className="font-display text-lite-neon font-bold uppercase mb-2">Foco em desempenho.</h4>
                    <p className="font-sans text-lite-metal leading-relaxed">
                        Seu site é desenvolvido por programadores, focado em desempenho e objetividade.
                    </p>
                </div>
            </div>
        </div>

        {/* 5. O QUE NÃO ESTÁ INCLUSO */}
        <div className="bg-red-900/10 p-8 border border-red-500/20">
             <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase">
                O que <span className="text-red-400">não</span> está incluso
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-lite-metal">
                <li className="flex items-center gap-2 text-slate-400"><span className="text-red-500/50 text-xl">•</span> Alterações após a entrega</li>
                <li className="flex items-center gap-2 text-slate-400"><span className="text-red-500/50 text-xl">•</span> Novos textos ou imagens</li>
                <li className="flex items-center gap-2 text-slate-400"><span className="text-red-500/50 text-xl">•</span> SEO avançado</li>
                <li className="flex items-center gap-2 text-slate-400"><span className="text-red-500/50 text-xl">•</span> Anúncios</li>
                <li className="flex items-center gap-2 text-slate-400"><span className="text-red-500/50 text-xl">•</span> Manutenção contínua</li>
            </ul>
            <p className="mt-6 font-sans text-sm text-slate-500 italic">Contratado apenas se você precisar.</p>
        </div>

        {/* 6. COMO FUNCIONA */}
        <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 uppercase text-center">Como funciona</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-lite-surface">
                    <span className="block text-5xl font-display font-bold text-lite-metal/20 mb-4">1</span>
                    <p className="font-sans text-white font-bold mb-2">Você escolhe o plano</p>
                </div>
                <div className="p-6 bg-lite-surface">
                    <span className="block text-5xl font-display font-bold text-lite-metal/20 mb-4">2</span>
                    <p className="font-sans text-white font-bold mb-2">Envia as informações do negócio</p>
                </div>
                <div className="p-6 bg-lite-surface">
                    <span className="block text-5xl font-display font-bold text-lite-metal/20 mb-4">3</span>
                    <p className="font-sans text-white font-bold mb-2">Recebe seu site pronto</p>
                </div>
            </div>
        </div>

        {/* 7. QUER ALGO ALÉM? */}
        <div className="border border-lite-neon/20 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lite-neon/5 blur-[50px] rounded-full pointer-events-none"></div>
            <h3 className="font-display text-2xl font-bold text-white mb-4 uppercase">
                Quer algo além do Starter?
            </h3>
            <p className="font-sans text-lite-metal mb-6">Oferecemos soluções maiores conforme a necessidade:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 font-sans text-slate-300 mb-8">
                <li>• Hospedagem e domínio próprio (.com.br)</li>
                <li>• Sites institucionais</li>
                <li>• Mini sites</li>
                <li>• Sistemas SaaS</li>
                <li>• SEO avançado</li>
                <li>• Publicidade para sites</li>
                <li>• Copywriting</li>
            </ul>
        </div>

      </div>
    </section>
  );
};

export default Features;