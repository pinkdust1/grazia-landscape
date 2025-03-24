
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sofia Bianchi",
      location: "Milano",
      text: "Ho provato Keto Probiotix dopo aver letto l'articolo su Grazia e i risultati sono stati incredibili. In sole tre settimane ho perso 4 kg e mi sento molto più energica!",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 2,
      name: "Francesca Romano",
      location: "Roma",
      text: "Keto Probiotix ha cambiato completamente il mio rapporto con il cibo. Mi sento meno gonfia e ho molta più energia durante il giorno. Lo consiglio vivamente!",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 3,
      name: "Elena Verdi",
      location: "Firenze",
      text: "Ero scettica all'inizio, ma dopo un mese di utilizzo di Keto Probiotix posso dire che è davvero efficace. Ho perso peso e la mia digestione è migliorata notevolmente.",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 4,
      name: "Laura Martini",
      location: "Napoli",
      text: "Da quando ho iniziato ad usare Keto Probiotix, ho notato un miglioramento nella mia energia quotidiana e nella mia capacità di concentrazione. Il mio metabolismo sembra funzionare meglio!",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ];

  return (
    <section className="py-16">
      <div className="magazine-container">
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium inline-block mb-4">
            Testimonianze
          </span>
          <h2 className="text-4xl lg:text-5xl font-grazia font-bold mb-4">Cosa Dicono i Nostri Lettori</h2>
          <p className="text-lg font-sans max-w-2xl mx-auto">
            Abbiamo raccolto le testimonianze di chi ha provato Keto Probiotix dopo aver letto il nostro articolo
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="border border-magazine-black/10 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-grazia font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-magazine-black/60">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-magazine-yellow text-magazine-yellow' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="italic text-magazine-black/80 flex-grow">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
            <CarouselNext className="relative static ml-2 translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
