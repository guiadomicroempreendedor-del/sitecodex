import React, { Suspense } from 'react';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';

// Lazy load Portfolio
const Portfolio = React.lazy(() => import('./Portfolio'));

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Suspense fallback={
        <div className="h-96 flex items-center justify-center bg-[#0d121d]">
          <div className="w-8 h-8 border-4 border-lite-neon border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Portfolio />
      </Suspense>
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;