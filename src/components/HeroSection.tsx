
import React, { useState, useEffect } from 'react';

type HeroArticle = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const featuredArticle: HeroArticle = {
    id: 1,
    title: "L'Arte della Moda Italiana",
    subtitle: "Come lo stile italiano continua a dominare le passerelle globali",
    category: "Moda",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };

  return (
    <section className="pt-28 lg:pt-32 pb-16">
      <div className="magazine-container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className={`reveal-container ${isVisible ? 'reveal' : ''} overflow-hidden h-[500px] lg:h-[600px]`}>
            <img 
              src={featuredArticle.imageUrl} 
              alt={featuredArticle.title} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isVisible ? 'scale-100' : 'scale-110'}`}
              loading="lazy"
            />
          </div>
          
          {/* Content Section */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="inline-block">
              <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium">
                {featuredArticle.category}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-grazia font-bold leading-tight">
              {featuredArticle.title}
            </h2>
            
            <p className="text-lg lg:text-xl text-magazine-black/80 leading-relaxed">
              {featuredArticle.subtitle}
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-block px-8 py-3 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover transition-colors duration-300"
              >
                Leggi l'articolo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
