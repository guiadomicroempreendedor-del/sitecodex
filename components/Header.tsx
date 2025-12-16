import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-lite-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
            className="text-3xl font-display font-bold text-white tracking-tight cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SITE<span className="text-lite-neon">CODEX™</span>
        </div>
        
        {/* Mobile-First: Hide nav links on small screens, show CTA */}
        <div className="flex items-center gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
             <Button variant="outline" className="text-xs py-2 px-4 border-opacity-50 !font-semibold">
                Falar Agora
             </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;