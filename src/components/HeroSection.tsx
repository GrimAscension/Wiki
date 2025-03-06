
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the percentage position of the mouse
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      // Calculate parallax values
      const moveX = (x - 0.5) * 20;  // Adjust the multiplier for effect strength
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2023&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/95"></div>
      
      <div className="container relative z-10 text-center px-4 mt-16">
        <div className="inline-block mb-6 animate-pulse-subtle">
          <span className="px-3 py-1 text-xs uppercase tracking-wider font-medium bg-primary/10 backdrop-blur-sm rounded-full">
            3D Roblox Action RPG
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
          Grim Ascension
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
          Survival in a brutal world through real-time combat, species evolution, and balanced class progression
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#gameplay" className="px-6 py-3 bg-primary text-primary-foreground rounded-md transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg">
            Explore Gameplay
          </a>
          <a href="#evolution" className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md transition-all duration-300 hover:bg-primary/5">
            Species Evolution
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#overview" aria-label="Scroll to overview">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
