
import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('it-IT', options));

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="magazine-container">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo/Brand */}
          <div className="flex items-center justify-center flex-1 lg:justify-start">
            <h1 className="text-4xl font-bold uppercase tracking-tighter">
              GRAZIA
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Moda', 'Bellezza', 'Lifestyle', 'Cultura', 'Celebrity'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm uppercase tracking-wider hover:text-magazine-yellow transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Search icon */}
          <div className="flex items-center">
            <button className="p-2" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </div>
        
        {/* Date display */}
        <div className="hidden lg:flex justify-center mt-2">
          <p className="text-xs uppercase tracking-widest">{currentDate}</p>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20 animate-fade-in">
          <div className="flex flex-col items-center space-y-6 p-8">
            {['Moda', 'Bellezza', 'Lifestyle', 'Cultura', 'Celebrity'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xl uppercase tracking-wider hover:text-magazine-yellow transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <p className="text-xs uppercase tracking-widest mt-8">{currentDate}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
