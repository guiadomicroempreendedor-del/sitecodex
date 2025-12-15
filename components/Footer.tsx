import React from 'react';
import { ICONS, ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_DISPLAY, INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lite-dark border-t border-lite-surface pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand & Social */}
          <div>
            <div className="font-display text-3xl font-bold text-white tracking-tight mb-6 uppercase">
              SITE<span className="text-lite-neon">CODEX™</span>
            </div>
            <p className="font-sans text-lite-metal mb-6 max-w-xs">
              Soluções digitais rápidas e eficientes para quem precisa vender hoje.
            </p>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-lite-neon transition-colors gap-2"
              aria-label="Siga no Instagram"
            >
              {ICONS.Instagram}
              <span className="font-display font-bold tracking-wide">@sitecodex</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-sm text-lite-metal">
            <h4 className="font-display text-white font-bold uppercase tracking-wider mb-2">Contato</h4>
            <p className="font-sans">
              <strong className="text-white block mb-1">Endereço:</strong>
              {ADDRESS_LINE_1}<br/>
              {ADDRESS_LINE_2}
            </p>
            <p className="font-sans">
              <strong className="text-white block mb-1">Telefone:</strong>
              <a href={`tel:${PHONE_DISPLAY.replace(/\D/g,'')}`} className="hover:text-lite-neon transition-colors">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-lite-surface pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-lite-metal/50 gap-4">
          <p className="font-sans">&copy; {new Date().getFullYear()} SITECODEX™. Todos os direitos reservados.</p>
          <div className="flex gap-4 font-sans">
            <span>Privacidade</span>
            <span>Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;