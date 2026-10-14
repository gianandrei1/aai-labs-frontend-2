import React, { useState, useEffect } from 'react';
import SiteNavigation from './components/SiteNavigation';
import SimplifiedHero from './components/SimplifiedHero';
import FourSolutionsTabs from './components/FourSolutionsTabs';
import SelectedCaseStudy from './components/SelectedCaseStudy';
import SimplifiedCTA from './components/SimplifiedCTA';
import DedicatedSolutionPage from './components/DedicatedSolutionPage';
import MainFooter from './components/MainFooter';
import { SOLUTION_AREAS } from './data/solutionsData';

function App() {
  // 'home' or a specific solution ID ('error-detection', 'quoting', 'ai-agents', 'custom-solutions')
  const [currentView, setCurrentView] = useState('home');
  const [activeAreaId, setActiveAreaId] = useState('error-detection');

  // Handle URL hash changes or browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['error-detection', 'quoting', 'ai-agents', 'custom-solutions'].includes(hash)) {
        setCurrentView(hash);
        setActiveAreaId(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === 'solutions' || hash === 'cases' || hash === 'contact') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectArea = (id) => {
    setActiveAreaId(id);
    if (currentView !== 'home') {
      setCurrentView(id);
      window.location.hash = id;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateDedicated = (id) => {
    setCurrentView(id);
    setActiveAreaId(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeDedicatedArea = SOLUTION_AREAS.find((a) => a.id === currentView);

  return (
    <div className="bg-black text-white antialiased selection:bg-white selection:text-black min-h-screen flex flex-col font-sans relative">
      {/* Background Vertical Lines */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-between px-6 md:px-[48px] lg:px-[80px] xl:px-[120px] max-w-[1920px] mx-auto">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%)',
              opacity: 0.5
            }}
          ></div>
        ))}
      </div>

      {/* Top Navigation Bar Container */}
      <SiteNavigation />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10" id="main">
        {currentView === 'home' ? (
          <>
            {/* Section 1: Hero */}
            <SimplifiedHero
              onExploreSolutions={() => {
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Section 2 & 3: 4 Core Solution Areas + Active Solution Preview */}
            <FourSolutionsTabs
              activeAreaId={activeAreaId}
              onSelectArea={handleSelectArea}
              onNavigateDedicated={handleNavigateDedicated}
            />

            {/* Section 4: Selected Case Study */}
            <SelectedCaseStudy
              activeAreaId={activeAreaId}
              onNavigateDedicated={handleNavigateDedicated}
            />

            {/* Section 5: Final CTA */}
            <SimplifiedCTA />
          </>
        ) : (
          /* Section 3: Dedicated Solution Detail Page */
          <DedicatedSolutionPage
            area={activeDedicatedArea}
            onBack={handleNavigateHome}
            onSelectArea={handleNavigateDedicated}
          />
        )}
      </main>

      {/* Industrial Footer */}
      <MainFooter
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
}

export default App;
