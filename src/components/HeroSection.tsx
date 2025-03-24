
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
    title: "L'Arte del Benessere Italiano",
    subtitle: "Scopri come Keto Probiotix sta rivoluzionando il mondo del wellness",
    category: "Salute",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };

  const modelImages = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  ];

  return (
    <section className="pt-28 lg:pt-32 pb-16">
      <div className="magazine-container">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Image Section */}
          <div className={`lg:col-span-5 reveal-container ${isVisible ? 'reveal' : ''} overflow-hidden h-[500px] lg:h-[600px]`}>
            <img 
              src={featuredArticle.imageUrl} 
              alt={featuredArticle.title} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isVisible ? 'scale-100' : 'scale-110'}`}
              loading="lazy"
            />
          </div>
          
          {/* Content Section */}
          <div className={`lg:col-span-4 space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
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
                href="#order-form" 
                className="inline-block px-8 py-3 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover transition-colors duration-300"
              >
                Scopri di più
              </a>
            </div>
          </div>
          
          {/* Horizontal Photo Collage with Yellow Background */}
          <div className={`lg:col-span-3 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-magazine-yellow p-3 grid grid-cols-3 gap-2">
              {modelImages.map((img, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden aspect-[3/4]"
                >
                  <img 
                    src={img} 
                    alt={`Model ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
