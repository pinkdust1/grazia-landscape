
import React from 'react';

const ProductInfo: React.FC = () => {
  const benefits = [
    {
      title: "Supporta la Digestione",
      description: "I probiotici naturali aiutano a migliorare la digestione e a ridurre il gonfiore addominale."
    },
    {
      title: "Potenzia il Metabolismo",
      description: "Formula avanzata che stimola il metabolismo per facilitare la perdita di peso."
    },
    {
      title: "Incrementa l'Energia",
      description: "Aumenta i livelli di energia e migliora la vitalità quotidiana."
    },
    {
      title: "Migliora l'Equilibrio Intestinale",
      description: "Ripristina la flora batterica intestinale per un benessere ottimale."
    }
  ];

  return (
    <section className="py-16 bg-magazine-gray">
      <div className="magazine-container">
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium inline-block mb-4">
            Esclusivo
          </span>
          <h2 className="text-4xl lg:text-5xl font-grazia font-bold mb-4">Keto Probiotix</h2>
          <p className="text-lg font-sans max-w-2xl mx-auto">
            La rivoluzione italiana nel mondo del benessere e della forma fisica. Una formula unica che combina i benefici della chetosi con potenti probiotici.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-container overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Keto Probiotix product" 
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-grazia font-bold mb-3">La Scienza Dietro Keto Probiotix</h3>
              <p className="text-magazine-black/80">
                Keto Probiotix è il risultato di anni di ricerca scientifica italiana, combinando gli effetti benefici della dieta chetogenica con probiotici avanzati per ottimizzare la salute intestinale e supportare la perdita di peso in modo naturale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="border-l-4 border-magazine-yellow pl-4 reveal-container"
                >
                  <h4 className="text-xl font-grazia font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-magazine-black/80">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="#order-form" 
                className="inline-block px-8 py-3 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover transition-colors duration-300"
              >
                Scopri i Benefici
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
