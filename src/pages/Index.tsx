
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameplaySection from '@/components/GameplaySection';
import EvolutionSection from '@/components/EvolutionSection';
import ClassesSection from '@/components/ClassesSection';
import WorldSection from '@/components/WorldSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hash = target.getAttribute('href');
        if (hash) {
          const section = document.querySelector(hash);
          if (section) {
            section.scrollIntoView({
              behavior: 'smooth'
            });
            
            // Update URL without triggering a page reload
            window.history.pushState(null, '', hash);
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  // Intersection observer for revealing elements
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-element');
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Section for the overview content
  const OverviewSection = () => (
    <section id="overview" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Overview</h2>
            <p className="text-lg leading-relaxed mb-8">
              <em>Grim Ascension</em> immerses you in a brutal world where every encounter counts. Split into two parts—Dire Reckoning 
              (early-to-mid game) and The Final Verdict (advanced endgame challenges and multiplayer)—this game emphasizes 
              realistic combat, gradual evolution, and strategic progression. Your skills, rather than raw power, determine 
              your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Dire Reckoning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Early-to-mid game progression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Learn core combat mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Permanent death consequences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Initial class abilities and species traits</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">The Final Verdict</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Advanced endgame challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Multiplayer experiences and PvP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Evolution Stone acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                    <span>Advanced class abilities and special events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <GameplaySection />
        <EvolutionSection />
        <ClassesSection />
        <WorldSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
