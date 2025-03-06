
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Evolution', href: '#evolution' },
    { label: 'Classes', href: '#classes' },
    { label: 'World', href: '#world' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Grim Ascension</h1>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`
        fixed inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300 md:hidden
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        pt-20
      `}>
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
