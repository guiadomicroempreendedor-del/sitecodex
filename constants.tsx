import React from 'react';

// Contact Info
export const WHATSAPP_NUMBER = '5562995104781';
export const WHATSAPP_MESSAGE = 'Olá, vim do seu site e gostaria de mais informações. Tenho interesse.';
export const INSTAGRAM_URL = 'https://www.instagram.com/sitecodex/#'; // Placeholder
export const ADDRESS_LINE_1 = 'AV. UBALDINA NAVES DE BRITO N°910';
export const ADDRESS_LINE_2 = 'BALNEÁRIO MEIA PONTE, GOIÂNIA, GOIÁS';
export const PHONE_DISPLAY = '+55 62 99510-4781';

// Portfolio Data
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Bistrô Sabor & Arte',
    category: 'Cardápio Digital',
    imageUrl: 'https://picsum.photos/id/42/800/1000',
    projectUrl: '#',
  },
  {
    id: 2,
    title: 'Dr. Ricardo Silva',
    category: 'Advocacia',
    imageUrl: 'https://picsum.photos/id/48/800/1000',
    projectUrl: '#',
  },
  {
    id: 3,
    title: 'Estética Glow',
    category: 'Landing Page',
    imageUrl: 'https://picsum.photos/id/64/800/1000',
    projectUrl: '#',
  },
  {
    id: 4,
    title: 'Tech Solutions',
    category: 'Institucional',
    imageUrl: 'https://picsum.photos/id/180/800/1000',
    projectUrl: '#',
  },
  {
    id: 5,
    title: 'Barbearia Vintage',
    category: 'Agendamento',
    imageUrl: 'https://picsum.photos/id/338/800/1000',
    projectUrl: '#',
  },
  {
    id: 6,
    title: 'FitLife Gym',
    category: 'Landing Page',
    imageUrl: 'https://picsum.photos/id/342/800/1000',
    projectUrl: '#',
  },
  {
    id: 7,
    title: 'Arq. Mariana Souza',
    category: 'Portfólio',
    imageUrl: 'https://picsum.photos/id/435/800/1000',
    projectUrl: '#',
  },
  {
    id: 8,
    title: 'Café do Ponto',
    category: 'Cardápio Digital',
    imageUrl: 'https://picsum.photos/id/493/800/1000',
    projectUrl: '#',
  },
  {
    id: 9,
    title: 'Solar Energy',
    category: 'Institucional',
    imageUrl: 'https://picsum.photos/id/531/800/1000',
    projectUrl: '#',
  },
  {
    id: 10,
    title: 'PetShop Amigo',
    category: 'E-commerce',
    imageUrl: 'https://picsum.photos/id/593/800/1000',
    projectUrl: '#',
  },
];

// SVG Icons
export const ICONS = {
  Rocket: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  Search: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  WhatsApp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.917-.446-.446 0-.818.173-1.24.644-.422.47-1.611 1.586-1.611 3.861 0 2.275 1.659 4.482 1.882 4.779.223.297 3.264 4.985 7.907 6.992 4.643 2.007 4.643 1.336 4.098 1.287.545-.049 1.758-.718 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
    </svg>
  ),
  Instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
};