import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  
  // Basic console greeting
  useEffect(() => {
    console.log("%c SITECODEX™ ", "background: #06b6d4; color: #0a0e17; font-weight: bold; padding: 4px; border-radius: 2px;");
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-lite-dark text-slate-100 font-sans selection:bg-lite-neon selection:text-lite-dark flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
          </Routes>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
};

export default App;