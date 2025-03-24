
import React, { useState } from 'react';
import { StarIcon, User, MessageSquare } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  imageUrl: string;
  replies: Reply[];
};

type Reply = {
  id: number;
  name: string;
  text: string;
  date: string;
};

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sofia Bianchi",
    location: "Milano",
    text: "Ho provato Keto Probiotix dopo aver letto l'articolo su Grazia e i risultati sono stati incredibili. In sole tre settimane ho perso 4 kg e mi sento molto più energica!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    replies: [
      {
        id: 1,
        name: "Rappresentante Keto Probiotix",
        text: "Grazie per la tua testimonianza Sofia! Siamo felici che tu abbia ottenuto risultati così positivi.",
        date: "1 giorno fa"
      }
    ]
  },
  {
    id: 2,
    name: "Francesca Romano",
    location: "Roma",
    text: "Keto Probiotix ha cambiato completamente il mio rapporto con il cibo. Mi sento meno gonfia e ho molta più energia durante il giorno. Lo consiglio vivamente!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    replies: []
  },
  {
    id: 3,
    name: "Elena Verdi",
    location: "Firenze",
    text: "Ero scettica all'inizio, ma dopo un mese di utilizzo di Keto Probiotix posso dire che è davvero efficace. Ho perso peso e la mia digestione è migliorata notevolmente.",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    replies: []
  },
  {
    id: 4,
    name: "Laura Martini",
    location: "Napoli",
    text: "Da quando ho iniziato ad usare Keto Probiotix, ho notato un miglioramento nella mia energia quotidiana e nella mia capacità di concentrazione. Il mio metabolismo sembra funzionare meglio!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    replies: [
      {
        id: 1,
        name: "Marco Bianchi",
        text: "Anche io ho avuto la stessa esperienza! Keto Probiotix è fantastico.",
        date: "3 giorni fa"
      }
    ]
  }
];

const CombinedFeedback: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !name.trim()) {
      toast({
        title: "Errore",
        description: "Per favore inserisci sia il tuo nome che un commento.",
        variant: "destructive"
      });
      return;
    }
    
    const comment: Testimonial = {
      id: Math.max(0, ...testimonials.map(t => t.id)) + 1,
      name: name,
      location: "Italia",
      text: newComment,
      rating: rating,
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      replies: []
    };
    
    setTestimonials([comment, ...testimonials]);
    setNewComment('');
    setName('');
    setRating(5);
    
    toast({
      title: "Recensione pubblicata",
      description: "La tua recensione è stata pubblicata con successo.",
    });
  };
  
  const handleAddReply = (testimonialId: number, e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyText.trim()) {
      toast({
        title: "Errore",
        description: "Per favore inserisci un commento di risposta.",
        variant: "destructive"
      });
      return;
    }
    
    const newReply: Reply = {
      id: Date.now(),
      name: name || "Utente Anonimo",
      text: replyText,
      date: "Appena pubblicato"
    };
    
    setTestimonials(
      testimonials.map(testimonial => 
        testimonial.id === testimonialId 
          ? { ...testimonial, replies: [...testimonial.replies, newReply] } 
          : testimonial
      )
    );
    
    setReplyingTo(null);
    setReplyText('');
    
    toast({
      title: "Risposta pubblicata",
      description: "La tua risposta è stata pubblicata con successo.",
    });
  };
  
  return (
    <section className="py-16 bg-magazine-light-gray">
      <div className="magazine-container">
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium inline-block mb-4">
            Recensioni
          </span>
          <h2 className="text-4xl lg:text-5xl font-grazia font-bold mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-lg font-sans max-w-2xl mx-auto">
            Scopri le esperienze reali di chi ha provato Keto Probiotix
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Add review form */}
          <div className="bg-white shadow-sm p-6 mb-8">
            <h3 className="text-xl font-grazia font-bold mb-4">
              Lascia una recensione
            </h3>
            
            <form onSubmit={handleAddComment} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Valutazione
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1"
                    >
                      <StarIcon 
                        className={`w-6 h-6 ${star <= rating ? 'fill-magazine-yellow text-magazine-yellow' : 'text-gray-300'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Recensione
                </label>
                <textarea
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300 resize-none"
                  placeholder="La tua recensione"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover relative overflow-hidden transition-all duration-300 hover:text-magazine-black"
                >
                  Pubblica
                </button>
              </div>
            </form>
          </div>
          
          {/* Testimonials list */}
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white shadow-sm p-6 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-xs text-magazine-black/60">{testimonial.location}</p>
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
                
                <p className="text-magazine-black/80 mb-4">
                  {testimonial.text}
                </p>
                
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setReplyingTo(replyingTo === testimonial.id ? null : testimonial.id)}
                    className="flex items-center text-sm text-magazine-black/60 hover:text-magazine-black transition-colors duration-300"
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>Rispondi</span>
                  </button>
                </div>
                
                {/* Replies */}
                {testimonial.replies.length > 0 && (
                  <div className="pl-6 border-l-2 border-magazine-yellow mt-4 space-y-4">
                    {testimonial.replies.map(reply => (
                      <div key={reply.id} className="bg-magazine-light-gray p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-magazine-black/10 rounded-full p-2 mr-3">
                            <User size={16} className="text-magazine-black/70" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">{reply.name}</h5>
                            <p className="text-xs text-magazine-black/60">{reply.date}</p>
                          </div>
                        </div>
                        <p className="text-sm text-magazine-black/80">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Reply Form */}
                {replyingTo === testimonial.id && (
                  <div className="mt-4 pl-6 border-l-2 border-magazine-yellow">
                    <form onSubmit={(e) => handleAddReply(testimonial.id, e)} className="bg-magazine-light-gray p-4">
                      <label htmlFor={`reply-${testimonial.id}`} className="block text-sm font-medium mb-2">
                        Rispondi a {testimonial.name}
                      </label>
                      <textarea
                        id={`reply-${testimonial.id}`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300 resize-none bg-white mb-3"
                        placeholder="La tua risposta"
                      ></textarea>
                      
                      <div className="flex justify-end space-x-2">
                        <button
                          type="button"
                          onClick={() => setReplyingTo(null)}
                          className="px-4 py-1 border border-magazine-black/20 text-magazine-black/70 text-sm"
                        >
                          Annulla
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1 bg-magazine-black text-white text-sm"
                        >
                          Rispondi
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedFeedback;
