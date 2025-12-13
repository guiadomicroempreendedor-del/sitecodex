import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, ICONS } from '../constants';

const FloatingCTA: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 active:scale-95 [clip-path:polygon(20%_0,100%_0,100%_80%,80%_100%,0_100%,0_20%)]"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        <div className="w-8 h-8 animate-pulse-slow">
           {ICONS.WhatsApp}
        </div>
        
        {/* Tooltip for desktop hover */}
        <span className="absolute left-full ml-4 bg-lite-surface text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block border border-lite-metal/30">
          Orçamento Rápido
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;