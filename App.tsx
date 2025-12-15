import React, { Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Contact from './components/Contact';

// Lazy load Portfolio for performance improvement
const Portfolio = React.lazy(() => import('./components/Portfolio'));

const App: React.FC = () => {
  
  // Basic console greeting
  useEffect(() => {
    console.log("%c SITECODEX™ ", "background: #06b6d4; color: #0a0e17; font-weight: bold; padding: 4px; border-radius: 2px;");
  }, []);

  return (
    <div className="min-h-screen bg-lite-dark text-slate-100 font-sans selection:bg-lite-neon selection:text-lite-dark">
      <Header />
      
      <main>
        <Hero />
        <Features />
        
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center bg-[#0d121d]">
            <div className="w-8 h-8 border-4 border-lite-neon border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Portfolio />
        </Suspense>

        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;