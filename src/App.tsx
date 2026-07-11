import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import DistroSelection from './components/DistroSelection';
import TutorialsSection from './components/TutorialsSection';
import FeedbackSection from './components/FeedbackSection';
import DisclaimerBanner from './components/DisclaimerBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LicenseSection from './components/LicenseSection';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentView, setCurrentView] = useState<'home' | 'ubuntu' | 'license'>(() => {
    const hash = window.location.hash;
    if (hash.includes('ubuntu')) return 'ubuntu';
    if (hash.includes('license')) return 'license';
    return 'home';
  });

  const [feedbackOpen, setFeedbackOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('ubuntu')) {
        setCurrentView('ubuntu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('license')) {
        setCurrentView('license');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('fedora')) {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('distros');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-proton-dark-bg text-neutral-900 dark:text-neutral-100 dark-mode-transition selection:bg-proton-purple/30">
      
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        openFeedback={() => setFeedbackOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="relative">
        {/* Decorative subtle background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden opacity-30 dark:opacity-20 z-0">
          <div className="absolute -top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-400 blur-[120px]"></div>
          <div className="absolute -top-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-violet-400 blur-[120px]"></div>
        </div>

        {currentView === 'home' ? (
          <>
            {/* Disclaimer & MIT License Banner at the very top of homepage */}
            <DisclaimerBanner />

            {/* Section 1: Intro Section (Tanıtım Səhifəsi) */}
            <IntroSection />

            {/* Section 2: Distro Selection Guide (Dağıtım Seçimi - Concise & Side-by-side) */}
            <DistroSelection />

            {/* Section 4: Contact & Email form directly on homepage */}
            <ContactSection />
          </>
        ) : currentView === 'license' ? (
          <LicenseSection onBackToHome={handleBackToHome} />
        ) : (
          /* Sub-page view containing the detailed distro step guides and CasaOS installation */
          <TutorialsSection 
            onBackToHome={handleBackToHome} 
          />
        )}
      </main>

      {/* Footer & Code Placeholders */}
      <Footer />

      {/* Feedback Modal Email Dialog (Təkliflər üçün Email) */}
      <FeedbackSection 
        isOpen={feedbackOpen} 
        onClose={() => setFeedbackOpen(false)} 
      />
      
    </div>
  );
}
