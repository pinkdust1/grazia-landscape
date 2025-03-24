
import React, { useState, useEffect } from 'react';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Tendenze Primavera/Estate",
    excerpt: "I colori e gli stili che domineranno la moda nei prossimi mesi",
    category: "Moda",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "23 Maggio, 2023"
  },
  {
    id: 2,
    title: "Bellezza Naturale",
    excerpt: "I migliori prodotti organici per una routine di bellezza sostenibile",
    category: "Bellezza",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "20 Maggio, 2023"
  },
  {
    id: 3,
    title: "Stile di Vita Mediterraneo",
    excerpt: "Come incorporare la filosofia mediterranea nella vita quotidiana",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "18 Maggio, 2023"
  }
];

const ArticlePreview: React.FC = () => {
  const [visibleArticles, setVisibleArticles] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleArticles(prev => [...prev, id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.article-container').forEach(articleEl => {
      observer.observe(articleEl);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="py-16 bg-magazine-light-gray">
      <div className="magazine-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-grazia font-bold uppercase tracking-wide inline-block relative">
            Articoli in Evidenza
            <span className="absolute left-0 bottom-0 w-full h-1 bg-magazine-yellow"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              data-id={article.id}
              className={`article-container bg-white shadow-sm transition-all duration-700 transform ${
                visibleArticles.includes(article.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-wider font-medium text-magazine-black/60">
                    {article.category}
                  </span>
                  <span className="text-xs text-magazine-black/60">
                    {article.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-grazia font-bold mb-3">
                  {article.title}
                </h3>
                
                <p className="text-magazine-black/80 mb-4">
                  {article.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-block text-sm uppercase tracking-wider font-medium border-b-2 border-magazine-yellow pb-1 hover:text-magazine-yellow transition-colors duration-300"
                >
                  Continua a leggere
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-transparent border-2 border-magazine-black text-magazine-black font-medium uppercase tracking-wider text-sm hover:bg-magazine-black hover:text-white transition-colors duration-300"
          >
            Vedi tutti gli articoli
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlePreview;
