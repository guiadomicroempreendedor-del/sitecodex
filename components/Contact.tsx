import React, { useState } from 'react';
import Button from './ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'redirecting'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('redirecting');
    
    // Format the message for WhatsApp
    const text = `*Consulta Personalizada (LITECODE)*\n\n` +
                 `*Nome:* ${formData.name}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Telefone:* ${formData.phone}\n` +
                 `*Dúvida/Necessidade:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Simulating a brief processing state for better UX before redirecting
    setTimeout(() => {
        window.open(url, '_blank');
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative bg-lite-dark border-t border-lite-surface/50">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 uppercase">Precisa de um plano diferente?</h2>
                <p className="font-sans text-lite-metal max-w-xl mx-auto text-lg">
                    Preencha os dados abaixo e entraremos em contato para entender sua necessidade.
                </p>
            </div>

            <div className="bg-lite-surface p-6 md:p-12 relative shadow-2xl" style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}>
                {/* Decorative corner */}
                 <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lite-neon/20" />
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-lite-neon/20" />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block font-display text-sm font-bold text-lite-neon uppercase tracking-widest">Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-lite-dark/50 border border-lite-metal/20 text-white p-4 focus:outline-none focus:border-lite-neon transition-colors placeholder-lite-metal/30 rounded-none font-sans"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block font-display text-sm font-bold text-lite-neon uppercase tracking-widest">WhatsApp / Telefone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-lite-dark/50 border border-lite-metal/20 text-white p-4 focus:outline-none focus:border-lite-neon transition-colors placeholder-lite-metal/30 rounded-none font-sans"
                                placeholder="(DDD) 99999-9999"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-display text-sm font-bold text-lite-neon uppercase tracking-widest">E-mail (Opcional)</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-lite-dark/50 border border-lite-metal/20 text-white p-4 focus:outline-none focus:border-lite-neon transition-colors placeholder-lite-metal/30 rounded-none font-sans"
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block font-display text-sm font-bold text-lite-neon uppercase tracking-widest">Como podemos ajudar?</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-lite-dark/50 border border-lite-metal/20 text-white p-4 focus:outline-none focus:border-lite-neon transition-colors placeholder-lite-metal/30 resize-none rounded-none font-sans"
                            placeholder="Gostaria de um sistema SaaS ou um site institucional..."
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <Button type="submit" fullWidth disabled={status === 'redirecting'}>
                            <div className="flex items-center justify-center gap-2">
                                {status === 'redirecting' ? (
                                    'Abrindo WhatsApp...'
                                ) : (
                                    <>
                                        <span>Falar com Especialista</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.917-.446-.446 0-.818.173-1.24.644-.422.47-1.611 1.586-1.611 3.861 0 2.275 1.659 4.482 1.882 4.779.223.297 3.264 4.985 7.907 6.992 4.643 2.007 4.643 1.336 4.098 1.287.545-.049 1.758-.718 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
                                        </svg>
                                    </>
                                )}
                            </div>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;